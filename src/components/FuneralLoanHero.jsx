import React from 'react';
import { Users, Heart, Shield, Clock } from 'lucide-react';

const FuneralLoanHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-400/30 shadow-xl">
            <Heart className="w-5 h-5 text-indigo-300" />
            <span className="font-bold text-indigo-200">FUNERAL ASSISTANCE LOAN</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Compassionate Support <br />
              <span className="text-indigo-300">In Difficult Times</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 mb-10">
              When the unexpected happens, you shouldn't have to worry about finances. 
              Our funeral assistance loan provides quick, respectful support to help you 
              give your loved one a dignified farewell without financial stress.
            </p>

            {/* Key Features - Different Layout */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg mb-1">₵1,000 - ₵20,000</div>
                    <div className="text-white/70 text-sm">Immediate financial assistance</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg mb-1">3-24 Hours</div>
                    <div className="text-white/70 text-sm">Emergency approval time</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg mb-1">6-36 Months</div>
                    <div className="text-white/70 text-sm">Flexible repayment period</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg mb-1">Grace Period</div>
                    <div className="text-white/70 text-sm">Time to grieve before repayment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Request Assistance
              </button>
              <a 
                href="tel:+233208070000"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Emergency Hotline
              </a>
            </div>
          </div>

          {/* Right Content - Modified Layout */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              {/* Support Stats Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Here to Help</h3>
                  <p className="text-white/70">Supporting families in their time of need</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">6,200+</div>
                    <div className="text-white/70 text-sm">Families Supported</div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-3xl font-bold text-indigo-300 mb-1">24/7</div>
                    <div className="text-white/70 text-sm">Emergency Support Available</div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-3xl font-bold text-purple-300 mb-1">100%</div>
                    <div className="text-white/70 text-sm">Compassionate Service</div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>Respectful</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Fast</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralLoanHero;