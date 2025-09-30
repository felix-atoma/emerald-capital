import React from 'react';

const MudarabahHero = () => {
  return (
    <div className="relative bg-red-600 py-20 px-8 overflow-hidden">
      {/* Decorative foam circles */}
      <div className="absolute top-20 right-32 w-12 h-12 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-32 right-48 w-6 h-6 bg-white rounded-full opacity-90"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-70"></div>
      <div className="absolute top-28 right-64 w-4 h-4 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-36 right-36 w-5 h-5 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-24 right-56 w-2 h-2 bg-white rounded-full opacity-90"></div>
      
      {/* Additional scattered foam particles */}
      <div className="absolute top-44 right-28 w-2 h-2 bg-white rounded-full opacity-50"></div>
      <div className="absolute top-16 right-40 w-3 h-3 bg-white rounded-full opacity-70"></div>
      <div className="absolute top-52 right-44 w-4 h-4 bg-white rounded-full opacity-60"></div>

      {/* Content container */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-7xl font-bold text-white mb-8">
            Mudarabah
          </h1>
          
          {/* Decorative white line */}
          <div className="relative flex items-center justify-center max-w-md">
            <div className="h-1 bg-white w-80 relative">
              {/* Small decorative circles on the line */}
              <div className="absolute -top-1 left-8 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute -top-2 left-32 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute -top-1.5 right-16 w-3.5 h-3.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MudarabahHero;