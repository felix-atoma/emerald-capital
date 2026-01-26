// src/components/BoardAndExecutiveLeadershipDetails.jsx
import React, { useState } from 'react';
import { 
  Users, Award, Target, Shield, TrendingUp, Briefcase, 
  PieChart, Crown, Building, DollarSign, Globe, Cpu, 
  Megaphone, Scale, BarChart, Heart, Zap, Clock, 
  CheckCircle, Eye, FileText, Mail, Phone, ArrowRight,
  ChevronRight, Star, Users2, Building2, Brain, Lightbulb
} from 'lucide-react';

const BoardAndExecutiveLeadershipDetails = () => {
  const [selectedRole, setSelectedRole] = useState('board');

  // Function to get leader image from public folder
  const getLeaderImage = (roleId, roleName) => {
    // Map role IDs to actual image filenames in your public folder
    const imageMap = {
      'board': 'DR. ASAMOAH KORANTENG EVANS.jpg', // Board Chairperson
      'ceo': 'MRS. GERTRUDE ASAMOAH.jpg',
      'coo': 'MR. SOLOMON AMANKWAH.jpg',
      'cfo': 'MR. EMMANUEL OSEI MENSAH.jpg',
      'cro': 'MR. ALBERT KWAME ACHIIFU.jpg',
      'cto': 'MR. MARTIN JONES-ARTHUR.jpg',
      'cmo': 'MISS. GLADYS ABENA YEBOAH.jpg',
      'cco': 'MR. CHARLES BINNEY ESQ.jpg',
      'cio': 'MISS. ANNA FRIMPONG.jpg',
      'cino': 'MR. CHRISTIAN YAW BOATENG.jpg',
      'chro': 'MISS. ANNA FRIMPONG.jpg'
    };
    
    // Get the actual image filename for this role
    const imageFilename = imageMap[roleId];
    const imageUrl = `/${imageFilename}`;
    
    // Create a fallback avatar URL in case image is missing
    const colorMap = {
      'board': '3b82f6',     // blue
      'ceo': 'f59e0b',      // amber
      'coo': '10b981',      // emerald
      'cfo': '8b5cf6',      // purple
      'cro': 'ef4444',      // red
      'cto': '6366f1',      // indigo
      'cmo': 'ec4899',      // pink
      'cco': '6b7280',      // gray
      'cio': '14b8a6',      // teal
      'cino': '3b82f6',     // blue
      'chro': 'f59e0b'      // amber
    };
    
    const bgColor = colorMap[roleId] || '3b82f6';
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(roleName)}&background=${bgColor}&color=fff&size=400&bold=true&format=svg`;
    
    return { imageUrl, fallbackUrl };
  };

  // Handle image error
  const handleImageError = (roleId, e, roleName) => {
    console.warn(`Image failed to load for role ${roleId}:`, e.target.src);
    const { fallbackUrl } = getLeaderImage(roleId, roleName);
    e.target.src = fallbackUrl;
    e.target.className = e.target.className + ' bg-gray-200 p-2 object-contain';
  };

  const leadershipRoles = [
    {
      id: 'board',
      title: 'Board of Directors',
      subtitle: 'Highest Governing Body',
      description: 'Provides strategic direction, oversight, and accountability for Emerald Capital.',
      icon: <Crown className="w-6 h-6" />,
      color: 'from-blue-600 to-cyan-500',
      leaderName: 'Dr. Asamoah Koranteng Evans',
      responsibilities: [
        'Define corporate strategy and vision',
        'Oversee executive performance',
        'Approve major investments and budgets',
        'Ensure regulatory compliance',
        'Monitor risk management',
        'Approve dividend policies',
        'Succession planning',
        'Stakeholder engagement'
      ],
      kpis: ['Strategic Alignment', 'Governance Score', 'ROE Target', 'Risk Management'],
      experience: '25+ years average'
    },
    {
      id: 'ceo',
      title: 'Chief Executive Officer',
      subtitle: 'Overall Leadership & Strategy',
      description: 'Leads Emerald Capital with overall strategic direction, performance management, and stakeholder relations.',
      icon: <Building className="w-6 h-6" />,
      color: 'from-amber-600 to-orange-500',
      leaderName: 'Mrs. Gertrude Asamoah',
      responsibilities: [
        'Set company vision and strategy',
        'Lead executive team',
        'Drive financial performance',
        'Stakeholder relationship management',
        'Corporate culture development',
        'Major investment decisions',
        'Market positioning',
        'Talent development'
      ],
      kpis: ['Revenue Growth', 'Profitability', 'Market Share', 'ESG Score'],
      experience: 'CEO with 20+ years'
    },
    {
      id: 'coo',
      title: 'Chief Operating Officer',
      subtitle: 'Operational Excellence',
      description: 'Oversees day-to-day operations ensuring efficiency, quality, and service delivery excellence.',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-emerald-600 to-green-500',
      leaderName: 'Mr. Solomon Amankwah',
      responsibilities: [
        'Optimize operational processes',
        'Service delivery excellence',
        'Cost management',
        'Quality assurance',
        'Operational risk management',
        'Technology implementation',
        'Performance monitoring',
        'Team productivity'
      ],
      kpis: ['Operational Efficiency', 'Cost Reduction', 'Service Quality', 'Process Innovation'],
      experience: 'Operations expert 18+ years'
    },
    {
      id: 'cfo',
      title: 'Chief Financial Officer',
      subtitle: 'Financial Stewardship',
      description: 'Manages finance, treasury, financial planning, and ensures financial sustainability.',
      icon: <PieChart className="w-6 h-6" />,
      color: 'from-purple-600 to-pink-500',
      leaderName: 'Mr. Emmanuel Osei Mensah',
      responsibilities: [
        'Financial strategy development',
        'Capital allocation',
        'Financial reporting',
        'Risk management',
        'Investor relations',
        'Budget management',
        'M&A activities',
        'Tax planning'
      ],
      kpis: ['ROE', 'Liquidity Ratio', 'Cost of Capital', 'Financial Compliance'],
      experience: 'Finance professional 22+ years'
    },
    {
      id: 'cro',
      title: 'Chief Risk Officer',
      subtitle: 'Enterprise Risk Management',
      description: 'Oversees comprehensive risk management framework across all business operations.',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-600 to-rose-500',
      leaderName: 'Mr. Albert Kwame Achiifu',
      responsibilities: [
        'Risk assessment framework',
        'Compliance monitoring',
        'Internal controls',
        'Fraud prevention',
        'Risk mitigation strategies',
        'Regulatory compliance',
        'Crisis management',
        'Insurance management'
      ],
      kpis: ['Risk Coverage', 'Compliance Score', 'Loss Prevention', 'Audit Rating'],
      experience: 'Risk management 15+ years'
    },
    {
      id: 'cto',
      title: 'Chief Technology Officer',
      subtitle: 'Digital Transformation',
      description: 'Leads technology strategy, digital platforms development, and IT infrastructure.',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-indigo-600 to-violet-500',
      leaderName: 'Mr. Martin Jones-Arthur',
      responsibilities: [
        'Technology strategy',
        'Digital transformation',
        'IT infrastructure',
        'Cybersecurity',
        'Innovation initiatives',
        'Technology partnerships',
        'Data management',
        'System architecture'
      ],
      kpis: ['System Uptime', 'Digital Adoption', 'Innovation Index', 'Security Score'],
      experience: 'Technology leader 20+ years'
    },
    {
      id: 'cmo',
      title: 'Chief Marketing Officer',
      subtitle: 'Growth & Brand Leadership',
      description: 'Drives business growth, brand visibility, customer acquisition, and market positioning.',
      icon: <Megaphone className="w-6 h-6" />,
      color: 'from-pink-600 to-rose-500',
      leaderName: 'Miss Gladys Abena Yeboah',
      responsibilities: [
        'Brand strategy',
        'Market research',
        'Customer acquisition',
        'Digital marketing',
        'Product positioning',
        'Partnership development',
        'Market expansion',
        'Customer experience'
      ],
      kpis: ['Market Share', 'Brand Awareness', 'Customer Growth', 'ROI Marketing'],
      experience: 'Marketing expert 18+ years'
    },
    {
      id: 'cco',
      title: 'Chief Compliance Officer',
      subtitle: 'Legal Integrity & Compliance',
      description: 'Ensures legal integrity, regulatory compliance, and ethical standards across operations.',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-gray-600 to-slate-500',
      leaderName: 'Mr. Charles Binney Esq',
      responsibilities: [
        'Regulatory compliance',
        'Legal oversight',
        'Ethics enforcement',
        'Policy development',
        'Training programs',
        'Investigations',
        'Reporting compliance',
        'Governance frameworks'
      ],
      kpis: ['Compliance Rate', 'Audit Findings', 'Training Completion', 'Policy Adherence'],
      experience: 'Legal & compliance 20+ years'
    },
    {
      id: 'cio',
      title: 'Chief Investment Officer',
      subtitle: 'Investment Strategy Leadership',
      description: 'Leads investment strategy development and portfolio performance optimization.',
      icon: <BarChart className="w-6 h-6" />,
      color: 'from-teal-600 to-cyan-500',
      leaderName: 'Miss Anna Frimpong',
      responsibilities: [
        'Investment strategy',
        'Portfolio management',
        'Asset allocation',
        'Risk assessment',
        'Market analysis',
        'Investment research',
        'Performance monitoring',
        'Client advisory'
      ],
      kpis: ['Portfolio Returns', 'Risk-Adjusted Returns', 'AUM Growth', 'Client Satisfaction'],
      experience: 'Investment management 25+ years'
    },
    {
      id: 'cino',
      title: 'Chief Insurance Officer',
      subtitle: 'Insurance Brokerage Leadership',
      description: 'Leads insurance brokerage business ensuring profitable growth and strong relationships.',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-700 to-indigo-600',
      leaderName: 'Mr. Christian Yaw Boateng',
      responsibilities: [
        'Insurance strategy',
        'Brokerage operations',
        'Client relationships',
        'Underwriting excellence',
        'Risk assessment',
        'Claims management',
        'Market partnerships',
        'Regulatory compliance'
      ],
      kpis: ['Insurance Premiums', 'Client Retention', 'Loss Ratio', 'Market Penetration'],
      experience: 'Insurance expert 20+ years'
    },
    {
      id: 'chro',
      title: 'Chief Human Resources Officer',
      subtitle: 'Talent & Culture Leadership',
      description: 'Manages talent acquisition, development, organizational culture, and employee engagement.',
      icon: <Users2 className="w-6 h-6" />,
      color: 'from-amber-700 to-yellow-600',
      leaderName: 'Miss Anna Frimpong',
      responsibilities: [
        'Talent strategy',
        'Organizational development',
        'Performance management',
        'Learning & development',
        'Compensation & benefits',
        'Employee relations',
        'Culture development',
        'Succession planning'
      ],
      kpis: ['Employee Engagement', 'Turnover Rate', 'Training Hours', 'Talent Quality'],
      experience: 'HR leadership 18+ years'
    }
  ];

  const selectedRoleData = leadershipRoles.find(role => role.id === selectedRole);
  const { imageUrl, fallbackUrl } = getLeaderImage(selectedRole, selectedRoleData.leaderName);

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Executive Leadership Structure
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders who guide Emerald Capital with expertise, 
            integrity, and strategic excellence across all functional areas.
          </p>
        </div>

        {/* Leadership Roles Navigation */}
        <div className="mb-10">
          <div className="flex overflow-x-auto pb-4 gap-2 md:gap-3 scrollbar-hide">
            {leadershipRoles.map((role) => {
              const { imageUrl: navImageUrl } = getLeaderImage(role.id, role.leaderName);
              
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`
                    flex-shrink-0 flex flex-col items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 min-w-[100px] md:min-w-[120px]
                    ${selectedRole === role.id 
                      ? `bg-gradient-to-r ${role.color} text-white shadow-lg md:shadow-xl scale-105`
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md'
                    }
                  `}
                >
                  {/* Leader Image Thumbnail */}
                  <div className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2
                    ${selectedRole === role.id ? 'border-white' : 'border-gray-200'}
                  `}>
                    <img
                      src={navImageUrl}
                      alt={role.leaderName}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      onError={(e) => handleImageError(role.id, e, role.leaderName)}
                    />
                  </div>
                  
                  <div className="text-center">
                    <div className="font-bold text-xs md:text-sm leading-tight">{role.title.split(' ')[0]}</div>
                  </div>
                  {selectedRole === role.id && (
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 animate-pulse mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Leadership Details */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left - Role Details */}
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-r ${selectedRoleData.color} rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-lg md:shadow-2xl mb-6 md:mb-8`}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-6 md:mb-8">
                {/* Leader Image */}
                <div className="
                  w-20 h-20 md:w-32 md:h-32 rounded-xl md:rounded-2xl overflow-hidden 
                  border-4 border-white shadow-lg md:shadow-xl flex-shrink-0 mx-auto md:mx-0
                  bg-gray-100
                ">
                  <img
                    src={imageUrl}
                    alt={selectedRoleData.leaderName}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 30%' }}
                    loading="lazy"
                    onError={(e) => handleImageError(selectedRole, e, selectedRoleData.leaderName)}
                  />
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedRoleData.title}</h3>
                  <p className="text-sm md:text-base text-white/80 mb-3 md:mb-4">{selectedRoleData.subtitle}</p>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2">
                    <Award className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm font-medium">{selectedRoleData.leaderName}</span>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-95">{selectedRoleData.description}</p>

              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-bold">{selectedRoleData.experience}</span>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-6 md:mb-8">
                <h4 className="font-bold text-lg mb-3 md:mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 md:w-5 md:h-5" />
                  Key Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {selectedRoleData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 bg-white/10 rounded-lg md:rounded-xl p-3 md:p-4 backdrop-blur-sm">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance KPIs */}
              <div>
                <h4 className="font-bold text-lg mb-3 md:mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                  Performance Indicators
                </h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {selectedRoleData.kpis.map((kpi, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                      {kpi}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Leadership Impact */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Leadership Impact</h3>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    icon: <Brain className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
                    title: "Strategic Vision",
                    description: "Driving long-term strategic initiatives and market positioning"
                  },
                  {
                    icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
                    title: "Innovation",
                    description: "Fostering innovation and digital transformation across operations"
                  },
                  {
                    icon: <Users2 className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
                    title: "Team Development",
                    description: "Building high-performance teams and leadership pipeline"
                  },
                  {
                    icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />,
                    title: "Excellence",
                    description: "Maintaining excellence in service delivery and operations"
                  }
                ].map((impact, index) => (
                  <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl">
                    <div className="p-2 md:p-3 bg-white rounded-lg md:rounded-xl shadow-sm">
                      {impact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">{impact.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{impact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Leadership Excellence */}
          <div className="space-y-6 md:space-y-8">
            {/* Leadership Excellence Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Leadership Excellence</h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    metric: "Industry Experience",
                    value: "22+ Years",
                    icon: <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />,
                    color: "bg-blue-100"
                  },
                  {
                    metric: "Education Level",
                    value: "Advanced Degrees",
                    icon: <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />,
                    color: "bg-purple-100"
                  },
                  {
                    metric: "Global Exposure",
                    value: "Multi-market",
                    icon: <Globe className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />,
                    color: "bg-emerald-100"
                  },
                  {
                    metric: "Board Diversity",
                    value: "40% Women",
                    icon: <Users className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />,
                    color: "bg-pink-100"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className={`p-2 rounded-lg ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm md:text-base">{item.metric}</div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-900 text-sm md:text-base">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance Structure */}
            <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Governance Structure</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Independent Board Chairman",
                  "Majority Independent Directors",
                  "Quarterly Board Meetings",
                  "Annual Performance Reviews",
                  "Succession Planning",
                  "Risk Committee Oversight",
                  "Audit Committee Independence",
                  "Shareholder Engagement"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Leadership */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Leadership Contact</h3>
              <div className="space-y-3 md:space-y-4">
                <button className="w-full flex items-center justify-between p-3 md:p-4 bg-blue-50 rounded-lg md:rounded-xl hover:bg-blue-100 transition-colors group">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    <span className="font-medium text-gray-900 text-sm md:text-base">Email Leadership</span>
                  </div>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-3 md:p-4 bg-emerald-50 rounded-lg md:rounded-xl hover:bg-emerald-100 transition-colors group">
                  <div className="flex items-center gap-2 md:gap-3">
                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                    <span className="font-medium text-gray-900 text-sm md:text-base">Leadership Bios</span>
                  </div>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-3 md:p-4 bg-purple-50 rounded-lg md:rounded-xl hover:bg-purple-100 transition-colors group">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Eye className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                    <span className="font-medium text-gray-900 text-sm md:text-base">Annual Report</span>
                  </div>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-12 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Leadership Philosophy
          </h3>
          <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  principle: "Integrity First",
                  description: "Unwavering commitment to ethical conduct and transparency",
                  icon: "⚖️"
                },
                {
                  principle: "Strategic Vision",
                  description: "Forward-thinking approach to sustainable growth",
                  icon: "🔭"
                },
                {
                  principle: "Innovation",
                  description: "Embracing change and driving transformation",
                  icon: "💡"
                },
                {
                  principle: "Accountability",
                  description: "Taking ownership of decisions and outcomes",
                  icon: "🎯"
                },
                {
                  principle: "Collaboration",
                  description: "Working together for collective success",
                  icon: "🤝"
                },
                {
                  principle: "Excellence",
                  description: "Striving for the highest standards in all endeavors",
                  icon: "🌟"
                },
                {
                  principle: "Resilience",
                  description: "Navigating challenges with determination",
                  icon: "🛡️"
                },
                {
                  principle: "Impact",
                  description: "Creating meaningful value for all stakeholders",
                  icon: "💎"
                }
              ].map((principle, index) => (
                <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl mb-2 md:mb-3">{principle.icon}</div>
                  <div className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">{principle.principle}</div>
                  <div className="text-gray-600 text-xs md:text-sm">{principle.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Contact Section */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl px-6 md:px-8 py-6 md:py-8 shadow-xl">
            <div className="text-center md:text-left text-white">
              <div className="flex items-center gap-2 md:gap-3 mb-2 justify-center md:justify-start">
                <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                <p className="text-base md:text-lg font-bold">Leadership Contact</p>
              </div>
              <p className="text-blue-100 text-sm md:text-base">
                Connect with our executive leadership team for strategic inquiries, 
                partnership opportunities, or governance matters.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a 
                href="mailto:leadership@emeraldcapitalgh.com" 
                className="bg-white text-blue-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                Email Leadership Team
              </a>
              <a 
                href="tel:+233208070005" 
                className="bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-white/10 transition-colors text-sm md:text-base"
              >
                Call Executive Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAndExecutiveLeadershipDetails;