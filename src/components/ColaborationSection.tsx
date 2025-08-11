import {
  ArrowRight,
  CircuitBoard,
  Cpu,
  Layers,
  GitBranch,
  Share2,
} from "lucide-react";

const BrandLogo = ({
  icon: Icon,
  text,
  slogan,
}: {
  icon: React.ElementType;
  text: string;
  slogan?: string;
}) => (
  <div className="flex items-center gap-4 text-gray-500 hover:text-white transition-colors duration-300">
    <Icon className="h-10 w-10" />
    <div>
      <p className="font-bold text-lg tracking-wider">{text}</p>
      {slogan && <p className="text-sm tracking-widest">{slogan}</p>}
    </div>
  </div>
);

export function CollaborationSection() {
  return (
    <section className="bg-black text-gray-200 py-28">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="relative">
          <h2 className="font-serif text-4xl md:text-5xl max-w-4xl leading-tight">
            We Collaborate With A Few Disability Service Providers To Create
            Inclusive Goods That Meet Their Requirements.
          </h2>
          <div className="absolute top-0 right-0 hidden md:block">
            <div className="relative h-20 w-20">
              <div className="absolute top-0 left-0 h-16 w-16 border-2 border-gray-700 rounded-full"></div>
              <div className="absolute top-2 left-6 h-16 w-16 border-2 border-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col justify-center">
            <p className="font-serif text-7xl font-bold text-white">25+</p>
            <p className="text-gray-400 mt-2">Years Of Experience</p>
          </div>
          <div className="border-l border-gray-800 pl-8">
            <p className="text-gray-300 leading-relaxed">
              Established in 1995, NEXIN Has Been A Leading Force In The Digital
              Landscape For Over Two Decades. We're A Passionate Team Of
              Designers,
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold mt-6 text-white hover:text-brand-green"
            >
              More About Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="border-l border-gray-800 pl-8">
            <p className="text-gray-300 leading-relaxed">
              Established in 1995, NEXIN Has Been A Leading Force In The Digital
              Landscape For Over Two Decades. We're A Passionate Team Of
              Designers,
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold mt-6 text-white hover:text-brand-green"
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-32 text-center">
          <h3 className="text-gray-500 tracking-widest font-semibold">
            We Worked With Global Largest Brands
          </h3>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
            <BrandLogo
              icon={CircuitBoard}
              text="TECH LOGO"
              slogan="SLOGAN HERE"
            />
            <BrandLogo icon={Cpu} text="TECHNOLOGY" slogan="SLOGAN HERE" />
            <BrandLogo icon={Layers} text="TECHNOLOGY" slogan="SLOGAN HERE" />
            <BrandLogo
              icon={GitBranch}
              text="TECHNOLOGY"
              slogan="SLOGAN HERE"
            />
            <BrandLogo icon={Share2} text="SYSTEM" slogan="TECHNOLOGY" />
          </div>
        </div>
      </div>
    </section>
  );
}
