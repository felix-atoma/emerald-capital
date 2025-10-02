import React from "react";
import { ArrowRight } from "lucide-react";

function Car4CashLoanDetails() {
  const requirements = [
    "Car",
    "BVN",
    "Email",
    "Employer or Business Details",
    "Valuation Report",
    "Loan amount & Tenor",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Visual - Car Image in Circle */}
        <div className="relative">
          <div className="bg-gray-200 rounded-full w-full aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl p-8">
            
            {/* Car Image Placeholder from public folder */}
            <img
              src="/car.png"   // ✅ ensure image is in public folder (e.g., public/car.png)
              alt="Car Loan Illustration"
              className="w-full h-full object-contain rounded-full"
            />

            {/* Value Badge */}
            <div className="absolute top-12 right-1/2 transform translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-gray-300 z-20">
              <p className="text-sm font-semibold whitespace-nowrap">
                <span className="text-gray-800">2024 Benz = </span>
                <span className="text-green-500">₦100,000,000</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Car4Cash <span className="text-red-500 italic">Loan</span>
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Need cash fast? Use your car as collateral with our Car4Cash loan.
            Borrow against the value of your vehicle. We offer quick approval
            and flexible terms so you can get the cash you need without selling
            your car.
          </p>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Requirements:
            </h3>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-800 text-lg"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 group">
            Apply For Car4Cash Loan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Car4CashLoanDetails;
