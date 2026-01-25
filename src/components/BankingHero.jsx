import React from "react";
import { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Check, 
  Shield, 
  Users, 
  Zap, 
  Target,
  Clock,
  MapPin,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BankingHero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoading, setImageLoading] = useState({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Success stories featuring Emerald Capital's services with real Ghana context
  const successStories = [
    {
      id: 1,
      title: "Digital Banking Made Simple",
      description: "Modern mobile banking bringing financial services to urban and rural Ghana",
      location: "Nationwide Service",
      time: "24/7 Access",
      impact: "10,000+ Active Users",
      category: "Digital Banking",
      entrepreneur: "Emerald Capital",
      quote: "Banking should be accessible to everyone, everywhere. That's why we've built Ghana's most user-friendly digital banking platform.",
      imageUrl: "/loan approval.png",
      thumbnailUrl: "/emralspay.png",
      businessType: "Digital Banking Platform"
    },
    {
      id: 2,
      title: "Loan Disbursement Success",
      description: "Fast loan approvals and instant disbursements transforming Ghanaian businesses",
      location: "Kumasi, Ashanti Region",
      time: "Within 24 Hours",
      impact: "GH₵1,000,000 Disbursed",
      category: "Business Loans",
      entrepreneur: "Business Owner",
      quote: "I received my loan approval and funds within a day. Emerald Capital made expanding my business possible.",
      imageUrl: "/emerals capital.jpg",
      thumbnailUrl: "/New SME Loan.png",
      businessType: "Small Business Financing"
    },
    {
      id: 3,
      title: "Quick Loan Approval",
      description: "Lightning-fast loan processing helping Ghanaians seize business opportunities",
      location: "Accra, Greater Accra",
      time: "Under 10 Minutes",
      impact: "GH₵2,000,000 Approved",
      category: "Personal & Business Loans",
      entrepreneur: "Entrepreneur",
      quote: "The loan approval came in just 5 minutes! This speed allowed me to grab a time-sensitive business opportunity.",
      imageUrl: "/New SME Loan.png",
      thumbnailUrl: "loan approval.png",
      businessType: "Fast Loan Processing"
    },
    {
      id: 4,
      title: "Asset Financing Solutions",
      description: "Making vehicle ownership accessible with flexible payment plans",
      location: "Takoradi, Western Region",
      time: "6 Months to Ownership",
      impact: "GH₵100,000,000 Value",
      category: "Asset Financing",
      entrepreneur: "Transport Business Owner",
      quote: "Emerald Capital's asset financing helped me acquire a 2024 Benz for my transport business. Now I'm expanding my fleet.",
      imageUrl: "/car-loan-ghana.png",
      thumbnailUrl: "/car-loan-ghana.png",
      businessType: "Vehicle & Asset Financing"
    },
    {
      id: 5,
      title: "Ama's Fashion Boutique Success",
      description: "From a small market stall in Makola to a thriving boutique in Accra Mall with 15 employees",
      location: "Accra, Greater Accra Region",
      time: "3 Years Growth",
      impact: "GH₵500K Annual Revenue",
      category: "Fashion & Retail",
      entrepreneur: "Ama Mensah",
      quote: "Emerald Capital believed in my vision when others saw only a market trader. Now I employ 15 women from my community.",
      imageUrl: "/nyi.jpg",
      thumbnailUrl: "nyi.jpg",
      businessType: "African Fashion Boutique"
    },
    {
      id: 6,
      title: "Kwame's Agri-Tech Innovation",
      description: "Modern farming technology increasing yields for 200 smallholder farmers in Ashanti Region",
      location: "Kumasi, Ashanti Region",
      time: "4 Years Operation",
      impact: "200 Farmers Supported",
      category: "Agriculture Technology",
      entrepreneur: "Kwame Osei",
      quote: "With Emerald's agricultural loan, we transformed traditional farming into a sustainable tech-driven business.",
      imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      businessType: "Agricultural Technology"
    }
  ];

  // Additional high-quality banking/finance images for other sections
  const bankingImages = {
    heroBg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    missionBg: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    communityImpact: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    digitalBanking: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  };

  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      desc: "Upholding uncompromising honesty and transparency in every financial transaction",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Inclusive Finance",
      desc: "Empowering every individual with accessible financial solutions regardless of background",
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      desc: "Pioneering customer-centric solutions through cutting-edge financial technology",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Target,
      title: "Impact Focused",
      desc: "Creating sustainable economic growth and positive community transformation",
      color: "from-teal-400 to-emerald-500"
    }
  ];

  const stats = [
    { value: "10K+", label: "Clients Empowered", prefix: "Over" },
    { value: "GH₵50M+", label: "Capital Deployed", prefix: "Over" },
    { value: "98%", label: "Client Satisfaction", prefix: "" },
    { value: "24/7", label: "Digital Support", prefix: "" }
  ];

  const currentStory = successStories[currentImageIndex];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enable carousel after 3 seconds even if not all images loaded
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!allImagesLoaded) {
        console.log('Enabling carousel after timeout');
        setAllImagesLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [allImagesLoaded]);

  useEffect(() => {
    if (!isAutoPlaying || !allImagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, allImagesLoaded, successStories.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % successStories.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleImageLoad = (id) => {
    setImageLoading(prev => {
      const updated = { ...prev, [id]: true };
      
      // Check if all images are now loaded
      const allLoaded = successStories.every(story => updated[story.id] === true);
      if (allLoaded && !allImagesLoaded) {
        setAllImagesLoaded(true);
      }
      
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-emerald-100">
        <motion.div 
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section with Professional Background */}
      <section className="relative overflow-hidden">
        {/* Professional Banking Background Image */}
        <div className="absolute inset-0">
          <img 
            src={bankingImages.heroBg}
            alt="Modern banking environment"
            className="w-full h-full object-cover opacity-10"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-emerald-50/30"></div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                <Check className="w-4 h-4 mr-2" />
                Trusted Financial Partner Since 2018
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Redefining <span className="relative">
                <span className="text-emerald-600 relative z-10">Financial</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-emerald-200/40 -rotate-1 transform -skew-x-6"></span>
              </span>{" "}
              <br />
              <span className="text-gray-800">Access in Ghana</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-48 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 mx-auto rounded-full mb-8 transform origin-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              At Emerald Capital, we're not just a financial institution — we're a catalyst for growth, 
              empowering dreams and building sustainable futures through innovative banking solutions.
            </motion.p>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {stat.prefix && <span className="font-medium">{stat.prefix} </span>}
                    {stat.label}
                  </div>
                  <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-400/20 rounded-full transform translate-x-1 -translate-y-1 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mission Statement with Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100/50 backdrop-blur-sm max-w-5xl mx-auto overflow-hidden"
          >
            {/* Mission Background */}
            <div className="absolute inset-0">
              <img 
                src={bankingImages.missionBg}
                alt="Team collaboration in modern office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-emerald-50/80"></div>
            </div>
            
            <div className="relative flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Mission</h2>
                <p className="text-gray-600 text-lg">
                  To democratize financial access and create sustainable economic opportunities 
                  for every Ghanaian, fostering a future where financial growth is inclusive, 
                  innovative, and impactful.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Core Values</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The principles that guide every decision we make and every relationship we build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${value.color} transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                  
                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-emerald-200 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Success Stories Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold mb-4">
              <div className="flex items-center gap-1 mr-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>
              🇬🇭 Real Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Witness <span className="text-emerald-600">Real Impact</span> in{" "}
              <span className="relative">
                <span className="text-yellow-500 relative z-10">Ghana</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-100 -rotate-1 transform"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore authentic stories of transformation from entrepreneurs we've empowered across Ghana
            </p>
          </motion.div>
        </div>

        {/* Main Gallery Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Floating Ghanaian Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-red-300/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-300 group-hover:shadow-3xl">
            {/* Ghana Flag Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            
            {/* Gallery Container */}
            <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-emerald-900/90 via-emerald-800/80 to-teal-900/90 overflow-hidden">
              {/* Main Image Display */}
              <div className="absolute inset-0">
                {!imageLoading[currentStory.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-800">
                    <Loader2 className="w-12 h-12 text-emerald-300 animate-spin" />
                  </div>
                )}
                <img
                  src={currentStory.imageUrl}
                  alt={currentStory.description}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoading[currentStory.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(currentStory.id)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                
                {/* Story Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-4xl">
                    {/* Entrepreneur Info */}
                    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-emerald-500 flex items-center justify-center text-2xl font-bold text-white shadow-2xl">
                            {currentStory.entrepreneur.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {currentStory.title}
                          </h3>
                          <p className="text-emerald-100 text-lg mb-4">
                            {currentStory.description}
                          </p>
                          <div className="inline-flex items-center gap-4 flex-wrap">
                            <span className="inline-flex items-center gap-2 bg-emerald-600/30 backdrop-blur-sm rounded-full px-4 py-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-white text-sm">{currentStory.location}</span>
                            </span>
                            <span className="inline-flex items-center gap-2 bg-yellow-600/30 backdrop-blur-sm rounded-full px-4 py-2">
                              <Target className="w-4 h-4" />
                              <span className="text-white text-sm">{currentStory.impact}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quote Display */}
                    <div className="mt-6 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="text-yellow-400 text-4xl">"</div>
                        <div className="flex-1">
                          <p className="text-white text-xl italic mb-3">
                            {currentStory.quote}
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-emerald-300 font-medium text-lg">
                                — {currentStory.entrepreneur}
                              </span>
                              <span className="text-gray-400 text-sm block">
                                {currentStory.category}
                              </span>
                            </div>
                            <span className="text-gray-400 text-sm">
                              Story {currentImageIndex + 1} of {successStories.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Auto-play Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-3 py-2">
                    {successStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex 
                            ? 'bg-yellow-400 w-6' 
                            : 'bg-white/60 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>
                  <div className={`text-xs px-3 py-1 rounded-full ${
                    isAutoPlaying 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {isAutoPlaying ? 'Auto' : 'Manual'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Real Entrepreneurs, Real Impact
                </h3>
                <p className="text-gray-600">
                  These are just a few of the thousands of success stories made possible through Emerald Capital's financial solutions.
                </p>
              </div>
            </div>
            
            {/* All Stories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div 
                  key={story.id}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer hover:shadow-xl ${
                    index === currentImageIndex 
                      ? 'border-emerald-300 ring-2 ring-emerald-200' 
                      : 'border-gray-200 hover:border-emerald-300'
                  }`}
                  onClick={() => handleDotClick(index)}
                >
                  {/* Thumbnail Image */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-800">
                    {!imageLoading[story.id] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-8 h-8 text-emerald-300 animate-spin" />
                      </div>
                    )}
                    <img
                      src={story.thumbnailUrl}
                      alt={story.title}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                        imageLoading[story.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(story.id)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Thumbnail Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-white text-sm">
                            {story.entrepreneur}
                          </h4>
                          <p className="text-emerald-200 text-xs">
                            {story.category}
                          </p>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index === currentImageIndex 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-white/20 text-white group-hover:bg-emerald-500'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Story Info */}
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base mb-2">
                      {story.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600 text-xs">{story.location}</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {story.description.substring(0, 80)}...
                    </p>
                  </div>
                  
                  {/* Active Indicator */}
                  {index === currentImageIndex && (
                    <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-200"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Gallery Navigation */}
            <div className="mt-8 pt-6 border-t border-emerald-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Browse All Success Stories</h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center text-emerald-700 transition-colors hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center text-emerald-700 transition-colors hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {successStories.map((story, idx) => (
                  <button
                    key={story.id}
                    onClick={() => handleDotClick(idx)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2 ${
                      idx === currentImageIndex
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      idx === currentImageIndex ? 'bg-white' : 'bg-emerald-400'
                    }`}></div>
                    {story.entrepreneur}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <img 
                src={bankingImages.communityImpact}
                alt="Community impact and collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/80"></div>
            </div>
            
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Building Stronger Communities Together
              </h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Every success story creates ripple effects, empowering entire communities and driving sustainable economic growth across Ghana.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "200+", label: "Communities Impacted" },
                  { value: "GH₵15M+", label: "Community Investment" },
                  { value: "5000+", label: "Jobs Created" },
                  { value: "98%", label: "Retention Rate" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-emerald-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* CTA Background Image */}
          <div className="absolute inset-0">
            <img 
              src={bankingImages.digitalBanking}
              alt="Digital banking technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-teal-600/90"></div>
          </div>
          
          <div className="relative px-8 py-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Begin Your Financial Journey?
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of Ghanaians who have transformed their financial future with Emerald Capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
                onClick={() => window.location.href = '/digital-banking'}
              >
                Request Digital Banking
              </button>
              <button 
                className="px-8 py-3 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:shadow-xl backdrop-blur-sm hover:border-white/60"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Consultation
              </button>
            </div>
            <p className="text-emerald-200 text-sm mt-6">
              Start with as little as GH₵50. No hidden fees. 100% digital application.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Preload Images */}
      <div className="hidden">
        {successStories.map(story => (
          <img 
            key={`preload-${story.id}`}
            src={story.imageUrl}
            alt=""
            onLoad={() => handleImageLoad(story.id)}
          />
        ))}
        {Object.values(bankingImages).map((url, idx) => (
          <img key={`bg-${idx}`} src={url} alt="" />
        ))}
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-bounce {
          animation: bounce 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}