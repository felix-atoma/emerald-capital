import React from 'react';
import { CheckCircle, Shield, TrendingUp, Lock, Zap, Target, Users, Globe, PiggyBank } from 'lucide-react';

const SavingsDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Visual Section */}
          <div className="space-y-8">
            {/* Main Savings Card */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl shadow-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <PiggyBank className="w-8 h-8 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Premium Savings</h3>
                  <p className="text-purple-200">Higher Returns, Better Security</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <TrendingUp className="w-5 h-5" />, label: "Interest", value: "Up to 15% PA" },
                  { icon: <Lock className="w-5 h-5" />, label: "Security", value: "Bank Level" },
                  { icon: <Zap className="w-5 h-5" />, label: "Access", value: "24/7 Mobile" },
                  { icon: <Target className="w-5 h-5" />, label: "Min Balance", value: "₵50" },
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-yellow-300 mb-2">{feature.icon}</div>
                    <div className="text-sm text-purple-200">{feature.label}</div>
                    <div className="font-bold text-lg">{feature.value}</div>
                  </div>
                ))}
              </div>

              {/* Interest Calculator */}
             
            </div>

            {/* Types of Savings */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Savings Products</h3>
              <div className="space-y-4">
                {[
                  { name: "Susu Account", desc: "Daily/weekly savings", min: "₵5", color: "from-purple-400 to-purple-600" },
                  { name: "Fixed Deposit", desc: "Higher interest rates", min: "₵500", color: "from-yellow-400 to-yellow-600" },
                  { name: "Goal Savings", desc: "Save for specific goals", min: "₵100", color: "from-blue-400 to-blue-600" },
                  { name: "Children's Savings", desc: "Start them young", min: "₵20", color: "from-green-400 to-green-600" },
                ].map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-bold text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-600">{product.desc}</div>
                    </div>
                    <div className="text-right">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} mb-1 mx-auto`}></div>
                      <div className="font-bold text-gray-900">{product.min}</div>
                      <div className="text-xs text-gray-600">Min Deposit</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Savings Products<br />
              <span className="text-purple-600">(Purple / Gold Theme)</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              At Emerald Capital, we offer a diverse range of savings products designed 
              to help you achieve your financial goals. Whether you're saving for a rainy 
              day, planning a major purchase, or building wealth for the future, we have 
              the right account for you.
            </p>

            {/* Key Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Save With Us?</h3>
              
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Government Insured",
                  description: "Your deposits are protected up to ₵20,000 under the Ghana Deposit Protection Scheme."
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Competitive Interest",
                  description: "Earn up to 15% annual interest on fixed deposits and competitive rates on all savings accounts."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Community Focused",
                  description: "Join savings groups and cooperatives with special group savings benefits."
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Digital Access",
                  description: "Manage your savings 24/7 through our mobile app and internet banking platform."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-purple-600">{benefit.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-gradient-to-r from-purple-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How to Open an Account</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">1</span>
                    </div>
                    <span className="font-medium">Visit Any Branch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">2</span>
                    </div>
                    <span className="font-medium">Valid ID Card</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">3</span>
                    </div>
                    <span className="font-medium">Proof of Address</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">4</span>
                    </div>
                    <span className="font-medium">Passport Photo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">5</span>
                    </div>
                    <span className="font-medium">Minimum Deposit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">6</span>
                    </div>
                    <span className="font-medium">KYC Verification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold text-lg py-5 rounded-2xl hover:from-purple-700 hover:to-yellow-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Saving Today
            </button>
          </div>
        </div>

        {/* Savings Comparison Table */}
       
      </div>
    </div>
  );
};

export default SavingsDetails;