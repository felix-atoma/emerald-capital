import React from 'react';
import { CheckCircle, Users, TrendingUp, Heart, Target, Award, BookOpen, Briefcase, Globe } from 'lucide-react';

const WomensEmpowermentLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Women's Empowerment Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specially designed to support women entrepreneurs and professionals in 
            achieving financial independence, business growth, and economic empowerment 
            through accessible financing and comprehensive support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-purple-600 to-fuchsia-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SheEmpowers Program</h3>
                  <p className="text-purple-200">For Women's Economic Growth</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-purple-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵200 - ₵8K</div>
                    <div className="text-purple-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6-24</div>
                    <div className="text-purple-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Empowerment Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-purple-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">5,000+</div>
                    <div className="text-purple-200 text-sm">Women Empowered</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-300">75%</div>
                    <div className="text-purple-200 text-sm">Business Growth</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Women-Centric Advantages</h4>
                {[
                  {
                    icon: <Heart className="w-5 h-5" />,
                    title: "Lower Interest Rates",
                    description: "Special reduced rates for women entrepreneurs"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Free Business Training",
                    description: "Entrepreneurship and financial literacy workshops"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Mentorship Program",
                    description: "Access to successful women business mentors"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Networking Opportunities",
                    description: "Connect with other women entrepreneurs"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-purple-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian woman aged 18+",
                  "Valid national ID card",
                  "Business idea or existing business",
                  "Proof of residence",
                  "Business plan (for new ventures)",
                  "Bank account in own name",
                  "Clean credit history",
                  "Commitment to attend training"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
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
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Supported Women Businesses</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "👗", title: "Fashion & Design", desc: "Tailoring, fashion design" },
                  { icon: "🍽️", title: "Food Services", desc: "Catering, restaurant" },
                  { icon: "💇", title: "Beauty Services", desc: "Salon, spa, cosmetics" },
                  { icon: "🛍️", title: "Retail Trading", desc: "Market trading, boutique" },
                  { icon: "👶", title: "Childcare", desc: "Daycare, babysitting" },
                  { icon: "🏠", title: "Home-Based", desc: "Home crafts, baking" },
                  { icon: "💻", title: "Digital Services", desc: "Online business, freelancing" },
                  { icon: "🌱", title: "Agriculture", desc: "Farming, agro-processing" },
                ].map((business, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl mb-2">{business.icon}</div>
                    <div className="font-bold text-gray-900">{business.title}</div>
                    <div className="text-sm text-gray-600">{business.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
         
            {/* Training Program */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Included Training Program</h3>
              <div className="space-y-3">
                {[
                  "Financial literacy and money management",
                  "Business plan development",
                  "Marketing and customer acquisition",
                  "Digital skills for business",
                  "Record keeping and accounting",
                  "Negotiation and leadership skills",
                  "Access to market opportunities",
                  "Networking with women entrepreneurs"
                ].map((training, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{training}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Women's Loan
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 shadow-xl border border-purple-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Women Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ama Osei",
                business: "Ama's Fashion House",
                loan: "₵5,000",
                before: "Home-based tailor with 2 sewing machines",
                after: "Boutique with 5 employees, supplying 3 shops"
              },
              {
                name: "Serwaa Mensah",
                business: "Serwaa's Catering Services",
                loan: "₵3,200",
                before: "Home kitchen, serving neighbors",
                after: "Commercial kitchen, catering for events up to 200 people"
              },
              {
                name: "Efua Agyeman",
                business: "Efua's Beauty Salon",
                loan: "₵4,500",
                before: "Small room salon with basic services",
                after: "Full-service spa with 4 staff, training program"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-purple-600 font-medium">{story.business}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-fuchsia-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Empowerment Loan:</span>
                    <span className="font-bold text-purple-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            SheEmpowers Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Financial Support",
                icon: "💰",
                description: "Accessible loans with favorable terms for women"
              },
              {
                component: "Business Training",
                icon: "🎓",
                description: "Comprehensive entrepreneurship development"
              },
              {
                component: "Mentorship",
                icon: "👩‍🏫",
                description: "Guidance from successful women entrepreneurs"
              },
              {
                component: "Networking",
                icon: "🤝",
                description: "Community of women supporting women"
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

        {/* Business Impact */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Business Impact Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Startup Capital", 
                impact: "Launch new business ventures",
                icon: "🚀" 
              },
              { 
                area: "Business Expansion", 
                impact: "Grow existing women-owned businesses",
                icon: "📈" 
              },
              { 
                area: "Equipment Purchase", 
                impact: "Acquire tools and machinery",
                icon: "🔧" 
              },
              { 
                area: "Inventory Stocking", 
                impact: "Purchase goods for resale",
                icon: "📦" 
              },
              { 
                area: "Skill Development", 
                impact: "Training and certification",
                icon: "🎯" 
              },
              { 
                area: "Market Access", 
                impact: "Expand to new markets",
                icon: "🌍" 
              },
              { 
                area: "Technology Upgrade", 
                impact: "Digital tools and equipment",
                icon: "💻" 
              },
              { 
                area: "Working Capital", 
                impact: "Daily operational expenses",
                icon: "💼" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Lower Interest Rates</h4>
            <p className="text-purple-200">
              Enjoy 25% lower interest rates compared to standard business loans for qualifying women entrepreneurs.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Free Business Training</h4>
            <p className="text-fuchsia-200">
              Comprehensive entrepreneurship training covering finance, marketing, and management skills.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Mentorship Network</h4>
            <p className="text-purple-200">
              Access to successful women entrepreneurs who provide guidance and support throughout your journey.
            </p>
          </div>
        </div>

        {/* Community Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Join Our Women's Network</p>
              </div>
              <p className="text-purple-100">Connect with other women entrepreneurs and access mentorship opportunities</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Women's Desk
              </a>
              <a 
                href="mailto:womensloans@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Join Network
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensEmpowermentLoanDetails;