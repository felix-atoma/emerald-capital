import React from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function MicrofinanceHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-red-600 font-semibold tracking-wide uppercase text-sm">
              A LEADING MICROFINANCE BANK IN GHANA.
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Get a fast and flexible loan in less than 10 minutes
            </h1>

            <p className="text-lg text-gray-700">
              Get easy access to quick loan with no collateral. Settle your financial needs with ease and fast!
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Apply For Loan
                <div className="bg-white rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                </div>
              </button>

              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">Support Email</span>
                <a
                  href="mailto:support@ghanatrustmfb.com"
                  className="text-gray-900 font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  support@ghanatrustmfb.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <span className="text-gray-700 font-medium">We are licensed by</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BoG</span>
                </div>
              </div>
              <span className="text-gray-700 font-medium">and insured by</span>
              <div className="px-4 py-2 bg-blue-900 rounded text-white font-bold text-sm">
                GHDIC
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-orange-200 to-purple-300 rounded-full opacity-50"></div>

              <div className="absolute inset-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-full overflow-hidden">
                <div className="w-full h-full flex items-end justify-center">
                  <div className="w-32 h-32 bg-gray-700 rounded-full mb-8"></div>
                </div>
              </div>

              {/* Transaction Cards */}
              <div className="absolute top-16 -left-4 bg-white rounded-2xl shadow-2xl p-4 w-64 transform -rotate-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Kwame Mensah</p>
                    <p className="text-xs text-gray-500">Payment for Office</p>
                  </div>
                  <span className="ml-auto text-green-600 font-bold">₵80.00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">⚡ GAIN</span>
                </div>
              </div>

              <div className="absolute bottom-24 -right-4 bg-white rounded-2xl shadow-2xl p-4 w-64 transform rotate-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Ama Asante</p>
                    <p className="text-xs font-bold text-gray-900">Bill Payment</p>
                    <p className="text-xs text-gray-500">📍 Yaa Asantewaa</p>
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <span className="text-green-600 font-bold">₵120.00</span>
                    <span className="text-xs text-gray-600 flex items-center gap-1">⚡ PAID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
