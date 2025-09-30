import React from "react";
import { CheckCircle } from "lucide-react";

const LoanDetailsSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-8">
        <div className="flex items-center gap-16">
          {/* Profile card */}
          <div className="relative flex-shrink-0">
            <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 -right-8 bg-white rounded-full px-6 py-3 shadow-xl border-2 border-gray-100">
              <p className="text-sm font-semibold text-gray-700">Loan Disbursement</p>
              <p className="text-2xl font-bold text-green-600">₦10,000,000</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              MTPlus <span className="text-red-600 italic">Loan</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Looking for a loan with flexible terms and low interest rates?
              The MTPlus Loan is perfect for Private salaried individuals,
              offering personal loans for various needs. From home
              improvement to debt consolidation, MTPlus Loan is designed to
              support your personal financial goals.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements:</h3>
              <ul className="space-y-3">
                {[
                  "Private Sector Employee",
                  "Solid Guarantor",
                  "A Good Netpay",
                  "BVN",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg">
              Apply For MTPlus Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanDetailsSection;
