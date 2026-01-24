import React, { useState, useEffect } from 'react';
import { blogAPI } from '../services/api'
import {
  Check, Award, Users, Target, Shield, ChevronDown, ChevronUp,
  TrendingUp, Building2, Leaf, GraduationCap, Briefcase,
  Zap, CheckCircle, Globe, Clock, Banknote, Percent, ShieldCheck,
  BarChart, Headphones, Building, MapPin, Phone, Mail, Calendar, Key,
  Lightbulb, Handshake, Search, Eye, MessageCircle, ArrowRight,
  BookOpen, Tag, User, Bookmark, Share2, Twitter, Facebook, 
  Instagram, Linkedin, Mail as MailIcon, ChevronRight, Heart,
  Loader
} from 'lucide-react';

// Create a simple Plant icon component
const Plant = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 15h10M7 19h10M12 3a6 6 0 0 1 6 6c0 2.5-2 5-6 7-4-2-6-4.5-6-7a6 6 0 0 1 6-6z" />
    <path d="M12 3v18" />
  </svg>
);

// Enhanced Blog Post Component with API Integration
const BlogPostItem = ({ 
  _id,
  slug,
  featuredImage,
  title, 
  excerpt, 
  comments = [],
  views = 0,
  createdAt,
  authorId,
  category,
  likes = [],
  isLiked: initialIsLiked = false,
  isBookmarked: initialIsBookmarked = false,
  isFeatured = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const [isLikedState, setIsLikedState] = useState(initialIsLiked);
  const [likesCount, setLikesCount] = useState(likes.length || 0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Calculate read time based on excerpt and content length
  const calculateReadTime = () => {
    const words = excerpt.split(' ').length;
    return Math.max(1, Math.ceil(words / 200)); // Assuming 200 words per minute
  };

  // Handle like toggle
  const handleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isProcessing) return;
    
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to like posts');
      return;
    }

    setIsProcessing(true);
    try {
      const response = await blogAPI.likeBlog(_id);
      setIsLikedState(response.data.isLiked);
      setLikesCount(response.data.likesCount);
    } catch (error) {
      console.error('Error liking blog:', error);
      alert('Failed to like post. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle bookmark toggle
  const handleBookmark = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isProcessing) return;
    
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to bookmark posts');
      return;
    }

    setIsProcessing(true);
    try {
      const response = await blogAPI.bookmarkBlog(_id);
      setIsBookmarked(response.data.isBookmarked);
    } catch (error) {
      console.error('Error bookmarking blog:', error);
      alert('Failed to bookmark post. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle navigation to blog detail
  const handleReadMore = () => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <article 
      onClick={handleReadMore}
      className={`group relative bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl overflow-hidden border border-emerald-100/50 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
        isHovered ? 'shadow-2xl shadow-emerald-200/30 -translate-y-2' : 'shadow-lg shadow-emerald-100/20'
      } ${isFeatured ? 'lg:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-64 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent z-10"></div>
        {featuredImage ? (
          <img 
            src={featuredImage} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-emerald-500 to-teal-500">
            <div className="text-7xl text-white/90">📝</div>
          </div>
        )}
        
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold rounded-full flex items-center gap-2 backdrop-blur-sm">
            <Tag className="w-3 h-3" />
            {category || 'Uncategorized'}
          </span>
        </div>
        
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button 
            onClick={handleBookmark}
            disabled={isProcessing}
            className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 disabled:opacity-50"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-emerald-500 text-emerald-500' : 'text-gray-600'}`} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 flex-wrap">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="font-medium">{authorId?.name || 'Admin'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(createdAt)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{calculateReadTime()} min read</span>
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
          <div className="flex items-center gap-6">
            <button 
              onClick={handleLike}
              disabled={isProcessing}
              className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer disabled:opacity-50"
            >
              <Heart className={`w-4 h-4 ${isLikedState ? 'fill-red-500 text-red-500' : ''}`} />
              <span className="font-medium">{likesCount}</span>
            </button>
            <div className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">{comments.length}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer">
              <Eye className="w-4 h-4" />
              <span className="font-medium">{views}</span>
            </div>
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

// Search Widget Component
const SearchWidget = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');

    try {
      // Import newsletterAPI if not already imported
      const { newsletterAPI } = await import('../services/api');
      await newsletterAPI.subscribe({ email });
      
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/5"></div>
      <div className="relative bg-gradient-to-br from-white/90 to-emerald-50/30 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
            <MailIcon className="w-6 h-6 text-white" />
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
              disabled={isLoading}
              className="w-full px-5 py-4 bg-white border border-emerald-100 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 disabled:opacity-50"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 ${
              isSubscribed
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1'
            }`}
          >
            {isLoading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : isSubscribed ? (
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

const CategoryWidget = ({ onCategoryClick, activeCategory }) => {
  const categories = [
    { name: 'Credit & Loans', count: 24, icon: TrendingUp },
    { name: 'Personal Finance', count: 18, icon: Banknote },
    { name: 'Business Banking', count: 15, icon: Building },
    { name: 'Investment', count: 12, icon: ShieldCheck },
    { name: 'Digital Banking', count: 9, icon: Zap },
    { name: 'Agriculture', count: 7, icon: Plant }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100/50 backdrop-blur-sm shadow-lg shadow-emerald-100/20">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
      <div className="space-y-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.name;
          return (
            <button
              key={index}
              onClick={() => onCategoryClick && onCategoryClick(category.name)}
              className={`group flex items-center justify-between p-3 rounded-lg transition-all duration-300 w-full ${
                isActive ? 'bg-emerald-100/70' : 'hover:bg-emerald-50/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}>
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <span className={`font-medium ${isActive ? 'text-emerald-700' : 'text-gray-700 group-hover:text-emerald-700'}`}>
                  {category.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{category.count}</span>
                <ChevronRight className={`w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all ${
                  isActive ? 'text-emerald-500 translate-x-1' : ''
                }`} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Main Blog Section Component with API Integration
export default function IntegratedBlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const params = {
        page,
        limit: 6,
        ...(searchTerm && { search: searchTerm }),
        ...(selectedCategory && { category: selectedCategory })
      };

      const response = await blogAPI.getBlogs(params);
      
      if (response.data.success) {
        setBlogs(response.data.data);
        setTotalPages(response.data.totalPages || 1);
      } else {
        throw new Error('Failed to fetch blogs');
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(err.response?.data?.message || 'Failed to load blogs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs on component mount and when filters change
  useEffect(() => {
    fetchBlogs();
  }, [page, searchTerm, selectedCategory]);

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1); // Reset to first page
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category);
    setPage(1); // Reset to first page
  };

  // Handle pagination
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm tracking-wider">
              FINANCIAL INSIGHTS BLOG
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Expert Financial
            <br />
            <span className="relative inline-block">
              <span className="text-emerald-600">Insights</span>
              <span className="absolute -bottom-3 left-0 right-0 h-4 bg-emerald-200/30 -rotate-1 transform"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering your financial journey with expert analysis, practical advice, 
            and the latest trends in Ghana's dynamic financial landscape.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader className="w-12 h-12 text-emerald-600 animate-spin" />
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                <p className="text-red-600 font-medium">{error}</p>
                <button
                  onClick={fetchBlogs}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : blogs.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <p className="text-gray-600 font-medium">No blogs found. Try a different search or category.</p>
              </div>
            ) : (
              <>
                {blogs.map((blog) => (
                  <BlogPostItem key={blog._id} {...blog} />
                ))}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-12">
                    <button
                      onClick={handlePrevPage}
                      disabled={page === 1}
                      className="px-6 py-3 bg-white border border-emerald-200 rounded-lg font-semibold text-gray-700 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <span className="text-gray-600 font-medium">
                      Page {page} of {totalPages}
                    </span>
                    <button
                      onClick={handleNextPage}
                      disabled={page === totalPages}
                      className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <SearchWidget onSearch={handleSearch} />
            <NewsletterWidget />
            <SocialWidget />
            <CategoryWidget 
              onCategoryClick={handleCategoryClick}
              activeCategory={selectedCategory}
            />
          </div>
        </div>

        {/* View All Articles Button */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}