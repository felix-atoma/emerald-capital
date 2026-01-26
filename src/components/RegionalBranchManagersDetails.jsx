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
  const [imageErrors, setImageErrors] = useState({});

  // Function to get manager image from public folder
  const getManagerImage = (regionId, managerName) => {
    const imageMap = {
      'greater-accra': 'Mr. Martin.jpg',
      'ashanti': 'Picture8.jpg',
      'ahafo': 'MRS. HELENA BOAMAH.jpg',
      'western-north': 'MS. BEATRICE BANNOR.jpg',
      'western': 'MISS. MERCY AHIANOR.jpg',
      'central': 'MISS. AMAZING N. EKUA ABBEY.jpg',
      'eastern': 'Mr. Emmanuel.jpg',
      'volta-oti': 'MISS. ESTHER TAKYI.jpg',
      'bono': 'MR. JUSTIN CUDJOE.png',
      'northern': 'MRS. SALMA ADAMS.png',
      'upper-west-east': 'MR. ABASS MOHAIDEEN.jpg',
      'diaspora': 'DR. GABRIEL AMOAKO.png'
    };
    
    const imageFilename = imageMap[regionId];
    const imageUrl = `/${imageFilename}`;
    
    const colorMap = {
      'greater-accra': '10b981',
      'ashanti': '3b82f6',
      'ahafo': '8b5cf6',
      'western-north': 'ec4899',
      'western': 'f43f5e',
      'central': '6366f1',
      'eastern': '14b8a6',
      'volta-oti': '06b6d4',
      'bono': 'f59e0b',
      'northern': 'ef4444',
      'upper-west-east': '8b5cf6',
      'diaspora': '475569'
    };
    
    const bgColor = colorMap[regionId] || '3b82f6';
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(managerName)}&background=${bgColor}&color=fff&size=400&bold=true&format=svg`;
    
    return { imageUrl, fallbackUrl };
  };

  // Handle image error
  const handleImageError = (regionId, e) => {
    console.warn(`Image failed to load for region ${regionId}:`, e.target.src);
    setImageErrors(prev => ({ ...prev, [regionId]: true }));
    const { fallbackUrl } = getManagerImage(regionId, '');
    e.target.src = fallbackUrl;
    e.target.className = e.target.className + ' bg-gray-200 p-2';
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
      manager: 'Mr. Justin Cudjoe',
      title: 'Regional Manager',
      subtitle: 'Operations & Community Engagement Leader',
      bio: 'Manages operations, staff training, and revenue targets; recognized for community engagement initiatives.',
      experience: '10+ years in operations and community banking',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-amber-600 to-yellow-500',
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
      region: 'Northern, Savannah & North East',
      manager: 'Mrs. Salma Adams',
      title: 'Regional Manager',
      subtitle: 'Rural Banking & Community Development Specialist',
      bio: 'Oversees branch performance and rural mobile banking adoption; emphasizes inclusive leadership.',
      experience: '12+ years in northern region banking and development',
      icon: <MapPin className="w-8 h-8" />,
      color: 'from-red-600 to-orange-500',
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
      manager: 'Dr. Gabriel Amoako',
      title: 'Diaspora Relations Manager',
      subtitle: 'International Banking & Foreign Relations Expert',
      bio: 'Manages diasporan affairs and foreign client relations.',
      experience: '15+ years in international banking and diaspora relations',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-slate-600 to-gray-500',
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

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full px-6 py-3 mb-6 animate-bobble">
            <MapPin className="w-5 h-5" />
            <span className="font-bold text-white">REGIONAL & BRANCH LEADERSHIP</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Grassroots Financial Leadership
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our regional and branch managers bring Emerald Capital's excellence to communities 
            across Ghana, driving financial inclusion and operational excellence at every level.
          </p>
        </div>

        {/* Regional Navigation */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {regionalManagers.map((region) => {
              const { imageUrl, fallbackUrl } = getManagerImage(region.id, region.manager);
              const hasError = imageErrors[region.id];
              
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`
                    group relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-300 
                    transform hover:scale-[1.02] active:scale-[0.98]
                    ${selectedRegion === region.id 
                      ? `bg-gradient-to-r ${region.color} shadow-xl md:shadow-2xl text-white` 
                      : 'bg-white border border-gray-200 shadow-sm hover:shadow-lg text-gray-900'
                    }
                  `}
                >
                  <div className="p-3 md:p-4">
                    <div className="flex flex-col items-center text-center">
                      {/* Region Image - UPDATED FOR FULL VISIBILITY */}
                      <div className={`
                        w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 
                        flex-shrink-0 flex items-center justify-center
                        ${selectedRegion === region.id ? 'border-3 border-white' : 'border-3 border-gray-200'}
                        ${hasError ? 'bg-gray-100' : 'bg-white'}
                      `}>
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={hasError ? fallbackUrl : imageUrl}
                            alt={region.manager}
                            className="w-full h-full object-contain p-1"
                            style={{
                              objectFit: 'contain',
                              maxWidth: '100%',
                              maxHeight: '100%'
                            }}
                            loading="lazy"
                            onError={(e) => handleImageError(region.id, e)}
                          />
                        </div>
                      </div>
                      
                      {/* Region Name */}
                      <div className={`
                        font-bold text-xs md:text-sm mb-1 truncate w-full
                        ${selectedRegion === region.id ? 'text-white' : 'text-gray-900'}
                      `}>
                        {region.region.split(' ')[0]}
                      </div>
                      
                      {/* Manager First Name */}
                      <div className={`
                        text-xs truncate w-full
                        ${selectedRegion === region.id ? 'text-white/80' : 'text-gray-600'}
                      `}>
                        {region.manager.split(' ')[0]}
                      </div>
                      
                      {/* Active Indicator */}
                      {selectedRegion === region.id && (
                        <div className="mt-2">
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full mx-auto animate-pulse"></div>
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
              );
            })}
          </div>
        </div>

        {/* Main Regional Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left - Regional Overview */}
          <div className="lg:col-span-2">
            {/* Regional Card - UPDATED FOR FULL IMAGE VISIBILITY */}
            <div className={`bg-gradient-to-r ${selectedRegionData.color} rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl mb-8 animate-bobble`}>
              <div className="p-6 md:p-8 text-white">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Manager Image - UPDATED FOR FULL VISIBILITY */}
                  <div className="
                    w-full lg:w-56 h-auto lg:h-56 mx-auto lg:mx-0
                    flex-shrink-0 relative overflow-hidden
                    bg-white rounded-xl md:rounded-2xl
                    border-4 border-white shadow-lg
                  ">
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                      <img
                        src={getManagerImage(selectedRegionData.id, selectedRegionData.manager).imageUrl}
                        alt={selectedRegionData.manager}
                        className="w-full h-full object-contain"
                        style={{
                          objectFit: 'contain',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          display: 'block'
                        }}
                        loading="lazy"
                        onError={(e) => handleImageError(selectedRegionData.id, e)}
                      />
                    </div>
                  </div>
                  
                  {/* Manager Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedRegionData.region}</h3>
                      <div className="text-lg md:text-xl mb-4 text-white/90">{selectedRegionData.manager}</div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">{selectedRegionData.title}</span>
                      </div>
                    </div>
                    
                    {/* Bio */}
                    <p className="text-base md:text-lg mb-6 text-white/95 leading-relaxed">
                      {selectedRegionData.bio}
                    </p>
                    
                    {/* Regional Stats */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
                        <Building className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-sm md:text-base font-medium">{selectedRegionData.branchCount}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-sm md:text-base font-medium">{selectedRegionData.coverage}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
                        <Clock className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-sm md:text-base font-medium">{selectedRegionData.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Focus Areas */}
              <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    <span className="font-bold text-white text-sm md:text-base">Focus Areas</span>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {selectedRegionData.focusAreas.map((area, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs md:text-sm text-white">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Responsibilities */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 animate-bobble"
                style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-100 to-teal-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Key Responsibilities</h3>
                </div>
                <ul className="space-y-4">
                  {selectedRegionData.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 animate-bobble"
                style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Notable Achievements</h3>
                </div>
                <ul className="space-y-4">
                  {selectedRegionData.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right - Regional Impact */}
          <div className="space-y-8">
            {/* Regional Performance */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 animate-bobble"
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
                        <div className="font-medium text-base text-gray-900">{item.metric}</div>
                      </div>
                    </div>
                    <div className={`font-bold text-lg ${item.color}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Network */}
            <div className={`bg-gradient-to-r ${selectedRegionData.color} rounded-2xl p-6 md:p-8 text-white hover:shadow-2xl transition-shadow duration-300 animate-bobble`}
              style={{ animationDelay: '0.8s' }}>
              <h3 className="text-lg font-bold mb-4">Regional Contact</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium text-base">Email Regional Office</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium text-base">Call Regional Desk</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium text-base">Visit Regional HQ</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Branch Network */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 animate-bobble"
              style={{ animationDelay: '1s' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Branch Network</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Branches</span>
                  <span className="font-bold text-amber-600 text-base">50+ Nationwide</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Regional Coverage</span>
                  <span className="font-bold text-amber-600 text-base">100% Ghana</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Staff Members</span>
                  <span className="font-bold text-amber-600 text-base">500+ Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* National Coverage */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12 shadow-xl border border-blue-100 animate-bobble">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center sm:text-left">Nationwide Coverage</h3>
          </div>
          <p className="text-gray-700 mb-6 text-lg text-center sm:text-left">
            With regional managers strategically positioned across all 16 regions of Ghana and extending to the diaspora community, 
            Emerald Capital ensures comprehensive financial coverage and localized expertise throughout the nation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Urban Centers', value: '100%', icon: '🏙️' },
              { label: 'Rural Coverage', value: '85%', icon: '🌾' },
              { label: 'Digital Access', value: '95%', icon: '📱' },
              { label: 'Diaspora Reach', value: '50+', icon: '🌍' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-gray-900 text-xl">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Statement */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Local Expertise, National Impact
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Each regional manager at Emerald Capital is not just an administrator but a community leader, 
            financial educator, and development partner. Their deep understanding of local contexts combined 
            with our national standards ensures that every Ghanaian, from urban centers to rural villages, 
            has access to world-class financial services tailored to their needs.
          </p>
        </div>

        {/* Contact Regional Network */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-400 rounded-3xl p-8 text-white shadow-2xl animate-bobble">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Connect with Our Regional Network</h3>
              <p className="text-amber-100 text-base">
                Ready to experience localized financial excellence? Contact your regional manager today.
              </p>
            </div>
            <button className="bg-white text-amber-600 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 transition-colors transform hover:scale-105 shadow-lg">
              Contact Regional Office
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for image handling */}
      <style jsx>{`
        @keyframes bobble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bobble {
          animation: bobble 3s ease-in-out infinite;
        }

        /* Ensure all images show full faces */
        .image-full-display {
          object-fit: contain !important;
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          display: block !important;
        }

        /* Prevent cropping */
        .no-crop {
          overflow: visible !important;
        }

        /* Image container */
        .image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          position: relative;
        }

        /* Navigation thumbnails */
        .nav-thumbnail {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        /* Main image */
        .main-image-wrapper {
          position: relative;
          width: 100%;
          height: auto;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default RegionalBranchManagersDetails;