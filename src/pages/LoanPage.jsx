import React, { useState } from 'react';
import {
  Download, Smartphone, CheckCircle, ArrowRight, Play,
  Shield, Clock, Percent, CreditCard, Users, Star,
  ChevronRight, ExternalLink, QrCode, Mail, Phone,
  FileText, UserCheck, Lock, Zap, Award, TrendingUp
} from 'lucide-react';

export default function ApplyForLoanPage() {
  const [activeStep, setActiveStep] = useState(null);

  // Application steps with detailed instructions
  const applicationSteps = [
    {
      step: '01',
      title: 'Download Sikanii App',
      description: 'Get the Sikanii mobile app from Google Play Store',
      icon: <Download className="w-8 h-8" />,
      action: 'Download Now',
      link: 'https://play.google.com/store/apps/details?id=com.sikanii',
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Available for Android devices',
        'Free to download and use',
        'Secure and verified app',
        'Regular updates and support'
      ]
    },
    {
      step: '02',
      title: 'Sign Up',
      description: 'Create your Sikanii account by clicking the Sign Up button',
      icon: <UserCheck className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      details: [
        'Click "Sign Up" on the app',
        'Quick and easy registration',
        'Secure account creation',
        'No hidden charges'
      ]
    },
    {
      step: '03',
      title: 'Provide Your Details',
      description: 'Fill in your personal information to complete registration',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      details: [
        'Full name and contact info',
        'Valid email address',
        'Ghana Card or ID number',
        'Employment details'
      ]
    },
    {
      step: '04',
      title: 'Phone Verification',
      description: 'Enter your phone number to receive OTP for instant login',
      icon: <Phone className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      details: [
        'Provide active phone number',
        'Receive OTP via SMS',
        'Enter verification code',
        'Automatic login enabled'
      ]
    },
    {
      step: '05',
      title: 'Start Applying',
      description: 'Browse loan products and submit your application',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      details: [
        'Choose your loan type',
        'Select loan amount',
        'Submit application',
        'Get instant feedback'
      ]
    }
  ];

  // Loan benefits
  const loanBenefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Approval',
      description: '24-hour processing time',
      stat: '24hrs'
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: 'Low Interest Rates',
      description: 'Starting from 6.5% APR',
      stat: '6.5%'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Flexible Repayment',
      description: 'Up to 60 months terms',
      stat: '60mo'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Licensed',
      description: 'Bank of Ghana approved',
      stat: '100%'
    }
  ];

  // Available loan types
  const loanTypes = [
    {
      name: 'Business Loans',
      amount: '₵5,000 - ₵5,000,000',
      rate: 'From 8.5%',
      icon: <TrendingUp className="w-6 h-6" />,
      popular: true
    },
    {
      name: 'Personal Loans',
      amount: '₵1,000 - ₵100,000',
      rate: 'From 12%',
      icon: <Users className="w-6 h-6" />,
      popular: false
    },
    {
      name: 'Emergency Loans',
      amount: '₵500 - ₵50,000',
      rate: 'From 15%',
      icon: <Zap className="w-6 h-6" />,
      popular: false
    },
    {
      name: 'Education Loans',
      amount: '₵2,000 - ₵200,000',
      rate: 'From 10%',
      icon: <Award className="w-6 h-6" />,
      popular: false
    }
  ];

  // Success stories/stats
  const successStats = [
    { value: '50,000+', label: 'Loans Disbursed' },
    { value: '₵500M+', label: 'Total Funding' },
    { value: '95%', label: 'Approval Rate' },
    { value: '4.8★', label: 'App Rating' }
  ];

  const handleDownloadApp = () => {
    window.open('https://play.google.com/store/apps/details?id=com.sikanii', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-semibold">Mobile-First Loan Application</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Apply for a Loan
                <br />
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  In Minutes
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
                Download the Sikanii app and get instant access to affordable loans 
                with the fastest approval process in Ghana.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleDownloadApp}
                  className="group bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center gap-3"
                >
                  <Play className="w-6 h-6" />
                  <span>Download on Play Store</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="#how-it-works"
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3"
                >
                  <span>How It Works</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Success Stats */}
              <div className="grid grid-cols-4 gap-4">
                {successStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-300 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative lg:block hidden">
              <div className="relative z-10">
                {/* Phone Frame */}
                <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>
                  
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 flex flex-col items-center justify-center p-8">
                    <div className="w-24 h-24 bg-white rounded-3xl mb-6 flex items-center justify-center shadow-xl">
                      <Download className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 text-center">
                      Sikanii
                    </h3>
                    <p className="text-white/90 text-center mb-6">
                      Your Trusted Loan Partner
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-white/80 text-sm">
                      4.8 out of 5 stars
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400 rounded-2xl rotate-12 animate-bounce shadow-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-400 rounded-full animate-pulse shadow-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-black text-emerald-600 mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full mb-6">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm font-bold">SIMPLE 5-STEP PROCESS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              How to Apply for a Loan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with Sikanii in just 5 easy steps. From download to approval, 
              we've made it incredibly simple.
            </p>
          </div>

          <div className="space-y-8">
            {applicationSteps.map((item, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Connection Line */}
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-24 w-0.5 h-24 bg-gradient-to-b from-emerald-200 to-transparent"></div>
                )}
                
                <div className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'border-emerald-500 shadow-2xl -translate-y-2'
                    : 'border-gray-200 shadow-lg hover:border-emerald-300'
                }`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Step Number & Icon */}
                    <div className="flex items-start gap-6 lg:w-1/4">
                      <div className="relative">
                        <div className={`w-32 h-32 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                          <span className="text-2xl font-black text-gray-900">{item.step}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {item.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {item.action && (
                        <button
                          onClick={handleDownloadApp}
                          className={`group/btn px-8 py-4 bg-gradient-to-r ${item.color} text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all inline-flex items-center gap-3`}
                        >
                          <Play className="w-5 h-5" />
                          <span>{item.action}</span>
                          <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Loan Types */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Available Loan Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of loan products tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 ${
                  loan.popular ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-gray-200'
                }`}
              >
                {loan.popular && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    POPULAR
                  </div>
                )}
                
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {loan.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {loan.name}
                </h3>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Loan Amount:</div>
                  <div className="text-2xl font-black text-emerald-600">
                    {loan.amount}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-1">Interest Rate:</div>
                  <div className="text-lg font-bold text-gray-900">
                    {loan.rate}
                  </div>
                </div>
                
                <button
                  onClick={handleDownloadApp}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-24 h-24 bg-white rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <Download className="w-12 h-12 text-emerald-600" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-2xl mb-12 text-white/90">
            Download Sikanii now and apply for your loan in minutes
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={handleDownloadApp}
              className="group bg-white text-emerald-900 px-12 py-5 rounded-xl font-black text-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-4"
            >
              <Play className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs font-normal text-gray-600">GET IT ON</div>
                <div>Google Play</div>
              </div>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/20">
            <div>
              <Lock className="w-8 h-8 mx-auto mb-2 text-emerald-300" />
              <div className="text-sm">100% Secure</div>
            </div>
            <div>
              <Shield className="w-8 h-8 mx-auto mb-2 text-emerald-300" />
              <div className="text-sm">Licensed</div>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-2 text-emerald-300" />
              <div className="text-sm">24hr Support</div>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-2 text-emerald-300" />
              <div className="text-sm">4.8 Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Getting Started?
          </h3>
          <p className="text-gray-600 mb-8">
            Our support team is ready to assist you with the application process
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+233208070000"
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-gray-900">+233 20 807 0000</span>
            </a>
            <a
              href="mailto:support@sikanii.com"
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-gray-900">support@sikanii.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}