import React from 'react';
import { Users, TrendingUp, ShieldCheck, Target } from 'lucide-react';

const InsuranceProductsHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-amber-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-bold">INSURANCE PRODUCTS</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Protect What <br />
            <span className="text-orange-300">Matters Most</span> <br />
            <span className="italic font-light">with Comprehensive Coverage</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Secure your future with our comprehensive insurance solutions. From 
            life and health to property and business insurance, we provide the 
            protection you need for peace of mind and financial security.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵5K+</div>
                <div className="text-white/80 text-sm">Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Multiple</div>
                <div className="text-white/80 text-sm">Plans</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Full</div>
                <div className="text-white/80 text-sm">Protection</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🛡️</span>
              </div>
              <div>
                <div className="font-bold text-lg">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-orange-400 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Get Insurance Quote
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-orange-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-orange-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-orange-300 shadow-2xl">
                <img
                  src="/ytty.jpg"
                  alt="Family protection and insurance coverage"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Policyholders */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-red-700 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Policyholders
                </div>
                <div className="text-lg font-bold text-red-600">
                  45,000+
                </div>
              </div>

              {/* Badge 2 - Coverage */}
              <div className="absolute bottom-8 -left-4 bg-orange-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Claims Paid
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ₵150M+
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
                  stroke="#FB923C"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Insurance decoration */}
              <div className="absolute -top-4 left-1/4 bg-orange-600 rounded-full p-4 shadow-xl border-4 border-orange-300">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceProductsHero;