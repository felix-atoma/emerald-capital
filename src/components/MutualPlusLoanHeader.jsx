import React from 'react';

const MutualPlusLoanHeader = () => {
  return (
    <div className="relative w-full h-80 bg-red-500 overflow-hidden flex items-center justify-start px-8 lg:px-16">
      {/* Main Title */}
      <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white z-10">
        Mutual Plus Loan
      </h1>
      
      {/* Animated Loading Dots */}
      <div className="absolute top-12 right-16 lg:right-24">
        <div className="relative">
          {/* Large dot */}
          <div className="w-8 h-8 rounded-full bg-white opacity-80 animate-pulse"></div>
          
          {/* Medium dot */}
          <div 
            className="absolute -bottom-6 -right-4 w-5 h-5 rounded-full bg-white opacity-60"
            style={{
              animation: 'rainbow-pulse 2s ease-in-out infinite',
              animationDelay: '0.3s'
            }}
          ></div>
          
          {/* Small dot */}
          <div 
            className="absolute -bottom-12 -right-8 w-2 h-2 rounded-full bg-white opacity-40"
            style={{
              animation: 'rainbow-pulse 2s ease-in-out infinite',
              animationDelay: '0.6s'
            }}
          ></div>
        </div>
      </div>

      {/* Additional decorative dots scattered */}
      <div className="absolute top-20 right-32 w-3 h-3 rounded-full bg-white opacity-30 animate-ping"></div>
      <div className="absolute top-32 right-20 w-1 h-1 rounded-full bg-white opacity-50 animate-pulse"></div>
      <div className="absolute top-24 right-40 w-2 h-2 rounded-full bg-white opacity-25 animate-bounce"></div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
      
      <style jsx>{`
        @keyframes rainbow-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
            filter: hue-rotate(0deg);
          }
          25% {
            transform: scale(1.2);
            opacity: 0.8;
            filter: hue-rotate(90deg);
          }
          50% {
            transform: scale(1.4);
            opacity: 1;
            filter: hue-rotate(180deg);
          }
          75% {
            transform: scale(1.2);
            opacity: 0.8;
            filter: hue-rotate(270deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MutualPlusLoanHeader;