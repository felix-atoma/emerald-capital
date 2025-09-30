// src/components/TreasuryNoteDetails.jsx
import React from "react";

const TreasuryNoteDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-8 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex justify-center">
          <div className="relative w-96 h-96 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center shadow-2xl">
            {/* Plants */}
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-2">
              {/* Repeat plant shapes */}
              {/* ...same as hero for brevity */}
            </div>

            {/* Coins */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  {[...Array(Math.floor(Math.random() * 5) + 3)].map((_, j) => (
                    <div
                      key={j}
                      className="w-6 h-2 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full border-t border-amber-400"
                    ></div>
                  ))}
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="absolute right-4 top-1/2 transform translate-x-12 bg-white rounded-full px-5 py-2 shadow-lg border-2 border-gray-100">
              <span className="text-emerald-600 font-bold text-base">Guaranteed</span>
              <span className="text-gray-800 font-bold text-base"> |ROI|</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Treasury Note</h2>
          <p className="text-gray-700 leading-relaxed">
            Achieve financial security with our Treasury Notes, offering you a
            stable and lucrative investment option with guaranteed returns.
            Our Treasury Notes provide an opportunity to grow your wealth
            with peace of mind, offering secure, government-backed
            investments with attractive yields and flexible terms.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">Requirements:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Valid Identification (National ID, Driver's License, or Passport)</li>
              <li>Bank Verification Number (BVN)</li>
              <li>Completed KYC verification</li>
              <li>Proof of income or investment source</li>
            </ul>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
            Invest In Treasury Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreasuryNoteDetails;
