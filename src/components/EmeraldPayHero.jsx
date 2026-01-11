import React from 'react';
import { Users, TrendingUp, Smartphone, Target } from 'lucide-react';

const EmeraldPayHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Smartphone className="w-5 h-5" />
            <span className="font-bold">EMERALD PAY</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Pay Anywhere <br />
            <span className="text-pink-300">Instantly</span> <br />
            <span className="italic font-light">with Mobile Payments</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Experience seamless digital payments with Emerald Pay. Send money, 
            pay bills, buy airtime, and make purchases instantly from your phone. 
            Fast, secure, and convenient mobile money at your fingertips.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Instant</div>
                <div className="text-white/80 text-sm">Transfers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">24/7</div>
                <div className="text-white/80 text-sm">Available</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Zero</div>
                <div className="text-white/80 text-sm">Setup Fee</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <div className="font-bold text-lg">100%</div>
                <div className="text-white/80 text-sm">Secure</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-pink-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Get Emerald Pay Now
          </button>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-pink-300 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=800&fit=crop&crop=center"
                  alt="Mobile payment and digital wallet on smartphone"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Active Users */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Active Users
                </div>
                <div className="text-lg font-bold text-purple-600">
                  250,000+
                </div>
              </div>

              {/* Badge 2 - Transactions */}
              <div className="absolute bottom-8 -left-4 bg-pink-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Daily Transactions
                </div>
                <div className="text-lg font-bold text-gray-900">
                  50,000+
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
                  stroke="#F9A8D4"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Mobile decoration */}
              <div className="absolute -top-4 left-1/4 bg-fuchsia-600 rounded-full p-4 shadow-xl border-4 border-pink-300">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmeraldPayHero;