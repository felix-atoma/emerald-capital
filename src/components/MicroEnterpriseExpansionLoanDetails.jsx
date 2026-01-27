import React from 'react';
import { CheckCircle, Users, TrendingUp, Briefcase, Target, Award, BookOpen, BarChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const MicroEnterpriseExpansionLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Micro-Enterprise Expansion Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to help small business owners scale their operations to the next level 
            through strategic growth capital, business expansion support, and comprehensive 
            development resources for sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GrowthPlus Program</h3>
                  <p className="text-blue-200">For Business Expansion</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-blue-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵500 - ₵10K</div>
                    <div className="text-blue-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6-36</div>
                    <div className="text-blue-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Expansion Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-blue-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">3,500+</div>
                    <div className="text-blue-200 text-sm">Businesses Funded</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-300">85%</div>
                    <div className="text-blue-200 text-sm">Growth Rate</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Growth-Focused Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Flexible Terms",
                    description: "Repayment schedules aligned with business cycles"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Business Advisory",
                    description: "Expert guidance on scaling and expansion strategies"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Growth Coaching",
                    description: "One-on-one mentorship from business experts"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Market Access",
                    description: "Connect with suppliers and distribution networks"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-cyan-300">{benefit.icon}</div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Registered business in Ghana",
                  "Operating for at least 6 months",
                  "Valid business registration certificate",
                  "Proof of business premises",
                  "Business financial records",
                  "Tax Identification Number (TIN)",
                  "Business bank account",
                  "Clear expansion plan"
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

          {/* Right - Business Types Section */}
          <div className="space-y-8">
            {/* Business Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Supported Business Sectors</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🏪", title: "Retail & Trading", desc: "Shop expansion, inventory" },
                  { icon: "🍴", title: "Food & Beverage", desc: "Restaurant, catering growth" },
                  { icon: "🏭", title: "Manufacturing", desc: "Equipment, production scale" },
                  { icon: "🚚", title: "Logistics", desc: "Transport, delivery services" },
                  { icon: "💼", title: "Professional Services", desc: "Office, staff expansion" },
                  { icon: "🏗️", title: "Construction", desc: "Equipment, project growth" },
                  { icon: "💻", title: "Tech & Digital", desc: "Software, online business" },
                  { icon: "🌾", title: "Agribusiness", desc: "Farming, processing scale" },
                ].map((business, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl mb-2">{business.icon}</div>
                    <div className="font-bold text-gray-900">{business.title}</div>
                    <div className="text-sm text-gray-600">{business.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
           

            {/* Advisory Program */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Included Advisory Services</h3>
              <div className="space-y-3">
                {[
                  "Business growth strategy development",
                  "Financial planning and cash flow management",
                  "Market expansion and customer acquisition",
                  "Operations optimization and efficiency",
                  "Supply chain and inventory management",
                  "Staff recruitment and HR management",
                  "Digital marketing and online presence",
                  "Access to business networking events"
                ].map((training, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{training}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/applyforloanpage">
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Apply for Expansion Loan
              </button>
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-blue-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Business Growth Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kwame Mensah",
                business: "Mensah Electronics",
                loan: "₵8,000",
                before: "Single shop with limited inventory",
                after: "3 locations, online store, 12 employees"
              },
              {
                name: "Akua Boateng",
                business: "Akua's Catering Hub",
                loan: "₵6,500",
                before: "Home kitchen, 50 meals/day capacity",
                after: "Commercial kitchen, 300 meals/day, delivery fleet"
              },
              {
                name: "Kofi Asante",
                business: "Asante Furniture",
                loan: "₵7,200",
                before: "Workshop with 2 carpenters, basic tools",
                after: "Factory, 8 craftsmen, modern equipment, exports"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-blue-600 font-medium">{story.business}</div>
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
                    <span className="text-gray-600">Expansion Loan:</span>
                    <span className="font-bold text-blue-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            GrowthPlus Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Growth Capital",
                icon: "💰",
                description: "Flexible financing for business expansion needs"
              },
              {
                component: "Business Advisory",
                icon: "🎓",
                description: "Expert guidance on scaling strategies"
              },
              {
                component: "Growth Coaching",
                icon: "👨‍💼",
                description: "Personalized mentorship for sustainable growth"
              },
              {
                component: "Market Access",
                icon: "🤝",
                description: "Networking and partnership opportunities"
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

        {/* Expansion Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Expansion Investment Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Equipment Purchase", 
                impact: "Upgrade machinery and tools",
                icon: "🔧" 
              },
              { 
                area: "Inventory Expansion", 
                impact: "Increase stock levels and variety",
                icon: "📦" 
              },
              { 
                area: "New Location", 
                impact: "Open additional branches",
                icon: "🏪" 
              },
              { 
                area: "Staff Hiring", 
                impact: "Grow your team capacity",
                icon: "👥" 
              },
              { 
                area: "Technology Upgrade", 
                impact: "Digital systems and software",
                icon: "💻" 
              },
              { 
                area: "Marketing Campaign", 
                impact: "Reach new customer segments",
                icon: "📢" 
              },
              { 
                area: "Facility Renovation", 
                impact: "Improve business premises",
                icon: "🏗️" 
              },
              { 
                area: "Working Capital", 
                impact: "Strengthen operational cash flow",
                icon: "💼" 
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
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Flexible Repayment</h4>
            <p className="text-blue-200">
              Repayment schedules designed to match your business cash flow cycles and seasonal variations.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Growth Advisory</h4>
            <p className="text-indigo-200">
              Expert business advisory services to help you make smart expansion decisions and maximize ROI.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Business Network</h4>
            <p className="text-blue-200">
              Access to suppliers, distributors, and business partners to accelerate your growth trajectory.
            </p>
          </div>
        </div>

        {/* Business Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Join Our Growth Network</p>
              </div>
              <p className="text-blue-100">Connect with business advisors and access expansion resources</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Business Desk
              </a>
              <a 
                href="mailto:expansion@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroEnterpriseExpansionLoanDetails;