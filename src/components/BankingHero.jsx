import React from "react";
import { useState } from 'react';
import { Play } from 'lucide-react';

export default function BankingHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      {/* Hero Section */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            We specialize in top-notch
            <br />
            banking services
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            At Emerald Capital, we are committed to empowering individuals and businesses through 
            innovative banking solutions. Our customer-centric approach and robust financial products help you grow 
            and achieve your financial goals. With a focus on excellence, integrity, and innovation, we strive to deliver 
            the best banking experience in Ghana.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          {/* Placeholder Image/Background */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-slate-700 to-slate-900">
            {/* Video Thumbnail Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 flex items-center justify-center shadow-2xl transform group-hover:scale-110"
              >
                <Play className="w-10 h-10 md:w-14 md:h-14 text-white ml-2" fill="white" />
              </button>
            </div>

            {/* Optional: Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Meet Our Leadership Team
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                Discover how we're transforming banking in Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}