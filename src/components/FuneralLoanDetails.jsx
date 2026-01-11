import React from 'react';
import { CheckCircle, Users, Heart, Shield, Clock, Award, BookOpen, Phone, Globe } from 'lucide-react';

const FuneralLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-indigo-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Modified */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold text-indigo-600">Compassionate Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Funeral Assistance Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            During life's most difficult moments, we're here to provide compassionate 
            financial support. Our funeral assistance loan helps you honor your loved 
            one with dignity while managing the financial burden with care and respect.
          </p>
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">24/7 Emergency Support</div>
                <div className="text-indigo-100">We're available anytime you need us</div>
              </div>
            </div>
            <a 
              href="tel:+233208070000"
              className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
            >
              Call Now: 0208 070 000
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card - Different Design */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">CareSupport Program</h3>
                  <p className="text-indigo-200">Compassionate Funeral Assistance</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-indigo-200 mb-4">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-1">₵1K - ₵20K</div>
                    <div className="text-indigo-200 text-sm">Assistance Amount</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-1">6-36</div>
                    <div className="text-indigo-200 text-sm">Month Term</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-indigo-200 mb-3">Our Support</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-100">Families Helped</span>
                    <span className="text-2xl font-bold">6,200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-100">Avg. Approval Time</span>
                    <span className="text-xl font-bold text-purple-300">12 Hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-100">Grace Period Offered</span>
                    <span className="text-xl font-bold text-purple-300">1-3 Months</span>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg mb-4">Compassionate Support Features</h4>
                {[
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Emergency Processing",
                    description: "Expedited approval within 3-24 hours"
                  },
                  {
                    icon: <Heart className="w-5 h-5" />,
                    title: "Grace Period",
                    description: "Time to grieve before repayments begin"
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Flexible Terms",
                    description: "Repayment plans that work for your situation"
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: "24/7 Assistance",
                    description: "Support available anytime, day or night"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="text-indigo-200">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold text-sm mb-0.5">{benefit.title}</h5>
                      <p className="text-indigo-200 text-xs">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen or resident",
                  "Valid national ID card",
                  "Death certificate or funeral notice",
                  "Proof of relationship to deceased (if applicable)",
                  "Contact information for next of kin",
                  "Funeral home estimate or expenses",
                  "Basic income verification",
                  "Two references"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Cover */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Funeral Expenses Covered</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Casket/Coffin",
                  "Burial Plot",
                  "Funeral Service",
                  "Transportation",
                  "Flowers & Wreaths",
                  "Memorial Programs",
                  "Morgue Fees",
                  "Catering"
                ].map((expense, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">{expense}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Application & Support Section */}
          <div className="space-y-8">
            {/* How to Apply */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How to Apply</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Contact Us Immediately",
                    desc: "Call our 24/7 hotline or visit any branch"
                  },
                  {
                    step: "2",
                    title: "Submit Documents",
                    desc: "Provide ID, death certificate, and funeral estimate"
                  },
                  {
                    step: "3",
                    title: "Quick Review",
                    desc: "We process applications within 3-24 hours"
                  },
                  {
                    step: "4",
                    title: "Receive Funds",
                    desc: "Money disbursed directly or to funeral home"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Estimate Your Support</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Funeral Expenses (₵)</label>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    defaultValue="10000"
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₵1,000</span>
                    <span className="font-bold text-gray-900">₵10,000</span>
                    <span className="text-sm text-gray-600">₵20,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Repayment Period</label>
                  <select className="w-full border-2 border-indigo-200 rounded-xl px-4 py-3 outline-none">
                    <option>6 months</option>
                    <option>12 months</option>
                    <option>18 months</option>
                    <option>24 months</option>
                    <option>36 months</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-indigo-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Monthly Payment (12 months)</span>
                    <span className="font-bold text-gray-900">₵920/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Grace Period</span>
                    <span className="font-bold text-indigo-600">2 months</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Total Repayment</span>
                    <span className="font-bold text-xl text-purple-600">₵11,040</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Support Services Included</h3>
              <div className="space-y-3">
                {[
                  "24/7 emergency hotline access",
                  "Grief counseling referrals",
                  "Funeral planning assistance",
                  "Direct payment to funeral homes",
                  "Flexible grace period (1-3 months)",
                  "Compassionate customer service",
                  "Payment plan modifications if needed",
                  "Confidential and respectful process"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Request Emergency Assistance
            </button>
          </div>
        </div>

        {/* Testimonials - Different Layout */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl border border-indigo-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Words of Comfort
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Families who found support during their difficult times
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Akosua M.",
                relation: "Daughter",
                quote: "During the most difficult time of my life, they made the financial burden one less thing to worry about. Forever grateful.",
                location: "Accra"
              },
              {
                name: "Kwame A.",
                relation: "Son",
                quote: "The grace period allowed me to grieve properly. Their compassion and understanding meant everything to our family.",
                location: "Kumasi"
              },
              {
                name: "Esi K.",
                relation: "Wife",
                quote: "Within hours, they helped us give my husband the dignified funeral he deserved. Their support was truly a blessing.",
                location: "Takoradi"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <div className="mb-4">
                  <div className="text-indigo-400 text-3xl mb-2">"</div>
                  <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.relation} • {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Families Trust Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Immediate Response",
                description: "24/7 availability with emergency processing in hours, not days"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Compassionate Service",
                description: "Understanding and respectful support during your difficult time"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Flexible & Fair",
                description: "Grace periods and repayment plans designed with empathy"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-indigo-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - Different Design */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 border border-indigo-200">
            <Heart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We're Here for You 24/7
            </h3>
            <p className="text-gray-600 mb-8">
              During this difficult time, let us help ease your financial burden. 
              Our compassionate team is ready to assist you immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+233208070000"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Emergency Hotline: 0208 070 000
              </a>
              <a 
                href="mailto:support@emeraldcapitalgh.com"
                className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
              >
                Email Support Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralLoanDetails;