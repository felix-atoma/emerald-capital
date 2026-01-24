import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link

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
              Get easy access to quick loan with no collateral. Settle your
              financial needs with ease and fast!
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* ✅ Apply for Loan button now links to /loan-form */}
              <Link
                to="form"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Apply For Loan
                <div className="bg-white rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                </div>
              </Link>

              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">Support Email</span>
                <a
                  href="mailto:info@emeraldcapital.com"
                  className="text-gray-900 font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@emeraldcapital.com
                </a>
              </div>
            </div>

            {/* <div className="flex items-center gap-4 pt-8">
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
            </div> */}
          </div>

          {/* Right Content - Image Section */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-lg p-5">
              <img
                src="/New hero.png" // ✅ place `hero.png` inside `public/`
                alt="Microfinance illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
