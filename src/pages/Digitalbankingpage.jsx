import React, { useState } from 'react';
import { 
  Smartphone, CreditCard, Shield, Zap, Clock, Globe, TrendingUp, DollarSign,
  Lock, Users, CheckCircle, ArrowRight, Mail, Phone, User, Building, Briefcase,
  AlertCircle, Send, BarChart3, Wallet, Receipt, RefreshCw, QrCode, Sparkles,
  Target, Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalBankingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', businessName: '', businessType: '',
    accountType: '', monthlyTransactions: '', additionalNotes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const accountTypes = ['Personal Account', 'Business Account', 'SME Account', 'Corporate Account'];
  const businessTypes = ['Retail', 'Services', 'Manufacturing', 'Agriculture', 'Technology', 'Healthcare', 'Education', 'Other'];
  const transactionVolumes = ['Less than 50 transactions/month', '50-200 transactions/month', '200-500 transactions/month', '500+ transactions/month'];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number (10 digits required)';
    }
    if (!formData.accountType) newErrors.accountType = 'Please select an account type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Digital Banking Request:', formData);
      setSubmitSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', businessName: '', businessType: '', accountType: '', monthlyTransactions: '', additionalNotes: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const customerBenefits = [
    { icon: Clock, title: '24/7 Banking Access', description: 'Bank anytime, anywhere. No more waiting for branch hours or standing in queues.', stat: '100% Uptime' },
    { icon: Smartphone, title: 'Mobile-First Experience', description: 'Complete banking power in your pocket with our intuitive mobile app.', stat: '4.8★ Rating' },
    { icon: Zap, title: 'Instant Transactions', description: 'Transfer money in seconds. Real-time processing for all your payments.', stat: '<5 Seconds' },
    { icon: Shield, title: 'Military-Grade Security', description: 'Bank-level encryption, biometric authentication, and fraud protection.', stat: '256-bit SSL' },
    { icon: DollarSign, title: 'Zero Hidden Fees', description: 'Transparent pricing. Lower transaction costs compared to traditional banking.', stat: 'Save 60%' },
    { icon: Receipt, title: 'Digital Documentation', description: 'Instant access to statements, receipts, and transaction history anytime.', stat: 'Paperless' }
  ];

  const businessBenefits = [
    { icon: TrendingUp, title: 'Revenue Growth', description: 'Reach more customers and process more transactions with digital channels.', stat: '+40% Growth', color: 'from-emerald-500 to-teal-500' },
    { icon: Users, title: 'Customer Satisfaction', description: 'Modern banking experience that keeps customers happy and loyal.', stat: '95% Retention', color: 'from-blue-500 to-cyan-500' },
    { icon: BarChart3, title: 'Operational Efficiency', description: 'Automate processes and reduce operational costs significantly.', stat: '-60% Costs', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, title: 'Market Expansion', description: 'Break geographical barriers and serve customers nationwide.', stat: 'Unlimited Reach', color: 'from-orange-500 to-red-500' },
    { icon: Lock, title: 'Fraud Prevention', description: 'Advanced AI-powered security reduces fraud and chargebacks.', stat: '-80% Fraud', color: 'from-indigo-500 to-blue-500' },
    { icon: Briefcase, title: 'Competitive Advantage', description: 'Stay ahead with cutting-edge technology and modern services.', stat: 'Market Leader', color: 'from-teal-500 to-emerald-500' }
  ];

  const features = [
    { icon: Wallet, title: 'Digital Wallet', description: 'Secure mobile wallet for all transactions' },
    { icon: QrCode, title: 'QR Payments', description: 'Scan and pay instantly' },
    { icon: CreditCard, title: 'Virtual Cards', description: 'Instant card generation' },
    { icon: RefreshCw, title: 'Auto-Pay', description: 'Set up recurring payments' },
    { icon: BarChart3, title: 'Analytics', description: 'Track and manage spending' },
    { icon: Users, title: 'Multi-User', description: 'Team access management' },
    { icon: Bell, title: 'Alerts', description: 'Real-time notifications' },
    { icon: Target, title: 'Goals', description: 'Save for specific targets' }
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">🎉 Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Thank you for choosing Emerald Capital's Digital Banking services! Our team will review your request and contact you within <span className="font-bold text-emerald-600">24-48 hours</span>.
              </p>
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mb-8">
                <p className="text-sm text-emerald-800 mb-2"><strong>What's next?</strong></p>
                <ul className="text-left text-sm text-emerald-700 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>Our team will review your information</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>You'll receive a confirmation email</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>A specialist will contact you to discuss next steps</span></li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setSubmitSuccess(false)} className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Submit Another Request
                </button>
                <Link to="/" className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300">
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.15),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 px-6 py-3 rounded-full text-sm font-bold mb-8">
              <Sparkles className="w-5 h-5" />
              NEXT-GENERATION BANKING
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Digital Banking
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Experience banking without boundaries. Manage your finances 24/7 with cutting-edge security, instant transactions, and tools that grow your wealth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { value: '24/7', label: 'Always On', icon: Clock },
              { value: '99.9%', label: 'Uptime', icon: Shield },
              { value: '<5s', label: 'Transfers', icon: Zap },
              { value: '60%', label: 'Cost Savings', icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-emerald-400 mb-3" />
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-emerald-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to manage your money like a pro</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-100 hover:border-emerald-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-gray-900">For Customers</h2>
              <p className="text-xl text-gray-600">Banking that fits your lifestyle</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerBenefits.map((benefit, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 text-[120px] font-black text-blue-500/5 leading-none">{index + 1}</div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{benefit.stat}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-black text-gray-900">For Business</h2>
              <p className="text-xl text-gray-600">Growth-driven solutions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <div className={`inline-block bg-gradient-to-r ${benefit.color} text-white text-sm font-bold px-4 py-2 rounded-full mb-4`}>{benefit.stat}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 px-6 py-3 rounded-full text-sm font-bold mb-8">
              <Send className="w-5 h-5" />
              GET STARTED TODAY
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Request Digital Banking</h2>
            <p className="text-xl text-emerald-100">Fill out the form below and our team will contact you within 24-48 hours</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={`w-full pl-12 pr-4 py-4 border-2 ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium`} placeholder="John Doe" />
                </div>
                {errors.fullName && <p className="text-red-600 text-sm mt-2 flex items-center gap-1 font-medium"><AlertCircle className="w-4 h-4" />{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full pl-12 pr-4 py-4 border-2 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium`} placeholder="john@example.com" />
                </div>
                {errors.email && <p className="text-red-600 text-sm mt-2 flex items-center gap-1 font-medium"><AlertCircle className="w-4 h-4" />{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full pl-12 pr-4 py-4 border-2 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium`} placeholder="0240123456" />
                </div>
                {errors.phone && <p className="text-red-600 text-sm mt-2 flex items-center gap-1 font-medium"><AlertCircle className="w-4 h-4" />{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Account Type *</label>
                <select name="accountType" value={formData.accountType} onChange={handleChange} className={`w-full px-4 py-4 border-2 ${errors.accountType ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium`}>
                  <option value="">Select account type</option>
                  {accountTypes.map((type, index) => (<option key={index} value={type}>{type}</option>))}
                </select>
                {errors.accountType && <p className="text-red-600 text-sm mt-2 flex items-center gap-1 font-medium"><AlertCircle className="w-4 h-4" />{errors.accountType}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Business Name (Optional)</label>
                <div className="relative">
                  <Building className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium" placeholder="Your Business Name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Business Type (Optional)</label>
                <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium">
                  <option value="">Select business type</option>
                  {businessTypes.map((type, index) => (<option key={index} value={type}>{type}</option>))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-3">Expected Monthly Transaction Volume (Optional)</label>
                <select name="monthlyTransactions" value={formData.monthlyTransactions} onChange={handleChange} className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium">
                  <option value="">Select transaction volume</option>
                  {transactionVolumes.map((volume, index) => (<option key={index} value={volume}>{volume}</option>))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-3">Additional Notes (Optional)</label>
                <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows="4" className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none text-gray-900 font-medium" placeholder="Tell us more about your banking needs..." />
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" disabled={isSubmitting} className={`w-full py-5 rounded-xl font-bold text-white text-lg transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-2xl hover:shadow-emerald-500/50 hover:scale-[1.02]'}`}>
                {isSubmitting ? (<><div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />Processing Request...</>) : (<><Send className="w-6 h-6" />Submit Request<ArrowRight className="w-6 h-6" /></>)}
              </button>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              By submitting, you agree to our <Link to="/terms" className="text-emerald-600 hover:text-emerald-700 font-semibold">Terms of Service</Link> and <Link to="/privacy" className="text-emerald-600 hover:text-emerald-700 font-semibold">Privacy Policy</Link>
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Transform Your Banking?</h2>
          <p className="text-xl text-emerald-50 mb-10">Join thousands who've already made the switch to smarter banking</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#request-form" className="px-10 py-5 bg-white text-emerald-600 rounded-xl font-black text-lg hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3">
              Get Started Now<ArrowRight className="w-6 h-6" />
            </a>
            <Link to="/contact" className="px-10 py-5 border-3 border-white text-white rounded-xl font-black text-lg hover:bg-white/10 transition-all duration-300">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalBankingPage;