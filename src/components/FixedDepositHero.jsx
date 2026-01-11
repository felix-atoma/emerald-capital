import React from 'react';
import { Users, TrendingUp, Shield, Target } from 'lucide-react';

const FixedDepositHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-navy-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Shield className="w-5 h-5" />
            <span className="font-bold">FIXED DEPOSIT</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Guaranteed <br />
            <span className="text-indigo-300">Returns</span> <br />
            <span className="italic font-light">with Complete Security</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Grow your savings with confidence through our fixed deposit accounts. 
            Enjoy competitive interest rates, guaranteed returns, and the peace of 
            mind that comes with a secure, low-risk investment option.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵1K Min.</div>
                <div className="text-white/80 text-sm">Deposit</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">12-25%</div>
                <div className="text-white/80 text-sm">Interest Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">100%</div>
                <div className="text-white/80 text-sm">Secure</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <div className="font-bold text-lg">Fixed</div>
                <div className="text-white/80 text-sm">Returns</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-indigo-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Open Fixed Deposit
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-indigo-300 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=800&fit=crop&crop=center"
                  alt="Secure savings and guaranteed investment returns"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Depositors */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-blue-700 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Active Depositors
                </div>
                <div className="text-lg font-bold text-blue-600">
                  18,500+
                </div>
              </div>

              {/* Badge 2 - Interest Rate */}
              <div className="absolute bottom-8 -left-4 bg-indigo-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Interest Rates
                </div>
                <div className="text-lg font-bold text-gray-900">
                  Up to 25% p.a.
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
                  stroke="#818CF8"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Security decoration */}
              <div className="absolute -top-4 left-1/4 bg-indigo-600 rounded-full p-4 shadow-xl border-4 border-indigo-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedDepositHero;