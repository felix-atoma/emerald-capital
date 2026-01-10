import React from 'react';
import { TrendingUp, Shield, Briefcase, ChartBar, Target, DollarSign, Users, Globe, CheckCircle } from 'lucide-react';

const InvestmentDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Visual Section */}
          <div className="space-y-8">
            {/* Main Investment Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl shadow-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Wealth Portfolio</h3>
                  <p className="text-blue-200">Professional Management</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <TrendingUp className="w-5 h-5" />, label: "Avg Return", value: "18.5% PA" },
                  { icon: <Shield className="w-5 h-5" />, label: "Risk Level", value: "Balanced" },
                  { icon: <ChartBar className="w-5 h-5" />, label: "Monitoring", value: "Daily" },
                  { icon: <Target className="w-5 h-5" />, label: "Min Investment", value: "₵5,000" },
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-yellow-300 mb-2">{feature.icon}</div>
                    <div className="text-sm text-blue-200">{feature.label}</div>
                    <div className="font-bold text-lg">{feature.value}</div>
                  </div>
                ))}
              </div>

              {/* Portfolio Performance */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-blue-200 mb-2">Portfolio Performance</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">+₵45,000</div>
                    <div className="text-sm text-blue-200">Year-to-Date</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-300">+18.5%</div>
                    <div className="text-sm text-blue-200">Annual Growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Types */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Investment Products</h3>
              <div className="space-y-4">
                {[
                  { name: "Fixed Deposits", desc: "Guanteed returns", return: "12-15%", color: "from-blue-400 to-blue-600" },
                  { name: "Mutual Funds", desc: "Professional managed", return: "15-25%", color: "from-indigo-400 to-indigo-600" },
                  { name: "Treasury Bills", desc: "Government backed", return: "10-14%", color: "from-green-400 to-green-600" },
                  { name: "Corporate Bonds", desc: "Stable income", return: "14-18%", color: "from-purple-400 to-purple-600" },
                ].map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-bold text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-600">{product.desc}</div>
                    </div>
                    <div className="text-right">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} mb-1 mx-auto`}></div>
                      <div className="font-bold text-gray-900">{product.return}</div>
                      <div className="text-xs text-gray-600">Annual Return</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Investment &<br />
              <span className="text-blue-600">Wealth Management</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Partner with Emerald Capital for expert wealth management solutions 
              tailored to your financial goals. Our investment professionals help 
              you build diversified portfolios, manage risk, and maximize returns 
              for long-term wealth accumulation.
            </p>

            {/* Key Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Invest With Us?</h3>
              
              {[
                {
                  icon: <ChartBar className="w-6 h-6" />,
                  title: "Expert Portfolio Management",
                  description: "Our team of certified financial analysts manages your investments with proven strategies and market insights."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Risk-Adjusted Returns",
                  description: "We focus on sustainable growth with proper risk management to protect your capital."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Personalized Strategy",
                  description: "Custom investment plans based on your risk tolerance, goals, and time horizon."
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Diversified Portfolios",
                  description: "Access to multiple asset classes including equities, bonds, and alternative investments."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600">{benefit.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Process */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Investment Process</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">1</span>
                    </div>
                    <span className="font-medium">Financial Assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">2</span>
                    </div>
                    <span className="font-medium">Risk Profile Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">3</span>
                    </div>
                    <span className="font-medium">Portfolio Strategy</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">4</span>
                    </div>
                    <span className="font-medium">Regular Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">5</span>
                    </div>
                    <span className="font-medium">Performance Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">6</span>
                    </div>
                    <span className="font-medium">Strategy Adjustment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Schedule Investment Consultation
            </button>
          </div>
        </div>

        {/* Investment Options Table */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Investment Options Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left p-4 font-bold text-blue-900">Product</th>
                  <th className="text-left p-4 font-bold text-blue-900">Expected Return</th>
                  <th className="text-left p-4 font-bold text-blue-900">Risk Level</th>
                  <th className="text-left p-4 font-bold text-blue-900">Investment Period</th>
                  <th className="text-left p-4 font-bold text-blue-900">Minimum Amount</th>
                  <th className="text-left p-4 font-bold text-blue-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { 
                    product: "Fixed Deposit", 
                    return: "12-15% PA", 
                    risk: "Low", 
                    period: "3-36 months", 
                    min: "₵5,000", 
                    for: "Risk-averse investors" 
                  },
                  { 
                    product: "Money Market Fund", 
                    return: "10-14% PA", 
                    risk: "Low-Medium", 
                    period: "Flexible", 
                    min: "₵2,000", 
                    for: "Short-term goals" 
                  },
                  { 
                    product: "Balanced Mutual Fund", 
                    return: "15-20% PA", 
                    risk: "Medium", 
                    period: "3-5 years", 
                    min: "₵10,000", 
                    for: "Growth investors" 
                  },
                  { 
                    product: "Equity Fund", 
                    return: "18-25% PA", 
                    risk: "Medium-High", 
                    period: "5+ years", 
                    min: "₵15,000", 
                    for: "Long-term growth" 
                  },
                  { 
                    product: "Treasury Bills", 
                    return: "10-14% PA", 
                    risk: "Very Low", 
                    period: "91-364 days", 
                    min: "₵1,000", 
                    for: "Government securities" 
                  },
                  { 
                    product: "Corporate Bonds", 
                    return: "14-18% PA", 
                    risk: "Medium", 
                    period: "3-10 years", 
                    min: "₵20,000", 
                    for: "Stable income" 
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="p-4 font-bold text-gray-900">{item.product}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                        {item.return}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full font-bold ${
                        item.risk === "Low" ? "bg-blue-100 text-blue-800" :
                        item.risk === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        item.risk === "High" ? "bg-orange-100 text-orange-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {item.risk}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-gray-700">{item.period}</td>
                    <td className="p-4 font-semibold text-gray-700">{item.min}</td>
                    <td className="p-4 text-gray-600">{item.for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Wealth Planning Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Goal-Based Investing</h4>
            <p className="text-blue-200">
              Align your investments with specific life goals - education, retirement, or major purchases.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Risk Management</h4>
            <p className="text-indigo-200">
              Comprehensive risk assessment and mitigation strategies to protect your investments.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Performance Tracking</h4>
            <p className="text-purple-200">
              Regular performance reports and portfolio reviews to ensure you stay on track.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;