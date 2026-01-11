import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MessageCircle, 
  Eye, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Calendar, 
  User, 
  Tag,
  TrendingUp,
  Shield,
  Zap,
  Building,
  Sprout,
  DollarSign,
  ArrowRight,
  BookOpen,
  Clock,
  ChevronRight,
  Star,
  Bookmark,
  Share2
} from 'lucide-react';

// Enhanced Blog Post Component with Premium Design
const BlogPost = ({ 
  image, 
  title, 
  excerpt, 
  comments, 
  views, 
  date, 
  author, 
  category,
  readTime,
  isFeatured = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article 
      className={`group relative bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl overflow-hidden border border-emerald-100/50 backdrop-blur-sm transition-all duration-500 ${
        isHovered ? 'shadow-2xl shadow-emerald-200/30 -translate-y-2' : 'shadow-lg shadow-emerald-100/20'
      } ${isFeatured ? 'lg:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent z-10"></div>
        {image}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold rounded-full flex items-center gap-2 backdrop-blur-sm">
            <Tag className="w-3 h-3" />
            {category}
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-emerald-500 text-emerald-500' : 'text-gray-600'}`} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="font-medium">{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTime} min read</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {excerpt}
        </p>
        
        {/* Stats & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">{comments}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer">
              <Eye className="w-4 h-4" />
              <span className="font-medium">{views}</span>
            </div>
            {isFeatured && (
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="text-sm font-medium">Featured</span>
              </div>
            )}
          </div>
          
          <button className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </article>
  );
};

// Enhanced Credit Score Gauge with Animation
const CreditScoreGauge = ({ score = 720 }) => {
  const [animatedScore, setAnimatedScore] = useState(300);
  const gaugeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animate score from 300 to actual score
          let start = 300;
          const duration = 1500;
          const increment = (score - 300) / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            setAnimatedScore(Math.min(start, score));
            if (start >= score) {
              clearInterval(timer);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (gaugeRef.current) {
      observer.observe(gaugeRef.current);
    }

    return () => observer.disconnect();
  }, [score]);

  const getScoreColor = (score) => {
    if (score < 500) return '#EF4444';
    if (score < 600) return '#F59E0B';
    if (score < 660) return '#FACC15';
    if (score < 780) return '#84CC16';
    return '#22C55E';
  };

  return (
    <div ref={gaugeRef} className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 320 220" className="w-full h-full">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="25%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FACC15" />
            <stop offset="75%" stopColor="#84CC16" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Gauge Arc */}
        <path 
          d="M 40 170 A 140 140 0 0 1 280 170" 
          fill="none" 
          stroke="url(#gaugeGradient)" 
          strokeWidth="30" 
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Score Indicator */}
        <g transform={`rotate(${((animatedScore - 300) / 550) * 180 - 90}, 160, 170)`}>
          <path 
            d="M160,170 L160,50" 
            stroke={getScoreColor(animatedScore)} 
            strokeWidth="4" 
            strokeLinecap="round"
            opacity="0.7"
          />
          <circle 
            cx="160" 
            cy="50" 
            r="10" 
            fill={getScoreColor(animatedScore)} 
            filter="url(#glow)"
          />
          <circle 
            cx="160" 
            cy="50" 
            r="6" 
            fill="white" 
          />
        </g>
        
        {/* Score Display */}
        <g>
          <rect x="120" y="100" width="80" height="40" rx="8" fill="white" opacity="0.9" />
          <text 
            x="160" 
            y="120" 
            fontSize="20" 
            fontWeight="bold" 
            fill="#111827" 
            textAnchor="middle" 
            fontFamily="system-ui"
          >
            {Math.round(animatedScore)}
          </text>
          <text 
            x="160" 
            y="140" 
            fontSize="10" 
            fill="#6B7280" 
            textAnchor="middle" 
            fontFamily="system-ui"
          >
            Credit Score
          </text>
        </g>
        
        {/* Labels */}
        <g fontSize="10" fill="#6B7280" fontFamily="system-ui">
          <text x="40" y="190" textAnchor="middle">300</text>
          <text x="100" y="160">500</text>
          <text x="160" y="150">600</text>
          <text x="220" y="160">700</text>
          <text x="280" y="190" textAnchor="middle">850</text>
        </g>
      </svg>
    </div>
  );
};

