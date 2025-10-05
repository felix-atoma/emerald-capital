// src/components/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Your Logo in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="emerald-logo.png" 
              alt="Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          
          {/* Spinning gradient ring around logo */}
          <div className="absolute inset-0">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '1.5s' }} viewBox="0 0 100 100">
              <defs>
                <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#008B8B', stopOpacity: 1 }} />
                  <stop offset="33%" style={{ stopColor: '#40E0D0', stopOpacity: 1 }} />
                  <stop offset="66%" style={{ stopColor: '#2EB88A', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#C8D900', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#spinnerGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="220"
                strokeDashoffset="50"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-700 text-lg font-medium mt-2">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;