import React from "react";  // ✅ Add this

import { Coins } from 'lucide-react';


export default function SavingsHeroBanner() {
  const savingsData = [
    { year: 1, amount: '300,000' },
    { year: 2, amount: '500,000' },
    { year: 3, amount: '1,000,000' }
  ];

  return (
    <div className="relative min-h-screen bg-red-600 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-700 rounded-full opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-700 rounded-full opacity-20" />
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-red-700 rounded-full opacity-25" />
      
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Save Smart,<br />
              Spend Wisely.<br />
              Take Control of<br />
              Your <span className="italic font-serif">Finances</span>
            </h1>
            
            <p className="text-lg lg:text-xl leading-relaxed max-w-xl">
              Save smart with our high-interest Savings Accounts designed to help you achieve your financial goals. Whether you're saving for the future, an emergency fund, or a major purchase.
            </p>
          </div>

          {/* Right Content - Piggy Bank with Savings */}
          <div className="relative flex justify-center items-center">
            {/* Circular background with piggy bank illustration */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Circular backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full shadow-2xl" />
              
              {/* Piggy bank representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-pink-300 rounded-full shadow-lg" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Coins className="w-16 h-16 text-pink-400" />
                  </div>
                </div>
              </div>
              
              {/* Floating coins */}
              <div className="absolute top-8 right-12 w-8 h-8 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
              <div className="absolute top-20 right-4 w-6 h-6 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.3s' }} />
              <div className="absolute top-12 left-8 w-7 h-7 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2.1s' }} />
              <div className="absolute bottom-20 right-16 w-5 h-5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '2.4s' }} />
              <div className="absolute bottom-12 left-12 w-6 h-6 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '2.2s' }} />
            </div>

            {/* Savings bubbles */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 space-y-4">
              {savingsData.map((saving) => (
                <div 
                  key={saving.year}
                  className="bg-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-xs text-gray-600 font-medium">Year {saving.year} savings</p>
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
      </div>
    </div>
  );
}