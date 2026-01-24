import React, { useState, useEffect } from 'react';
import { ShoppingCart, Clock, Star, CheckCircle, Zap, TrendingUp, ArrowRight, Shield } from 'lucide-react';

export default function PurchasePageHero() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const originalAmount = 20000;
  const currentAmount = 5000;
  const discount = Math.round(((originalAmount - currentAmount) / originalAmount) * 100);
  const savings = originalAmount - currentAmount;

  const handleApplyClick = () => {
    // Redirect to loan application or contact
    window.location.href = 'tel:+233208070000';
    // Or open WhatsApp: window.open('https://wa.me/233208070000', '_blank');
  };

  return (
    <div className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Shield className="w-8 h-8 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delay">
          <Star className="w-6 h-6 text-emerald-300 opacity-60" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float-delay-2">
          <TrendingUp className="w-7 h-7 text-teal-300 opacity-60" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Limited Time Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse shadow-lg">
              <Clock className="w-4 h-4" />
              Special Offer - Limited Time Only!
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                Unlock Your Business Potential
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
              Get flexible business loans from <span className="font-bold text-yellow-300">GH₵ 500 to GH₵ 20,000</span> with competitive rates. 
              Empowering entrepreneurs across Ghana since inception.
            </p>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 border-2 border-white"></div>
                </div>
                <span className="text-sm font-semibold">Trusted by 1000+ Businesses</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-semibold">Rated Excellent</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Fast Approval (24-48hrs)',
                'Flexible Repayment Terms',
                'No Hidden Charges',
                'Expert Support'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                  <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Loan Offer Card */}
          <div className="relative">
            <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden">
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-bounce z-10">
                Special Rate
              </div>

              {/* Loan Product Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Business Growth Loan
              </h3>
              <p className="text-gray-600 mb-6">Powered by Emerald Capital</p>

              {/* Loan Amount Display */}
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2">Get up to</p>
                <div className="text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  GH₵ 20,000
                </div>
                <p className="text-gray-600 mt-2">• Competitive interest rates • Flexible terms</p>
              </div>

              {/* Loan Options */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-8">
                <p className="text-center text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
                  Available Loan Options:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { amount: 'GH₵ 500', term: '3-6 months' },
                    { amount: 'GH₵ 2,000', term: '6-12 months' },
                    { amount: 'GH₵ 5,000', term: '12-18 months' },
                    { amount: 'GH₵ 10,000+', term: '12-36 months' }
                  ].map((option, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border border-emerald-200">
                      <div className="text-xl font-black text-emerald-600">
                        {option.amount}
                      </div>
                      <div className="text-xs text-gray-600 font-semibold mt-1">
                        {option.term}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleApplyClick}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-5 px-8 rounded-2xl text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <ShoppingCart className="w-6 h-6" />
                Apply Now - Quick Approval
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Contact Options */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600 mb-3 font-semibold">
                  Or Contact Us Directly:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
                  <a href="tel:+233208070000" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
                    📞 0208070000
                  </a>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <a href="https://wa.me/233208070000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Licensed & Regulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span>Secure Process</span>
                  </div>
                </div>
              </div>

              {/* Urgency Text */}
              <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                ⚡ <span className="text-emerald-600 font-bold">Fast approval</span> within 24-48 hours!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 3s ease-in-out infinite 0.5s;
        }
        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}