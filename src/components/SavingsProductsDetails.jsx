import React from 'react';
import { CheckCircle, Shield, TrendingUp, Lock, Zap, Target, Users, Globe, PiggyBank, DollarSign } from 'lucide-react';

const SavingsProductsDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Savings Products<br />
            <span className="text-purple-600">(Purple / Gold Theme)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of savings solutions designed to help you achieve your financial 
            goals with security, flexibility, and competitive returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Savings Card */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <PiggyBank className="w-8 h-8 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Premium Savings Suite</h3>
                  <p className="text-purple-200">Exclusive Purple/Gold Theme</p>
                </div>
              </div>

              <p className="text-purple-200 mb-8 leading-relaxed">
                Our signature savings products feature the exclusive purple and gold theme, 
                representing royalty, wealth, and premium financial services designed for 
                discerning savers who value security and growth.
              </p>

              {/* Key Benefits */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Deposit Protection",
                    description: "Your savings are protected up to ₵20,000 under government insurance"
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Competitive Interest",
                    description: "Earn up to 15% annual interest on selected savings products"
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Digital Banking",
                    description: "24/7 access through mobile app and internet banking"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Family Accounts",
                    description: "Special savings plans for families and children's education"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{benefit.title}</h4>
                      <p className="text-purple-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Account Opening Requirements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">1</span>
                    </div>
                    <span className="font-medium">Valid National ID</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">2</span>
                    </div>
                    <span className="font-medium">Proof of Address</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">3</span>
                    </div>
                    <span className="font-medium">Passport Photo</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">4</span>
                    </div>
                    <span className="font-medium">Minimum Deposit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">5</span>
                    </div>
                    <span className="font-medium">Tax ID (if applicable)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">6</span>
                    </div>
                    <span className="font-medium">Completed Forms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Products Section */}
          <div className="space-y-8">
            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Regular Savings",
                  icon: "💰",
                  interest: "6% PA",
                  min: "₵50",
                  features: ["Daily access", "Monthly statements", "Mobile banking"],
                  color: "from-purple-400 to-purple-600"
                },
                {
                  title: "Fixed Deposit",
                  icon: "📈",
                  interest: "12-15% PA",
                  min: "₵500",
                  features: ["Higher interest", "Term options", "Automatic renewal"],
                  color: "from-yellow-400 to-yellow-600"
                },
                {
                  title: "Susu Account",
                  icon: "👥",
                  interest: "4% PA",
                  min: "₵5",
                  features: ["Daily savings", "Group savings", "Flexible deposits"],
                  color: "from-blue-400 to-blue-600"
                },
                {
                  title: "Goal Savings",
                  icon: "🎯",
                  interest: "8% PA",
                  min: "₵100",
                  features: ["Target-based", "Progress tracking", "Bonus interest"],
                  color: "from-green-400 to-green-600"
                },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                      <span className="text-2xl">{product.icon}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{product.interest}</div>
                      <div className="text-xs text-gray-600">Interest Rate</div>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{product.title}</h4>
                  <div className="text-sm text-gray-600 mb-4">Min: {product.min}</div>
                  <div className="space-y-2">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Interest Calculator */}
            <div className="bg-gradient-to-r from-yellow-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Savings Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Savings</label>
                  <div className="flex items-center border-2 border-purple-200 rounded-xl overflow-hidden">
                    <div className="bg-purple-50 px-4 py-3 border-r">
                      <span className="font-semibold text-purple-700">₵</span>
                    </div>
                    <input
                      type="number"
                      placeholder="500"
                      className="flex-1 px-4 py-3 outline-none text-lg font-semibold"
                      defaultValue="500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Savings Period</label>
                  <select className="w-full border-2 border-purple-200 rounded-xl px-4 py-3 outline-none">
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                    <option>5 Years</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-purple-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Total Savings</span>
                    <span className="font-bold text-gray-900">₵6,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Interest Earned</span>
                    <span className="font-bold text-green-600">+₵900</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Final Amount</span>
                    <span className="font-bold text-xl text-purple-600">₵6,900</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold text-lg py-5 rounded-2xl hover:from-purple-700 hover:to-yellow-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Open Your Savings Account
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Savings Products Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-50 to-yellow-50">
                  <th className="text-left p-4 font-bold text-purple-900">Product</th>
                  <th className="text-left p-4 font-bold text-purple-900">Interest Rate</th>
                  <th className="text-left p-4 font-bold text-purple-900">Minimum Balance</th>
                  <th className="text-left p-4 font-bold text-purple-900">Withdrawal Terms</th>
                  <th className="text-left p-4 font-bold text-purple-900">Special Features</th>
                  <th className="text-left p-4 font-bold text-purple-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { 
                    product: "Regular Savings", 
                    rate: "6% PA", 
                    min: "₵50", 
                    withdrawal: "Anytime", 
                    features: "Monthly statements", 
                    for: "Daily savings" 
                  },
                  { 
                    product: "Fixed Deposit", 
                    rate: "12-15% PA", 
                    min: "₵500", 
                    withdrawal: "At maturity", 
                    features: "Higher interest", 
                    for: "Long-term savings" 
                  },
                  { 
                    product: "Susu Account", 
                    rate: "4% PA", 
                    min: "₵5", 
                    withdrawal: "Flexible", 
                    features: "Group savings", 
                    for: "Regular small savings" 
                  },
                  { 
                    product: "Goal Savings", 
                    rate: "8% PA", 
                    min: "₵100", 
                    withdrawal: "Goal-based", 
                    features: "Progress tracking", 
                    for: "Specific targets" 
                  },
                  { 
                    product: "Children's Savings", 
                    rate: "5% PA", 
                    min: "₵20", 
                    withdrawal: "Parent-controlled", 
                    features: "Educational focus", 
                    for: "Child education" 
                  },
                  { 
                    product: "Senior Citizens", 
                    rate: "7% PA", 
                    min: "₵100", 
                    withdrawal: "Monthly interest", 
                    features: "Higher rate", 
                    for: "Retirement income" 
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-purple-50">
                    <td className="p-4 font-bold text-gray-900">{item.product}</td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">
                        {item.rate}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-gray-700">{item.min}</td>
                    <td className="p-4 text-gray-600">{item.withdrawal}</td>
                    <td className="p-4 text-gray-600">{item.features}</td>
                    <td className="p-4 text-gray-600">{item.for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <p className="text-lg font-bold mb-2">Ready to start saving?</p>
              <p className="text-purple-100">Visit any branch or contact our savings specialists</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                +233 20 807 0000
              </a>
              <a 
                href="mailto:savings@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsProductsDetails;