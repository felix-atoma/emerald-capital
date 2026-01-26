// src/components/LeadershipOwnershipDetails.jsx
import React, { useState } from 'react';
import { 
  Users, Award, Crown, Building2, TrendingUp, Star, Shield, 
  Target, CheckCircle, Briefcase, Globe, Clock, FileText,
  Mail, Phone, Linkedin, Twitter, MapPin, ArrowRight,
  ChevronRight, BookOpen, Heart, Zap, Lightbulb,
  Building, PieChart, Users2, Award as AwardIcon,
  Shield as ShieldIcon, Target as TargetIcon
} from 'lucide-react';

const LeadershipOwnershipDetails = () => {
  const [selectedProfile, setSelectedProfile] = useState('founder');

  const leadershipProfiles = [
    {
      id: 'founder',
      name: 'Dr. Asamoah Koranteng Evans',
      title: 'Founder & Lead Investor',
      subtitle: 'Chairperson of the Board',
      role: 'Lead investor and strategic visionary providing overall direction and governance.',
      experience: '25+ years in banking, investment, and corporate governance',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-emerald-600 to-teal-500',
      profileImage: '/Picture1.jpg',
      responsibilities: [
        'Chair Board of Directors meetings',
        'Define long-term strategic vision',
        'Oversee major investment decisions',
        'Ensure ethical governance standards',
        'Drive strategic initiatives',
        'Mentor executive leadership'
      ],
      achievements: [
        'Founded Emerald Capital in 2010',
        'Led $500M+ in successful investments',
        'Established industry-leading governance',
        'Recognized with multiple industry awards',
        'Built strategic partnerships globally'
      ],
      education: 'PhD in Finance, MBA from Harvard Business School',
      expertise: 'Strategic Leadership, Investment Banking, Corporate Governance'
    },
    {
      id: 'executive',
      name: 'Mrs. Abena Konadu Asamoah-Koranteng',
      title: 'Executive Shareholder',
      subtitle: 'CEO & Executive Director',
      role: 'Aligns operational performance with shareholder value and drives business growth.',
      experience: 'Extensive experience in banking, fintech, and sustainable finance',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-teal-600 to-emerald-500',
      profileImage: '/Picture2.png',
      responsibilities: [
        'Lead day-to-day operations',
        'Execute strategic initiatives',
        'Manage shareholder relationships',
        'Drive sustainable finance initiatives',
        'Oversee digital transformation',
        'Ensure operational excellence'
      ],
      achievements: [
        'Expanded operations to 50+ branches',
        'Led successful fintech integration',
        'Achieved 98% customer satisfaction',
        'Implemented ESG framework',
        'Grew revenue by 200% in 5 years'
      ],
      education: 'MBA in Finance, CFA Charterholder',
      expertise: 'Operational Excellence, Fintech, Sustainable Finance'
    },
    {
      id: 'investors',
      name: 'Emerald Global Business',
      title: 'Private Investor Group',
      subtitle: 'Strategic Institutional Partners',
      role: 'Provide additional capital and expertise supporting regional growth and long-term objectives.',
      experience: 'Collective 100+ years in global investment and business development',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-slate-700 to-slate-800',
      profileImage:'/loggg.jpeg',
      responsibilities: [
        'Provide strategic capital',
        'Support regional expansion',
        'Share industry expertise',
        'Facilitate global partnerships',
        'Monitor investment performance',
        'Contribute to strategic planning'
      ],
      achievements: [
        'Funded successful regional expansion',
        'Introduced international best practices',
        'Established global banking partnerships',
        'Supported technology modernization',
        'Enhanced risk management frameworks'
      ],
      education: 'Diverse educational backgrounds including Ivy League and global institutions',
      expertise: 'Global Investments, Business Development, Risk Management'
    }
  ];

  const selectedProfileData = leadershipProfiles.find(profile => profile.id === selectedProfile);

  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5" />
            <span className="font-bold text-white">LEADERSHIP & OWNERSHIP PROFILE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Distinguished Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Emerald Capital is privately held by strategic investors with extensive 
            experience in finance, investment management, and business development.
          </p>
        </div>

        {/* Leadership Profile Navigation */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipProfiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => setSelectedProfile(profile.id)}
                className={`
                  group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02]
                  ${selectedProfile === profile.id 
                    ? `bg-gradient-to-r ${profile.color} shadow-2xl text-white` 
                    : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl text-gray-900'
                  }
                `}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    {/* Profile Image or Icon */}
                    <div className={`
                      w-20 h-20 rounded-full overflow-hidden border-4 flex-shrink-0
                      ${selectedProfile === profile.id ? 'border-white' : 'border-gray-100'}
                    `}>
                      {profile.profileImage ? (
                        <img
                          src={profile.profileImage}
                          alt={profile.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-r ${profile.color} flex items-center justify-center`}>
                          {profile.icon}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-left">
                      <div className={`
                        font-bold text-lg mb-1
                        ${selectedProfile === profile.id ? 'text-white' : 'text-gray-900'}
                      `}>
                        {profile.name.split(' ')[0]}
                      </div>
                      <div className={`
                        text-sm
                        ${selectedProfile === profile.id ? 'text-white/80' : 'text-gray-600'}
                      `}>
                        {profile.title}
                      </div>
                      {selectedProfile === profile.id && (
                        <div className="mt-2 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 animate-pulse" />
                          <span className="text-sm font-medium">View Profile</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Profile Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left - Profile Overview */}
          <div className="lg:col-span-2">
            {/* Profile Card */}
            <div className={`bg-gradient-to-r ${selectedProfileData.color} rounded-3xl overflow-hidden shadow-2xl mb-8`}>
              <div className="p-8 text-white">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Profile Image */}
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                    {selectedProfileData.profileImage ? (
                      <img
                        src={selectedProfileData.profileImage}
                        alt={selectedProfileData.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                        {selectedProfileData.icon}
                      </div>
                    )}
                  </div>
                  
                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-2">{selectedProfileData.name}</h3>
                      <div className="text-xl mb-4 text-white/90">{selectedProfileData.title}</div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">{selectedProfileData.subtitle}</span>
                      </div>
                    </div>
                    
                    {/* Role Description */}
                    <p className="text-lg mb-6 text-white/95 leading-relaxed">
                      {selectedProfileData.role}
                    </p>
                    
                    {/* Experience Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 mb-6">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{selectedProfileData.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Profile Stats */}
              <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                  {[
                    { label: 'Leadership Tenure', value: '10+ Years', icon: '👑' },
                    { label: 'Strategic Impact', value: '98%', icon: '🎯' },
                    { label: 'Industry Awards', value: '15+', icon: '🏆' },
                    { label: 'Team Leadership', value: '500+', icon: '👥' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="font-bold text-xl">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Responsibilities */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  Key Responsibilities
                </h3>
                <div className="space-y-4">
                  {selectedProfileData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Achievements */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-600" />
                  Major Achievements
                </h3>
                <div className="space-y-4">
                  {selectedProfileData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                      <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Expertise & Contact */}
          <div className="space-y-8">
            {/* Expertise & Education */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Expertise & Education</h3>
              <div className="space-y-6">
                {/* Education */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <BookOpen className="w-5 h-5" />
                    <span>Education</span>
                  </div>
                  <p className="text-gray-700 bg-emerald-50 rounded-xl p-4">
                    {selectedProfileData.education}
                  </p>
                </div>

                {/* Areas of Expertise */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <Lightbulb className="w-5 h-5" />
                    <span>Areas of Expertise</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProfileData.expertise.split(', ').map((area, index) => (
                      <div key={index} className="bg-gray-100 rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-700">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leadership Philosophy */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <Heart className="w-5 h-5" />
                    <span>Leadership Philosophy</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "Strategic vision combined with ethical governance and sustainable value creation for all stakeholders."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-4">Contact & Network</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Send Email</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn Profile</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Download Bio</span>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Shareholder Value */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Shareholder Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">ROE Contribution</span>
                  <span className="font-bold text-emerald-600">+18.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Strategic Decisions</span>
                  <span className="font-bold text-emerald-600">95% Success</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Value Creation</span>
                  <span className="font-bold text-emerald-600">$500M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ownership Structure */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ownership Structure & Governance
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                aspect: 'Ownership Model',
                description: 'Privately held by strategic investors with active governance participation',
                icon: '🏢',
                details: ['Strategic investors', 'Active governance', 'Long-term focus']
              },
              {
                aspect: 'Governance Framework',
                description: 'Robust oversight with independent board leadership',
                icon: '⚖️',
                details: ['Independent chair', 'Regular audits', 'Transparent reporting']
              },
              {
                aspect: 'Value Creation',
                description: 'Focus on sustainable growth and stakeholder returns',
                icon: '📈',
                details: ['18.5% ROE', 'Dividend growth', 'Capital appreciation']
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 text-lg mb-3">{item.aspect}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="text-sm text-emerald-700 bg-emerald-50 rounded-full px-3 py-1">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Impact */}
       

        {/* Contact Leadership */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Crown className="w-6 h-6" />
                <p className="text-lg font-bold">Leadership Engagement</p>
              </div>
              <p className="text-emerald-100">
                Connect with our leadership team for strategic partnerships, 
                investment opportunities, or governance discussions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="mailto:leadership@emeraldcapitalgh.com" 
                className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Email Leadership Office
              </a>
              <a 
                href="tel:+233208070008" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Call Executive Assistant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipOwnershipDetails;