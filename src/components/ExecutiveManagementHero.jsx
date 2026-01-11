// src/components/ExecutiveManagementHero.jsx
import React from 'react';
import { Users, Briefcase, TrendingUp, Shield, Cpu, Megaphone, Scale, BarChart, Heart, Zap, Building2, ArrowUpRight } from 'lucide-react';

const ExecutiveManagementHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Executive Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Briefcase className="w-5 h-5" />
            <span className="font-bold">EXECUTIVE MANAGEMENT TEAM</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Operational <br />
            <span className="text-cyan-300">Excellence</span> <br />
            <span className="italic font-light">Driving Performance</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Our C-Suite leadership team executes Emerald Capital's vision with precision, 
            ensuring operational excellence, financial strength, and sustainable growth 
            across all business functions.
          </p>

          {/* Executive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">9</div>
                <div className="text-white/80 text-sm">Executive Leaders</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">18+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">95%</div>
                <div className="text-white/80 text-sm">Goal Achievement</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl group">
            <span className="flex items-center gap-2">
              Explore Executive Functions
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Right Content - Executive Visualization */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Animated Background Elements */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-80 animate-ping"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
            </div>

            {/* Executive Network Visualization */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-cyan-300/50 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-blue-900/30 to-slate-900/30">
                {/* Central CEO Position */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-2xl animate-pulse">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-sm font-bold text-white bg-black/40 px-3 py-1 rounded-full">CEO</div>
                  </div>
                </div>

                {/* Executive Positions in Orbit */}
                {[
                  { angle: 0, icon: <Zap className="w-6 h-6" />, title: "COO", color: "from-emerald-500 to-green-500" },
                  { angle: 40, icon: <BarChart className="w-6 h-6" />, title: "CFO", color: "from-purple-500 to-pink-500" },
                  { angle: 80, icon: <Shield className="w-6 h-6" />, title: "CRO", color: "from-red-500 to-orange-500" },
                  { angle: 120, icon: <Cpu className="w-6 h-6" />, title: "CTO", color: "from-indigo-500 to-violet-500" },
                  { angle: 160, icon: <Megaphone className="w-6 h-6" />, title: "CMO", color: "from-pink-500 to-rose-500" },
                  { angle: 200, icon: <Scale className="w-6 h-6" />, title: "CCO", color: "from-gray-500 to-slate-500" },
                  { angle: 240, icon: <TrendingUp className="w-6 h-6" />, title: "CIO", color: "from-teal-500 to-cyan-500" },
                  { angle: 280, icon: <Users className="w-6 h-6" />, title: "CHRO", color: "from-amber-500 to-yellow-500" },
                  { angle: 320, icon: <Shield className="w-6 h-6" />, title: "CInsO", color: "from-blue-600 to-indigo-500" }
                ].map((exec, index) => {
                  const radius = 140;
                  const x = 200 + radius * Math.cos(exec.angle * Math.PI / 180);
                  const y = 200 + radius * Math.sin(exec.angle * Math.PI / 180);
                  
                  return (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${exec.color} rounded-full flex items-center justify-center border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {exec.icon}
                        </div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="text-xs font-bold text-white bg-black/30 px-2 py-1 rounded">
                          {exec.title}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  {[...Array(9)].map((_, i) => {
                    const angle = (i * 40) * Math.PI / 180;
                    const x1 = 200;
                    const y1 = 200;
                    const x2 = 200 + 140 * Math.cos(angle);
                    const y2 = 200 + 140 * Math.sin(angle);
                    
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#gradient-line)"
                        strokeWidth="1.5"
                        strokeDasharray="4"
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Badge 1 - Team Excellence */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl animate-bounce">
                <div className="text-xs font-semibold text-cyan-700 mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Team Excellence
                </div>
                <div className="text-lg font-bold text-cyan-600">
                  95% Rating
                </div>
              </div>

              {/* Badge 2 - Operational Efficiency */}
              <div className="absolute bottom-8 -left-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-white mb-1">
                  Operational Efficiency
                </div>
                <div className="text-lg font-bold text-white">
                  98% Score
                </div>
              </div>

              {/* Animated Rings */}
              <div className="absolute -inset-8 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              <div className="absolute -inset-4 rounded-full border-2 border-blue-400/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveManagementHero;