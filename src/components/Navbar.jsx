import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, Menu, X, Globe, User, Shield, Bell, Search, Sparkles, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRefs = useRef({});
  const searchRef = useRef(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdowns
      if (!Object.values(dropdownRefs.current).some(ref => ref?.contains(event.target))) {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
      }
      
      // Close search
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
  }, [location]);

  const navLinks = [
    { 
      label: "Banking", 
      icon: "🏦",
      dropdown: [
        { label: "Remittance & Money Transfer", link: true },
        { 
          label: "Savings Products",
          icon: "💰",
          nested: [
            { label: "Emerald Capital — Savings Products", icon: "💎" },
            { label: "Digital & Mobile Banking", icon: "📱" },
            { label: "Remittance & Money Transfer", icon: "💸" },
            { label: "Investment & Wealth Management", icon: "📈" },
            { label: "Savings Products (Purple / Gold Theme)", icon: "🎨" }
          ]
        }
      ]
    },
    {
      label: "Loans",
      icon: "📝",
      dropdown: [
        { 
          label: "Microfinance Loans",
          icon: "🤝",
          nested: [
            { label: "Business Starter Loan", icon: "🚀" },
            { label: "Working Capital Loan", icon: "⚙️" },
            { label: "Agricultural Loan", icon: "🌾" },
            { label: "Education & Skills Loan", icon: "🎓" },
            { label: "Emergency & Personal Loan", icon: "🆘" },
            { label: "Group/Community Loan", icon: "👥" },
            { label: "Green & Sustainable Loan", icon: "🌿" },
            { label: "Housing & Home Improvement Loan", icon: "🏠" },
            { label: "Health & Medical Loan", icon: "🏥" },
            { label: "Women's Empowerment Loan", icon: "💪" },
            { label: "Micro-Enterprise Expansion Loan", icon: "📊" },
            { label: "Emergency Agriculture Relief Loan", icon: "🌧️" },
            { label: "Transport & Equipment Loan", icon: "🚚" },
            { label: "Seasonal Business Loan", icon: "🌤️" }
          ]
        },
        { 
          label: "Specialized Loans",
          icon: "🎯",
          nested: [
            { label: "Section 1: Microfinance Loan Products", icon: "📋" },
            { label: "Section 2: Specialized Loan Products", icon: "📑" }
          ]
        },
        { label: "SME Loan", link: true, icon: "🏢" },
        { label: "Business Loan", link: true, icon: "💼" },
        { label: "Personal Loan", link: true, icon: "👤" },
        { label: "Funeral Loans", link: true, icon: "⚰️" },
        { label: "Education Loan", link: true, icon: "📚" },
      ]
    },
    {
      label: "Investment",
      icon: "📈",
      dropdown: [
        { label: "Investment & Wealth Management", link: true, icon: "💰" },
        { label: "Fixed Deposit", link: true, icon: "🏦" },
      ],
    },
    {
      label: "Project Financing",
      icon: "🏗️",
      dropdown: [
        { label: "Emerald Business", link: true, icon: "💎" },
        { label: "Emerald Pay", link: true, icon: "💳" },
        { label: "Insurance Products", link: true, icon: "🛡️" },
      ],
    },
    {
      label: "Company",
      icon: "🏛️",
      dropdown: [
        { label: "About", link: true, icon: "ℹ️" },
        { 
          label: "Leadership & Governance",
          icon: "👑",
          nested: [
            { label: "Leadership & Governance Overview", icon: "👥" },
            { label: "Ownership & Shareholders", icon: "👤" },
            { label: "Board of Directors", icon: "🎭" },
            { label: "Executive Leadership Team", icon: "💼" },
            { label: "Governance Framework", icon: "⚖️" }
          ]
        },
        { 
          label: "Organizational Structure",
          icon: "🏢",
          nested: [
            { label: "Shareholders/Owners", icon: "👥" },
            { label: "Board of Directors Structure", icon: "📊" },
            { label: "Executive Management / C-Suite", icon: "💼" },
            { label: "Chief Executive Officer (CEO)", icon: "👨‍💼" },
            { label: "Chief Operating Officer (COO)", icon: "⚙️" },
            { label: "Chief Financial Officer (CFO)", icon: "💰" },
            { label: "Chief Risk Officer (CRO)", icon: "⚠️" },
            { label: "Chief Technology Officer (CTO)", icon: "💻" },
            { label: "Chief Marketing & Business Development Officer (CMO/BDO)", icon: "📢" },
            { label: "Chief Compliance & Legal Officer (CCO/CLO)", icon: "⚖️" },
            { label: "Chief Investment Officer (CIO)", icon: "📈" },
            { label: "Chief Insurance Officer (CInsO)", icon: "🛡️" },
            { label: "Chief Human Resources Officer (CHRO)", icon: "👥" },
            { label: "Operational Structure and Organogram", icon: "📋" }
          ]
        },
        { 
          label: "Regional Management",
          icon: "🗺️",
          nested: [
            { label: "Greater Accra Region", icon: "📍" },
            { label: "Ashanti Region", icon: "📍" },
            { label: "Ahafo Region", icon: "📍" },
            { label: "Western North Region", icon: "📍" },
            { label: "Western Region", icon: "📍" },
            { label: "Central Region", icon: "📍" },
            { label: "Eastern Region", icon: "📍" },
            { label: "Volta & Oti Region", icon: "📍" },
            { label: "Bono & Bono East Region", icon: "📍" },
            { label: "Northern, Savannah & North East", icon: "📍" },
            { label: "Upper West & Upper East Region", icon: "📍" },
            { label: "Diaspora Services", icon: "🌍" }
          ]
        },
      ]
    },
    { label: "Blog", link: "/blog", icon: "📝" },
    { label: "Contact", link: "/contact", icon: "📞" },
  ];

  const handleDropdownToggle = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
    setActiveNestedDropdown(null);
  };

  const handleNestedToggle = (label) => {
    setActiveNestedDropdown(activeNestedDropdown === label ? null : label);
  };

  const pathFor = (item) => {
    const cleanItem = item
      .replace(/^Section\s+\d+:\s*/, '')
      .replace(/—/g, '')
      .toLowerCase()
      .replace(/\s*&\s*/g, "-and-")
      .replace(/\s*\/\s*/g, '')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/\s+/g, "-")
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
    return `/${cleanItem}`;
  };

  // Desktop Nav Item Component
  const DesktopNavItem = ({ link }) => {
    const hasDropdown = link.dropdown && link.dropdown.length > 0;
    const isActive = activeDropdown === link.label;
    
    // For direct links (Blog, Contact)
    if (!hasDropdown && link.link) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <Link 
            to={link.link}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-lg">{link.icon}</span>
            <span className="font-semibold text-sm tracking-wide relative z-10 text-gray-700 group-hover:text-emerald-600">
              {link.label}
            </span>
          </Link>
        </motion.div>
      );
    }
    
    // For dropdown items
    return (
      <div 
        className="relative"
        ref={el => dropdownRefs.current[link.label] = el}
        onMouseEnter={() => setActiveDropdown(link.label)}
        onMouseLeave={() => {
          if (!isActive) {
            setActiveDropdown(null);
            setActiveNestedDropdown(null);
          }
        }}
      >
        <motion.div 
          className="flex items-center space-x-2 cursor-pointer px-4 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          onClick={() => hasDropdown && handleDropdownToggle(link.label)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="text-lg">{link.icon}</span>
          <span className={`font-semibold text-sm tracking-wide relative z-10 ${
            isActive ? 'text-emerald-600' : 'text-gray-700 group-hover:text-emerald-600'
          }`}>
            {link.label}
          </span>
          {hasDropdown && (
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-3 h-3 ml-1 relative z-10" />
            </motion.div>
          )}
        </motion.div>

        {/* Desktop Main Dropdown */}
        <AnimatePresence>
          {isActive && hasDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full pt-4 z-50"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-xl rounded-2xl shadow-2xl shadow-emerald-100/30 border border-emerald-100/50 w-80"></div>
                <div className="relative p-2">
                  {link.dropdown.map((item, index) => (
                    <div 
                      key={`${link.label}-${index}`} 
                      className="relative group/item"
                    >
                      {item.nested ? (
                        <>
                          <div 
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-emerald-50/50 transition-all duration-300 cursor-pointer group-hover/item:shadow-sm border border-transparent hover:border-emerald-100/50"
                            onMouseEnter={() => setActiveNestedDropdown(`${link.label}-${item.label}`)}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-lg">{item.icon}</span>
                              <span className="font-medium text-gray-700 group-hover/item:text-emerald-700">
                                {item.label}
                              </span>
                            </div>
                            <motion.div
                              animate={{ rotate: activeNestedDropdown === `${link.label}-${item.label}` ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-emerald-500" />
                            </motion.div>
                          </div>
                          
                          {/* Nested Desktop Dropdown */}
                          <AnimatePresence>
                            {activeNestedDropdown === `${link.label}-${item.label}` && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full top-0 z-50 ml-2"
                                onMouseEnter={() => setActiveNestedDropdown(`${link.label}-${item.label}`)}
                                onMouseLeave={() => setActiveNestedDropdown(null)}
                              >
                                <div className="relative">
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/60 backdrop-blur-xl rounded-2xl shadow-2xl shadow-emerald-100/30 border border-emerald-100/50 w-80"></div>
                                  <div className="relative p-2 max-h-96 overflow-y-auto custom-scrollbar">
                                    {item.nested.map((nestedItem, nestedIndex) => (
                                      <Link
                                        key={`${item.label}-${nestedIndex}`}
                                        to={pathFor(nestedItem.label)}
                                        onClick={() => {
                                          setActiveDropdown(null);
                                          setActiveNestedDropdown(null);
                                        }}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50/50 transition-all duration-300 group/link border border-transparent hover:border-emerald-100/50"
                                      >
                                        <span className="text-lg">{nestedItem.icon}</span>
                                        <span className="font-medium text-gray-700 group-hover/link:text-emerald-700">
                                          {nestedItem.label}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.link ? pathFor(item.label) : item.label}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50/50 transition-all duration-300 group/link border border-transparent hover:border-emerald-100/50"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="font-medium text-gray-700 group-hover/link:text-emerald-700">
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Mobile Nav Item Component
  const MobileNavItem = ({ link }) => {
    const hasDropdown = link.dropdown && link.dropdown.length > 0;
    const isActive = activeDropdown === link.label;
    
    // For direct links (Blog, Contact)
    if (!hasDropdown && link.link) {
      return (
        <div className="border-b border-gray-100/30 last:border-b-0">
          <Link
            to={link.link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 py-4 px-6 text-gray-800 font-semibold hover:text-emerald-700 transition-colors"
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        </div>
      );
    }
    
    // For dropdown items
    return (
      <div className="border-b border-gray-100/30 last:border-b-0">
        <>
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between w-full py-4 px-6 text-gray-800 font-semibold hover:text-emerald-700 transition-colors"
            onClick={() => handleDropdownToggle(link.label)}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </div>
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
          
          {/* Mobile Main Dropdown */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-emerald-50/30 pl-8">
                  {link.dropdown.map((item, index) => {
                    const isNestedActive = activeNestedDropdown === `${link.label}-${item.label}`;
                    
                    return (
                      <div key={`mobile-${link.label}-${index}`}>
                        {item.nested ? (
                          <>
                            <motion.button
                              whileTap={{ scale: 0.98 }}
                              className="flex items-center justify-between w-full py-3 px-6 text-gray-700 hover:text-emerald-700 font-medium transition-colors border-t border-gray-200/50"
                              onClick={() => handleNestedToggle(`${link.label}-${item.label}`)}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.label}</span>
                              </div>
                              <motion.div
                                animate={{ rotate: isNestedActive ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </motion.div>
                            </motion.button>
                            
                            {/* Mobile Nested Dropdown */}
                            <AnimatePresence>
                              {isNestedActive && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="bg-emerald-50/50">
                                    {item.nested.map((nestedItem, nestedIndex) => (
                                      <Link
                                        key={`mobile-nested-${item.label}-${nestedIndex}`}
                                        to={pathFor(nestedItem.label)}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 py-2.5 px-10 text-gray-600 hover:text-emerald-700 transition-colors border-t border-gray-200/30 text-sm"
                                      >
                                        <span className="text-base">{nestedItem.icon}</span>
                                        <span>{nestedItem.label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={item.link ? pathFor(item.label) : item.label}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-3 px-6 text-gray-700 hover:text-emerald-700 font-medium transition-colors border-t border-gray-200/50"
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </div>
    );
  };

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm"></div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-emerald-100/50 shadow-2xl shadow-emerald-100/20' 
            : 'bg-white/80 backdrop-blur-lg border-b border-emerald-100/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Logo container with sparkle effect */}
                  <div className="relative w-48 h-12 flex items-center justify-center group-hover:shadow-xl transition-all duration-500">
                    <img
                      src="/emerald-logo.png"
                      alt="Emerald Capital Logo"
                      className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/200x50/10b981/ffffff?text=Emerald+Capital";
                      }}
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Sparkles className="w-2 h-2 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Optional: Text beside logo */}
                <div className="hidden lg:block">
                  <h1 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Premium Banking</h1>
                  <p className="text-xs text-gray-500">Since 2018</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <DesktopNavItem key={link.label} link={link} />
              ))}
              
              {/* Search Bar */}
              <div className="relative ml-4" ref={searchRef}>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 240 }}
                      exit={{ opacity: 0, width: 0 }}
                      className="overflow-hidden"
                    >
                      <input
                        type="text"
                        placeholder="Search services..."
                        className="w-full px-4 py-2 bg-white/80 border border-emerald-100/50 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${searchOpen ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-emerald-50 text-gray-600'}`}
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <Search className="w-5 h-5" />
                </motion.button>
              </div>

              {/* User Actions */}
              <div className="flex items-center gap-3 ml-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 rounded-full hover:bg-emerald-50 text-gray-600 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 rounded-full hover:bg-emerald-50 text-gray-600 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 hover:border-emerald-200 transition-colors"
                >
                  <User className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">Account</span>
                </motion.button>

                {/* CTA Button - Links to Contact */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <Link
                    to="/contact"
                    className="relative px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold text-sm hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    Digital Banking
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-emerald-50 text-gray-600 transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-5 h-5" />
              </motion.button>
              
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-sm font-semibold hover:shadow-lg transition-all duration-300"
              >
                Login
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl hover:bg-emerald-50/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4">
                  <input
                    type="text"
                    placeholder="Search services, loans, investments..."
                    className="w-full px-4 py-3 bg-white/80 border-2 border-emerald-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="bg-white/95 backdrop-blur-xl shadow-2xl border-t border-emerald-100/50 rounded-b-2xl my-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  <div className="py-4">
                    <div className="px-6 mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <img
                          src="/emerald-logo.png"
                          alt="Emerald Capital Logo"
                          className="h-8 w-auto object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/200x50/10b981/ffffff?text=Emerald+Capital";
                          }}
                        />
                      </div>
                      <p className="text-center text-gray-600 text-sm">Premium Banking Services</p>
                    </div>
                    
                    {navLinks.map((link) => (
                      <MobileNavItem key={`mobile-${link.label}`} link={link} />
                    ))}
                    
                    {/* Mobile User Actions - UPDATED: Removed Open Account */}
                    <div className="px-6 py-8 border-t border-gray-100/50">
                      <Link
                        to="/contact"
                        className="block w-full px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-center hover:shadow-lg transition-all duration-300"
                      >
                        <div className="font-semibold">Contact Us</div>
                        <div className="text-xs opacity-90 mt-1">24/7 Support</div>
                      </Link>
                      
                      <div className="flex items-center justify-center gap-4 mt-6">
                        <button className="p-2 rounded-lg hover:bg-emerald-50 transition-colors">
                          <Globe className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-emerald-50 transition-colors">
                          <Bell className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-emerald-50 transition-colors">
                          <Shield className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Floating Notification - Links to Contact */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="fixed top-24 right-8 z-40 hidden lg:block"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl p-4 border border-emerald-200/50 shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Digital Banking</p>
                <p className="text-sm text-gray-600">Experience seamless banking</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="block w-full py-2 text-center bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300"
            >
              Explore Now
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0d966c;
        }
      `}</style>
    </>
  );
};

export default Navbar;