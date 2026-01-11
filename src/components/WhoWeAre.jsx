import React, { useEffect, useRef } from "react";
import { Target, Shield, Users, Lock, Zap, Globe, Heart, ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  const containerRef = useRef(null);
  const bubbleRefs = useRef([]);

  useEffect(() => {
    // Mouse move effect for bubbles
    const handleMouseMove = (e) => {
      const bubbles = bubbleRefs.current;
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;

      bubbles.forEach((bubble, index) => {
        if (!bubble) return;
        
        const speed = 0.02 + (index * 0.005);
        const distanceX = mouseX - containerCenterX;
        const distanceY = mouseY - containerCenterY;
        
        bubble.style.transform = `translate(${distanceX * speed * -1}px, ${distanceY * speed * -1}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "Uncompromising honesty and transparency guide every financial decision we make",
      gradient: "from-emerald-400 to-emerald-600",
      delay: 0
    },
    {
      icon: Users,
      title: "Inclusive Access",
      description: "Democratizing financial services for all, regardless of background or circumstance",
      gradient: "from-teal-400 to-emerald-500",
      delay: 100
    },
    {
      icon: Lock,
      title: "Secure Stewardship",
      description: "Responsible management and protection of client assets with cutting-edge security",
      gradient: "from-emerald-500 to-teal-500",
      delay: 200
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Pioneering technology-driven solutions that redefine financial experiences",
      gradient: "from-teal-400 to-emerald-400",
      delay: 300
    },
    {
      icon: Globe,
      title: "Community Impact",
      description: "Driving sustainable economic growth and prosperity for communities we serve",
      gradient: "from-emerald-400 to-cyan-400",
      delay: 400
    },
    {
      icon: Heart,
      title: "Empathetic Service",
      description: "Human-centered approach that values relationships and understands individual needs",
      gradient: "from-cyan-400 to-emerald-500",
      delay: 500
    }
  ];

  const bubbleConfigs = [
    { size: "w-32 h-32", color: "bg-emerald-400", opacity: "opacity-20", blur: "blur-3xl", top: "top-16", left: "left-10", delay: 0 },
    { size: "w-48 h-48", color: "bg-teal-400", opacity: "opacity-15", blur: "blur-3xl", top: "top-32", right: "right-20", delay: 300 },
    { size: "w-40 h-40", color: "bg-emerald-300", opacity: "opacity-10", blur: "blur-3xl", bottom: "bottom-32", left: "left-32", delay: 600 },
    { size: "w-24 h-24", color: "bg-cyan-300", opacity: "opacity-25", blur: "blur-2xl", top: "top-64", right: "right-40", delay: 900 },
    { size: "w-36 h-36", color: "bg-teal-300", opacity: "opacity-15", blur: "blur-3xl", bottom: "bottom-48", right: "right-32", delay: 1200 },
    { size: "w-28 h-28", color: "bg-emerald-200", opacity: "opacity-20", blur: "blur-2xl", top: "top-96", left: "left-64", delay: 1500 }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-white overflow-hidden py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Floating Bubbles */}
        {bubbleConfigs.map((bubble, index) => (
          <div
            key={index}
            ref={el => bubbleRefs.current[index] = el}
            className={`absolute ${bubble.size} ${bubble.color} ${bubble.opacity} ${bubble.blur} rounded-full animate-float ${bubble.top} ${bubble.left || bubble.right} transition-transform duration-300 ease-out`}
            style={{ animationDelay: `${bubble.delay}ms` }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 backdrop-blur-sm mb-8 group hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></div>
            <span className="text-emerald-700 font-semibold text-sm tracking-wide">
              TRUSTED FINANCIAL PARTNERS
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 ml-3 animate-pulse delay-300"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            <span className="relative inline-block">
              <span className="text-emerald-600">Emerald</span>
              <span className="absolute -bottom-3 left-0 right-0 h-4 bg-emerald-200/30 -rotate-1 transform"></span>
            </span>{" "}
            <span className="text-gray-800">Capital</span>
          </h1>
          
          {/* Subtitle */}
          <div className="relative inline-block mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
              Redefining <span className="text-emerald-600">Financial</span> Excellence
            </h2>
            <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 rounded-full transform -translate-x-1/4"></div>
          </div>
        </div>

        {/* Mission Statement Card */}
        <div className="bg-gradient-to-br from-white/80 to-emerald-50/50 backdrop-blur-sm rounded-3xl p-10 md:p-16 mb-20 border border-white/50 shadow-2xl shadow-emerald-100/30 hover:shadow-emerald-200/50 transition-shadow duration-500">
          <div className="flex items-start gap-8 mb-10">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Vision & Purpose
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Emerald Capital stands at the intersection of financial innovation and social responsibility. 
                We are architects of economic empowerment, building bridges between ambition and achievement 
                through accessible, ethical, and forward-thinking financial solutions.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-2xl p-8 border border-emerald-100/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  10K+
                </div>
                <div className="text-gray-600 font-medium">Clients Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  98.7%
                </div>
                <div className="text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  ₵50M+
                </div>
                <div className="text-gray-600 font-medium">Capital Deployed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pillars of <span className="text-emerald-600">Excellence</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that shape our identity and drive our commitment to exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="relative h-full bg-gradient-to-br from-white to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-lg hover:shadow-2xl hover:shadow-emerald-200/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.08] bg-gradient-to-br ${value.gradient} transition-opacity duration-500`}></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-transparent transform rotate-45 -translate-y-16 translate-x-16"></div>
                    </div>
                    
                    {/* Icon Container */}
                    <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                    
                    {/* Hover Indicator */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-6 h-6 text-emerald-500 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-emerald-200/30 shadow-xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-8 shadow-lg shadow-emerald-500/30">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment to You
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We pledge to deliver financial solutions with unwavering integrity, innovative thinking, 
              and genuine care. Your success is our measure of achievement, and we're dedicated to 
              building lasting partnerships that transcend traditional banking relationships.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group">
              <span>Begin Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="px-10 py-4 bg-white text-emerald-600 font-semibold rounded-xl border-2 border-emerald-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-50"></div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
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
        
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
      `}</style>
    </div>
  );
}