import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  Building2,
  Briefcase,
  Headphones,
  TrendingUp,
  ShieldCheck,
  Users,
  Target,
  Handshake,
  MailCheck,
  PhoneCall,
  Laptop,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Heart,
  ExternalLink,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe as GlobeIcon,
  MessageCircle,
  Smartphone,
  FileText,
  Users as UsersIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const Contact = () => {
  const [animatedStats, setAnimatedStats] = useState({
    responseTime: 0,
    satisfaction: 0,
    supportHours: 0,
  });

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container) => {
    console.log('Particles loaded');
  };

  useEffect(() => {
    // Animate stats
    const animateStats = () => {
      const duration = 2000;
      const steps = 100;
      const interval = duration / steps;

      let currentResponse = 0;
      let currentSatisfaction = 0;
      let currentHours = 0;

      const responseInterval = setInterval(() => {
        currentResponse += 2;
        if (currentResponse > 24) clearInterval(responseInterval);
        setAnimatedStats(prev => ({ ...prev, responseTime: currentResponse }));
      }, interval / 6);

      const satisfactionInterval = setInterval(() => {
        currentSatisfaction += 0.98;
        if (currentSatisfaction > 98) clearInterval(satisfactionInterval);
        setAnimatedStats(prev => ({ ...prev, satisfaction: currentSatisfaction }));
      }, interval / 6);

      const hoursInterval = setInterval(() => {
        currentHours += 4;
        if (currentHours > 24) clearInterval(hoursInterval);
        setAnimatedStats(prev => ({ ...prev, supportHours: currentHours }));
      }, interval / 12);
    };

    animateStats();
  }, []);

  const ContactCard = ({ icon: Icon, title, description, contact, color, actionText, actionLink, isEmail = false, isPhone = false, isWhatsApp = false }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-xl rounded-2xl p-8 border border-emerald-100/50 shadow-xl shadow-emerald-100/20 group-hover:shadow-2xl group-hover:shadow-emerald-200/30 transition-all duration-500">
        <div className="flex items-start gap-6 mb-6">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
            <div className="mb-6">
              {isEmail ? (
                <a 
                  href={`mailto:${contact}`}
                  className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent hover:underline"
                >
                  {contact}
                </a>
              ) : isPhone ? (
                <a 
                  href={`tel:${contact.replace(/\s/g, '')}`}
                  className="text-xl font-bold text-gray-900 hover:text-emerald-600"
                >
                  {contact}
                </a>
              ) : (
                <div className="text-xl font-bold text-gray-900">{contact}</div>
              )}
            </div>
          </div>
        </div>
        
        <a
          href={isEmail ? `mailto:${contact}` : isPhone ? `tel:${contact.replace(/\s/g, '')}` : actionLink}
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            color.includes('emerald') 
              ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 hover:from-emerald-100 hover:to-teal-100 hover:shadow-lg'
              : 'bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-600 hover:from-teal-100 hover:to-cyan-100 hover:shadow-lg'
          }`}
        >
          {actionText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );

  const OfficeCard = ({ region, manager, phone, email, color }) => (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 hover:border-emerald-200/70 transition-all duration-300">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{region}</h4>
            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <UsersIcon className="w-4 h-4" />
              {manager}
            </div>
          </div>
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <Building2 className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/50 hover:bg-emerald-100/50 transition-colors group/link">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover/link:bg-emerald-200 transition-colors">
              <PhoneCall className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Phone</p>
              <p className="text-gray-900 font-semibold">{phone}</p>
            </div>
          </a>
          
          <a href={`mailto:${email}`} className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/50 hover:bg-emerald-100/50 transition-colors group/link">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover/link:bg-emerald-200 transition-colors">
              <Mail className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Email</p>
              <p className="text-gray-900 font-semibold">{email}</p>
            </div>
          </a>
        </div>
        
        <div className="mt-8 pt-6 border-t border-emerald-100/50">
          <a 
            href={`mailto:${email}`}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Email {region.split('–')[0]} Office
          </a>
        </div>
      </div>
    </motion.div>
  );

  const SocialCard = ({ platform, handle, icon: Icon, color, link }) => (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100/50 hover:border-emerald-200/70 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-1">{platform}</h4>
            <p className="text-sm text-gray-600 truncate">{handle}</p>
          </div>
        </div>
      </div>
    </motion.a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/10 to-teal-50/10 overflow-hidden">
      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#10b981",
            },
            links: {
              color: "#10b981",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 
                }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-teal-500/10 border border-emerald-200/50 backdrop-blur-lg mb-8 shadow-lg"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-emerald-700 font-bold text-sm tracking-wider uppercase">
                    Direct Contact
                  </p>
                  <p className="text-emerald-600 text-xs">Reach Us Anytime</p>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              >
                Connect with
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Emerald Capital
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Your premier financial partner in Ghana. Reach out to us through any of our 
                dedicated channels for personalized financial solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-8 mb-16"
              >
                {[
                  { label: 'Response Time', value: `${animatedStats.responseTime} hrs`, icon: Zap, color: 'text-emerald-600' },
                  { label: 'Client Satisfaction', value: `${animatedStats.satisfaction}%`, icon: Award, color: 'text-teal-600' },
                  { label: 'Support Hours', value: `${animatedStats.supportHours}/7`, icon: Clock, color: 'text-cyan-600' },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100/50 shadow-lg">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mx-auto mb-4`}>
                            <Icon className={`w-6 h-6 ${stat.color}`} />
                          </div>
                          <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                            {stat.value}
                          </div>
                          <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Head Office */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">HEAD OFFICE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Corporate <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Headquarters</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-xl rounded-2xl p-8 border border-emerald-100/50 shadow-xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Emerald Capital Building</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-900 font-medium">Barekese Rd, Amanfrom, Kumasi, Ghana</p>
                          <p className="text-gray-600">Post Office Box 995, Santasi, Kumasi, Ghana</p>
                          <p className="text-gray-600">AK-634-5480</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <GlobeIcon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <a href="https://www.emeraldcapitalgh.com" className="text-emerald-600 hover:underline font-medium">
                          www.emeraldcapitalgh.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ContactCard
                icon={Phone}
                title="Main Phone Lines"
                description="Primary contact numbers for immediate assistance"
                contact="+233 20 8070000 / +233 244 595808"
                color="from-teal-500 to-cyan-500"
                actionText="Call Now"
                isPhone={true}
              />

              <ContactCard
                icon={Mail}
                title="General Inquiries"
                description="For all general questions and information requests"
                contact="info@emeraldcapitalgh.com"
                color="from-emerald-500 to-teal-500"
                actionText="Send Email"
                isEmail={true}
              />
            </div>
          </div>
        </motion.section>

        {/* Customer Support */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <Headphones className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">CUSTOMER SUPPORT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              24/7 <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Support</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              icon={Phone}
              title="Support Hotlines"
              description="Dedicated customer service lines"
              contact="0531929712 / 0537420472"
              color="from-emerald-500 to-teal-500"
              actionText="Call Support"
              isPhone={true}
            />

            <ContactCard
              icon={Smartphone}
              title="Mobile Support"
              description="Additional mobile contact numbers"
              contact="0208203653 / 0209877171 / 0240776444"
              color="from-teal-500 to-cyan-500"
              actionText="Call Mobile"
              isPhone={true}
            />

            <ContactCard
              icon={Mail}
              title="Support Email"
              description="Email support for non-urgent inquiries"
              contact="support@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
              actionText="Email Support"
              isEmail={true}
            />

            <ContactCard
              icon={MailCheck}
              title="Alternate Email"
              description="Secondary email for support"
              contact="emeraldcapitalgh@gmail.com"
              color="from-teal-500 to-cyan-500"
              actionText="Send Email"
              isEmail={true}
            />

            <ContactCard
              icon={MessageSquare}
              title="WhatsApp Support"
              description="Chat with us on WhatsApp"
              contact="0208070000"
              color="from-emerald-500 to-teal-500"
              actionText="Message on WhatsApp"
              actionLink="https://wa.me/233208070000"
            />

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-xl rounded-2xl p-8 border border-emerald-100/50 shadow-xl">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Operating Hours</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-gray-800">Office Walk-in</p>
                        <p className="text-gray-600">Mon–Fri: 8:00 AM – 5:00 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Online & Internet Banking</p>
                        <p className="text-gray-600">Mon–Sun: 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Regional Offices */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">REGIONAL OFFICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Regional <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Managers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OfficeCard
              region="Ashanti Region"
              manager="Mr. Christian Yaw Boateng"
              phone="+233 544860573"
              email="ashanti@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
            />

            <OfficeCard
              region="Western North Region"
              manager="Mrs. Beatrice Bannor"
              phone="+233 241737302"
              email="westernnorth@emeraldcapitalgh.com"
              color="from-teal-500 to-cyan-500"
            />

            <OfficeCard
              region="Bono, Bono East & Ahafo"
              manager="Mrs. Helena Boamah"
              phone="+233 247051745"
              email="bono@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
            />

            <OfficeCard
              region="Central & Western"
              manager="Ms. Amazing Nana Ekua Abbey"
              phone="+233 591594248"
              email="central@emeraldcapitalgh.com"
              color="from-teal-500 to-cyan-500"
            />

            <OfficeCard
              region="Greater Accra, Eastern & Volta"
              manager="Mr. Martin Jones-Arthur"
              phone="+233 24317070"
              email="accra@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
            />

            <OfficeCard
              region="Volta, Oti & North East"
              manager="Ms. Esther Takyi"
              phone="+233 557596494"
              email="volta@emeraldcapitalgh.com"
              color="from-teal-500 to-cyan-500"
            />

            <OfficeCard
              region="Northern, Savanna, Upper East & Upper West"
              manager="Mrs. Salma Issah"
              phone="+233 244525034"
              email="northern@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
            />

            <OfficeCard
              region="Diaspora Services"
              manager="Odiasempa Asamoah Koranteng"
              phone="+44 7506181029"
              email="diaspora@emeraldcapitalgh.com"
              color="from-teal-500 to-cyan-500"
            />
          </div>
        </motion.section>

        {/* Key Departments */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <Briefcase className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">KEY DEPARTMENTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Departmental <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Contacts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              icon={TrendingUp}
              title="Finance / Accounts"
              description="Financial inquiries and account management"
              contact="finance@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
              actionText="Email Finance"
              isEmail={true}
            />

            <ContactCard
              icon={Users}
              title="Human Resources"
              description="Career opportunities and employment"
              contact="hr@emeraldcapitalgh.com"
              color="from-teal-500 to-cyan-500"
              actionText="Email HR"
              isEmail={true}
            />

            <ContactCard
              icon={ShieldCheck}
              title="Legal / Compliance"
              description="Regulatory and legal matters"
              contact="compliance@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
              actionText="Email Compliance"
              isEmail={true}
            />

            <ContactCard
              icon={Target}
              title="Marketing & Business Development"
              description="Partnerships and business growth"
              contact="marketing@emeraldcapitalgh.com"
              color="from-teal-500 to-cyan-500"
              actionText="Email Marketing"
              isEmail={true}
            />

            <ContactCard
              icon={Laptop}
              title="Digital & IT Support"
              description="Technical issues and digital services"
              contact="techsupport@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
              actionText="Email Tech Support"
              isEmail={true}
            />
          </div>
        </motion.section>

        {/* Social Media */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">SOCIAL MEDIA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect on <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Social Media</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SocialCard
              platform="LinkedIn"
              handle="linkedin.com/company/emeraldcapital"
              icon={Linkedin}
              color="bg-[#0077B5]"
              link="https://linkedin.com/company/emeraldcapital"
            />

            <SocialCard
              platform="Twitter"
              handle="@EmeraldCapitalGH"
              icon={Twitter}
              color="bg-[#1DA1F2]"
              link="https://twitter.com/EmeraldCapitalGH"
            />

            <SocialCard
              platform="Facebook"
              handle="facebook.com/EmeraldCapitalGH"
              icon={Facebook}
              color="bg-[#1877F2]"
              link="https://facebook.com/EmeraldCapitalGH"
            />

            <SocialCard
              platform="Instagram"
              handle="@EmeraldCapital"
              icon={Instagram}
              color="bg-gradient-to-br from-purple-500 to-pink-500"
              link="https://instagram.com/EmeraldCapital"
            />

            <SocialCard
              platform="WhatsApp"
              handle="+233 208070000"
              icon={MessageSquare}
              color="bg-[#25D366]"
              link="https://wa.me/233208070000"
            />

            <SocialCard
              platform="TikTok"
              handle="Emeraldcapita"
              icon={MessageCircle}
              color="bg-black"
              link="https://tiktok.com/@Emeraldcapita"
            />

            <SocialCard
              platform="Email"
              handle="info@emeraldcapitalgh.com"
              icon={Mail}
              color="bg-gradient-to-r from-emerald-500 to-teal-500"
              link="mailto:info@emeraldcapitalgh.com"
            />

            <SocialCard
              platform="Website"
              handle="emeraldcapitalgh.com"
              icon={Globe}
              color="bg-gradient-to-r from-teal-500 to-cyan-500"
              link="https://www.emeraldcapitalgh.com"
            />
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-12 border border-emerald-200/30">
              <div className="max-w-3xl mx-auto">
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl">
                    <PhoneCall className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center border-4 border-white">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready to <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Connect</span>?
                </h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Choose your preferred contact method and reach out to us today. 
                  Our dedicated team is ready to assist with your financial needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="tel:+233208070000"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </motion.a>
                  <motion.a
                    href="mailto:info@emeraldcapitalgh.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-200/40 border-2 border-emerald-100 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900/90 to-teal-900"></div>
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2310b981' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
        
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center border-2 border-gray-900">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">"Nyimpa nyinaa yɛ wo yɔnko"</p>
                    <p className="text-emerald-300">Every person is your neighbor</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-6">Emerald Capital Ghana</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-200">Barekese Rd, Amanfrom, Kumasi</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <a href="tel:+233208070000" className="text-emerald-200 hover:text-white transition-colors">
                      +233 20 8070000
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <a href="mailto:info@emeraldcapitalgh.com" className="text-emerald-200 hover:text-white transition-colors">
                      info@emeraldcapitalgh.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <p className="text-2xl font-bold text-white mb-4">
                  Your Financial Partner
                </p>
                <p className="text-emerald-300">
                  Committed to excellence in financial services across Ghana and beyond.
                </p>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-emerald-800/30 text-center">
              <p className="text-emerald-400/60">
                © {new Date().getFullYear()} Emerald Capital Ghana. All rights reserved.
                <br />
                Registered with Bank of Ghana | License No. AK-634-5480
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;