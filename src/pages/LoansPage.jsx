import React, { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Home, 
  GraduationCap, 
  Heart, 
  Leaf, 
  Truck,
  Clock,
  CheckCircle,
  Calculator,
  ArrowRight,
  Star,
  Award,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Percent,
  FileText,
  Building,
  Briefcase,
  Smartphone,
  Globe,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

const LoansPage = () => {
  const [loanType, setLoanType] = useState('business');
  const [amount, setAmount] = useState(5000);
  const [duration, setDuration] = useState(12);

  const microfinanceLoans = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      type: "Business Starter Loan",
      purpose: "Launch or expand small businesses",
      amount: "GH₵ 200 – 5,000",
      term: "6–24 months",
      rate: "15-25%",
      features: ["No collateral required", "Quick approval", "Business training"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      type: "Working Capital Loan",
      purpose: "Day-to-day operations, inventory, seasonal needs",
      amount: "GH₵ 500 – 10,000",
      term: "6–18 months",
      rate: "12-20%",
      features: ["Flexible repayment", "Seasonal terms", "Inventory financing"]
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      type: "Agricultural Loan",
      purpose: "Farming inputs, equipment, operational costs",
      amount: "GH₵ 300 – 8,000",
      term: "3–12 months",
      rate: "10-18%",
      features: ["Crop-cycle based", "Equipment financing", "Weather insurance"]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      type: "Education & Skills Loan",
      purpose: "Tuition, vocational or skill development",
      amount: "GH₵ 100 – 3,000",
      term: "6–24 months",
      rate: "8-15%",
      features: ["Deferred repayment", "Parent co-signer option", "Career counseling"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      type: "Emergency & Personal Loan",
      purpose: "Urgent personal needs (health, repairs)",
      amount: "GH₵ 100 – 2,500",
      term: "3–12 months",
      rate: "18-30%",
      features: ["Same-day approval", "Minimal documentation", "Quick disbursement"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      type: "Group/Community Loan",
      purpose: "Cooperative or community projects",
      amount: "GH₵ 500 – 15,000",
      term: "6–24 months",
      rate: "12-22%",
      features: ["Group guarantee", "Community impact", "Shared responsibility"]
    },
    {
      icon: <Home className="w-6 h-6" />,
      type: "Housing & Home Improvement Loan",
      purpose: "Home construction, renovations, repairs",
      amount: "GH₵ 500 – 10,000",
      term: "12–36 months",
      rate: "15-25%",
      features: ["Home improvement", "Construction materials", "Flexible terms"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      type: "Women's Empowerment Loan",
      purpose: "For women entrepreneurs",
      amount: "GH₵ 200 – 8,000",
      term: "6–24 months",
      rate: "10-18%",
      features: ["Women-focused", "Business mentorship", "Networking support"]
    }
  ];

  const specializedLoans = [
    {
      icon: <Building className="w-6 h-6" />,
      type: "Salary Advance Loan",
      purpose: "For government and corporate workers",
      amount: "GH₵ 1,000 – 20,000",
      term: "1–12 months",
      rate: "12-18%",
      features: ["Salary deduction", "Quick processing", "No collateral"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      type: "Security Personnel Loan",
      purpose: "Special loan for security workers",
      amount: "GH₵ 500 – 10,000",
      term: "3–18 months",
      rate: "15-22%",
      features: ["Special terms", "Dedicated support", "Flexible repayment"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      type: "LPO Financing",
      purpose: "Businesses fulfilling verified orders",
      amount: "GH₵ 5,000 – 50,000",
      term: "1–6 months",
      rate: "8-15%",
      features: ["Order-based", "Quick turnover", "Direct supplier payment"]
    },
    {
      icon: <Truck className="w-6 h-6" />,
      type: "Transport & Equipment Loan",
      purpose: "Purchase vehicles or machinery",
      amount: "GH₵ 1,000 – 20,000",
      term: "12–36 months",
      rate: "14-24%",
      features: ["Asset financing", "Insurance included", "Maintenance support"]
    }
  ];

  const requirements = [
    "Valid Ghana Card or National ID",
    "Proof of income or business activity",
    "Recent passport photograph",
    "Bank statements (3 months)",
    "Proof of residence",
    "Completed application form"
  ];

  const calculateEMI = () => {
    const principal = amount;
    const annualRate = 0.15; // 15% annual interest
    const monthlyRate = annualRate / 12;
    const months = duration;
    
    if (monthlyRate === 0) return principal / months;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const handleContactUs = () => {
    // You can redirect to contact page or show contact modal
    window.location.href = '/contact';
  };

  const handleCallUs = () => {
    window.location.href = 'tel:+233208070000';
  };

  const handleEmailUs = () => {
    window.location.href = 'mailto:loans@emeraldcapitalgh.com';
  };

  const handleUSSD = () => {
    // For USSD code
    alert('Dial *928*321# on your mobile phone for loan services');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-700 via-emerald-600 to-cyan-600 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <DollarSign className="w-12 h-12" />
              <TrendingUp className="w-12 h-12" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Access Smart Financing
            </h1>
            <p className="text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              Flexible loan solutions designed to empower your growth and ambitions
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-emerald-100">Loan Products</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
              >
                <div className="text-3xl font-bold">24-48h</div>
                <div className="text-emerald-100">Approval Time</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
              >
                <div className="text-3xl font-bold">85%</div>
                <div className="text-emerald-100">Approval Rate</div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactUs}
              className="bg-white text-emerald-700 font-bold py-4 px-12 rounded-2xl text-xl hover:shadow-2xl transform transition-all inline-flex items-center gap-3"
            >
              Apply for Loan Now
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Loan Calculator */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Loan Calculator
            </h2>
            <p className="text-emerald-700 text-lg">
              Estimate your monthly payments instantly
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 border border-emerald-100">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Calculate Your Loan</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Loan Amount: GH₵ {amount.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="50000"
                      value={amount}
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>GH₵ 100</span>
                      <span>GH₵ 50,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Repayment Period: {duration} months
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="36"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1 month</span>
                      <span>36 months</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Loan Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['business', 'personal', 'education', 'agriculture'].map((type) => (
                        <button
                          key={type}
                          onClick={() => setLoanType(type)}
                          className={`py-3 rounded-xl font-medium transition-all ${
                            loanType === type
                              ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white'
                              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                          }`}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Your Estimate</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Monthly Payment</span>
                      <Calculator className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="text-3xl font-bold text-emerald-900">
                      GH₵ {calculateEMI().toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-medium">GH₵ {amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-medium">15% per annum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Interest</span>
                      <span className="font-medium">
                        GH₵ {(calculateEMI() * duration - amount).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-4">
                      <span className="font-bold">Total Repayment</span>
                      <span className="font-bold text-emerald-700">
                        GH₵ {(calculateEMI() * duration).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleContactUs}
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Contact Us to Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loan Products */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Our Loan Products
            </h2>
            <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
              Tailored financial solutions for every need
            </p>
          </div>

          {/* Microfinance Loans */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-emerald-900 flex items-center gap-3">
                <Users className="w-8 h-8" />
                Microfinance Loans
              </h3>
              <div className="flex items-center gap-2 text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-medium">Financial Inclusion Focus</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microfinanceLoans.map((loan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-emerald-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-4">
                    {loan.icon}
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">{loan.type}</h4>
                  <p className="text-gray-600 text-sm mb-4">{loan.purpose}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Amount</span>
                      <span className="font-bold text-emerald-700">{loan.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Term</span>
                      <span className="font-bold text-emerald-700">{loan.term}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Interest</span>
                      <span className="font-bold text-emerald-700">{loan.rate}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {loan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-emerald-700">
                        <CheckCircle className="w-4 h-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleContactUs}
                    className="w-full py-3 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Contact to Apply
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specialized Loans */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-emerald-900 flex items-center gap-3">
                <Award className="w-8 h-8" />
                Specialized Loans
              </h3>
              <div className="flex items-center gap-2 text-emerald-600">
                <Star className="w-5 h-5" />
                <span className="font-medium">Custom Solutions</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedLoans.map((loan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all text-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center text-emerald-900 mb-4">
                    {loan.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{loan.type}</h4>
                  <p className="text-emerald-100 text-sm mb-4">{loan.purpose}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-200">Amount</span>
                      <span className="font-bold">{loan.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-200">Term</span>
                      <span className="font-bold">{loan.term}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-200">Interest</span>
                      <span className="font-bold">{loan.rate}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {loan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-emerald-200">
                        <CheckCircle className="w-4 h-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleContactUs}
                    className="w-full py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-emerald-900 font-bold rounded-xl hover:bg-gradient-to-r hover:from-emerald-300 hover:to-cyan-300 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Requirements & Process */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-emerald-900 mb-8">Requirements</h3>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-emerald-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-900 mb-8">Application Process</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Contact Us", desc: "Call, email, or visit our office", icon: <Phone className="w-6 h-6" /> },
                  { step: 2, title: "Consultation", desc: "Get personalized loan advice", icon: <Users className="w-6 h-6" /> },
                  { step: 3, title: "Documentation", desc: "Submit required documents", icon: <FileText className="w-6 h-6" /> },
                  { step: 4, title: "Approval & Disbursement", desc: "Get funds within 24-48 hours", icon: <DollarSign className="w-6 h-6" /> }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      {index < 3 && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-0.5 bg-gradient-to-b from-emerald-400 to-cyan-400 mt-1"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-900 text-lg">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                    <div className="text-emerald-500">
                      {step.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-700 via-emerald-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to Get Your Loan?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Contact us today for personalized loan consultation and quick approval
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCallUs}
              className="bg-white text-emerald-700 font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transform transition-all inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call: 020 807 0000
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailUs}
              className="bg-emerald-800 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transform transition-all inline-flex items-center justify-center gap-3 border border-emerald-700"
            >
              <Mail className="w-6 h-6" />
              Email: loans@emeraldcapitalgh.com
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUSSD}
              className="bg-cyan-700 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transform transition-all inline-flex items-center justify-center gap-3"
            >
              <Smartphone className="w-6 h-6" />
              USSD: *928*321#
            </motion.button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-300" />
                <div className="text-left">
                  <p className="text-sm text-emerald-200">Operating Hours</p>
                  <p className="font-bold">Mon-Fri: 8AM-5PM | Sat: 9AM-1PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-300" />
                <div className="text-left">
                  <p className="text-sm text-emerald-200">Visit Our Office</p>
                  <p className="font-bold">Emerald Capital Building, Kumasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-emerald-900 mb-4">
              Need More Information?
            </h3>
            <p className="text-emerald-700">
              Explore our other financial services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="/investments"
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-emerald-100 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Investment Services</h4>
              <p className="text-gray-600 mb-6">Grow your wealth with our investment products</p>
              <span className="text-emerald-600 font-bold inline-flex items-center gap-2">
                Explore Investments <ExternalLink className="w-4 h-4" />
              </span>
            </motion.a>
            
            <motion.a
              href="/about"
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-emerald-100 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6">
                <Building className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-emerald-900 mb-3">About Emerald Capital</h4>
              <p className="text-gray-600 mb-6">Learn about our mission and values</p>
              <span className="text-emerald-600 font-bold inline-flex items-center gap-2">
                Learn More <ExternalLink className="w-4 h-4" />
              </span>
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-emerald-100 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-emerald-900 mb-3">Contact Us</h4>
              <p className="text-gray-600 mb-6">Get in touch with our team</p>
              <span className="text-emerald-600 font-bold inline-flex items-center gap-2">
                Contact Now <ExternalLink className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoansPage;