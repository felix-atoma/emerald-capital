import React from 'react';
import { CheckCircle, Users, TrendingUp, Smartphone, Target, Award, BookOpen, Zap, Globe } from 'lucide-react';

const EmeraldPayDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Emerald Pay Mobile Money
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete mobile money solution for instant payments, transfers, and 
            transactions. Send money, pay bills, buy airtime, and shop—all from your 
            phone with Emerald Pay's fast, secure, and convenient digital wallet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Service Card */}
            <div className="bg-gradient-to-r from-purple-600 to-fuchsia-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Emerald Pay Wallet</h3>
                  <p className="text-purple-200">Mobile Money Made Easy</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-purple-200 mb-2">Service Overview</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">*789#</div>
                    <div className="text-purple-200 text-sm">USSD Shortcode</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">₵0</div>
                    <div className="text-purple-200 text-sm">Registration Fee</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-purple-200 mb-2">Platform Statistics</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">250,000+</div>
                    <div className="text-purple-200 text-sm">Active Users</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-pink-300">50K+</div>
                    <div className="text-purple-200 text-sm">Daily Transactions</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Emerald Pay Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Instant Transfers",
                    description: "Send money in seconds, 24/7"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Low Fees",
                    description: "Competitive transaction charges"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Wide Acceptance",
                    description: "Pay at thousands of merchants"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Multi-Service",
                    description: "Bills, airtime, shopping, transfers"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-pink-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-pink-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-purple-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Getting Started Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How to Get Started</h3>
              <div className="space-y-4">
                {[
                  "Have a valid phone number (any network)",
                  "Dial *789# from your phone",
                  "Follow registration prompts",
                  "Enter your full name",
                  "Create a 4-digit PIN",
                  "Verify your identity (ID required)",
                  "Start using Emerald Pay instantly",
                  "Download the app for more features"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Services Section */}
          <div className="space-y-8">
            {/* Service Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Services Available</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "💸", title: "Send Money", desc: "To any mobile number" },
                  { icon: "💰", title: "Receive Money", desc: "From anyone, anytime" },
                  { icon: "🏪", title: "Buy Airtime", desc: "For self or others" },
                  { icon: "💡", title: "Pay Bills", desc: "Utilities, subscriptions" },
                  { icon: "🛒", title: "Shop Online", desc: "E-commerce payments" },
                  { icon: "🏦", title: "Bank Transfer", desc: "To/from bank accounts" },
                  { icon: "💳", title: "Withdraw Cash", desc: "At agents nationwide" },
                  { icon: "📱", title: "Data Bundles", desc: "Internet packages" },
                ].map((service, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="font-bold text-gray-900">{service.title}</div>
                    <div className="text-sm text-gray-600">{service.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction Fees */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Transaction Fees</h3>
              <div className="space-y-4">
                {[
                  { range: "₵1 - ₵100", fee: "₵0.50" },
                  { range: "₵101 - ₵500", fee: "₵2" },
                  { range: "₵501 - ₵1,000", fee: "₵5" },
                  { range: "₵1,001 - ₵5,000", fee: "₵10" },
                  { range: "₵5,001 - ₵10,000", fee: "₵20" },
                  { range: "Above ₵10,000", fee: "0.2%" },
                ].map((tier, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700 font-medium">{tier.range}</span>
                    <span className="text-purple-600 font-bold">{tier.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* App Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Mobile App Features</h3>
              <div className="space-y-3">
                {[
                  "Transaction history and statements",
                  "Scheduled payments and reminders",
                  "QR code payments at merchants",
                  "Fingerprint and face ID security",
                  "Split bills with friends",
                  "Request money from contacts",
                  "Savings goals and tracking",
                  "Merchant locator and offers"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Register for Emerald Pay
            </button>
          </div>
        </div>

        {/* User Testimonials */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 shadow-xl border border-purple-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Users Are Saying
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Akua Mensah",
                location: "Accra",
                usage: "Daily User",
                testimonial: "I send money to my family in the village every week. Emerald Pay is so fast and cheap!"
              },
              {
                name: "Kwame Osei",
                location: "Kumasi",
                usage: "Merchant",
                testimonial: "My customers pay via Emerald Pay. It's instant and I receive notifications immediately."
              },
              {
                name: "Ama Darko",
                location: "Takoradi",
                usage: "Student",
                testimonial: "Perfect for buying airtime and paying for online shopping. Love the app!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="text-purple-600 font-medium text-sm">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-3">"{testimonial.testimonial}"</p>
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-gray-600 text-sm">Usage:</span>
                  <span className="font-bold text-purple-700 text-sm">{testimonial.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Emerald Pay
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Instant Speed",
                icon: "⚡",
                description: "Transactions complete in seconds"
              },
              {
                component: "24/7 Available",
                icon: "🕐",
                description: "Send money anytime, anywhere"
              },
              {
                component: "Bank-Level Security",
                icon: "🔒",
                description: "PIN, biometric, encryption"
              },
              {
                component: "Low Fees",
                icon: "💵",
                description: "Affordable transaction charges"
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

        {/* Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What You Can Do With Emerald Pay
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Send Money", 
                impact: "To family, friends, anyone",
                icon: "💸" 
              },
              { 
                area: "Pay Bills", 
                impact: "Utilities, TV, internet",
                icon: "💡" 
              },
              { 
                area: "Buy Airtime", 
                impact: "All networks instantly",
                icon: "📱" 
              },
              { 
                area: "Shop Online", 
                impact: "E-commerce payments",
                icon: "🛒" 
              },
              { 
                area: "Withdraw Cash", 
                impact: "At thousands of agents",
                icon: "🏦" 
              },
              { 
                area: "Merchant Payment", 
                impact: "Scan QR, pay instantly",
                icon: "📷" 
              },
              { 
                area: "Request Money", 
                impact: "From contacts easily",
                icon: "💰" 
              },
              { 
                area: "Save Money", 
                impact: "Set goals, track progress",
                icon: "🎯" 
              },
            ].map((usecase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
                <div className="text-2xl mb-3">{usecase.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{usecase.area}</div>
                <div className="text-sm text-gray-600">{usecase.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Lightning Fast</h4>
            <p className="text-purple-200">
              Send money and make payments instantly, 24/7. No delays, no waiting—transactions complete in seconds.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Super Convenient</h4>
            <p className="text-fuchsia-200">
              No need to visit banks or ATMs. Everything you need is on your phone with easy USSD and app access.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Highly Secure</h4>
            <p className="text-purple-200">
              Bank-level encryption, PIN protection, biometric security, and instant transaction notifications.
            </p>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Smartphone className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Go Mobile?</p>
              </div>
              <p className="text-purple-100">Start using Emerald Pay today</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Dial *789#
              </button>
              <a 
                href="mailto:support@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmeraldPayDetails;