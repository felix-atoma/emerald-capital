// src/components/ExecutiveLeadershipHero.jsx
import React from 'react';
import { Users, Award, Briefcase, TrendingUp, Zap, Target, Shield, Star } from 'lucide-react';

const ExecutiveLeadershipHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-emerald-900 flex items-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bobbling circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Executive Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full px-6 py-3 mb-8 shadow-xl backdrop-blur-sm animate-bobble">
              <Briefcase className="w-5 h-5" />
              <span className="font-bold">EXECUTIVE LEADERSHIP TEAM</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Operational <br />
              <span className="text-emerald-300">Excellence</span> <br />
              <span className="italic font-light">Strategic Execution</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
              Our Executive Leadership Team combines decades of expertise in finance, 
              technology, operations, and strategy to drive Emerald Capital's vision 
              with precision and innovation.
            </p>

            {/* Executive Excellence */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <Users className="w-6 h-6" />, label: 'Executive Leaders', value: '10 Experts' },
                { icon: <TrendingUp className="w-6 h-6" />, label: 'Years Experience', value: '18+ Avg' },
                { icon: <Target className="w-6 h-6" />, label: 'Goal Achievement', value: '98%' },
                { icon: <Award className="w-6 h-6" />, label: 'Team Performance', value: 'A+ Rated' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:scale-105 transition-transform duration-300 animate-bobble"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="font-bold text-xl">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl animate-bobble hover:animate-pulse">
              <span className="flex items-center gap-2 relative z-10">
                Meet Our Executive Leaders
                <Zap className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Content - Executive Visualization */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              {/* Executive Orbit Visualization */}
              <div className="relative">
                {/* CEO at Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-transform duration-500 animate-bobble">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                      <img
                        src="\Picture3.jpg"
                        alt="CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white text-center">
                      <div className="font-bold text-lg">Mrs. Gertrude Asamoah</div>
                      <div className="text-sm text-emerald-200">Chief Executive Officer</div>
                    </div>
                  </div>
                </div>

                {/* Executive Orbits */}
                <div className="relative w-full h-full">
                  {/* Inner Orbit */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-96 h-96">
                      {[0, 72, 144, 216, 288].map((angle, index) => {
                        const radius = 120;
                        const x = 192 + radius * Math.cos(angle * Math.PI / 180);
                        const y = 192 + radius * Math.sin(angle * Math.PI / 180);
                        
                        const execs = [
                          { title: 'COO', name: 'Solomon', color: 'from-blue-600 to-cyan-500' },
                          { title: 'CFO', name: 'Emmanuel', color: 'from-purple-600 to-pink-500' },
                          { title: 'CRO', name: 'Albert', color: 'from-red-600 to-orange-500' },
                          { title: 'CTO', name: 'Martin', color: 'from-indigo-600 to-violet-500' },
                          { title: 'CMO', name: 'Gladys', color: 'from-pink-600 to-rose-500' }
                        ];

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
                            <div className={`w-16 h-16 bg-gradient-to-r ${execs[index].color} rounded-full flex items-center justify-center border-3 border-white shadow-xl transform hover:scale-125 transition-transform duration-500 animate-bobble`}
                              style={{ animationDelay: `${index * 0.3}s` }}>
                              <div className="text-white text-xs font-bold">{execs[index].title}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Outer Orbit */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-[28rem] h-[28rem]">
                      {[0, 72, 144, 216, 288].map((angle, index) => {
                        const radius = 180;
                        const x = 224 + radius * Math.cos(angle * Math.PI / 180);
                        const y = 224 + radius * Math.sin(angle * Math.PI / 180);
                        
                        const execs = [
                          { title: 'CCO', name: 'Charles', color: 'from-gray-600 to-slate-500' },
                          { title: 'CIO', name: 'Anna', color: 'from-teal-600 to-cyan-500' },
                          { title: 'CHRO', name: 'Anna', color: 'from-amber-600 to-yellow-500' },
                          { title: 'CInsO', name: 'Christian', color: 'from-blue-700 to-indigo-600' },
                          { title: '', name: '', color: 'from-emerald-500 to-green-500' }
                        ];

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
                            <div className={`w-14 h-14 bg-gradient-to-r ${execs[index].color} rounded-full flex items-center justify-center border-3 border-white shadow-lg transform hover:scale-125 transition-transform duration-500 animate-bobble`}
                              style={{ animationDelay: `${index * 0.4 + 1}s` }}>
                              <div className="text-white text-xs font-bold">{execs[index].title}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Animated orbit rings */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="120" stroke="url(#orbit-gradient1)" strokeWidth="1" strokeDasharray="8 4" className="animate-spin-slow" />
                    <circle cx="200" cy="200" r="180" stroke="url(#orbit-gradient2)" strokeWidth="1" strokeDasharray="8 4" className="animate-spin-slow-reverse" />
                    <defs>
                      <linearGradient id="orbit-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id="orbit-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  {[...Array(10)].map((_, i) => {
                    const angle = (i * 36) * Math.PI / 180;
                    const x1 = 200;
                    const y1 = 200;
                    const x2 = 200 + 180 * Math.cos(angle);
                    const y2 = 200 + 180 * Math.sin(angle);
                    
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#connection-gradient)"
                        strokeWidth="1"
                        strokeDasharray="4 2"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Animated Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-ping opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-teal-400 rounded-full animate-ping opacity-70 delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bobble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bobble {
          animation: bobble 3s ease-in-out infinite;
        }
        .animate-particle {
          animation: particle 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ExecutiveLeadershipHero;