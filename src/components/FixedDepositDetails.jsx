import React from 'react';
import { CheckCircle, Users, TrendingUp, Shield, Target, Award, BookOpen, Lock, Globe } from 'lucide-react';

const FixedDepositDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fixed Deposit Account
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your financial future with our competitive fixed deposit accounts. 
            Enjoy guaranteed returns, flexible tenure options, and the assurance that 
            your money is growing safely with minimal risk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Deposit Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SecureSave Program</h3>
                  <p className="text-blue-200">For Safe Returns</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-blue-200 mb-2">Account Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵1K Min.</div>
                    <div className="text-blue-200 text-sm">Minimum Deposit</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">12-25% p.a.</div>
                    <div className="text-blue-200 text-sm">Interest Rate Range</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-blue-200 mb-2">Customer Base</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">18,500+</div>
                    <div className="text-blue-200 text-sm">Active Depositors</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-indigo-300">₵420M+</div>
                    <div className="text-blue-200 text-sm">Total Deposits</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Fixed Deposit Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Guaranteed Returns",
                    description: "Fixed interest rates locked for entire tenure"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Capital Protection",
                    description: "Principal amount 100% secured"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Flexible Tenure",
                    description: "Choose from 1 month to 5 years"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Loan Facility",
                    description: "Borrow up to 90% against your deposit"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-indigo-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-indigo-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-blue-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Account Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen or resident",
                  "Valid national ID card",
                  "Minimum deposit of ₵1,000",
                  "Proof of address",
                  "Completed account opening form",
                  "Initial deposit in cash or cheque",
                  "Tax Identification Number (TIN)",
                  "Two passport-sized photographs"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Tenure Options Section */}
          <div className="space-y-8">
            {/* Tenure & Rate Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Interest Rate Options</h3>
              <div className="space-y-4">
                {[
                  { tenure: "1-3 Months", rate: "12% p.a.", icon: "📅" },
                  { tenure: "4-6 Months", rate: "15% p.a.", icon: "📆" },
                  { tenure: "7-11 Months", rate: "18% p.a.", icon: "🗓️" },
                  { tenure: "12-23 Months", rate: "20% p.a.", icon: "📊" },
                  { tenure: "24-35 Months", rate: "22% p.a.", icon: "📈" },
                  { tenure: "36+ Months", rate: "25% p.a.", icon: "🎯" },
                ].map((option, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{option.icon}</div>
                      <div>
                        <div className="font-bold text-gray-900">{option.tenure}</div>
                        <div className="text-sm text-gray-600">Lock-in Period</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-blue-600">{option.rate}</div>
                      <div className="text-sm text-gray-600">Interest Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Returns Calculator */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Returns Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deposit Amount (₵)</label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    defaultValue="20000"
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₵1,000</span>
                    <span className="font-bold text-gray-900">₵20,000</span>
                    <span className="text-sm text-gray-600">₵100,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tenure Period</label>
                  <select className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 outline-none">
                    <option>3 Months (12% p.a.)</option>
                    <option>6 Months (15% p.a.)</option>
                    <option>12 Months (20% p.a.)</option>
                    <option>24 Months (22% p.a.)</option>
                    <option>36 Months (25% p.a.)</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-bold text-gray-900">20% p.a.</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Interest Earned (12 months)</span>
                    <span className="font-bold text-blue-600">₵4,000</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Maturity Amount</span>
                    <span className="font-bold text-xl text-indigo-600">₵24,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Features</h3>
              <div className="space-y-3">
                {[
                  "Automatic renewal option at maturity",
                  "Interest payout: monthly, quarterly, or at maturity",
                  "Premature withdrawal with penalty",
                  "Loan facility against fixed deposit",
                  "Online account monitoring 24/7",
                  "Certificate of deposit issued",
                  "Nomination facility available",
                  "Joint account option"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Open Fixed Deposit Account
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-blue-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Customer Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Grace Appiah",
                type: "Retirement Savings",
                deposit: "₵50,000",
                before: "Savings account with 2% interest",
                after: "36-month FD earning 25% p.a., ₵37.5K gained"
              },
              {
                name: "Emmanuel Dadzie",
                type: "Education Fund",
                deposit: "₵30,000",
                before: "Money idle, losing value to inflation",
                after: "24-month FD at 22%, saved ₵13.2K for son's fees"
              },
              {
                name: "Lydia Asare",
                type: "Emergency Fund",
                deposit: "₵15,000",
                before: "Cash at home, no returns, worried",
                after: "12-month FD, safe & growing, peace of mind"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-blue-600 font-medium">{story.type}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-indigo-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Fixed Deposit:</span>
                    <span className="font-bold text-blue-700">{story.deposit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            SecureSave Program Features
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Guaranteed Returns",
                icon: "🎯",
                description: "Fixed interest rates throughout tenure"
              },
              {
                component: "Capital Security",
                icon: "🔒",
                description: "100% principal protection guaranteed"
              },
              {
                component: "Flexible Tenure",
                icon: "⏰",
                description: "1 month to 5 years options"
              },
              {
                component: "Loan Facility",
                icon: "💰",
                description: "Borrow against your deposit"
              }
            ].map((component, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{component.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{component.component}</h4>
                <p className="text-gray-600 text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deposit Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Fixed Deposit
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Retirement Planning", 
                impact: "Secure income for golden years",
                icon: "🏖️" 
              },
              { 
                area: "Education Fund", 
                impact: "Save for children's future",
                icon: "🎓" 
              },
              { 
                area: "Emergency Reserve", 
                impact: "Build financial safety net",
                icon: "🛡️" 
              },
              { 
                area: "Short-term Goals", 
                impact: "Save for specific purchases",
                icon: "🎯" 
              },
              { 
                area: "Wealth Preservation", 
                impact: "Protect capital from inflation",
                icon: "💎" 
              },
              { 
                area: "Regular Income", 
                impact: "Monthly/quarterly interest payouts",
                icon: "💵" 
              },
              { 
                area: "Tax Benefits", 
                impact: "Tax-efficient savings option",
                icon: "📊" 
              },
              { 
                area: "Risk-free Growth", 
                impact: "Guaranteed returns, no market risk",
                icon: "📈" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">100% Secure</h4>
            <p className="text-blue-200">
              Your principal amount is fully protected with guaranteed returns. No market risks or volatility.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Higher Returns</h4>
            <p className="text-indigo-200">
              Earn up to 25% annual interest—significantly higher than regular savings accounts.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-navy-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Flexible Options</h4>
            <p className="text-blue-200">
              Choose your tenure from 1 month to 5 years, with options for auto-renewal and loan facilities.
            </p>
          </div>
        </div>

        {/* Fixed Deposit Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Secure Your Savings?</p>
              </div>
              <p className="text-blue-100">Open your fixed deposit account today</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Deposits Desk
              </a>
              <a 
                href="mailto:deposits@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Open Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedDepositDetails;