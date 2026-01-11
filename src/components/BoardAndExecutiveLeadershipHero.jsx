// src/components/BoardAndExecutiveLeadershipHero.jsx
import React from 'react';
import { Users, Award, Target, Shield, TrendingUp, Briefcase, PieChart, Crown } from 'lucide-react';

const BoardAndExecutiveLeadershipHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Leadership Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Crown className="w-5 h-5" />
            <span className="font-bold">BOARD & EXECUTIVE LEADERSHIP</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Visionary <br />
            <span className="text-amber-300">Leadership</span> <br />
            <span className="italic font-light">Guiding Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Our distinguished Board of Directors and Executive Leadership team 
            bring unparalleled expertise and strategic vision to guide Emerald Capital 
            towards sustainable growth and exceptional performance.
          </p>

          {/* Leadership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">11</div>
                <div className="text-white/80 text-sm">Leadership Roles</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">20+</div>
                <div className="text-white/80 text-sm">Years Avg. Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">98%</div>
                <div className="text-white/80 text-sm">Goal Achievement</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">100%</div>
                <div className="text-white/80 text-sm">Compliance</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-300 transition-all duration-300 shadow-xl hover:shadow-2xl group">
            <span className="flex items-center gap-2">
              Meet Our Leadership Team
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Right Content - Leadership Visualization */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-amber-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-amber-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full opacity-40 animate-pulse"></div>
            </div>

            {/* Leadership Structure Visualization */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-amber-300 shadow-2xl bg-gradient-to-br from-blue-900/20 to-slate-900/20 backdrop-blur-sm">
                {/* Leadership Levels */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Board of Directors Circle */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                        <Crown className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="text-xs font-bold text-white bg-black/30 px-2 py-1 rounded">Board</div>
                      </div>
                    </div>

                    {/* Executive Leadership Circles */}
                    <div className="absolute top-2/3 left-1/4">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute top-2/3 left-3/4">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                        <PieChart className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                      <path
                        d="M 50 30 Q 50 40 25 60"
                        stroke="#F59E0B"
                        strokeWidth="1"
                        strokeDasharray="4"
                        fill="none"
                      />
                      <path
                        d="M 50 30 Q 50 40 75 60"
                        stroke="#F59E0B"
                        strokeWidth="1"
                        strokeDasharray="4"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Badge 1 - Board Excellence */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl animate-bounce">
                <div className="text-xs font-semibold text-blue-700 mb-1 flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Board Excellence
                </div>
                <div className="text-lg font-bold text-blue-600">
                  A+ Rating
                </div>
              </div>

              {/* Badge 2 - Leadership Impact */}
              <div className="absolute bottom-8 -left-4 bg-amber-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-900 mb-1">
                  Leadership Impact
                </div>
                <div className="text-lg font-bold text-gray-900">
                  20+ Years
                </div>
              </div>

              {/* Decorative curved line */}
              <svg
                className="absolute -bottom-4 -right-8 w-32 h-32"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M 20 80 Q 50 20 80 60"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Leadership Star */}
              <div className="absolute -top-4 left-1/4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full p-4 shadow-2xl border-4 border-amber-300 animate-pulse">
                <StarIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Star Icon Component
const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default BoardAndExecutiveLeadershipHero;