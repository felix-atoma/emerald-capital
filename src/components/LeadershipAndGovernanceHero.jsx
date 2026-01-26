// src/components/LeadershipAndGovernanceHero.jsx
import React from 'react';
import { Users, Shield, Target, Award } from 'lucide-react';

const LeadershipAndGovernanceHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Governance Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <Shield className="w-5 h-5" />
            <span className="font-bold">LEADERSHIP & GOVERNANCE</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Leading With <br />
            <span className="text-yellow-300">Integrity</span> <br />
            <span className="italic font-light">Guided by Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Emerald Capital is guided by a strong leadership team and a robust governance 
            framework designed to promote integrity, accountability, and long-term value 
            creation for all stakeholders.
          </p>

          {/* Key Principles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Leadership</div>
                <div className="text-white/80 text-sm">Expert Team</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Governance</div>
                <div className="text-white/80 text-sm">Robust Framework</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Accountability</div>
                <div className="text-white/80 text-sm">Clear Roles</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">Integrity</div>
                <div className="text-white/80 text-sm">Core Value</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
         
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-yellow-300 shadow-2xl">
                <img
                  src="/employee-working-marketing-setting.jpeg"
                  alt="Leadership team meeting and strategic planning"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&crop=center";
                  }}
                />
              </div>

              {/* Badge 1 - Years Experience */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-emerald-700 mb-1 flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Experience
                </div>
                <div className="text-lg font-bold text-emerald-600">
                  15+ Years
                </div>
              </div>

              {/* Badge 2 - Governance Score */}
              <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Governance Score
                </div>
                <div className="text-lg font-bold text-gray-900">
                  98% Rating
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
                  stroke="#FBBF24"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Leadership decoration */}
              <div className="absolute -top-4 left-1/4 bg-emerald-600 rounded-full p-4 shadow-xl border-4 border-yellow-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipAndGovernanceHero;