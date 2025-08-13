import { ArrowRight, ArrowDownRight } from "lucide-react";
import React, { useState } from "react";

const ServiceCard: React.FC<ServiceCardProps> = ({
  category,
  title,
  description,
  imgSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-8 border rounded-2xl bg-white border-gray-200 hover:border-lime-300 transition-colors duration-300 flex flex-col h-[480px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-800"></span>
          <p className="font-semibold text-sm text-gray-600">{category}</p>
        </div>
        <h3 className="font-serif text-3xl mt-4 text-gray-900">{title}</h3>
        <div className="my-8">
          <img src={imgSrc} alt={title} className="h-12 w-12 text-gray-800" />
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="flex justify-end -mb-7 -mr-7">
        <button className="h-14 w-14 rounded-full flex items-center justify-center border-2 border-gray-300 text-gray-400 bg-white hover:bg-lime-300 hover:border-lime-300 hover:text-black transition-colors duration-300">
          {isHovered ? (
            <ArrowRight className="h-6 w-6" />
          ) : (
            <ArrowDownRight className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export function EmpoweringBrands() {
  const cardDescription =
    "Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate";

  return (
    <section className="bg-gray-50 py-28 relative">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="absolute top-16 left-10 hidden lg:block">
          <img src="/Asterisk.svg" alt="Asterick" className="h-20 w-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1">
              <span className="h-2 w-2 rounded-full bg-gray-800"></span>
              <p className="font-semibold text-sm text-gray-600">SERVICES</p>
            </div>
            <h2 className="font-serif text-4xl font-bold mt-4 text-gray-900 max-w-2xl">
              Empowering Brands Through Strategic Digital Services
            </h2>
            <p className="text-gray-600 mt-6 max-w-xl leading-relaxed">
              Established in 1995, NEXIN Has Been A Leading Force In The Digital
              Landscape For Over Two Decades. We're A Passionate Team Of
              Designers.
            </p>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            category="Visual Branding"
            title="Web Design And Development"
            description={cardDescription}
            imgSrc="/Vector1.svg"
          />
          <ServiceCard
            category="Brand Strategy"
            title="Branding And Creative Services"
            description={cardDescription}
            imgSrc="/Vector2.svg"
          />
          <ServiceCard
            category="Identity Build"
            title="Creative Digital Agency"
            description={cardDescription}
            imgSrc="/Vector3.svg"
          />
        </div>
      </div>
    </section>
  );
}