// Sidebar Components
const SearchWidget = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100/50 backdrop-blur-sm shadow-lg shadow-emerald-100/20">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        <Search className="w-6 h-6 text-emerald-600" />
        Search Articles
      </h3>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-5 py-4 pr-12 bg-white border rounded-xl transition-all duration-300 ${
            isFocused 
              ? 'border-emerald-400 ring-2 ring-emerald-500/20 shadow-lg' 
              : 'border-emerald-100'
          }`}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

const NewsletterWidget = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/5"></div>
      <div className="relative bg-gradient-to-br from-white/90 to-emerald-50/30 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
            <p className="text-emerald-600 text-sm">Exclusive insights & offers</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">
          Join 10,000+ subscribers receiving expert financial advice and market insights.
        </p>
        
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-white border border-emerald-100 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              isSubscribed
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1'
            }`}
          >
            {isSubscribed ? (
              <>
                <span className="animate-pulse">✓</span>
                Subscribed Successfully!
              </>
            ) : (
              <>
                Subscribe Now
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

const SocialWidget = () => {
  const socialLinks = [
    { icon: Twitter, url: '#', label: 'Twitter', color: 'hover:bg-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-600' },
    { icon: Facebook, url: '#', label: 'Facebook', color: 'hover:bg-blue-600', bg: 'bg-blue-600/10', text: 'text-blue-700' },
    { icon: Instagram, url: '#', label: 'Instagram', color: 'hover:bg-pink-500', bg: 'bg-pink-500/10', text: 'text-pink-600' },
    { icon: Linkedin, url: '#', label: 'LinkedIn', color: 'hover:bg-blue-700', bg: 'bg-blue-700/10', text: 'text-blue-800' }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100/50 backdrop-blur-sm shadow-lg shadow-emerald-100/20">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <Share2 className="w-6 h-6 text-emerald-600" />
        Connect With Us
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              aria-label={social.label}
              className={`group p-4 rounded-xl ${social.bg} ${social.text} hover:text-white ${social.color} transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center gap-2`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/50 group-hover:bg-transparent flex items-center justify-center transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold">{social.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const CategoryWidget = () => {
  const categories = [
    { name: 'Credit & Loans', count: 24, icon: TrendingUp },
    { name: 'Personal Finance', count: 18, icon: DollarSign },
    { name: 'Business Banking', count: 15, icon: Building },
    { name: 'Investment', count: 12, icon: Shield },
    { name: 'Digital Banking', count: 9, icon: Zap },
    { name: 'Agriculture', count: 7, icon: Sprout }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100/50 backdrop-blur-sm shadow-lg shadow-emerald-100/20">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
      <div className="space-y-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <a
              key={index}
              href="#"
              className="group flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-emerald-700">
                  {category.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{category.count}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Enhancing Your Credit Score: 5 Effective Tips to Secure a Loan in Ghana",
      excerpt: "Master the art of credit management with proven strategies that can significantly improve your credit score and increase your loan approval chances in Ghana's competitive financial landscape.",
      comments: 24,
      views: 2450,
      date: "Mar 15, 2024",
      author: "Michael Boateng",
      category: "Credit & Loans",
      readTime: 6,
      image: <CreditScoreGauge score={720} />,
      isFeatured: true
    },
    {
      title: "Understanding Mobile Money Loans in Ghana: A Complete Guide",
      excerpt: "Explore the revolutionary world of mobile money services that have transformed financial access, making quick loans more accessible than ever for Ghanaian individuals and businesses.",
      comments: 15,
      views: 4320,
      date: "Mar 10, 2024",
      author: "Sarah Mensah",
      category: "Digital Banking",
      readTime: 8,
      image: <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-400 to-cyan-400">
        <div className="text-8xl">📱</div>
      </div>
    },
    {
      title: "Top 10 Microfinance Banks in Ghana for Small Business Loans",
      excerpt: "Discover the leading microfinance institutions offering competitive rates and specialized services tailored for small businesses, the backbone of Ghana's thriving economy.",
      comments: 32,
      views: 5890,
      date: "Mar 5, 2024",
      author: "David Osei",
      category: "Business Banking",
      readTime: 10,
      image: <div className="flex items-center justify-center h-full bg-gradient-to-br from-emerald-400 to-teal-400">
        <div className="text-8xl">🏦</div>
      </div>
    },
    {
      title: "How to Build Business Credit in Ghana: Essential Steps",
      excerpt: "Learn comprehensive strategies for establishing and growing business credit, a crucial factor for accessing larger loans and securing better financial terms for entrepreneurs.",
      comments: 18,
      views: 3670,
      date: "Feb 28, 2024",
      author: "Grace Asante",
      category: "Business Banking",
      readTime: 7,
      image: <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-400 to-pink-400">
        <div className="text-8xl">📊</div>
      </div>
    },
    {
      title: "Agricultural Loans in Ghana: Funding Your Farm Business",
      excerpt: "Navigate the financial options available for farmers and agribusiness owners, exploring specialized loan products designed to support Ghana's vital agricultural sector.",
      comments: 25,
      views: 6780,
      date: "Feb 22, 2024",
      author: "Kwame Appiah",
      category: "Agriculture",
      readTime: 9,
      image: <div className="flex items-center justify-center h-full bg-gradient-to-br from-green-400 to-emerald-400">
        <div className="text-8xl">🌾</div>
      </div>
    },
    {
      title: "Personal Loans vs Salary Advances: Which is Right for You?",
      excerpt: "Make informed financial decisions by understanding the key differences, benefits, and considerations between personal loans and salary advances in the Ghanaian market.",
      comments: 17,
      views: 4230,
      date: "Feb 18, 2024",
      author: "Esi Amoah",
      category: "Personal Finance",
      readTime: 5,
      image: <div className="flex items-center justify-center h-full bg-gradient-to-br from-amber-400 to-yellow-400">
        <div className="text-8xl">💰</div>
      </div>
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 py-16">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 -left-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 backdrop-blur-sm mb-8">
            <BookOpen className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-semibold text-sm tracking-wider">
              FINANCIAL INSIGHTS BLOG
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Financial
            <br />
            <span className="relative inline-block">
              <span className="text-emerald-600">Insights</span>
              <span className="absolute -bottom-3 left-0 right-0 h-4 bg-emerald-200/30 -rotate-1 transform"></span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering your financial journey with expert analysis, practical advice, 
            and the latest trends in Ghana's dynamic financial landscape.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts Grid */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <div className="mb-8">
              <BlogPost {...blogPosts[0]} />
            </div>
            
            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                1
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:bg-emerald-50 border border-emerald-100 transition-all duration-300 hover:scale-105">
                2
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:bg-emerald-50 border border-emerald-100 transition-all duration-300 hover:scale-105">
                3
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:bg-emerald-50 border border-emerald-100 transition-all duration-300 hover:scale-105">
                4
              </button>
              <span className="px-3 text-gray-400">...</span>
              <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:bg-emerald-50 border border-emerald-100 transition-all duration-300 hover:scale-105">
                20
              </button>
              <button className="px-6 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:bg-emerald-50 border border-emerald-100 transition-all duration-300 hover:scale-105">
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <SearchWidget />
            <NewsletterWidget />
            <SocialWidget />
            <CategoryWidget />
          </div>
        </div>
      </div>
    </div>
  );
}