import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden">
      {/* Binary code background pattern */}
      <div className="absolute inset-0 opacity-20 font-mono text-xs text-white/30 leading-relaxed p-8">
        {Array(20).fill(null).map((_, i) => (
          <div key={i}>
            {Array(100).fill(null).map((_, j) => (
              <span key={j}>{Math.random() > 0.5 ? '1' : '0'} </span>
            ))}
          </div>
        ))}
      </div>

      {/* Floating decorative circles */}
      <div className="absolute top-1/4 right-1/3 w-8 h-8 rounded-full border-2 border-white/30"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400"></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-white/10"></div>
      <div className="absolute top-2/3 left-1/3 w-4 h-4 rounded-full bg-purple-300"></div>
      <div className="absolute bottom-1/3 right-1/2 w-3 h-3 rounded-full bg-cyan-400"></div>
      <div className="absolute top-1/4 right-1/2 w-5 h-5 rounded-full bg-purple-500/50"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-8 py-16 flex items-center justify-between min-h-screen">
        {/* Left side - Text content */}
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6">
            Grow Your<br />
            Wealth <span className="italic font-light">with Us</span>
          </h1>
          <div className="h-0.5 w-32 bg-purple-400 mb-6"></div>
          <p className="text-xl text-slate-300">
            Secure your future with our competitive fixed<br />
            deposit rates
          </p>
        </div>

        {/* Right side - Image with coins and tree */}
        <div className="relative">
          <div className="w-80 h-80 rounded-full bg-white flex items-center justify-center shadow-2xl">
            {/* Tree illustration */}
            <div className="relative">
              {/* Trunk */}
              <div className="w-8 h-32 bg-gradient-to-b from-amber-800 to-amber-900 mx-auto rounded-sm"></div>
              
              {/* Foliage */}
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-lime-400 to-green-600 rounded-full"></div>
                <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-lime-300 to-green-500 rounded-full"></div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-lime-500 to-green-700 rounded-full"></div>
              </div>

              {/* Coins at base */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center w-40">
                {Array(15).fill(null).map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border-2 border-amber-700 m-0.5"
                    style={{
                      transform: `rotate(${i * 15}deg) translateY(${Math.random() * 10}px)`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Guaranteed ROI badge */}
          <div className="absolute bottom-8 right-0 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
            <div>
              <div className="text-xs font-semibold text-gray-800 whitespace-nowrap">Guaranteed ROI</div>
              <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none">
                <path d="M10 35 L10 25 L20 30 L20 20 L30 25 L30 15 L40 20" stroke="#06b6d4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="8" y="33" width="4" height="4" fill="#06b6d4" rx="1"/>
                <rect x="18" y="28" width="4" height="9" fill="#06b6d4" rx="1"/>
                <rect x="28" y="23" width="4" height="14" fill="#22d3ee" rx="1"/>
                <rect x="38" y="18" width="4" height="19" fill="#22d3ee" rx="1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;