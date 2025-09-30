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
          <div className="bg-gray-100 rounded-full w-full aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col items-center gap-8 p-8">
              {/* Value Badge */}
              <div className="absolute top-8 right-8 bg-white rounded-full px-6 py-3 shadow-lg">
                <p className="text-sm font-semibold">
                  <span className="text-gray-800">2024 Benz = </span>
                  <span className="text-green-500">₦100,000,000</span>
                </p>
              </div>

              {/* Car Icon */}
              <div className="bg-red-500 rounded-lg p-6 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform">
                <svg
                  className="w-20 h-20 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>

              {/* Coin Stacks */}
              <div className="flex gap-4 items-end">
                <div className="flex flex-col items-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-16 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-700 -mt-1"
                    ></div>
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-16 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-700 -mt-1"
                    ></div>
                  ))}
                </div>
              </div>
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
