import React from "react"; // ✅ Add this

import { Apple, Play, Smartphone } from "lucide-react";

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
                Your can do more on our mobile applications. Download from App
                Store or Google Play.
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
              <div className="relative w-64 h-[500px]">
                {/* Phone frame */}
                <div className="absolute inset-0 bg-gray-800 rounded-[3rem] shadow-2xl p-3">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img
                      src="mockup.png"
                      alt="App Preview"
                      className="w-full h-full object-cover"
                    />
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
