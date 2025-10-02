import React from "react";

const MTLoansSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative">
              {/* Orange Circle Background */}
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center p-12">
                <div className="relative">
                 <div className="bg-white rounded-3xl p-4 shadow-2xl transform -rotate-12">
  <div className="w-48 h-96 rounded-2xl overflow-hidden">
    <img
      src="phone.png"   // ✅ put your image in /public folder OR import from /src/assets
      alt="MTLoan App Preview"
      className="w-full h-full object-cover"
    />
  </div>
</div>


                  {/* Approval Badge */}
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 border-2 border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-gray-800">Approved</span>
                    </div>
                    <div className="text-xs text-gray-600">Loan Approved (00:05:10)</div>
                    <div className="text-sm font-bold text-gray-800 mt-1">₦ 2,000,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">MTLoans</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need a personal loan, a business loan, or working capital, we
              offer flexible repayment options and competitive interest rates to meet
              your financial needs. Get approved in minutes and secure the funds to
              achieve your goals.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Requirements:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• BVN</li>
                <li>• Email</li>
                <li>• Employer Details</li>
                <li>• Salary Account Details</li>
                <li>• Loan amount & Tenor</li>
              </ul>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
              Apply For MTLoan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTLoansSection;
