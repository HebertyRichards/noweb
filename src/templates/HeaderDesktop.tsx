"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [activeLink, setActiveLink] = useState("Home");

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
    const baseClasses =
      "flex items-center gap-1 px-1 pt-1 font-medium transition-all duration-300 ease-in-out text-sm lg:text-base";

    if (link.hasDropdown) {
      const isActive = activeLink === link.name;
      return (
        <button
          key={link.name}
          onClick={() => setActiveLink(link.name)}
          className={`relative ${baseClasses} ${
            isActive
              ? "text-lime-300 -translate-y-1"
              : "text-gray-700 hover:text-lime-300"
          }`}
        >
          {link.name}
          <ChevronDown className="h-4 w-4" />
          <span
            className={`absolute left-0 -bottom-2 h-0.5 w-full rounded-full bg-lime-300 transition-opacity duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      );
    }

    return (
      <a
        key={link.name}
        href={link.href}
        className={`${baseClasses} text-gray-700 transition-colors hover:text-lime-300`}
      >
        {link.name}
      </a>
    );
  };

  return (
    <header className="bg-white py-4 px-4 sm:px-8 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/Vector.svg"
            alt="NEX logo"
            className="h-8 w-8 lg:h-10 lg:w-10"
          />
          <img
            src="/Nexin.svg"
            alt="NEX text"
            className="h-16 w-16 lg:h-20 lg:w-20"
          />
        </a>
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 pb-3 pt-2">
          {navLinks.map((link) => renderNavElement(link))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-2 border border-gray-200 rounded-md lg:p-4">
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
          <Button
            variant="default"
            className="bg-lime-300 text-black rounded-none font-semibold text-sm lg:text-base hover:bg-lime-400 px-5 py-5 lg:px-7 lg:py-7"
          >
            Get A Quote ↗
          </Button>
        </div>
      </div>
    </header>
  );
}
