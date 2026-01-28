import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogAPI, adminAPI, uploadAPI } from '../../services/api';
import {
  Plus, Edit, Trash2, Eye, Search, Filter, Calendar,
  User, Tag, FileText, Image as ImageIcon, Save,
  X, Upload, AlertCircle, CheckCircle, Loader,
  MoreVertical, LogOut, Settings, BarChart, RefreshCw,
  Link, Globe, CloudUpload, TrendingUp, Users, MessageSquare,
  Bookmark, Heart, Eye as EyeIcon, Sparkles, Zap
} from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://emerald-capital-backend.onrender.com";

export default function AdminBlogDashboard() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalViews: 0,
    totalComments: 0,
    totalLikes: 0,
    totalBookmarks: 0
  });
  const [fetchingStats, setFetchingStats] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [dashboardStats, setDashboardStats] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    featuredImage: '',
    isPublished: true,
    isFeatured: false,
    tags: '',
    readTime: 5,
    metaTitle: '',
    metaDescription: ''
  });

  // Categories
  const categories = [
    'Credit & Loans',
    'Personal Finance',
    'Business Banking',
    'Investment',
    'Digital Banking',
    'Agriculture',
    'General'
  ];

  // Check admin authentication and load data
  useEffect(() => {
    const adminToken = localStorage.getItem('adminAuthToken');
    const storedAdminUser = localStorage.getItem('adminUser');
    
    if (!adminToken || !storedAdminUser) {
      navigate('/admin/blog/login');
      return;
    }
    
    try {
      const parsedUser = JSON.parse(storedAdminUser);
      setAdminUser(parsedUser);
      loadDashboardData();
    } catch (err) {
      console.error('Error parsing admin user:', err);
      navigate('/admin/blog/login');
    }
  }, [navigate]);

  // Load all dashboard data
  const loadDashboardData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await Promise.all([
        fetchBlogs(),
        fetchBlogStats(),
        fetchAdminDashboardStats()
      ]);
    } catch (err) {
      console.error('Error loading dashboard data:', err);
      setError('Failed to load dashboard data. Please refresh.');
    } finally {
      setLoading(false);
    }
  };

  // Fix image URLs
  const fixImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.startsWith('file://')) {
      const fileName = url.split('/').pop();
      return `${API_BASE_URL}/uploads/blog-images/${fileName}`;
    }
    if (url.startsWith('/uploads/')) return `${API_BASE_URL}${url}`;
    if (url.includes('.')) return `${API_BASE_URL}/uploads/blog-images/${url}`;
    return url;
  };

  // Upload image file
  const handleImageUpload = async (file) => {
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await uploadAPI.uploadImage(formData, 'blog');
      
      if (response.data.success) {
        const imageUrl = response.data.data?.url || response.data.data?.path;
        const fixedUrl = fixImageUrl(imageUrl);
        
        setFormData(prev => ({
          ...prev,
          featuredImage: fixedUrl
        }));
        
        return fixedUrl;
      } else {
        throw new Error(response.data.message || 'Upload failed');
      }
    } catch (err) {
      console.error('❌ Image upload error:', err);
      const placeholderUrl = 'https://placehold.co/600x400/10b981/ffffff?text=Blog+Image';
      setFormData(prev => ({ ...prev, featuredImage: placeholderUrl }));
      alert('Upload failed. Using placeholder image.');
      return placeholderUrl;
    } finally {
      setUploadingImage(false);
    }
  };

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const params = { 
        page: 1, 
        limit: 100,
        ...(searchTerm && { search: searchTerm }),
        ...(filterCategory && { category: filterCategory })
      };
      
      const response = await blogAPI.getBlogs(params);
      
      if (response.data.success) {
        const blogData = response.data.data?.blogs || response.data.data || [];
        const fixedBlogs = blogData.map(blog => ({
          ...blog,
          featuredImage: fixImageUrl(blog.featuredImage)
        }));
        setBlogs(fixedBlogs);
      }
    } catch (err) {
      console.error('❌ Fetch blogs error:', err);
      setError(err.message || 'Failed to load blogs');
    }
  };

  // Fetch blog statistics
  const fetchBlogStats = async () => {
    setFetchingStats(true);
    try {
      const response = await blogAPI.getBlogStats();
      
      if (response.data.success) {
        const statsData = response.data.data?.stats || response.data.data || {};
        setStats(prev => ({
          ...prev,
          totalBlogs: statsData.total || statsData.totalBlogs || 0,
          publishedBlogs: statsData.published || statsData.publishedBlogs || 0,
          draftBlogs: statsData.drafts || statsData.draftBlogs || 0,
          totalViews: statsData.totalViews || 0,
          totalComments: statsData.totalComments || 0,
          totalLikes: statsData.totalLikes || 0,
          totalBookmarks: statsData.totalBookmarks || 0
        }));
      }
    } catch (err) {
      console.error('❌ Fetch blog stats error:', err);
    } finally {
      setFetchingStats(false);
    }
  };

  // Fetch admin dashboard stats
  const fetchAdminDashboardStats = async () => {
    try {
      const response = await adminAPI.getDashboardStats();
      if (response.data.success) {
        setDashboardStats(response.data.data);
      }
    } catch (err) {
      console.error('❌ Fetch admin dashboard stats error:', err);
    }
  };

  // Re-fetch when filters change
  useEffect(() => {
    if (adminUser) {
      const timer = setTimeout(() => {
        fetchBlogs();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchTerm, filterCategory]);

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'title') {
      setFormData({
        ...formData,
        [name]: value,
        slug: generateSlug(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  // Handle file input for image upload
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be less than 5MB');
      return;
    }
    
    await handleImageUpload(file);
    e.target.value = '';
  };

  // Create new blog
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        readTime: parseInt(formData.readTime) || 5
      };

      const response = await blogAPI.createBlog(blogData);
      
      if (response.data.success) {
        alert('Blog post created successfully!');
        setShowCreateModal(false);
        resetForm();
        loadDashboardData();
      }
    } catch (err) {
      alert(err.message || 'Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  // Update blog
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        readTime: parseInt(formData.readTime) || 5
      };

      const response = await blogAPI.updateBlog(currentBlog._id, blogData);
      
      if (response.data.success) {
        alert('Blog updated successfully!');
        setShowEditModal(false);
        setCurrentBlog(null);
        resetForm();
        loadDashboardData();
      }
    } catch (err) {
      alert(err.message || 'Failed to update blog');
    } finally {
      setLoading(false);
    }
  };

  // Delete blog
  const handleDeleteBlog = async (blogId, blogTitle) => {
    if (!window.confirm(`Delete "${blogTitle}"?`)) return;

    setLoading(true);
    try {
      await blogAPI.deleteBlog(blogId);
      alert('Blog deleted!');
      loadDashboardData();
    } catch (err) {
      alert(err.message || 'Failed to delete');
    } finally {
      setLoading(false);
    }
  };

  // Open edit modal
  const handleEditClick = (blog) => {
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug || generateSlug(blog.title),
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      category: blog.category || '',
      featuredImage: blog.featuredImage || '',
      isPublished: blog.isPublished !== undefined ? blog.isPublished : true,
      isFeatured: blog.isFeatured || false,
      tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : (blog.tags || ''),
      readTime: blog.readTime || 5,
      metaTitle: blog.metaTitle || '',
      metaDescription: blog.metaDescription || ''
    });
    setShowEditModal(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: '',
      featuredImage: '',
      isPublished: true,
      isFeatured: false,
      tags: '',
      readTime: 5,
      metaTitle: '',
      metaDescription: ''
    });
  };

  // Handle logout
  const handleLogout = () => {
    if (window.confirm('Logout?')) {
      localStorage.removeItem('adminAuthToken');
      localStorage.removeItem('adminUser');
      navigate('/admin/blog/login');
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading && !blogs.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-emerald-200/20 border-t-emerald-400 rounded-full animate-spin mx-auto mb-6"></div>
            <Sparkles className="w-8 h-8 text-emerald-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <p className="text-emerald-100 text-lg font-medium">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900">
      {/* Decorative Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-emerald-800/30 backdrop-blur-xl bg-emerald-950/50 sticky top-0 z-40 shadow-2xl shadow-emerald-950/50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <FileText className="w-7 h-7 text-white" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-emerald-300 animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
                  Blog Management
                </h1>
                <p className="text-sm text-emerald-400 font-medium">Emerald Capital CMS</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {adminUser && (
                <div className="flex items-center gap-3 px-4 py-2 bg-emerald-900/30 border border-emerald-700/30 rounded-xl backdrop-blur-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="text-emerald-200 font-bold">{adminUser.username}</p>
                    <p className="text-emerald-400 text-xs">{adminUser.role}</p>
                  </div>
                </div>
              )}
              <button
                onClick={loadDashboardData}
                disabled={loading || fetchingStats}
                className="p-3 bg-emerald-900/30 border border-emerald-700/30 hover:bg-emerald-800/40 rounded-xl transition-all duration-300 disabled:opacity-50 group backdrop-blur-sm"
              >
                <RefreshCw className={`w-5 h-5 text-emerald-300 group-hover:text-emerald-200 transition-colors ${loading || fetchingStats ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-3 bg-red-900/30 border border-red-700/30 text-red-200 rounded-xl hover:bg-red-800/40 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative max-w-7xl mx-auto px-6 py-8">
        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-5 bg-red-900/20 border-2 border-red-700/50 rounded-2xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-bold text-red-200 mb-2 text-lg">Error</h4>
                <p className="text-red-300">{error}</p>
                <button
                  onClick={loadDashboardData}
                  className="mt-3 text-sm text-red-200 hover:text-white font-semibold underline"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-xl p-6 rounded-2xl border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-emerald-400 text-sm font-medium mb-2">Total Posts</p>
                  <p className="text-5xl font-black bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-transparent">
                    {stats.totalBlogs}
                  </p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-xl backdrop-blur-sm">
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-green-400 font-medium">
                  <Zap className="w-4 h-4" />
                  {stats.publishedBlogs} live
                </span>
                <span className="text-emerald-600">•</span>
                <span className="text-yellow-400 font-medium">{stats.draftBlogs} drafts</span>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-xl p-6 rounded-2xl border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-emerald-400 text-sm font-medium mb-2">Total Views</p>
                  <p className="text-5xl font-black bg-gradient-to-br from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    {stats.totalViews}
                  </p>
                </div>
                <div className="p-3 bg-emerald-500/20 rounded-xl backdrop-blur-sm">
                  <EyeIcon className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-red-300">
                  <Heart className="w-4 h-4" />
                  {stats.totalLikes}
                </span>
                <span className="text-emerald-600">•</span>
                <span className="flex items-center gap-1 text-blue-300">
                  <MessageSquare className="w-4 h-4" />
                  {stats.totalComments}
                </span>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-xl p-6 rounded-2xl border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-emerald-400 text-sm font-medium mb-2">Bookmarks</p>
                  <p className="text-5xl font-black bg-gradient-to-br from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {stats.totalBookmarks}
                  </p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-xl backdrop-blur-sm">
                  <Bookmark className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              <p className="text-emerald-300 text-sm">Total saved posts</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-xl p-6 rounded-2xl border border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-emerald-400 text-sm font-medium mb-2">Avg. Read</p>
                  <p className="text-5xl font-black bg-gradient-to-br from-orange-300 to-red-300 bg-clip-text text-transparent">
                    5<span className="text-2xl">min</span>
                  </p>
                </div>
                <div className="p-3 bg-orange-500/20 rounded-xl backdrop-blur-sm">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
              </div>
              <p className="text-emerald-300 text-sm">Per blog post</p>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="relative bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-xl rounded-2xl p-6 border border-emerald-700/30 mb-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500 backdrop-blur-sm transition-all"
                />
              </div>
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 backdrop-blur-sm transition-all"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <button
              onClick={() => {
                resetForm();
                setShowCreateModal(true);
              }}
              className="relative group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Plus className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Create Post</span>
              <Sparkles className="w-4 h-4 relative z-10 group-hover:animate-pulse" />
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="relative bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-xl rounded-2xl border border-emerald-700/30 overflow-hidden shadow-2xl">
          <div className="px-6 py-5 border-b border-emerald-700/30 bg-emerald-950/30">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Blog Posts ({blogs.length})
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-emerald-300">Live</span>
              </div>
            </div>
          </div>
          
          {blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-700/30">
                  <FileText className="w-10 h-10 text-emerald-400" />
                </div>
              </div>
              <p className="text-emerald-300 font-bold text-lg mb-2">No posts yet</p>
              <p className="text-emerald-500 mb-6">Start creating amazing content</p>
              <button
                onClick={() => {
                  resetForm();
                  setShowCreateModal(true);
                }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300"
              >
                Create First Post
              </button>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid gap-6">
                {blogs.map((blog) => (
                  <div 
                    key={blog._id} 
                    className="group relative bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 backdrop-blur-sm rounded-2xl border border-emerald-700/30 hover:border-emerald-600/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/20"
                  >
                    <div className="flex gap-6">
                      {/* Image */}
                      <div className="relative w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 border border-emerald-700/30">
                        {blog.featuredImage ? (
                          <img
                            src={fixImageUrl(blog.featuredImage)}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = 'https://placehold.co/400x300/10b981/ffffff?text=Blog';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-900/50 to-teal-900/50 flex items-center justify-center">
                            <ImageIcon className="w-12 h-12 text-emerald-600" />
                          </div>
                        )}
                        {blog.isFeatured && (
                          <div className="absolute top-2 left-2 px-2 py-1 bg-purple-500/90 backdrop-blur-sm rounded-lg flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-white" />
                            <span className="text-xs font-bold text-white">Featured</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-emerald-100 mb-2 line-clamp-1 group-hover:text-emerald-200 transition-colors">
                              {blog.title}
                            </h3>
                            <p className="text-emerald-400 text-sm line-clamp-2 mb-3">
                              {blog.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-600/30 rounded-full text-xs font-semibold text-emerald-300">
                            {blog.category || 'Uncategorized'}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            blog.isPublished 
                              ? 'bg-green-500/20 border-green-600/30 text-green-300' 
                              : 'bg-yellow-500/20 border-yellow-600/30 text-yellow-300'
                          }`}>
                            {blog.isPublished ? 'Published' : 'Draft'}
                          </span>
                          <span className="text-emerald-500 text-sm">{blog.readTime || 5} min</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1 text-emerald-300">
                              <EyeIcon className="w-4 h-4" />
                              {blog.views || 0}
                            </span>
                            <span className="flex items-center gap-1 text-red-300">
                              <Heart className="w-4 h-4" />
                              {blog.likes?.length || 0}
                            </span>
                            <span className="flex items-center gap-1 text-blue-300">
                              <MessageSquare className="w-4 h-4" />
                              {blog.comments?.length || 0}
                            </span>
                            <span className="text-emerald-500 text-xs">
                              {formatDate(blog.createdAt)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => window.open(`/blog/${blog.slug || blog._id}`, '_blank')}
                              className="p-2 bg-emerald-900/50 border border-emerald-700/30 hover:bg-emerald-800/50 rounded-lg transition-all group/btn"
                            >
                              <Eye className="w-4 h-4 text-emerald-300 group-hover/btn:text-emerald-200" />
                            </button>
                            <button
                              onClick={() => handleEditClick(blog)}
                              className="p-2 bg-blue-900/50 border border-blue-700/30 hover:bg-blue-800/50 rounded-lg transition-all group/btn"
                            >
                              <Edit className="w-4 h-4 text-blue-300 group-hover/btn:text-blue-200" />
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(blog._id, blog.title)}
                              className="p-2 bg-red-900/50 border border-red-700/30 hover:bg-red-800/50 rounded-lg transition-all group/btn"
                            >
                              <Trash2 className="w-4 h-4 text-red-300 group-hover/btn:text-red-200" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Create/Edit Modal */}
        {(showCreateModal || showEditModal) && (
          <BlogEditorModal
            isOpen={showCreateModal || showEditModal}
            onClose={() => {
              setShowCreateModal(false);
              setShowEditModal(false);
              setCurrentBlog(null);
              resetForm();
            }}
            formData={formData}
            handleInputChange={handleInputChange}
            handleFileInputChange={handleFileInputChange}
            handleSubmit={showCreateModal ? handleCreateBlog : handleUpdateBlog}
            categories={categories}
            isEditing={showEditModal}
            loading={loading}
            uploadingImage={uploadingImage}
            API_BASE_URL={API_BASE_URL}
            fixImageUrl={fixImageUrl}
          />
        )}
      </div>
    </div>
  );
}

// Blog Editor Modal Component
function BlogEditorModal({ 
  isOpen, 
  onClose, 
  formData, 
  handleInputChange, 
  handleFileInputChange,
  handleSubmit, 
  categories,
  isEditing,
  loading,
  uploadingImage,
  fixImageUrl
}) {
  if (!isOpen) return null;

  const imagePreview = fixImageUrl(formData.featuredImage);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border-2 border-emerald-700/30 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

        {/* Modal Header */}
        <div className="relative sticky top-0 bg-emerald-950/90 backdrop-blur-xl border-b border-emerald-700/30 px-8 py-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              {isEditing ? <Edit className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
            </div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              {isEditing ? 'Edit Post' : 'Create New Post'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-emerald-800/50 rounded-xl transition-all group"
          >
            <X className="w-6 h-6 text-emerald-400 group-hover:text-emerald-200" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-emerald-300 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-600 backdrop-blur-sm transition-all"
              placeholder="Enter an awesome title"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-bold text-emerald-300 mb-2">
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              required
              rows="3"
              className="w-full px-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-600 backdrop-blur-sm transition-all"
              placeholder="Brief summary"
              maxLength="300"
            />
            <p className="text-xs text-emerald-500 mt-2">
              {formData.excerpt.length}/300
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-bold text-emerald-300 mb-2">
              Content *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows="12"
              className="w-full px-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-600 backdrop-blur-sm transition-all font-mono text-sm"
              placeholder="Write amazing content (HTML supported)"
            />
          </div>

          {/* Category & Read Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-emerald-300 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 backdrop-blur-sm transition-all"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-emerald-300 mb-2">
                Read Time (min)
              </label>
              <input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                min="1"
                max="60"
                className="w-full px-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 backdrop-blur-sm transition-all"
              />
            </div>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-bold text-emerald-300 mb-2">
              Featured Image
            </label>
            
            {imagePreview && (
              <div className="mb-4">
                <div className="relative w-48 h-32 rounded-xl overflow-hidden border-2 border-emerald-700/30">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/400x300/10b981/ffffff?text=Blog';
                    }}
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-emerald-400 mb-2">
                  Upload Image
                </label>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                  <div className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-dashed border-emerald-700/30 rounded-xl hover:border-emerald-500/50 hover:bg-emerald-900/20 transition-all">
                    {uploadingImage ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin text-emerald-400" />
                        <span className="text-emerald-300 font-medium">Uploading...</span>
                      </>
                    ) : (
                      <>
                        <CloudUpload className="w-6 h-6 text-emerald-400" />
                        <span className="text-emerald-300 font-medium">Choose File</span>
                      </>
                    )}
                  </div>
                </label>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-emerald-700/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-emerald-950 text-emerald-500">OR</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-emerald-400 mb-2">
                  Image URL
                </label>
                <div className="relative">
                  <Link className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                  <input
                    type="url"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-600 backdrop-blur-sm transition-all"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-bold text-emerald-300 mb-2">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-emerald-950/50 border-2 border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-600 backdrop-blur-sm transition-all"
              placeholder="finance, investment, banking"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-emerald-600 border-emerald-700/30 rounded bg-emerald-950/50 focus:ring-emerald-500/50"
                />
              </div>
              <span className="font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Publish</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-emerald-600 border-emerald-700/30 rounded bg-emerald-950/50 focus:ring-emerald-500/50"
                />
              </div>
              <span className="font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Featured</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-emerald-700/30">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border-2 border-emerald-700/30 rounded-xl font-semibold text-emerald-300 hover:bg-emerald-900/30 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || uploadingImage}
              className="relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin relative z-10" />
                  <span className="relative z-10">{isEditing ? 'Updating...' : 'Creating...'}</span>
                </>
              ) : (
                <>
                  <Save className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{isEditing ? 'Update' : 'Create'}</span>
                  <Sparkles className="w-4 h-4 relative z-10 group-hover:animate-pulse" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}