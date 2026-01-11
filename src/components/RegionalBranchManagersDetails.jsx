// src/components/RegionalBranchManagersDetails.jsx
import React, { useState } from 'react';
import { 
  MapPin, Users, Award, TrendingUp, Target, Shield, Zap, Building,
  CheckCircle, Globe, Clock, FileText, Mail, Phone, Linkedin,
  BookOpen, Heart, Lightbulb, GraduationCap, ArrowRight, ChevronRight,
  Users as UsersIcon, Target as TargetIcon, Award as AwardIcon,
  ShieldCheck, PieChart, Megaphone, Cpu, BarChart, Heart as HeartIcon,
  Zap as ZapIcon, Briefcase, Users2, Scale, Star
} from 'lucide-react';

const RegionalBranchManagersDetails = () => {
  const [selectedRegion, setSelectedRegion] = useState('greater-accra');

  // Function to generate consistent avatar URLs
  const getAvatarUrl = (name, region) => {
    const colorMap = {
      'Greater Accra': '10b981',
      'Ashanti': '3b82f6',
      'Ahafo': '8b5cf6',
      'Western North': 'ec4899',
      'Western': 'f43f5e',
      'Central': '6366f1',
      'Eastern': '14b8a6',
      'Volta & Oti': '06b6d4',
      'Bono & Bono East': 'f59e0b',
      'Northern & Savannah': 'ef4444',
      'Upper West & Upper East': '8b5cf6',
      'Diaspora': '475569'
    };
    
    const bgColor = colorMap[region] || '3b82f6';
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bgColor}&color=fff&size=400&bold=true&length=2`;
  };

  const regionalManagers = [
    {
      id: 'greater-accra',
      region: 'Greater Accra',
      manager: 'Mr. Martin Jones-Arthur',
      title: 'Regional Manager',
      subtitle: 'Urban Operations & Digital Innovation Leader',
      bio: 'Manages urban branches and client relations; led record-high sales growth and digital banking adoption.',
      experience: '15+ years in urban banking operations and digital transformation',
      icon: <Building className="w-8 h-8" />,
      color: 'from-emerald-600 to-teal-500',
      profileImage: getAvatarUrl('Martin Jones-Arthur', 'Greater Accra'),
      responsibilities: [
        'Manage urban branch network operations',
        'Drive digital banking adoption initiatives',
        'Lead client relationship management',
        'Oversee sales growth and market penetration',
        'Implement innovative urban banking solutions',
        'Coordinate with corporate headquarters'
      ],
      achievements: [
        'Achieved record-high sales growth of 35%',
        'Led 40% increase in digital banking adoption',
        'Expanded branch network by 5 new locations',
        'Improved customer satisfaction to 96%',
        'Reduced operational costs by 18%'
      ],
      focusAreas: ['Digital Banking', 'Urban Expansion', 'Client Relations', 'Sales Growth'],
      branchCount: '15 Branches',
      coverage: '100% Urban Coverage'
    },
    {
      id: 'ashanti',
      region: 'Ashanti',
      manager: 'Mr. Christian Yaw Boateng',
      title: 'Regional Manager',
      subtitle: 'Compliance & Community Development Leader',
      bio: 'Ensures compliance and operational efficiency; introduced community financial literacy programs.',
      experience: '12+ years in regional banking and community development',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-500',
      profileImage: getAvatarUrl('Christian Boateng', 'Ashanti'),
      responsibilities: [
        'Ensure regional compliance standards',
        'Implement operational efficiency measures',
        'Lead community financial literacy programs',
        'Manage regional staff training',
        'Oversee risk management in region',
        'Coordinate with regulatory bodies'
      ],
      achievements: [
        'Achieved 100% compliance rating',
        'Introduced 10+ financial literacy programs',
        'Improved operational efficiency by 30%',
        'Trained 200+ community members',
        'Enhanced regional brand reputation'
      ],
      focusAreas: ['Compliance', 'Community Development', 'Operational Efficiency', 'Financial Literacy'],
      branchCount: '12 Branches',
      coverage: '95% Regional Coverage'
    },
    {
      id: 'ahafo',
      region: 'Ahafo',
      manager: 'Mrs. Helena Boamah',
      title: 'Regional Manager',
      subtitle: 'Rural Banking & Inclusive Leadership Specialist',
      bio: 'Oversees branch performance and rural mobile banking adoption; emphasizes inclusive leadership.',
      experience: '10+ years in rural banking and inclusive finance',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500',
      profileImage: getAvatarUrl('Helena Boamah', 'Ahafo'),
      responsibilities: [
        'Oversee rural branch performance',
        'Drive mobile banking adoption in rural areas',
        'Implement inclusive leadership programs',
        'Manage agricultural finance initiatives',
        'Coordinate community engagement',
        'Oversee rural financial inclusion'
      ],
      achievements: [
        'Increased rural mobile banking by 45%',
        'Improved branch performance by 28%',
        'Launched 5 inclusive finance programs',
        'Enhanced rural financial inclusion',
        'Built strong community partnerships'
      ],
      focusAreas: ['Rural Banking', 'Mobile Banking', 'Inclusive Leadership', 'Community Engagement'],
      branchCount: '8 Branches',
      coverage: '90% Regional Coverage'
    },
    {
      id: 'western-north',
      region: 'Western North',
      manager: 'Ms. Beatrice Bannor',
      title: 'Regional Manager',
      subtitle: 'Operations Excellence & Team Development Leader',
      bio: 'Oversees regional branch operations; improved transaction processing speed by 25%; promotes team development.',
      experience: '8+ years in branch operations and team leadership',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-pink-600 to-rose-500',
      profileImage: getAvatarUrl('Beatrice Bannor', 'Western North'),
      responsibilities: [
        'Oversee regional branch operations',
        'Improve transaction processing efficiency',
        'Lead team development initiatives',
        'Manage operational performance',
        'Coordinate service quality improvements',
        'Oversee staff training programs'
      ],
      achievements: [
        'Improved transaction speed by 25%',
        'Enhanced team performance by 32%',
        'Reduced operational errors by 40%',
        'Implemented new training programs',
        'Improved customer wait times'
      ],
      focusAreas: ['Operations Excellence', 'Team Development', 'Service Quality', 'Efficiency'],
      branchCount: '7 Branches',
      coverage: '85% Regional Coverage'
    },
    {
      id: 'western',
      region: 'Western',
      manager: 'Miss. Mercy Ahianor',
      title: 'Regional Manager',
      subtitle: 'Revenue Growth & Community Engagement Specialist',
      bio: 'Manages operations, staff training, and revenue targets; recognized for community engagement initiatives.',
      experience: '9+ years in revenue management and community banking',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-rose-600 to-red-500',
      profileImage: getAvatarUrl('Mercy Ahianor', 'Western'),
      responsibilities: [
        'Manage revenue targets and growth',
        'Oversee staff training and development',
        'Lead community engagement initiatives',
        'Coordinate operational improvements',
        'Manage client acquisition strategies',
        'Oversee regional marketing efforts'
      ],
      achievements: [
        'Exceeded revenue targets by 22%',
        'Recognized for community engagement',
        'Improved staff retention by 35%',
        'Enhanced customer acquisition',
        'Launched successful community programs'
      ],
      focusAreas: ['Revenue Growth', 'Community Engagement', 'Staff Development', 'Client Acquisition'],
      branchCount: '8 Branches',
      coverage: '90% Regional Coverage'
    },
    {
      id: 'central',
      region: 'Central',
      manager: 'Miss. Amazing N. Ekua Abbey',
      title: 'Regional Manager',
      subtitle: 'Operational Excellence & Training Leader',
      bio: 'Manages operations, staff training, and revenue targets; recognized for community engagement initiatives.',
      experience: '7+ years in operations and training management',
      icon: <Award className="w-8 h-8" />,
      color: 'from-indigo-600 to-violet-500',
      profileImage: getAvatarUrl('Amazing Abbey', 'Central'),
      responsibilities: [
        'Oversee operational excellence',
        'Lead comprehensive staff training',
        'Manage revenue target achievement',
        'Coordinate service delivery improvements',
        'Implement best practices',
        'Oversee performance management'
      ],
      achievements: [
        'Achieved 98% operational efficiency',
        'Trained 150+ staff members',
        'Met revenue targets consistently',
        'Improved service delivery scores',
        'Enhanced operational standards'
      ],
      focusAreas: ['Operational Excellence', 'Staff Training', 'Revenue Management', 'Service Delivery'],
      branchCount: '7 Branches',
      coverage: '85% Regional Coverage'
    },
    {
      id: 'eastern',
      region: 'Eastern',
      manager: 'Mr. Emmanuel Osei Mensah',
      title: 'Regional Manager',
      subtitle: 'Revenue Growth & Talent Development Expert',
      bio: 'Drives revenue growth and talent development; enhances staff retention and operational efficiency.',
      experience: '11+ years in revenue management and talent development',
      icon: <Users2 className="w-8 h-8" />,
      color: 'from-teal-600 to-cyan-500',
      profileImage: getAvatarUrl('Emmanuel Mensah', 'Eastern'),
      responsibilities: [
        'Drive revenue growth strategies',
        'Lead talent development programs',
        'Enhance staff retention initiatives',
        'Improve operational efficiency',
        'Manage performance metrics',
        'Oversee succession planning'
      ],
      achievements: [
        'Grew revenue by 28% annually',
        'Improved staff retention by 40%',
        'Developed 50+ team leaders',
        'Enhanced operational efficiency',
        'Built strong talent pipeline'
      ],
      focusAreas: ['Revenue Growth', 'Talent Development', 'Staff Retention', 'Operational Efficiency'],
      branchCount: '8 Branches',
      coverage: '88% Regional Coverage'
    },
    {
      id: 'volta-oti',
      region: 'Volta & Oti',
      manager: 'Miss. Esther Takyi',
      title: 'Regional Manager',
      subtitle: 'Rural Development & Inclusive Leadership',
      bio: 'Oversees branch performance and rural mobile banking adoption; emphasizes inclusive leadership.',
      experience: '9+ years in rural development and inclusive finance',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-cyan-600 to-blue-500',
      profileImage: getAvatarUrl('Esther Takyi', 'Volta & Oti'),
      responsibilities: [
        'Oversee rural branch performance',
        'Drive mobile banking adoption',
        'Implement inclusive leadership',
        'Manage rural development programs',
        'Coordinate community partnerships',
        'Oversee financial inclusion'
      ],
      achievements: [
        'Increased rural banking by 38%',
        'Improved branch performance',
        'Launched inclusive programs',
        'Enhanced community partnerships',
        'Promoted financial inclusion'
      ],
      focusAreas: ['Rural Development', 'Mobile Banking', 'Inclusive Leadership', 'Community Partnerships'],
      branchCount: '6 Branches',
      coverage: '80% Regional Coverage'
    },
    {
      id: 'bono',
      region: 'Bono & Bono East',
      manager: 'Mr. Justin Cobbold',
      title: 'Regional Manager',
      subtitle: 'Operations & Community Engagement Leader',
      bio: 'Manages operations, staff training, and revenue targets; recognized for community engagement initiatives.',
      experience: '10+ years in operations and community banking',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-amber-600 to-yellow-500',
      profileImage: getAvatarUrl('Justin Cobbold', 'Bono & Bono East'),
      responsibilities: [
        'Manage regional operations',
        'Lead staff training programs',
        'Drive community engagement',
        'Oversee revenue targets',
        'Coordinate service improvements',
        'Manage local partnerships'
      ],
      achievements: [
        'Improved operations efficiency',
        'Enhanced community engagement',
        'Met revenue targets consistently',
        'Built strong local partnerships',
        'Improved service delivery'
      ],
      focusAreas: ['Operations Management', 'Community Engagement', 'Staff Training', 'Local Partnerships'],
      branchCount: '7 Branches',
      coverage: '82% Regional Coverage'
    },
    {
      id: 'northern',
      region: 'Northern & Savannah',
      manager: 'Mrs. Salma Adams',
      title: 'Regional Manager',
      subtitle: 'Rural Banking & Community Development Specialist',
      bio: 'Oversees branch performance and rural mobile banking adoption; emphasizes inclusive leadership.',
      experience: '12+ years in northern region banking and development',
      icon: <MapPin className="w-8 h-8" />,
      color: 'from-red-600 to-orange-500',
      profileImage: getAvatarUrl('Salma Adams', 'Northern & Savannah'),
      responsibilities: [
        'Oversee northern region branches',
        'Drive rural banking initiatives',
        'Implement community development',
        'Manage agricultural finance',
        'Coordinate with local authorities',
        'Oversee financial inclusion'
      ],
      achievements: [
        'Expanded rural banking access',
        'Improved community development',
        'Enhanced agricultural finance',
        'Built strong local relationships',
        'Promoted financial inclusion'
      ],
      focusAreas: ['Rural Banking', 'Community Development', 'Agricultural Finance', 'Local Relationships'],
      branchCount: '8 Branches',
      coverage: '75% Regional Coverage'
    },
    {
      id: 'upper-west-east',
      region: 'Upper West & Upper East',
      manager: 'Mr. Abass Mohaideen',
      title: 'Regional Manager',
      subtitle: 'Northern Development & Financial Inclusion Leader',
      bio: 'Oversees branch performance and rural mobile banking adoption; emphasizes inclusive leadership.',
      experience: '11+ years in northern development banking',
      icon: <Target className="w-8 h-8" />,
      color: 'from-violet-600 to-purple-500',
      profileImage: getAvatarUrl('Abass Mohaideen', 'Upper West & Upper East'),
      responsibilities: [
        'Manage northernmost regions',
        'Drive financial inclusion',
        'Implement development programs',
        'Oversee rural branch network',
        'Coordinate with development partners',
        'Manage regional expansion'
      ],
      achievements: [
        'Enhanced financial inclusion',
        'Improved branch network',
        'Launched development programs',
        'Built partner relationships',
        'Expanded regional presence'
      ],
      focusAreas: ['Financial Inclusion', 'Rural Development', 'Branch Network', 'Partnership Development'],
      branchCount: '6 Branches',
      coverage: '70% Regional Coverage'
    },
    {
      id: 'diaspora',
      region: 'Diaspora',
      manager: 'Mr. Gabriel Amoako',
      title: 'Diaspora Relations Manager',
      subtitle: 'International Banking & Foreign Relations Expert',
      bio: 'Manages diasporan affairs and foreign client relations.',
      experience: '15+ years in international banking and diaspora relations',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-slate-600 to-gray-500',
      profileImage: getAvatarUrl('Gabriel Amoako', 'Diaspora'),
      responsibilities: [
        'Manage diaspora banking relations',
        'Oversee foreign client services',
        'Coordinate international remittances',
        'Manage cross-border banking',
        'Lead diaspora engagement',
        'Oversee foreign relations'
      ],
      achievements: [
        'Enhanced diaspora banking',
        'Improved foreign relations',
        'Increased remittance volumes',
        'Built international partnerships',
        'Expanded global presence'
      ],
      focusAreas: ['Diaspora Banking', 'International Relations', 'Remittance Services', 'Global Partnerships'],
      branchCount: 'Virtual Network',
      coverage: 'Global Coverage'
    }
  ];

  const selectedRegionData = regionalManagers.find(region => region.id === selectedRegion);

  const branchAgents = [
    {
      name: 'Mr. Kwame Ofori',
      qualification: 'MBA in Finance, Banking Certification',
      experience: '8 years branch operations',
      role: 'Senior Branch Manager',
      achievements: 'Improved customer service scores by 35%'
    },
    {
      name: 'Ms. Abena Serwaa',
      qualification: 'BSc Economics, Customer Service Certification',
      experience: '6 years client relations',
      role: 'Client Relations Manager',
      achievements: 'Increased client retention by 25%'
    },
    {
      name: 'Mr. Kofi Mensah',
      qualification: 'Diploma in Banking, Operations Certification',
      experience: '5 years operations',
      role: 'Operations Supervisor',
      achievements: 'Reduced processing errors by 40%'
    },
    {
      name: 'Mrs. Efua Addo',
      qualification: 'BA Business Admin, Sales Certification',
      experience: '7 years sales leadership',
      role: 'Sales Team Lead',
      achievements: 'Exceeded sales targets by 30%'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full px-6 py-3 mb-6 animate-bobble">
            <MapPin className="w-5 h-5" />
            <span className="font-bold text-white">REGIONAL & BRANCH LEADERSHIP</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Grassroots Financial Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our regional and branch managers bring Emerald Capital's excellence to communities 
            across Ghana, driving financial inclusion and operational excellence at every level.
          </p>
        </div>

        {/* Regional Navigation */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {regionalManagers.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`
                  group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02]
                  ${selectedRegion === region.id 
                    ? `bg-gradient-to-r ${region.color} shadow-2xl text-white` 
                    : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl text-gray-900'
                  }
                `}
              >
                <div className="p-4">
                  <div className="flex flex-col items-center text-center">
                    {/* Region Icon/Image */}
                    <div className={`
                      w-14 h-14 rounded-full overflow-hidden border-2 mb-3 flex-shrink-0
                      ${selectedRegion === region.id ? 'border-white' : 'border-gray-200'}
                    `}>
                      <img
                        src={region.profileImage}
                        alt={region.manager}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(region.manager)}&background=3b82f6&color=fff&size=150&bold=true`;
                        }}
                      />
                    </div>
                    
                    <div className={`
                      font-bold text-sm mb-1
                      ${selectedRegion === region.id ? 'text-white' : 'text-gray-900'}
                    `}>
                      {region.region.split(' ')[0]}
                    </div>
                    <div className={`
                      text-xs
                      ${selectedRegion === region.id ? 'text-white/80' : 'text-gray-600'}
                    `}>
                      {region.manager.split(' ')[0]}
                    </div>
                    
                    {selectedRegion === region.id && (
                      <div className="mt-2">
                        <div className="w-2 h-2 bg-white rounded-full mx-auto animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300
                  ${region.color}
                `}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Regional Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left - Regional Overview */}
          <div className="lg:col-span-2">
            {/* Regional Card */}
            <div className={`bg-gradient-to-r ${selectedRegionData.color} rounded-3xl overflow-hidden shadow-2xl mb-8 animate-bobble`}>
              <div className="p-8 text-white">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Manager Image */}
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                    <img
                      src={selectedRegionData.profileImage}
                      alt={selectedRegionData.manager}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedRegionData.manager)}&background=10b981&color=fff&size=400&bold=true`;
                      }}
                    />
                  </div>
                  
                  {/* Manager Info */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-2">{selectedRegionData.region}</h3>
                      <div className="text-xl mb-4 text-white/90">{selectedRegionData.manager}</div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">{selectedRegionData.title}</span>
                      </div>
                    </div>
                    
                    {/* Bio */}
                    <p className="text-lg mb-6 text-white/95 leading-relaxed">
                      {selectedRegionData.bio}
                    </p>
                    
                    {/* Regional Stats */}
                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3">
                        <Building className="w-5 h-5" />
                        <span className="font-medium">{selectedRegionData.branchCount}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">{selectedRegionData.coverage}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">{selectedRegionData.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Focus Areas */}
              <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-white" />
                    <span className="font-bold text-white">Focus Areas</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedRegionData.focusAreas.map((area, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Responsibilities */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 animate-bobble" 
                style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-amber-600" />
                  Key Responsibilities
                </h3>
                <div className="space-y-4">
                  {selectedRegionData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Achievements */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 animate-bobble"
                style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-600" />
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  {selectedRegionData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                      <Award className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Regional Impact */}
          <div className="space-y-8">
            {/* Regional Performance */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 animate-bobble"
              style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Regional Performance</h3>
              <div className="space-y-6">
                {[
                  { metric: 'Growth Rate', value: '35%', icon: '📈', color: 'text-emerald-600' },
                  { metric: 'Customer Satisfaction', value: '96%', icon: '😊', color: 'text-blue-600' },
                  { metric: 'Operational Efficiency', value: '92%', icon: '⚡', color: 'text-amber-600' },
                  { metric: 'Team Performance', value: '94%', icon: '👥', color: 'text-purple-600' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900">{item.metric}</div>
                      </div>
                    </div>
                    <div className={`font-bold text-lg ${item.color}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Network */}
            <div className={`bg-gradient-to-r ${selectedRegionData.color} rounded-2xl p-8 text-white hover:shadow-2xl transition-shadow duration-300 animate-bobble`}
              style={{ animationDelay: '0.8s' }}>
              <h3 className="text-lg font-bold mb-4">Regional Contact</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email Regional Office</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call Regional Desk</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Visit Regional HQ</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Branch Network */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 animate-bobble"
              style={{ animationDelay: '1s' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Branch Network</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Branches</span>
                  <span className="font-bold text-amber-600">50+ Nationwide</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Regional Coverage</span>
                  <span className="font-bold text-amber-600">100% Ghana</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Staff Members</span>
                  <span className="font-bold text-amber-600">500+ Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Agents */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Local Branch Leadership Excellence
          </h3>
          <div className="mb-8">
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Profiles highlight academic qualifications, banking experience, key responsibilities, 
              achievements, and leadership style, emphasizing operational excellence and customer-focused 
              service delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branchAgents.map((agent, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-bobble"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-amber-300 mb-4">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(agent.name)}&background=f59e0b&color=fff&size=150&bold=true`}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{agent.name}</h4>
                  <div className="text-amber-700 font-medium text-sm mb-3">{agent.role}</div>
                  <div className="space-y-2 text-left w-full">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{agent.qualification}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{agent.experience}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{agent.achievements}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* National Coverage */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            National Coverage & Impact
          </h3>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  impact: 'Financial Inclusion',
                  value: '2M+',
                  description: 'Customers served across regions',
                  icon: '👥'
                },
                {
                  impact: 'Economic Impact',
                  value: '₵500M',
                  description: 'Capital deployed to communities',
                  icon: '💰'
                },
                {
                  impact: 'Job Creation',
                  value: '5,000+',
                  description: 'Direct and indirect employment',
                  icon: '🏢'
                },
                {
                  impact: 'Digital Adoption',
                  value: '85%',
                  description: 'Mobile banking penetration',
                  icon: '📱'
                },
                {
                  impact: 'Community Programs',
                  value: '200+',
                  description: 'Financial literacy initiatives',
                  icon: '🎓'
                },
                {
                  impact: 'Service Points',
                  value: '500+',
                  description: 'Branches & agent locations',
                  icon: '📍'
                },
                {
                  impact: 'SME Support',
                  value: '10,000+',
                  description: 'Small businesses supported',
                  icon: '💼'
                },
                {
                  impact: 'Customer Satisfaction',
                  value: '96%',
                  description: 'Regional service excellence',
                  icon: '⭐'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-bobble"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold text-amber-600 mb-2">{item.value}</div>
                  <div className="font-bold text-gray-900 mb-2">{item.impact}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Statement */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white text-center shadow-2xl animate-bobble">
          <h3 className="text-3xl font-bold mb-6">Integrated Leadership Structure</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Emerald Capital's ownership, governance, and leadership structure integrates 
            strategic shareholders, an experienced Board, a skilled executive team, and 
            regional managers. This alignment ensures robust governance, operational 
            excellence, innovative solutions, and sustainable growth across all regions 
            and services, creating long-term value for clients, communities, and investors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">Strategic Governance</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">Operational Excellence</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">Innovative Solutions</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">Sustainable Growth</div>
          </div>
        </div>

        {/* Contact Regional Network */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-amber-700 to-orange-700 rounded-3xl px-8 py-8 shadow-xl animate-bobble">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6" />
                <p className="text-lg font-bold">Regional Network Contact</p>
              </div>
              <p className="text-amber-100">
                Connect with our regional leadership for community banking, 
                local partnerships, or regional expansion opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flexRow items-center gap-4">
              <a 
                href="mailto:regional@emeraldcapitalgh.com" 
                className="bg-white text-amber-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Email Regional Network
              </a>
              <a 
                href="tel:+233208070011" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Call Regional Office
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes bobble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bobble {
          animation: bobble 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RegionalBranchManagersDetails;