// src/components/OrganizationalStructureHero.jsx
import React from 'react';
import { Building2, Network, Layers, Users, ArrowUpDown, Shield, TrendingUp, Target } from 'lucide-react';

const OrganizationalStructureHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Structure Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Network className="w-5 h-5" />
            <span className="font-bold">COMPLETE ORGANIZATIONAL STRUCTURE</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Strategic <br />
            <span className="text-pink-300">Hierarchy</span> <br />
            <span className="italic font-light">Defined for Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Emerald Capital operates through a well-defined organizational structure 
            designed for operational efficiency, clear accountability, and sustainable 
            growth across all levels.
          </p>

          {/* Structure Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">6 Levels</div>
                <div className="text-white/80 text-sm">Organizational Depth</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">50+</div>
                <div className="text-white/80 text-sm">Branches</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">100%</div>
                <div className="text-white/80 text-sm">Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">95%</div>
                <div className="text-white/80 text-sm">Efficiency</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl group">
            <span className="flex items-center gap-2">
              Explore Complete Structure
              <ArrowUpDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Right Content - Structure Visualization */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Animated Background Elements */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce"></div>
            </div>

            {/* Pyramid Structure Visualization */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Pyramid Base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    {/* Level 1: Shareholders */}
                    <div className="mb-8 flex flex-col items-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center border-4 border-white shadow-2xl">
                        <div className="text-2xl">👑</div>
                      </div>
                      <div className="mt-3 text-center">
                        <div className="text-sm font-bold text-white bg-black/40 px-3 py-1 rounded-full">Shareholders</div>
                      </div>
                    </div>

                    {/* Connecting Arrow */}
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mb-8"></div>

                    {/* Level 2: Board */}
                    <div className="mb-8 flex flex-col items-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center border-4 border-white shadow-2xl">
                        <Building2 className="w-10 h-10 text-white" />
                      </div>
                      <div className="mt-3 text-center">
                        <div className="text-sm font-bold text-white bg-black/40 px-3 py-1 rounded-full">Board of Directors</div>
                      </div>
                    </div>

                    {/* Connecting Arrow */}
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 mb-8"></div>

                    {/* Level 3: CEO */}
                    <div className="mb-8 flex flex-col items-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center border-4 border-white shadow-2xl">
                        <div className="text-2xl">👔</div>
                      </div>
                      <div className="mt-3 text-center">
                        <div className="text-sm font-bold text-white bg-black/40 px-3 py-1 rounded-full">Chief Executive Officer</div>
                      </div>
                    </div>

                    {/* Connecting Arrow */}
                    <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-pink-500 mb-8"></div>

                    {/* Level 4: C-Suite */}
                    <div className="mb-8">
                      <div className="flex gap-3">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center border-3 border-white shadow-xl">
                            <div className="text-lg">⚡</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-center">
                        <div className="text-sm font-bold text-white bg-black/40 px-3 py-1 rounded-full">C-Suite Executives</div>
                      </div>
                    </div>

                    {/* Connecting Arrow */}
                    <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-amber-500 mb-8"></div>

                    {/* Level 5: Regional Managers */}
                    <div className="mb-8">
                      <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center border-2 border-white shadow-lg">
                            <div className="text-base">📍</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-center">
                        <div className="text-sm font-bold text-white bg-black/40 px-3 py-1 rounded-full">Regional Managers</div>
                      </div>
                    </div>

                    {/* Connecting Arrow */}
                    <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-emerald-500 mb-8"></div>

                    {/* Level 6: Branch Agents */}
                    <div className="flex flex-col items-center">
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded flex items-center justify-center border border-white shadow">
                            <div className="text-xs">👤</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-center">
                        <div className="text-sm font-bold text-white bg-black/40 px-3 py-1 rounded-full">Branch Agents</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  {/* Main Vertical Line */}
                  <line
                    x1="200"
                    y1="50"
                    x2="200"
                    y2="350"
                    stroke="url(#main-gradient)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <defs>
                    <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                      <stop offset="50%" stopColor="#ec4899" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Badge 1 - Structure Efficiency */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Structure Efficiency
                </div>
                <div className="text-lg font-bold text-purple-600">
                  95% Score
                </div>
              </div>

              {/* Badge 2 - Span of Control */}
              <div className="absolute bottom-8 -left-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-white mb-1">
                  Span of Control
                </div>
                <div className="text-lg font-bold text-white">
                  1:8 Ratio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructureHero;