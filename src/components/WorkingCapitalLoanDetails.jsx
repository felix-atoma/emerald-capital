import React from 'react';
import { CheckCircle, RefreshCw, TrendingUp, BarChart, Shield, DollarSign, Package, Users, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Added Link import

const WorkingCapitalLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Working Capital Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maintain smooth business operations with flexible financing for inventory, 
            payroll, and day-to-day expenses. Keep your business thriving with accessible 
            working capital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Operational Funding</h3>
                  <p className="text-blue-200">For Daily Business Needs</p>
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
                    <div className="text-3xl font-bold mb-1">6-18</div>
                    <div className="text-blue-200 text-sm">Month Term</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Business Advantages</h4>
                {[
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Quick Access",
                    description: "Funds disbursed within 72 hours"
                  },
                  {
                    icon: <Package className="w-5 h-5" />,
                    title: "Inventory Support",
                    description: "Stock up for peak seasons"
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Payroll Coverage",
                    description: "Ensure timely staff payments"
                  },
                  {
                    icon: <DollarSign className="w-5 h-5" />,
                    title: "Flexible Repayment",
                    description: "Monthly installments based on cash flow"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Business Eligibility</h3>
              <div className="space-y-4">
                {[
                  "Business operating for 6+ months",
                  "Minimum monthly revenue of ₵5,000",
                  "Registered business entity",
                  "Valid business registration",
                  "Business bank account",
                  "Clean credit history",
                  "Tax clearance certificate",
                  "Business premises (physical/virtual)"
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

          {/* Right - Features Section */}
          <div className="space-y-8">
            {/* Use Cases */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Common Uses</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "📦", title: "Inventory", desc: "Stock purchases" },
                  { icon: "💰", title: "Payroll", desc: "Staff salaries" },
                  { icon: "🏭", title: "Operations", desc: "Daily expenses" },
                  { icon: "🚚", title: "Logistics", desc: "Shipping & delivery" },
                  { icon: "📈", title: "Marketing", desc: "Campaigns & ads" },
                  { icon: "🔧", title: "Maintenance", desc: "Equipment repair" },
                  { icon: "⚡", title: "Utilities", desc: "Electricity, internet" },
                  { icon: "📋", title: "Licenses", desc: "Permits & renewals" },
                ].map((use, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl mb-2">{use.icon}</div>
                    <div className="font-bold text-gray-900">{use.title}</div>
                    <div className="text-sm text-gray-600">{use.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h3>
              <div className="space-y-3">
                {[
                  "Completed business loan application",
                  "Business registration certificate",
                  "6 months bank statements",
                  "Tax clearance certificate",
                  "Business plan (updated)",
                  "Financial projections",
                  "Owner's national ID",
                  "Proof of business address"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/applyforloanpage"> {/* ✅ Fixed with Link component */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Apply for Working Capital
              </button>
            </Link>
          </div>
        </div>

        {/* Business Types */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ideal For These Businesses
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                type: "Retail Stores", 
                needs: "Inventory restocking, seasonal demands",
                example: "Supermarkets, boutiques" 
              },
              { 
                type: "Service Providers", 
                needs: "Equipment, supplies, payroll",
                example: "Consultancies, cleaning services" 
              },
              { 
                type: "Manufacturers", 
                needs: "Raw materials, production costs",
                example: "Small factories, workshops" 
              },
              { 
                type: "Wholesalers", 
                needs: "Bulk purchases, logistics",
                example: "Distributors, suppliers" 
              },
              { 
                type: "Restaurants", 
                needs: "Food supplies, staff wages",
                example: "Cafes, eateries, catering" 
              },
              { 
                type: "Tech Companies", 
                needs: "Software, subscriptions, salaries",
                example: "Startups, IT firms" 
              },
              { 
                type: "Construction", 
                needs: "Materials, subcontractors",
                example: "Contractors, builders" 
              },
              { 
                type: "Transport", 
                needs: "Fuel, maintenance, licenses",
                example: "Logistics, delivery services" 
              },
            ].map((business, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                <div className="font-bold text-gray-900 mb-2">{business.type}</div>
                <div className="text-sm text-gray-600 mb-3">{business.example}</div>
                <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded-lg">
                  <span className="font-semibold">Needs:</span> {business.needs}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 shadow-xl border border-blue-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                business: "Kofi's Supermarket",
                loan: "₵8,000",
                use: "Inventory for holiday season",
                result: "Revenue increased by 120% during peak season"
              },
              {
                business: "Ama's Restaurant Chain",
                loan: "₵15,000",
                use: "Staff salaries and supplies",
                result: "Maintained operations during slow months, saved 5 jobs"
              },
              {
                business: "Tech Solutions Ltd",
                loan: "₵10,000",
                use: "Software subscriptions and salaries",
                result: "Landed 3 major contracts worth ₵50,000"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.business}</h4>
                    <div className="text-blue-600 font-bold">{story.loan} Loan</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600">Used For:</div>
                    <div className="font-medium">{story.use}</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Result:</div>
                    <div className="font-bold text-green-600">{story.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Fast Processing</h4>
            <p className="text-blue-200">
              Get approved within 72 hours with our streamlined application process.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Flexible Terms</h4>
            <p className="text-blue-200">
              Choose repayment terms that match your business cash flow cycle.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">No Early Penalty</h4>
            <p className="text-blue-200">
              Pay off your loan early without any prepayment penalties or fees.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <p className="text-lg font-bold mb-2">Need help calculating your working capital needs?</p>
              <p className="text-blue-100">Our business finance experts are here to help</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Business Finance Desk
              </a>
              <a 
                href="mailto:workingcapital@emeraldcapitalgh.com" 
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

export default WorkingCapitalLoanDetails;