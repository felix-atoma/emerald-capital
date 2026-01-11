import React from 'react';
import { CheckCircle, Users, TrendingUp, Gem, Target, Award, BookOpen, Crown, Globe } from 'lucide-react';

const EmeraldBusinessDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Emerald Business Banking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your business with our premium banking tier designed for established 
            enterprises. Experience priority service, exclusive benefits, dedicated support, 
            and financial solutions crafted for business excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Service Card */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <Gem className="w-8 h-8 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Emerald Elite Tier</h3>
                  <p className="text-emerald-200">Premium Business Banking</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-emerald-200 mb-2">Membership Requirements</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵50K Min.</div>
                    <div className="text-emerald-200 text-sm">Account Balance</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">₵5M+ p.a.</div>
                    <div className="text-emerald-200 text-sm">Annual Turnover</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-emerald-200 mb-2">Elite Community</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">1,200+</div>
                    <div className="text-emerald-200 text-sm">Emerald Members</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-300">98%</div>
                    <div className="text-emerald-200 text-sm">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Exclusive Benefits</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Personal Relationship Manager",
                    description: "Dedicated banker for all your business needs"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Priority Service",
                    description: "Skip queues with express banking access"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Premium Lounge Access",
                    description: "Exclusive business lounge in all branches"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Higher Transaction Limits",
                    description: "Elevated daily and monthly limits"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-green-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-emerald-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Membership Criteria</h3>
              <div className="space-y-4">
                {[
                  "Registered business in Ghana for 2+ years",
                  "Minimum account balance of ₵50,000",
                  "Annual business turnover of ₵5M+",
                  "Valid business registration certificate",
                  "Audited financial statements",
                  "Tax compliance certificate",
                  "Director's valid identification",
                  "Corporate bank references"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Benefits Section */}
          <div className="space-y-8">
            {/* Premium Benefits */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Premium Benefits Package</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "👔", title: "Relationship Manager", desc: "Dedicated support" },
                  { icon: "⚡", title: "Express Service", desc: "Priority processing" },
                  { icon: "🏢", title: "Business Lounge", desc: "Exclusive access" },
                  { icon: "💳", title: "Premium Cards", desc: "Gold/Platinum" },
                  { icon: "📞", title: "24/7 Concierge", desc: "Personal assistance" },
                  { icon: "✈️", title: "Travel Benefits", desc: "Airport lounge" },
                  { icon: "💼", title: "Higher Limits", desc: "Enhanced transactions" },
                  { icon: "🎯", title: "Waived Fees", desc: "Reduced charges" },
                ].map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-xl">
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <div className="font-bold text-gray-900">{benefit.title}</div>
                    <div className="text-sm text-gray-600">{benefit.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Comparison */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Emerald vs Standard Banking</h3>
              <div className="space-y-4">
                {[
                  { feature: "Relationship Manager", standard: "No", emerald: "Yes" },
                  { feature: "Queue Priority", standard: "No", emerald: "Express" },
                  { feature: "Monthly Fees", standard: "₵50", emerald: "Waived" },
                  { feature: "Transaction Limit", standard: "₵50K", emerald: "₵500K" },
                  { feature: "Business Lounge", standard: "No", emerald: "Yes" },
                  { feature: "Concierge Service", standard: "No", emerald: "24/7" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700 font-medium">{item.feature}</span>
                    <div className="flex gap-4">
                      <span className="text-gray-500 text-sm w-16 text-center">{item.standard}</span>
                      <span className="text-emerald-600 font-bold text-sm w-16 text-center">{item.emerald}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Complimentary Services</h3>
              <div className="space-y-3">
                {[
                  "Unlimited free local transfers",
                  "Free checkbooks and statements",
                  "Complimentary business advisory sessions",
                  "Priority loan processing and approval",
                  "Discounted foreign exchange rates",
                  "Free credit and financial reports",
                  "Invitation to exclusive networking events",
                  "Access to business development workshops"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Emerald Business
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-12 shadow-xl border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Emerald Member Testimonials
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Samuel Ofosu",
                company: "Ofosu Group Ltd",
                member: "2 years",
                testimonial: "The relationship manager understands our business needs. Banking is now effortless and strategic."
              },
              {
                name: "Elizabeth Amoako",
                company: "Amoako Enterprises",
                member: "3 years",
                testimonial: "Priority service saves us hours every week. The business lounge is perfect for client meetings."
              },
              {
                name: "Dr. Yaw Mensah",
                company: "Mensah Holdings",
                member: "4 years",
                testimonial: "Higher limits and waived fees improved our cash flow. The advisory sessions are invaluable."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    <Crown className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-emerald-600 font-medium text-sm">{story.company}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 italic">"{story.testimonial}"</p>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600 text-sm">Emerald Member:</span>
                    <span className="font-bold text-emerald-700">{story.member}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Emerald Business Privileges
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "VIP Treatment",
                icon: "👑",
                description: "Priority service and express banking"
              },
              {
                component: "Expert Advisory",
                icon: "🎯",
                description: "Dedicated relationship management"
              },
              {
                component: "Premium Access",
                icon: "🏢",
                description: "Exclusive lounges and facilities"
              },
              {
                component: "Elite Network",
                icon: "🤝",
                description: "Connect with top business leaders"
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

        {/* Premium Services */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Exclusive Services & Benefits
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Banking Priority", 
                impact: "Skip queues, express service",
                icon: "⚡" 
              },
              { 
                area: "Premium Cards", 
                impact: "Gold/Platinum business cards",
                icon: "💳" 
              },
              { 
                area: "Business Lounge", 
                impact: "Exclusive workspace in branches",
                icon: "🏢" 
              },
              { 
                area: "Concierge Service", 
                impact: "24/7 personal assistance",
                icon: "📞" 
              },
              { 
                area: "Higher Limits", 
                impact: "Enhanced transaction ceilings",
                icon: "📈" 
              },
              { 
                area: "Waived Fees", 
                impact: "Reduced or zero charges",
                icon: "💰" 
              },
              { 
                area: "Travel Benefits", 
                impact: "Airport lounge access",
                icon: "✈️" 
              },
              { 
                area: "Networking Events", 
                impact: "Exclusive business forums",
                icon: "🎭" 
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
                <div className="text-2xl mb-3">{benefit.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{benefit.area}</div>
                <div className="text-sm text-gray-600">{benefit.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Crown className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Elite Status</h4>
            <p className="text-emerald-200">
              Join an exclusive community of successful business leaders with premium banking privileges.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Dedicated Support</h4>
            <p className="text-green-200">
              Personal relationship manager who understands your business and provides tailored solutions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Gem className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Premium Benefits</h4>
            <p className="text-emerald-200">
              Enjoy waived fees, higher limits, express service, and exclusive access to business facilities.
            </p>
          </div>
        </div>

        {/* Emerald Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Gem className="w-6 h-6" />
                <p className="text-lg font-bold">Ready for Premium Business Banking?</p>
              </div>
              <p className="text-emerald-100">Join the Emerald Business elite today</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Emerald Desk
              </a>
              <a 
                href="mailto:emerald@emeraldcapitalgh.com" 
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

export default EmeraldBusinessDetails;