import React from "react";
import { useState, useEffect } from 'react';
import { Play, Pause, Check, Shield, Users, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BankingHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Story</span> in Motion
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Watch our journey from vision to impact, transforming Ghana's financial landscape
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* Video Container */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400 to-transparent"></div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulsing Ring Effect */}
                <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/30 blur-md"></div>
                <button className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center shadow-2xl transform group-hover:scale-110">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  ) : (
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                  )}
                </button>
              </div>
            </div>

            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    Building Financial Futures
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg">
                    A documentary on Emerald Capital's transformative impact
                  </p>
                </div>
                <div className="hidden md:block">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
                    Watch Story
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">4:32</div>
            <div className="text-sm text-gray-500">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">10K+</div>
            <div className="text-sm text-gray-500">Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">2023</div>
            <div className="text-sm text-gray-500">Production</div>
          </div>
        </div>
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
          
          {/* Simplified pattern background without the problematic SVG */}
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
    </div>
  );
}