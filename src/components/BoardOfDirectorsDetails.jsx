import React, { useState } from 'react';
import { 
  Users, Award, Crown, Shield, Target, TrendingUp, Star, Gavel,
  CheckCircle, Briefcase, Globe, Clock, FileText, Mail, 
  Phone, Linkedin, BookOpen, Heart, Zap, Lightbulb,
  Building, Users2, Scale, GraduationCap, ArrowRight,
  ChevronRight, Target as TargetIcon, Award as AwardIcon,
  ShieldCheck, Users as UsersIcon, User
} from 'lucide-react';

const BoardOfDirectorsDetails = () => {
  const [selectedDirector, setSelectedDirector] = useState('chairperson');
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoaded, setImageLoaded] = useState({});

  // Function to get director image from public folder
  const getDirectorImage = (directorId, directorName) => {
    const imageMap = {
      'chairperson': 'DR. ASAMOAH KORANTENG EVANS.jpg',
      'nonexecutive1': 'DR. MRS.  OPHELIA OSEI ULZEN.jpg',
      'nonexecutive2': 'REV. FREDERICK APPIAH.png',
      'executive': 'MRS. GERTRUDE ASAMOAH.jpg'
    };
    
    const imageFilename = imageMap[directorId];
    
    // Try multiple possible paths and formats
    const possiblePaths = [
      `/${imageFilename}`,
      `/images/${imageFilename}`,
      `/team/${imageFilename}`,
      `/board/${imageFilename}`,
      `/directors/${imageFilename}`,
      `./${imageFilename}`,
      imageFilename,
      // Try different filename formats
      imageFilename.toLowerCase(),
      imageFilename.replace(/\s+/g, '_'),
      imageFilename.replace(/\s+/g, '-'),
      imageFilename.replace('DR. ', ''),
      imageFilename.replace('MRS. ', ''),
      imageFilename.replace('DR. MRS. ', ''),
      imageFilename.replace('REV. ', ''),
      imageFilename.replace('.jpg', '.jpeg'),
      imageFilename.replace('.jpg', '.png'),
      imageFilename.replace('.png', '.jpg'),
      imageFilename.replace('.png', '.jpeg')
    ];
    
    // Create a fallback avatar URL
    const colorMap = {
      'chairperson': '3b82f6',
      'nonexecutive1': '8b5cf6',
      'nonexecutive2': '6366f1',
      'executive': '06b6d4'
    };
    
    const bgColor = colorMap[directorId] || '3b82f6';
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(directorName)}&background=${bgColor}&color=fff&size=400&bold=true&format=svg`;
    
    return { imagePaths: possiblePaths, fallbackUrl };
  };

  // Handle image error with multiple fallback attempts
  const handleImageError = (directorId, e, directorName, paths, currentIndex = 0) => {
    console.warn(`Image ${paths[currentIndex]} failed to load for ${directorName}`);
    
    // Try next path in the array
    if (currentIndex < paths.length - 1) {
      e.target.src = paths[currentIndex + 1];
      e.target.onerror = (err) => handleImageError(directorId, err, directorName, paths, currentIndex + 1);
    } else {
      // All paths failed, use fallback
      console.log(`All image paths failed for ${directorName}, using fallback`);
      const { fallbackUrl } = getDirectorImage(directorId, directorName);
      e.target.src = fallbackUrl;
      e.target.className = e.target.className.replace('object-cover', 'object-contain') + ' bg-gray-100 p-2';
      setImageErrors(prev => ({ ...prev, [directorId]: true }));
    }
  };

  // Handle image load
  const handleImageLoad = (directorId) => {
    setImageLoaded(prev => ({ ...prev, [directorId]: true }));
  };

  const boardMembers = [
    {
      id: 'chairperson',
      name: 'Dr. Asamoah Koranteng Evans',
      title: 'Chairperson',
      subtitle: 'Board Strategy & Governance Leader',
      role: 'Oversees governance and Board strategy; mentor in finance; advocate for SME development and financial literacy.',
      experience: '25+ years in banking, investment, and corporate governance',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-blue-600 to-indigo-500',
      responsibilities: [
        'Lead Board meetings and strategic discussions',
        'Oversee corporate governance framework',
        'Mentor executive leadership team',
        'Advocate for SME development',
        'Promote financial literacy initiatives',
        'Ensure ethical business practices'
      ],
      achievements: [
        'Established robust governance framework',
        'Mentored 50+ finance professionals',
        'Championed SME support programs',
        'Received industry leadership awards',
        'Built strategic global partnerships'
      ],
      education: 'PhD in Finance, Executive Education - Harvard Business School',
      expertise: 'Corporate Governance, Strategic Leadership, SME Development, Financial Literacy',
      boardCommittees: ['Chair - Governance Committee', 'Member - Investment Committee']
    },
    {
      id: 'nonexecutive1',
      name: 'Dr. Mrs. Ophelia Osei Ulzen',
      title: 'Non-Executive Director',
      subtitle: 'Governance & Compliance Expert',
      role: 'Advises on governance, strategic investments, and regulatory compliance; mentor for women in finance.',
      experience: '20+ years in financial services, compliance, and corporate governance',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500',
      responsibilities: [
        'Advise on regulatory compliance matters',
        'Monitor strategic investment decisions',
        'Mentor women in finance leadership',
        'Review risk management frameworks',
        'Ensure ethical standards compliance',
        'Participate in audit committee'
      ],
      achievements: [
        'Enhanced compliance frameworks',
        'Mentored 30+ women leaders',
        'Improved risk assessment processes',
        'Led successful regulatory audits',
        'Championed diversity initiatives'
      ],
      education: 'PhD in Business Ethics, MBA in Finance',
      expertise: 'Regulatory Compliance, Risk Management, Women Leadership, Corporate Ethics',
      boardCommittees: ['Chair - Audit Committee', 'Member - Risk Committee']
    },
    {
      id: 'nonexecutive2',
      name: 'Rev. Frederick Appiah',
      title: 'Non-Executive Director',
      subtitle: 'Corporate Law & Governance Specialist',
      role: 'Expert in corporate law and governance; ensures compliance with national and international standards.',
      experience: '30+ years in corporate law, governance, and ethical leadership',
      icon: <Scale className="w-8 h-8" />,
      color: 'from-indigo-600 to-blue-500',
      responsibilities: [
        'Ensure legal compliance standards',
        'Review corporate governance policies',
        'Advise on international regulations',
        'Monitor ethical compliance',
        'Participate in legal risk assessment',
        'Guide corporate social responsibility'
      ],
      achievements: [
        'Developed comprehensive governance manual',
        'Ensured 100% legal compliance',
        'Established international standards',
        'Led successful legal reforms',
        'Championed ethical business practices'
      ],
      education: 'LLM in Corporate Law, Theology Degree',
      expertise: 'Corporate Law, International Governance, Ethical Leadership, Legal Compliance',
      boardCommittees: ['Chair - Legal Committee', 'Member - Ethics Committee']
    },
    {
      id: 'executive',
      name: 'Mrs. Gertrude Asamoah',
      title: 'Executive Director / CEO',
      subtitle: 'Operational Leadership & Digital Transformation',
      role: 'Contributes to Board strategy while leading corporate operations and digital transformation.',
      experience: '15+ years in banking operations, digital transformation, and strategic leadership',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-cyan-600 to-teal-500',
      responsibilities: [
        'Lead corporate operations strategy',
        'Drive digital transformation initiatives',
        'Execute Board strategic decisions',
        'Manage executive team performance',
        'Oversee technology implementation',
        'Ensure operational excellence'
      ],
      achievements: [
        'Led successful digital transformation',
        'Expanded branch network by 200%',
        'Achieved 99% operational efficiency',
        'Implemented modern banking systems',
        'Grew customer base by 150%'
      ],
      education: 'MBA in Technology Management, Executive Leadership Program',
      expertise: 'Operational Excellence, Digital Banking, Strategic Execution, Technology Leadership',
      boardCommittees: ['Member - Executive Committee', 'Member - Technology Committee']
    }
  ];

  const selectedDirectorData = boardMembers.find(director => director.id === selectedDirector);
  const { imagePaths, fallbackUrl } = getDirectorImage(selectedDirector, selectedDirectorData.name);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6">
            <Crown className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <span className="font-bold text-white text-sm md:text-base">DISTINGUISHED BOARD OF DIRECTORS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Governance & Strategic Leadership
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our Board brings diverse expertise in governance, finance, law, and operations 
            to provide strategic oversight and ensure sustainable growth.
          </p>
        </div>

        {/* Board Navigation */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {boardMembers.map((director) => {
              const { imagePaths: paths } = getDirectorImage(director.id, director.name);
              const hasError = imageErrors[director.id];
              
              return (
                <button
                  key={director.id}
                  onClick={() => setSelectedDirector(director.id)}
                  className={`
                    group relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-300 
                    transform hover:scale-[1.02] active:scale-[0.98]
                    ${selectedDirector === director.id 
                      ? `bg-gradient-to-r ${director.color} shadow-xl md:shadow-2xl text-white` 
                      : 'bg-white border border-gray-200 shadow-sm hover:shadow-lg text-gray-900'
                    }
                  `}
                >
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      {/* Director Image - Full image visible, no cropping */}
                      <div className={`
                        relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 flex-shrink-0 
                        ${selectedDirector === director.id ? 'border-white' : 'border-gray-200'}
                        ${hasError ? 'bg-gray-100' : 'bg-gradient-to-br from-gray-50 to-gray-100'}
                      `}>
                        <img
                          src={hasError ? fallbackUrl : paths[0]}
                          alt={director.name}
                          className="w-full h-full object-contain p-0.5"
                          loading="lazy"
                          onError={(e) => handleImageError(director.id, e, director.name, paths)}
                          onLoad={() => handleImageLoad(director.id)}
                        />
                        {/* Loading overlay */}
                        {!imageLoaded[director.id] && !hasError && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="text-left flex-1 min-w-0">
                        <div className={`
                          font-bold text-sm md:text-lg mb-1 truncate
                          ${selectedDirector === director.id ? 'text-white' : 'text-gray-900'}
                        `}>
                          {director.name.split(' ')[0]}
                        </div>
                        <div className={`
                          text-xs md:text-sm truncate
                          ${selectedDirector === director.id ? 'text-white/80' : 'text-gray-600'}
                        `}>
                          {director.title}
                        </div>
                        {selectedDirector === director.id && (
                          <div className="mt-1 md:mt-2 flex items-center gap-1 md:gap-2">
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
                            <span className="text-xs md:text-sm font-medium">View Profile</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300
                    ${director.color}
                  `}></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Director Details */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Left - Director Overview */}
          <div className="lg:col-span-2">
            {/* Director Card */}
            <div className={`bg-gradient-to-r ${selectedDirectorData.color} rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl mb-6 md:mb-8`}>
              <div className="p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  {/* Director Image - Full image visible, no cropping */}
                  <div className="
                    relative w-48 h-64 md:w-56 md:h-72 rounded-xl md:rounded-2xl overflow-hidden 
                    border-4 border-white shadow-lg md:shadow-xl flex-shrink-0 mx-auto md:mx-0
                    bg-gradient-to-br from-white to-gray-50
                  ">
                    <img
                      src={imagePaths[0]}
                      alt={selectedDirectorData.name}
                      className="w-full h-full object-contain p-1"
                      loading="lazy"
                      onError={(e) => handleImageError(selectedDirector, e, selectedDirectorData.name, imagePaths)}
                      onLoad={() => handleImageLoad(selectedDirector)}
                    />
                    
                    {/* Loading overlay */}
                    {!imageLoaded[selectedDirector] && !imageErrors[selectedDirector] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl md:rounded-2xl"></div>
                    )}
                  </div>
                  
                  {/* Director Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedDirectorData.name}</h3>
                      <div className="text-lg md:text-xl mb-4 text-white/90">{selectedDirectorData.title}</div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2">
                        <Award className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-medium">{selectedDirectorData.subtitle}</span>
                      </div>
                    </div>
                    
                    {/* Role Description */}
                    <p className="text-base md:text-lg mb-4 md:mb-6 text-white/95 leading-relaxed">
                      {selectedDirectorData.role}
                    </p>
                    
                    {/* Experience Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 md:py-3">
                      <Clock className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-sm md:text-base font-medium">{selectedDirectorData.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Board Committees */}
              <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    <span className="font-bold text-white text-sm md:text-base">Board Committees</span>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                    {selectedDirectorData.boardCommittees.map((committee, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs md:text-sm text-white">
                        {committee}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Key Responsibilities */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200 hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  Board Responsibilities
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {selectedDirectorData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-blue-50 rounded-lg md:rounded-xl hover:bg-blue-100 transition-colors">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-sm md:text-base text-gray-700">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Achievements */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200 hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                  Key Achievements
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {selectedDirectorData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-amber-50 rounded-lg md:rounded-xl hover:bg-amber-100 transition-colors">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-600 flex-shrink-0 mt-1" />
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
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-200 hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Expertise & Education</h3>
              <div className="space-y-4 md:space-y-6">
                {/* Education */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-blue-700 font-medium">
                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Education</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 bg-blue-50 rounded-lg md:rounded-xl p-3 md:p-4">
                    {selectedDirectorData.education}
                  </p>
                </div>

                {/* Areas of Expertise */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-blue-700 font-medium">
                    <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Areas of Expertise</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedDirectorData.expertise.split(', ').map((area, index) => (
                      <div key={index} className="bg-gray-100 rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-center text-xs md:text-sm font-medium text-gray-700 hover:bg-blue-100 transition-colors">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Board Philosophy */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-blue-700 font-medium">
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Governance Philosophy</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 italic bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4">
                    "Ethical governance, strategic oversight, and sustainable value creation for all stakeholders."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Network */}
            <div className={`bg-gradient-to-r ${selectedDirectorData.color} rounded-xl md:rounded-2xl p-6 md:p-8 text-white hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300`}>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact & Network</h3>
              <div className="space-y-3 md:space-y-4">
                <button className="w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/20 transition-colors group">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">Send Email</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/20 transition-colors group">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">LinkedIn Profile</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/20 transition-colors group">
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">Download Bio</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Board Impact */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Board Impact</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm text-gray-600">Governance Score</span>
                  <span className="font-bold text-blue-600 text-sm md:text-base">A+ Rating</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm text-gray-600">Strategic Decisions</span>
                  <span className="font-bold text-blue-600 text-sm md:text-base">98% Success</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm text-gray-600">Board Meetings</span>
                  <span className="font-bold text-blue-600 text-sm md:text-base">100% Attendance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Board Composition */}
        <div className="mt-12 md:mt-20 bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl p-6 md:p-8 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Board Composition & Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                category: 'Governance Expertise',
                value: '100%',
                description: 'All directors bring strong governance experience',
                icon: '⚖️'
              },
              {
                category: 'Industry Experience',
                value: '25+ Years',
                description: 'Average industry experience per director',
                icon: '🏢'
              },
              {
                category: 'Diversity',
                value: '50% Female',
                description: 'Gender diversity on the board',
                icon: '👥'
              },
              {
                category: 'Board Independence',
                value: '75%',
                description: 'Independent non-executive directors',
                icon: '🎯'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">{item.value}</div>
                <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{item.category}</h4>
                <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Board Functions */}
        <div className="mt-12 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Board Committees & Functions
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  committee: 'Governance Committee',
                  role: 'Oversees corporate governance framework',
                  chair: 'Dr. Asamoah Koranteng Evans',
                  icon: '👑'
                },
                {
                  committee: 'Audit Committee',
                  role: 'Reviews financial reporting and internal controls',
                  chair: 'Dr. Ophilia Osei',
                  icon: '📊'
                },
                {
                  committee: 'Risk Committee',
                  role: 'Monitors risk management strategies',
                  chair: 'Dr. Ophilia Osei',
                  icon: '🛡️'
                },
                {
                  committee: 'Investment Committee',
                  role: 'Reviews strategic investment decisions',
                  chair: 'Dr. Asamoah Koranteng Evans',
                  icon: '💼'
                },
                {
                  committee: 'Legal Committee',
                  role: 'Ensures legal and regulatory compliance',
                  chair: 'Rev. Frederick Appiah',
                  icon: '⚖️'
                },
                {
                  committee: 'Technology Committee',
                  role: 'Oversees digital transformation initiatives',
                  chair: 'Mrs. Gertrude Asamoah',
                  icon: '💻'
                },
                {
                  committee: 'Ethics Committee',
                  role: 'Monitors ethical standards and CSR',
                  chair: 'Rev. Frederick Appiah',
                  icon: '❤️'
                },
                {
                  committee: 'Executive Committee',
                  role: 'Manages day-to-day board functions',
                  chair: 'Mrs. Gertrude Asamoah',
                  icon: '⚡'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-xl md:text-2xl mb-2 md:mb-3">{item.icon}</div>
                  <div className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">{item.committee}</div>
                  <div className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">{item.role}</div>
                  <div className="text-xs md:text-sm text-blue-600 font-medium">Chair: {item.chair}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Board */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl px-6 md:px-8 py-6 md:py-8 shadow-xl">
            <div className="text-center md:text-left text-white">
              <div className="flex items-center gap-2 md:gap-3 mb-2 justify-center md:justify-start">
                <Crown className="w-5 h-5 md:w-6 md:h-6" />
                <p className="text-base md:text-lg font-bold">Board Secretariat</p>
              </div>
              <p className="text-blue-100 text-sm md:text-base">
                For board-related inquiries, governance matters, or strategic partnerships, 
                contact our Board Secretariat.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a 
                href="mailto:board@emeraldcapitalgh.com" 
                className="bg-white text-blue-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                Email Board Secretariat
              </a>
              <a 
                href="tel:+233208070009" 
                className="bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-white/10 transition-colors text-sm md:text-base"
              >
                Call Board Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectorsDetails;