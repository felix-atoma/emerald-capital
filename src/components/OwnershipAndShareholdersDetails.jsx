// src/components/OwnershipAndShareholdersDetails.jsx
import React from 'react';
import { CheckCircle, Users, TrendingUp, PieChart, Award, DollarSign, Target, Building, Shield, BarChart, FileText, Eye, Globe, ArrowUpRight } from 'lucide-react';

const OwnershipAndShareholdersDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ownership & Shareholder Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ultimate owners of Emerald Capital, providing strategic capital, 
            approving major decisions, and safeguarding long-term value creation 
            through disciplined governance and strategic oversight.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Ownership Role Section */}
          <div className="space-y-8">
            {/* Ownership Role Card */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-indigo-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Strategic Ownership Role</h3>
                  <p className="text-indigo-200">Driving Long-term Enterprise Value</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-indigo-200 mb-2">Ownership Impact</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">18.5%</div>
                    <div className="text-indigo-200 text-sm">Return on Equity</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">15%</div>
                    <div className="text-indigo-200 text-sm">Dividend Yield</div>
                  </div>
                </div>
              </div>

              {/* Core Ownership Role */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-indigo-200 mb-2">Primary Ownership Functions</div>
                <div className="space-y-4">
                  {[
                    "Provide strategic capital for growth initiatives",
                    "Approve major corporate decisions and allocations",
                    "Safeguard long-term enterprise value",
                    "Ensure alignment between ownership objectives and strategy",
                    "Approve corporate purpose and vision",
                    "Monitor financial performance and returns"
                  ].map((role, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center">
                        <Target className="w-3 h-3 text-yellow-300" />
                      </div>
                      <span className="text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shareholder Structure */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Shareholder Structure</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      type: "Strategic Investors",
                      holding: "45%",
                      focus: "Long-term growth"
                    },
                    {
                      type: "Institutional",
                      holding: "35%",
                      focus: "Stable returns"
                    },
                    {
                      type: "Founder Group",
                      holding: "12%",
                      focus: "Strategic direction"
                    },
                    {
                      type: "Employee Trust",
                      holding: "8%",
                      focus: "Alignment"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-bold">{item.type}</div>
                          <div className="text-indigo-200 text-xs">{item.focus}</div>
                        </div>
                        <div className="text-yellow-300 font-bold text-lg">{item.holding}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ownership Benefits */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Shareholder Value Proposition</h3>
              <div className="space-y-4">
                {[
                  "Access to professionally managed financial services portfolio",
                  "Participation in high-growth Ghanaian financial sector",
                  "Regular dividend income with growth potential",
                  "Transparent reporting and communication",
                  "Strong governance and risk management",
                  "Alignment with sustainable development goals",
                  "Long-term capital appreciation opportunities",
                  "Strategic influence through governance participation"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Responsibilities & KPIs Section */}
          <div className="space-y-8">
            {/* Key Responsibilities Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Shareholder Responsibilities</h3>
              <div className="space-y-6">
                {[
                  {
                    responsibility: "Strategic Direction Approval",
                    description: "Approve corporate purpose, vision, and major strategic initiatives",
                    details: [
                      "Annual strategic plan review",
                      "Major market entry decisions",
                      "Significant capital allocations"
                    ]
                  },
                  {
                    responsibility: "Governance Oversight",
                    description: "Appoint and oversee Board of Directors and executive leadership",
                    details: [
                      "Director appointment/removal",
                      "Executive compensation approval",
                      "Succession planning oversight"
                    ]
                  },
                  {
                    responsibility: "Financial Stewardship",
                    description: "Approve audited financial statements and capital management",
                    details: [
                      "Annual financial statement approval",
                      "Dividend policy decisions",
                      "Capital raising approval"
                    ]
                  },
                  {
                    responsibility: "Value Protection",
                    description: "Safeguard long-term enterprise value and ownership interests",
                    details: [
                      "Major asset transactions",
                      "Merger & acquisition decisions",
                      "Risk management oversight"
                    ]
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                    <div className="mb-4">
                      <h4 className="font-bold text-lg text-indigo-900 mb-1">{item.responsibility}</h4>
                      <p className="text-sm text-indigo-700">{item.description}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-indigo-800">Includes:</div>
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Performance Indicators */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Performance Indicators</h3>
              <div className="space-y-6">
                {[
                  {
                    kpi: "Return on Equity (ROE)",
                    target: "18-22%",
                    description: "Measure of profitability relative to shareholder equity",
                    trend: "↗️"
                  },
                  {
                    kpi: "Dividend Yield",
                    target: "12-15%",
                    description: "Annual dividend income as percentage of share price",
                    trend: "📈"
                  },
                  {
                    kpi: "Capital Appreciation",
                    target: "15%+ CAGR",
                    description: "Long-term growth in share value",
                    trend: "🚀"
                  },
                  {
                    kpi: "Enterprise Value Growth",
                    target: "20%+ Annual",
                    description: "Total company value including debt and equity",
                    trend: "💹"
                  }
                ].map((kpi, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-indigo-200">
                      <div className="text-2xl">{kpi.trend}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{kpi.kpi}</h4>
                          <p className="text-gray-600 text-sm mb-2">{kpi.description}</p>
                        </div>
                        <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-bold">
                          {kpi.target}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication & Engagement */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Shareholder Communication</h3>
              <p className="text-gray-700 mb-4">
                We maintain transparent and regular communication with our shareholders 
                through multiple channels to ensure alignment and engagement.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  "Annual General Meetings",
                  "Quarterly financial reports",
                  "Investor presentations",
                  "Regular dividend updates",
                  "Strategic update briefings",
                  "Governance reports",
                  "Market performance reviews",
                  "Direct engagement sessions"
                ].map((channel, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span>{channel}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Access Shareholder Portal
            </button>
          </div>
        </div>

        {/* Performance Dashboard */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-indigo-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Shareholder Value Creation Dashboard
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                metric: "Return on Equity",
                value: "18.5%",
                change: "+2.1%",
                description: "Above industry average",
                icon: "📊"
              },
              {
                metric: "Dividend Yield",
                value: "15.2%",
                change: "+1.8%",
                description: "Consistent growth",
                icon: "💰"
              },
              {
                metric: "Enterprise Value",
                value: "$520M",
                change: "+24%",
                description: "Year-on-year growth",
                icon: "🏢"
              },
              {
                metric: "Total Return",
                value: "186%",
                change: "+32%",
                description: "5-year cumulative",
                icon: "📈"
              }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl font-bold text-indigo-600 mb-1">{metric.value}</div>
                <div className={`text-sm font-bold ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} mb-2`}>
                  {metric.change} vs LY
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{metric.metric}</h4>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ownership Strategy */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ownership Strategy & Alignment
          </h3>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  pillar: "Capital Allocation",
                  focus: "Strategic investment in high-return opportunities",
                  icon: "🎯"
                },
                {
                  pillar: "Governance Excellence",
                  focus: "Strong oversight and decision-making frameworks",
                  icon: "👑"
                },
                {
                  pillar: "Value Creation",
                  focus: "Sustainable growth and profitability",
                  icon: "💎"
                },
                {
                  pillar: "Risk Management",
                  focus: "Protection of shareholder capital",
                  icon: "🛡️"
                },
                {
                  pillar: "Transparency",
                  focus: "Open communication and reporting",
                  icon: "🔍"
                },
                {
                  pillar: "Long-term Focus",
                  focus: "Multi-year strategic horizon",
                  icon: "⏳"
                },
                {
                  pillar: "Stakeholder Alignment",
                  focus: "Balancing all stakeholder interests",
                  icon: "🤝"
                },
                {
                  pillar: "Innovation",
                  focus: "Adoption of emerging opportunities",
                  icon: "🚀"
                }
              ].map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className={`${index % 2 === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-purple-500 to-indigo-500'} rounded-xl p-6 mb-3 text-white shadow-lg`}>
                    <div className="text-2xl mb-2">{pillar.icon}</div>
                    <div className="font-bold text-lg">{pillar.pillar}</div>
                  </div>
                  <div className="font-medium text-gray-700 text-sm">{pillar.focus}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                Our ownership strategy is built on disciplined capital allocation, 
                strong governance, and a relentless focus on creating sustainable 
                long-term value for all shareholders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors">
                  <FileText className="w-5 h-5" />
                  Download Shareholder Report
                </button>
                <button className="inline-flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                  <Eye className="w-5 h-5" />
                  View Investor Presentations
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Value Creation Timeline */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Capital Growth</h4>
            <p className="text-indigo-200">
              Consistent year-on-year growth in enterprise value and shareholder equity, 
              outperforming industry benchmarks and creating lasting wealth.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Income Generation</h4>
            <p className="text-purple-200">
              Reliable and growing dividend income with attractive yields, 
              providing shareholders with consistent returns on their investment.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Capital Protection</h4>
            <p className="text-indigo-200">
              Robust risk management and governance frameworks that protect 
              shareholder capital while pursuing growth opportunities.
            </p>
          </div>
        </div>

        {/* Shareholder Services */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Shareholder Services</p>
              </div>
              <p className="text-indigo-100">
                Access dedicated support for shareholder inquiries, dividend information, 
                and investment updates through our shareholder relations team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="mailto:shareholders@emeraldcapitalgh.com" 
                className="bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Contact Shareholder Relations
              </a>
              <a 
                href="tel:+233208070004" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Call Investor Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnershipAndShareholdersDetails;