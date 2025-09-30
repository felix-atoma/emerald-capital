import React from 'react';

const FixedDepositSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
          Fixed Deposit
        </h2>

        <div className="flex items-center gap-16">
          {/* Left side - Illustration */}
          <div className="flex-shrink-0">
            <div className="relative w-96">
              {/* Main illustration container */}
              <div className="relative">
                {/* Tree */}
                <div className="relative z-10 ml-16">
                  {/* Trunk */}
                  <div className="w-12 h-40 bg-gradient-to-b from-amber-800 to-amber-900 mx-auto rounded-sm"></div>
                  
                  {/* Foliage */}
                  <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
                    <div className="w-40 h-40 bg-gradient-to-br from-lime-400 to-green-600 rounded-full"></div>
                    <div className="absolute top-6 left-6 w-28 h-28 bg-gradient-to-br from-lime-300 to-green-500 rounded-full"></div>
                    <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-lime-500 to-green-700 rounded-full"></div>
                    <div className="absolute -top-2 left-12 w-16 h-16 bg-gradient-to-br from-lime-400 to-green-600 rounded-full"></div>
                  </div>
                </div>

                {/* Coins pile */}
                <div className="absolute bottom-0 left-0 w-80 h-32">
                  {Array(40).fill(null).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border-2 border-amber-700"
                      style={{
                        left: `${(i % 10) * 30 + Math.random() * 20}px`,
                        bottom: `${Math.floor(i / 10) * 12 + Math.random() * 8}px`,
                        transform: `rotate(${Math.random() * 30}deg)`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Guaranteed ROI callout */}
                <div className="absolute top-20 right-0 bg-white rounded-2xl shadow-xl p-4 border-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm font-bold text-gray-900 mb-2">Guaranteed ROI</div>
                      <svg className="w-24 h-16" viewBox="0 0 100 60" fill="none">
                        <path d="M10 50 L10 35 L30 42 L30 28 L50 35 L50 20 L70 27 L90 15" 
                          stroke="#64748b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="8" y="48" width="8" height="10" fill="#06b6d4" rx="2"/>
                        <rect x="28" y="40" width="8" height="18" fill="#06b6d4" rx="2"/>
                        <rect x="48" y="33" width="8" height="25" fill="#22d3ee" rx="2"/>
                        <rect x="68" y="25" width="8" height="33" fill="#22d3ee" rx="2"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-gray-300 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Achieve financial stability with our Fixed Deposit options, 
              providing you with a secure, high-yield investment tailored to 
              meet your savings goals. Our fixed deposit accounts offer 
              competitive interest rates, flexible terms, and guaranteed 
              returns, allowing you to grow your wealth confidently and 
              safely. Choose a term that suits your financial plan, and watch 
              your funds grow with peace of mind.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3 mt-1">•</span>
                  <span>Valid Identification (National ID, Driver's License, or Passport)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3 mt-1">•</span>
                  <span>Bank Verification Number (BVN)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3 mt-1">•</span>
                  <span>Completed KYC verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3 mt-1">•</span>
                  <span>Proof of income</span>
                </li>
              </ul>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Open A Fixed Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedDepositSection;