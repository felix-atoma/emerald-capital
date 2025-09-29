import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function CorporateAccountLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Business,
              <br />
              Our Priority.
              <br />
              Open a
              <br />
              Corporate
              <br />
              <span className="italic font-light">Account Today</span>
            </h1>
            <p className="text-lg text-purple-100 max-w-xl">
              Streamline your business operations with our Corporate Accounts designed to provide smooth, hassle-free banking services for companies of all sizes..
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute top-4 right-4 bg-white rounded-full px-6 py-3 shadow-lg z-10">
                <p className="text-sm font-semibold text-gray-800">Company XYZ</p>
                <p className="text-sm font-bold text-green-500">Fully Registered</p>
              </div>
              <div className="rounded-full overflow-hidden shadow-2xl border-8 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1554224311-beee2c470c77?w=600&h=600&fit=crop"
                  alt="Professional signing documents"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute top-20 left-0 w-3 h-3 bg-purple-300 rounded-full opacity-60"></div>
            <div className="absolute top-32 left-12 w-2 h-2 bg-purple-200 rounded-full opacity-40"></div>
            <div className="absolute top-40 left-6 w-4 h-4 bg-purple-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-32 right-12 w-3 h-3 bg-purple-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute top-4 right-4 bg-white rounded-full px-6 py-3 shadow-lg z-10 border border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">Company XYZ</p>
                  <p className="text-sm font-bold text-green-500">Fully Registered</p>
                </div>
                <div className="rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224311-beee2c470c77?w=600&h=600&fit=crop"
                    alt="Professional signing documents"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Corporate <span className="text-red-600 italic">Account</span>
              </h2>
              
              <p className="text-gray-700 text-lg mb-8">
                Our corporate banking solutions come with easy access to transactions, payroll management, and business loans. Take advantage of tailored financial solutions to help your business grow
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>BVN</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>CAC Documents</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>KYC verification</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Residence Details</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Utility Bill</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-lg mb-8">
                Our corporate banking solutions come with easy access to transactions, payroll management, and business loans. Take advantage of tailored financial solutions to help your business grow
              </p>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
                Open A Corporate Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}