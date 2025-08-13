export function CollaborationSection() {
  return (
    <section className="bg-black text-gray-200 py-28">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="relative">
          <h2 className="font-[Gallery-Modern] text-4xl md:text-5xl max-w-4xl leading-tight">
            We Collaborate With A Few Disability Service Providers To Create
            Inclusive Goods That Meet Their Requirements.
          </h2>
          <div className="absolute top-0 right-0 hidden md:block">
            <div className="relative h-20 w-20">
              <img
                src="/Ellipses.svg"
                alt="Slogan Item"
                className="h-23 w-23"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col justify-center">
            <p className="font-serif text-7xl font-bold text-white">25+</p>
            <p className="text-gray-400 mt-2">Years Of Experience</p>
          </div>
          <div className="pl-8">
            <p className="text-gray-300 leading-relaxed">
              Established in 1995, NEXIN Has Been A Leading Force In The Digital
              Landscape For Over Two Decades. We're A Passionate Team Of
              Designers,
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold mt-6 text-white hover:text-brand-green underline underline-offset-4"
            >
              More About Us ↗
            </a>
          </div>
          <div className="pl-8">
            <p className="text-gray-300 leading-relaxed">
              Established in 1995, NEXIN Has Been A Leading Force In The Digital
              Landscape For Over Two Decades. We're A Passionate Team Of
              Designers,
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold mt-6 text-white hover:text-brand-green underline underline-offset-4"
            >
              Get In Touch ↗
            </a>
          </div>
        </div>
        <div className="mt-32 text-center">
          <h3 className="flex items-center gap-x-4 text-white tracking-widest font-semibold">
            <span className="shrink-0 font-[Gallery-Modern]">
              We Worked With Global Largest Brands
            </span>
            <hr className="w-full border-gray-600" />
          </h3>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
            <img src="Group.svg" alt="SLOGAN HERE" className="h-50 w-50" />
            <img src="Group2.svg" alt="SLOGAN HERE" className="h-50 w-50" />
            <img src="Group3.svg" alt="SLOGAN HERE" className="h-50 w-50" />
            <img src="Group4.svg" alt="SLOGAN HERE" className="h-50 w-50" />
            <img src="Group5.svg" alt="SLOGAN HERE" className="h-50 w-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
