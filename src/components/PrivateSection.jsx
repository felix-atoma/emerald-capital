import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const PrivateSectorLoan = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 p-6">
        {/* Left Section - Hero Image and Content */}
        <div className="lg:w-2/3">
          {/* Hero Image */}
          <div className="relative mb-6">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Two women at a market with fresh vegetables" 
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Private Sector Loan
            </h1>
            
            <p className="text-gray-600 mb-2">
              Are you a private sector employee looking for fast and easy loans in Nigeria? Look no further!
            </p>
            
            <p className="text-gray-600 mb-8">
              Let's get rid of your financial worries today. Get a quick loan with no hassles.
            </p>

            {/* Requirements Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Requirements</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">6 Months Bank Statement:</span>
                    <span className="text-gray-600 ml-1">
                      We will need the last six months account statement of your business.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Collateral Documents:</span>
                    <span className="text-gray-600 ml-1">
                      Original collateral documents are also needed.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Valid Identification:</span>
                    <span className="text-gray-600 ml-1">
                      We will need your passport and any valid means of identification for KYC purposes.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Started Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-colors">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Section - Service Categories and CTA */}
        <div className="lg:w-1/3 space-y-6">
          {/* Service Category */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Service Category</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                <span className="text-gray-700">10 Hours Prompt Loan</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </div>
              
              <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                <span className="text-gray-700">Mutual Plus Loan</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </div>
              
              <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                <span className="text-gray-700">MT loans</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </div>
              
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700">SME Loans</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-red-500 font-semibold mb-2">Call To Action</p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Make An Custom Request
            </h3>

            {/* Phone mockup */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-64 bg-black rounded-3xl p-1">
                  <div className="w-full h-full bg-white rounded-3xl relative overflow-hidden">
                    {/* Phone notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black rounded-full"></div>
                    
                    {/* Phone content */}
                    <div className="pt-8 px-4 h-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
              Get A Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateSectorLoan;