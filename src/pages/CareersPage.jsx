import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Upload,
  FileText,
  Calendar,
  GraduationCap,
  Building,
  Shield,
  TrendingUp,
  Sparkles,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

const CareersPage = () => {
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    cv: null,
    coverLetter: null,
    experience: '',
    qualifications: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setApplicationData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setApplicationData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setApplicationData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        cv: null,
        coverLetter: null,
        experience: '',
        qualifications: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const leadershipTeam = [
    {
      name: "Mrs. Gertrude Asamoah",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years in banking, fintech, and investment. Drives corporate strategy, innovation, and inclusive growth.",
      achievements: ["Led digital transformation", "Expanded to 12 regions", "Awarded Financial Leader of the Year 2023"],
      avatar: "👑"
    },
    {
      name: "Mr. Solomon Amankwah",
      role: "Chief Operating Officer",
      bio: "Oversees operations and process optimization with 18 years' experience in banking and financial services.",
      achievements: ["Optimized 50+ processes", "Reduced operational costs by 30%", "Led team of 200+"],
      avatar: "⚙️"
    },
    {
      name: "Mr. Emmanuel Osei Mensah",
      role: "Chief Financial Officer",
      bio: "Chartered Accountant leading financial planning, reporting, and risk management for sustainable growth.",
      achievements: ["Secured $5M funding", "Improved ROI by 45%", "Implemented automated reporting"],
      avatar: "💰"
    },
    {
      name: "Mr. Albert Kwame Achiifu",
      role: "Chief Risk Officer",
      bio: "CFA with expertise in developing enterprise risk frameworks and ensuring regulatory compliance.",
      achievements: ["Zero compliance violations", "Risk reduction by 60%", "Trained 100+ staff"],
      avatar: "🛡️"
    }
  ];

  const jobRoles = [
    {
      title: "Loan Officer",
      department: "Microfinance",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2+ years",
      description: "Manage microfinance loan portfolios, assess applications, and provide financial guidance to SMEs and individuals.",
      requirements: ["Bachelor's in Finance/Banking", "Customer service skills", "Knowledge of credit analysis"],
      salary: "Competitive + Commission"
    },
    {
      title: "Investment Analyst",
      department: "Wealth Management",
      location: "Kumasi Head Office",
      type: "Full-time",
      experience: "3+ years",
      description: "Analyze investment opportunities, manage client portfolios, and provide wealth management solutions.",
      requirements: ["CFA/Finance degree", "Analytical skills", "Portfolio management experience"],
      salary: "Competitive + Bonuses"
    },
    {
      title: "Digital Banking Specialist",
      department: "Technology",
      location: "Accra & Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Develop and maintain digital banking platforms, ensure cybersecurity, and drive fintech innovation.",
      requirements: ["IT/Computer Science degree", "Fintech experience", "Cybersecurity knowledge"],
      salary: "Competitive + Benefits"
    },
    {
      title: "Regional Manager",
      department: "Operations",
      location: "Regional Offices",
      type: "Full-time",
      experience: "5+ years",
      description: "Oversee regional operations, manage branch networks, and drive business development.",
      requirements: ["MBA/Business degree", "Leadership experience", "Regional market knowledge"],
      salary: "Competitive + Performance Bonus"
    },
    {
      title: "Customer Service Agent",
      department: "Client Relations",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "1+ year",
      description: "Provide exceptional customer service, handle inquiries, and support clients with financial products.",
      requirements: ["Diploma/Degree", "Communication skills", "Banking knowledge"],
      salary: "Competitive + Incentives"
    },
    {
      title: "Insurance Broker",
      department: "Insurance Services",
      location: "Head Office & Regional",
      type: "Full-time",
      experience: "2+ years",
      description: "Develop insurance products, manage client portfolios, and ensure regulatory compliance.",
      requirements: ["Insurance certification", "Sales experience", "Regulatory knowledge"],
      salary: "Commission-based + Salary"
    }
  ];

  const corePillars = [
    {
      icon: "🔑",
      title: "Empowerment Through Access",
      description: "Unlocking potential with financial opportunities for all"
    },
    {
      icon: "🛡️",
      title: "Integrity & Accountability",
      description: "Building trust through honesty, transparency, and responsible practices"
    },
    {
      icon: "🌱",
      title: "Inclusive & Sustainable Growth",
      description: "Creating lasting impact by championing equitable access and community progress"
    },
    {
      icon: "💡",
      title: "Innovation for Real Needs",
      description: "Delivering simple, effective solutions that evolve with our clients' needs"
    },
    {
      icon: "🤝",
      title: "Partnership & Respect",
      description: "Fostering collaborative relationships that value dignity, empathy, and fairness"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Clear progression paths and promotion opportunities"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Training & Development",
      description: "Regular workshops, certifications, and skill development"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Job Security",
      description: "Stable employment with competitive compensation"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Performance Rewards",
      description: "Bonuses, incentives, and recognition programs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-12 h-12" />
              <Briefcase className="w-12 h-12" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Build Your Future With Us
            </h1>
            <p className="text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              Join Emerald Capital in revolutionizing financial inclusion across Ghana
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20"
              >
                <span className="text-lg font-bold">50+</span>
                <p className="text-emerald-100 text-sm">Team Members</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20"
              >
                <span className="text-lg font-bold">12</span>
                <p className="text-emerald-100 text-sm">Regions Covered</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20"
              >
                <span className="text-lg font-bold">15K+</span>
                <p className="text-emerald-100 text-sm">Clients Served</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Our Team */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
              Guided by experienced leaders committed to financial empowerment and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-emerald-100"
              >
                <div className="text-5xl mb-4 text-center">{leader.avatar}</div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{leader.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600 text-sm mb-6">{leader.bio}</p>
                <div className="space-y-2">
                  {leader.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-emerald-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Pillars */}
          <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-8 text-white mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">What We Stand For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {corePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{pillar.icon}</div>
                  <h4 className="font-bold mb-2">{pillar.title}</h4>
                  <p className="text-emerald-100 text-sm">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Why Join Emerald Capital?
            </h2>
            <p className="text-emerald-700 text-lg">
              We invest in our team's growth and wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Current Openings
            </h2>
            <p className="text-emerald-700 text-lg">
              Explore opportunities to grow with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {jobRoles.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Sparkles className="w-6 h-6 text-emerald-500" />
                </div>

                <p className="text-gray-600 mb-6">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-emerald-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <ChevronRight className="w-4 h-4 text-emerald-500" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-emerald-100">
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-bold text-emerald-900">{job.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Package</p>
                    <p className="font-bold text-emerald-900">{job.salary}</p>
                  </div>
                  <button
                    onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            id="application-form"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-200"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">Submit Your Application</h2>
              <p className="text-emerald-100">Join our mission to empower communities through finance</p>
            </div>

            <div className="p-8">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-emerald-100 border border-emerald-400 text-emerald-700 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    <div>
                      <p className="font-bold">Application Submitted!</p>
                      <p className="text-sm">We'll review your application and contact you soon.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={applicationData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={applicationData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applying For *
                  </label>
                  <select
                    name="position"
                    value={applicationData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {jobRoles.map((job, index) => (
                      <option key={index} value={job.title}>{job.title} - {job.department}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload CV/Resume *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-2">
                        {applicationData.cv ? applicationData.cv.name : 'Drop your CV here or click to browse'}
                      </p>
                      <input
                        type="file"
                        name="cv"
                        onChange={handleInputChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                        id="cv-upload"
                      />
                      <label
                        htmlFor="cv-upload"
                        className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 cursor-pointer transition-colors"
                      >
                        Choose File
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-500 transition-colors">
                      <FileText className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-2">
                        {applicationData.coverLetter ? applicationData.coverLetter.name : 'Add cover letter if available'}
                      </p>
                      <input
                        type="file"
                        name="coverLetter"
                        onChange={handleInputChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="cover-letter-upload"
                      />
                      <label
                        htmlFor="cover-letter-upload"
                        className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors"
                      >
                        Choose File
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 3 years in banking"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualifications *
                  </label>
                  <textarea
                    name="qualifications"
                    value={applicationData.qualifications}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="List your educational background, certifications, and relevant training..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join Emerald Capital? *
                  </label>
                  <textarea
                    name="message"
                    value={applicationData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Tell us about your passion for financial inclusion and how you can contribute..."
                  />
                </div>

                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl">
                  <Shield className="w-6 h-6 text-emerald-600" />
                  <p className="text-sm text-gray-600">
                    Your application information is secure and confidential. We'll only contact you regarding your application.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-emerald-500/50'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting Application...
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact HR */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-600">Questions about careers?</p>
                <p className="text-lg font-bold text-emerald-900">hr@emeraldcapitalgh.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials from Current Staff */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Life at Emerald Capital
            </h2>
            <p className="text-emerald-700 text-lg">
              Hear from our team members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kwame Mensah",
                role: "Senior Loan Officer",
                quote: "The training and growth opportunities here are unmatched. I started as a junior officer and now lead a regional team.",
                avatar: "👨‍💼"
              },
              {
                name: "Ama Serwaa",
                role: "Digital Banking Lead",
                quote: "Working at Emerald Capital lets me combine technology with financial inclusion. We're actually making a difference.",
                avatar: "👩‍💻"
              },
              {
                name: "Kofi Asare",
                role: "Regional Manager",
                quote: "The leadership genuinely cares about staff development. It's more than a job - it's a mission we all believe in.",
                avatar: "👨‍💼"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-lg"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-emerald-900">{testimonial.name}</p>
                  <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;