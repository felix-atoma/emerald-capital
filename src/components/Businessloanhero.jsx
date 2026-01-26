import React from 'react';
import { Users, TrendingUp, Building2, Target } from 'lucide-react';

const BusinessLoanHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-500 to-gray-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Building2 className="w-5 h-5" />
            <span className="font-bold">BUSINESS LOAN</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Fuel Your <br />
            <span className="text-gray-300">Business Growth</span> <br />
            <span className="italic font-light">with Smart Capital</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Comprehensive financing solutions for businesses at every stage. 
            From startups to established enterprises, access the capital you 
            need to expand, innovate, and achieve your business goals.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵5K-₵100K</div>
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
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">All</div>
                <div className="text-white/80 text-sm">Businesses</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">💼</span>
              </div>
              <div>
                <div className="font-bold text-lg">Flexible</div>
                <div className="text-white/80 text-sm">Terms</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gray-300 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Apply for Business Loan
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-gray-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-gray-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-gray-300 shadow-2xl">
                <img
                  src="/Remiitance.jpeg"
                  alt="Business professionals discussing growth and financing strategies"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Businesses Funded */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Businesses Funded
                </div>
                <div className="text-lg font-bold text-slate-600">
                  8,500+
                </div>
              </div>

              {/* Badge 2 - Loan Amount */}
              <div className="absolute bottom-8 -left-4 bg-gray-300 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Business Capital
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ₵5,000 - ₵100,000
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
                  stroke="#D1D5DB"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Business decoration */}
              <div className="absolute -top-4 left-1/4 bg-gray-600 rounded-full p-4 shadow-xl border-4 border-gray-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoanHero;