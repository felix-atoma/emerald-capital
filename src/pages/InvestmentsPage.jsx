import React, { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  PieChart, 
  Target, 
  Globe, 
  Zap, 
  Lock, 
  Award,
  DollarSign,
  Percent,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Building,
  Briefcase,
  Smartphone,
  BarChart,
  LineChart,
  PieChart as PieChartIcon,
  Calculator,
  Mail,
  Phone,
  Download
} from 'lucide-react';
import { motion } from 'framer-motion';

const InvestmentsPage = () => {
  const [investmentType, setInvestmentType] = useState('fixed-deposit');
  const [amount, setAmount] = useState(5000);
  const [duration, setDuration] = useState(12);
  const [riskLevel, setRiskLevel] = useState('moderate');
  const [showCalculator, setShowCalculator] = useState(false);

  const investmentProducts = [
    {
      type: "Fixed Deposits",
      icon: <Lock className="w-8 h-8" />,
      returns: "12-18% p.a.",
      risk: "Low",
      minAmount: "GH₵ 500",
      duration: "3-36 months",
      features: ["Guanteed returns", "Monthly/quarterly payouts", "Flexible terms"],
      description: "Secure investment with fixed returns and capital protection"
    },
    {
      type: "Treasury Bills",
      icon: <Shield className="w-8 h-8" />,
      returns: "15-22% p.a.",
      risk: "Very Low",
      minAmount: "GH₵ 1,000",
      duration: "91-364 days",
      features: ["Government backed", "Highly liquid", "Tax efficient"],
      description: "Government securities offering secure returns"
    },
    {
      type: "Corporate Bonds",
      icon: <Building className="w-8 h-8" />,
      returns: "18-25% p.a.",
      risk: "Moderate",
      minAmount: "GH₵ 2,500",
      duration: "1-5 years",
      features: ["Regular coupon payments", "Diversified portfolio", "Corporate backing"],
      description: "Investment in corporate debt with regular interest"
    },
    {
      type: "Equity Funds",
      icon: <TrendingUp className="w-8 h-8" />,
      returns: "20-35% p.a.",
      risk: "High",
      minAmount: "GH₵ 5,000",
      duration: "3+ years",
      features: ["Stock market exposure", "Professional management", "Growth potential"],
      description: "Portfolio of listed companies for capital growth"
    },
    {
      type: "Real Estate Investment",
      icon: <Building className="w-8 h-8" />,
      returns: "15-25% p.a.",
      risk: "Moderate",
      minAmount: "GH₵ 10,000",
      duration: "3-5 years",
      features: ["Property backed", "Rental income", "Capital appreciation"],
      description: "Investment in commercial and residential properties"
    },
    {
      type: "SME Growth Funds",
      icon: <Briefcase className="w-8 h-8" />,
      returns: "25-40% p.a.",
      risk: "High",
      minAmount: "GH₵ 20,000",
      duration: "5+ years",
      features: ["Private equity", "High growth potential", "SME development"],
      description: "Direct investment in growing small businesses"
    }
  ];

  const portfolioStrategies = [
    {
      name: "Conservative",
      risk: "Low",
      allocation: ["Fixed Deposits: 60%", "Treasury Bills: 30%", "Bonds: 10%"],
      returns: "12-15%",
      suitable: "Retirees, Risk-averse investors"
    },
    {
      name: "Balanced",
      risk: "Moderate",
      allocation: ["Fixed Deposits: 40%", "Equity: 30%", "Bonds: 20%", "Real Estate: 10%"],
      returns: "15-22%",
      suitable: "Medium-term investors"
    },
    {
      name: "Growth",
      risk: "High",
      allocation: ["Equity: 50%", "SME Funds: 30%", "Real Estate: 15%", "Bonds: 5%"],
      returns: "20-30%",
      suitable: "Young professionals, Long-term investors"
    }
  ];

  const calculateReturns = () => {
    const principal = amount;
    const annualRate = {
      'conservative': 0.14,
      'moderate': 0.20,
      'aggressive': 0.28
    }[riskLevel] || 0.20;
    
    const months = duration;
    const monthlyRate = annualRate / 12;
    const futureValue = principal * Math.pow(1 + monthlyRate, months);
    const totalReturns = futureValue - principal;
    
    return {
      futureValue: Math.round(futureValue),
      totalReturns: Math.round(totalReturns),
      monthlyReturns: Math.round(totalReturns / months)
    };
  };

  const handleInvestNow = () => {
    document.getElementById('investment-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-800 via-emerald-700 to-cyan-700 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-12 h-12" />
              <PieChart className="w-12 h-12" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Grow Your Wealth
            </h1>
            <p className="text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              Strategic investment solutions for sustainable wealth creation
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
              >
                <div className="text-3xl font-bold">20%+</div>
                <div className="text-emerald-100">Average Returns</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
              >
                <div className="text-3xl font-bold">98%</div>
                <div className="text-emerald-100">Client Satisfaction</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-emerald-100">Years Experience</div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInvestNow}
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-emerald-900 font-bold py-4 px-12 rounded-2xl text-xl hover:shadow-2xl transform transition-all inline-flex items-center gap-3"
            >
              Start Investing Today
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Investment Calculator */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Investment Calculator
            </h2>
            <p className="text-emerald-700 text-lg">
              Project your potential returns
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 border border-emerald-100">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Plan Your Investment</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Investment Amount: GH₵ {amount.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="100000"
                      value={amount}
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>GH₵ 100</span>
                      <span>GH₵ 100,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Investment Period: {duration} months
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="60"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>3 months</span>
                      <span>60 months</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Risk Profile
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['conservative', 'moderate', 'aggressive'].map((type) => (
                        <button
                          key={type}
                          onClick={() => setRiskLevel(type)}
                          className={`py-3 rounded-xl font-medium transition-all ${
                            riskLevel === type
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
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Projected Returns</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Future Value</span>
                      <Calculator className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="text-3xl font-bold text-emerald-900">
                      GH₵ {calculateReturns().futureValue.toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal Amount</span>
                      <span className="font-medium">GH₵ {amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Returns</span>
                      <span className="font-medium text-emerald-600">
                        GH₵ {calculateReturns().totalReturns.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Monthly Returns</span>
                      <span className="font-medium">
                        GH₵ {calculateReturns().monthlyReturns.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-4">
                      <span className="font-bold">Return Rate</span>
                      <span className="font-bold text-emerald-700">
                        {riskLevel === 'conservative' ? '12-18%' : 
                         riskLevel === 'moderate' ? '18-25%' : '25-35%'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleInvestNow}
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-3"
                  >
                    <TrendingUp className="w-5 h-5" />
                    Start This Investment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Products */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Investment Products
            </h2>
            <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
              Diversified portfolio options for every investor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {investmentProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-emerald-100 overflow-hidden"
              >
                <div className={`p-8 ${index % 2 === 0 ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white' : 'bg-white'}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center text-emerald-900">
                      {product.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                      product.risk === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                      product.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.risk} Risk
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 ${index % 2 === 0 ? 'text-white' : 'text-emerald-900'}`}>
                    {product.type}
                  </h3>
                  <p className={`mb-6 ${index % 2 === 0 ? 'text-emerald-100' : 'text-gray-600'}`}>
                    {product.description}
                  </p>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">Returns</div>
                      <div className="text-lg font-bold text-emerald-700">{product.returns}</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">Min. Amount</div>
                      <div className="text-lg font-bold text-emerald-700">{product.minAmount}</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleInvestNow}
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                  >
                    Invest Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Strategies */}
          <div>
            <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">
              Portfolio Strategies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold">{strategy.name}</h4>
                    <Target className="w-8 h-8 text-emerald-300" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-3 h-3 rounded-full ${
                        strategy.risk === 'Low' ? 'bg-emerald-400' :
                        strategy.risk === 'Moderate' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`} />
                      <span className="text-emerald-200">Risk: {strategy.risk}</span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {strategy.allocation.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                          <span className="text-emerald-100">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-emerald-700 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-emerald-200">Expected Returns</span>
                      <span className="text-2xl font-bold text-emerald-300">{strategy.returns}</span>
                    </div>
                    <div className="text-sm text-emerald-200">
                      Suitable for: {strategy.suitable}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Invest With Us */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-emerald-900 mb-4">
              Why Choose Emerald Capital?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Regulated & Secure",
                description: "Licensed by Bank of Ghana with full regulatory compliance"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Track Record",
                description: "Consistent returns averaging 20%+ annually"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Advisors",
                description: "Certified financial advisors with 15+ years experience"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Digital Platform",
                description: "Real-time portfolio tracking and mobile access"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-emerald-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Form */}
      <div id="investment-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-200"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">Start Your Investment Journey</h2>
              <p className="text-emerald-100">Complete this form to speak with an investment advisor</p>
            </div>

            <div className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Amount (GH₵) *
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option value="">Select amount</option>
                      <option value="500-5000">GH₵ 500 - 5,000</option>
                      <option value="5000-20000">GH₵ 5,000 - 20,000</option>
                      <option value="20000-50000">GH₵ 20,000 - 50,000</option>
                      <option value="50000+">GH₵ 50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Horizon *
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option value="">Select period</option>
                      <option value="short">Short-term (1-2 years)</option>
                      <option value="medium">Medium-term (3-5 years)</option>
                      <option value="long">Long-term (5+ years)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Risk Tolerance *
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option value="">Select risk level</option>
                      <option value="conservative">Conservative (Low Risk)</option>
                      <option value="moderate">Moderate (Balanced)</option>
                      <option value="aggressive">Aggressive (High Risk)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Goals *
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Tell us about your financial goals and objectives..."
                  />
                </div>

                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl">
                  <Award className="w-6 h-6 text-emerald-600" />
                  <p className="text-sm text-gray-600">
                    One of our investment advisors will contact you within 24 hours for a free consultation.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Speak with an investment advisor today</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Call us at</p>
                    <p className="text-lg font-bold text-emerald-900">020 807 0000</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Email us at</p>
                    <p className="text-lg font-bold text-emerald-900">investments@emeraldcapitalgh.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
                    <Download className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Download</p>
                    <p className="text-lg font-bold text-emerald-900">Investment Guide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsPage;