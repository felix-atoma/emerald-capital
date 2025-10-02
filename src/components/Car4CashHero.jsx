import React from "react";

function Car4CashHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Explore the hidden value of{" "}
            <span className="italic border-b-4 border-white pb-2">your car</span>
          </h1>

          <p className="text-xl md:text-2xl text-orange-100">
            Use your car as collateral with our Car4Cash loan
          </p>

          <div className="flex gap-3 pt-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="bg-gray-100 rounded-full w-full aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl p-8">
            
            {/* Car Image Placeholder from public folder */}
            <img
              src="/car.png"  // ✅ your image in `public/car.png`
              alt="Car Loan Illustration"
              className="w-full h-full object-contain rounded-full"
            />

            {/* Value Badge */}
            <div className="absolute top-8 right-8 bg-white rounded-full px-6 py-3 shadow-lg">
              <p className="text-sm font-semibold">
                <span className="text-gray-800">2024 Benz = </span>
                <span className="text-green-500">₦100,000,000</span>
              </p>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-orange-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Car4CashHero;
