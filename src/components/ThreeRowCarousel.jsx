import React from 'react';

const ThreeRowCarousel = () => {
  // Top Row Logos
  const topRowLogos = [
    { id: 1, name: "NNPC", color: "bg-gradient-to-br from-green-600 to-red-600" },
    { id: 2, name: "EFCC", color: "bg-gradient-to-br from-red-700 to-red-900" },
    { id: 3, name: "NIS", color: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { id: 4, name: "SMEDAN", color: "bg-gradient-to-br from-green-700 to-green-900" },
    { id: 5, name: "NAFDAC", color: "bg-gradient-to-br from-green-600 to-green-800" },
    { id: 6, name: "NASENI", color: "bg-gradient-to-br from-yellow-600 to-yellow-800" },
    { id: 7, name: "CBN", color: "bg-gradient-to-br from-green-700 to-green-900" },
    { id: 8, name: "FIRS", color: "bg-gradient-to-br from-blue-700 to-blue-900" },
    { id: 9, name: "SEC", color: "bg-gradient-to-br from-red-600 to-red-800" },
    { id: 10, name: "PENCOM", color: "bg-gradient-to-br from-purple-600 to-purple-800" }
  ];

  // Middle Row Logos
  const middleRowLogos = [
    { id: 11, name: "NDIC", color: "bg-gradient-to-br from-green-600 to-red-600" },
    { id: 12, name: "NIMC", color: "bg-gradient-to-br from-red-700 to-red-900" },
    { id: 13, name: "ICPC", color: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { id: 14, name: "NAICOM", color: "bg-gradient-to-br from-green-700 to-green-900" },
    { id: 15, name: "NCC", color: "bg-gradient-to-br from-green-600 to-green-800" },
    { id: 16, name: "NITDA", color: "bg-gradient-to-br from-yellow-600 to-yellow-800" },
    { id: 17, name: "NSE", color: "bg-gradient-to-br from-green-700 to-green-900" },
    { id: 18, name: "FMBN", color: "bg-gradient-to-br from-blue-700 to-blue-900" },
    { id: 19, name: "NPA", color: "bg-gradient-to-br from-red-600 to-red-800" },
    { id: 20, name: "NIMASA", color: "bg-gradient-to-br from-purple-600 to-purple-800" }
  ];

  // Bottom Row Logos
  const bottomRowLogos = [
    { id: 21, name: "FAAN", color: "bg-gradient-to-br from-green-600 to-red-600" },
    { id: 22, name: "NCAA", color: "bg-gradient-to-br from-red-700 to-red-900" },
    { id: 23, name: "NERC", color: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { id: 24, name: "BPE", color: "bg-gradient-to-br from-green-700 to-green-900" },
    { id: 25, name: "DMO", color: "bg-gradient-to-br from-green-600 to-green-800" },
    { id: 26, name: "NEPZA", color: "bg-gradient-to-br from-yellow-600 to-yellow-800" },
    { id: 27, name: "NOTAP", color: "bg-gradient-to-br from-green-700 to-green-900" },
    { id: 28, name: "NEPRA", color: "bg-gradient-to-br from-blue-700 to-blue-900" },
    { id: 29, name: "FERMA", color: "bg-gradient-to-br from-red-600 to-red-800" },
    { id: 30, name: "NEXIM", color: "bg-gradient-to-br from-purple-600 to-purple-800" }
  ];

  const LogoCard = ({ logo }) => (
    <div className="flex-shrink-0 w-56 h-32 mx-4">
      <div className={`${logo.color} rounded-2xl shadow-lg flex items-center justify-center h-full group hover:scale-105 transition-transform duration-300`}>
        <div className="text-white text-3xl font-bold tracking-wider">
          {logo.name}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 py-20 overflow-hidden">
      <div className="mb-16 text-center px-4">
        <h2 className="text-5xl font-bold text-white mb-4">Our Partners</h2>
        <p className="text-gray-400 text-lg">Trusted by leading organizations across Nigeria</p>
      </div>

      <div className="space-y-8">
        {/* Top Row - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {[...topRowLogos, ...topRowLogos, ...topRowLogos].map((logo, index) => (
              <LogoCard key={`top-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Middle Row - Moving Left */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...middleRowLogos, ...middleRowLogos, ...middleRowLogos].map((logo, index) => (
              <LogoCard key={`middle-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
              <LogoCard key={`bottom-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ThreeRowCarousel;