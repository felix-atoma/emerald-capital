// src/components/ExecutiveManagementDetails.jsx
import React, { useState } from 'react';
import { 
  Users, Briefcase, TrendingUp, Shield, Cpu, Megaphone, 
  Scale, BarChart, Heart, Zap, Building2, FileText, 
  Target, CheckCircle, Clock, Award, Globe, PieChart,
  ArrowRight, ChevronRight, DollarSign, Users2, 
  Building, Smartphone, ChartBar, Lock, Target as TargetIcon,
  Eye, Mail, Phone, Download, Star, Rocket, Lightbulb,
  Brain, ShieldCheck, Network, Monitor, Megaphone as MegaphoneIcon,
  Scale as ScaleIcon, BarChart3, Heart as HeartIcon,
  Zap as ZapIcon, Briefcase as BriefcaseIcon
} from 'lucide-react';

const ExecutiveManagementDetails = () => {
  const [selectedRole, setSelectedRole] = useState('coo');
  const [imageErrors, setImageErrors] = useState({});

  // Function to get executive image from public folder
  const getExecutiveImage = (roleId, executiveName) => {
    // Map role IDs to actual image filenames in your public folder
    const imageMap = {
      'coo': 'MR. SOLOMON AMANKWAH.jpg',
      'cfo': 'MR. EMMANUEL OSEI MENSAH.jpg',
      'cro': 'MR. ALBERT KWAME ACHIIFU.jpg',
      'cto': 'MR. MARTIN JONES-ARTHUR.jpg',
      'cmo': 'MISS GLADYS ABENA YEBOAH.jpg',
      'cco': 'MR. CHARLES BINNEY ESQ.jpg',
      'cio': 'MISS ANNA FRIMPONG.jpg',
      'chro': 'MISS ANNA FRIMPONG HR.jpg',
      'cino': 'MR. CHRISTIAN YAW BOATENG.jpg'
    };
    
    // Get the actual image filename for this role
    const imageFilename = imageMap[roleId];
    const imageUrl = `/${imageFilename}`;
    
    // Create a fallback avatar URL in case image is missing
    const colorMap = {
      'coo': '10b981',     // emerald
      'cfo': '8b5cf6',     // purple
      'cro': 'ef4444',     // red
      'cto': '6366f1',     // indigo
      'cmo': 'ec4899',     // pink
      'cco': '6b7280',     // gray
      'cio': '14b8a6',     // teal
      'chro': 'f59e0b',    // amber
      'cino': '3b82f6'     // blue
    };
    
    const bgColor = colorMap[roleId] || '3b82f6';
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(executiveName)}&background=${bgColor}&color=fff&size=400&bold=true&format=svg`;
    
    return { imageUrl, fallbackUrl };
  };

  // Handle image error
  const handleImageError = (roleId, e) => {
    console.warn(`Image failed to load for role ${roleId}:`, e.target.src);
    setImageErrors(prev => ({ ...prev, [roleId]: true }));
    const { fallbackUrl } = getExecutiveImage(roleId, '');
    e.target.src = fallbackUrl;
    e.target.className = e.target.className + ' bg-gray-200 p-2';
  };

  const executiveRoles = [
    {
      id: 'coo',
      title: 'Chief Operating Officer',
      subtitle: 'Operational Excellence Leader',
      executiveName: 'Mr. Solomon Amankwah',
      role: 'Oversees day-to-day operations, ensures efficiency across departments.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      responsibilities: [
        'Oversee daily operations across all departments',
        'Ensure operational efficiency and process optimization',
        'Manage service delivery quality and customer experience',
        'Drive operational excellence initiatives',
        'Implement performance management systems',
        'Coordinate cross-functional team collaboration',
        'Manage operational risk and continuity planning',
        'Optimize resource allocation and utilization'
      ],
      kpis: [
        { name: 'Operational Efficiency', target: '95%', current: '96%' },
        { name: 'Cost Optimization', target: '15%', current: '18%' },
        { name: 'Service Quality', target: '98%', current: '99%' },
        { name: 'Process Improvement', target: '20', current: '25' }
      ],
      focusAreas: ['Process Optimization', 'Quality Management', 'Resource Efficiency', 'Service Delivery'],
      experience: '18+ years in operations management'
    },
    {
      id: 'cfo',
      title: 'Chief Financial Officer',
      subtitle: 'Financial Stewardship Leader',
      executiveName: 'Mr. Emmanuel Osei Mensah',
      role: 'Manages financial planning, budgeting, accounting, reporting, and risk management.',
      icon: <BarChart className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Financial planning and budgeting',
        'Financial reporting and compliance',
        'Capital allocation and investment strategy',
        'Risk management and mitigation',
        'Treasury and cash flow management',
        'Investor relations and communications',
        'Mergers and acquisitions strategy',
        'Tax planning and optimization'
      ],
      kpis: [
        { name: 'ROE', target: '18%', current: '19.2%' },
        { name: 'Liquidity Ratio', target: '1.5', current: '1.8' },
        { name: 'Cost of Capital', target: '8%', current: '7.5%' },
        { name: 'Budget Adherence', target: '95%', current: '97%' }
      ],
      focusAreas: ['Financial Strategy', 'Capital Management', 'Risk Mitigation', 'Value Creation'],
      experience: '22+ years in finance leadership'
    },
    {
      id: 'cro',
      title: 'Chief Risk Officer',
      subtitle: 'Risk Management Leader',
      executiveName: 'Mr. Albert Kwame Achiifu',
      role: 'Identifies, monitors, and mitigates operational, market, and credit risks.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      responsibilities: [
        'Enterprise risk identification and assessment',
        'Risk monitoring and mitigation strategies',
        'Compliance framework management',
        'Credit risk assessment and management',
        'Market risk analysis and hedging',
        'Operational risk controls',
        'Crisis management and business continuity',
        'Regulatory compliance oversight'
      ],
      kpis: [
        { name: 'Risk Coverage', target: '98%', current: '99%' },
        { name: 'Compliance Score', target: '100%', current: '100%' },
        { name: 'Loss Prevention', target: '95%', current: '96%' },
        { name: 'Audit Rating', target: 'A', current: 'A+' }
      ],
      focusAreas: ['Risk Assessment', 'Compliance', 'Control Systems', 'Crisis Management'],
      experience: '15+ years in risk management'
    },
    {
      id: 'cto',
      title: 'Chief Technology Officer',
      subtitle: 'Digital Transformation Leader',
      executiveName: 'Mr. Martin Jones-Arthur',
      role: 'Oversees digital infrastructure, IT security, fintech solutions, and digital banking products.',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-indigo-500 to-violet-500',
      responsibilities: [
        'Technology strategy and architecture',
        'Digital transformation initiatives',
        'IT infrastructure management',
        'Cybersecurity and data protection',
        'Fintech innovation and partnerships',
        'Digital product development',
        'System integration and API management',
        'Technology team leadership'
      ],
      kpis: [
        { name: 'System Uptime', target: '99.9%', current: '99.95%' },
        { name: 'Digital Adoption', target: '85%', current: '88%' },
        { name: 'Security Score', target: '95', current: '97' },
        { name: 'Innovation Index', target: '8.5', current: '9.2' }
      ],
      focusAreas: ['Digital Transformation', 'Cybersecurity', 'Innovation', 'System Architecture'],
      experience: '20+ years in technology leadership'
    },
    {
      id: 'cmo',
      title: 'Chief Marketing Officer',
      subtitle: 'Growth & Brand Leadership',
      executiveName: 'Miss Gladys Abena Yeboah',
      role: 'Drives brand, marketing campaigns, client acquisition, partnerships, and market expansion.',
      icon: <MegaphoneIcon className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      responsibilities: [
        'Brand strategy and positioning',
        'Marketing campaign development',
        'Customer acquisition and retention',
        'Market research and analysis',
        'Digital marketing and social media',
        'Partnership and alliance development',
        'Market expansion strategies',
        'Customer experience optimization'
      ],
      kpis: [
        { name: 'Market Share', target: '15%', current: '16.5%' },
        { name: 'Brand Awareness', target: '85%', current: '88%' },
        { name: 'Customer Growth', target: '25%', current: '28%' },
        { name: 'Marketing ROI', target: '5x', current: '6.2x' }
      ],
      focusAreas: ['Brand Development', 'Customer Acquisition', 'Market Expansion', 'Digital Marketing'],
      experience: '18+ years in marketing leadership'
    },
    {
      id: 'cco',
      title: 'Chief Compliance Officer',
      subtitle: 'Legal & Regulatory Leader',
      executiveName: 'Mr. Charles Binney Esq',
      role: 'Ensures regulatory compliance, corporate governance, and legal risk management.',
      icon: <ScaleIcon className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-500',
      responsibilities: [
        'Regulatory compliance oversight',
        'Corporate governance framework',
        'Legal risk management',
        'Policy development and enforcement',
        'Compliance training and education',
        'Regulatory reporting',
        'Ethics program management',
        'Investigations and audits'
      ],
      kpis: [
        { name: 'Compliance Rate', target: '100%', current: '100%' },
        { name: 'Audit Findings', target: '0', current: '0' },
        { name: 'Training Completion', target: '100%', current: '100%' },
        { name: 'Policy Adherence', target: '99%', current: '100%' }
      ],
      focusAreas: ['Regulatory Compliance', 'Corporate Governance', 'Legal Risk', 'Ethics Management'],
      experience: '20+ years in legal and compliance'
    },
    {
      id: 'cio',
      title: 'Chief Investment Officer',
      subtitle: 'Investment Strategy Leader',
      executiveName: 'Miss Anna Frimpong',
      role: 'Oversees portfolio management, investment strategy, and research.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      responsibilities: [
        'Investment strategy development',
        'Portfolio management and optimization',
        'Asset allocation and rebalancing',
        'Investment research and analysis',
        'Risk-return optimization',
        'Client investment advisory',
        'Market trend analysis',
        'Performance monitoring and reporting'
      ],
      kpis: [
        { name: 'Portfolio Returns', target: '12%', current: '13.5%' },
        { name: 'Risk-Adjusted Returns', target: '8%', current: '9.2%' },
        { name: 'AUM Growth', target: '20%', current: '25%' },
        { name: 'Client Satisfaction', target: '95%', current: '96%' }
      ],
      focusAreas: ['Portfolio Management', 'Investment Research', 'Asset Allocation', 'Risk Management'],
      experience: '25+ years in investment management'
    },
    {
      id: 'chro',
      title: 'Chief Human Resources Officer',
      subtitle: 'Talent & Culture Leader',
      executiveName: 'Miss Anna Frimpong',
      role: 'Manages talent acquisition, development, and employee engagement.',
      icon: <Users2 className="w-8 h-8" />,
      color: 'from-amber-500 to-yellow-500',
      responsibilities: [
        'Talent acquisition and recruitment',
        'Organizational development',
        'Performance management systems',
        'Learning and development programs',
        'Compensation and benefits strategy',
        'Employee engagement and retention',
        'Succession planning',
        'Organizational culture development'
      ],
      kpis: [
        { name: 'Employee Engagement', target: '85%', current: '88%' },
        { name: 'Turnover Rate', target: '<10%', current: '8%' },
        { name: 'Training Hours', target: '40', current: '45' },
        { name: 'Talent Quality', target: '90%', current: '92%' }
      ],
      focusAreas: ['Talent Management', 'Organizational Development', 'Employee Experience', 'Culture Building'],
      experience: '18+ years in HR leadership'
    },
    {
      id: 'cino',
      title: 'Chief Insurance Officer',
      subtitle: 'Insurance Operations Leader',
      executiveName: 'Mr. Christian Yaw Boateng',
      role: 'Manages insurance operations, product development, risk underwriting, and compliance.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-600 to-indigo-500',
      responsibilities: [
        'Insurance product development',
        'Risk underwriting strategy',
        'Claims management optimization',
        'Regulatory compliance in insurance',
        'Portfolio management',
        'Customer-focused insurance solutions',
        'Insurance partnerships and alliances',
        'Market penetration strategies'
      ],
      kpis: [
        { name: 'Insurance Premiums', target: '$50M', current: '$52M' },
        { name: 'Client Retention', target: '90%', current: '92%' },
        { name: 'Loss Ratio', target: '65%', current: '62%' },
        { name: 'Market Penetration', target: '12%', current: '13.5%' }
      ],
      focusAreas: ['Insurance Products', 'Risk Underwriting', 'Claims Management', 'Regulatory Compliance'],
      experience: '20+ years in insurance leadership'
    }
  ];

  const selectedRoleData = executiveRoles.find(role => role.id === selectedRole);
  const { imageUrl, fallbackUrl } = getExecutiveImage(selectedRole, selectedRoleData.executiveName);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Executive Leadership Functions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Each C-Suite leader brings specialized expertise to drive operational excellence, 
            financial performance, and strategic growth across Emerald Capital.
          </p>
        </div>

        {/* Executive Role Grid */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {executiveRoles.map((role) => {
              const { imageUrl: navImageUrl } = getExecutiveImage(role.id, role.executiveName);
              const hasError = imageErrors[role.id];
              
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`
                    group relative overflow-hidden rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                    ${selectedRole === role.id 
                      ? `bg-gradient-to-r ${role.color} shadow-lg md:shadow-xl ring-2 md:ring-4 ring-white/50` 
                      : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                    }
                  `}
                >
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center">
                      {/* Executive Image Thumbnail */}
                      <div className={`
                        w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 mb-2 md:mb-3
                        ${selectedRole === role.id ? 'border-white' : 'border-gray-100'}
                        ${hasError ? 'bg-gray-100 p-1' : ''}
                      `}>
                        <img
                          src={hasError ? getExecutiveImage(role.id, role.executiveName).fallbackUrl : navImageUrl}
                          alt={role.executiveName}
                          className={`
                            w-full h-full transition-all duration-300
                            ${hasError 
                              ? 'object-contain p-1' 
                              : 'object-cover'
                            }
                          `}
                          style={{ objectPosition: 'center top' }}
                          loading="lazy"
                          onError={(e) => handleImageError(role.id, e)}
                        />
                      </div>
                      
                      <div className={`
                        font-bold text-xs md:text-sm mb-1
                        ${selectedRole === role.id ? 'text-white' : 'text-gray-900'}
                      `}>
                        {role.title.split(' ')[0]}
                      </div>
                      <div className={`
                        text-xs md:text-sm
                        ${selectedRole === role.id ? 'text-white/80' : 'text-gray-600'}
                      `}>
                        {role.title.split(' ')[1] || 'Officer'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover/Active Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300
                    ${role.color}
                  `}></div>
                  
                  {/* Active Indicator */}
                  {selectedRole === role.id && (
                    <div className="absolute top-2 right-2 md:top-3 md:right-3">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Executive Details */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left - Role Details */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Role Overview Card */}
            <div className={`bg-gradient-to-r ${selectedRoleData.color} rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-lg md:shadow-2xl`}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-6 md:mb-8">
                {/* Executive Image */}
                <div className="
                  w-20 h-20 md:w-32 md:h-32 rounded-xl md:rounded-2xl overflow-hidden 
                  border-4 border-white shadow-lg md:shadow-xl flex-shrink-0
                  bg-gray-100 mx-auto md:mx-0
                ">
                  <img
                    src={imageUrl}
                    alt={selectedRoleData.executiveName}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 30%' }}
                    loading="lazy"
                    onError={(e) => handleImageError(selectedRole, e)}
                  />
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedRoleData.title}</h3>
                  <p className="text-sm md:text-base text-white/80 mb-3 md:mb-4">{selectedRoleData.subtitle}</p>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2">
                    <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">{selectedRoleData.executiveName}</span>
                  </div>
                </div>
              </div>

              {/* Role Statement */}
              <div className="mb-6 md:mb-8">
                <div className="text-base md:text-lg font-medium mb-3 md:mb-4">Primary Role</div>
                <p className="text-sm md:text-lg opacity-95 bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                  {selectedRoleData.role}
                </p>
              </div>

              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-medium">{selectedRoleData.experience}</span>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-6 md:mb-8">
                <h4 className="font-bold text-lg mb-3 md:mb-4 flex items-center gap-2">
                  <TargetIcon className="w-4 h-4 md:w-5 md:h-5" />
                  Key Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {selectedRoleData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 bg-white/10 rounded-lg md:rounded-xl p-3 md:p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
                      </div>
                      <span className="text-xs md:text-sm leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Dashboard */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Performance Dashboard</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {selectedRoleData.kpis.map((kpi, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm md:text-base font-medium text-gray-900 mb-2">{kpi.name}</div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl md:text-3xl font-bold text-gray-900">{kpi.current}</div>
                      <div className="text-xs md:text-sm text-gray-500">target: {kpi.target}</div>
                    </div>
                    <div className="mt-3 md:mt-4 w-full bg-gray-200 rounded-full h-2 md:h-3">
                      <div className={`
                        h-full rounded-full
                        ${selectedRoleData.color.includes('emerald') ? 'bg-emerald-500' :
                          selectedRoleData.color.includes('purple') ? 'bg-purple-500' :
                          selectedRoleData.color.includes('red') ? 'bg-red-500' :
                          selectedRoleData.color.includes('indigo') ? 'bg-indigo-500' :
                          selectedRoleData.color.includes('pink') ? 'bg-pink-500' :
                          selectedRoleData.color.includes('gray') ? 'bg-gray-500' :
                          selectedRoleData.color.includes('teal') ? 'bg-teal-500' :
                          selectedRoleData.color.includes('amber') ? 'bg-amber-500' :
                          'bg-blue-500'
                        }
                      `} style={{ width: '92%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Executive Excellence */}
          <div className="space-y-6 md:space-y-8">
            {/* Focus Areas */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Focus Areas</h3>
              <div className="space-y-3 md:space-y-4">
                {selectedRoleData.focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl hover:bg-gray-100 transition-colors group">
                    <div className={`p-2 rounded-lg ${
                      selectedRoleData.color.includes('emerald') ? 'bg-emerald-100 text-emerald-600' :
                      selectedRoleData.color.includes('purple') ? 'bg-purple-100 text-purple-600' :
                      selectedRoleData.color.includes('red') ? 'bg-red-100 text-red-600' :
                      selectedRoleData.color.includes('indigo') ? 'bg-indigo-100 text-indigo-600' :
                      selectedRoleData.color.includes('pink') ? 'bg-pink-100 text-pink-600' :
                      selectedRoleData.color.includes('gray') ? 'bg-gray-100 text-gray-600' :
                      selectedRoleData.color.includes('teal') ? 'bg-teal-100 text-teal-600' :
                      selectedRoleData.color.includes('amber') ? 'bg-amber-100 text-amber-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      <Target className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="font-medium text-gray-900 text-sm md:text-base">{area}</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Metrics */}
            <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Executive Metrics</h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />,
                    metric: 'Experience',
                    value: selectedRoleData.experience.split(' ')[0] + '+' || '18+ Years'
                  },
                  {
                    icon: <Award className="w-4 h-4 md:w-5 md:h-5" />,
                    metric: 'Expertise Level',
                    value: 'Industry Expert'
                  },
                  {
                    icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />,
                    metric: 'Global Perspective',
                    value: 'Multi-market'
                  },
                  {
                    icon: <Network className="w-4 h-4 md:w-5 md:h-5" />,
                    metric: 'Team Leadership',
                    value: '50-100 Team'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="p-2 bg-white/10 rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text-xs md:text-sm">{item.metric}</span>
                    </div>
                    <span className="font-bold text-sm md:text-base">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Executive Resources</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-blue-50 rounded-lg md:rounded-xl hover:bg-blue-100 transition-colors group">
                  <FileText className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <span className="font-medium text-gray-900 text-sm md:text-base">Strategy Documents</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto text-gray-400 group-hover:text-blue-600 transition-colors" />
                </button>
                <button className="w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-emerald-50 rounded-lg md:rounded-xl hover:bg-emerald-100 transition-colors group">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                  <span className="font-medium text-gray-900 text-sm md:text-base">Performance Reports</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto text-gray-400 group-hover:text-emerald-600 transition-colors" />
                </button>
                <button className="w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-purple-50 rounded-lg md:rounded-xl hover:bg-purple-100 transition-colors group">
                  <Eye className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                  <span className="font-medium text-gray-900 text-sm md:text-base">Team Overview</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto text-gray-400 group-hover:text-purple-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Functions Grid */}
        <div className="mt-12 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            C-Suite Functional Excellence
          </h3>
          <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {executiveRoles.map((role) => (
                <div key={role.id} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${role.color} bg-opacity-10`}>
                      <div className={role.color.replace('from-', 'text-').split(' ')[0]}>
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm md:text-base">{role.title.split(' ')[0]}</div>
                      <div className="text-xs md:text-sm text-gray-600">{role.subtitle.split(' ')[0]}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4">{role.role.substring(0, 80)}...</p>
                  <button 
                    onClick={() => setSelectedRole(role.id)}
                    className={`text-xs md:text-sm font-medium ${role.color.replace('from-', 'text-').split(' ')[0]} hover:underline`}
                  >
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl md:rounded-3xl px-6 md:px-8 py-6 md:py-8 shadow-xl">
            <div className="text-center md:text-left text-white">
              <div className="flex items-center gap-2 md:gap-3 mb-2 justify-center md:justify-start">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                <p className="text-base md:text-lg font-bold">Executive Office Contact</p>
              </div>
              <p className="text-cyan-100 text-sm md:text-base">
                Connect with our executive leadership for strategic partnerships, 
                investment opportunities, or operational collaboration.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a 
                href="mailto:executive@emeraldcapitalgh.com" 
                className="bg-white text-cyan-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                Email Executive Team
              </a>
              <a 
                href="tel:+233208070006" 
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

export default ExecutiveManagementDetails;