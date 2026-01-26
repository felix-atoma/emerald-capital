import React from 'react';
import { PiggyBank, Shield, TrendingUp, Lock } from 'lucide-react';

const SavingsProductsHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Purple/Gold Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-full px-6 py-3 mb-8 shadow-xl">
            <PiggyBank className="w-5 h-5" />
            <span className="font-bold">PURPLE / GOLD THEME</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Savings Products<br />
            <span className="text-yellow-300">(Purple / Gold Theme)</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Secure your financial future with our exclusive range of savings products. 
            Earn competitive interest rates while keeping your money safe, accessible, 
            and growing steadily.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">100%</div>
                <div className="text-white/80 text-sm">Protected</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Up to 15%</div>
                <div className="text-white/80 text-sm">Interest PA</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">24/7</div>
                <div className="text-white/80 text-sm">Access</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">₵</span>
              </div>
              <div>
                <div className="font-bold text-lg">₵50</div>
                <div className="text-white/80 text-sm">Min Deposit</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Explore Savings Products
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative gold dots */}
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
                  src="/wfw.jpg"
                  alt="Person organizing savings and financial planning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge 1 - Interest Rate */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-purple-700 mb-1">
                  Fixed Deposit
                </div>
                <div className="text-lg font-bold text-purple-600">
                  12-15% PA
                </div>
              </div>

              {/* Badge 2 - Savings Goal */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Goal Achieved
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ₵25,000
                </div>
              </div>

              {/* Decorative gold curved line */}
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

              {/* Coin decoration */}
              <div className="absolute -top-4 left-1/4 bg-purple-600 rounded-full p-4 shadow-xl border-4 border-yellow-300">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsProductsHero;