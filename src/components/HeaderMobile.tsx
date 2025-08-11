"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About Us", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Pages", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact Us", href: "#" },
];

export function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-4 sm:px-8 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-lime-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm italic -rotate-12 select-none"></span>
          </div>
          <span className="text-4xl font-bold font-serif text-gray-800">
            NEX
          </span>
        </a>
        <div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4 p-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.name}
                className={`text-lg font-medium ${
                  link.active ? "text-lime-500" : "text-gray-800"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-lime-400 w-full mt-4 text-white hover:bg-gray-800 rounded-lg py-3 font-semibold">
              Get A Quote <ArrowRight className="ml-2 h-5 w-5 text-black" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
