import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export function Hero() {
  return (
    <>
      <main className="container mx-auto px-4 sm:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-gray-500 font-medium">Great Design Services</p>
            <p className="text-gray-400 font-medium mb-6">
              Without The Pretentiousness.!!
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif font-bold text-gray-800 leading-none">
              Digital
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-5">
              <div className="bg-lime-300 text-black font-bold py-4 px-8 rounded-full text-lg sm:text-xl tracking-wider shrink-0">
                WEB DESIGN
              </div>

              <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border-4 border-white shrink-0">
                <AvatarImage src="" alt="Web Design Avatar" />
                <AvatarFallback className="bg-black">
                  <User className="h-10 w-10 text-brand-green" />
                </AvatarFallback>
              </Avatar>

              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif font-bold text-gray-800 leading-none">
                Solution
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-8 lg:self-center">
            <p className="max-w-md text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              We Believe That The Surest Measure Of Success Is When Our Partners
              With Us More Than Half It’s More Than Just The Visuals. We're Here
              To Support Your Growth.
            </p>
            <a
              href="#"
              className="font-semibold text-gray-800 hover:text-brand-green transition-colors text-lg inline-block border-b-2 border-brand-green pb-1"
            >
              View All Services ↗
            </a>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="inline-flex items-center gap-3 bg-white p-1 pr-4 border-2 border-gray-100 rounded-full shadow-sm">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Reviewer 1"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://i.pravatar.cc/150?img=2"
                    alt="Reviewer 2"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Reviewer 3"
                  />
                  <div className="h-12 w-12 rounded-full ring-2 ring-white bg-gray-800 text-white flex items-center justify-center font-bold">
                    15k+
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-bold text-gray-900 text-sm">Excellent</p>
                <p className="text-gray-600 text-sm">4,000+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
          alt="Team working on a whiteboard"
          className="w-full h-auto max-h-[500px] object-cover md:rounded-3xl"
        />
      </div>
    </>
  );
}
