import React, { useState } from 'react';
import { 
  Users, Award, Briefcase, TrendingUp, Zap, Target, Shield, Star,
  CheckCircle, Globe, Clock, FileText, Mail, Phone, Linkedin,
  BookOpen, Heart, Lightbulb, Building, Users2, Scale,
  GraduationCap, ArrowRight, ChevronRight, Target as TargetIcon,
  Award as AwardIcon, ShieldCheck, PieChart, Megaphone,
  Cpu, BarChart, Heart as HeartIcon, Zap as ZapIcon,
  Briefcase as BriefcaseIcon, Users as UsersIcon
} from 'lucide-react';

const ExecutiveLeadershipDetails = () => {
  const [selectedExecutive, setSelectedExecutive] = useState('ceo');
  const [imageErrors, setImageErrors] = useState({});

  // Function to get executive image from public folder
  const getExecutiveImage = (executiveId, name) => {
    const imageMap = {
      'ceo': 'MRS. GERTRUDE ASAMOAH.jpg',
      'coo': 'MR. SOLOMON AMANKWAH.jpg',
      'cfo': 'MR. ALBERT KWAME ACHIIFU.jpg',
      'cro': 'MR. ALBERT KWAME ACHIIFU.jpg',
      'cto': 'MR. MARTIN JONES-ARTHUR.jpg',
      'cmo': 'MISS. GLADYS ABENA YEBOAH.jpg',
      'cco': 'MR. CHARLES BINNEY ESQ.jpg',
      'cio': 'MISS. ANNA FRIMPONG.jpg',
      'chro': 'MISS. ANNA FRIMPONG.jpg',
      'cino': 'MR. CHRISTIAN YAW BOATENG.jpg'
    };
    
    const imageFilename = imageMap[executiveId];
    
    // Try different possible paths
    const possiblePaths = [
      `/${imageFilename}`,
      `/images/${imageFilename}`,
      `/team/${imageFilename}`,
      `/executives/${imageFilename}`,
      `./${imageFilename}`,
      imageFilename,
      imageFilename.toLowerCase(),
      imageFilename.replace(/\s+/g, '_'),
      imageFilename.replace(/\s+/g, '-')
    ];
    
    // Fallback avatar
    const colorMap = {
      'ceo': '10b981',
      'coo': '3b82f6',
      'cfo': '8b5cf6',
      'cro': 'ef4444',
      'cto': '6366f1',
      'cmo': 'ec4899',
      'cco': '6b7280',
      'cio': '14b8a6',
      'chro': 'f59e0b',
      'cino': '3b82f6'
    };
    
    const bgColor = colorMap[executiveId] || '3b82f6';
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bgColor}&color=fff&size=400&bold=true&length=2`;
    
    return { imagePaths: possiblePaths, fallbackUrl };
  };

  const executiveTeam = [
    {
      id: 'ceo',
      name: 'Mrs. Gertrude Asamoah',
      title: 'Chief Executive Officer',
      subtitle: 'Visionary Leader & Strategic Driver',
      role: 'Visionary leader with 20+ years in banking, fintech, and investment; drives corporate strategy, innovation, and inclusive growth.',
      experience: '20+ years in banking, fintech, and investment leadership',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-emerald-600 to-teal-500',
      responsibilities: [
        'Set corporate vision and strategic direction',
        'Lead executive team and organizational culture',
        'Drive innovation and digital transformation',
        'Oversee financial performance and growth',
        'Build strategic partnerships and alliances',
        'Champion inclusive growth initiatives'
      ],
      achievements: [
        'Led company to 200% growth in 5 years',
        'Championed successful digital transformation',
        'Established industry-leading governance',
        'Built high-performance executive team',
        'Expanded operations to 50+ branches'
      ],
      education: 'MBA in Strategic Management, Executive Leadership Program',
      expertise: 'Strategic Leadership, Digital Innovation, Inclusive Growth, Financial Management',
      certifications: 'Chartered Banker, Certified Digital Leader'
    },
    {
      id: 'coo',
      name: 'Mr. Solomon Amankwah',
      title: 'Chief Operating Officer',
      subtitle: 'Operations Excellence Leader',
      role: 'Oversees operations and process optimization; 18 years experience in banking and financial services.',
      experience: '18 years in banking operations and financial services',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-500',
      responsibilities: [
        'Oversee daily operations across all departments',
        'Optimize processes for maximum efficiency',
        'Ensure service delivery excellence',
        'Manage operational risk and continuity',
        'Lead operational technology implementation',
        'Drive cost optimization initiatives'
      ],
      achievements: [
        'Achieved 99% operational efficiency',
        'Reduced operational costs by 25%',
        'Implemented lean management systems',
        'Improved customer service scores by 30%',
        'Streamlined branch operations network'
      ],
      education: 'MBA in Operations Management, Six Sigma Black Belt',
      expertise: 'Operations Management, Process Optimization, Service Excellence, Cost Management',
      certifications: 'PMP, Six Sigma Master Black Belt'
    },
    {
      id: 'cfo',
      name: 'Mr. Emmanuel Osei Mensah',
      title: 'Chief Financial Officer',
      subtitle: 'Financial Strategy & Sustainability Leader',
      role: 'CA; leads financial planning, reporting, and risk management for sustainable growth.',
      experience: '15+ years in corporate finance and strategic planning',
      icon: <PieChart className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500',
      responsibilities: [
        'Develop and execute financial strategy',
        'Oversee financial reporting and compliance',
        'Manage capital allocation and investments',
        'Lead risk management framework',
        'Optimize tax and treasury management',
        'Guide sustainable growth initiatives'
      ],
      achievements: [
        'Achieved 18.5% ROE consistently',
        'Optimized capital structure efficiency',
        'Implemented advanced financial controls',
        'Led successful fundraising rounds',
        'Enhanced financial transparency'
      ],
      education: 'CA (Chartered Accountant), MBA in Finance',
      expertise: 'Financial Strategy, Risk Management, Capital Allocation, Sustainable Finance',
      certifications: 'Chartered Accountant, CFA Level III Candidate'
    },
    {
      id: 'cro',
      name: 'Mr. Albert Kwame Achiifu',
      title: 'Chief Risk Officer',
      subtitle: 'Enterprise Risk Management Leader',
      role: 'CFA; develops enterprise risk frameworks and ensures regulatory compliance.',
      experience: '12+ years in risk management and compliance',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'from-red-600 to-orange-500',
      responsibilities: [
        'Develop enterprise risk management framework',
        'Ensure regulatory compliance across operations',
        'Monitor and mitigate operational risks',
        'Lead credit and market risk assessment',
        'Manage compliance training programs',
        'Oversee internal control systems'
      ],
      achievements: [
        'Achieved 100% regulatory compliance',
        'Reduced risk incidents by 40%',
        'Implemented advanced risk analytics',
        'Enhanced fraud prevention systems',
        'Built comprehensive risk culture'
      ],
      education: 'CFA Charterholder, Masters in Risk Management',
      expertise: 'Enterprise Risk Management, Regulatory Compliance, Risk Analytics, Fraud Prevention',
      certifications: 'CFA Charterholder, Certified Risk Manager'
    },
    {
      id: 'cto',
      name: 'Mr. Martin Jones-Arthur',
      title: 'Chief Technology Officer',
      subtitle: 'Digital Transformation & Innovation Leader',
      role: 'Leads digital transformation, cybersecurity, and fintech innovation.',
      experience: '15+ years in technology leadership and digital innovation',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-indigo-600 to-violet-500',
      responsibilities: [
        'Lead digital transformation strategy',
        'Oversee technology infrastructure',
        'Ensure cybersecurity and data protection',
        'Drive fintech innovation and partnerships',
        'Manage technology team and resources',
        'Implement emerging technologies'
      ],
      achievements: [
        'Led successful core banking upgrade',
        'Achieved 99.9% system uptime',
        'Enhanced cybersecurity posture',
        'Launched innovative digital products',
        'Built agile technology team'
      ],
      education: 'MSc in Computer Science, Executive Technology Leadership',
      expertise: 'Digital Transformation, Cybersecurity, Fintech Innovation, System Architecture',
      certifications: 'CISSP, AWS Solutions Architect'
    },
    {
      id: 'cmo',
      name: 'Miss Gladys Abena Yeboah',
      title: 'Chief Marketing Officer',
      subtitle: 'Brand Strategy & Growth Leader',
      role: 'Leads brand strategy, market expansion, and strategic partnerships; promotes financial literacy.',
      experience: '10+ years in marketing and business development',
      icon: <Megaphone className="w-8 h-8" />,
      color: 'from-pink-600 to-rose-500',
      responsibilities: [
        'Develop and execute brand strategy',
        'Lead market expansion initiatives',
        'Build strategic partnerships',
        'Drive customer acquisition and retention',
        'Promote financial literacy programs',
        'Oversee digital marketing campaigns'
      ],
      achievements: [
        'Grew market share by 25%',
        'Launched successful brand campaigns',
        'Established key strategic partnerships',
        'Increased brand awareness by 40%',
        'Championed financial literacy initiatives'
      ],
      education: 'MBA in Marketing, Digital Marketing Certification',
      expertise: 'Brand Strategy, Market Expansion, Digital Marketing, Partnership Development',
      certifications: 'Digital Marketing Pro, Brand Strategy Expert'
    },
    {
      id: 'cco',
      name: 'Mr. Charles Binney Esq',
      title: 'Chief Compliance Officer',
      subtitle: 'Legal Integrity & Regulatory Leader',
      role: 'Legal and compliance expert; oversees corporate governance and regulatory affairs.',
      experience: '18+ years in legal and compliance leadership',
      icon: <Scale className="w-8 h-8" />,
      color: 'from-gray-600 to-slate-500',
      responsibilities: [
        'Ensure legal compliance and integrity',
        'Oversee corporate governance framework',
        'Manage regulatory relationships',
        'Lead compliance training programs',
        'Handle legal risk assessment',
        'Guide ethical business practices'
      ],
      achievements: [
        'Maintained 100% compliance record',
        'Enhanced governance framework',
        'Successfully handled regulatory audits',
        'Built compliance training academy',
        'Strengthened ethical culture'
      ],
      education: 'LLB, LLM in Corporate Law',
      expertise: 'Corporate Law, Regulatory Compliance, Governance, Legal Risk Management',
      certifications: 'Certified Compliance Professional, Legal Practitioner'
    },
    {
      id: 'cio',
      name: 'Miss Anna Frimpong',
      title: 'Chief Investment Officer',
      subtitle: 'Investment Strategy & Portfolio Leader',
      role: 'Manages investments, asset allocation, and portfolio performance with sustainable strategies.',
      experience: '12+ years in investment management',
      icon: <BarChart className="w-8 h-8" />,
      color: 'from-teal-600 to-cyan-500',
      responsibilities: [
        'Develop investment strategy and policy',
        'Manage portfolio allocation and performance',
        'Oversee investment research and analysis',
        'Lead sustainable investment initiatives',
        'Guide risk-adjusted return optimization',
        'Manage client investment advisory'
      ],
      achievements: [
        'Achieved 13.5% portfolio returns',
        'Implemented ESG investment framework',
        'Optimized asset allocation strategy',
        'Enhanced investment research capabilities',
        'Grew AUM by 200%'
      ],
      education: 'CFA Charterholder, MBA in Finance',
      expertise: 'Investment Strategy, Portfolio Management, Sustainable Investing, Risk Analysis',
      certifications: 'CFA Charterholder, ESG Investment Specialist'
    },
    {
      id: 'chro',
      name: 'Miss Anna Frimpong',
      title: 'Chief Human Resources Officer',
      subtitle: 'Talent & Culture Leadership',
      role: 'Leads HR, talent management, and organizational development; promotes diversity and inclusion.',
      experience: '15+ years in human resources leadership',
      icon: <Users2 className="w-8 h-8" />,
      color: 'from-amber-600 to-yellow-500',
      responsibilities: [
        'Lead talent acquisition and retention',
        'Oversee organizational development',
        'Drive diversity and inclusion initiatives',
        'Manage performance management systems',
        'Lead learning and development programs',
        'Oversee compensation and benefits'
      ],
      achievements: [
        'Achieved 92% employee engagement',
        'Enhanced diversity representation',
        'Built leadership development program',
        'Reduced turnover by 30%',
        'Implemented modern HR systems'
      ],
      education: 'MSc in Human Resources, Organizational Psychology',
      expertise: 'Talent Management, Organizational Development, Diversity & Inclusion, HR Strategy',
      certifications: 'SHRM-SCP, Certified HR Leader'
    },
    {
      id: 'cino',
      name: 'Mr. Christian Yaw Boateng',
      title: 'Chief Insurance Officer',
      subtitle: 'Insurance Operations Leader',
      role: 'Leads insurance brokerage operations and strategic growth initiatives.',
      experience: '15+ years in insurance and risk management',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-700 to-indigo-600',
      responsibilities: [
        'Lead insurance brokerage operations',
        'Develop insurance product strategy',
        'Manage underwriting and risk assessment',
        'Oversee claims management',
        'Build insurer relationships',
        'Drive insurance market growth'
      ],
      achievements: [
        'Grew insurance premiums by 35%',
        'Enhanced underwriting efficiency',
        'Improved claims processing speed',
        'Expanded insurance product range',
        'Strengthened insurer partnerships'
      ],
      education: 'MBA in Risk Management, Insurance Certification',
      expertise: 'Insurance Operations, Risk Underwriting, Claims Management, Product Development',
      certifications: 'Chartered Insurer, Certified Insurance Professional'
    }
  ];

  const selectedExecutiveData = executiveTeam.find(exec => exec.id === selectedExecutive);
  const { imagePaths, fallbackUrl } = getExecutiveImage(selectedExecutive, selectedExecutiveData.name);

  // Handle image error
  const handleImageError = (e, executiveId, name, paths, currentIndex = 0) => {
    console.warn(`Image ${paths[currentIndex]} failed to load for ${name}`);
    
    // Try next path in the array
    if (currentIndex < paths.length - 1) {
      e.target.src = paths[currentIndex + 1];
      e.target.onerror = (err) => handleImageError(err, executiveId, name, paths, currentIndex + 1);
    } else {
      // All paths failed, use fallback
      console.log(`All image paths failed for ${name}, using fallback`);
      e.target.src = fallbackUrl;
      e.target.className = e.target.className + ' bg-gray-200 p-2 object-contain';
      
      // Mark this executive's image as failed
      setImageErrors(prev => ({ ...prev, [executiveId]: true }));
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6">
            <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold text-white text-sm md:text-base">EXECUTIVE LEADERSHIP TEAM</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Strategic Operational Leadership
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our executive leaders bring specialized expertise across all functional areas 
            to drive operational excellence, innovation, and sustainable growth.
          </p>
        </div>

        {/* Executive Navigation */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {executiveTeam.map((executive) => {
              const { imagePaths: navImagePaths, fallbackUrl: navFallbackUrl } = getExecutiveImage(executive.id, executive.name);
              
              return (
                <button
                  key={executive.id}
                  onClick={() => setSelectedExecutive(executive.id)}
                  className={`
                    group relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-300
                    ${selectedExecutive === executive.id 
                      ? `bg-gradient-to-r ${executive.color} shadow-lg md:shadow-2xl text-white scale-105` 
                      : 'bg-white border border-gray-200 shadow-md hover:shadow-lg text-gray-900'
                    }
                  `}
                >
                  <div className="p-3 md:p-4">
                    <div className="flex flex-col items-center text-center">
                      {/* Profile Image in Navigation - FIXED */}
                      <div className={`
                        w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 mb-2 md:mb-3 flex-shrink-0
                        ${selectedExecutive === executive.id ? 'border-white' : 'border-gray-200'}
                      `}>
                        <img
                          src={navImagePaths[0]}
                          alt={executive.name}
                          className="w-full h-full object-contain object-center"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            objectPosition: 'center',
                            transform: 'scale(1.1)' // Slightly zoom in to show faces better
                          }}
                          loading="lazy"
                          onError={(e) => handleImageError(e, executive.id, executive.name, navImagePaths)}
                        />
                      </div>
                      
                      <div className={`
                        font-bold text-xs md:text-sm mb-1 line-clamp-1
                        ${selectedExecutive === executive.id ? 'text-white' : 'text-gray-900'}
                      `}>
                        {executive.title.split(' ')[0]}
                      </div>
                      <div className={`
                        text-xs line-clamp-1
                        ${selectedExecutive === executive.id ? 'text-white/80' : 'text-gray-600'}
                      `}>
                        {executive.name.split(' ')[0]}
                      </div>
                      
                      {selectedExecutive === executive.id && (
                        <div className="mt-1 md:mt-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Executive Details */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Left - Executive Overview */}
          <div className="lg:col-span-2">
            {/* Executive Card */}
            <div className={`bg-gradient-to-r ${selectedExecutiveData.color} rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl mb-6 md:mb-8`}>
              <div className="p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  {/* Executive Image - FIXED */}
                  <div className="w-full md:w-48 h-48 rounded-xl md:rounded-2xl overflow-hidden border-4 border-white shadow-lg md:shadow-xl flex-shrink-0 bg-gray-100 mx-auto md:mx-0">
                    <img
                      src={imagePaths[0]}
                      alt={selectedExecutiveData.name}
                      className="w-full h-full object-contain object-center"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        backgroundColor: '#f8fafc' // Light background for better contrast
                      }}
                      loading="lazy"
                      onError={(e) => handleImageError(e, selectedExecutive, selectedExecutiveData.name, imagePaths)}
                    />
                  </div>
                  
                  {/* Executive Info */}
                  <div className="flex-1">
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedExecutiveData.name}</h3>
                      <div className="text-lg md:text-xl mb-3 md:mb-4 text-white/90">{selectedExecutiveData.title}</div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2">
                        <Award className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-medium">{selectedExecutiveData.subtitle}</span>
                      </div>
                    </div>
                    
                    {/* Role Description */}
                    <p className="text-base md:text-lg mb-4 md:mb-6 text-white/95 leading-relaxed">
                      {selectedExecutiveData.role}
                    </p>
                    
                    {/* Experience Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 md:py-3 mb-4 md:mb-6">
                      <Clock className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-sm md:text-base font-medium">{selectedExecutiveData.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    <span className="font-bold text-white text-sm md:text-base">Certifications & Qualifications</span>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selectedExecutiveData.certifications.split(', ').map((cert, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm text-white">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Key Responsibilities */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                  Key Responsibilities
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {selectedExecutiveData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-emerald-50 rounded-lg md:rounded-xl hover:bg-emerald-100 transition-colors">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Achievements */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                  Key Achievements
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {selectedExecutiveData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-amber-50 rounded-lg md:rounded-xl hover:bg-amber-100 transition-colors">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Expertise & Contact */}
          <div className="space-y-6 md:space-y-8">
            {/* Expertise & Education */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Expertise & Education</h3>
              <div className="space-y-4 md:space-y-6">
                {/* Education */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Education</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 bg-emerald-50 rounded-lg md:rounded-xl p-3 md:p-4">
                    {selectedExecutiveData.education}
                  </p>
                </div>

                {/* Areas of Expertise */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Areas of Expertise</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedExecutiveData.expertise.split(', ').map((area, index) => (
                      <div key={index} className="bg-gray-100 rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-center text-xs md:text-sm font-medium text-gray-700 hover:bg-emerald-100 transition-colors">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leadership Philosophy */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Leadership Philosophy</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 italic bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4">
                    "Leading with integrity, driving innovation, and creating sustainable value for all stakeholders."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Network */}
            <div className={`bg-gradient-to-r ${selectedExecutiveData.color} rounded-xl md:rounded-2xl p-6 md:p-8 text-white`}>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact & Network</h3>
              <div className="space-y-3 md:space-y-4">
                <button className="w-full flex items-center gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/20 transition-colors group">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base font-medium">Send Email</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/20 transition-colors group">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base font-medium">LinkedIn Profile</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/20 transition-colors group">
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base font-medium">Download Bio</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Executive Impact */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Executive Impact</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm text-gray-600">Performance Score</span>
                  <span className="font-bold text-emerald-600 text-sm md:text-base">96% Rating</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm text-gray-600">Team Leadership</span>
                  <span className="font-bold text-emerald-600 text-sm md:text-base">50-200 Team</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm text-gray-600">Initiative Success</span>
                  <span className="font-bold text-emerald-600 text-sm md:text-base">95% Achieved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Executive Team */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl md:rounded-3xl px-6 md:px-8 py-6 md:py-8 shadow-xl">
            <div className="text-center md:text-left text-white">
              <div className="flex items-center gap-2 md:gap-3 mb-2 justify-center md:justify-start">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                <p className="text-base md:text-lg font-bold">Executive Office Contact</p>
              </div>
              <p className="text-emerald-100 text-sm md:text-base">
                Connect with our executive leadership team for strategic partnerships, 
                operational collaboration, or leadership engagements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a 
                href="mailto:executive@emeraldcapitalgh.com" 
                className="bg-white text-emerald-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                Email Executive Office
              </a>
              <a 
                href="tel:+233208070010" 
                className="bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-white/10 transition-colors text-sm md:text-base"
              >
                Call Executive Assistant
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx>{`
        @keyframes bobble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Responsive image container */
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .image-container img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default ExecutiveLeadershipDetails;