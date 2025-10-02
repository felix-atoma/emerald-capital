import React from 'react';
import { CheckCircle } from 'lucide-react';

const MTGreenSolarHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 min-h-screen overflow-hidden">
      {/* Binary code background pattern */}
      <div className="absolute inset-0 opacity-10 font-mono text-xs text-white/50 leading-loose p-8">
        {Array(25).fill(null).map((_, i) => (
          <div key={i}>
            {Array(120).fill(null).map((_, j) => (
              <span key={j}>{Math.random() > 0.5 ? '1' : '0'} </span>
            ))}
          </div>
        ))}
      </div>

      {/* Floating decorative circles */}
      <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full border-2 border-white/20"></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-white/5"></div>
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-white/40"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/50"></div>
      <div className="absolute top-2/3 right-1/2 w-6 h-6 rounded-full bg-white/30"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-8 py-16 flex items-center justify-between min-h-screen">
        {/* Left side - Text content */}
        <div className="max-w-2xl">
          <h1 className="text-7xl font-bold text-white mb-2">
            Mt Green
          </h1>
          <h2 className="text-6xl font-light italic text-white mb-8">
            Solar
          </h2>
          <div className="h-0.5 w-40 bg-white mb-8"></div>
          <p className="text-xl text-blue-200">
            Power your home or business sustainably with MT<br />
            Green Solar
          </p>
        </div>

        {/* Right side - Solar equipment illustration */}
        <div className="relative">
          <div className="w-96 h-96 rounded-full bg-white flex items-center justify-center shadow-2xl relative">
            {/* Solar panel */}
            <div className="absolute top-12 left-8 w-40 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg transform -rotate-12 shadow-xl">
              {/* Solar cells grid */}
              <div className="grid grid-cols-4 gap-0.5 p-2 h-full">
                {Array(32).fill(null).map((_, i) => (
                  <div key={i} className="bg-blue-900 rounded-sm border border-blue-800"></div>
                ))}
              </div>
            </div>

            {/* Inverter (blue unit) */}
            <div className="absolute top-32 left-32 w-28 h-40 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-xl z-10">
              <div className="bg-cyan-300 h-12 w-full rounded-t-lg flex items-center justify-center">
                <div className="bg-cyan-500 w-16 h-6 rounded"></div>
              </div>
              <div className="p-2 space-y-1">
                <div className="bg-cyan-500 h-2 w-full rounded"></div>
                <div className="bg-cyan-500 h-2 w-3/4 rounded"></div>
                <div className="bg-cyan-500 h-2 w-full rounded"></div>
              </div>
              {/* Diagonal pattern */}
              <div className="absolute inset-0 opacity-20">
                {Array(8).fill(null).map((_, i) => (
                  <div key={i} className="h-px bg-white transform -rotate-45 my-4"></div>
                ))}
              </div>
            </div>

            {/* Battery (red/orange unit) */}
            <div className="absolute top-24 right-16 w-32 h-44 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg shadow-xl z-10">
              <div className="bg-gray-200 h-10 w-full rounded-t-lg flex items-center justify-center px-2">
                <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">MFP</div>
              </div>
              <div className="bg-gray-300 h-8 w-full flex items-center justify-center text-xs font-semibold">
                INVERTER SERIES
              </div>
              <div className="p-2">
                <div className="bg-red-700 w-full h-24 rounded flex items-center justify-center">
                  <div className="text-white text-xs font-mono">
                    <div className="bg-black/30 px-2 py-1 rounded mb-1">12V</div>
                    <div className="bg-black/30 px-2 py-1 rounded">200Ah</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cable/connection */}
            <div className="absolute bottom-20 right-24 w-16 h-8 bg-gray-300 rounded-full"></div>
          </div>

          {/* Purchase badge */}
          <div className="absolute top-8 right-8 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">15kva purchased</span>
            <CheckCircle className="w-5 h-5 text-green-500 fill-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTGreenSolarHero;