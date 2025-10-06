import React from "react";
export default function WhoWeAre() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden py-20 px-6">
      {/* Decorative Background Elements */}
      
      {/* Spider web lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="85%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="15%" y1="35%" x2="70%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="25%" y1="45%" x2="90%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="5%" y1="60%" x2="60%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="40%" y1="25%" x2="85%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1" />
      </svg>

      {/* Bubble decorations - Left side */}
      <div className="absolute left-0 top-1/4 w-16 h-16 rounded-full bg-purple-500 opacity-70 blur-sm"></div>
      <div className="absolute left-8 top-1/3 w-24 h-24 rounded-full border-2 border-gray-200 opacity-40"></div>
      <div className="absolute left-4 bottom-1/3 w-12 h-12 rounded-full bg-gray-200 opacity-50"></div>
      <div className="absolute left-16 top-1/2 w-8 h-8 rounded-full bg-purple-400 opacity-60"></div>
      
      {/* Bubble decorations - Right side */}
      <div className="absolute right-0 top-1/4 w-32 h-32 rounded-full bg-red-400 opacity-60"></div>
      <div className="absolute right-16 top-1/3 w-20 h-20 rounded-full bg-red-300 opacity-50 blur-sm"></div>
      <div className="absolute right-4 top-16 w-10 h-10 rounded-full bg-purple-400 opacity-50"></div>
      <div className="absolute right-32 bottom-1/4 w-16 h-16 rounded-full bg-gray-200 opacity-40"></div>
      
      {/* Bubble decorations - Center area */}
      <div className="absolute left-1/4 top-1/2 w-14 h-14 rounded-full bg-purple-400 opacity-40"></div>
      <div className="absolute left-1/3 bottom-1/3 w-24 h-24 rounded-full bg-gray-100 opacity-60"></div>
      <div className="absolute right-1/3 top-2/3 w-20 h-20 rounded-full bg-gray-200 opacity-50"></div>
      <div className="absolute left-1/2 top-1/3 w-10 h-10 rounded-full bg-purple-500 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
          Who We <span className="text-purple-500">Are</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Emerald Capital is a dynamic financial institution that 
          specializes in providing tailored banking services for individuals and 
          businesses. We believe in building long-lasting relationships with our 
          customers, offering personalized solutions that empower and transform 
          lives.
        </p>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
}