import React from 'react';
import { Users, TrendingUp, GraduationCap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationLoanHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full px-6 py-3 mb-8 shadow-xl">
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold">EDUCATION LOAN</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Invest in Your <br />
            <span className="text-teal-300">Future Success</span> <br />
            <span className="italic font-light">with Education Financing</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Education is the key to unlocking your potential. Whether pursuing 
            higher education, professional certifications, or vocational training, 
            our education loans make your academic dreams achievable.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">₵2K-₵50K</div>
                <div className="text-white/80 text-sm">Loan Amount</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">12-72</div>
                <div className="text-white/80 text-sm">Months Term</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg">All</div>
                <div className="text-white/80 text-sm">Programs</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <div className="font-bold text-lg">Study</div>
                <div className="text-white/80 text-sm">Now Pay Later</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            to="/applyforloanpage"
            className="block w-full max-w-md"
            aria-label="Apply for Education Loan"
          >
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-500/50">
              Apply for Education Loan
            </button>
          </Link>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -left-20 top-1/3 flex gap-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-teal-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute -right-16 top-1/2 flex flex-col gap-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-teal-400 rounded-full opacity-40"></div>
            </div>

            {/* Circular Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-teal-300 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=800&fit=crop&crop=center"
                  alt="Students celebrating graduation and academic success"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/EduFund.jpg";
                  }}
                />
              </div>

              {/* Badge 1 - Students Funded */}
              <div className="absolute top-8 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-emerald-700 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Students Funded
                </div>
                <div className="text-lg font-bold text-emerald-600">
                  9,500+
                </div>
              </div>

              {/* Badge 2 - Loan Amount */}
              <div className="absolute bottom-8 -left-4 bg-teal-400 rounded-full px-6 py-3 shadow-xl">
                <div className="text-xs font-semibold text-gray-800 mb-1">
                  Education Finance
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ₵2,000 - ₵50,000
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
                  stroke="#2DD4BF"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Education decoration */}
              <div className="absolute -top-4 left-1/4 bg-teal-600 rounded-full p-4 shadow-xl border-4 border-teal-300">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationLoanHero;