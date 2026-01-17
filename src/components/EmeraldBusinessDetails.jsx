import React from 'react';
import { CheckCircle, Users, TrendingUp, Gem, Target, Award, BookOpen, Lightbulb, Globe, Building2, Zap, LineChart, HandshakeIcon } from 'lucide-react';

const EmeraldBusinessDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Emerald Business Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic capital and expertise to fuel your business growth. We provide 
            additional investment capital and professional guidance to support your regional 
            expansion, strategic planning, and long-term business objectives.
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
                  <h3 className="text-2xl font-bold">Investment Partnership</h3>
                  <p className="text-emerald-200">Capital & Strategic Expertise</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-emerald-200 mb-2">Partnership Focus</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">Growth</div>
                    <div className="text-emerald-200 text-sm">Capital Injection</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">Expert</div>
                    <div className="text-emerald-200 text-sm">Strategic Guidance</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-emerald-200 mb-2">Active Portfolio</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-emerald-200 text-sm">Partner Businesses</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-300">₵2.5B+</div>
                    <div className="text-emerald-200 text-sm">Capital Deployed</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">What We Provide</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Growth Capital",
                    description: "Strategic investment to fuel expansion"
                  },
                  {
                    icon: <Lightbulb className="w-5 h-5" />,
                    title: "Expert Advisory",
                    description: "Business strategy and operational guidance"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Regional Expansion Support",
                    description: "Market entry and growth strategies"
                  },
                  {
                    icon: <LineChart className="w-5 h-5" />,
                    title: "Investment Strategy",
                    description: "Long-term financial planning and goals"
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Partnership Criteria</h3>
              <div className="space-y-4">
                {[
                  "Registered business operating in Ghana",
                  "Proven business model with growth potential",
                  "Minimum 2 years of operational history",
                  "Annual revenue of ₵5M or higher",
                  "Clear expansion or growth plan",
                  "Strong management team",
                  "Valid business registration documents",
                  "Audited or certified financial statements"
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
            {/* Investment Benefits */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Investment Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "💰", title: "Capital Access", desc: "Growth funding" },
                  { icon: "🎯", title: "Strategic Planning", desc: "Expert guidance" },
                  { icon: "🌍", title: "Market Expansion", desc: "Regional growth" },
                  { icon: "📊", title: "Financial Advisory", desc: "Investment strategy" },
                  { icon: "🤝", title: "Partnership Network", desc: "Business connections" },
                  { icon: "📈", title: "Performance Support", desc: "Operational efficiency" },
                  { icon: "💡", title: "Innovation Resources", desc: "Technology access" },
                  { icon: "🏆", title: "Competitive Edge", desc: "Market positioning" },
                ].map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-xl">
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <div className="font-bold text-gray-900">{benefit.title}</div>
                    <div className="text-sm text-gray-600">{benefit.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Comparison */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">With vs Without Partnership</h3>
              <div className="space-y-4">
                {[
                  { feature: "Growth Capital", without: "Limited", with: "Available" },
                  { feature: "Strategic Guidance", without: "Self-managed", with: "Expert Support" },
                  { feature: "Market Expansion", without: "Challenging", with: "Facilitated" },
                  { feature: "Business Network", without: "Basic", with: "Extensive" },
                  { feature: "Financial Planning", without: "Internal only", with: "Professional" },
                  { feature: "Operational Support", without: "Minimal", with: "Comprehensive" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700 font-medium">{item.feature}</span>
                    <div className="flex gap-4">
                      <span className="text-gray-500 text-sm w-24 text-center">{item.without}</span>
                      <span className="text-emerald-600 font-bold text-sm w-24 text-center">{item.with}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Value-Added Services</h3>
              <div className="space-y-3">
                {[
                  "Quarterly business strategy sessions",
                  "Access to industry experts and consultants",
                  "Market research and analysis support",
                  "Technology and digital transformation guidance",
                  "Networking events with fellow entrepreneurs",
                  "Financial modeling and forecasting assistance",
                  "Introduction to potential partners and clients",
                  "Board advisory and governance support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Investment Focus Areas */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Investment Focus
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "SME Growth",
                icon: "🏢",
                description: "Supporting small and medium enterprises"
              },
              {
                component: "Regional Expansion",
                icon: "🌍",
                description: "Facilitating market penetration and growth"
              },
              {
                component: "Strategic Planning",
                icon: "📋",
                description: "Long-term business development"
              },
              {
                component: "Operational Excellence",
                icon: "⚡",
                description: "Efficiency and performance improvement"
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

        {/* Partnership Services */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Capital Investment", 
                impact: "Funding for growth initiatives",
                icon: "💰" 
              },
              { 
                area: "Strategic Advisory", 
                impact: "Expert business guidance",
                icon: "🎯" 
              },
              { 
                area: "Market Access", 
                impact: "Regional expansion support",
                icon: "🌍" 
              },
              { 
                area: "Network Building", 
                impact: "Industry connections",
                icon: "🤝" 
              },
              { 
                area: "Financial Planning", 
                impact: "Investment strategy development",
                icon: "📊" 
              },
              { 
                area: "Operational Support", 
                impact: "Process optimization",
                icon: "⚙️" 
              },
              { 
                area: "Technology Access", 
                impact: "Digital transformation",
                icon: "💻" 
              },
              { 
                area: "Performance Monitoring", 
                impact: "Regular business reviews",
                icon: "📈" 
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

        {/* Value Propositions */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Growth Capital</h4>
            <p className="text-emerald-200">
              Access the funding you need to scale your business, enter new markets, and achieve your expansion goals.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Expert Guidance</h4>
            <p className="text-green-200">
              Benefit from our deep industry expertise and strategic insights to make informed business decisions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Regional Expansion</h4>
            <p className="text-emerald-200">
              Leverage our network and market knowledge to successfully expand into new regions and territories.
            </p>
          </div>
        </div>

        {/* Investment Process */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-12 shadow-xl border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Partnership Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description: "Reach out to discuss your business and growth plans"
              },
              {
                step: "2",
                title: "Due Diligence",
                description: "We review your business model and financials"
              },
              {
                step: "3",
                title: "Partnership Agreement",
                description: "Define terms, capital, and support structure"
              },
              {
                step: "4",
                title: "Growth Execution",
                description: "Deploy capital and begin strategic collaboration"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <HandshakeIcon className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Partner for Growth?</p>
              </div>
              <p className="text-emerald-100">Let's discuss how we can support your business objectives</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Investment Team
              </a>
              <a 
                href="mailto:invest@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Submit Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmeraldBusinessDetails;