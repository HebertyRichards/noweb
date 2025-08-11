import { Play } from "lucide-react";
import React from "react";

const StatCircle: React.FC<StatCircleProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center p-4 text-center border border-gray-200 rounded-full aspect-square transition-all duration-300 hover:bg-gray-100 hover:shadow-lg">
    <p className="text-4xl md:text-5xl font-bold text-gray-800">{value}</p>
    <p className="mt-2 text-gray-500">{label}</p>
  </div>
);

export function StatsAndVideo() {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatCircle value="35k+" label="Project Complete" />
          <StatCircle value="10k+" label="Happy Customers" />
          <StatCircle value="25+" label="Years Experiences" />
          <StatCircle value="88" label="Awards Achievement" />
        </div>
      </div>
      <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden group mt-10">
        <img
          src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?q=80&w=2069&auto=format&fit=crop"
          alt="People celebrating"
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
