import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogAPI, adminAPI, uploadAPI } from '../../services/api';
import {
  Plus, Edit, Trash2, Eye, Search, Filter, Calendar,
  User, Tag, FileText, Image as ImageIcon, Save,
  X, Upload, AlertCircle, CheckCircle, Loader,
  MoreVertical, LogOut, Settings, BarChart, RefreshCw,
  Link, Globe, CloudUpload, TrendingUp, Users, MessageSquare,
  Bookmark, Heart, Eye as EyeIcon
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
      
      // Load all data
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
      // Load blogs in parallel
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
    
    // If it's already a proper URL, return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // If it's a local file path, convert to server URL
    if (url.startsWith('file://')) {
      const fileName = url.split('/').pop();
      return `${API_BASE_URL}/uploads/blog-images/${fileName}`;
    }
    
    // If it's a relative path without protocol
    if (url.startsWith('/uploads/')) {
      return `${API_BASE_URL}${url}`;
    }
    
    // If it's just a filename
    if (url.includes('.')) {
      return `${API_BASE_URL}/uploads/blog-images/${url}`;
    }
    
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
      
      // Fallback to placeholder
      const placeholderUrl = 'https://placehold.co/600x400/10b981/ffffff?text=Blog+Image';
      setFormData(prev => ({
        ...prev,
        featuredImage: placeholderUrl
      }));
      
      alert('Upload failed. Using placeholder image. Please use an image URL instead.');
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
        // Handle different response structures
        const blogData = response.data.data?.blogs || response.data.data || [];
        
        // Fix image URLs for all blogs
        const fixedBlogs = blogData.map(blog => ({
          ...blog,
          featuredImage: fixImageUrl(blog.featuredImage)
        }));
        
        setBlogs(fixedBlogs);
      } else {
        throw new Error(response.data.message || 'Failed to load blogs');
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
        // Handle different response structures
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
      // It's okay if stats fail - we have basic stats from blogs
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
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (jpg, png, gif, webp, etc.)');
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image file size must be less than 5MB');
      return;
    }
    
    await handleImageUpload(file);
    e.target.value = ''; // Reset file input
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
      } else {
        throw new Error(response.data.message || 'Failed to create blog post');
      }
    } catch (err) {
      console.error('❌ Create blog error:', err);
      alert(err.message || 'Failed to create blog post');
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
        alert('Blog post updated successfully!');
        setShowEditModal(false);
        setCurrentBlog(null);
        resetForm();
        loadDashboardData();
      } else {
        throw new Error(response.data.message || 'Failed to update blog post');
      }
    } catch (err) {
      console.error('❌ Update blog error:', err);
      alert(err.message || 'Failed to update blog post');
    } finally {
      setLoading(false);
    }
  };

  // Delete blog
  const handleDeleteBlog = async (blogId, blogTitle) => {
    if (!window.confirm(`Are you sure you want to delete "${blogTitle}"? This action cannot be undone.`)) {
      return;
    }

    setLoading(true);
    try {
      await blogAPI.deleteBlog(blogId);
      alert('Blog post deleted successfully!');
      loadDashboardData();
    } catch (err) {
      console.error('❌ Delete blog error:', err);
      alert(err.message || 'Failed to delete blog post');
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
    if (window.confirm('Are you sure you want to logout?')) {
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

  // Get image preview URL
  const getImagePreview = (url) => {
    if (!url) return null;
    
    const fixedUrl = fixImageUrl(url);
    return fixedUrl;
  };

  // Get status badge class
  const getStatusBadgeClass = (isPublished) => {
    return isPublished 
      ? 'bg-green-100 text-green-800 border-green-200' 
      : 'bg-yellow-100 text-yellow-800 border-yellow-200';
  };

  // Get category badge class
  const getCategoryBadgeClass = (category) => {
    const categoryColors = {
      'Credit & Loans': 'bg-blue-100 text-blue-800 border-blue-200',
      'Personal Finance': 'bg-purple-100 text-purple-800 border-purple-200',
      'Business Banking': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Investment': 'bg-teal-100 text-teal-800 border-teal-200',
      'Digital Banking': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Agriculture': 'bg-emerald-100 text-emerald-800 border-emerald-200'
    };
    
    return categoryColors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  if (loading && !blogs.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-emerald-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading blog dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900">Blog Management</h1>
                <p className="text-sm text-gray-600">Emerald Capital Admin Panel</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {adminUser && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{adminUser.username}</span>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">
                    {adminUser.role}
                  </span>
                </div>
              )}
              <button
                onClick={loadDashboardData}
                disabled={loading || fetchingStats}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                title="Refresh"
              >
                <RefreshCw className={`w-5 h-5 text-gray-600 ${loading || fetchingStats ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-semibold">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-red-900 mb-1">Error</h4>
                <p className="text-sm text-red-700">{error}</p>
                <button
                  onClick={loadDashboardData}
                  className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-500">Total Posts</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalBlogs}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-600 font-medium">{stats.publishedBlogs} published</span>
              <span>•</span>
              <span className="text-yellow-600 font-medium">{stats.draftBlogs} drafts</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-500">Total Views</p>
                <p className="text-3xl font-bold text-emerald-600">{stats.totalViews}</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <EyeIcon className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-500" />
                {stats.totalLikes} likes
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                {stats.totalComments} comments
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-500">Engagement</p>
                <p className="text-3xl font-bold text-purple-600">{stats.totalBookmarks}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Bookmark className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600">Total bookmarks</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-500">Avg. Read Time</p>
                <p className="text-3xl font-bold text-orange-600">5 min</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600">Per blog post</p>
          </div>
        </div>

        {/* Admin Dashboard Stats */}
        {dashboardStats && (
          <div className="bg-white rounded-xl shadow-sm border mb-8">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">System Overview</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Users</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Users</span>
                      <span className="font-medium">{dashboardStats.stats?.users?.total || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Users</span>
                      <span className="font-medium text-green-600">{dashboardStats.stats?.users?.active || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">New This Month</span>
                      <span className="font-medium text-blue-600">{dashboardStats.stats?.users?.newThisMonth || 0}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Loans</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Loans</span>
                      <span className="font-medium">{dashboardStats.stats?.loans?.total || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pending</span>
                      <span className="font-medium text-yellow-600">{dashboardStats.stats?.loans?.pending || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Approved</span>
                      <span className="font-medium text-green-600">{dashboardStats.stats?.loans?.approved || 0}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Messages</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Messages</span>
                      <span className="font-medium">{dashboardStats.stats?.messages?.total || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">New Messages</span>
                      <span className="font-medium text-red-600">{dashboardStats.stats?.messages?.new || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions Bar */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts by title or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Create New Post
            </button>
          </div>
        </div>

        {/* Blog Posts Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900">Blog Posts ({blogs.length})</h2>
          </div>
          
          {blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <FileText className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-600 font-medium">No blog posts found</p>
              <button
                onClick={() => {
                  resetForm();
                  setShowCreateModal(true);
                }}
                className="mt-4 text-emerald-600 font-semibold hover:underline"
              >
                Create your first post
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Post
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Stats
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {blogs.map((blog) => {
                    const imageUrl = getImagePreview(blog.featuredImage);
                    
                    return (
                      <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {imageUrl ? (
                              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                <img
                                  src={imageUrl}
                                  alt={blog.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                  }}
                                />
                                <div className="hidden w-full h-full items-center justify-center bg-gray-200">
                                  <ImageIcon className="w-6 h-6 text-gray-400" />
                                </div>
                              </div>
                            ) : (
                              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <ImageIcon className="w-6 h-6 text-gray-400" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <h3 className="font-bold text-gray-900 line-clamp-1">
                                {blog.title}
                              </h3>
                              <p className="text-sm text-gray-600 line-clamp-1 mt-1">
                                {blog.excerpt}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                {blog.isFeatured && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                                    Featured
                                  </span>
                                )}
                                <span className="text-xs text-gray-500">
                                  {blog.readTime || 5} min read
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(blog.category)}`}>
                            {blog.category || 'Uncategorized'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1 text-sm">
                            <span className="flex items-center gap-1 text-gray-600">
                              <EyeIcon className="w-4 h-4" />
                              {blog.views || 0} views
                            </span>
                            <span className="flex items-center gap-1 text-gray-600">
                              <Heart className="w-4 h-4" />
                              {(blog.likes?.length || 0)} likes
                            </span>
                            <span className="flex items-center gap-1 text-gray-600">
                              <MessageSquare className="w-4 h-4" />
                              {(blog.comments?.length || 0)} comments
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadgeClass(blog.isPublished)}`}>
                            {blog.isPublished ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {formatDate(blog.createdAt || blog.updatedAt)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => window.open(`/blog/${blog.slug || blog._id}`, '_blank')}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                              title="View"
                            >
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button
                              onClick={() => handleEditClick(blog)}
                              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4 text-blue-600" />
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(blog._id, blog.title)}
                              className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
          />
        )}
      </div>
    </div>
  );
}

// Blog Editor Modal Component (keep the same as before, but updated)
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
  API_BASE_URL
}) {
  if (!isOpen) return null;

  const getImagePreview = (url) => {
    if (!url) return null;
    
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    if (url.startsWith('/')) {
      return `${API_BASE_URL}${url}`;
    }
    
    return url;
  };

  const imagePreview = getImagePreview(formData.featuredImage);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-900">
            {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter blog post title"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              URL Slug (auto-generated)
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              required
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Brief summary of the blog post (max 300 characters)"
              maxLength="300"
            />
            <p className="text-xs text-gray-500 mt-2">
              {formData.excerpt.length}/300 characters
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Content *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows="12"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-mono text-sm"
              placeholder="Write your blog content here (HTML supported)"
            />
            <p className="text-xs text-gray-500 mt-2">
              You can use HTML tags for formatting
            </p>
          </div>

          {/* Category & Read Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Read Time (minutes)
              </label>
              <input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                min="1"
                max="60"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Featured Image
            </label>
            
            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-300">
                  <img
                    src={imagePreview}
                    alt="Featured preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gray-100">
                          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            )}
            
            {/* Upload Options */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Option 1: Upload Image
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <div className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-colors cursor-pointer">
                      {uploadingImage ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin text-emerald-600" />
                          <span className="text-emerald-600 font-medium">Uploading...</span>
                        </>
                      ) : (
                        <>
                          <CloudUpload className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700">Choose image file</span>
                        </>
                      )}
                    </div>
                  </label>
                  <div className="text-xs text-gray-500">
                    <p>Max size: 5MB</p>
                    <p>Formats: JPG, PNG, GIF, WebP</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Option 2: Enter Image URL
                </label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      name="featuredImage"
                      value={formData.featuredImage}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-2">
              Tip: Use absolute URLs (starting with http:// or https://) for best results
            </p>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="finance, investment, banking"
            />
          </div>

          {/* SEO Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Meta Title (SEO)
              </label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Optional: Custom title for search engines"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Meta Description (SEO)
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Optional: Description for search engines"
                maxLength="160"
              />
              <p className="text-xs text-gray-500 mt-2">
                {formData.metaDescription.length}/160 characters
              </p>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="isPublished"
                checked={formData.isPublished}
                onChange={handleInputChange}
                className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="font-semibold text-gray-700">Publish immediately</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
                className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="font-semibold text-gray-700">Featured post</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || uploadingImage}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  {isEditing ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  {isEditing ? 'Update Post' : 'Create Post'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}