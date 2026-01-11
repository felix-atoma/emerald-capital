import React from 'react';
import { CheckCircle, Users, TrendingUp, LineChart, Target, Award, BookOpen, PieChart, Globe } from 'lucide-react';

const InvestmentWealthManagementDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Investment & Wealth Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build, grow, and protect your wealth with comprehensive investment solutions 
            and personalized wealth management strategies. Our expert advisors work with 
            you to create a diversified portfolio aligned with your financial goals and risk tolerance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Service Card */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <LineChart className="w-8 h-8 text-amber-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">WealthBuilder Program</h3>
                  <p className="text-amber-200">For Financial Growth</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-amber-200 mb-2">Investment Overview</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵10K Min.</div>
                    <div className="text-amber-200 text-sm">Starting Investment</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">8-15% p.a.</div>
                    <div className="text-amber-200 text-sm">Target Returns</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-amber-200 mb-2">Track Record</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">3,200+</div>
                    <div className="text-amber-200 text-sm">Clients Served</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-300">₵250M+</div>
                    <div className="text-amber-200 text-sm">Assets Managed</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Wealth Management Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Professional Management",
                    description: "Expert advisors managing your portfolio"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Diversified Portfolio",
                    description: "Spread risk across multiple asset classes"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Regular Reporting",
                    description: "Quarterly performance updates and reviews"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Tax Optimization",
                    description: "Strategies to maximize after-tax returns"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-amber-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Client Requirements</h3>
              <div className="space-y-4">
                {[
                  "Minimum investment of ₵10,000",
                  "Valid national ID card",
                  "Proof of income or wealth source",
                  "Bank account verification",
                  "Risk tolerance assessment",
                  "Investment objectives discussion",
                  "KYC (Know Your Customer) compliance",
                  "Agreement to investment terms"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Investment Types Section */}
          <div className="space-y-8">
            {/* Investment Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Investment Solutions</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "📈", title: "Stocks & Equities", desc: "Share ownership, growth" },
                  { icon: "💰", title: "Fixed Deposits", desc: "Guaranteed returns" },
                  { icon: "🏢", title: "Real Estate", desc: "Property investment" },
                  { icon: "💼", title: "Mutual Funds", desc: "Diversified portfolios" },
                  { icon: "🌍", title: "International", desc: "Global markets" },
                  { icon: "🔐", title: "Bonds", desc: "Government & corporate" },
                  { icon: "🎯", title: "Retirement Plans", desc: "Pension, provident funds" },
                  { icon: "💎", title: "Alternative Assets", desc: "Commodities, precious metals" },
                ].map((investment, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-amber-50 rounded-xl">
                    <div className="text-2xl mb-2">{investment.icon}</div>
                    <div className="font-bold text-gray-900">{investment.title}</div>
                    <div className="text-sm text-gray-600">{investment.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Builder */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Portfolio Builder</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Investment Amount (₵)</label>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    defaultValue="100000"
                    className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₵10K</span>
                    <span className="font-bold text-gray-900">₵100,000</span>
                    <span className="text-sm text-gray-600">₵500K</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Risk Profile</label>
                  <select className="w-full border-2 border-amber-200 rounded-xl px-4 py-3 outline-none">
                    <option>Conservative (Low Risk)</option>
                    <option>Moderate (Balanced)</option>
                    <option>Aggressive (High Growth)</option>
                    <option>Custom Portfolio</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-4 border border-amber-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Projected Annual Return</span>
                    <span className="font-bold text-gray-900">12% p.a.</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Estimated 5-Year Value</span>
                    <span className="font-bold text-amber-600">₵176,234</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-gray-600 font-semibold">Total Projected Gain</span>
                    <span className="font-bold text-xl text-orange-600">₵76,234</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Advisory Services Included</h3>
              <div className="space-y-3">
                {[
                  "Personalized investment strategy",
                  "Portfolio diversification planning",
                  "Regular performance monitoring",
                  "Quarterly portfolio reviews",
                  "Market insights and updates",
                  "Tax planning and optimization",
                  "Retirement and estate planning",
                  "24/7 online portfolio access"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-12 shadow-xl border border-amber-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Wealth Building Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Kofi Adjei",
                profile: "Medical Professional",
                investment: "₵150,000",
                before: "Savings in regular account, 2% interest",
                after: "Diversified portfolio, 13% avg. returns, ₵50K gain"
              },
              {
                name: "Abena Osei",
                profile: "Business Owner",
                investment: "₵250,000",
                before: "Cash holdings, no growth strategy",
                after: "Multi-asset portfolio, ₵320K current value"
              },
              {
                name: "Kwame Mensah",
                profile: "Corporate Executive",
                investment: "₵500,000",
                before: "Single asset class, high risk",
                after: "Balanced portfolio, stable 11% returns, retirement plan"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-amber-600 font-medium">{story.profile}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-orange-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Initial Investment:</span>
                    <span className="font-bold text-amber-700">{story.investment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-amber-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            WealthBuilder Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Portfolio Management",
                icon: "📊",
                description: "Professional investment oversight"
              },
              {
                component: "Financial Planning",
                icon: "🎯",
                description: "Long-term wealth strategies"
              },
              {
                component: "Risk Management",
                icon: "🛡️",
                description: "Diversification and protection"
              },
              {
                component: "Expert Advisory",
                icon: "👔",
                description: "Dedicated wealth advisors"
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

        {/* Investment Goals */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Financial Goals We Support
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Wealth Growth", 
                impact: "Build long-term financial security",
                icon: "📈" 
              },
              { 
                area: "Retirement Planning", 
                impact: "Secure comfortable retirement",
                icon: "🏖️" 
              },
              { 
                area: "Education Fund", 
                impact: "Save for children's future",
                icon: "🎓" 
              },
              { 
                area: "Property Purchase", 
                impact: "Save for real estate investment",
                icon: "🏠" 
              },
              { 
                area: "Estate Planning", 
                impact: "Legacy and inheritance strategy",
                icon: "👨‍👩‍👧‍👦" 
              },
              { 
                area: "Passive Income", 
                impact: "Generate regular dividends",
                icon: "💵" 
              },
              { 
                area: "Capital Preservation", 
                impact: "Protect existing wealth",
                icon: "🔐" 
              },
              { 
                area: "Business Funding", 
                impact: "Grow investment for ventures",
                icon: "💼" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Professional Management</h4>
            <p className="text-amber-200">
              Expert advisors with proven track records managing your investments for optimal growth.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <PieChart className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Diversified Portfolio</h4>
            <p className="text-orange-200">
              Spread risk across multiple asset classes for balanced growth and capital protection.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Transparent Reporting</h4>
            <p className="text-amber-200">
              Regular performance updates, quarterly reviews, and 24/7 online portfolio access.
            </p>
          </div>
        </div>

        {/* Investment Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Build Your Wealth?</p>
              </div>
              <p className="text-amber-100">Schedule a consultation with our wealth advisors</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-amber-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Wealth Desk
              </a>
              <a 
                href="mailto:wealth@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentWealthManagementDetails;