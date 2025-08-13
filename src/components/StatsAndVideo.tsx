import { Play } from "lucide-react";
import React from "react";

const StatCircle: React.FC<{
  value: string;
  label: string;
  className?: string;
}> = ({ value, label, className = "" }) => (
  <div
    className={`flex flex-col items-center justify-center p-4 text-center border border-gray-200 rounded-full h-44 w-44 md:h-64 md:w-64 bg-white shrink-0 ${className}`}
  >
    <p className="text-3xl md:text-5xl font-bold text-gray-800">{value}</p>
    <p className="mt-2 text-gray-500 text-sm md:text-base">{label}</p>
  </div>
);

export function StatsAndVideo() {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 place-items-center md:flex md:justify-center md:items-center md:-space-x-20">
            <StatCircle
              value="35k+"
              label="Project Complete"
              className="md:z-40"
            />
            <StatCircle
              value="10k+"
              label="Happy Customers"
              className="md:z-30"
            />
            <StatCircle
              value="25+"
              label="Years Experiences"
              className="md:z-20"
            />
            <StatCircle
              value="88"
              label="Awards Achievement"
              className="md:z-10"
            />
          </div>
          <div className="absolute inset-0 hidden md:flex justify-between items-center pointer-events-none">
            <div className="w-1/3 h-full bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="w-1/3 h-full bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden group mt-20">
        <img
          src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?q=80&w=2069&auto=format&fit=crop"
          alt="Pessoas a celebrar"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex items-center gap-4 text-white group">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-24 w-24 animate-ping rounded-full bg-white/50 opacity-75"></span>
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 text-black fill-black ml-1" />
              </span>
            </div>
            <span className="font-bold text-lg tracking-wider">PLAY VIDEO</span>
          </button>
        </div>
      </div>
    </section>
  );
}
