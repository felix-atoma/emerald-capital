import React from 'react';
import { TrendingUp, Shield, Briefcase, ChartBar } from 'lucide-react';

const InvestmentHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full px-6 py-3 mb-8 shadow-xl">
            <TrendingUp className="w-5 h-5" />
            <span className="font-bold">WEALTH MANAGEMENT</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build Your <br />
            <span className="text-yellow-300">Financial</span> Future <br />
            <span className="italic font-light">with Smart Investments</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Grow your wealth with expert investment solutions. From mutual funds 
            to fixed deposits, we help you make informed decisions for long-term 
            financial success.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ChartBar className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">15-25%</div>
                <div className="text-white/80 text-sm">Returns PA</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Risk</div>
                <div className="text-white/80 text-sm">Managed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵5,000</div>
                <div className="text-white/80 text-sm">Min Investment</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <div className="font-bold text-lg">24/7</div>
                <div className="text-white/80 text-sm">Monitoring</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Start Investing Today
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
                  src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&h=800&fit=crop&crop=face"
                  alt="Financial analyst reviewing investment portfolio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge 1 - Portfolio Value */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-blue-700 mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Portfolio Value
                </div>
                <div className="text-lg font-bold text-blue-600">
                  ₵250,000
                </div>
              </div>

              {/* Badge 2 - ROI */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Annual Return
                </div>
                <div className="text-lg font-bold text-gray-900">
                  +18.5%
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

              {/* Chart icon decoration */}
              <div className="absolute -top-4 left-1/4 bg-indigo-600 rounded-full p-4 shadow-xl border-4 border-yellow-300">
                <ChartBar className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHero;