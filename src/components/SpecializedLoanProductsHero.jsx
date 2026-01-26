import React from 'react';
import { Users, TrendingUp, Sparkles, Target } from 'lucide-react';

const SpecializedLoanProductsHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">SPECIALIZED LOAN PRODUCTS</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Tailored Solutions <br />
            <span className="text-pink-300">For Unique Needs</span> <br />
            <span className="italic font-light">with Expert Financing</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Customized loan products designed for specific industries and unique 
            business requirements. From healthcare to technology, hospitality to 
            professional services—we have specialized financing solutions.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵2K-₵50K</div>
                <div className="text-white/80 text-sm">Loan Amount</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">12-60</div>
                <div className="text-white/80 text-sm">Months Term</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Custom</div>
                <div className="text-white/80 text-sm">Solutions</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <div>
                <div className="font-bold text-lg">Industry</div>
                <div className="text-white/80 text-sm">Specific</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-pink-400 text-rose-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Explore Specialized Loans
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-pink-300 shadow-2xl">
                <img
                  src="/Investment.jpeg"
                  alt="Professionals discussing specialized business financing solutions"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Industries Served */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-rose-700 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Industries Served
                </div>
                <div className="text-lg font-bold text-rose-600">
                  20+
                </div>
              </div>

              {/* Badge 2 - Loan Amount */}
              <div className="absolute bottom-8 -left-4 bg-pink-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Specialized Capital
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ₵2,000 - ₵50,000
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
                  stroke="#F9A8D4"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Specialized decoration */}
              <div className="absolute -top-4 left-1/4 bg-pink-600 rounded-full p-4 shadow-xl border-4 border-pink-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedLoanProductsHero;