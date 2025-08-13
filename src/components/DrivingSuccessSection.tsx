import React from "react";

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
          className="bg-lime-300 rounded-[30px] w-full pb-7 px-5 text-center"
          style={{ paddingTop: `${pillPt}px` }}
        >
          <h3 className="font-semibold text-base text-gray-800 leading-tight">
            {" "}
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
            className="w-full h-full rounded-full object-cover shadow-lg"
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
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1">
                <span className="h-2 w-2 rounded-full bg-gray-800"></span>
                <p className="font-semibold text-sm text-gray-700">
                  WHAT SETS US APART
                </p>
              </div>
              <h2 className="font-[Gallery-Modern] text-4xl font-bold mt-4 text-gray-900">
                Driving Digital Success With Strategy Design
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed">
                We Believe That The Surest Measure Of Success Is When Our
                Partners With Us More Than Half It’s More Than Just The Visuals.
              </p>
            </div>
            <img src="/driving.svg" alt="Team working on a laptop" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <img
                src="driving2.svg"
                alt="People in a meeting"
                className="w-[283px] h-[297px] object-cover flex-shrink-0"
              />
              <div>
                <p className="text-gray-600 leading-relaxed">
                  We Believe That The Surest Measure Of Success Is When Our
                  Partners With Us More Than Half It’s More Than Just The
                  Visuals. We're Here To Support Your Growth.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  We Believe That The Surest Measure Of Success Is When Our
                  Partners With Us More Than Half It’s More Than Just The
                  Visuals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-gray-600 text-sm">
                  Conduct thorough market research to the fast target audience
                  behaviours. Submit as many design tasks
                </p>
                <a
                  href="#"
                  className="mt-6 h-30 w-30 rounded-full border border-black flex items-center justify-center text-sm font-semibold text-center hover:border-gray-900 transition-colors"
                >
                  <span className="flex items-center gap-1">Contact Us ↗</span>
                </a>
              </div>
              <div>
                <h3 className="font-[Gallery-Modern] text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Conduct thorough market research to the fast target audience
                  behaviours.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-row items-start justify-center gap-4 sm:gap-8">
              <StrategyPill imgSrc="/iconft.svg" label="Marketing Strategy" />
              <StrategyPill imgSrc="/iconft2.svg" label="UX/UI Solution" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
