import React from 'react';
import { CheckCircle, Users, TrendingUp, Building2, Target, Award, BookOpen, BarChart3, Globe } from 'lucide-react';

const BusinessLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Business Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business financing solutions designed to support your company's 
            growth at every stage. Whether you're starting up, expanding operations, or 
            managing cash flow, we provide the capital and expertise to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-slate-600 to-gray-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BizGrow Program</h3>
                  <p className="text-slate-200">For Business Development</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-slate-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵5K - ₵100K</div>
                    <div className="text-slate-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">12-60</div>
                    <div className="text-slate-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-slate-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">8,500+</div>
                    <div className="text-slate-200 text-sm">Businesses Funded</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-300">90%</div>
                    <div className="text-slate-200 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Business Loan Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Competitive Rates",
                    description: "Market-leading interest rates for businesses"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Business Advisory",
                    description: "Expert guidance on growth strategies"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Flexible Structures",
                    description: "Customized repayment to match cash flow"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Relationship Banking",
                    description: "Dedicated account managers for support"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-gray-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-gray-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-slate-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Registered business in Ghana",
                  "Operating for at least 12 months",
                  "Business registration certificate",
                  "Audited financial statements (last 2 years)",
                  "Tax Identification Number (TIN)",
                  "Business bank account",
                  "Comprehensive business plan",
                  "Collateral or guarantor (based on amount)"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Business Types Section */}
          <div className="space-y-8">
            {/* Business Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligible Business Types</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🏪", title: "Retail & Trading", desc: "Shops, stores, outlets" },
                  { icon: "🏭", title: "Manufacturing", desc: "Production, processing" },
                  { icon: "🍽️", title: "Food & Beverage", desc: "Restaurants, catering" },
                  { icon: "🚚", title: "Logistics", desc: "Transport, delivery" },
                  { icon: "🏗️", title: "Construction", desc: "Building, contracting" },
                  { icon: "💼", title: "Services", desc: "Consulting, professional" },
                  { icon: "🌾", title: "Agriculture", desc: "Farming, agribusiness" },
                  { icon: "💻", title: "Technology", desc: "Software, IT services" },
                ].map((business, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl mb-2">{business.icon}</div>
                    <div className="font-bold text-gray-900">{business.title}</div>
                    <div className="text-sm text-gray-600">{business.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Business Loan Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₵)</label>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    defaultValue="50000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₵5,000</span>
                    <span className="font-bold text-gray-900">₵50,000</span>
                    <span className="text-sm text-gray-600">₵100,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Purpose</label>
                  <select className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none">
                    <option>Working Capital</option>
                    <option>Business Expansion</option>
                    <option>Equipment Purchase</option>
                    <option>Inventory Financing</option>
                    <option>Real Estate</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Monthly Payment (48 months)</span>
                    <span className="font-bold text-gray-900">₵1,250/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Interest Rate (Annual)</span>
                    <span className="font-bold text-slate-600">18%</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Total Repayment</span>
                    <span className="font-bold text-xl text-gray-600">₵60,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Business Support Services</h3>
              <div className="space-y-3">
                {[
                  "Dedicated account manager assignment",
                  "Business growth advisory services",
                  "Financial planning and analysis",
                  "Cash flow management guidance",
                  "Business expansion consulting",
                  "Market research and insights",
                  "Networking and partnership opportunities",
                  "Loan restructuring options (if needed)"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-slate-700 hover:to-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Business Loan
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-slate-50 rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Business Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Tetteh",
                business: "Tetteh Enterprises Ltd",
                loan: "₵75,000",
                before: "Single location, 5 employees",
                after: "3 branches, 25 employees, 5x revenue"
              },
              {
                name: "Patience Nkrumah",
                business: "P&N Manufacturing",
                loan: "₵60,000",
                before: "Manual production, small output",
                after: "Automated lines, 10x production, exports"
              },
              {
                name: "Joseph Owusu",
                business: "Owusu Tech Solutions",
                loan: "₵45,000",
                before: "Home office, 3 freelancers",
                after: "Corporate office, 15 staff, major contracts"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-slate-600 font-medium">{story.business}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-gray-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Business Loan:</span>
                    <span className="font-bold text-slate-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            BizGrow Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Growth Capital",
                icon: "💰",
                description: "Funding for expansion and development"
              },
              {
                component: "Expert Advisory",
                icon: "🎯",
                description: "Business strategy and planning support"
              },
              {
                component: "Relationship Manager",
                icon: "👤",
                description: "Dedicated banking professional"
              },
              {
                component: "Flexible Terms",
                icon: "⚙️",
                description: "Customized repayment structures"
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

        {/* Business Investment Areas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Business Investment Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Working Capital", 
                impact: "Operational cash flow needs",
                icon: "💼" 
              },
              { 
                area: "Expansion Projects", 
                impact: "New locations and markets",
                icon: "🚀" 
              },
              { 
                area: "Equipment & Machinery", 
                impact: "Production capacity increase",
                icon: "⚙️" 
              },
              { 
                area: "Inventory Purchase", 
                impact: "Stock up for growth periods",
                icon: "📦" 
              },
              { 
                area: "Real Estate", 
                impact: "Office or warehouse purchase",
                icon: "🏢" 
              },
              { 
                area: "Technology Upgrade", 
                impact: "Systems and digital tools",
                icon: "💻" 
              },
              { 
                area: "Staff Recruitment", 
                impact: "Hire and train new employees",
                icon: "👥" 
              },
              { 
                area: "Marketing Campaigns", 
                impact: "Brand building and promotion",
                icon: "📢" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-600 to-gray-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Competitive Rates</h4>
            <p className="text-slate-200">
              Industry-leading interest rates with transparent fee structures and no hidden charges.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-600 to-slate-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Business Advisory</h4>
            <p className="text-gray-200">
              Expert guidance on growth strategies, financial planning, and operational efficiency.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-600 to-zinc-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Relationship Banking</h4>
            <p className="text-slate-200">
              Dedicated account managers who understand your business and provide personalized support.
            </p>
          </div>
        </div>

        {/* Business Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Grow Your Business?</p>
              </div>
              <p className="text-slate-100">Connect with our business banking team today</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-slate-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Business Desk
              </a>
              <a 
                href="mailto:business@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoanDetails;