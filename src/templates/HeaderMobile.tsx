"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Menu, X, ArrowRight, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/utils/exemples";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<AddressData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCepSearch = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setAddress(null);
    const sanitizedCep = cep.replace(/\D/g, "");

    if (sanitizedCep.length !== 8) {
      setError("CEP inválido. Por favor, digite 8 números.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${sanitizedCep}/json/`
      );
      const data = await response.json();
      if (data.erro) {
        setError("CEP não encontrado.");
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch (error: unknown) {
      let errorMessage = "Falha ao buscar o CEP. Tente novamente.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const renderNavElement = (link: (typeof navLinks)[0]) => {
    const { name, href, hasDropdown, items } = link;

    if (hasDropdown) {
      return (
        <DropdownMenu
          onOpenChange={(isOpen) => setOpenDropdown(isOpen ? name : null)}
        >
          <DropdownMenuTrigger asChild>
            <button
              className={
                "relative w-full flex justify-between items-center text-lg font-medium py-2 transition-colors hover:text-lime-500"
              }
            >
              <span>{name}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openDropdown === name ? "rotate-180" : ""
                }`}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            {items?.map((item) => (
              <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <a
        href={href}
        className={
          "relative block text-lg font-medium py-2 transition-colors hover:text-lime-500"
        }
      >
        {name}
        (
        <span className="absolute left-0 bottom-1 h-0.5 w-1/4 bg-lime-400" />)
      </a>
    );
  };

  return (
    <header className="bg-white py-4 px-4 sm:px-8 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-lime-300 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm italic -rotate-12 select-none"></span>
          </div>
          <span className="text-3xl font-bold font-serif text-gray-800">
            NEX
          </span>
        </a>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-2 border border-gray-200 rounded-md">
                <Search className="h-6 w-6 text-gray-700 cursor-pointer" />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Buscar Endereço por CEP</DialogTitle>
                <DialogDescription>
                  Digite um CEP para encontrar o endereço.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCepSearch} className="grid gap-4 py-4">
                <div className="flex gap-2">
                  <Input
                    id="cep-mobile"
                    placeholder="Ex: 01001-000"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-lime-300 text-black hover:bg-lime-200"
                  >
                    {isLoading ? "Buscando..." : "Buscar"}
                  </Button>
                </div>
              </form>
              <div className="mt-4 min-h-[120px]">
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {address && (
                  <div className="space-y-1 text-sm p-4 bg-slate-50 rounded-md border">
                    <p>
                      <strong>Logradouro:</strong> {address.logradouro}
                    </p>
                    <p>
                      <strong>Bairro:</strong> {address.bairro}
                    </p>
                    <p>
                      <strong>Cidade:</strong> {address.localidade}
                    </p>
                    <p>
                      <strong>Estado:</strong> {address.uf}
                    </p>
                    <p>
                      <strong>CEP:</strong> {address.cep}
                    </p>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 p-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>{renderNavElement(link)}</div>
            ))}
            <Button className="w-full mt-4 bg-lime-300 text-black hover:bg-lime-400 rounded-lg py-3 font-semibold">
              Get A Quote <ArrowRight className="ml-2 h-5 w-5 text-black" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
