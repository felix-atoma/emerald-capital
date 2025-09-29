import React from 'react';
import { CheckCircle, Shield, Clock, TrendingDown } from 'lucide-react';

export default function IPPISLoan() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image with Speech Bubble */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Profile Image Circle */}
              <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop" 
                  alt="Government worker"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speech Bubble */}
              <div className="absolute bottom-8 -right-12 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                <div className="text-center space-y-1">
                  <div className="text-xs text-gray-500 font-medium">Loan Disbursement</div>
                  <div className="text-2xl font-bold text-gray-900">₦1,000,000</div>
                  <div className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    PAID
                  </div>
                </div>
                {/* Speech bubble pointer */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-l border-b border-gray-100 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                IPPIS <span className="text-red-600">Loan</span>
              </h1>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Are you a government worker? Our IPPIS Loan offers special terms for public sector employees, giving you fast access to funds with minimal paperwork. Enjoy low-interest rates and flexible repayment plans tailored to suit your salary structure. Apply today and secure the financial support you need.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Requirements:</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">BVN</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Federal Civil Servant</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Enrolled with IPPIS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">A Good Netpay</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Apply For IPPIS Loan
              </button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Fast Approval</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingDown className="w-4 h-4 text-green-600" />
                <span>Low Interest</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-purple-600" />
                <span>Secure Process</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}