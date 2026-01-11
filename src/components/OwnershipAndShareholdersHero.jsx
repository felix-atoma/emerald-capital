// src/components/OwnershipAndShareholdersHero.jsx
import React from 'react';
import { Users, TrendingUp, PieChart, Award, DollarSign, Target } from 'lucide-react';

const OwnershipAndShareholdersHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Ownership Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <PieChart className="w-5 h-5" />
            <span className="font-bold">OWNERSHIP & SHAREHOLDERS</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Strategic <br />
            <span className="text-yellow-300">Ownership</span> <br />
            <span className="italic font-light">Driving Sustainable Value</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Emerald Capital's shareholders provide the foundation for our success, 
            offering strategic capital, governance oversight, and long-term vision 
            that drives sustainable growth and value creation.
          </p>

          {/* Key Principles */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Strategic</div>
                <div className="text-white/80 text-sm">Ownership</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Long-term</div>
                <div className="text-white/80 text-sm">Value Focus</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Governance</div>
                <div className="text-white/80 text-sm">Excellence</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            View Shareholder Information
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-yellow-300 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=800&fit=crop&crop=center"
                  alt="Strategic ownership and capital growth visualization"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Ownership Value */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-indigo-700 mb-1 flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  Enterprise Value
                </div>
                <div className="text-lg font-bold text-indigo-600">
                  $500M+
                </div>
              </div>

              {/* Badge 2 - ROE */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Return on Equity
                </div>
                <div className="text-lg font-bold text-gray-900">
                  18.5% ROE
                </div>
              </div>

              {/* Decorative curved line */}
              <svg
                className="absolute -bottom-4 -right-8 w-32 h-32"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M 20 80 Q 50 20 80 60"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Ownership decoration */}
              <div className="absolute -top-4 left-1/4 bg-purple-600 rounded-full p-4 shadow-xl border-4 border-yellow-300">
                <PieChart className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnershipAndShareholdersHero;