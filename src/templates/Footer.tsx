import { ArrowRight, Facebook, Twitter, Instagram } from "lucide-react";
import React from "react";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    {children}
  </a>
);

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) => (
  <a
    href={href}
    className="text-gray-500 hover:text-gray-900 transition-colors"
  >
    <Icon className="h-6 w-6" />
  </a>
);

export function Footer() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-8 py-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <h2 className="font-serif text-3xl md:text-6xl font-bold leading-tight">
                Let's Create
                <br />
                Something Great
              </h2>
              <p className="mt-4 text-gray-400 max-w-md">
                We Shift From Today's Reality To Tomorrow's Potential, Ensuring
              </p>
            </div>
            <a
              href="#"
              className="h-40 w-40 bg-lime-300 rounded-full flex-shrink-0 flex items-center justify-center text-center text-black font-bold text-lg hover:bg-lime-400 transition-colors group"
            >
              <span className="flex items-center gap-2">
                Let's Talk{" "}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-white">
        <div className="container mx-auto px-4 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-semibold">
              <FooterLink href="#">About Company</FooterLink>
              <FooterLink href="#">Our Careers</FooterLink>
              <FooterLink href="#">Services</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </nav>
            <nav className="flex gap-x-6 gap-y-2 font-semibold">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
            </nav>
          </div>
          <hr className="my-8 border-gray-200" />
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <SocialIcon href="#" icon={Facebook} />
              <SocialIcon href="#" icon={Twitter} />
              <SocialIcon href="#" icon={Instagram} />
            </div>
            <p className="text-sm text-gray-500">
              Copyright © 2025 Nex. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
