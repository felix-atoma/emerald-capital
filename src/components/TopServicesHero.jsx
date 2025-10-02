import React from 'react';
import { Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

const TopServicesHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 flex items-center justify-center overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative">
          <h1 className="text-[18rem] sm:text-[22rem] md:text-[28rem] lg:text-[35rem] xl:text-[40rem] font-black text-orange-200 opacity-30 select-none leading-none tracking-tighter">
            100%
          </h1>
          {/* Subtle gradient overlay on text */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 opacity-60"></div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-orange-200">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Premium Services</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
            Discover our
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
              top services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            We offer a range of financial services tailored to meet your personal and business needs. Here's a look at our top services
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="flex items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-orange-100">
            <Shield className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Secure & Trusted</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-orange-100">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Growth Focused</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-orange-100">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Fast & Efficient</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Large Decorative Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200 rounded-full opacity-10 blur-3xl"></div>
    </div>
  );
};

export default TopServicesHero;