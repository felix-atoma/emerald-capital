// src/components/TreasuryNotesHero.jsx
import React from "react";

const TreasuryNotesHero = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 min-h-screen flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Secure Your Future with{" "}
            <span className="italic font-light">Treasury Notes</span>
          </h1>
          <p className="text-xl text-emerald-100 mt-6">
            Invest in stability with our high-yield Treasury Notes
          </p>
        </div>

        {/* Right Content */}
        <div className="flex justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-emerald-500 rounded-full opacity-20 absolute top-10 left-1/4"></div>
            <div className="w-12 h-12 bg-emerald-400 rounded-full opacity-30 absolute top-32 right-1/4"></div>
            <div className="w-8 h-8 bg-emerald-300 rounded-full opacity-25 absolute bottom-20 left-1/3"></div>
          </div>

          <div className="relative w-80 h-80 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center shadow-2xl">
            {/* Plants */}
            <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex gap-2">
              {/* Plant 1 */}
              <div className="w-12 h-24 relative">
                <div className="absolute bottom-0 w-1 h-16 bg-amber-700 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col gap-1">
                  <div className="w-6 h-3 bg-yellow-600 rounded-full transform -rotate-45 -translate-x-2"></div>
                  <div className="w-6 h-3 bg-yellow-600 rounded-full transform rotate-45 translate-x-2"></div>
                  <div className="w-6 h-3 bg-yellow-700 rounded-full transform -rotate-45 -translate-x-2"></div>
                  <div className="w-6 h-3 bg-yellow-700 rounded-full transform rotate-45 translate-x-2"></div>
                </div>
              </div>
              {/* Plant 2 */}
              <div className="w-12 h-28 relative">
                <div className="absolute bottom-0 w-1 h-20 bg-amber-700 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col gap-1">
                  <div className="w-6 h-3 bg-lime-600 rounded-full transform -rotate-45 -translate-x-2"></div>
                  <div className="w-6 h-3 bg-lime-600 rounded-full transform rotate-45 translate-x-2"></div>
                  <div className="w-6 h-3 bg-lime-700 rounded-full transform -rotate-45 -translate-x-2"></div>
                </div>
              </div>
              {/* Plant 3 */}
              <div className="w-12 h-32 relative">
                <div className="absolute bottom-0 w-1 h-24 bg-amber-700 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col gap-1">
                  <div className="w-6 h-3 bg-yellow-600 rounded-full transform -rotate-45 -translate-x-2"></div>
                  <div className="w-6 h-3 bg-yellow-600 rounded-full transform rotate-45 translate-x-2"></div>
                  <div className="w-6 h-3 bg-yellow-700 rounded-full transform -rotate-45 -translate-x-2"></div>
                  <div className="w-6 h-3 bg-yellow-700 rounded-full transform rotate-45 translate-x-2"></div>
                </div>
              </div>
            </div>

            {/* Coins */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  {[...Array(Math.floor(Math.random() * 5) + 3)].map((_, j) => (
                    <div
                      key={j}
                      className="w-6 h-2 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full border-t border-amber-400"
                    ></div>
                  ))}
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="absolute right-8 top-1/2 transform translate-x-8 bg-white rounded-full px-4 py-2 shadow-lg">
              <span className="text-emerald-600 font-bold text-sm">Guaranteed</span>
              <span className="text-gray-800 font-bold text-sm"> |ROI|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasuryNotesHero;
