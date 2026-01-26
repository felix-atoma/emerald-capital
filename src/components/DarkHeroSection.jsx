import React from "react";
import { Check } from "lucide-react";

const DarkHeroSection = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Binary code background pattern */}
      <div className="absolute inset-0 opacity-10 font-mono text-xs text-white leading-relaxed p-4 select-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i}>
            {Array.from({ length: 100 })
              .map(() => (Math.random() > 0.5 ? "1" : "0"))
              .join(" ")}
          </div>
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full opacity-70"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 right-1/2 w-16 h-16 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-teal-400 rounded-full opacity-70"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              Beta Moni, Beta <br />
              <span className="italic font-light">Business</span>
            </h1>
            <p className="text-xl text-gray-300 mt-8">
              Empower your business with our SME Loans
            </p>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src="/SME Loan Appoval - female.jpeg"
                  alt="Business owners celebrating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">SME Loan</p>
                    <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                      Approved <Check className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkHeroSection;
