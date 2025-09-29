import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

export default function LoanHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white/25 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Get your funds
                <br />
                in less than
                <br />
                <span className="italic text-purple-200">10 minutes!</span>
              </h1>
            </div>
            
            <p className="text-lg text-purple-100 max-w-md">
              Enjoy quick and easy access to funds faster than you can blink.
            </p>

            <div className="flex items-center gap-2 pt-4">
              <Clock className="w-5 h-5 text-purple-200" />
              <span className="text-sm text-purple-200">Fast approval process</span>
            </div>
          </div>

          {/* Right Content - Image with Speech Bubble */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image Circle */}
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" 
                  alt="Happy customer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speech Bubble */}
              <div className="absolute -bottom-4 -right-8 bg-white rounded-3xl shadow-2xl p-6 max-w-xs">
                <div className="text-center space-y-1">
                  <div className="text-xs text-gray-500 font-medium">Loan Disbursement</div>
                  <div className="text-2xl font-bold text-gray-900">₦1,000,000</div>
                  <div className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    PAID
                  </div>
                </div>
                {/* Speech bubble pointer */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-white transform rotate-45"></div>
              </div>

              {/* Decorative sparkle */}
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-300 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}