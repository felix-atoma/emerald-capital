import React from 'react';
import { ChevronRight } from 'lucide-react';

const MudarabahService = () => {
  const services = [
    '10 Hours Prompt Loan',
    'Mutual Plus Loan',
    'MT loans',
    'SME Loans',
    'IPPIS Loans',
    'Car4Cash Loan',
    'SME Loans',
    'Treasury Note',
    'Fix Deposit',
    'Mudarabah',
    'Mt Green Solar'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Section - Image and Description */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556742400-b5a6f0dd6578?w=800&h=600&fit=crop" 
                alt="Business women looking at phone"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Mudarabah Description */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Mudarabah</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Looking for Sharia-compliant investments? Our Mudarabah investment products offer ethical 
                investment opportunities with shared profits. Ideal for individuals seeking interest-free returns 
                while adhering to Islamic financial principles.
              </p>
            </div>
          </div>

          {/* Right Section - Services Sidebar and CTA */}
          <div className="space-y-8">
            {/* Services Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="w-full flex items-center justify-between text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <span className="text-gray-700 group-hover:text-gray-900">{service}</span>
                      <ChevronRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action Card */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg p-8 text-center relative overflow-hidden">
              {/* Decorative dots pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <div className="grid grid-cols-8 gap-1 p-4">
                  {Array(64).fill(null).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-red-600 font-semibold text-sm mb-3">Call To Action</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Make An Custom<br />Request
                </h3>

                {/* Phone mockup */}
                <div className="relative inline-block mb-8">
                  <div className="w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
                      
                      {/* Chat icon */}
                      <div className="relative">
                        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                          <rect x="12" y="20" width="28" height="24" rx="4" fill="#2563eb" />
                          <rect x="24" y="12" width="28" height="24" rx="4" fill="#3b82f6" />
                          <circle cx="32" cy="20" r="2" fill="white" />
                          <circle cx="40" cy="20" r="2" fill="white" />
                          <circle cx="32" cy="28" r="2" fill="white" />
                          <circle cx="40" cy="28" r="2" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Get Quote Button */}
                <button className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-4 transition-all">
                  Get A Quote
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MudarabahService;