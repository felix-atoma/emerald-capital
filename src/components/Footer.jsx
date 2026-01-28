import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Clock, 
  MessageCircle, 
  Globe, 
  Send,
  ArrowUpRight,
  ShieldCheck,
  Lock,
  CheckCircle,
  AlertCircle,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Building,
  PhoneCall,
  MailCheck,
  Headphones,
  CreditCard,
  TrendingUp,
  Briefcase,
  Zap,
  Sparkles,
  Target,
  Award,
  ChevronRight,
  Globe as GlobeIcon,
  User,
  Download,
  Play,
  Star,
  Award as AwardIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Hexagon,
  Diamond,
  Circle,
  Triangle,
  Square,
  Octagon,
  Cloud,
  Waves,
  Droplets,
  Wind,
  Moon,
  Sun,
  Activity,
  Battery,
  Cpu,
  Database,
  Server,
  Wifi,
  GitBranch,
  Smartphone,
  Hash
} from 'lucide-react';
import { newsletterAPI } from '../services/api';
import { useToast } from '../components/CustomToast';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const toast = useToast();

  // Generate bubbles
  useEffect(() => {
    const generatedBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 50 + 15,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.2 + 0.05,
      shape: Math.floor(Math.random() * 4),
      delay: Math.random() * 5,
      color: `rgba(16, 185, 129, ${Math.random() * 0.2 + 0.05})`,
    }));
    setBubbles(generatedBubbles);
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address', 3000);
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address', 3000);
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus('');

    try {
      const response = await newsletterAPI.subscribe({ email });
      
      if (response.data.success) {
        toast.success('Welcome to our exclusive financial circle! 🚀', 3000);
        setEmail('');
      }
    } catch (error) {
      toast.error('Subscription failed. Please try again.', 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const QuickLink = ({ to, children, icon: Icon }) => (
    <motion.li
      whileHover={{ x: 8 }}
      onMouseEnter={() => setHoveredCard(to)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Link 
        to={to} 
        className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors text-sm py-2 group relative overflow-hidden"
      >
        <motion.div 
          className="relative"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
          {Icon ? (
            <Icon className="w-4 h-4 relative z-10 text-emerald-400 group-hover:text-white transition-colors" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 relative z-10"></div>
          )}
        </motion.div>
        <span className="relative z-10 font-medium">{children}</span>
        <motion.div
          initial={{ opacity: 0, x: -15, scale: 0.8 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          className="absolute right-0 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg"
        >
          <ChevronRight className="w-3 h-3 text-white" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Link>
    </motion.li>
  );

  const SocialIcon = ({ href, icon: Icon, label, color }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="relative group"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700/50 flex items-center justify-center group-hover:border-emerald-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        <Icon className={`w-4 h-4 ${color} transition-colors relative z-10`} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-emerald-400/20 border-t-emerald-400/50 rounded-xl"
        />
      </div>
    </motion.a>
  );

  const StatCard = ({ value, label, icon: Icon, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: "spring" }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
      <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl p-3 border-2 border-gray-700/50 group-hover:border-emerald-500/40 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex items-center justify-between mb-2 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
          </div>
          <Sparkles className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent relative z-10">
          {value}
        </div>
        <div className="text-xs text-gray-400 mt-0.5 relative z-10">{label}</div>
      </div>
    </motion.div>
  );

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-black to-emerald-950/40 text-white overflow-hidden">
      {/* Ship Wave Design at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg 
          className="w-full h-24" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#14b8a6', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          
          {/* Main ship wave - larger peaks for ship bow effect */}
          <path 
            d="M0,50 Q120,10 240,50 T480,50 Q600,10 720,50 T960,50 Q1080,10 1200,50 T1440,50 L1440,0 L0,0 Z" 
            fill="url(#waveGradient)"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,50 Q120,10 240,50 T480,50 Q600,10 720,50 T960,50 Q1080,10 1200,50 T1440,50 L1440,0 L0,0 Z;
                M0,50 Q120,30 240,50 T480,50 Q600,30 720,50 T960,50 Q1080,30 1200,50 T1440,50 L1440,0 L0,0 Z;
                M0,50 Q120,10 240,50 T480,50 Q600,10 720,50 T960,50 Q1080,10 1200,50 T1440,50 L1440,0 L0,0 Z
              "
            />
          </path>
          
          {/* Secondary wave - smoother */}
          <path 
            d="M0,60 Q180,30 360,60 T720,60 Q900,30 1080,60 T1440,60 L1440,0 L0,0 Z" 
            fill="url(#waveGradient)"
            opacity="0.2"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,60 Q180,30 360,60 T720,60 Q900,30 1080,60 T1440,60 L1440,0 L0,0 Z;
                M0,60 Q180,45 360,60 T720,60 Q900,45 1080,60 T1440,60 L1440,0 L0,0 Z;
                M0,60 Q180,30 360,60 T720,60 Q900,30 1080,60 T1440,60 L1440,0 L0,0 Z
              "
            />
          </path>
          
          {/* Top sharp wave - ship hull cutting effect */}
          <path 
            d="M0,40 L60,15 L120,40 L180,20 L240,40 L300,15 L360,40 L420,20 L480,40 L540,15 L600,40 L660,20 L720,40 L780,15 L840,40 L900,20 L960,40 L1020,15 L1080,40 L1140,20 L1200,40 L1260,15 L1320,40 L1380,20 L1440,40 L1440,0 L0,0 Z" 
            fill="#10b981"
            opacity="0.15"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,40 L60,15 L120,40 L180,20 L240,40 L300,15 L360,40 L420,20 L480,40 L540,15 L600,40 L660,20 L720,40 L780,15 L840,40 L900,20 L960,40 L1020,15 L1080,40 L1140,20 L1200,40 L1260,15 L1320,40 L1380,20 L1440,40 L1440,0 L0,0 Z;
                M0,40 L60,25 L120,40 L180,28 L240,40 L300,25 L360,40 L420,28 L480,40 L540,25 L600,40 L660,28 L720,40 L780,25 L840,40 L900,28 L960,40 L1020,25 L1080,40 L1140,28 L1200,40 L1260,25 L1320,40 L1380,28 L1440,40 L1440,0 L0,0 Z;
                M0,40 L60,15 L120,40 L180,20 L240,40 L300,15 L360,40 L420,20 L480,40 L540,15 L600,40 L660,20 L720,40 L780,15 L840,40 L900,20 L960,40 L1020,15 L1080,40 L1140,20 L1200,40 L1260,15 L1320,40 L1380,20 L1440,40 L1440,0 L0,0 Z
              "
            />
          </path>
          
          {/* Decorative ship bow highlights */}
          <circle cx="360" cy="25" r="3" fill="#14b8a6" opacity="0.6">
            <animate attributeName="cy" dur="3s" repeatCount="indefinite" values="25;20;25" />
          </circle>
          <circle cx="720" cy="25" r="3" fill="#14b8a6" opacity="0.6">
            <animate attributeName="cy" dur="3.5s" repeatCount="indefinite" values="25;20;25" />
          </circle>
          <circle cx="1080" cy="25" r="3" fill="#14b8a6" opacity="0.6">
            <animate attributeName="cy" dur="4s" repeatCount="indefinite" values="25;20;25" />
          </circle>
        </svg>
      </div>

      {/* Animated Background with Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Bubbles - REDUCED COUNT */}
        <AnimatePresence>
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: bubble.size,
                height: bubble.size,
                opacity: bubble.opacity,
              }}
              initial={{ 
                y: 100,
                rotate: 0,
                scale: 0
              }}
              animate={{ 
                y: [-100, -300, -100],
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + bubble.speed * 5,
                repeat: Infinity,
                ease: "linear",
                delay: bubble.delay,
              }}
            >
              {bubble.shape === 0 ? (
                <Hexagon className="w-full h-full" fill={bubble.color} stroke="none" />
              ) : bubble.shape === 1 ? (
                <Diamond className="w-full h-full" fill={bubble.color} stroke="none" />
              ) : bubble.shape === 2 ? (
                <Circle className="w-full h-full" fill={bubble.color} stroke="none" />
              ) : (
                <Triangle className="w-full h-full" fill={bubble.color} stroke="none" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Circuit Board Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-lines" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0,20 L120,20 M20,0 L20,120 M40,80 L80,80 M80,40 L120,40" 
                    stroke="#10b981" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 6"
                    fill="none" />
              <Circle cx="20" cy="20" r="3" fill="#10b981" />
              <Circle cx="80" cy="40" r="3" fill="#10b981" />
              <Circle cx="40" cy="80" r="3" fill="#10b981" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-lines)" />
        </svg>

        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Stats Bar - FURTHER REDUCED PADDING */}
        <div className="border-b border-gray-800/50 pt-20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <StatCard value="24/7" label="Premium Support" icon={Headphones} delay={0} />
              <StatCard value="99.8%" label="Client Satisfaction" icon={Star} delay={0.1} />
              <StatCard value="15K+" label="Global Clients" icon={GlobeIcon} delay={0.2} />
              <StatCard value="5★" label="Industry Rating" icon={Award} delay={0.3} />
            </motion.div>
          </div>
        </div>

        {/* Footer Content - FURTHER REDUCED PADDING */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Premium Brand Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-3 border-4 border-emerald-400/20 border-t-emerald-400 border-b-cyan-400 rounded-3xl"
                    />
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-2 border-gray-950 flex items-center justify-center"
                    >
                      <Sparkles className="w-2 h-2 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                      Emerald Capital
                    </h2>
                    <p className="text-gray-400 text-xs font-medium">Financial Mastery</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed border-l-4 border-gradient-to-b from-emerald-500 to-cyan-500 pl-5">
                  Where financial innovation meets unparalleled excellence. 
                  Your journey to wealth mastery starts here.
                </p>

                <div className="flex gap-3 mb-4">
                  <SocialIcon href="https://x.com/CapitalEme21146" icon={Twitter} label="X" color="text-sky-400" />
                  <SocialIcon href="#" icon={Facebook} label="Facebook" color="text-blue-500" />
                  <SocialIcon href="https://www.instagram.com/emeraldcapitalgh/" icon={Instagram} label="Instagram" color="text-pink-500" />
                  <SocialIcon href="#" icon={Linkedin} label="LinkedIn" color="text-blue-400" />
                </div>
              </motion.div>
            </div>

            {/* Navigation - REDUCED SPACING */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  />
                  Navigation
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <QuickLink to="/" icon={Target}>Home</QuickLink>
                    <QuickLink to="/about" icon={Building}>About</QuickLink>
                    <QuickLink to="/blog" icon={TrendingUpIcon}>Insights</QuickLink>
                    <QuickLink to="/contact" icon={MessageCircle}>Contact</QuickLink>
                  </ul>
                  <ul className="space-y-2">
                    <QuickLink to="/loans" icon={CreditCard}>Loans</QuickLink>
                    <QuickLink to="/investments" icon={Briefcase}>Investments</QuickLink>
                    <QuickLink to="/digital-banking" icon={GlobeIcon}>Digital Banking</QuickLink>
                    <QuickLink to="/careers" icon={User}>Careers</QuickLink>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Contact Cards - REDUCED PADDING */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <motion.span
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  />
                  Contact & Support
                </h3>
                
                <div className="space-y-3">
                  <motion.a 
                    href="tel:+233208070000"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-2 border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 group backdrop-blur-sm"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center">
                        <PhoneCall className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Executive Line</p>
                      <p className="text-base font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        0208070000 
                      </p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="mailto:info@emeraldcapitalgh.com"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-2 border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 group backdrop-blur-sm"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center">
                        <MailCheck className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email Support</p>
                      <p className="text-white font-bold text-sm">support@emeraldcapitalgh.com</p>
                    </div>
                  </motion.a>

                  {/* USSD Code Section */}
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-2 border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 group backdrop-blur-sm"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">USSD Banking</p>
                      <p className="text-base font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        *928*321#
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-3 text-xs text-gray-400 p-2.5 rounded-lg bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-sm">
                    <Headphones className="w-4 h-4 text-emerald-500" />
                    <span>24/7 Emergency:</span>
                    <a href="tel:0208203653" className="text-emerald-400 hover:text-cyan-300 transition-colors font-bold">
                      020 820 3653
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Newsletter - REDUCED PADDING */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  />
                  Stay Ahead
                </h3>
                
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-xl blur-xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-2xl rounded-xl p-4 border-2 border-gray-700/50 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur-md"></div>
                        <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center">
                          <Send className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Financial Intelligence</h4>
                        <p className="text-gray-400 text-xs">Premium insights delivered</p>
                      </div>
                    </div>

                    <form onSubmit={handleNewsletterSubmit} className="space-y-3 relative z-10">
                      <div className="relative">
                        <input 
                          type="email" 
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-900/60 text-white text-sm border-2 border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/30 transition-all duration-300 backdrop-blur-sm"
                          required
                          disabled={isSubmitting}
                        />
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`absolute right-1.5 top-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-xs ${
                            isSubmitting 
                              ? 'bg-gray-700 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-emerald-500/50'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Joining
                            </>
                          ) : (
                            <>
                              Subscribe
                              <ArrowUpRight className="w-3 h-3" />
                            </>
                          )}
                        </motion.button>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <ShieldCheck className="w-3 h-3 text-emerald-500" />
                        <span>Secure & confidential. Unsubscribe anytime.</span>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400 p-2 rounded-lg bg-gradient-to-r from-gray-900/40 to-gray-800/40">
                    <Lock className="w-3 h-3 text-emerald-500" />
                    <span>256-bit Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 p-2 rounded-lg bg-gradient-to-r from-gray-900/40 to-gray-800/40">
                    <Shield className="w-3 h-3 text-emerald-500" />
                    <span>GDPR Compliant</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar - FURTHER REDUCED PADDING */}
          <div className="relative border-t border-gray-800/50 pt-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Emerald Capital
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-gray-500 text-xs">
                    Licensed by Bank of Ghana • Registration: AK-634-5480
                  </p>
                  <div className="flex items-center gap-1 px-2 py-1 bg-emerald-900/30 rounded text-emerald-400 text-xs font-bold border border-emerald-700/50">
                    <Smartphone className="w-3 h-3" />
                    <span>USSD: *928*321#</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Disclosures', 'Sitemap'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors hover:underline hover:underline-offset-4 text-xs"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link 
                  to="/admin/blog/login"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 group text-xs"
                >
                  <Shield className="w-4 h-4 group-hover:text-emerald-500 transition-colors" />
                  <span className="font-medium">Admin Login</span>
                </Link>
                
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 text-emerald-300 hover:text-emerald-200 transition-colors font-medium text-xs group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Zap className="w-4 h-4 group-hover:animate-pulse relative z-10" />
                  <Sparkles className="w-3 h-3 relative z-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.15, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 text-white shadow-2xl shadow-emerald-500/50 flex items-center justify-center hover:shadow-emerald-500/70 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
        <ArrowUpRight className="w-5 h-5 rotate-45 relative z-10" />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-4 border-emerald-400/30 rounded-lg"
        />
      </motion.button>
    </footer>
  );
};

export default Footer;