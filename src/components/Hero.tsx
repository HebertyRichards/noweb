export function Hero() {
  return (
    <>
      <main className="container mx-auto px-4 sm:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-gray-500 font-medium">Great Design Services</p>
            <p className="text-gray-400 font-medium mb-6">
              Without The Pretentiousness.!!
            </p>
            <div className="flex flex-col items-center lg:items-start">
              <h1 className='text-2xl sm:text-4xl lg:text-[10rem] font-["Gallery_Modern"] font-bold text-gray-800 leading-none tracking-tight'>
                Digital
              </h1>
              <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-12 mt-4">
                <div className="flex items-center">
                  <div className="bg-lime-300 text-black font-bold py-6 pl-8 pr-11 m-3 rounded-2xl text-lg tracking-wider shrink-0">
                    WEB DESIGN
                  </div>
                  <div className="h-20 w-20 rounded-2xl bg-black flex items-center justify-center shrink-0 z-10 -ml-7">
                    <img
                      src="/Avatar.svg"
                      alt="Web Design Icon"
                      className="h-10 w-10"
                    />
                  </div>
                </div>
                <h1 className='text-2xl sm:text-4xl lg:text-[10rem] font-["Gallery_Modern"] font-bold text-gray-800 leading-none tracking-tight'>
                  Solution
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-y-10 lg:gap-x-16">
            <div className="max-w-md flex flex-col gap-y-4">
              <p className="text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                We Believe That The Surest Measure Of Success Is When Our
                Partners With Us More Than Half It’s More Than Just The Visuals.
                We're Here To Support Your Growth.
              </p>
              <a
                href="#"
                className="self-center lg:self-end font-semibold text-gray-800 hover:text-gray-900 transition-colors text-lg underline underline-offset-[6px]"
              >
                View All Services ↗
              </a>
            </div>
            <div className="w-full lg:w-auto flex justify-center">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-full lg:w-auto flex justify-center">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="flex -space-x-4 mb-2 rounded-full border border-black p-2">
                      <img
                        className="inline-block h-10 w-10 rounded-full border-2 border-white"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop"
                        alt="Reviewer 1"
                      />
                      <img
                        className="inline-block h-10 w-10 rounded-full border-2 border-white"
                        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop"
                        alt="Reviewer 2"
                      />
                      <img
                        className="inline-block h-10 w-10 rounded-full border-2 border-white"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop"
                        alt="Reviewer 3"
                      />
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                        15K+
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-sm">
                        Excellent
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-bold text-gray-800">4,000+</span>{" "}
                        Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full">
        <img
          src="image.svg"
          alt="Team working on a whiteboard"
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </>
  );
}
