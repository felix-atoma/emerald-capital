import React from "react";  // ✅ Add this

import { Apple, Play, Smartphone } from 'lucide-react';

export default function DownloadAppSection() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-3xl shadow-xl p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Ready To <span className="text-purple-600">Download</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Your can do more on our mobile applications. Download from App Store or Google Play.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg">
                  <Apple className="w-5 h-5" />
                  <span>Download On App Store</span>
                </button>

                <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-full border-2 border-red-600 transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg">
                  <Play className="w-5 h-5" />
                  <span>Download On Google Play</span>
                </button>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800 relative overflow-hidden transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />
                  
                  {/* Screen */}
                  <div className="absolute inset-4 bg-white rounded-[2rem] overflow-hidden">
                    {/* App interface representation */}
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="w-20 h-8 bg-gray-200 rounded" />
                        <Smartphone className="w-6 h-6 text-purple-600" />
                      </div>
                      
                      {/* Chart area */}
                      <div className="w-full h-40 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-end justify-around p-4">
                        <div className="w-2 bg-purple-600 h-16 rounded-t" />
                        <div className="w-2 bg-purple-500 h-24 rounded-t" />
                        <div className="w-2 bg-purple-600 h-20 rounded-t" />
                        <div className="w-2 bg-purple-500 h-32 rounded-t" />
                        <div className="w-2 bg-purple-600 h-12 rounded-t" />
                        <div className="w-2 bg-purple-500 h-28 rounded-t" />
                      </div>

                      {/* List items */}
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-purple-200 rounded-full" />
                            <div className="flex-1 space-y-1">
                              <div className="w-24 h-2 bg-gray-300 rounded" />
                              <div className="w-16 h-2 bg-gray-200 rounded" />
                            </div>
                            <div className="w-12 h-3 bg-purple-600 rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}