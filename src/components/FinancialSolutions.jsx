import React, { useState, useRef, useEffect } from 'react';
import { Target, Rocket, Shield, Users, Zap, Heart, Mail, ArrowRight, ChevronRight, Star, TrendingUp, Globe, Lock } from 'lucide-react';

export default function FinancialSolutions({ imageUrl = "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" }) {
  const [activeTab, setActiveTab] = useState('vision');
  const [hoveredValue, setHoveredValue] = useState(null);
  const contentRef = useRef(null);

  const tabContent = {
    vision: {
      title: "Our Vision",
      icon: Target,
      description: "To become the leading catalyst for financial inclusion and sustainable prosperity across Ghana, empowering individuals and communities to achieve economic independence and lasting growth.",
      highlights: [
        "Transformative financial access",
        "Sustainable community development",
        "Innovation-driven economic growth",
        "Empowered financial futures"
      ]
    },
    mission: {
      title: "Our Mission",
      icon: Rocket,
      description: "Emerald Capital is dedicated to delivering accessible, ethical, and innovative financial solutions that uplift individuals and businesses. We combine responsible lending practices with cutting-edge technology to create pathways to prosperity.",
      extended: [
        "Provide accessible financial services to underserved communities",
        "Foster sustainable economic growth through responsible lending",
        "Leverage technology to enhance financial inclusion",
        "Build lasting partnerships for community development",
        "Measure success by client progress and community impact"
      ]
    },
    values: {
      title: "Core Values",
      icon: Shield,
      description: "The foundational principles that guide every decision, relationship, and service we provide at Emerald Capital."
    }
  };

  const coreValues = [
    {
      id: 1,
      title: "Empowerment Through Access",
      icon: Users,
      tagline: "Unlocking potential with inclusive financial opportunities",
      description: "We provide tailored financial solutions that unlock potential, enabling individuals and businesses to grow with confidence and security.",
      color: "from-emerald-500 to-emerald-600",
      stats: "10K+ Lives Impacted"
    },
    {
      id: 2,
      title: "Integrity & Accountability",
      icon: Shield,
      tagline: "Building trust through transparency and responsibility",
      description: "Honesty, transparency, and responsible practices guide every decision, ensuring trust and creating meaningful, lasting impact.",
      color: "from-teal-500 to-emerald-600",
      stats: "98% Client Trust Rating"
    },
    {
      id: 3,
      title: "Sustainable Growth",
      icon: Globe,
      tagline: "Creating lasting impact through equitable progress",
      description: "We champion equitable financial access while investing in long-term, sustainable progress for communities and the environment.",
      color: "from-emerald-400 to-teal-500",
      stats: "₵50M+ Capital Deployed"
    },
    {
      id: 4,
      title: "Innovation for Impact",
      icon: Zap,
      tagline: "Delivering solutions that evolve with client needs",
      description: "Our services continuously evolve to meet practical needs, combining simplicity, accessibility, and technological effectiveness.",
      color: "from-cyan-400 to-emerald-500",
      stats: "24/7 Digital Access"
    },
    {
      id: 5,
      title: "Collaborative Partnership",
      icon: Heart,
      tagline: "Fostering relationships built on respect and empathy",
      description: "We build collaborative relationships, valuing every client and partner with empathy, dignity, and mutual respect.",
      color: "from-emerald-400 to-cyan-500",
      stats: "500+ Community Partners"
    }
  ];

  const solutions = [
    { icon: TrendingUp, title: "Business Loans", description: "Growth capital for SMEs" },
    { icon: Shield, title: "Personal Banking", description: "Secure personal accounts" },
    { icon: Zap, title: "Digital Solutions", description: "Mobile banking services" },
    { icon: Globe, title: "Investment Plans", description: "Wealth growth strategies" },
    { icon: Lock, title: "Secure Transactions", description: "Protected financial operations" },
    { icon: Users, title: "Community Programs", description: "Local development initiatives" }
  ];

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contentRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 backdrop-blur-sm mb-8">
            <Star className="w-4 h-4 text-emerald-500 mr-2" />
            <span className="text-emerald-700 font-semibold text-sm tracking-wider">
              FINANCIAL EXCELLENCE
            </span>
            <Star className="w-4 h-4 text-emerald-500 ml-2" />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Drive Your Progress with
            <br />
            <span className="relative inline-block">
              <span className="text-emerald-600">Tailored Solutions</span>
              <span className="absolute -bottom-3 left-0 right-0 h-3 bg-emerald-200/30 -rotate-1 transform"></span>
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative financial strategies designed to empower your journey toward 
            economic independence and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center animate-on-scroll">
          {/* Left Column - Interactive Image */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-200/30 transform transition-all duration-500 group-hover:shadow-emerald-300/50 group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent z-10"></div>
              <img 
                src={imageUrl} 
                alt="Financial advisory team" 
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">Expert Advisory Team</h3>
                    <p className="text-emerald-100 text-sm">Personalized financial guidance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-200/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">24/7</div>
                <div className="text-sm text-emerald-600">Support</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 backdrop-blur-sm border border-emerald-200/20 flex items-center justify-center">
              <Lock className="w-10 h-10 text-emerald-500" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="relative">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              {Object.entries(tabContent).map(([key, value]) => {
                const Icon = value.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex-shrink-0 ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-emerald-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {value.title}
                    {activeTab === key && (
                      <ChevronRight className="w-4 h-4 ml-2 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Container */}
            <div className="bg-gradient-to-br from-white/80 to-emerald-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 mb-8 min-h-[400px] transition-all duration-500">
              {/* Vision Tab */}
              {activeTab === 'vision' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Our Vision for Financial Transformation
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {tabContent.vision.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {tabContent.vision.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mission Tab */}
              {activeTab === 'mission' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Our Commitment to Excellence
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {tabContent.mission.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {tabContent.mission.extended.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-emerald-100 hover:border-emerald-200 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Values Tab */}
              {activeTab === 'values' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Our Guiding Principles
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {tabContent.values.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {coreValues.map((value) => {
                      const Icon = value.icon;
                      return (
                        <div
                          key={value.id}
                          onMouseEnter={() => setHoveredValue(value.id)}
                          onMouseLeave={() => setHoveredValue(null)}
                          className="relative overflow-hidden rounded-xl border border-emerald-100 bg-white/50 hover:bg-white transition-all duration-300 hover:shadow-lg group cursor-pointer"
                        >
                          <div className="p-5">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                                  {value.title}
                                </h4>
                                <p className="text-emerald-600 text-sm italic mb-2">
                                  {value.tagline}
                                </p>
                                <p className="text-gray-600 text-sm">
                                  {value.description}
                                </p>
                                <div className="mt-3">
                                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                                    {value.stats}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Hover Effect */}
                          {hoveredValue === value.id && (
                            <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5`}></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Grid */}
            <div className="mb-8 animate-on-scroll">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Financial Solutions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{solution.title}</h4>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 rounded-2xl border border-emerald-100">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Ready to Transform Your Financial Future?
                </h4>
                <p className="text-gray-600 text-sm">
                  Connect with our experts for personalized guidance
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 group">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 text-sm mb-1">Support Available</p>
                  <a 
                    href="mailto:support@emeraldcapital.com" 
                    className="text-gray-900 font-semibold hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4" />
                    support@emeraldcapital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}