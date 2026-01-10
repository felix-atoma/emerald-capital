import React from 'react';
import { Leaf, Zap, Globe, Recycle } from 'lucide-react';

const GreenSustainableLoanHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-700 to-teal-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Green Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Leaf className="w-5 h-5" />
            <span className="font-bold">GREEN & SUSTAINABLE LOAN</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Invest in <br />
            <span className="text-yellow-300">Planet Earth</span> <br />
            <span className="italic font-light">with Eco-Friendly Funding</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Finance your transition to sustainability with our Green & Sustainable Loan. 
            Support renewable energy, eco-friendly projects, and environmental 
            conservation initiatives with favorable terms.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵500-₵12K</div>
                <div className="text-white/80 text-sm">Loan Amount</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">6-24</div>
                <div className="text-white/80 text-sm">Months Term</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Special</div>
                <div className="text-white/80 text-sm">Green Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
              <div>
                <div className="font-bold text-lg">For</div>
                <div className="text-white/80 text-sm">Eco-Projects</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Apply for Green Loan
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
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=800&fit=crop&crop=center"
                  alt="Solar panels installation for renewable energy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Environmental Impact */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-emerald-700 mb-1 flex items-center gap-1">
                  <Leaf className="w-3 h-3" />
                  CO₂ Reduction
                </div>
                <div className="text-lg font-bold text-emerald-600">
                  5 Tons/Year
                </div>
              </div>

              {/* Badge 2 - Loan Amount */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Eco-Investment
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ₵500 - ₵12,000
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

              {/* Leaf decoration */}
              <div className="absolute -top-4 left-1/4 bg-teal-600 rounded-full p-4 shadow-xl border-4 border-yellow-300">
                <Leaf className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenSustainableLoanHero;