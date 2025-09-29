import React from "react";  // ✅ Add this

import { Coins } from 'lucide-react';

export default function SavingsAccountSection() {
  const savingsData = [
    { year: 1, amount: '300,000' },
    { year: 2, amount: '500,000' },
    { year: 3, amount: '1,000,000' }
  ];

  const requirements = [
    'BVN',
    'NIN',
    'Passport',
    'Residence Details',
    'Utility Bill'
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Piggy Bank Image */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-96">
              {/* Circular image container */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-amber-200">
                {/* Piggy bank representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 bg-pink-300 rounded-full shadow-lg" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Coins className="w-20 h-20 text-pink-400" />
                    </div>
                  </div>
                </div>
                
                {/* Floating coins */}
                <div className="absolute top-12 right-16 w-8 h-8 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
                <div className="absolute top-24 right-8 w-6 h-6 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.3s' }} />
                <div className="absolute top-16 left-12 w-7 h-7 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2.1s' }} />
                <div className="absolute bottom-24 right-20 w-5 h-5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '2.4s' }} />
                <div className="absolute bottom-16 left-16 w-6 h-6 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '2.2s' }} />
              </div>

              {/* Savings bubbles */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-24 space-y-4">
                {savingsData.map((saving) => (
                  <div 
                    key={saving.year}
                    className="bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                  >
                    <p className="text-xs text-gray-700 font-medium">Year {saving.year} savings</p>
                    <p className={`text-xl font-bold ${
                      saving.year === 1 ? 'text-green-400' : 
                      saving.year === 2 ? 'text-green-500' : 
                      'text-green-600'
                    }`}>
                      {saving.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Savings <span className="text-red-600 italic">Account</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Mutual Trust MFBank provides flexible saving options, competitive interest rates, and easy access through online banking. Start building your savings today and watch your money grow securely.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Requirements:</h3>
              <ul className="space-y-2">
                {requirements.map((req, index) => (
                  <li key={index} className="text-gray-700 text-lg">
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg">
              Open A Savings Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}