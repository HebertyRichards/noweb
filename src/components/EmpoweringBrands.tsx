import { ArrowRight, Asterisk, Code, Shuffle, PenTool } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ category, title, description, icon: Icon }) => {
  return (
    <div className="p-8 border rounded-2xl bg-white border-gray-200 hover:border-lime-400 transition-colors duration-300">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gray-800"></span>
        <p className="font-semibold text-sm text-gray-600">{category}</p>
      </div>
      <h3 className="font-serif text-3xl mt-4 text-gray-900">{title}</h3>
      <div className="my-8">
        <Icon className="h-12 w-12 text-gray-800" />
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="flex justify-end mt-6">
        <button className="h-14 w-14 rounded-full flex items-center justify-center border-2 border-gray-300 text-gray-400 hover:bg-lime-400 hover:text-black transition-colors duration-300">
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export function EmpoweringBrands() {
  const cardDescription = "Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate";

  return (
    <section className="bg-gray-50 py-28">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="hidden lg:block">
            <Asterisk className="w-32 h-32 text-gray-200 animate-spin-slow" />
          </div>
          <div className="lg:mt-8">
            <div className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-4 py-1">
              <span className="h-2 w-2 rounded-full bg-gray-800"></span>
              <p className="font-semibold text-sm text-gray-700">SERVICES</p>
            </div>
            <h2 className="font-serif text-5xl font-bold mt-4 text-gray-900 max-w-2xl">
              Empowering Brands Through Strategic Digital Services
            </h2>
            <p className="text-gray-600 mt-6 max-w-xl leading-relaxed">
              Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate Team Of Designers.
            </p>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            category="Visual Branding"
            title="Web Design And Development"
            description={cardDescription}
            icon={Code}
          />
          <ServiceCard 
            category="Brand Strategy"
            title="Branding And Creative Services"
            description={cardDescription}
            icon={Shuffle}
          />
          <ServiceCard 
            category="Identity Build"
            title="Creative Digital Agency"
            description={cardDescription}
            icon={PenTool}
          />
        </div>
      </div>
    </section>
  );
}