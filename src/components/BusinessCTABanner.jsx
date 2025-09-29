import React from "react";  // ✅ Add this

import { MessageCircle } from 'lucide-react';

export default function BusinessCTABanner() {
  return (
    <div className="relative bg-red-600 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full opacity-80" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-60" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-red-700 rounded-full opacity-40" />
      
      {/* Decorative line */}
      <svg className="absolute bottom-8 right-1/3 w-32 h-16" viewBox="0 0 100 50">
        <path 
          d="M 0 25 Q 25 0, 50 25 T 100 25" 
          stroke="white" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.5"
        />
        <circle cx="100" cy="25" r="4" fill="white" opacity="0.8" />
      </svg>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text */}
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Access Your Business Potentials Now & Find Opportunities For{' '}
              <span className="italic font-serif">Bigger Success</span>
            </h2>
          </div>

          {/* Right side - Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg flex items-center gap-2 whitespace-nowrap">
              <MessageCircle className="w-5 h-5" />
              Let's Chat
            </button>

            <button className="bg-transparent hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full border-2 border-white transition-colors duration-300 whitespace-nowrap">
              Get Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}