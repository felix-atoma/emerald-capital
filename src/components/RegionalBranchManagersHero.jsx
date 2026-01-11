// src/components/RegionalBranchManagersHero.jsx
import React from 'react';
import { MapPin, Users, Award, TrendingUp, Target, Shield, Zap, Building } from 'lucide-react';

const RegionalBranchManagersHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 flex items-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bobbling circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Map grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 3C14.983 3 3 14.983 3 30s11.983 27 27 27 27-11.983 27-27S45.017 3 30 3z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Regional Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full px-6 py-3 mb-8 shadow-xl backdrop-blur-sm animate-bobble">
              <MapPin className="w-5 h-5" />
              <span className="font-bold">REGIONAL & BRANCH MANAGEMENT</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Local <br />
              <span className="text-amber-300">Leadership</span> <br />
              <span className="italic font-light">National Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
              Our regional and branch managers bring Emerald Capital's vision to communities 
              across Ghana, driving operational excellence and financial inclusion at the grassroots level.
            </p>

            {/* Regional Excellence */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <MapPin className="w-6 h-6" />, label: 'Regions Covered', value: '12 Regions' },
                { icon: <Building className="w-6 h-6" />, label: 'Branches', value: '50+' },
                { icon: <TrendingUp className="w-6 h-6" />, label: 'Growth Impact', value: '35% Avg' },
                { icon: <Users className="w-6 h-6" />, label: 'Team Leadership', value: '500+ Staff' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:scale-105 transition-transform duration-300 animate-bobble"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="font-bold text-xl">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl animate-bobble hover:animate-pulse">
              <span className="flex items-center gap-2 relative z-10">
                Explore Regional Leadership
                <Target className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Content - Regional Map Visualization */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              {/* Ghana Map Outline with Regions */}
              <div className="relative">
                {/* Base Map */}
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl border-2 border-amber-300/30 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  
                  {/* Regional Markers */}
                  {[
                    { region: 'Greater Accra', x: '70%', y: '40%', color: 'bg-emerald-500' },
                    { region: 'Ashanti', x: '40%', y: '50%', color: 'bg-blue-500' },
                    { region: 'Ahafo', x: '35%', y: '55%', color: 'bg-purple-500' },
                    { region: 'Western', x: '20%', y: '60%', color: 'bg-pink-500' },
                    { region: 'Central', x: '45%', y: '65%', color: 'bg-indigo-500' },
                    { region: 'Eastern', x: '65%', y: '55%', color: 'bg-teal-500' },
                    { region: 'Volta', x: '80%', y: '60%', color: 'bg-cyan-500' },
                    { region: 'Northern', x: '40%', y: '25%', color: 'bg-rose-500' },
                    { region: 'Upper West', x: '30%', y: '20%', color: 'bg-violet-500' },
                    { region: 'Bono', x: '30%', y: '50%', color: 'bg-amber-500' },
                    { region: 'Savannah', x: '45%', y: '30%', color: 'bg-green-500' },
                    { region: 'Diaspora', x: '90%', y: '20%', color: 'bg-slate-500' }
                  ].map((region, index) => (
                    <div
                      key={index}
                      className={`absolute ${region.color} w-6 h-6 rounded-full border-2 border-white shadow-lg animate-bobble cursor-pointer hover:scale-125 transition-transform duration-300`}
                      style={{ 
                        left: region.x, 
                        top: region.y,
                        animationDelay: `${index * 0.1}s`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      title={region.region}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                        {region.region}
                      </div>
                    </div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                    <path
                      d="M 280 160 Q 320 200 280 240"
                      stroke="url(#map-gradient1)"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                      className="animate-pulse"
                    />
                    <path
                      d="M 160 200 Q 200 160 240 220"
                      stroke="url(#map-gradient2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                      className="animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    />
                    <path
                      d="M 120 240 Q 160 280 200 240"
                      stroke="url(#map-gradient3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                    <defs>
                      <linearGradient id="map-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                      <linearGradient id="map-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                      <linearGradient id="map-gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Center Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-2xl animate-pulse">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute -bottom-6 left-0 right-0">
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-xs text-white">Urban Centers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-white">Major Regions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                      <span className="text-xs text-white">Northern Zones</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-amber-400 rounded-full animate-ping opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-400 rounded-full animate-ping opacity-70 delay-300"></div>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bobble {
          animation: bobble 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RegionalBranchManagersHero;