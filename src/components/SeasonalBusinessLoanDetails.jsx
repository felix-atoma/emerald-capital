import React from 'react';
import { CheckCircle, Users, TrendingUp, Calendar, Target, Award, BookOpen, Sun, Globe } from 'lucide-react';

const SeasonalBusinessLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Seasonal Business Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master your seasonal business cycles with perfectly timed financing. 
            Whether it's holiday shopping, farming seasons, or event-based businesses, 
            get the capital you need when demand peaks and repay when revenue flows in.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-green-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SeasonSmart Program</h3>
                  <p className="text-green-200">For Peak Season Success</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-green-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵300 - ₵15K</div>
                    <div className="text-green-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">3-12</div>
                    <div className="text-green-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-green-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">4,200+</div>
                    <div className="text-green-200 text-sm">Seasonal Businesses</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-300">95%</div>
                    <div className="text-green-200 text-sm">Peak Success</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Seasonal Financing Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Flexible Repayment",
                    description: "Pay back after your peak season revenue comes in"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Quick Disbursement",
                    description: "Fast approval to catch your seasonal window"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Seasonal Planning",
                    description: "Business advisory for peak season preparation"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Repeat Access",
                    description: "Annual renewal for returning seasonal businesses"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-teal-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-teal-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-green-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Seasonal business in Ghana",
                  "Operating for at least one full season",
                  "Valid business registration or ID",
                  "Proof of previous season revenue",
                  "Clear seasonal business plan",
                  "Bank account or mobile money",
                  "Inventory or stock plan",
                  "Willingness for business training"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
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
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Seasonal Business Types</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🎄", title: "Holiday Retail", desc: "Christmas, Easter sales" },
                  { icon: "🌾", title: "Farming/Agric", desc: "Planting, harvest seasons" },
                  { icon: "🎓", title: "Back-to-School", desc: "School supplies, uniforms" },
                  { icon: "🎉", title: "Event Services", desc: "Weddings, festivals" },
                  { icon: "🏖️", title: "Tourism", desc: "Peak travel seasons" },
                  { icon: "🍓", title: "Produce/Fruits", desc: "Seasonal harvests" },
                  { icon: "⚽", title: "Sports Retail", desc: "Tournament seasons" },
                  { icon: "🎨", title: "Fashion", desc: "Seasonal collections" },
                ].map((business, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl mb-2">{business.icon}</div>
                    <div className="font-bold text-gray-900">{business.title}</div>
                    <div className="text-sm text-gray-600">{business.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
           

            {/* Support Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Included Support Services</h3>
              <div className="space-y-3">
                {[
                  "Seasonal business planning guidance",
                  "Inventory management training",
                  "Peak season preparation workshops",
                  "Marketing and sales strategies",
                  "Cash flow management coaching",
                  "Supplier connection support",
                  "Off-season income planning",
                  "Annual renewal priority access"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Seasonal Loan
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-12 shadow-xl border border-green-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Seasonal Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Grace Antwi",
                business: "Grace's Christmas Shop",
                loan: "₵12,000",
                before: "Limited holiday stock, low sales",
                after: "Full inventory, 10x revenue during Christmas"
              },
              {
                name: "Kofi Darko",
                business: "Darko Farms",
                loan: "₵8,500",
                before: "Manual farming, small yield",
                after: "Bought fertilizer & seeds, 5x harvest output"
              },
              {
                name: "Abena Osei",
                business: "UniStyle Uniforms",
                loan: "₵10,000",
                before: "Couldn't meet back-to-school demand",
                after: "Stocked 500+ uniforms, sold out in 2 weeks"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-green-600 font-medium">{story.business}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-emerald-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Seasonal Loan:</span>
                    <span className="font-bold text-green-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            SeasonSmart Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Flexible Financing",
                icon: "💰",
                description: "Capital timed perfectly for your peak season"
              },
              {
                component: "Business Planning",
                icon: "📋",
                description: "Preparation strategies for maximum returns"
              },
              {
                component: "Grace Periods",
                icon: "⏰",
                description: "Delayed repayment until revenue comes in"
              },
              {
                component: "Annual Renewal",
                icon: "🔄",
                description: "Priority access for returning customers"
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

        {/* Seasonal Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Peak Season Investment Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Inventory Stocking", 
                impact: "Stock up for high-demand periods",
                icon: "📦" 
              },
              { 
                area: "Equipment Rental", 
                impact: "Rent tools for seasonal work",
                icon: "🔧" 
              },
              { 
                area: "Seasonal Staff", 
                impact: "Hire temporary workers",
                icon: "👥" 
              },
              { 
                area: "Marketing Push", 
                impact: "Promote before peak season",
                icon: "📢" 
              },
              { 
                area: "Raw Materials", 
                impact: "Buy inputs for production",
                icon: "🌾" 
              },
              { 
                area: "Storage Space", 
                impact: "Rent warehouses for stock",
                icon: "🏪" 
              },
              { 
                area: "Transportation", 
                impact: "Logistics for busy periods",
                icon: "🚚" 
              },
              { 
                area: "Working Capital", 
                impact: "Cover operational expenses",
                icon: "💼" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Flexible Repayment</h4>
            <p className="text-green-200">
              Grace periods and repayment schedules aligned with your seasonal revenue patterns.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Peak Season Planning</h4>
            <p className="text-emerald-200">
              Expert guidance on inventory, marketing, and preparation to maximize seasonal profits.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Annual Access</h4>
            <p className="text-green-200">
              Returning customers get priority approval and increased loan amounts each season.
            </p>
          </div>
        </div>

        {/* Seasonal Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Ready for Your Peak Season?</p>
              </div>
              <p className="text-green-100">Get your seasonal financing approved quickly</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Seasonal Desk
              </a>
              <a 
                href="mailto:seasonal@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalBusinessLoanDetails;