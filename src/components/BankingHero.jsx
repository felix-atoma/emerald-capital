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
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BankingHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlayClick = () => {
    setShowEmbed(true);
    setIsPlaying(true);
    // Load video after a short delay to ensure user interaction
    setTimeout(() => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.src = "https://www.youtube.com/embed/xy9nj6CrTis?si=IK9B2n4r-pPSk7Tg&rel=0&modestbranding=1&autoplay=1";
      }
    }, 100);
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
    { value: "₵50M+", label: "Capital Deployed", prefix: "Over" },
    { value: "98%", label: "Client Satisfaction", prefix: "" },
    { value: "24/7", label: "Digital Support", prefix: "" }
  ];

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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl"></div>
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
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

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-white to-emerald-50/50 rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100/50 backdrop-blur-sm max-w-5xl mx-auto"
          >
            <div className="flex items-start mb-6">
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

      {/* Video Section - Enhanced Ghanaian Experience with Real Video */}
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
              🇬🇭 Ghanaian Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Watch Real <span className="text-emerald-600">Success</span> in{" "}
              <span className="relative">
                <span className="text-yellow-500 relative z-10">Action</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-100 -rotate-1 transform"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience authentic stories of financial empowerment from communities across Ghana
            </p>
          </motion.div>
        </div>

        {/* Main Video Container */}
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
            
            {/* Video Container */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-emerald-900/90 via-emerald-800/80 to-teal-900/90 overflow-hidden">
              {/* Animated Ghanaian Patterns */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Ghana flag color waves */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
                <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-gradient-to-r from-yellow-500/10 via-black/5 to-yellow-500/10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/10 rounded-full"></div>
                </div>
                <div className="absolute top-2/3 left-0 right-0 h-1/3 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10"></div>
              </div>
              
              {/* Floating Success Icons */}
              <div className="absolute top-6 left-6 animate-bounce-slow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div className="absolute top-10 right-10 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">₵</span>
                </div>
              </div>
              <div className="absolute bottom-16 left-10 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">↑</span>
                </div>
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              
              {/* YouTube Embed or Fallback */}
              {showEmbed && !videoError ? (
                <div className="absolute inset-0">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/xy9nj6CrTis?si=IK9B2n4r-pPSk7Tg&rel=0&modestbranding=1"
                    title="Ghanaian Success Stories - Financial Empowerment"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setVideoError(true)}
                  ></iframe>
                </div>
              ) : videoError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <AlertCircle className="w-16 h-16 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Video Unavailable</h3>
                  <p className="text-gray-300 text-center max-w-md">
                    The video cannot be loaded due to browser restrictions. Try disabling ad-blockers or watch on YouTube directly.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=xy9nj6CrTis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-yellow-500 to-emerald-500 hover:from-yellow-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Watch on YouTube
                  </a>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated Rings */}
                    <div className="absolute -inset-12">
                      <div className="w-full h-full border-2 border-yellow-500/30 rounded-full animate-spin-slow"></div>
                      <div className="w-full h-full border-2 border-emerald-500/30 rounded-full animate-spin-slow-reverse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    {/* Play Button */}
                    <button
                      onClick={handlePlayClick}
                      className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-yellow-400 via-emerald-500 to-yellow-400 hover:from-yellow-500 hover:via-emerald-600 hover:to-yellow-500 transition-all duration-500 flex items-center justify-center shadow-2xl transform group-hover:scale-110"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1 transform scale-110" fill="white" />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-3">
                      <span className="text-yellow-300 text-sm font-semibold">
                        {videoError ? "⚠ Video Restricted" : "🎬 Real Documentary"}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      "Small Business, Big Dreams" - Ghana Edition
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Follow real entrepreneurs as they achieve financial freedom through Emerald Capital
                    </p>
                    
                    {/* Video Metadata */}
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-300" />
                        <span className="text-emerald-300 text-sm">14:32</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-yellow-300" />
                        <span className="text-yellow-300 text-sm">5 Entrepreneurs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-300" />
                        <span className="text-red-300 text-sm">Across Ghana</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Stats or Fallback Button */}
                  {!videoError ? (
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">47K+</div>
                        <div className="text-gray-300 text-xs">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-gray-300 text-xs">Positive</div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href="https://www.youtube.com/watch?v=xy9nj6CrTis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-emerald-500 hover:from-yellow-600 hover:to-emerald-600 text-white font-semibold rounded-lg text-sm transition-all duration-300"
                    >
                      Watch Directly
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Description */}
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
                <Play className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  What This Video Shows
                </h3>
                <p className="text-gray-600">
                  Real stories of transformation from small business owners across Ghana
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "From Market Stalls to Shops",
                  description: "See how small loans transformed local businesses",
                  color: "bg-gradient-to-br from-yellow-50 to-red-50",
                  icon: "🛒"
                },
                {
                  title: "Family Success Stories",
                  description: "Generational impact of financial education",
                  color: "bg-gradient-to-br from-emerald-50 to-teal-50",
                  icon: "👨‍👩‍👧‍👦"
                },
                {
                  title: "Community Growth",
                  description: "How one success inspires many in the community",
                  color: "bg-gradient-to-br from-blue-50 to-indigo-50",
                  icon: "🏘️"
                }
              ].map((item, index) => (
                <div key={index} className={`${item.color} rounded-2xl p-4 border border-white`}>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Featured Entrepreneurs */}
            <div className="mt-8 pt-6 border-t border-emerald-100">
              <h4 className="font-bold text-gray-900 mb-4">Meet the Entrepreneurs</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Ama", business: "Fashion Boutique", location: "Accra" },
                  { name: "Kwame", business: "Tech Solutions", location: "Kumasi" },
                  { name: "Esi", business: "Organic Farm", location: "Tamale" },
                  { name: "Kofi", business: "Transport Service", location: "Takoradi" }
                ].map((entrepreneur, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-yellow-200 to-emerald-300 flex items-center justify-center text-lg font-bold text-gray-800 mb-2">
                      {entrepreneur.name.charAt(0)}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{entrepreneur.name}</div>
                    <div className="text-xs text-gray-600">{entrepreneur.business}</div>
                    <div className="text-xs text-emerald-600 mt-1">{entrepreneur.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alternative Video Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="text-center mb-6">
            <h4 className="text-lg md:text-xl font-bold text-gray-900">More Inspiring Stories</h4>
            <p className="text-gray-600 text-sm md:text-base">Watch more success stories from across Ghana</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Women in Business",
                description: "Female entrepreneurs breaking barriers",
                duration: "8:45",
                views: "32K",
                thumbnail: "👩‍💼",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              },
              {
                title: "Youth Innovation",
                description: "Young Ghanaians creating tech solutions",
                duration: "12:20",
                views: "28K",
                thumbnail: "👨‍💻",
                url: "https://www.youtube.com/watch?v=9bZkp7q19f0"
              },
              {
                title: "Agricultural Success",
                description: "Modern farming transforming communities",
                duration: "10:15",
                views: "25K",
                thumbnail: "🌾",
                url: "https://www.youtube.com/watch?v=J---aiyznGQ"
              }
            ].map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-md group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {video.thumbnail}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-900 text-sm md:text-base group-hover:text-emerald-600 transition-colors">
                      {video.title}
                    </h5>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">{video.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-gray-500 text-xs">{video.duration}</span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{video.views} views</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Fallback Message */}
          {videoError && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
              <p className="text-yellow-700 text-sm">
                <AlertCircle className="w-4 h-4 inline mr-2" />
                Videos may be blocked by browser settings. Try disabling ad-blockers or watch directly on YouTube.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
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
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                onClick={() => window.location.href = '/signup'}
              >
                Open an Account
              </button>
              <button 
                className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </section>

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
      `}</style>
    </div>
  );
}