import React from 'react';
import { CheckCircle, Users, TrendingUp, DollarSign, Target, Award, BookOpen, Wallet, Globe } from 'lucide-react';

const MicrofinanceLoanProductsDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-violet-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Microfinance Loan Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive microfinance solutions designed for individuals and small 
            businesses seeking accessible, flexible financing. We believe everyone 
            deserves access to financial services that help them grow and prosper.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-violet-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">MicroAccess Program</h3>
                  <p className="text-violet-200">For Financial Inclusion</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-violet-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵100 - ₵5K</div>
                    <div className="text-violet-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">1-18</div>
                    <div className="text-violet-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-violet-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">15,000+</div>
                    <div className="text-violet-200 text-sm">People Served</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-indigo-300">98%</div>
                    <div className="text-violet-200 text-sm">Repayment Rate</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Microfinance Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "No Collateral Required",
                    description: "Access loans without property or assets"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Quick Approval",
                    description: "Get approved within 24-48 hours"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Financial Literacy",
                    description: "Free training on money management"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Group Lending Option",
                    description: "Join solidarity groups for better rates"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-indigo-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-indigo-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-violet-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-violet-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian resident aged 18+",
                  "Valid national ID card",
                  "Proof of income or business",
                  "Active mobile money account",
                  "Verifiable residential address",
                  "Two guarantors (for first-time borrowers)",
                  "Basic phone for mobile banking",
                  "Willingness to attend orientation"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Product Types Section */}
          <div className="space-y-8">
            {/* Product Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-violet-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Loan Products</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "💼", title: "Business Starter", desc: "₵100-₵2K, 6-12 months" },
                  { icon: "🏪", title: "Petty Trading", desc: "₵200-₵3K, 3-12 months" },
                  { icon: "🏠", title: "Emergency Loan", desc: "₵100-₵1K, 1-6 months" },
                  { icon: "📚", title: "Education Loan", desc: "₵500-₵4K, 6-18 months" },
                  { icon: "🌾", title: "Farming Input", desc: "₵300-₵3K, 4-12 months" },
                  { icon: "🔧", title: "Tools & Equipment", desc: "₵200-₵2.5K, 6-15 months" },
                  { icon: "👗", title: "Home-Based Business", desc: "₵150-₵2K, 3-12 months" },
                  { icon: "💰", title: "Salary Advance", desc: "₵100-₵1.5K, 1-6 months" },
                ].map((product, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-violet-50 rounded-xl">
                    <div className="text-2xl mb-2">{product.icon}</div>
                    <div className="font-bold text-gray-900">{product.title}</div>
                    <div className="text-sm text-gray-600">{product.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-violet-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Microfinance Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₵)</label>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    defaultValue="2500"
                    className="w-full h-2 bg-violet-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₵100</span>
                    <span className="font-bold text-gray-900">₵2,500</span>
                    <span className="text-sm text-gray-600">₵5,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Purpose</label>
                  <select className="w-full border-2 border-violet-200 rounded-xl px-4 py-3 outline-none">
                    <option>Business Capital</option>
                    <option>Petty Trading</option>
                    <option>Emergency Needs</option>
                    <option>Education</option>
                    <option>Farming</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-violet-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Weekly Payment (12 months)</span>
                    <span className="font-bold text-gray-900">₵55/week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Processing Fee</span>
                    <span className="font-bold text-violet-600">₵50</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Total Repayment</span>
                    <span className="font-bold text-xl text-purple-600">₵2,910</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-violet-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Included Support Services</h3>
              <div className="space-y-3">
                {[
                  "Financial literacy training sessions",
                  "Mobile money and digital banking setup",
                  "Business record-keeping guidance",
                  "Savings mobilization programs",
                  "Group solidarity formation support",
                  "Insurance and emergency fund options",
                  "Business mentorship opportunities",
                  "Graduated loan access (increase over time)"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Microfinance Loan
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-violet-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Microfinance Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Comfort Addo",
                business: "Market Trader",
                loan: "₵1,500",
                before: "Borrowing from loan sharks daily",
                after: "Own capital, 3x profit, saves weekly"
              },
              {
                name: "Ibrahim Salifu",
                business: "Shoe Repairer",
                loan: "₵800",
                before: "Renting tools, low income",
                after: "Owns equipment, doubled customers"
              },
              {
                name: "Adjoa Mensah",
                business: "Home Baker",
                loan: "₵1,200",
                before: "Small batches, irregular sales",
                after: "Daily production, 5 regular clients"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-violet-600 font-medium">{story.business}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-violet-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-purple-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Micro Loan:</span>
                    <span className="font-bold text-violet-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-violet-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            MicroAccess Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Inclusive Lending",
                icon: "💰",
                description: "Financial access for all income levels"
              },
              {
                component: "Financial Education",
                icon: "📚",
                description: "Training on money management skills"
              },
              {
                component: "Group Support",
                icon: "👥",
                description: "Solidarity groups for mutual help"
              },
              {
                component: "Graduated Access",
                icon: "📈",
                description: "Increase loan limits over time"
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

        {/* Loan Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Microfinance Use Cases
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Petty Trading", 
                impact: "Stock market goods and supplies",
                icon: "🛒" 
              },
              { 
                area: "Emergency Needs", 
                impact: "Medical bills, urgent expenses",
                icon: "🏥" 
              },
              { 
                area: "School Fees", 
                impact: "Education and tuition costs",
                icon: "📚" 
              },
              { 
                area: "Home Business", 
                impact: "Start small scale operations",
                icon: "🏠" 
              },
              { 
                area: "Farming Inputs", 
                impact: "Seeds, fertilizer, tools",
                icon: "🌾" 
              },
              { 
                area: "Equipment Purchase", 
                impact: "Basic tools and machines",
                icon: "🔧" 
              },
              { 
                area: "Skills Training", 
                impact: "Learn new trades and crafts",
                icon: "🎓" 
              },
              { 
                area: "Working Capital", 
                impact: "Daily operational expenses",
                icon: "💼" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-violet-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">No Collateral</h4>
            <p className="text-violet-200">
              Access loans without property or assets. Your character and business plan are what matter.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Financial Literacy</h4>
            <p className="text-purple-200">
              Free training on budgeting, saving, and managing money for long-term financial health.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Group Solidarity</h4>
            <p className="text-violet-200">
              Join peer groups for better loan terms, mutual support, and shared business growth.
            </p>
          </div>
        </div>

        {/* Microfinance Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Join Our Microfinance Community</p>
              </div>
              <p className="text-violet-100">Access financial services designed for everyone</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-violet-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Micro Desk
              </a>
              <a 
                href="mailto:microfinance@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Join Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrofinanceLoanProductsDetails;