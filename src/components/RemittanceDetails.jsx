import React from 'react';
import { CheckCircle, Globe, Shield, Clock, DollarSign, Headphones } from 'lucide-react';

const RemittanceDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Visual Section */}
          <div className="space-y-8">
            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Global Money Transfer</h3>
                  <p className="text-gray-600">Secure & Fast International Transfers</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <Shield className="w-5 h-5" />, label: "Licensed", desc: "Fully Regulated" },
                  { icon: <Clock className="w-5 h-5" />, label: "Fast", desc: "30min Delivery" },
                  { icon: <DollarSign className="w-5 h-5" />, label: "Low Fees", desc: "Best Rates" },
                  { icon: <Headphones className="w-5 h-5" />, label: "Support", desc: "24/7 Help" },
                ].map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-green-600 mb-2">{feature.icon}</div>
                    <div className="font-bold text-gray-900">{feature.label}</div>
                    <div className="text-sm text-gray-600">{feature.desc}</div>
                  </div>
                ))}
              </div>

              {/* Live Rate */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <div className="text-sm text-gray-600 mb-2">Live Exchange Rate</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1 GHS = 0.067 USD</div>
                    <div className="text-sm text-gray-600">Updated just now</div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">24/7 Customer Support</h3>
              <p className="text-white/90 mb-6">Get help anytime with our dedicated remittance specialists</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href="tel:+233208070000" className="text-yellow-300 font-bold">+233 20 807 0000</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    💬
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="font-bold">0208070000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Remittance &<br />
              <span className="text-green-600">Money Transfer</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Send money securely to family, friends, and business partners across Ghana 
              and over 150 countries worldwide. Our platform offers competitive exchange 
              rates, low transfer fees, and multiple delivery options including bank 
              deposit and cash pickup.
            </p>

            {/* Key Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Emerald Capital?</h3>
              
              {[
                {
                  title: "Fast & Reliable Transfers",
                  description: "Most transfers are completed within 30 minutes to 24 hours, with real-time tracking so you always know the status of your money."
                },
                {
                  title: "Competitive Exchange Rates",
                  description: "We offer some of the best rates in the market with transparent pricing and no hidden fees. Save more on every transfer."
                },
                {
                  title: "Multiple Payment Options",
                  description: "Send money using bank transfer, mobile money, debit/credit cards, or cash at our branches. Flexible options for everyone."
                },
                {
                  title: "Secure & Regulated",
                  description: "Licensed by financial authorities with bank-level security, encryption, and compliance with international regulations."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Requirements for Sending Money</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <span className="font-medium">Valid ID Card</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                    <span className="font-medium">Proof of Address</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                    <span className="font-medium">Source of Funds</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">4</span>
                    </div>
                    <span className="font-medium">Recipient Details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">5</span>
                    </div>
                    <span className="font-medium">Payment Method</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">6</span>
                    </div>
                    <span className="font-medium">KYC Verification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Your Transfer Now
            </button>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Transfer Destinations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { flag: "🇺🇸", name: "United States", code: "USD" },
              { flag: "🇬🇧", name: "United Kingdom", code: "GBP" },
              { flag: "🇨🇦", name: "Canada", code: "CAD" },
              { flag: "🇩🇪", name: "Germany", code: "EUR" },
              { flag: "🇫🇷", name: "France", code: "EUR" },
              { flag: "🇳🇬", name: "Nigeria", code: "NGN" },
              { flag: "🇦🇺", name: "Australia", code: "AUD" },
              { flag: "🇨🇳", name: "China", code: "CNY" },
              { flag: "🇯🇵", name: "Japan", code: "JPY" },
              { flag: "🇸🇦", name: "Saudi Arabia", code: "SAR" },
              { flag: "🇿🇦", name: "South Africa", code: "ZAR" },
              { flag: "🇰🇪", name: "Kenya", code: "KES" },
            ].map((country, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-3xl mb-3">{country.flag}</div>
                <div className="font-bold text-gray-900">{country.name}</div>
                <div className="text-sm text-gray-600">{country.code}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemittanceDetails;