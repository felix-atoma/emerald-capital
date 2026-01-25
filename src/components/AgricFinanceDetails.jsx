import React from "react";
import { link } from "react-router-dom";

const AgricFinanceDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Image Section */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Circular Image */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop"
                  alt="Farmer working with plants"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <div className="absolute top-1/3 -right-4 bg-white rounded-full px-6 py-3 shadow-xl border border-gray-100">
                <div className="text-xs font-semibold text-gray-700 mb-1">
                  Fertilizers purchased
                </div>
                <div className="text-lg font-bold text-green-600">
                  ₦2,000,000
                </div>
              </div>

              {/* Decorative curved line */}
              <svg
                className="absolute -bottom-6 -right-8 w-32 h-32"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M 20 80 Q 50 20 80 60"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agric Finance
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Boost your agricultural business with our Agric Asset Finance,
              designed to provide flexible financing for essential tools,
              machinery, and equipment. We understand the unique challenges
              faced by agribusinesses and offer tailored solutions to help you
              increase productivity, reduce costs, and improve profitability.
              With competitive interest rates, easy application, and quick
              approval, our Agric Asset Finance is here to support sustainable
              growth in the agricultural sector.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Requirements:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Registered Agribusiness or Cooperative</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Business Plan or Project Proposal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Completed KYC verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Valid Identification (National ID, Driver's License, or
                    Passport)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bank Verification Number (BVN)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Completed KYC verification</span>
                </li>
              </ul>
            </div>

            <Link to="applyforloanpage">
              {" "}
              {/* Without leading slash for relative path */}
              <button className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Apply for Loan Assistance
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricFinanceDetails;
