// src/components/OrganizationalStructureDetails.jsx
import React, { useState } from 'react';
import { 
  Building2, Network, Layers, Users, ArrowUpDown, Shield, 
  TrendingUp, Target, CheckCircle, Briefcase, Crown, 
  Building, Zap, MapPin, UserCircle, ArrowRight, 
  ChevronRight, FileText, Eye, Download, Users2,
  PieChart, Megaphone, Cpu, Scale, BarChart,
  Heart, Globe, Clock, Award, Building as BuildingIcon,
  Users as UsersIcon, Map, Target as TargetIcon,
  Star, ShieldCheck, Lightbulb, Rocket
} from 'lucide-react';

const OrganizationalStructureDetails = () => {
  const [selectedLevel, setSelectedLevel] = useState('shareholders');

  const organizationalLevels = [
    {
      id: 'shareholders',
      title: 'Shareholders / Owners',
      subtitle: 'Ultimate Ownership & Capital Providers',
      description: 'Provide strategic capital, approve major decisions, and safeguard long-term enterprise value.',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-500',
      responsibilities: [
        'Capital provision and investment',
        'Major strategic decision approval',
        'Board director appointment/removal',
        'Financial statement approval',
        'Dividend policy decisions',
        'Enterprise value oversight'
      ],
      metrics: [
        { name: 'ROE Target', value: '18-22%' },
        { name: 'Ownership Concentration', value: 'Strategic' },
        { name: 'Decision Authority', value: 'Ultimate' },
        { name: 'Value Focus', value: 'Long-term' }
      ],
      spanOfControl: '1:1'
    },
    {
      id: 'board',
      title: 'Board of Directors',
      subtitle: 'Strategic Governance Body',
      description: 'Highest governing body providing strategic direction, oversight, and accountability.',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500',
      responsibilities: [
        'Corporate strategy approval',
        'Executive oversight and evaluation',
        'Risk management framework',
        'Financial performance monitoring',
        'Governance and compliance',
        'Succession planning'
      ],
      metrics: [
        { name: 'Board Independence', value: '70%' },
        { name: 'Meeting Frequency', value: 'Quarterly' },
        { name: 'Governance Score', value: 'A+' },
        { name: 'Strategic Alignment', value: '98%' }
      ],
      spanOfControl: '1:1'
    },
    {
      id: 'ceo',
      title: 'Chief Executive Officer',
      subtitle: 'Executive Leadership & Strategy',
      description: 'Overall leadership, strategic direction, and performance of Emerald Capital.',
      icon: <Building className="w-8 h-8" />,
      color: 'from-indigo-600 to-blue-500',
      responsibilities: [
        'Company vision and strategy',
        'Executive team leadership',
        'Financial performance management',
        'Stakeholder relationship management',
        'Corporate culture development',
        'Market positioning'
      ],
      metrics: [
        { name: 'Direct Reports', value: '9 Executives' },
        { name: 'Strategic Initiatives', value: '15+ Active' },
        { name: 'Performance Score', value: '96%' },
        { name: 'Leadership Span', value: '1:9' }
      ],
      spanOfControl: '1:9'
    },
    {
      id: 'csuite',
      title: 'C-Suite Executives',
      subtitle: 'Functional Leadership Team',
      description: 'Specialized executives leading key functional areas and driving operational excellence.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-pink-600 to-rose-500',
      responsibilities: [
        'Functional strategy execution',
        'Departmental leadership',
        'Operational efficiency',
        'Cross-functional collaboration',
        'Performance management',
        'Innovation and improvement'
      ],
      metrics: [
        { name: 'Functional Areas', value: '9 Departments' },
        { name: 'Team Size', value: '50-200 each' },
        { name: 'Goal Achievement', value: '95%' },
        { name: 'Leadership Span', value: '1:8' }
      ],
      spanOfControl: '1:8'
    },
    {
      id: 'regional',
      title: 'Regional Managers',
      subtitle: 'Geographic Operations Leadership',
      description: 'Manage regional operations, branch networks, and local market penetration.',
      icon: <MapPin className="w-8 h-8" />,
      color: 'from-amber-600 to-yellow-500',
      responsibilities: [
        'Regional operations management',
        'Branch network oversight',
        'Local market expansion',
        'Customer service quality',
        'Regional team leadership',
        'Performance monitoring'
      ],
      metrics: [
        { name: 'Regions Covered', value: '5 Major Regions' },
        { name: 'Branches Managed', value: '10-15 each' },
        { name: 'Market Coverage', value: '100%' },
        { name: 'Leadership Span', value: '1:10' }
      ],
      spanOfControl: '1:10'
    },
    {
      id: 'branch',
      title: 'Branch Agents',
      subtitle: 'Customer-Facing Operations',
      description: 'Frontline service delivery, customer relationship management, and local market execution.',
      icon: <UserCircle className="w-8 h-8" />,
      color: 'from-emerald-600 to-green-500',
      responsibilities: [
        'Customer service delivery',
        'Product sales and promotion',
        'Local market intelligence',
        'Customer relationship management',
        'Operational execution',
        'Service quality maintenance'
      ],
      metrics: [
        { name: 'Branches Total', value: '50+' },
        { name: 'Customer Reach', value: '100,000+' },
        { name: 'Service Quality', value: '98%' },
        { name: 'Operational Coverage', value: 'National' }
      ],
      spanOfControl: '1:N/A'
    }
  ];

  const selectedLevelData = organizationalLevels.find(level => level.id === selectedLevel);

  const cSuiteExecutives = [
    { role: 'COO', name: 'Operations', color: 'bg-emerald-100 text-emerald-600' },
    { role: 'CFO', name: 'Finance', color: 'bg-purple-100 text-purple-600' },
    { role: 'CRO', name: 'Risk', color: 'bg-red-100 text-red-600' },
    { role: 'CTO', name: 'Technology', color: 'bg-indigo-100 text-indigo-600' },
    { role: 'CMO', name: 'Marketing', color: 'bg-pink-100 text-pink-600' },
    { role: 'CCO', name: 'Compliance', color: 'bg-gray-100 text-gray-600' },
    { role: 'CIO', name: 'Investments', color: 'bg-teal-100 text-teal-600' },
    { role: 'CHRO', name: 'HR', color: 'bg-amber-100 text-amber-600' },
    { role: 'CInsO', name: 'Insurance', color: 'bg-blue-100 text-blue-600' }
  ];

  const regionalStructure = [
    { region: 'Greater Accra', branches: 15, manager: 'Regional Director', coverage: '100%' },
    { region: 'Ashanti Region', branches: 12, manager: 'Regional Director', coverage: '95%' },
    { region: 'Western Region', branches: 8, manager: 'Regional Director', coverage: '90%' },
    { region: 'Eastern Region', branches: 7, manager: 'Regional Director', coverage: '85%' },
    { region: 'Northern Region', branches: 8, manager: 'Regional Director', coverage: '80%' }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete Organizational Hierarchy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A well-defined six-level structure designed for optimal decision-making, 
            operational efficiency, and sustainable growth across all organizational levels.
          </p>
        </div>

        {/* Organizational Levels Navigation */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {organizationalLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`
                  group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-105
                  ${selectedLevel === level.id 
                    ? `bg-gradient-to-r ${level.color} shadow-2xl ring-4 ring-white/50 text-white`
                    : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl text-gray-900'
                  }
                `}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-4
                    ${selectedLevel === level.id 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-gray-100'
                    }
                  `}>
                    <div className={selectedLevel === level.id ? 'text-white' : level.color.replace('from-', 'text-').split(' ')[0]}>
                      {level.icon}
                    </div>
                  </div>
                  <div className="font-bold text-sm mb-1">{level.title.split('/')[0].trim()}</div>
                  <div className="text-xs opacity-80">
                    {level.title.includes('/') ? level.title.split('/')[1].trim() : ''}
                  </div>
                  
                  {/* Level Indicator */}
                  <div className={`
                    absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${selectedLevel === level.id ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-700'}
                  `}>
                    {organizationalLevels.findIndex(l => l.id === level.id) + 1}
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300
                  ${level.color}
                `}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Structure Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left - Level Details */}
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-r ${selectedLevelData.color} rounded-3xl p-8 text-white shadow-2xl`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  {selectedLevelData.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedLevelData.title}</h3>
                  <p className="text-white/80">{selectedLevelData.subtitle}</p>
                  <div className="mt-2 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Span of Control: {selectedLevelData.spanOfControl}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <div className="text-lg font-medium mb-4">Role Overview</div>
                <p className="text-lg opacity-95 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  {selectedLevelData.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Key Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedLevelData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-white/90" />
                      </div>
                      <span className="text-sm leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Structure Visualization */}
            <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Reporting Structure</h3>
              <div className="space-y-4">
                {organizationalLevels.map((level, index) => (
                  <div key={level.id} className="flex items-center gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      ${selectedLevel === level.id 
                        ? `bg-gradient-to-r ${level.color} text-white` 
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {level.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className={`font-bold ${selectedLevel === level.id ? 'text-gray-900' : 'text-gray-700'}`}>
                            {level.title}
                          </div>
                          <div className="text-sm text-gray-500">{level.subtitle}</div>
                        </div>
                        {index < organizationalLevels.length - 1 && (
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Metrics & Details */}
          <div className="space-y-8">
            {/* Level Metrics */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Level Metrics</h3>
              <div className="space-y-6">
                {selectedLevelData.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-gray-900">{metric.name}</div>
                    <div className={`font-bold ${
                      selectedLevelData.color.includes('blue') ? 'text-blue-600' :
                      selectedLevelData.color.includes('purple') ? 'text-purple-600' :
                      selectedLevelData.color.includes('indigo') ? 'text-indigo-600' :
                      selectedLevelData.color.includes('pink') ? 'text-pink-600' :
                      selectedLevelData.color.includes('amber') ? 'text-amber-600' :
                      'text-emerald-600'
                    }`}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* C-Suite Details (if selected level is csuite) */}
            {selectedLevel === 'csuite' && (
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">C-Suite Executive Team</h3>
                <div className="grid grid-cols-3 gap-3">
                  {cSuiteExecutives.map((exec, index) => (
                    <div key={index} className="text-center">
                      <div className={`${exec.color} rounded-lg p-3 mb-2`}>
                        <div className="font-bold">{exec.role}</div>
                      </div>
                      <div className="text-sm text-gray-700">{exec.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regional Structure (if selected level is regional) */}
            {selectedLevel === 'regional' && (
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Regional Coverage</h3>
                <div className="space-y-4">
                  {regionalStructure.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">{region.region}</div>
                        <div className="text-sm text-gray-600">{region.manager}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-amber-600">{region.branches} branches</div>
                        <div className="text-sm text-gray-600">{region.coverage} coverage</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Structure Principles */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Structure Principles</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">Clear reporting lines</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">Optimal span of control</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">Scalable design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">Efficient communication</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Download Structure Chart
            </button>
          </div>
        </div>

        {/* Complete Structure Overview */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Complete Structure Overview
          </h3>
          
          {/* Hierarchical Flow */}
          <div className="relative">
            {/* Vertical Flow Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>
            
            {/* Structure Levels */}
            <div className="space-y-12">
              {organizationalLevels.map((level, index) => (
                <div key={level.id} className="relative">
                  <div className={`
                    flex items-center gap-8
                    ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
                  `}>
                    {/* Level Content */}
                    <div className={`
                      flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}
                    `}>
                      <div className={`
                        inline-block ${index % 2 === 0 ? 'mr-12' : 'ml-12'}
                      `}>
                        <div className={`p-6 rounded-2xl bg-gradient-to-r ${level.color} text-white shadow-xl max-w-md ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                              {level.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-xl">{level.title}</h4>
                              <p className="text-white/80 text-sm">{level.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-white/90 text-sm">{level.description.substring(0, 100)}...</p>
                        </div>
                      </div>
                    </div>

                    {/* Level Indicator */}
                    <div className="relative z-10">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center font-bold text-white
                        bg-gradient-to-r ${level.color}
                      `}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Empty Space for alternating sides */}
                    <div className="flex-1"></div>
                  </div>

                  {/* Connector Line (except last level) */}
                  {index < organizationalLevels.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6">
                      <ArrowDownIcon className="w-6 h-6 text-purple-500 animate-bounce" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Structure Efficiency Metrics */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Structure Efficiency Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                metric: "Decision Speed",
                value: "92%",
                description: "Faster than industry average",
                icon: "⚡"
              },
              {
                metric: "Communication Flow",
                value: "95%",
                description: "Effective information transfer",
                icon: "📡"
              },
              {
                metric: "Operational Efficiency",
                value: "94%",
                description: "Optimal resource utilization",
                icon: "🏭"
              },
              {
                metric: "Scalability Index",
                value: "9.2/10",
                description: "Easy expansion capability",
                icon: "📈"
              }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
                <h4 className="font-bold text-gray-900 mb-2">{metric.metric}</h4>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits of Our Structure */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Our Organizational Structure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                benefit: "Clear Accountability",
                description: "Well-defined roles and responsibilities at every level",
                icon: "🎯"
              },
              {
                benefit: "Efficient Decision-Making",
                description: "Streamlined processes for faster strategic decisions",
                icon: "⚡"
              },
              {
                benefit: "Scalable Design",
                description: "Easy expansion without structural bottlenecks",
                icon: "📈"
              },
              {
                benefit: "Optimal Control Span",
                description: "Balanced management ratios for effective supervision",
                icon: "👥"
              },
              {
                benefit: "Effective Communication",
                description: "Clear information flow across all levels",
                icon: "📡"
              },
              {
                benefit: "Talent Development",
                description: "Clear career progression paths",
                icon: "🌟"
              },
              {
                benefit: "Risk Management",
                description: "Built-in checks and balances",
                icon: "🛡️"
              },
              {
                benefit: "Customer Focus",
                description: "Frontline empowerment for better service",
                icon: "💖"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-2xl mb-3">{benefit.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{benefit.benefit}</div>
                <div className="text-sm text-gray-600">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Network className="w-6 h-6" />
                <p className="text-lg font-bold">Organizational Development</p>
              </div>
              <p className="text-purple-100">
                Contact our organizational development team for structure optimization, 
                expansion planning, or operational efficiency consultations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="mailto:structure@emeraldcapitalgh.com" 
                className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Email Structure Team
              </a>
              <a 
                href="tel:+233208070007" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Call Operations
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Down Icon Component
const ArrowDownIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

export default OrganizationalStructureDetails;