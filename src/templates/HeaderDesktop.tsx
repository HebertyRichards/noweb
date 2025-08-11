"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { navLinks } from "@/utils/exemples";

export function HeaderDesktop() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<AddressData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const digitsOnly = inputValue.replace(/\D/g, "");
    const limitedDigits = digitsOnly.slice(0, 8);
    let formattedCep = limitedDigits;
    if (limitedDigits.length > 5) {
      formattedCep = `${limitedDigits.slice(0, 5)}-${limitedDigits.slice(5)}`;
    }
    setCep(formattedCep);
  };

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
    const isDropdown = link.hasDropdown;

    if (isDropdown) {
      return (
        <DropdownMenu
          onOpenChange={(isOpen) => setOpenDropdown(isOpen ? link.name : null)}
        >
          <DropdownMenuTrigger asChild>
            <button
              className={
                "relative flex items-center gap-1 text-base font-medium transition-colors hover:text-lime-300"
              }
            >
              {link.name} <ChevronDown className="h-4 w-4" />
              {(openDropdown === link.name) && (
                <span className="absolute left-0 -bottom-3 h-0.5 w-full bg-lime-300 rounded-full" />
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {link.items?.map((item) => (
              <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <a
        href={link.href}
        className="text-sm font-medium transition-colors text-gray-700 hover:text-lime-300"
      >
        {link.name}
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
          <span className="text-2xl lg:text-4xl font-bold font-serif text-gray-800">
            NEX
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 pb-3 pt-2">
          {navLinks.map((link) => renderNavElement(link))}
        </nav>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-2 border border-gray-200 rounded-md">
                <Search className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 cursor-pointer" />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Buscar Endereço por CEP</DialogTitle>
                <DialogDescription>
                  Digite um CEP para encontrar o endereço. Você pode pesquisar
                  quantas vezes quiser.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCepSearch} className="grid gap-4 py-4">
                <div className="flex gap-2">
                  <Input
                    id="cep"
                    placeholder="Ex: 01001-000"
                    value={cep}
                    onChange={handleCepChange}
                    maxLength={9}
                    className="flex-1"
                  />
                  <Button
                    className="bg-lime-300 text-black cursor-pointer hover:bg-lime-200"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Buscando..." : "Buscar"}
                  </Button>
                </div>
              </form>
              <div className="mt-4">
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {address && (
                  <div className="space-y-1 text-sm p-4 bg-slate-50 rounded-md border">
                    <p>
                      <strong>Logradouro:</strong> {address.logradouro}
                    </p>
                    {address.complemento && (
                      <p>
                        <strong>Complemento:</strong> {address.complemento}
                      </p>
                    )}
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
          <Button className="bg-lime-300 text-black px-4 lg:px-6 py-2 lg:py-3 font-semibold text-sm lg:text-basee hover:bg-lime-400">
            Get A Quote <ArrowRight className="ml-2 h-5 w-5 text-black" />
          </Button>
        </div>
      </div>
    </header>
  );
}
