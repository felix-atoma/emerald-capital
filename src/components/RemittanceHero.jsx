import React from 'react';
import { Send, Globe, Shield, Clock } from 'lucide-react';

const RemittanceHero = () => {
  return (
    <div className="bg-red-600 min-h-screen flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Send Money <br />
            <span className="italic font-light">Anywhere</span> in <br />
            <span className="text-yellow-300">Minutes</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Fast, secure, and affordable money transfers across Ghana and worldwide. 
            Experience the convenience of digital remittance with Emerald Capital.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">150+</div>
                <div className="text-white/80 text-sm">Countries</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">30min</div>
                <div className="text-white/80 text-sm">Fast Transfer</div>
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
          </div>

          {/* CTA Button */}
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
            Start Transfer Now
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
              <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
              <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/Remiitance.jpeg"
                  alt="Person using digital banking on phone"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge 1 */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                  <Send className="w-3 h-3" />
                  Money Sent
                </div>
                <div className="text-lg font-bold text-red-600">
                  $15,000
                </div>
              </div>

              {/* Badge 2 */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Exchange Rate
                </div>
                <div className="text-lg font-bold text-gray-900">
                  1 GHS = 0.067 USD
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
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Globe icon decoration */}
              <div className="absolute -top-4 left-1/4 bg-blue-500 rounded-full p-4 shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemittanceHero;