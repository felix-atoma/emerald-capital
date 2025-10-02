import React from "react";

export default function FeaturesSection() {
  return (
    <div className="relative mt-0 w-full bg-slate-900 py-16 px-4 md:px-8 overflow-hidden">
      {/* Background swirl/line design */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="swirlPattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 C 150 50, 50 150, 100 200
                   M 0 100 C 50 50, 150 150, 200 100"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#swirlPattern)" />
        </svg>
      </div>

      {/* Foreground content */}
      <div className="relative grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Feature 1 */}
        <div className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-14 h-14 border-2 border-gray-600 rounded-2xl bg-gray-700/40 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Excellent Banking</h3>
            <p className="text-gray-300 text-sm">Save Smart, Spend Wisely. Take Control of Your finances</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-14 h-14 border-2 border-gray-600 rounded-2xl bg-gray-700/40 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Flexible Loan</h3>
            <p className="text-gray-300 text-sm">We provide fast access to funds for urgent financial needs.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-14 h-14 border-2 border-gray-600 rounded-2xl bg-gray-700/40 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Fast & Friendly Support</h3>
            <p className="text-gray-300 text-sm">We provide 24 hours support for all customer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
