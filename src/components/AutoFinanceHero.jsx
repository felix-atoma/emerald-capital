import React from 'react';

const AutoFinanceHero = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Image 1 */}
      <section className="bg-gradient-to-br from-red-400 to-red-500 text-white py-20 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Drive Your Dreams with{' '}
              <span className="italic font-light">Flexible Auto Finance</span>
            </h1>
            <p className="text-lg text-white/90">
              Own your ideal vehicle with our affordable financing options
            </p>
            <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Apply for Auto Finance
            </button>
          </div>

          {/* Right Content - Image with Badge */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Happy car owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-8 right-0 bg-white text-gray-900 rounded-full px-6 py-4 shadow-xl">
                <div className="text-xs font-semibold text-gray-600">2024</div>
                <div className="text-sm font-bold">Camry purchased</div>
                <div className="text-lg font-bold text-red-500">₦30,000,000</div>
                <div className="text-2xl text-green-500 text-center mt-1">✓</div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-red-600/30 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/25 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Details Section - Image 2 */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image with Badge */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Happy car owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-8 -right-4 bg-white text-gray-900 rounded-full px-6 py-4 shadow-xl border border-gray-100">
                <div className="text-xs font-semibold text-gray-600">2024</div>
                <div className="text-sm font-bold">Camry purchased</div>
                <div className="text-lg font-bold text-green-600">₦30,000,000</div>
                <div className="text-2xl text-green-500 text-center mt-1">✓</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Auto Finance
            </h2>
            
            <p className="text-gray-700 leading-relaxed">
              Realize your dream of vehicle ownership with our tailored Auto Finance solutions, 
              designed to make purchasing a car simple and affordable. With competitive rates, 
              flexible repayment terms, and a fast approval process, our Auto Finance is ideal 
              for individuals and businesses looking to invest in reliable transportation. 
              Whether it's a personal vehicle or a fleet for business, we make vehicle financing 
              easy and stress-free.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Requirements:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Valid Identification (National ID, Driver's License, or Passport)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bank Verification Number (BVN)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Completed KYC verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proof of income</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Quotation for the desired vehicle</span>
                </li>
              </ul>
            </div>

            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
              Apply For Auto Finance
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoFinanceHero;