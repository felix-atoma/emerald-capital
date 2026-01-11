import React from 'react';
import { CheckCircle, Users, TrendingUp, ShieldCheck, Target, Award, BookOpen, Heart, Globe } from 'lucide-react';

const InsuranceProductsDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-red-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Insurance Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive insurance solutions to protect you, your family, and your assets. 
            From life and health to property and business insurance, we offer tailored 
            coverage plans designed to give you peace of mind and financial security.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Service Card */}
            <div className="bg-gradient-to-r from-red-600 to-orange-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-red-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ProtectPlus Coverage</h3>
                  <p className="text-red-200">Comprehensive Insurance</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-red-200 mb-2">Coverage Overview</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵5K+</div>
                    <div className="text-red-200 text-sm">Min. Coverage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">₵50/month</div>
                    <div className="text-red-200 text-sm">Starting Premium</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-red-200 mb-2">Our Track Record</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">45,000+</div>
                    <div className="text-red-200 text-sm">Policyholders</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-300">₵150M+</div>
                    <div className="text-red-200 text-sm">Claims Paid</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Insurance Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Fast Claims Processing",
                    description: "Quick approvals and timely payouts"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Flexible Plans",
                    description: "Customizable coverage to fit your needs"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Wide Coverage",
                    description: "Life, health, property, and business"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Expert Support",
                    description: "Dedicated claims advisors available 24/7"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-orange-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-red-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Requirements Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">General Requirements</h3>
              <div className="space-y-4">
                {[
                  "Valid national ID card",
                  "Proof of income or employment",
                  "Medical examination (for life/health)",
                  "Proof of asset ownership (for property)",
                  "Completed application form",
                  "Beneficiary information",
                  "Initial premium payment",
                  "Age requirement: 18-65 years"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Products Section */}
          <div className="space-y-8">
            {/* Insurance Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Insurance Plans</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "❤️", title: "Life Insurance", desc: "Family protection" },
                  { icon: "🏥", title: "Health Insurance", desc: "Medical coverage" },
                  { icon: "🏠", title: "Property Insurance", desc: "Home & contents" },
                  { icon: "🚗", title: "Auto Insurance", desc: "Vehicle protection" },
                  { icon: "💼", title: "Business Insurance", desc: "Commercial cover" },
                  { icon: "✈️", title: "Travel Insurance", desc: "Trip protection" },
                  { icon: "👨‍👩‍👧", title: "Family Package", desc: "Group coverage" },
                  { icon: "🎓", title: "Education Plan", desc: "School fees assurance" },
                ].map((plan, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-red-50 rounded-xl">
                    <div className="text-2xl mb-2">{plan.icon}</div>
                    <div className="font-bold text-gray-900">{plan.title}</div>
                    <div className="text-sm text-gray-600">{plan.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Calculator */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Premium Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Amount (₵)</label>
                  <input
                    type="range"
                    min="5000"
                    max="500000"
                    step="5000"
                    defaultValue="100000"
                    className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₵5,000</span>
                    <span className="font-bold text-gray-900">₵100,000</span>
                    <span className="text-sm text-gray-600">₵500,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Type</label>
                  <select className="w-full border-2 border-red-200 rounded-xl px-4 py-3 outline-none">
                    <option>Life Insurance</option>
                    <option>Health Insurance</option>
                    <option>Property Insurance</option>
                    <option>Auto Insurance</option>
                    <option>Business Insurance</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-red-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Monthly Premium</span>
                    <span className="font-bold text-gray-900">₵280/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Premium (Save 10%)</span>
                    <span className="font-bold text-red-600">₵3,024/year</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Coverage Amount</span>
                    <span className="font-bold text-xl text-orange-600">₵100,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What's Covered</h3>
              <div className="space-y-3">
                {[
                  "Death and disability benefits",
                  "Hospitalization and medical expenses",
                  "Property damage and theft",
                  "Accident and emergency care",
                  "Critical illness coverage",
                  "Maternity and child care",
                  "Prescription medications",
                  "Rehabilitation services"
                ].map((coverage, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{coverage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Get Insurance Quote
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12 shadow-xl border border-red-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Claims Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Yaw Asante",
                policy: "Life Insurance",
                claim: "₵200,000",
                situation: "Provided for family after unexpected passing, children's education secured"
              },
              {
                name: "Abena Mensah",
                policy: "Health Insurance",
                claim: "₵35,000",
                situation: "Full coverage for surgery and recovery, no out-of-pocket expenses"
              },
              {
                name: "Kofi Owusu",
                policy: "Property Insurance",
                claim: "₵80,000",
                situation: "Home rebuilt after fire damage, full replacement covered"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-red-600 font-medium">{story.policy}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">{story.situation}</p>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Claim Paid:</span>
                    <span className="font-bold text-red-700">{story.claim}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-red-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ProtectPlus Program Features
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Comprehensive",
                icon: "🛡️",
                description: "Wide range of coverage options"
              },
              {
                component: "Affordable",
                icon: "💰",
                description: "Competitive premiums and discounts"
              },
              {
                component: "Fast Claims",
                icon: "⚡",
                description: "Quick processing and payouts"
              },
              {
                component: "24/7 Support",
                icon: "📞",
                description: "Always available for assistance"
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

        {/* Coverage Areas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Protect
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Your Life", 
                impact: "Family financial security",
                icon: "❤️" 
              },
              { 
                area: "Your Health", 
                impact: "Medical expense coverage",
                icon: "🏥" 
              },
              { 
                area: "Your Home", 
                impact: "Property and contents",
                icon: "🏠" 
              },
              { 
                area: "Your Vehicle", 
                impact: "Comprehensive auto cover",
                icon: "🚗" 
              },
              { 
                area: "Your Business", 
                impact: "Commercial protection",
                icon: "💼" 
              },
              { 
                area: "Your Income", 
                impact: "Disability and critical illness",
                icon: "💰" 
              },
              { 
                area: "Your Travel", 
                impact: "Trip cancellation and medical",
                icon: "✈️" 
              },
              { 
                area: "Your Future", 
                impact: "Education and retirement",
                icon: "🎓" 
              },
            ].map((coverage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
                <div className="text-2xl mb-3">{coverage.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{coverage.area}</div>
                <div className="text-sm text-gray-600">{coverage.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Peace of Mind</h4>
            <p className="text-red-200">
              Sleep soundly knowing you and your loved ones are protected against life's uncertainties.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Family Protection</h4>
            <p className="text-orange-200">
              Ensure your family's financial security and future even in your absence or during difficult times.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-amber-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Financial Security</h4>
            <p className="text-red-200">
              Protect your assets and income from unexpected events, medical emergencies, and disasters.
            </p>
          </div>
        </div>

        {/* Insurance Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Protect What Matters?</p>
              </div>
              <p className="text-red-100">Get a personalized insurance quote today</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-red-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Insurance Desk
              </a>
              <a 
                href="mailto:insurance@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceProductsDetails;