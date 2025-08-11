import { ArrowRight } from "lucide-react";
import React from "react";

type StrategyPillProps = {
  imgSrc: string;
  label: string;
  circleSize?: number;
  pillWidth?: number;
};

const StrategyPill: React.FC<StrategyPillProps> = ({
  imgSrc,
  label,
  circleSize = 100,
  pillWidth = 170,
}) => {
  const half = circleSize / 2;
  const extraOverlap = 8;
  const pillPt = half + extraOverlap;
  const imgTop = -(half - extraOverlap);

  const splitAt = label.lastIndexOf(" ");
  const line1 = splitAt === -1 ? label : label.slice(0, splitAt);
  const line2 = splitAt === -1 ? "" : label.slice(splitAt + 1);

  return (
    <div style={{ width: pillWidth }} className="flex justify-center">
      <div className="relative">
        <div
          className="bg-lime-300 rounded-[30px] w-full pb-4 px-4 text-center"
          style={{ paddingTop: `${pillPt}px` }}
        >
          <h3 className="font-semibold text-base text-gray-800 leading-tight">
            {" "}
            {/* Fonte diminuída */}
            <span className="block">{line1}</span>
            {line2 && <span className="block mt-1">{line2}</span>}
          </h3>
        </div>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-20"
          style={{
            top: `${imgTop}px`,
            width: `${circleSize}px`,
            height: `${circleSize}px`,
          }}
        >
          <img
            src={imgSrc}
            alt={label}
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export function DrivingSuccessSection() {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex flex-col gap-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1">
                <span className="h-2 w-2 rounded-full bg-gray-800"></span>
                <p className="font-semibold text-sm text-gray-700">
                  WHAT SETS US APART
                </p>
              </div>
              <h2 className="font-serif text-5xl font-bold mt-4 text-gray-900">
                Driving Digital Success With Strategy Design
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed">
                We Believe That The Surest Measure Of Success Is When Our
                Partners With Us More Than Half It’s More Than Just The Visuals.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
              alt="Team working on a laptop"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-10">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="People in a meeting"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div>
              <p className="text-gray-600 leading-relaxed">
                We Believe That The Surest Measure Of Success Is When Our
                Partners With Us More Than Half It’s More Than Just The Visuals.
                We're Here To Support Your Growth.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                We Believe That The Surest Measure Of Success Is When Our
                Partners With Us More Than Half It’s More Than Just The Visuals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 items-start">
                <div>
                  <p className="text-gray-600 text-sm">
                    Conduct thorough market research to the fast target audience
                    behaviours. Submit as many design tasks
                  </p>
                  <a
                    href="#"
                    className="mt-6 h-24 w-24 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 text-sm font-semibold text-center hover:border-gray-900 transition-colors"
                  >
                    <span className="flex items-center gap-1">
                      Contact Us <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Conduct thorough market research to the fast target audience
                    behaviours.
                  </p>
                </div>
              </div>
              <div className="mt-16 flex flex-row items-start justify-center gap-4 sm:gap-8">
                <StrategyPill
                  imgSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop"
                  label="Marketing Strategy"
                />
                <StrategyPill
                  imgSrc="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=400&auto=format&fit=crop"
                  label="UX/UI Solution"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
