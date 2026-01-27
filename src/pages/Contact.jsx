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
  Users as UsersIcon,
  HelpCircle,
  LifeBuoy
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

  const SupportCard = ({ title, phones, emails, operatingHours, icon: Icon, color }) => (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 hover:border-emerald-200/70 transition-all duration-300">
        <div className="flex items-start gap-4 mb-6">
          <div className={`relative flex-shrink-0`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl blur-lg opacity-50`}></div>
            <div className={`relative w-14 h-14 rounded-xl ${color} flex items-center justify-center`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
          </div>
        </div>

        {phones && phones.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-gray-900">Phone Numbers</span>
            </div>
            <div className="space-y-2 pl-7">
              {phones.map((phone, index) => (
                <a 
                  key={index}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="block text-gray-700 hover:text-emerald-600 hover:underline transition-colors font-medium"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        )}

        {emails && emails.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-gray-900">Email Addresses</span>
            </div>
            <div className="space-y-2 pl-7">
              {emails.map((email, index) => (
                <a 
                  key={index}
                  href={`mailto:${email}`}
                  className="block text-gray-700 hover:text-emerald-600 hover:underline transition-colors font-medium"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        )}

        {operatingHours && operatingHours.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-gray-900">Operating Hours</span>
            </div>
            <div className="space-y-2 pl-7">
              {operatingHours.map((hour, index) => (
                <p key={index} className="text-gray-700 font-medium">
                  {hour}
                </p>
              ))}
            </div>
          </div>
        )}
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

        {/* Customer Support - UPDATED SECTION */}
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
              24/7 <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Customer Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you round the clock with dedicated support channels
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <SupportCard
              icon={PhoneCall}
              title="Phone Support"
              color="bg-gradient-to-br from-emerald-500 to-teal-500"
              phones={[
                '053 192 9712',
                '053 742 0472',
                '020 820 3653',
                '020 987 7171',
                '024 077 6444'
              ]}
            />

            <SupportCard
              icon={MailCheck}
              title="Email Support"
              color="bg-gradient-to-br from-teal-500 to-cyan-500"
              emails={[
                'support@emeraldcapitalgh.com',
                'emeraldcapitalgh@gmail.com'
              ]}
            />

            <SupportCard
              icon={Clock}
              title="Office Hours"
              color="bg-gradient-to-br from-cyan-500 to-blue-500"
              operatingHours={[
                'Mon–Fri: 8:00 AM – 5:00 PM (Office walk-in)',
                'Mon–Sun: 24/7 (Online & Internet Banking)'
              ]}
            />

            <SupportCard
              icon={LifeBuoy}
              title="Online Support"
              color="bg-gradient-to-br from-emerald-600 to-teal-600"
              operatingHours={[
                '24/7 Internet Banking Support',
                'Live Chat Available',
                'Mobile App Support',
                'Online Complaint Portal'
              ]}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 p-8 md:p-12 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto md:mx-0 mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Quick Response</h4>
                    <p className="text-emerald-100">Average response time under 24 hours</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Secure Support</h4>
                    <p className="text-emerald-100">Bank-level encryption for all communications</p>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto md:ml-auto mb-4">
                      <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Multi-channel</h4>
                    <p className="text-emerald-100">Phone, email, chat, and in-person support</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Regional Offices */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          {/* <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">REGIONAL OFFICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nationwide <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Presence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our services across Ghana through our regional offices
            </p>
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <OfficeCard
              region="Greater Accra"
              manager="Mr. Martin Jones-Arthur"
              phone="+233 20 807 0000"
              email="accra@emeraldcapitalgh.com"
            /> */}

            {/* <OfficeCard
              region="Ashanti Region"
              manager="Mr. Christian Yaw Boateng"
              phone="+233 24 459 5808"
              email="ashanti@emeraldcapitalgh.com"
            /> */}

            {/* <OfficeCard
              region="Eastern Region"
              manager="Mr. Emmanuel Osei Mensah"
              phone="+233 53 742 0472"
              email="eastern@emeraldcapitalgh.com"
            /> */}

            {/* <OfficeCard
              region="Western Region"
              manager="Miss. Mercy Ahianor"
              phone="+233 20 820 3653"
              email="western@emeraldcapitalgh.com"
            /> */}

            {/* <OfficeCard
              region="Central Region"
              manager="Miss. Amazing N. Ekua Abbey"
              phone="+233 20 987 7171"
              email="central@emeraldcapitalgh.com"
            /> */}

            {/* <OfficeCard
              region="Northern Region"
              manager="Mrs. Salma Adams"
              phone="+233 24 077 6444"
              email="northern@emeraldcapitalgh.com"
            /> */}
          </div>
        </motion.section>

        {/* Key Departments */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
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

          <div className="grid lg:grid-cols-2 gap-8">
            <ContactCard
              icon={TrendingUp}
              title="Business Development"
              description="For partnership opportunities and business growth inquiries"
              contact="business@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
              actionText="Contact Business Team"
              isEmail={true}
            />

            <ContactCard
              icon={Shield}
              title="Compliance & Risk"
              description="For regulatory compliance and risk management matters"
              contact="compliance@emeraldcapitalgh.com"
              color="from-teal-500 to-cyan-500"
              actionText="Contact Compliance"
              isEmail={true}
            />

            <ContactCard
              icon={Users}
              title="Human Resources"
              description="For career opportunities and HR-related inquiries"
              contact="careers@emeraldcapitalgh.com"
              color="from-cyan-500 to-blue-500"
              actionText="View Careers"
              isEmail={true}
            />

            <ContactCard
              icon={Handshake}
              title="Investor Relations"
              description="For investment opportunities and shareholder information"
              contact="investors@emeraldcapitalgh.com"
              color="from-blue-500 to-indigo-500"
              actionText="Contact Investors Desk"
              isEmail={true}
            />
          </div>
        </motion.section>

        {/* Social Media */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">SOCIAL MEDIA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect on <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Social Media</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SocialCard
              platform="Facebook"
              handle="@EmeraldCapitalGH"
              icon={Facebook}
              color="bg-gradient-to-br from-blue-600 to-blue-700"
              link="https://facebook.com/EmeraldCapitalGH"
            />

            <SocialCard
              platform="Twitter"
              handle="@EmeraldCapitalGH"
              icon={Twitter}
              color="bg-gradient-to-br from-sky-500 to-blue-600"
              link="https://twitter.com/EmeraldCapitalGH"
            />

            <SocialCard
              platform="Instagram"
              handle="@EmeraldCapitalGH"
              icon={Instagram}
              color="bg-gradient-to-br from-pink-500 to-purple-600"
              link="https://instagram.com/EmeraldCapitalGH"
            />

            <SocialCard
              platform="LinkedIn"
              handle="Emerald Capital Ghana"
              icon={Linkedin}
              color="bg-gradient-to-br from-blue-700 to-blue-800"
              link="https://linkedin.com/company/EmeraldCapitalGH"
            />
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center py-20 px-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-lg mb-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">Ready to Connect?</p>
                  <p className="text-emerald-100">We're just a click away</p>
                </div>
              </motion.div>

              <h3 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Let's Build Your
                <br />
                Financial Future
                <span className="text-emerald-200"> Together</span>
              </h3>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="tel:+233208070000"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-emerald-600 font-bold hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Phone className="w-6 h-6" />
                  Call Now: +233 20 807 0000
                </motion.a>

                <motion.a
                  href="mailto:info@emeraldcapitalgh.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-800 text-white font-bold hover:bg-emerald-900 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Mail className="w-6 h-6" />
                  Email Us Today
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
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