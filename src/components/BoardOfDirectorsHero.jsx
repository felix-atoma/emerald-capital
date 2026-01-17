// src/components/BoardOfDirectorsHero.jsx
import React from 'react';
import { Users, Award, Crown, Shield, Target, TrendingUp, Star, Gavel } from 'lucide-react';

const BoardOfDirectorsHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bobbling circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, transparent 49%, white 50%, transparent 51%)', backgroundSize: '50px 50px' }}></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 49%, white 50%, transparent 51%)', backgroundSize: '50px 50px' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Board Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full px-6 py-3 mb-8 shadow-xl backdrop-blur-sm animate-bobble">
              <Crown className="w-5 h-5" />
              <span className="font-bold">BOARD OF DIRECTORS</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Governance <br />
              <span className="text-cyan-300">Excellence</span> <br />
              <span className="italic font-light">Strategic Leadership</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
              Our distinguished Board of Directors brings unparalleled expertise in governance, 
              finance, law, and strategic leadership to guide Emerald Capital with integrity 
              and vision.
            </p>

            {/* Board Excellence */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <Users className="w-6 h-6" />, label: 'Board Members', value: '4 Directors' },
                { icon: <Shield className="w-6 h-6" />, label: 'Governance Score', value: 'A+ Rated' },
                { icon: <TrendingUp className="w-6 h-6" />, label: 'Strategic Impact', value: '98%' },
                { icon: <Award className="w-6 h-6" />, label: 'Industry Experience', value: '25+ Years' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:scale-105 transition-transform duration-300 animate-bobble"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="font-bold text-xl">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl animate-bobble hover:animate-pulse">
              <span className="flex items-center gap-2 relative z-10">
                Meet Our Distinguished Board
                <Target className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Content - Board Visualization */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              {/* Floating Board Members */}
              <div className="relative">
                {/* Chairperson - Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-500 rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-transform duration-500 animate-bobble">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                      <img
                        src="/Picture1.jpg"
                        alt="Chairperson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white text-center">
                      <div className="font-bold text-lg">Dr. Asamoah Koranteng Evans</div>
                      <div className="text-sm text-blue-200">Chairperson</div>
                    </div>
                  </div>
                </div>

                {/* Non-Executive Director 1 - Top Right */}
                <div className="absolute top-1/4 right-0 z-10">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-transform duration-500 animate-bobble" 
                    style={{ animationDelay: '0.5s' }}>
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                      <img
                        src="/Picture7.jpg"
                        alt="Non-Executive Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">Dr. Ophilia Osei</div>
                      <div className="text-sm text-purple-200">Non-Executive Director</div>
                    </div>
                  </div>
                </div>

                {/* Non-Executive Director 2 - Bottom Left */}
                <div className="absolute bottom-1/4 left-0 z-10">
                  <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-transform duration-500 animate-bobble"
                    style={{ animationDelay: '1s' }}>
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                      <img
                        src="/Picture5.jpg"
                        alt="Non-Executive Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">Rev. Frederick Appiah</div>
                      <div className="text-sm text-indigo-200">Non-Executive Director</div>
                    </div>
                  </div>
                </div>

                {/* Executive Director - Bottom Right */}
                <div className="absolute bottom-1/4 right-0 z-10">
                  <div className="bg-gradient-to-br from-cyan-600 to-teal-500 rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-transform duration-500 animate-bobble"
                    style={{ animationDelay: '1.5s' }}>
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                      <img
                        src="/Picture3.jpg"
                        alt="Executive Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">Mrs. Gertrude Asamoah</div>
                      <div className="text-sm text-cyan-200">Executive Director / CEO</div>
                    </div>
                  </div>
                </div>

                {/* Board Table Visualization */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-64 h-40 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl border-2 border-white/20 shadow-2xl"></div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <path
                    d="M 200 200 L 280 120"
                    stroke="url(#board-gradient1)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    className="animate-dash"
                  />
                  <path
                    d="M 200 200 L 120 280"
                    stroke="url(#board-gradient2)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    className="animate-dash"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <path
                    d="M 200 200 L 280 280"
                    stroke="url(#board-gradient3)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    className="animate-dash"
                    style={{ animationDelay: '1s' }}
                  />
                  <defs>
                    <linearGradient id="board-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="board-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="board-gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Animated Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-70 delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bobble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bobble {
          animation: bobble 3s ease-in-out infinite;
        }
        .animate-dash {
          animation: dash 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BoardOfDirectorsHero;