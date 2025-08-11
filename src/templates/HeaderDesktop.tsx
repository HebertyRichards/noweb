"use client";

import { useState } from "react";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/utils/exemples";

export function HeaderDesktop() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const renderNavElement = (link: (typeof navLinks)[0]) => {
    const isDropdown = link.hasDropdown;
    const isActive = link.active;

    if (isDropdown) {
      return (
        <DropdownMenu
          onOpenChange={(isOpen) => setOpenDropdown(isOpen ? link.name : null)}
        >
          <DropdownMenuTrigger asChild>
            <button
              className={`relative flex items-center gap-1 text-base font-medium transition-colors hover:text-lime-300 ${
                isActive ? "text-lime-500" : "text-gray-700"
              }`}
            >
              {link.name} <ChevronDown className="h-4 w-4" />
              {(openDropdown === link.name || isActive) && (
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
          <div className="p-2 border border-gray-200 rounded-md">
            <Search className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 cursor-pointer" />
          </div>
          <Button className="bg-lime-300 text-black px-4 lg:px-6 py-2 lg:py-3 font-semibold text-sm lg:text-basee">
            Get A Quote <ArrowRight className="ml-2 h-5 w-5 text-black" />
          </Button>
        </div>
      </div>
    </header>
  );
}
