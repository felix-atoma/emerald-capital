import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Clock, 
  Heart, 
  Globe, 
  MessageCircle,
  Building,
  Users,
  Shield,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  ExternalLink,
  Map,
  Navigation,
  Globe2,
  MailCheck,
  PhoneCall,
  Building2,
  MapPinned,
  Briefcase,
  CreditCard,
  Headphones,
  Smartphone,
  Laptop,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  FileText,
  HelpCircle,
  Bot,
  MessageSquare,
  Sparkles,
  Zap,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Users as UsersIcon,
  Award as AwardIcon,
  Target as TargetIcon,
  Handshake,
  MoreHorizontal,
  AlertCircle,
  X
} from 'lucide-react';
import { contactAPI } from '../services/api';
import toast, { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    department: '',
    inquiryType: '',
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [animatedStats, setAnimatedStats] = useState({
    responseTime: 0,
    satisfaction: 0,
    supportHours: 0,
  });
  const formRef = useRef(null);

  const departments = [
    { value: 'general', label: 'General Inquiry', icon: HelpCircle },
    { value: 'support', label: 'Customer Support', icon: Headphones },
    { value: 'business', label: 'Business Development', icon: TrendingUp },
    { value: 'technical', label: 'Technical Support', icon: Laptop },
    { value: 'compliance', label: 'Compliance', icon: ShieldCheck },
    { value: 'hr', label: 'Human Resources', icon: Users },
    { value: 'marketing', label: 'Marketing', icon: Target },
    { value: 'investor', label: 'Investor Relations', icon: Briefcase },
    { value: 'partnerships', label: 'Partnerships', icon: Handshake },
    { value: 'other', label: 'Other', icon: MoreHorizontal }
  ];

  const inquiryTypes = [
    'Account Opening',
    'Loan Inquiry',
    'Technical Issue',
    'Investment Advice',
    'Complaint',
    'Feedback',
    'Partnership',
    'Career Opportunity',
    'Press Inquiry',
    'Other'
  ];

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
        if (currentResponse > 120) clearInterval(responseInterval);
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
          max-w-md w-full bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-lg shadow-lg rounded-2xl pointer-events-auto flex ring-1 ring-red-200/50`}>
          <div className="flex-1 w-0 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <ShieldIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-lg font-bold text-gray-900">Consent Required</p>
                <p className="mt-1 text-gray-700">Please agree to our terms and conditions to proceed</p>
              </div>
            </div>
          </div>
        </div>
      ));
      return;
    }

    setIsSubmitting(true);

    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        website: formData.website || '',
        message: formData.message,
        department: formData.department,
        inquiryType: formData.inquiryType,
        agreedToTerms: formData.agreed,
      };

      await contactAPI.submitMessage(contactData);

      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="max-w-md w-full bg-gradient-to-r from-emerald-500/10 to-teal-600/10 backdrop-blur-lg shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-emerald-200/50 overflow-hidden"
        >
          <div className="flex-1 w-0 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <p className="text-xl font-bold text-gray-900">Message Sent Successfully!</p>
                <p className="mt-2 text-gray-700">Our team will contact you within 2 business hours</p>
                <div className="mt-4 flex items-center text-sm text-emerald-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Priority Response: 120 minutes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-l border-emerald-200/30">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-emerald-600 hover:text-emerald-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      ));

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        department: '',
        inquiryType: '',
        agreed: false,
      });

    } catch (error) {
      toast.custom((t) => (
        <div className="max-w-md w-full bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-lg shadow-lg rounded-2xl pointer-events-auto flex ring-1 ring-red-200/50">
          <div className="flex-1 w-0 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-lg font-bold text-gray-900">Submission Failed</p>
                <p className="mt-1 text-gray-700">{error.response?.data?.message || 'Please try again or contact support directly.'}</p>
              </div>
            </div>
          </div>
        </div>
      ));
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactChannel = ({ icon: Icon, title, description, details, color, action }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
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
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="space-y-4">
          {details}
          {action && (
            <motion.div
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold cursor-pointer group/action"
            >
              {action}
              <ArrowRight className="w-4 h-4 group-hover/action:translate-x-1 transition-transform duration-300" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );

  const OfficeCard = ({ region, manager, phone, email, coordinates }) => (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-100/50 hover:border-emerald-200/70 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">{region}</h4>
            <p className="text-emerald-600 font-semibold text-sm">{manager}</p>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <Building2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
          </div>
        </div>
        <div className="space-y-3">
          <a href={`tel:${phone}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50/50 transition-colors group/link">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center group-hover/link:bg-emerald-200 transition-colors">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium text-gray-900">{phone}</p>
            </div>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50/50 transition-colors group/link">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center group-hover/link:bg-emerald-200 transition-colors">
              <Mail className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-900 truncate">{email}</p>
            </div>
          </a>
        </div>
        <div className="mt-4 pt-4 border-t border-emerald-100/50">
          <button className="w-full py-2 rounded-lg bg-emerald-50 text-emerald-600 font-medium hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            View on Map
          </button>
        </div>
      </div>
    </motion.div>
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

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-200/20 to-teal-200/20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Toaster with Custom Styling */}
      <Toaster 
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: 80,
        }}
      />

      {/* Hero Section with Parallax */}
      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex flex-col items-center text-center">
              {/* Premium Badge */}
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
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-emerald-700 font-bold text-sm tracking-wider uppercase">
                    Premium Support
                  </p>
                  <p className="text-emerald-600 text-xs">24/7 Global Assistance</p>
                </div>
              </motion.div>

              {/* Hero Text */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight"
              >
                <span className="relative inline-block">
                  <span className="relative z-10">Connect</span>
                  <motion.span
                    animate={{ 
                      width: ["0%", "100%", "0%"],
                      left: ["0%", "0%", "100%"]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-2 h-3 bg-emerald-300/30 -rotate-1 transform z-0"
                  />
                </span>
                <br />
                <span className="relative">
                  with
                  <motion.span
                    className="absolute -top-4 -right-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-8 h-8 text-emerald-400" />
                  </motion.span>
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Excellence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Where financial expertise meets personalized service. Our global team 
                of specialists is dedicated to transforming your financial aspirations 
                into reality through strategic partnership and innovative solutions.
              </motion.p>

              {/* Stats Counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-8 mb-16"
              >
                {[
                  { label: 'Avg Response', value: animatedStats.responseTime, suffix: 'min', icon: Zap },
                  { label: 'Satisfaction', value: animatedStats.satisfaction, suffix: '%', icon: Award },
                  { label: 'Support Hours', value: animatedStats.supportHours, suffix: '/7', icon: Clock },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100/50 shadow-lg">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mx-auto mb-4">
                            <Icon className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-2">
                            {Math.round(stat.value)}{stat.suffix}
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

      {/* Main Content with Glass Morphism */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Contact Channels Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <GlobeIcon className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">GLOBAL REACH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Contact</span> Channels
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Multiple pathways to connect with our expert teams across the globe
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ContactChannel
              icon={PhoneCall}
              title="Elite Support"
              description="Dedicated 24/7 global support team with multi-lingual specialists"
              color="from-teal-500 to-cyan-500"
              details={
                <div className="space-y-3">
                  {['+1 (888) 888-8888', '+44 20 7123 4567', '+65 3123 4567'].map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone}`}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-emerald-50/50 border border-emerald-100/50 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <span className="font-semibold text-gray-800">{phone}</span>
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                        <Phone className="w-4 h-4 text-emerald-600" />
                      </div>
                    </a>
                  ))}
                </div>
              }
              action="Schedule Call"
            />

            <ContactChannel
              icon={Globe2}
              title="Digital Excellence"
              description="Seamless digital experience across all platforms and devices"
              color="from-emerald-500 to-teal-500"
              details={
                <div className="space-y-4">
                  <a href="mailto:executive@emeraldcapital.com" className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-emerald-50/50 border border-emerald-100/50 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <MailCheck className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Executive Email</p>
                      <p className="text-sm text-gray-600">executive@emeraldcapital.com</p>
                    </div>
                  </a>
                  <a href="https://app.emeraldcapital.com" className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-emerald-50/50 border border-emerald-100/50 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <Laptop className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Client Portal</p>
                      <p className="text-sm text-gray-600">app.emeraldcapital.com</p>
                    </div>
                  </a>
                </div>
              }
              action="Launch Portal"
            />

            <ContactChannel
              icon={Clock}
              title="Strategic Timing"
              description="Optimized service windows for global business operations"
              color="from-teal-500 to-cyan-500"
              details={
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Building className="w-5 h-5 text-emerald-600" />
                      <p className="font-bold text-gray-800">Global Headquarters</p>
                    </div>
                    <div className="pl-8">
                      <p className="text-lg font-semibold text-gray-700">Mon - Fri: 8:00 AM – 8:00 PM GMT</p>
                      <p className="text-sm text-gray-500">Extended hours for premium clients</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-emerald-100/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-5 h-5 text-emerald-600" />
                      <p className="font-bold text-gray-800">Priority Response</p>
                    </div>
                    <div className="pl-8">
                      <p className="text-lg font-semibold text-emerald-600">24/7 Emergency Support</p>
                      <p className="text-sm text-gray-500">For urgent financial matters</p>
                    </div>
                  </div>
                </div>
              }
              action="View Timezones"
            />
          </div>
        </motion.section>

        {/* Global Network Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 mb-4">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">GLOBAL NETWORK</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Locations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { region: 'London HQ', manager: 'Sarah Chen', phone: '+44 20 7123 4567', email: 'london@emeraldcapital.com', coordinates: '51.5074° N, 0.1278° W' },
              { region: 'New York', manager: 'Michael Rodriguez', phone: '+1 (212) 555-1234', email: 'ny@emeraldcapital.com', coordinates: '40.7128° N, 74.0060° W' },
              { region: 'Singapore', manager: 'Wei Li', phone: '+65 3123 4567', email: 'singapore@emeraldcapital.com', coordinates: '1.3521° N, 103.8198° E' },
              { region: 'Dubai', manager: 'Ahmed Al-Mansoori', phone: '+971 4 123 4567', email: 'dubai@emeraldcapital.com', coordinates: '25.2048° N, 55.2708° E' },
              { region: 'Tokyo', manager: 'Yuki Tanaka', phone: '+81 3 1234 5678', email: 'tokyo@emeraldcapital.com', coordinates: '35.6762° N, 139.6503° E' },
              { region: 'Sydney', manager: 'James Wilson', phone: '+61 2 1234 5678', email: 'sydney@emeraldcapital.com', coordinates: '33.8688° S, 151.2093° E' },
              { region: 'Hong Kong', manager: 'Mei Lin', phone: '+852 1234 5678', email: 'hongkong@emeraldcapital.com', coordinates: '22.3193° N, 114.1694° E' },
              { region: 'Zurich', manager: 'Hans Müller', phone: '+41 44 123 45 67', email: 'zurich@emeraldcapital.com', coordinates: '47.3769° N, 8.5417° E' },
            ].map((office, index) => (
              <OfficeCard key={index} {...office} />
            ))}
          </div>
        </motion.section>

        {/* Interactive Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          ref={formRef}
        >
          <div className="relative">
            {/* Form Background Effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-emerald-100/50 shadow-2xl shadow-emerald-100/30 overflow-hidden">
              {/* Form Header */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-50"></div>
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center border-4 border-white">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                      Strategic <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Inquiry</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl">
                      Submit your inquiry and our executive team will provide personalized guidance
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">Executive Response</div>
                    <div className="text-gray-600">Guaranteed within 120 minutes</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Department Selection Tabs */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                    Select Inquiry Category
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {departments.map((dept, index) => {
                      const Icon = dept.icon;
                      return (
                        <motion.button
                          key={index}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveTab(dept.value)}
                          className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                            activeTab === dept.value
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                              : 'bg-white border-2 border-emerald-100 text-gray-700 hover:border-emerald-200 hover:shadow-md'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          {dept.label}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Grid */}
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-5 bg-white/80 border-2 border-emerald-100/50 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <UserCheck className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-5 bg-white/80 border-2 border-emerald-100/50 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="professional@email.com"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <Mail className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-5 bg-white/80 border-2 border-emerald-100/50 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="+1 (234) 567-8900"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <Phone className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                        Company Website
                      </label>
                      <div className="relative">
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full px-6 py-5 bg-white/80 border-2 border-emerald-100/50 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="https://company.com"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <Globe className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                      Strategic Message *
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-6 py-5 bg-white/80 border-2 border-emerald-100/50 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 text-lg placeholder-gray-400 resize-none"
                        placeholder="Describe your strategic objectives and how we can assist..."
                      />
                      <div className="absolute right-4 top-6">
                        <MessageSquare className="w-5 h-5 text-emerald-400" />
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-500 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Be specific about your goals for optimal response
                    </div>
                  </div>
                </div>

                {/* Consent Section */}
                <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 rounded-2xl p-8 border border-emerald-100/50 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        className="w-6 h-6 text-emerald-600 border-2 border-emerald-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 text-lg leading-relaxed">
                        I hereby consent to Emerald Capital's{' '}
                        <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold underline decoration-2">
                          Terms of Service
                        </a>{' '}
                        and acknowledge that my information will be processed in accordance with the{' '}
                        <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold underline decoration-2">
                          Global Privacy Policy
                        </a>
                        . I understand that by submitting this inquiry, I may be contacted by our executive team 
                        for consultation purposes.
                      </label>
                      <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        <span>Enterprise-grade encryption and data protection</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-16 py-6 rounded-2xl font-bold text-xl transition-all duration-300 inline-flex items-center justify-center gap-4 relative overflow-hidden group ${
                      isSubmitting
                        ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-emerald-500/40'
                    }`}
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Strategic Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Strategic Inquiry</span>
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                  
                  <div className="mt-6 flex items-center justify-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-emerald-500" />
                      <span className="font-semibold">120 min</span>
                      <span>Guaranteed Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                      <span>Enterprise Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-500" />
                      <span>Executive Priority</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-12 border border-emerald-200/30">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready for <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Transformation</span>?
                </h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Join thousands of satisfied clients who have elevated their financial strategies 
                  through our premium advisory services.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Schedule Executive Call
                    <PhoneCall className="w-5 h-5" />
                  </motion.button>
                  <motion.a
                    href="https://demo.emeraldcapital.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-200/40 border-2 border-emerald-100 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    View Platform Demo
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium Footer */}
      <footer className="relative overflow-hidden">
        {/* Footer Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900/90 to-teal-900"></div>
        
        {/* SVG Pattern Background - Fixed Syntax */}
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
              {/* Company Philosophy */}
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
                <p className="text-emerald-200/80 leading-relaxed">
                  A global financial institution built on principles of trust, 
                  excellence, and mutual growth across all communities.
                </p>
              </div>
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {Math.round(animatedStats.responseTime)}<span className="text-emerald-400">min</span>
                  </div>
                  <div className="text-emerald-300 font-medium">Response Time</div>
                  <div className="text-emerald-400/60 text-sm mt-1">Guaranteed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {Math.round(animatedStats.satisfaction)}<span className="text-emerald-400">%</span>
                  </div>
                  <div className="text-emerald-300 font-medium">Client Satisfaction</div>
                  <div className="text-emerald-400/60 text-sm mt-1">Industry Leading</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    24<span className="text-emerald-400">/7</span>
                  </div>
                  <div className="text-emerald-300 font-medium">Global Support</div>
                  <div className="text-emerald-400/60 text-sm mt-1">Always Available</div>
                </div>
              </div>
              
              {/* Closing Statement */}
              <div className="text-center lg:text-right">
                <div className="flex flex-col items-center lg:items-end gap-4">
                  <p className="text-2xl font-bold text-white">
                    Excellence in Every Connection
                  </p>
                  <p className="text-emerald-300 max-w-md">
                    Thank you for considering Emerald Capital as your financial partner. 
                    We're committed to empowering your journey towards financial mastery.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-200 font-medium">Certified Financial Excellence</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="mt-16 pt-8 border-t border-emerald-800/30 text-center">
              <p className="text-emerald-400/60">
                © {new Date().getFullYear()} Emerald Capital Holdings. All rights reserved. 
                <span className="mx-4">•</span>
                <a href="#" className="hover:text-emerald-300 transition-colors">Privacy Policy</a>
                <span className="mx-4">•</span>
                <a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a>
                <span className="mx-4">•</span>
                <a href="#" className="hover:text-emerald-300 transition-colors">Compliance</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center hover:shadow-3xl hover:shadow-emerald-500/60 transition-all duration-300"
        onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        <MessageSquare className="w-7 h-7" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
      </motion.button>
    </div>
  );
};

export default Contact;