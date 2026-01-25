import React from 'react';
import { Rocket, Target, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Added Link import

const BusinessStarterLoanHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-600 to-emerald-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Business Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Rocket className="w-5 h-5" />
            <span className="font-bold">BUSINESS STARTER LOAN</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Launch Your <br />
            <span className="text-yellow-300">Dream Business</span> <br />
            <span className="italic font-light">with Our Support</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Turn your entrepreneurial vision into reality with our Business Starter Loan. 
            Get the funding you need to start strong and build a sustainable enterprise.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵200-₵5K</div>
                <div className="text-white/80 text-sm">Loan Amount</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">6-24</div>
                <div className="text-white/80 text-sm">Months Term</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Low</div>
                <div className="text-white/80 text-sm">Interest Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
              <div>
                <div className="font-bold text-lg">Easy</div>
                <div className="text-white/80 text-sm">Application</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/applyforloanpage"> {/* ✅ Changed to Link component */}
            <button className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Apply for Business Loan
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                  alt="Entrepreneur starting new business"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge 1 - Loan Amount */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-green-700 mb-1 flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  Loan Range
                </div>
                <div className="text-lg font-bold text-green-600">
                  ₵200 - ₵5,000
                </div>
              </div>

              {/* Badge 2 - Repayment */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Repayment Term
                </div>
                <div className="text-lg font-bold text-gray-900">
                  6-24 Months
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

              {/* Rocket icon decoration */}
              <div className="absolute -top-4 left-1/4 bg-emerald-600 rounded-full p-4 shadow-xl border-4 border-yellow-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStarterLoanHero;