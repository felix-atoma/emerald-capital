import React from 'react';
import { Wallet, Building2, TrendingUp, CreditCard, PiggyBank, Briefcase, DollarSign, LineChart, Home, Shield, Users, Award } from 'lucide-react';

const FinancialCards = () => {
  const topRowCards = [
    {
      icon: <Wallet className="w-12 h-12 text-blue-600" />,
      title: "Savings",
      description: "Whether you're saving for a big purchase, building an emergency fund, or planning for your child's education, our savings accounts come with competitive interest rates and easy access to your funds.",
      color: "bg-blue-50"
    },
    {
      icon: <Building2 className="w-12 h-12 text-purple-600" />,
      title: "Corporate Accounts",
      description: "From efficient transaction management to payroll solutions, our corporate accounts offer a seamless experience, simplify your business finances, and enhance your company's growth.",
      color: "bg-purple-50"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: "Investment",
      description: "We offer a variety of high-yield investment options that are designed to help you achieve your financial objectives. Build and grow your wealth with our array of investment opportunities.",
      color: "bg-green-50"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-red-600" />,
      title: "Loans",
      description: "Timely access to funds can make all the difference. Our loan services are designed to provide flexible and affordable options to cater to your needs.",
      color: "bg-red-50"
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-orange-600" />,
      title: "Fixed Deposits",
      description: "Secure your future with our fixed deposit accounts offering guaranteed returns and flexible tenure options. Perfect for risk-averse investors looking for stable growth.",
      color: "bg-orange-50"
    },
    {
      icon: <Home className="w-12 h-12 text-cyan-600" />,
      title: "Home Loans",
      description: "Make your dream home a reality with our competitive home loan rates and flexible repayment options. Expert guidance throughout your home buying journey.",
      color: "bg-cyan-50"
    }
  ];

  const bottomRowCards = [
    {
      icon: <Briefcase className="w-12 h-12 text-indigo-600" />,
      title: "Business Banking",
      description: "Comprehensive banking solutions tailored for businesses of all sizes. From merchant services to cash management, we provide tools to streamline your operations.",
      color: "bg-indigo-50"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-yellow-600" />,
      title: "Wealth Management",
      description: "Personalized wealth management services to help you preserve and grow your assets. Our expert advisors work with you to create customized strategies.",
      color: "bg-yellow-50"
    },
    {
      icon: <LineChart className="w-12 h-12 text-teal-600" />,
      title: "Financial Planning",
      description: "Comprehensive financial planning services covering retirement, estate planning, tax optimization, and more. Let us help you build a roadmap to success.",
      color: "bg-teal-50"
    },
    {
      icon: <Shield className="w-12 h-12 text-pink-600" />,
      title: "Insurance",
      description: "Protect what matters most with our comprehensive insurance solutions. Life, health, and property insurance options tailored to your needs.",
      color: "bg-pink-50"
    },
    {
      icon: <Users className="w-12 h-12 text-violet-600" />,
      title: "Personal Banking",
      description: "Complete personal banking solutions designed for your lifestyle. From checking accounts to credit cards, we have everything you need.",
      color: "bg-violet-50"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Premium Services",
      description: "Exclusive banking services for our premium customers. Enjoy priority service, dedicated relationship managers, and special privileges.",
      color: "bg-rose-50"
    }
  ];

  const CardComponent = ({ card }) => (
    <div className={`${card.color} rounded-2xl shadow-lg p-8 flex-shrink-0 w-96 mx-4`}>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="bg-white rounded-xl p-4 shadow-md">
            {card.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
          <p className="text-gray-700 leading-relaxed text-sm">{card.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Financial Services</h1>
        <p className="text-lg text-gray-600">Comprehensive solutions for all your financial needs</p>
      </div>

      <div className="space-y-8">
        {/* Top Row - Moving Left */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...topRowCards, ...topRowCards].map((card, index) => (
              <CardComponent key={`top-${index}`} card={card} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {[...bottomRowCards, ...bottomRowCards].map((card, index) => (
              <CardComponent key={`bottom-${index}`} card={card} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default FinancialCards;