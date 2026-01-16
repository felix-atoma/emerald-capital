import React, { useState, useEffect } from "react";
import { 
  Smartphone, CreditCard, Shield, Zap, Clock, Globe, TrendingUp, DollarSign,
  Lock, Users, CheckCircle, ArrowRight, Mail, Phone, Building, Briefcase,
  BarChart3, Wallet, Receipt, RefreshCw, QrCode, Sparkles,
  Target, Bell, MessageSquare, Headphones, Laptop, ShieldCheck,
  MailCheck, PhoneCall, MessageCircle, ExternalLink, MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const DigitalBankingPage = () => {
  const [animatedStats, setAnimatedStats] = useState({
    responseTime: 0,
    satisfaction: 0,
    supportHours: 0,
  });

  useEffect(() => {
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

  const customerBenefits = [
    { icon: Clock, title: "24/7 Banking Access", description: "Bank anytime, anywhere. No more waiting for branch hours or standing in queues.", stat: "100% Uptime" },
    { icon: Smartphone, title: "Mobile-First Experience", description: "Complete banking power in your pocket with our intuitive mobile app.", stat: "4.8★ Rating" },
    { icon: Zap, title: "Instant Transactions", description: "Transfer money in seconds. Real-time processing for all your payments.", stat: "<5 Seconds" },
    { icon: Shield, title: "Military-Grade Security", description: "Bank-level encryption, biometric authentication, and fraud protection.", stat: "256-bit SSL" },
    { icon: DollarSign, title: "Zero Hidden Fees", description: "Transparent pricing. Lower transaction costs compared to traditional banking.", stat: "Save 60%" },
    { icon: Receipt, title: "Digital Documentation", description: "Instant access to statements, receipts, and transaction history anytime.", stat: "Paperless" }
  ];

  const businessBenefits = [
    { icon: TrendingUp, title: "Revenue Growth", description: "Reach more customers and process more transactions with digital channels.", stat: "+40% Growth", color: "from-emerald-500 to-teal-500" },
    { icon: Users, title: "Customer Satisfaction", description: "Modern banking experience that keeps customers happy and loyal.", stat: "95% Retention", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart3, title: "Operational Efficiency", description: "Automate processes and reduce operational costs significantly.", stat: "-60% Costs", color: "from-purple-500 to-pink-500" },
    { icon: Globe, title: "Market Expansion", description: "Break geographical barriers and serve customers nationwide.", stat: "Unlimited Reach", color: "from-orange-500 to-red-500" },
    { icon: Lock, title: "Fraud Prevention", description: "Advanced AI-powered security reduces fraud and chargebacks.", stat: "-80% Fraud", color: "from-indigo-500 to-blue-500" },
    { icon: Briefcase, title: "Competitive Advantage", description: "Stay ahead with cutting-edge technology and modern services.", stat: "Market Leader", color: "from-teal-500 to-emerald-500" }
  ];

  const features = [
    { icon: Wallet, title: "Digital Wallet", description: "Secure mobile wallet for all transactions" },
    { icon: QrCode, title: "QR Payments", description: "Scan and pay instantly" },
    { icon: CreditCard, title: "Virtual Cards", description: "Instant card generation" },
    { icon: RefreshCw, title: "Auto-Pay", description: "Set up recurring payments" },
    { icon: BarChart3, title: "Analytics", description: "Track and manage spending" },
    { icon: Users, title: "Multi-User", description: "Team access management" },
    { icon: Bell, title: "Alerts", description: "Real-time notifications" },
    { icon: Target, title: "Goals", description: "Save for specific targets" }
  ];

  const ContactCard = ({ icon: Icon, title, description, contact, color, actionText, actionLink, isEmail = false, isPhone = false }) => (
    <div className="relative group">
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
                  href={`tel:${contact.replace(/\s/g, "")}`}
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
          href={isEmail ? `mailto:${contact}` : isPhone ? `tel:${contact.replace(/\s/g, "")}` : actionLink}
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            color.includes("emerald") 
              ? "bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 hover:from-emerald-100 hover:to-teal-100 hover:shadow-lg"
              : "bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-600 hover:from-teal-100 hover:to-cyan-100 hover:shadow-lg"
          }`}
        >
          {actionText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );

  const StepCard = ({ number, title, description, icon: Icon }) => (
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-white rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start gap-6">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-black text-white">{number}</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              {Icon && <Icon className="w-6 h-6 text-emerald-600" />}
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.15),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "700ms" }}></div>
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
              {/* Experience banking without boundaries. Manage your finances 24/7 with cutting-edge security, instant transactions, and tools that grow your wealth. */}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { value: "24/7", label: "Always On", icon: Clock },
              { value: "99.9%", label: "Uptime", icon: Shield },
              { value: "<5s", label: "Transfers", icon: Zap },
              { value: "60%", label: "Cost Savings", icon: TrendingUp }
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

      {/* How to Apply */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 px-6 py-3 rounded-full text-sm font-bold mb-8">
              <CheckCircle className="w-5 h-5" />
              HOW TO APPLY
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Get Started in 3 Simple Steps</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Contact us through any of our channels to begin your digital banking journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <StepCard
              number="1"
              title="Contact Us"
              description="Reach out through email, phone, or WhatsApp with your request for digital banking services"
              icon={PhoneCall}
            />
            <StepCard
              number="2"
              title="Consultation"
              description="Our team will contact you to understand your needs and recommend the best solutions"
              icon={MessageSquare}
            />
            <StepCard
              number="3"
              title="Get Started"
              description="Complete the registration process and start using your digital banking services"
              icon={CheckCircle}
            />
          </div>

          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">Choose Your Preferred Contact Method</h3>
            <p className="text-xl text-emerald-100 mb-10">We're available through multiple channels for your convenience</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ContactCard
              icon={Mail}
              title="Email Application"
              description="Send us an email with your digital banking request and requirements"
              contact="digitalbanking@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
              actionText="Send Email"
              isEmail={true}
            />

            <ContactCard
              icon={Phone}
              title="Phone Support"
              description="Call our dedicated digital banking support team"
              contact="+233 20 8070000"
              color="from-teal-500 to-cyan-500"
              actionText="Call Now"
              isPhone={true}
            />

            <ContactCard
              icon={MessageSquare}
              title="WhatsApp"
              description="Chat with us on WhatsApp for instant assistance"
              contact="0208070000"
              color="from-emerald-500 to-teal-500"
              actionText="Message on WhatsApp"
              actionLink="https://wa.me/233208070000"
            />
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <ContactCard
              icon={Headphones}
              title="Customer Support"
              description="For technical support and general inquiries about digital banking"
              contact="support@emeraldcapitalgh.com"
              color="from-teal-500 to-cyan-500"
              actionText="Contact Support"
              isEmail={true}
            />

            <ContactCard
              icon={Laptop}
              title="Technical Support"
              description="For technical issues with digital banking platforms"
              contact="techsupport@emeraldcapitalgh.com"
              color="from-emerald-500 to-teal-500"
              actionText="Email Tech Support"
              isEmail={true}
            />
          </div>
        </div>
      </section>

      

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Transform Your Banking?</h2>
          <p className="text-xl text-emerald-50 mb-10">Join thousands who've already made the switch to smarter banking</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:digitalbanking@emeraldcapitalgh.com"
              className="px-10 py-5 bg-white text-emerald-600 rounded-xl font-black text-lg hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3"
            >
              Email to Apply <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+233208070000"
              className="px-10 py-5 border-3 border-white text-white rounded-xl font-black text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Call to Apply <Phone className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-emerald-100 hover:text-white transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View all contact options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalBankingPage;