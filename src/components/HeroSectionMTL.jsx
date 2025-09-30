import React from "react";
import { Play, Circle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-red-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="relative">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Get your funds
                <br />
                in less than
              </h1>
              <div className="relative inline-block mt-2">
                <h2 className="text-5xl lg:text-6xl font-bold italic">
                  10 minutes!
                </h2>
                <svg
                  className="absolute -bottom-2 left-0 w-64"
                  height="20"
                  viewBox="0 0 250 20"
                >
                  <path
                    d="M 0 15 Q 125 0, 250 15"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            <p className="text-xl lg:text-2xl text-white/90 max-w-lg">
              Enjoy quick and easy access to funds faster than you can blink.
            </p>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                alt="Professional in office"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white rounded-full p-6 transition-all transform hover:scale-110 shadow-xl">
                  <Play className="w-12 h-12 text-red-600 ml-1" fill="currentColor" />
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32">
              <div className="relative">
                <Circle className="w-32 h-32 text-white" fill="white" opacity="0.3" />
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-4 h-4 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
