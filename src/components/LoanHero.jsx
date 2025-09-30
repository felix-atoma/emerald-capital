import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Binary code background pattern */}
      <div className="absolute inset-0 opacity-20 font-mono text-xs text-green-500 leading-relaxed overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {Array.from({ length: 100 }).map((_, j) => (
              <span key={j}>{Math.random() > 0.5 ? "1" : "0"} </span>
            ))}
          </div>
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-gray-700 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full"></div>
      <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
      <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-pink-400 rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-20 flex items-center justify-between min-h-screen">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6">
            Fast loans for<br />
            Private Sector<br />
            <span className="italic font-light">employees</span>
          </h1>
          <p className="text-xl text-gray-300">
            Settle your financial needs with ease and fast.
          </p>
        </div>

        {/* Profile card */}
        <div className="relative">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Professional"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
            <p className="text-sm font-semibold text-gray-700">Loan Disbursement</p>
            <p className="text-2xl font-bold text-green-600">₦10,000,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
