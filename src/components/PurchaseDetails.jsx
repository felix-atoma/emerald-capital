import React, { useState } from 'react';
import {
  Check, Award, Users, Target, Shield, ChevronDown, ChevronUp,
  TrendingUp, Building2, Leaf, GraduationCap, Briefcase,
  Zap, CheckCircle, Globe, Clock, Banknote, Percent, ShieldCheck,
  BarChart, Headphones, Building, MapPin, Phone, Mail, Calendar, Key,
  Lightbulb, Handshake
} from 'lucide-react';

// Create a simple Plant icon component since it's not available in lucide-react
const Plant = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 15h10M7 19h10M12 3a6 6 0 0 1 6 6c0 2.5-2 5-6 7-4-2-6-4.5-6-7a6 6 0 0 1 6-6z" />
    <path d="M12 3v18" />
  </svg>
);

export default function PurchasePageDetails() {
  const [activeTab, setActiveTab] = useState('microfinance');
  const [openFaq, setOpenFaq] = useState(null);

  const premiumFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Licensed & Regulated',
      description: 'Fully licensed by Bank of Ghana with 14+ years of excellence'
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: 'Lowest Rates in Ghana',
      description: 'Starting from 6.5% APR - Best rates for established businesses'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24-Hour Executive Approval',
      description: 'Direct access to our executive team for premium clients'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Portfolio Management',
      description: '₵500M+ successfully managed with zero defaults since 2010'
    }
  ];

  const corePillars = [
    {
      icon: <Key className="w-10 h-10" />,
      title: 'Empowerment Through Access',
      description: 'Unlocking potential with financial opportunities for all',
      stat: '50,000+ Businesses Empowered',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Integrity & Accountability',
      description: 'Building trust through honesty, transparency, and responsible practices',
      stat: 'Zero Defaults Since 2010',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Plant className="w-10 h-10" />,
      title: 'Inclusive & Sustainable Growth',
      description: 'Creating lasting impact by championing equitable access and community progress',
      stat: '300% Average Client Growth',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Innovation for Real Needs',
      description: 'First in Ghana to offer fully digital loan processing',
      stat: 'Digital-First Excellence',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: 'Partnership & Respect',
      description: 'Fostering collaborative relationships that value dignity and fairness',
      stat: '95% Client Satisfaction',
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Award-Winning Service',
      description: '2024 Ghana Banking Awards - Best Microfinance Institution',
      stat: 'Industry Recognition',
      color: 'from-amber-600 to-yellow-600'
    }
  ];

  const executiveLeadership = [
    {
      name: 'Dr. Asamoah Koranteng Evans',
      role: 'Founder & Lead Investor',
      experience: '25+ years in banking, investment, and corporate governance',
      education: 'Chairperson of the Board',
      quote: 'We build legacies through strategic financial empowerment.'
    },
    {
      name: 'Mrs. Gertrude Asamoah',
      role: 'Chief Executive Officer',
      experience: '20+ years in banking, fintech, and investment leadership',
      education: 'Executive Director',
      quote: 'Inclusive growth through innovative financial solutions.'
    },
    {
      name: 'Mr. Emmanuel Osei Mensah',
      role: 'Chief Financial Officer',
      experience: 'Chartered Accountant leading financial strategy',
      education: 'CA, Financial Planning Expert',
      quote: 'Sustainable growth through disciplined financial stewardship.'
    },
    {
      name: 'Mr. Albert Kwame Achiifu',
      role: 'Chief Risk Officer',
      experience: 'CFA with expertise in enterprise risk frameworks',
      education: 'CFA, Risk Management Specialist',
      quote: 'Strategic risk management ensures long-term client success.'
    }
  ];

  const microfinanceLoans = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: 'Premium Business Expansion',
      purpose: 'Scale operations with strategic capital injection',
      amount: '₵500,000 – ₵5,000,000',
      term: '24–60 months',
      rate: 'From 8.5% APR',
      features: ['Executive approval', 'Revenue-based terms', 'Quarterly strategy reviews'],
      gradient: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      highlight: true
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      name: 'Commercial Real Estate',
      purpose: 'Acquisition and development of income properties',
      amount: '₵1,000,000 – ₵20,000,000',
      term: '36–120 months',
      rate: 'From 9.5% APR',
      features: ['90% LTV financing', 'Construction draws', 'Portfolio optimization'],
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: 'International Trade Finance',
      purpose: 'Export-import operations across Africa and global markets',
      amount: '₵500,000 – ₵10,000,000',
      term: '6–36 months',
      rate: 'From 7.8% APR',
      features: ['LC financing', 'Currency hedging', 'Global network access'],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      name: 'Asset Acquisition',
      purpose: 'Heavy equipment and commercial vehicle fleet',
      amount: '₵250,000 – ₵15,000,000',
      term: '12–84 months',
      rate: 'From 10.5% APR',
      features: ['New & used equipment', 'Fleet management', 'Maintenance packages'],
      gradient: 'bg-gradient-to-r from-orange-500 to-amber-500'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      name: 'Sustainable Energy Projects',
      purpose: 'Solar, wind, and green infrastructure development',
      amount: '₵200,000 – ₵8,000,000',
      term: '12–60 months',
      rate: 'From 6.5% APR',
      features: ['Government incentives', 'Technical advisory', 'Carbon credits'],
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
      highlight: true
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: 'Education Infrastructure',
      purpose: 'Schools, universities, and vocational training centers',
      amount: '₵300,000 – ₵12,000,000',
      term: '12–72 months',
      rate: 'From 8.9% APR',
      features: ['Curriculum development', 'Technology integration', 'Accreditation support'],
      gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    }
  ];

  const specializedLoans = [
    {
      name: 'Government & Institutional Partnerships',
      description: 'Exclusive financing for public-private partnerships and government contractors',
      amount: '₵5,000,000 – ₵50,000,000',
      features: ['Project-based financing', 'Performance guarantees', 'Multi-year contracts', 'Political risk coverage']
    },
    {
      name: 'Healthcare Infrastructure Development',
      description: 'Modern medical facilities, specialized equipment, and hospital expansion',
      amount: '₵2,000,000 – ₵25,000,000',
      features: ['Medical equipment leasing', 'Facility expansion', 'Technology integration', 'International accreditation support']
    },
    {
      name: 'Agro-Industrial Complexes',
      description: 'Large-scale farming, processing facilities, and export-oriented agriculture',
      amount: '₵1,000,000 – ₵15,000,000',
      features: ['Seasonal financing', 'Cold storage facilities', 'Export processing', 'Commodity hedging']
    }
  ];

  const executiveBenefits = [
    'Direct access to C-suite executives including CEO Mrs. Gertrude Asamoah',
    'Personal relationship manager with 15+ years financial experience',
    'Exclusive invitations to Emerald Capital Investor Network events',
    'Priority processing - 50% faster than standard applications',
    'Customized repayment structures aligned with cash flow cycles',
    'Quarterly financial strategy sessions with executive team',
    'Digital dashboard with real-time portfolio analytics',
    'Free financial literacy training for your management team',
    'Cross-border payment solutions with executive FX rates',
    'Insurance partnerships with 40% premium discounts',
    'Succession planning and wealth management services',
    '24/7 VIP support line with direct executive access'
  ];

  const successMetrics = [
    { value: '₵500M+', label: 'Capital Successfully Managed' },
    { value: '50,000+', label: 'Businesses Empowered' },
    { value: '95%', label: 'Client Satisfaction Rate' },
    { value: '300%', label: 'Average Business Growth' },
    { value: '16', label: 'Regions Nationwide' },
    { value: '14+', label: 'Years of Excellence' }
  ];

  const regionalCoverage = [
    { region: 'Greater Accra', manager: 'Mr. Martin Jones-Arthur', contact: '+233 24317070' },
    { region: 'Ashanti', manager: 'Mr. Christian Yaw Boateng', contact: '+233 544860573' },
    { region: 'Western & Central', manager: 'Ms. Amazing Nana Ekua Abbey', contact: '+233 591594248' },
    { region: 'Northern Regions', manager: 'Mrs. Salma Issah', contact: '+233 244525034' },
    { region: 'Bono Regions', manager: 'Mrs. Helena Boamah', contact: '+233 247051745' },
    { region: 'Volta & Oti', manager: 'Ms. Esther Takyi', contact: '+233 557596494' }
  ];

  const faqs = [
    {
      question: 'What makes Emerald Capital different from traditional banks?',
      answer: 'Emerald Capital combines 14+ years of specialized microfinance expertise with executive-level banking services. Unlike traditional banks, we offer faster approval (24 hours vs. 2-4 weeks), lower rates (starting at 6.5% vs. industry average of 15-25%), and direct access to our executive team led by Mrs. Gertrude Asamoah.'
    },
    {
      question: 'What is the maximum loan amount for premium clients?',
      answer: 'For qualified commercial clients, we offer financing up to ₵50,000,000 for large-scale projects through our specialized loan division. Each application receives comprehensive assessment by our Investment Committee chaired by Dr. Asamoah Koranteng Evans.'
    },
    {
      question: 'What documentation is required for executive-level applications?',
      answer: 'Executive applications require: 3 years audited financials, business registration documents, tax clearance certificates, detailed 5-year business plan, management team profiles with credentials, and collateral documentation. Our executive team assists with compiling all documentation.'
    },
    {
      question: 'How quickly can funds be disbursed for urgent projects?',
      answer: 'Premium clients receive conditional approval within 24 hours through our executive fast-track. Funds disbursement occurs within 3-5 business days upon complete documentation. For urgent strategic projects, we offer same-day disbursement for verified repeat clients.'
    },
    {
      question: 'What industries does Emerald Capital specialize in?',
      answer: 'We have deep expertise in agriculture, manufacturing, healthcare, education, renewable energy, technology, and real estate development. Our sector specialists, including CIO Miss Anna Frimpong, provide industry-specific insights to structure optimal financing solutions.'
    },
    {
      question: 'Do you offer international financing and diaspora services?',
      answer: 'Yes. Through our Global Network led by Mr. Gabriel Amoako, we provide cross-border financing, currency hedging, trade finance, and investment opportunities. We facilitate connections to markets across Africa, Europe, Asia, and the Americas.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Executive Consultation',
      description: '90-minute strategy session with senior executive',
      time: '24 hours',
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Custom Proposal Development',
      description: 'Tailored financing structure by executive team',
      time: '48 hours',
      icon: <Mail className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Investment Committee Review',
      description: 'Comprehensive assessment by board-level committee',
      time: '72 hours',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Executive Disbursement',
      description: 'Capital transferred with executive oversight',
      time: '3-5 days',
      icon: <Banknote className="w-6 h-6" />
    }
  ];

  const handleExecutiveConsultation = () => {
    window.location.href = 'mailto:gertrude.asamoah@emeraldcapitalgh.com?subject=Executive%20Consultation%20Request&body=I%20am%20interested%20in%20discussing%20premium%20financing%20options%20with%20the%20executive%20team.%20Please%20schedule%20a%20consultation.';
  };

  const handleExecutiveCall = () => {
    window.location.href = 'tel:+233208070000';
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Executive Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">2024 Ghana Banking Awards Winner • Best Microfinance Institution</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Executive Financial Solutions
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl mb-10 max-w-4xl mx-auto font-light">
              Strategic capital partnerships for established businesses. 
              <span className="font-bold"> Minimum ₵500,000</span> to <span className="font-bold">₵50,000,000+</span>
              <br />
              <span className="text-lg mt-4 block">Led by Mrs. Gertrude Asamoah, CEO</span>
            </p>

            {/* Executive Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg">{feature.title}</div>
                      <div className="text-sm opacity-90 mt-1">{feature.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={handleExecutiveConsultation}
                className="group bg-gradient-to-r from-white to-emerald-100 text-emerald-900 font-black py-6 px-14 rounded-xl text-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-3"
              >
                <span>Schedule Executive Consultation</span>
                <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </button>
              
              <button
                onClick={handleExecutiveCall}
                className="group bg-transparent border-2 border-white text-white font-bold py-6 px-14 rounded-xl text-xl hover:bg-white/10 transition-all inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>Call Executive Team: 0208070000</span>
              </button>
            </div>

            <div className="mt-8 text-sm text-white/80">
              By invitation only • Minimum annual revenue: ₵2,000,000 • Head Office: Emerald Capital Building, Kumasi
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-emerald-600 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars - Executive Edition */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              The Emerald Capital <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Difference</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on 14+ years of excellence and ₵500M+ successfully managed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute -top-4 left-8 w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {pillar.icon}
                </div>
                <div className="pt-8">
                  <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                    {pillar.stat}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Loan Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full mb-4">
              <Award className="w-5 h-5" />
              <span className="text-sm font-bold">EXECUTIVE FINANCING SOLUTIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Strategic Capital for Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored financing structures reviewed by our Investment Committee
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
              <button
                onClick={() => setActiveTab('microfinance')}
                className={`px-12 py-6 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                  activeTab === 'microfinance'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="w-6 h-6" />
                Commercial Financing
              </button>
              <button
                onClick={() => setActiveTab('specialized')}
                className={`px-12 py-6 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                  activeTab === 'specialized'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building className="w-6 h-6" />
                Institutional Financing
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'microfinance' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microfinanceLoans.map((loan, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-xl border-2 ${loan.highlight ? 'border-emerald-500' : 'border-gray-200'} hover:border-emerald-500 transition-all hover:shadow-2xl relative overflow-hidden`}
                >
                  {loan.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-6 py-3 rounded-bl-lg">
                      EXECUTIVE PREFERRED
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 ${loan.gradient} rounded-xl flex items-center justify-center text-white mb-6`}>
                    {loan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{loan.name}</h3>
                  <p className="text-gray-600 mb-6">{loan.purpose}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Amount:</span>
                      <span className="text-xl font-black text-emerald-600">{loan.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Term:</span>
                      <span className="font-bold text-gray-900">{loan.term}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Rate:</span>
                      <span className="font-bold text-gray-900">{loan.rate}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-sm text-gray-600 font-medium mb-3">Executive Features:</div>
                    <div className="space-y-2">
                      {loan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {specializedLoans.map((loan, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition-all"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-3xl font-black text-gray-900 mb-4">{loan.name}</h3>
                      <p className="text-gray-600 text-lg">{loan.description}</p>
                    </div>
                    <div className="text-2xl font-black text-emerald-600 bg-white px-6 py-3 rounded-xl border border-emerald-100">
                      {loan.amount}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    {loan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-gray-200 rounded-xl p-5 hover:border-emerald-500 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-6 h-6 text-emerald-600" />
                          </div>
                          <span className="font-semibold text-gray-800">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Meet Your Executive Leadership
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              25+ years combined international banking experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveLeadership.map((exec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4"></div>
                  <div className="text-center">
                    <h3 className="text-2xl font-black mb-2">{exec.name}</h3>
                    <div className="text-emerald-200 font-bold text-lg mb-1">{exec.role}</div>
                    <div className="text-white/80 text-sm mb-4">{exec.education}</div>
                  </div>
                </div>
                
                <div className="mb-6 p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">Experience:</span>
                  </div>
                  <p className="text-white/90 text-sm">{exec.experience}</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 text-4xl opacity-20">"</div>
                  <p className="text-lg italic text-white/90">{exec.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Nationwide Executive Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving all 16 regions of Ghana with dedicated regional executives
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-10 shadow-xl border border-emerald-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalCoverage.map((region, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">{region.region}</h4>
                      <p className="text-gray-600 text-sm mb-2">Regional Executive: {region.manager}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">{region.contact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-emerald-200 text-center">
              <p className="text-gray-700">
                <strong>Head Office:</strong> Emerald Capital Building, Barekese Rd, Amanfrom, Kumasi<br />
                <strong>Executive Contact:</strong> +233 20 8070000 • info@emeraldcapitalgh.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Exclusive Executive Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond financing - strategic advantages that accelerate growth
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-10 shadow-2xl text-white">
            <div className="grid md:grid-cols-2 gap-6">
              {executiveBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              The Executive Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined for efficiency, designed for executive clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-emerald-200 z-0"></div>
                )}
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 text-center z-10">
                  <div className="text-4xl font-black text-emerald-100 mb-4">{step.step}</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    {step.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Executive FAQ
            </h2>
            <p className="text-xl text-gray-600">Strategic insights for decision makers</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:border-emerald-500 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-bold text-gray-900 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-10 pb-8">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Executive CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full mb-8">
            <Award className="w-6 h-6" />
            <span className="text-lg font-bold">EXECUTIVE FINANCING • BY INVITATION</span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-black mb-8 leading-tight">
            Ready to Build Your Legacy?
          </h2>
          
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Join Ghana's most successful businesses who trust Emerald Capital for strategic growth financing
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={handleExecutiveConsultation}
              className="group bg-gradient-to-r from-white to-emerald-100 text-emerald-900 font-black py-7 px-20 rounded-xl text-2xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-4"
            >
              <span>Schedule Executive Meeting</span>
              <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>
            
            <button
              onClick={handleExecutiveCall}
              className="group bg-transparent border-2 border-white text-white font-bold py-7 px-20 rounded-xl text-2xl hover:bg-white/10 transition-all inline-flex items-center gap-4"
            >
              <Phone className="w-6 h-6" />
              <span>Call Executive Team: +233 208070000</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-black mb-2">24/7</div>
              <div className="text-sm opacity-80">Executive Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">95%</div>
              <div className="text-sm opacity-80">Approval Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">₵500M+</div>
              <div className="text-sm opacity-80">Portfolio Size</div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg text-white/90">
              <strong>Emerald Capital Ghana</strong> • Head Office: Emerald Capital Building, Barekese Rd, Amanfrom, Kumasi • 
              <span className="block sm:inline mt-2"> 📞 +233 208070000 • 📧 info@emeraldcapitalgh.com</span>
            </p>
            <p className="text-sm text-white/70 mt-4">
              Licensed by Bank of Ghana • Member of Ghana Association of Microfinance Companies • 
              Serving all 16 regions through 50+ dedicated branches
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}