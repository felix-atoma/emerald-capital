// src/components/LeadershipOwnershipHero.jsx
import React from 'react';
import { Users, Award, Crown, Building2, TrendingUp, Star, Shield, Target } from 'lucide-react';

const LeadershipOwnershipHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 flex items-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Leadership Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full px-6 py-3 mb-8 shadow-xl backdrop-blur-sm">
              <Crown className="w-5 h-5" />
              <span className="font-bold">LEADERSHIP & OWNERSHIP PROFILE</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Visionary <br />
              <span className="text-amber-300">Leadership</span> <br />
              <span className="italic font-light">Strategic Ownership</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
              Meet the distinguished shareholders and strategic leaders guiding 
              Emerald Capital with decades of expertise in finance, investment 
              management, and sustainable business development.
            </p>

            {/* Leadership Excellence */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <Award className="w-6 h-6" />, label: 'Industry Expertise', value: '25+ Years' },
                { icon: <Users className="w-6 h-6" />, label: 'Strategic Investors', value: 'Private Held' },
                { icon: <Star className="w-6 h-6" />, label: 'Governance Score', value: 'A+ Rating' },
                { icon: <TrendingUp className="w-6 h-6" />, label: 'Value Creation', value: '98% Growth' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
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
            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="flex items-center gap-2 relative z-10">
                Meet Our Leadership Team
                <Target className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Content - Leadership Visualization */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              {/* Floating Profile Cards */}
              <div className="relative">
                {/* Main Profile - Founder */}
                <div className="absolute -left-8 -top-8 z-20">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-2xl p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
                        alt="Founder Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <div className="font-bold text-lg">Dr. Asamoah Koranteng Evans</div>
                      <div className="text-sm text-emerald-200">Founder & Lead Investor</div>
                    </div>
                  </div>
                </div>

                {/* Executive Shareholder */}
                <div className="absolute -right-8 top-1/3 z-10">
                  <div className="bg-gradient-to-br from-teal-600 to-emerald-500 rounded-2xl p-6 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                        alt="Executive Shareholder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">Mrs. Abena Konadu Asamoah-Koranteng</div>
                      <div className="text-sm text-emerald-200">Executive Shareholder</div>
                    </div>
                  </div>
                </div>

                {/* Investor Group */}
                <div className="absolute left-1/4 bottom-8">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 mx-auto">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-300 flex items-center justify-center">
                        <Building2 className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="text-white text-center">
                      <div className="font-bold">Emerald Global Business</div>
                      <div className="text-sm text-slate-300">Strategic Partners</div>
                    </div>
                  </div>
                </div>

                {/* Center Connection */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-2xl animate-pulse">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <path
                    d="M 200 200 L 100 100"
                    stroke="url(#line-gradient)"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                  <path
                    d="M 200 200 L 300 150"
                    stroke="url(#line-gradient)"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                  <path
                    d="M 200 200 L 150 300"
                    stroke="url(#line-gradient)"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full animate-ping opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-ping opacity-30 delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipOwnershipHero;