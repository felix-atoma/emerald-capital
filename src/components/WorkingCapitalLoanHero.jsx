import React from 'react';
import { TrendingUp, RefreshCw, BarChart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Added Link import

const WorkingCapitalLoanHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Working Capital Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <RefreshCw className="w-5 h-5" />
            <span className="font-bold">WORKING CAPITAL LOAN</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Fuel Your <br />
            <span className="text-yellow-300">Business Growth</span> <br />
            <span className="italic font-light">with Flexible Funding</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Keep your business running smoothly with our Working Capital Loan. 
            Manage daily operations, inventory, and cash flow with flexible financing 
            tailored to your business needs.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <BarChart className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵500-₵10K</div>
                <div className="text-white/80 text-sm">Loan Amount</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">6-18</div>
                <div className="text-white/80 text-sm">Months Term</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Fast</div>
                <div className="text-white/80 text-sm">Approval</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">💼</span>
              </div>
              <div>
                <div className="font-bold text-lg">For</div>
                <div className="text-white/80 text-sm">Established Biz</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/applyforloanpage"> {/* ✅ Added Link wrapper */}
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Apply for Working Capital
            </button>
          </Link>
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
                  src="/engagement.jpg"
                  alt="Business owner managing inventory and operations"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge 1 - Loan Amount */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-blue-700 mb-1 flex items-center gap-1">
                  <BarChart className="w-3 h-3" />
                  Capital Range
                </div>
                <div className="text-lg font-bold text-blue-600">
                  ₵500 - ₵10,000
                </div>
              </div>

              {/* Badge 2 - Term */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Flexible Term
                </div>
                <div className="text-lg font-bold text-gray-900">
                  6-18 Months
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

              {/* Refresh icon decoration */}
              <div className="absolute -top-4 left-1/4 bg-cyan-600 rounded-full p-4 shadow-xl border-4 border-yellow-300">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingCapitalLoanHero;