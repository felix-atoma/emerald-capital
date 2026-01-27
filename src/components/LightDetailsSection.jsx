import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const LightDetailsSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/34r33.jpg"
                  alt="Business owners celebrating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-8 right-0 bg-white rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">SME Loan</p>
                    <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                      Approved <Check className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="bg-blue-700 text-white p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-6">
              SME <span className="italic font-light">Loan</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Empower your business with our SME Loans tailored specifically for
              small and medium enterprises. With favorable terms and fast
              approval, we help SMEs access the capital needed for expansion,
              working capital, or equipment financing.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 italic">Requirements:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Registered Business</li>
                <li>• CAC Documents</li>
                <li>• KYC verification</li>
                <li>• BVM</li>
              </ul>
            </div>

            <Link 
              to="/applyforloanpage"
              aria-label="Apply for SME Loan"
            >
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-500/50">
                Apply For SME Loan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightDetailsSection;