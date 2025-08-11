import { useState } from "react";
import { ChevronDown, Search, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  {
    name: "Home",
    href: "#",
    active: true,
    hasDropdown: true,
    items: ["Homepage V1", "Homepage V2"],
  },
  { name: "About Us", href: "#" },
  {
    name: "Portfolio",
    href: "#",
    hasDropdown: true,
    items: ["Portfolio V1", "Portfolio V2"],
  },
  {
    name: "Pages",
    href: "#",
    hasDropdown: true,
    items: ["Pages V1", "Pages V2"],
  },
  { name: "Blog", href: "#", hasDropdown: true, items: ["Blog V1", "Blog V2"] },
  { name: "Contact Us", href: "#" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              className={`relative flex items-center gap-1 text-base font-medium transition-colors hover:text-brand-green ${
                isActive ? "text-brand-green" : "text-gray-700"
              }`}
            >
              {link.name} <ChevronDown className="h-4 w-4" />
              {(openDropdown === link.name || isActive) && (
                <span className="absolute left-0 -bottom-3 h-0.5 w-full bg-brand-green rounded-full" />
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
        className="text-base font-medium transition-colors text-gray-700 hover:text-brand-green"
      >
        {link.name}
      </a>
    );
  };

  return (
    <header className="bg-white py-4 px-4 sm:px-8 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-brand-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm italic -rotate-12 select-none">
              di
            </span>
          </div>
          <span className="text-4xl font-bold font-serif text-gray-800">
            NEX
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 pb-3 pt-2">
          {navLinks.map((link) => renderNavElement(link))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="p-2 border border-gray-200 rounded-md">
            <Search className="h-6 w-6 text-gray-700 cursor-pointer" />
          </div>

          <Button className="bg-lime-300 text-black cursor-pointer hover:bg-lime-200 rounded-lg px-6 py-3 font-semibold">
            Get A Quote <ArrowRight className="ml-2 h-5 w-5 text-brand-green" />
          </Button>
        </div>

        <div className="lg:hidden">
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
                  link.active ? "text-brand-green" : "text-gray-800"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-semibold">
              Get A Quote{" "}
              <ArrowRight className="ml-2 h-5 w-5 text-brand-green" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
