import React from 'react';
import { ArrowRight } from 'lucide-react';

const BusinessFocusCarousel = () => {
  const cards = [
    {
      category: "Current & Savings",
      title: "Added security level",
      image: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=600&h=400&fit=crop",
      gradient: "from-gray-700 to-gray-800"
    },
    {
      category: "Deposits",
      title: "Grow Your Wealth With Us.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      category: "Loans",
      title: "Flexible Financing Options",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      gradient: "from-blue-900 to-blue-800"
    },
    {
      category: "Investment",
      title: "Smart Investment Strategies",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      gradient: "from-indigo-900 to-indigo-800"
    },
    {
      category: "Asset Finance",
      title: "Finance Your Dreams",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop",
      gradient: "from-purple-900 to-purple-800"
    },
    {
      category: "Personal Banking",
      title: "Banking Made Simple",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop",
      gradient: "from-slate-700 to-slate-800"
    },
    {
      category: "Digital Solutions",
      title: "Bank Anytime, Anywhere",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      category: "Business Growth",
      title: "Scale Your Business",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    }
  ];

  const CardComponent = ({ card }) => (
    <div className="flex-shrink-0 w-80 mx-4">
      <div className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${card.gradient} group cursor-pointer`}>
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>
        <img 
          src={card.image} 
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div>
            <p className="text-blue-300 text-sm font-semibold mb-3 uppercase tracking-wider">{card.category}</p>
            <h3 className="text-white text-3xl font-bold leading-tight">{card.title}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 relative overflow-hidden">
      {/* Left Section - Title and Navigation (Fixed) */}
      <div className="relative z-10 px-8 pb-8">
        <div className="w-80">
          <h1 className="text-6xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              OUR BUSINESS
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              FOCUS
            </span>
          </h1>
          <div className="space-y-4">
            <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors group w-full">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="font-semibold">Loans</span>
            </button>
            <button className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors group px-6 py-3">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="font-semibold">Savings/Current</span>
            </button>
            <button className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors group px-6 py-3">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="font-semibold">Investment</span>
            </button>
            <button className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors group px-6 py-3">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="font-semibold">Asset Finance</span>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section - Full Width */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center pointer-events-none">
        <div className="flex animate-scroll-horizontal pointer-events-auto">
          {[...cards, ...cards, ...cards].map((card, index) => (
            <CardComponent key={`card-${index}`} card={card} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 50s linear infinite;
        }

        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BusinessFocusCarousel;