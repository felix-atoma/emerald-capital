import React from 'react';
import { CheckCircle, Users, TrendingUp, User, Target, Award, BookOpen, Heart, Globe } from 'lucide-react';

const PersonalLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-sky-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Personal Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and flexible personal financing designed to help you achieve 
            your life goals. Whether planned or unexpected, we provide the financial 
            support you need with transparent terms and a hassle-free application process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-sky-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">LifeGoals Program</h3>
                  <p className="text-sky-200">For Personal Aspirations</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-sky-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵500 - ₵30K</div>
                    <div className="text-sky-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6-48</div>
                    <div className="text-sky-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-sky-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">12,000+</div>
                    <div className="text-sky-200 text-sm">People Helped</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-300">24hrs</div>
                    <div className="text-sky-200 text-sm">Avg. Approval</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Personal Loan Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Fast Approval",
                    description: "Get approved within 24 hours with minimal paperwork"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Transparent Terms",
                    description: "No hidden fees or surprise charges"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Flexible Repayment",
                    description: "Choose terms that fit your budget"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Multiple Use Cases",
                    description: "Education, medical, travel, home improvement"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-cyan-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-sky-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-sky-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen aged 21-65",
                  "Valid national ID card",
                  "Proof of employment or income",
                  "Salary account or bank statement (3 months)",
                  "Active mobile money account",
                  "Residential address verification",
                  "Two references (family or friends)",
                  "Clean credit history"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-sky-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Loan Purpose Section */}
          <div className="space-y-8">
            {/* Loan Purpose Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-sky-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Loan Purposes</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🎓", title: "Education", desc: "Tuition, courses, training" },
                  { icon: "🏥", title: "Medical", desc: "Treatment, surgery, bills" },
                  { icon: "🏠", title: "Home Improvement", desc: "Repairs, renovations" },
                  { icon: "💒", title: "Wedding", desc: "Ceremony, reception" },
                  { icon: "✈️", title: "Travel", desc: "Vacation, family visits" },
                  { icon: "🚗", title: "Vehicle Purchase", desc: "Car down payment" },
                  { icon: "💻", title: "Electronics", desc: "Laptop, phone, gadgets" },
                  { icon: "🎉", title: "Events", desc: "Celebrations, parties" },
                ].map((purpose, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-sky-50 rounded-xl">
                    <div className="text-2xl mb-2">{purpose.icon}</div>
                    <div className="font-bold text-gray-900">{purpose.title}</div>
                    <div className="text-sm text-gray-600">{purpose.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
            <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-sky-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Loan Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount Needed (₵)</label>
                  <input
                    type="range"
                    min="500"
                    max="30000"
                    step="500"
                    defaultValue="15000"
                    className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₵500</span>
                    <span className="font-bold text-gray-900">₵15,000</span>
                    <span className="text-sm text-gray-600">₵30,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Purpose</label>
                  <select className="w-full border-2 border-sky-200 rounded-xl px-4 py-3 outline-none">
                    <option>Education</option>
                    <option>Medical Expenses</option>
                    <option>Home Improvement</option>
                    <option>Wedding</option>
                    <option>Travel</option>
                    <option>Other Personal Needs</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-sky-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Monthly Payment (24 months)</span>
                    <span className="font-bold text-gray-900">₵720/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Processing Fee (2%)</span>
                    <span className="font-bold text-sky-600">₵300</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Total Repayment</span>
                    <span className="font-bold text-xl text-blue-600">₵17,280</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-sky-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Support Services</h3>
              <div className="space-y-3">
                {[
                  "24/7 customer service hotline",
                  "Online account management portal",
                  "Mobile app for payments and tracking",
                  "SMS payment reminders",
                  "Flexible payment date options",
                  "Early repayment without penalties",
                  "Emergency payment extensions (if needed)",
                  "Financial wellness tips and advice"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Personal Loan
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-3xl p-12 shadow-xl border border-sky-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Personal Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ama Kufuor",
                purpose: "Medical Treatment",
                loan: "₵12,000",
                before: "Unable to afford surgery",
                after: "Successful operation, healthy and working"
              },
              {
                name: "Kwesi Ansah",
                purpose: "Master's Degree",
                loan: "₵25,000",
                before: "Couldn't afford tuition",
                after: "Graduated, got promotion, 2x salary"
              },
              {
                name: "Faustina Owusu",
                purpose: "Home Renovation",
                loan: "₵18,000",
                before: "Leaking roof, damaged walls",
                after: "Beautiful home, comfort and dignity"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-sky-600 font-medium">{story.purpose}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-sky-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-sky-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-blue-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Personal Loan:</span>
                    <span className="font-bold text-sky-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-sky-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            LifeGoals Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Quick Access",
                icon: "⚡",
                description: "Fast approval and disbursement process"
              },
              {
                component: "Flexible Terms",
                icon: "⚙️",
                description: "Choose repayment period that suits you"
              },
              {
                component: "Transparent Fees",
                icon: "💎",
                description: "No hidden charges or surprises"
              },
              {
                component: "24/7 Support",
                icon: "🤝",
                description: "Customer service always available"
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

        {/* Personal Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Life Goals We Support
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Education", 
                impact: "School fees, courses, certifications",
                icon: "🎓" 
              },
              { 
                area: "Healthcare", 
                impact: "Medical bills, surgery, treatment",
                icon: "🏥" 
              },
              { 
                area: "Wedding", 
                impact: "Ceremony, reception, honeymoon",
                icon: "💒" 
              },
              { 
                area: "Home Upgrade", 
                impact: "Repairs, renovation, furnishing",
                icon: "🏠" 
              },
              { 
                area: "Travel", 
                impact: "Vacation, family visits, tourism",
                icon: "✈️" 
              },
              { 
                area: "Technology", 
                impact: "Laptop, phone, home appliances",
                icon: "💻" 
              },
              { 
                area: "Debt Consolidation", 
                impact: "Combine multiple debts",
                icon: "💳" 
              },
              { 
                area: "Emergency Funds", 
                impact: "Unexpected urgent expenses",
                icon: "🆘" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-sky-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-sky-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Fast & Simple</h4>
            <p className="text-sky-200">
              Minimal paperwork and quick approval process. Get your loan within 24 hours of application.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-sky-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Transparent Terms</h4>
            <p className="text-blue-200">
              Clear interest rates and repayment schedules. No hidden fees or surprise charges ever.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-sky-600 to-cyan-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Customer Care</h4>
            <p className="text-sky-200">
              24/7 support team ready to help you. Flexible payment options and understanding approach.
            </p>
          </div>
        </div>

        {/* Personal Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Achieve Your Goals?</p>
              </div>
              <p className="text-sky-100">Get started with your personal loan today</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-sky-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Personal Loans
              </a>
              <a 
                href="mailto:personal@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Apply Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanDetails;