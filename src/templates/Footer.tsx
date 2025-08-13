import React from "react";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="hover:text-gray-900 transition-colors">
    {children}
  </a>
);

export function Footer() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-8 py-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <h2 className="font-[Gallery-Modern] text-3xl md:text-6xl font-bold leading-tight">
                Let's Create
                <br />
                Something Great
              </h2>
              <p className="mt-4">
                We Shift From Today's Reality To Tomorrow's Potential, Ensuring
              </p>
            </div>
            <a
              href="#"
              className="h-40 w-40 bg-lime-300 rounded-full flex-shrink-0 flex items-center justify-center text-center text-black font-bold text-lg hover:bg-lime-400 transition-colors group"
            >
              <span className="flex items-center gap-2">Let's Talk</span>
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
              <img
                src="/facebook.svg"
                alt="Rede Social Icon"
                className="h-auto w-auto"
              />
              <img
                src="/twitter.svg"
                alt="Rede Social Icon"
                className="h-auto w-auto"
              />
              <img
                src="/instagram.svg"
                alt="Rede Social Icon"
                className="h-auto w-auto"
              />
              <img
                src="/benance.svg"
                alt="Rede Social Icon"
                className="h-auto w-auto"
              />
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
