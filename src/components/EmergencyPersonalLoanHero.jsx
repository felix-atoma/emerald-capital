import React from 'react';
import { AlertCircle, Zap, Shield, Heart } from 'lucide-react';

const EmergencyPersonalLoanHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-orange-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <AlertCircle className="w-5 h-5" />
            <span className="font-bold">EMERGENCY & PERSONAL LOAN</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Immediate <br />
            <span className="text-yellow-300">Financial Support</span> <br />
            <span className="italic font-light">When You Need It Most</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Get quick access to funds for unexpected expenses, medical emergencies, 
            or urgent personal needs. Our emergency loan provides fast relief when 
            life throws you a curveball.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵100-₵2.5K</div>
                <div className="text-white/80 text-sm">Loan Amount</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">3-12</div>
                <div className="text-white/80 text-sm">Months Term</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">24/7</div>
                <div className="text-white/80 text-sm">Availability</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <div className="font-bold text-lg">Fast</div>
                <div className="text-white/80 text-sm">Approval</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Apply for Emergency Loan
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
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=800&fit=crop&crop=center"
                  alt="Person receiving financial assistance during emergency"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Loan Amount */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-red-700 mb-1 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Quick Relief
                </div>
                <div className="text-lg font-bold text-red-600">
                  ₵100 - ₵2,500
                </div>
              </div>

              {/* Badge 2 - Processing Time */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Processing Time
                </div>
                <div className="text-lg font-bold text-gray-900">
                  4-24 Hours
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

              {/* Alert icon decoration */}
              <div className="absolute -top-4 left-1/4 bg-orange-600 rounded-full p-4 shadow-xl border-4 border-yellow-300">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPersonalLoanHero;