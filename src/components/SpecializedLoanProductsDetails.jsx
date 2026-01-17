import React from 'react';
import { CheckCircle, Users, TrendingUp, Sparkles, Target, Award, BookOpen, Briefcase, Globe } from 'lucide-react';

const SpecializedLoanProductsDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-rose-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Specialized Loan Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-specific financing solutions with deep expertise in unique business 
            requirements. Our specialized loan products are designed with industry insights, 
            tailored terms, and expert support for niche markets and professional services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-rose-600 to-pink-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-rose-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">IndustryPro Program</h3>
                  <p className="text-rose-200">For Specialized Industries</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-rose-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵2K - ₵50K</div>
                    <div className="text-rose-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">12-60</div>
                    <div className="text-rose-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-rose-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">1,800+</div>
                    <div className="text-rose-200 text-sm">Specialized Businesses</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-pink-300">20+</div>
                    <div className="text-rose-200 text-sm">Industries</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Specialized Financing Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Industry Expertise",
                    description: "Loan officers with deep sector knowledge"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Custom Terms",
                    description: "Repayment aligned with industry cash flows"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Sector Networks",
                    description: "Access to industry associations and partners"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Higher Limits",
                    description: "Larger amounts for specialized needs"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-pink-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-pink-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-rose-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-rose-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Licensed/registered in specialized field",
                  "Professional certifications (where required)",
                  "Industry-specific business plan",
                  "2+ years in specialized sector",
                  "Valid business registration",
                  "Proof of specialized expertise",
                  "Industry references or portfolio",
                  "Professional indemnity insurance (some sectors)"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-rose-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Industry Types Section */}
          <div className="space-y-8">
            {/* Industry Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-rose-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Specialized Industries</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🏥", title: "Healthcare", desc: "Medical, dental, clinics" },
                  { icon: "💻", title: "Technology", desc: "Software, IT services" },
                  { icon: "🏨", title: "Hospitality", desc: "Hotels, restaurants" },
                  { icon: "🎓", title: "Education", desc: "Schools, training centers" },
                  { icon: "⚖️", title: "Legal Services", desc: "Law firms, practices" },
                  { icon: "🏗️", title: "Engineering", desc: "Construction, design" },
                  { icon: "📺", title: "Media & Creative", desc: "Production, studios" },
                  { icon: "🏦", title: "Professional Services", desc: "Consulting, advisory" },
                ].map((industry, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-rose-50 rounded-xl">
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <div className="font-bold text-gray-900">{industry.title}</div>
                    <div className="text-sm text-gray-600">{industry.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          
            {/* Support Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Industry-Specific Support</h3>
              <div className="space-y-3">
                {[
                  "Sector-expert loan officers and advisors",
                  "Industry association partnerships",
                  "Specialized equipment financing guidance",
                  "Professional certification support",
                  "Regulatory compliance assistance",
                  "Industry networking events access",
                  "Sector-specific business mentorship",
                  "Technology and innovation funding"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
           
          </div>
        </div>

        {/* Success Stories */}
       

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-rose-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            IndustryPro Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Expert Advisory",
                icon: "🎯",
                description: "Industry-specialized loan officers"
              },
              {
                component: "Custom Structuring",
                icon: "⚙️",
                description: "Terms tailored to sector needs"
              },
              {
                component: "Sector Networks",
                icon: "🤝",
                description: "Industry connections and partnerships"
              },
              {
                component: "Higher Limits",
                icon: "💰",
                description: "Premium amounts for professionals"
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

        {/* Specialized Use Cases */}
       

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Industry Expertise</h4>
            <p className="text-rose-200">
              Work with loan officers who understand your industry's unique challenges and opportunities.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Custom Terms</h4>
            <p className="text-pink-200">
              Repayment schedules and loan structures designed around your sector's cash flow patterns.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-rose-600 to-red-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Professional Network</h4>
            <p className="text-rose-200">
              Access to industry associations, partners, and professional development opportunities.
            </p>
          </div>
        </div>

        {/* Industry Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Need Industry-Specific Financing?</p>
              </div>
              <p className="text-rose-100">Connect with our specialized loan experts</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-rose-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Specialist Desk
              </a>
              <a 
                href="mailto:specialized@emeraldcapitalgh.com" 
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

export default SpecializedLoanProductsDetails;