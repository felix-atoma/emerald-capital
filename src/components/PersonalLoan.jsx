import React from 'react';
import { Users, TrendingUp, User, Target } from 'lucide-react';

const PersonalLoanHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-800 to-cyan-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <User className="w-5 h-5" />
            <span className="font-bold">PERSONAL LOAN</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Achieve Your <br />
            <span className="text-cyan-300">Personal Goals</span> <br />
            <span className="italic font-light">with Flexible Financing</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Life is full of opportunities and unexpected moments. Whether it's 
            education, home improvement, medical expenses, or a dream vacation, 
            our personal loans help you make it happen with ease and confidence.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵500-₵30K</div>
                <div className="text-white/80 text-sm">Loan Amount</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">6-48</div>
                <div className="text-white/80 text-sm">Months Term</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Simple</div>
                <div className="text-white/80 text-sm">Process</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <div className="font-bold text-lg">24Hr</div>
                <div className="text-white/80 text-sm">Approval</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-cyan-400 text-sky-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Apply for Personal Loan
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-cyan-300 shadow-2xl relative">
                {/* Main Image with precise positioning */}
                <div className="relative w-full h-full">
                  <img
  src="/personal.jpg"
  alt="Happy person achieving personal goals with financial support"
  className="absolute inset-0 w-full h-full object-contain bg-white"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src =
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=contain";
  }}
/>

                  
                  {/* Overlay to ensure face is visible */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-white/30 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Badge 1 - People Helped */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-sky-700 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  People Helped
                </div>
                <div className="text-lg font-bold text-sky-600">
                  12,000+
                </div>
              </div>

              {/* Badge 2 - Loan Amount */}
              <div className="absolute bottom-8 -left-4 bg-cyan-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Personal Financing
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ₵500 - ₵30,000
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
                  stroke="#22D3EE"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Personal decoration */}
              <div className="absolute -top-4 left-1/4 bg-blue-600 rounded-full p-4 shadow-xl border-4 border-cyan-300">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanHero;