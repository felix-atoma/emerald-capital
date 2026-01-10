import React from 'react';
import { CheckCircle, Rocket, Target, Zap, Shield, Briefcase, Users, DollarSign, FileText, Calendar } from 'lucide-react';

const BusinessStarterLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Business Starter Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kickstart your entrepreneurial journey with flexible financing designed specifically 
            for new business ventures. Get the capital you need to launch successfully.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-green-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Launch Package</h3>
                  <p className="text-emerald-200">For New Entrepreneurs</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-emerald-200 mb-2">Loan Details</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵200 - ₵5K</div>
                    <div className="text-emerald-200 text-sm">Loan Amount</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6-24</div>
                    <div className="text-emerald-200 text-sm">Months Term</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Why Choose This Loan?</h4>
                {[
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Quick Approval",
                    description: "Fast processing within 48 hours"
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "No Collateral",
                    description: "Unsecured loan for startups"
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Business Training",
                    description: "Free entrepreneurship workshops"
                  },
                  {
                    icon: <DollarSign className="w-5 h-5" />,
                    title: "Flexible Repayment",
                    description: "Monthly installments tailored to cash flow"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-emerald-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen aged 18+",
                  "Valid business idea or plan",
                  "No existing business loans",
                  "Valid national ID card",
                  "Proof of residence",
                  "Business bank account",
                  "Clean credit history",
                  "Minimum 6 months residency"
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

          {/* Right - Products Section */}
          <div className="space-y-8">
            {/* How It Works */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Submit Application",
                    description: "Complete the online form with your business details",
                    icon: <FileText className="w-6 h-6" />
                  },
                  {
                    step: "02",
                    title: "Business Plan Review",
                    description: "Our experts evaluate your business proposal",
                    icon: <Briefcase className="w-6 h-6" />
                  },
                  {
                    step: "03",
                    title: "Approval & Disbursement",
                    description: "Get approved and receive funds within 48 hours",
                    icon: <DollarSign className="w-6 h-6" />
                  },
                  {
                    step: "04",
                    title: "Start & Grow",
                    description: "Launch your business with ongoing support",
                    icon: <Rocket className="w-6 h-6" />
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Loan Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₵)</label>
                  <input
                    type="range"
                    min="200"
                    max="5000"
                    step="100"
                    defaultValue="2500"
                    className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₵200</span>
                    <span className="font-bold text-gray-900">₵2,500</span>
                    <span className="text-sm text-gray-600">₵5,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Repayment Period</label>
                  <select className="w-full border-2 border-emerald-200 rounded-xl px-4 py-3 outline-none">
                    <option>6 Months</option>
                    <option>12 Months</option>
                    <option>18 Months</option>
                    <option>24 Months</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-emerald-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Monthly Payment</span>
                    <span className="font-bold text-gray-900">₵225/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Interest</span>
                    <span className="font-bold text-emerald-600">₵200</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Total Repayment</span>
                    <span className="font-bold text-xl text-green-600">₵2,700</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h3>
              <div className="space-y-3">
                {[
                  "Completed application form",
                  "National ID card (copy)",
                  "Proof of residence",
                  "Business plan/proposal",
                  "Passport-sized photographs (2)",
                  "Bank statements (if available)",
                  "Business registration documents",
                  "Tax identification number"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply Now for Business Starter Loan
            </button>
          </div>
        </div>

        {/* Business Types Supported */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Businesses We Support
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🛍️", name: "Retail Shops", examples: "Clothing, electronics, groceries" },
              { icon: "🍽️", name: "Food Services", examples: "Restaurants, catering, food trucks" },
              { icon: "💇", name: "Beauty & Salon", examples: "Hair salons, barbershops, spas" },
              { icon: "🛠️", name: "Repair Services", examples: "Phone repair, electronics, appliances" },
              { icon: "🏪", name: "Small Retail", examples: "Convenience stores, boutiques" },
              { icon: "📱", name: "Tech Startups", examples: "Mobile apps, IT services" },
              { icon: "👕", name: "Fashion", examples: "Tailoring, fashion design" },
              { icon: "🎨", name: "Creative Arts", examples: "Graphic design, crafts, arts" },
            ].map((business, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
                <div className="text-3xl mb-3">{business.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{business.name}</div>
                <div className="text-sm text-gray-600">{business.examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 shadow-xl border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kwame's Fashion Boutique",
                amount: "₵3,000",
                result: "Now employs 4 staff, 200% revenue growth",
                quote: "This loan helped me turn my passion into a profitable business."
              },
              {
                name: "Ama's Catering Service",
                amount: "₵1,500",
                result: "Serves 50+ events monthly, expanded kitchen",
                quote: "The business training was as valuable as the funding itself."
              },
              {
                name: "Kofi's Phone Repair",
                amount: "₵2,000",
                result: "Opened second location, 150% customer increase",
                quote: "Flexible repayment made all the difference in the early months."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-sm text-emerald-600 font-bold mb-2">LOAN: {story.amount}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{story.name}</h4>
                <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                <div className="text-sm text-gray-600 bg-emerald-50 p-3 rounded-lg">
                  <span className="font-bold">Result:</span> {story.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <p className="text-lg font-bold mb-2">Need help with your business plan?</p>
              <p className="text-emerald-100">Our business advisors are ready to assist you</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Business Desk
              </a>
              <a 
                href="mailto:businessloans@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStarterLoanDetails;