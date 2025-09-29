import React, { useState } from 'react';
import { Search, MessageCircle, Eye, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const BlogPost = ({ image, title, excerpt, comments, views }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-64 bg-gradient-to-br from-blue-100 to-green-100">
      {image}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-600 transition cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {excerpt}
      </p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span>{comments}</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{views}</span>
        </div>
      </div>
    </div>
  </div>
);

const CreditScoreGauge = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full">
    <defs>
      <linearGradient id="poorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="fairGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="goodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#FDE047', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FACC15', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="veryGoodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#84CC16', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A3E635', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="excellentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#22C55E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4ADE80', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    <path d="M 30 150 A 120 120 0 0 1 85 45" fill="none" stroke="url(#poorGrad)" strokeWidth="25" />
    <path d="M 85 45 A 120 120 0 0 1 150 25" fill="none" stroke="url(#fairGrad)" strokeWidth="25" />
    <path d="M 150 25 A 120 120 0 0 1 215 45" fill="none" stroke="url(#goodGrad)" strokeWidth="25" />
    <path d="M 215 45 A 120 120 0 0 1 255 100" fill="none" stroke="url(#veryGoodGrad)" strokeWidth="25" />
    <path d="M 255 100 A 120 120 0 0 1 270 150" fill="none" stroke="url(#excellentGrad)" strokeWidth="25" />
    
    <polygon points="150,140 145,70 155,70" fill="#2C3E50" />
    <circle cx="150" cy="150" r="12" fill="#34495E" />
    
    <text x="30" y="180" fontSize="10" fill="#DC2626" fontWeight="bold">Very Poor</text>
    <text x="250" y="180" fontSize="10" fill="#22C55E" fontWeight="bold" textAnchor="end">Excellent</text>
    
    <text x="45" y="175" fontSize="9" fill="#666">300-499</text>
    <text x="95" y="145" fontSize="9" fill="#666">500-600</text>
    <text x="145" y="135" fontSize="9" fill="#666">601-660</text>
    <text x="195" y="145" fontSize="9" fill="#666">661-780</text>
    <text x="235" y="175" fontSize="9" fill="#666">781-850</text>
  </svg>
);

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      title: "Enhancing Your Credit Score: 5 Effective Tips to Secure a Loan in Ghana",
      excerpt: "A strong credit score in Ghana is fundamental for accessing loans and favorable interest rates. [...]",
      comments: 0,
      views: 245,
      image: <CreditScoreGauge />
    },
    {
      title: "Understanding Mobile Money Loans in Ghana: A Complete Guide",
      excerpt: "Mobile money services have revolutionized financial access in Ghana, making it easier for individuals to secure quick loans. [...]",
      comments: 5,
      views: 432,
      image: <div className="flex items-center justify-center h-full">
        <div className="text-6xl">📱</div>
      </div>
    },
    {
      title: "Top 10 Microfinance Banks in Ghana for Small Business Loans",
      excerpt: "Small businesses are the backbone of Ghana's economy. Discover the best microfinance institutions offering competitive rates. [...]",
      comments: 12,
      views: 589,
      image: <div className="flex items-center justify-center h-full">
        <div className="text-6xl">🏦</div>
      </div>
    },
    {
      title: "How to Build Business Credit in Ghana: Essential Steps",
      excerpt: "Building business credit is crucial for accessing larger loans and better terms. Learn the key strategies for Ghanaian entrepreneurs. [...]",
      comments: 8,
      views: 367,
      image: <div className="flex items-center justify-center h-full">
        <div className="text-6xl">📊</div>
      </div>
    },
    {
      title: "Agricultural Loans in Ghana: Funding Your Farm Business",
      excerpt: "Agriculture remains a vital sector in Ghana. Explore financing options available for farmers and agribusiness owners. [...]",
      comments: 15,
      views: 678,
      image: <div className="flex items-center justify-center h-full">
        <div className="text-6xl">🌾</div>
      </div>
    },
    {
      title: "Personal Loans vs Salary Advances: Which is Right for You?",
      excerpt: "Understanding the difference between personal loans and salary advances can help you make informed financial decisions. [...]",
      comments: 7,
      views: 423,
      image: <div className="flex items-center justify-center h-full">
        <div className="text-6xl">💰</div>
      </div>
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  const socialLinks = [
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded hover:bg-red-700 transition font-medium">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 rounded hover:bg-gray-100 transition border">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 rounded hover:bg-gray-100 transition border">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 rounded hover:bg-gray-100 transition border">
                4
              </button>
              <span className="px-2 text-gray-500">...</span>
              <button className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 rounded hover:bg-gray-100 transition border">
                20
              </button>
              <button className="px-4 h-10 flex items-center justify-center bg-white text-gray-700 rounded hover:bg-gray-100 transition border">
                next →
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">SEARCH</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type and hit enter"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">NEWSLETTER</h3>
              <p className="text-gray-600 mb-6">
                Register now to get latest updates on promotions & coupons.
              </p>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">SOCIAL</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-red-600 text-gray-600 hover:text-white rounded transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}