import React from 'react';
import { CheckCircle } from 'lucide-react';

const MTGreenSolarDetails = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
          MT Green Solar
        </h2>

        <div className="flex items-center gap-16">
          {/* Left side - Solar equipment illustration */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-96 h-96">
              {/* Solar panel */}
              <div className="absolute top-0 left-0 w-48 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg transform -rotate-6 shadow-2xl z-10">
                {/* Solar cells grid */}
                <div className="grid grid-cols-4 gap-0.5 p-3 h-full">
                  {Array(32).fill(null).map((_, i) => (
                    <div key={i} className="bg-blue-900 rounded-sm border border-blue-800"></div>
                  ))}
                </div>
              </div>

              {/* Inverter (blue unit) */}
              <div className="absolute top-24 left-32 w-32 h-48 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-2xl z-20">
                <div className="bg-cyan-300 h-16 w-full rounded-t-lg flex items-center justify-center">
                  <div className="bg-cyan-500 w-20 h-8 rounded flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1">
                      {Array(6).fill(null).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-cyan-200 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-3 space-y-2">
                  <div className="bg-cyan-500 h-3 w-full rounded"></div>
                  <div className="bg-cyan-500 h-3 w-4/5 rounded"></div>
                  <div className="bg-cyan-500 h-3 w-full rounded"></div>
                  <div className="bg-cyan-500 h-3 w-3/5 rounded"></div>
                </div>
                {/* Diagonal pattern */}
                <div className="absolute inset-0 opacity-10">
                  {Array(12).fill(null).map((_, i) => (
                    <div 
                      key={i} 
                      className="h-px bg-white transform rotate-45" 
                      style={{marginTop: `${i * 8}px`}}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Battery (red/orange unit) */}
              <div className="absolute top-16 right-8 w-36 h-52 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg shadow-2xl z-20">
                <div className="bg-gray-200 h-12 w-full rounded-t-lg flex items-center justify-center px-3">
                  <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">MFP</div>
                </div>
                <div className="bg-gray-300 h-10 w-full flex items-center justify-center text-xs font-bold text-gray-700">
                  INVERTER SERIES
                </div>
                <div className="p-3">
                  <div className="bg-red-700 w-full h-28 rounded flex items-center justify-center">
                    <div className="text-white text-sm font-mono font-bold">
                      <div className="bg-black/40 px-3 py-1 rounded mb-2 text-center">12V</div>
                      <div className="bg-black/40 px-3 py-1 rounded text-center">200Ah</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection cable */}
              <div className="absolute bottom-16 right-20 w-20 h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-md"></div>

              {/* Shadow/base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-4 bg-gray-300 rounded-full blur-md opacity-30"></div>

              {/* Purchase badge */}
              <div className="absolute -top-4 right-0 bg-white rounded-full shadow-xl px-5 py-3 flex items-center gap-3 border-2 border-gray-100">
                <span className="text-sm font-bold text-gray-800 whitespace-nowrap">15kva purchased</span>
                <CheckCircle className="w-6 h-6 text-green-500 fill-green-500" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Power your home or business sustainably with MT Green Solar, 
              our solar asset financing solution. We provide flexible financing 
              options for purchasing solar energy systems, helping you 
              reduce electricity costs and embrace clean energy. Our 
              financing plans are designed to help you go green without the 
              upfront financial burden.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements:</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-1">6 Months Bank Statement:</p>
                  <p>We will need the last six months account statement of your business.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Collateral Documents:</p>
                  <p>Original collateral documents are also needed.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Valid Identification:</p>
                  <p>We will need your passport and any valid means of identification for KYC purposes.</p>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Apply For MT Green Solar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTGreenSolarDetails;