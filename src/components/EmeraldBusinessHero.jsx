import React from 'react';
import { Users, TrendingUp, Gem, Target, Building2, HandshakeIcon, Lightbulb, Globe } from 'lucide-react';

const EmeraldBusinessHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Gem className="w-5 h-5" />
            <span className="font-bold">EMERALD BUSINESS</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Capital & Expertise <br />
            <span className="text-green-300">For Your Growth</span> <br />
            <span className="italic font-light">Strategic Investment Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            We provide additional capital and expertise to support your regional growth, 
            investment strategy, and long-term business objectives. Partner with us to 
            unlock your enterprise's full potential.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Growth</div>
                <div className="text-white/80 text-sm">Capital</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Expert</div>
                <div className="text-white/80 text-sm">Guidance</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Regional</div>
                <div className="text-white/80 text-sm">Expansion</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Strategic</div>
                <div className="text-white/80 text-sm">Planning</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-green-400 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Partner With Us
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-green-300 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&crop=center"
                  alt="Business investment strategy and growth partnership"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Investment Partners */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-emerald-700 mb-1 flex items-center gap-1">
                  <HandshakeIcon className="w-3 h-3" />
                  Active Partners
                </div>
                <div className="text-lg font-bold text-emerald-600">
                  500+
                </div>
              </div>

              {/* Badge 2 - Investment Focus */}
              <div className="absolute bottom-8 -left-4 bg-green-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Investment Focus
                </div>
                <div className="text-lg font-bold text-gray-900">
                  SME Growth
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
                  stroke="#4ADE80"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Emerald decoration */}
              <div className="absolute -top-4 left-1/4 bg-green-600 rounded-full p-4 shadow-xl border-4 border-green-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmeraldBusinessHero;