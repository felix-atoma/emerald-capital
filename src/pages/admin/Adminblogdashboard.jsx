import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogAPI, adminAPI, uploadAPI, apiUtils } from '../../services/api';
import {
  Plus, Edit, Trash2, Eye, Search, Filter, Calendar,
  User, Tag, FileText, Image as ImageIcon, Save,
  X, Upload, AlertCircle, CheckCircle, Loader,
  MoreVertical, LogOut, Settings, BarChart, RefreshCw,
  Link, Globe, CloudUpload, TrendingUp, Users, MessageSquare,
  Bookmark, Heart, Eye as EyeIcon, Sparkles, Zap,
  Cloud, Shield, Download, ExternalLink, Copy
} from 'lucide-react';

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
  const [uploadProgress, setUploadProgress] = useState(0);
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
  const [cloudinaryConfig, setCloudinaryConfig] = useState(null);
  const [selectedImageData, setSelectedImageData] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    featuredImage: '',
    imagePublicId: '',
    isPublished: true,
    isFeatured: false,
    tags: '',
    readTime: 5,
    metaTitle: '',
    metaDescription: '',
    author: '',
    authorBio: ''
  });

  // Categories
  const categories = [
    'Credit & Loans',
    'Personal Finance',
    'Business Banking',
    'Investment',
    'Digital Banking',
    'Agriculture',
    'Technology',
    'General'
  ];

  // Authors
  const authors = [
    'Admin User',
    'John Doe',
    'Jane Smith',
    'Financial Expert',
    'Guest Writer'
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
      checkCloudinaryConfig();
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

  // Check Cloudinary configuration
  // Update the checkCloudinaryConfig function
const checkCloudinaryConfig = async () => {
  try {
    // Get config from backend first
    const response = await uploadAPI.getConfig();
    
    if (response.data.success) {
      const config = response.data.data;
      
      // Check if config is from backend or fallback
      const fromBackend = !config.cloudinary?.from_env;
      
      const cloudinaryConfig = {
        // Backend config
        configured: config.cloudinary?.configured || apiUtils.isCloudinaryConfigured(),
        cloudName: config.cloudinary?.cloud_name || apiUtils.cloudinaryConfig.cloudName,
        uploadPreset: config.cloudinary?.upload_preset || apiUtils.cloudinaryConfig.uploadPreset,
        apiUrl: config.endpoints?.direct_upload || apiUtils.cloudinaryConfig.apiUrl,
        
        // Source info
        source: fromBackend ? 'backend' : 'env-fallback',
        backendAvailable: fromBackend,
        frontendConfigured: apiUtils.isCloudinaryConfigured(),
        
        // Limits
        maxFileSize: config.limits?.max_file_size || apiUtils.cloudinaryConfig.maxFileSize,
        allowedTypes: config.limits?.allowed_types || apiUtils.cloudinaryConfig.allowedTypes,
        
        // Status message
        message: fromBackend 
          ? 'Backend Cloudinary configured ✓' 
          : apiUtils.isCloudinaryConfigured()
            ? 'Frontend Cloudinary configured (direct uploads) ✓'
            : 'Cloudinary not configured'
      };
      
      setCloudinaryConfig(cloudinaryConfig);
      console.log('✅ Cloudinary Config:', cloudinaryConfig);
      
    } else {
      // Use frontend-only config
      const frontendConfig = {
        configured: apiUtils.isCloudinaryConfigured(),
        cloudName: apiUtils.cloudinaryConfig.cloudName,
        uploadPreset: apiUtils.cloudinaryConfig.uploadPreset,
        apiUrl: apiUtils.cloudinaryConfig.apiUrl,
        source: 'env-only',
        backendAvailable: false,
        frontendConfigured: apiUtils.isCloudinaryConfigured(),
        maxFileSize: apiUtils.cloudinaryConfig.maxFileSize,
        allowedTypes: apiUtils.cloudinaryConfig.allowedTypes,
        message: apiUtils.isCloudinaryConfigured()
          ? 'Frontend Cloudinary configured (backend unreachable)'
          : 'Cloudinary not configured in .env'
      };
      
      setCloudinaryConfig(frontendConfig);
      console.log('⚠️ Using frontend-only Cloudinary config:', frontendConfig);
    }
    
  } catch (err) {
    console.error('❌ Cloudinary config check failed:', err);
    
    // Fallback to checking environment variables only
    const envConfig = {
      configured: apiUtils.isCloudinaryConfigured(),
      cloudName: apiUtils.cloudinaryConfig.cloudName,
      uploadPreset: apiUtils.cloudinaryConfig.uploadPreset,
      source: 'env-fallback',
      backendAvailable: false,
      frontendConfigured: apiUtils.isCloudinaryConfigured(),
      message: apiUtils.isCloudinaryConfigured()
        ? 'Using frontend Cloudinary config'
        : 'Cloudinary not configured. Check your .env file.'
    };
    
    setCloudinaryConfig(envConfig);
  }
};

  // Upload image to Cloudinary
  const handleImageUpload = async (file) => {
    setUploadingImage(true);
    setUploadProgress(0);
    
    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 15, 85));
      }, 300);
      
      // Upload to Cloudinary
      const response = await uploadAPI.uploadImage(file, 'blog');
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      if (response.data.success) {
        const cloudinaryData = response.data.data;
        
        setSelectedImageData({
          url: cloudinaryData.url,
          publicId: cloudinaryData.public_id,
          thumbnailUrl: cloudinaryData.thumbnail_url || cloudinaryData.url,
          mediumUrl: cloudinaryData.medium_url || cloudinaryData.url,
          optimizedUrls: cloudinaryData.optimized_urls || {},
          width: cloudinaryData.width,
          height: cloudinaryData.height,
          bytes: cloudinaryData.bytes,
          format: cloudinaryData.format
        });
        
        setFormData(prev => ({
          ...prev,
          featuredImage: cloudinaryData.url,
          imagePublicId: cloudinaryData.public_id
        }));
        
        return cloudinaryData;
      } else {
        throw new Error(response.data.message || 'Upload failed');
      }
    } catch (err) {
      console.error('❌ Cloudinary upload error:', err);
      
      // Fallback placeholder
      const placeholderData = {
        url: 'https://placehold.co/1200x630/10b981/ffffff?text=Blog+Image&font=montserrat',
        publicId: null,
        thumbnailUrl: 'https://placehold.co/400x300/10b981/ffffff?text=Thumbnail',
        width: 1200,
        height: 630
      };
      
      setSelectedImageData(placeholderData);
      setFormData(prev => ({ 
        ...prev, 
        featuredImage: placeholderData.url,
        imagePublicId: '' 
      }));
      
      alert('⚠️ Upload failed. Using placeholder image.');
      return placeholderData;
    } finally {
      setUploadingImage(false);
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

  // Delete image from Cloudinary
  const deleteCloudinaryImage = async (publicId) => {
    if (!publicId || !publicId.includes('/')) return;
    
    try {
      await uploadAPI.deleteImage(publicId);
      console.log('✅ Image deleted from Cloudinary');
      return true;
    } catch (err) {
      console.error('❌ Failed to delete from Cloudinary:', err);
      return false;
    }
  };

  // Fetch blogs with Cloudinary optimization
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
        
        const processedBlogs = blogData.map(blog => {
          let featuredImage = blog.featuredImage || blog.image;
          
          // Check if it's a Cloudinary URL
          const isCloudinaryUrl = featuredImage && featuredImage.includes('cloudinary.com');
          
          // If it's not Cloudinary and we have a public ID, generate Cloudinary URL
          if (!isCloudinaryUrl && blog.imagePublicId) {
            featuredImage = apiUtils.getCloudinaryUrl(blog.imagePublicId, {
              width: 800,
              height: 450,
              crop: 'fill',
              quality: 'auto'
            });
          } else if (!isCloudinaryUrl && !blog.imagePublicId) {
            // Use a nice placeholder
            featuredImage = `https://placehold.co/800x450/0f766e/ffffff?text=${encodeURIComponent(blog.title || 'Blog')}&font=montserrat`;
          }
          
          return {
            ...blog,
            featuredImage,
            imagePublicId: blog.imagePublicId || apiUtils.extractPublicId(featuredImage)
          };
        });
        
        setBlogs(processedBlogs);
      }
    } catch (err) {
      console.error('❌ Fetch blogs error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to load blogs');
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
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'title') {
      const newSlug = generateSlug(value);
      setFormData({
        ...formData,
        [name]: value,
        slug: newSlug,
        metaTitle: value || formData.metaTitle,
        metaDescription: value ? `${value.substring(0, 150)}...` : formData.metaDescription
      });
    } else if (name === 'excerpt') {
      setFormData({
        ...formData,
        [name]: value,
        metaDescription: value || formData.metaDescription
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
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Please select a valid image file (JPG, PNG, GIF, WebP)');
      return;
    }
    
    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      alert('Image must be less than 10MB');
      return;
    }
    
    await handleImageUpload(file);
    e.target.value = '';
  };

  // Create new blog with Cloudinary image
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const blogData = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        featuredImage: formData.featuredImage,
        imagePublicId: formData.imagePublicId,
        isPublished: formData.isPublished,
        isFeatured: formData.isFeatured,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        readTime: parseInt(formData.readTime) || 5,
        metaTitle: formData.metaTitle || formData.title,
        metaDescription: formData.metaDescription || formData.excerpt?.substring(0, 150),
        author: formData.author || adminUser?.username || 'Admin',
        authorBio: formData.authorBio || ''
      };

      const response = await blogAPI.createBlog(blogData);
      
      if (response.data.success) {
        alert('✅ Blog post created successfully!');
        setShowCreateModal(false);
        resetForm();
        loadDashboardData();
      } else {
        throw new Error(response.data.message || 'Failed to create blog');
      }
    } catch (err) {
      console.error('❌ Create blog error:', err);
      alert(`❌ ${err.message || 'Failed to create blog. Please try again.'}`);
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
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        featuredImage: formData.featuredImage,
        imagePublicId: formData.imagePublicId,
        isPublished: formData.isPublished,
        isFeatured: formData.isFeatured,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        readTime: parseInt(formData.readTime) || 5,
        metaTitle: formData.metaTitle || formData.title,
        metaDescription: formData.metaDescription || formData.excerpt?.substring(0, 150),
        author: formData.author || currentBlog?.author || 'Admin',
        authorBio: formData.authorBio || currentBlog?.authorBio || ''
      };

      const response = await blogAPI.updateBlog(currentBlog._id, blogData);
      
      if (response.data.success) {
        alert('✅ Blog updated successfully!');
        setShowEditModal(false);
        setCurrentBlog(null);
        resetForm();
        loadDashboardData();
      } else {
        throw new Error(response.data.message || 'Failed to update blog');
      }
    } catch (err) {
      console.error('❌ Update blog error:', err);
      alert(`❌ ${err.message || 'Failed to update blog. Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  // Delete blog with Cloudinary image cleanup
  const handleDeleteBlog = async (blogId, blogTitle, imagePublicId) => {
    const confirmed = await new Promise(resolve => {
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4';
      modal.innerHTML = `
        <div class="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-2xl p-6 max-w-md w-full border border-red-500/30">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Delete Blog Post</h3>
              <p class="text-emerald-300 text-sm">This action cannot be undone</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="p-3 bg-emerald-900/30 rounded-lg">
              <p class="text-emerald-200 font-medium">"${blogTitle}"</p>
              ${imagePublicId ? '<p class="text-emerald-400 text-sm mt-1">⚠️ This will also delete the image from Cloudinary</p>' : ''}
            </div>
            
            <div class="flex gap-3 pt-4">
              <button id="cancel-btn" class="flex-1 px-4 py-3 border border-emerald-700 text-emerald-300 rounded-xl hover:bg-emerald-900/50 transition-all font-medium">
                Cancel
              </button>
              <button id="delete-btn" class="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all font-bold">
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      document.getElementById('cancel-btn').onclick = () => {
        document.body.removeChild(modal);
        resolve(false);
      };
      
      document.getElementById('delete-btn').onclick = () => {
        document.body.removeChild(modal);
        resolve(true);
      };
    });
    
    if (!confirmed) return;
    
    setLoading(true);
    try {
      // Delete blog first
      await blogAPI.deleteBlog(blogId);
      
      // Then delete image from Cloudinary if it exists
      if (imagePublicId) {
        await deleteCloudinaryImage(imagePublicId);
      }
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'fixed top-4 right-4 z-[100] animate-slide-in';
      successMsg.innerHTML = `
        <div class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p class="font-bold">Blog Deleted</p>
            <p class="text-sm opacity-90">"${blogTitle.substring(0, 30)}..." has been removed</p>
          </div>
        </div>
      `;
      document.body.appendChild(successMsg);
      setTimeout(() => successMsg.remove(), 3000);
      
      // Refresh data
      loadDashboardData();
    } catch (err) {
      console.error('❌ Delete blog error:', err);
      alert(`❌ ${err.message || 'Failed to delete blog. Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  // Open edit modal
  const handleEditClick = (blog) => {
    setCurrentBlog(blog);
    setSelectedImageData({
      url: blog.featuredImage,
      publicId: blog.imagePublicId
    });
    
    setFormData({
      title: blog.title || '',
      slug: blog.slug || generateSlug(blog.title || ''),
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      category: blog.category || '',
      featuredImage: blog.featuredImage || '',
      imagePublicId: blog.imagePublicId || '',
      isPublished: blog.isPublished !== undefined ? blog.isPublished : true,
      isFeatured: blog.isFeatured || false,
      tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : (blog.tags || ''),
      readTime: blog.readTime || 5,
      metaTitle: blog.metaTitle || blog.title || '',
      metaDescription: blog.metaDescription || blog.excerpt?.substring(0, 150) || '',
      author: blog.author || 'Admin',
      authorBio: blog.authorBio || ''
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
      imagePublicId: '',
      isPublished: true,
      isFeatured: false,
      tags: '',
      readTime: 5,
      metaTitle: '',
      metaDescription: '',
      author: adminUser?.username || 'Admin',
      authorBio: ''
    });
    setSelectedImageData(null);
  };

  // Handle image URL input
  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData(prev => ({ ...prev, featuredImage: url }));
    
    // Try to extract public ID from Cloudinary URL
    if (url.includes('cloudinary.com')) {
      const publicId = apiUtils.extractPublicId(url);
      if (publicId) {
        setFormData(prev => ({ ...prev, imagePublicId: publicId }));
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Copy Cloudinary URL to clipboard
  const copyCloudinaryUrl = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.createElement('div');
      btn.className = 'fixed top-4 right-4 z-[100] animate-slide-in';
      btn.innerHTML = `
        <div class="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <span class="text-sm font-medium">✓ URL Copied!</span>
        </div>
      `;
      document.body.appendChild(btn);
      setTimeout(() => btn.remove(), 2000);
    });
  };

  // Generate optimized image URL
  const getOptimizedImageUrl = (url, options = {}) => {
    if (!url) {
      return `https://placehold.co/${options.width || 800}x${options.height || 450}/0f766e/ffffff?text=Blog+Image`;
    }
    
    // If it's a Cloudinary URL, optimize it
    if (url.includes('cloudinary.com')) {
      const publicId = apiUtils.extractPublicId(url);
      if (publicId) {
        return apiUtils.getCloudinaryUrl(publicId, {
          width: options.width || 800,
          height: options.height || 450,
          crop: options.crop || 'fill',
          quality: 'auto',
          fetch_format: 'auto'
        });
      }
    }
    
    return url;
  };

  // Render loading state
  if (loading && !blogs.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-emerald-200/10 border-t-emerald-400 rounded-full animate-spin mx-auto"></div>
            <Cloud className="w-12 h-12 text-emerald-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent mb-2">
            Loading Dashboard
          </h2>
          <p className="text-emerald-400">
            {cloudinaryConfig?.configured ? 'Connected to Cloudinary ✓' : 'Connecting to Cloudinary...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-emerald-800/30 backdrop-blur-xl bg-emerald-950/70 sticky top-0 z-40 shadow-2xl shadow-emerald-950/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
                  Blog Dashboard
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-emerald-400 font-medium">Emerald Capital CMS</span>
                  {cloudinaryConfig?.configured && (
                    <span className="flex items-center gap-1 text-xs px-2 py-1 bg-emerald-500/20 border border-emerald-600/30 rounded-full">
                      <Cloud className="w-3 h-3" />
                      Cloudinary Active
                    </span>
                  )}
                </div>
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
                    <p className="text-emerald-400 text-xs">{adminUser.role || 'Administrator'}</p>
                  </div>
                </div>
              )}
              
              <button
                onClick={loadDashboardData}
                disabled={loading || fetchingStats}
                className="p-2.5 bg-emerald-900/30 border border-emerald-700/30 hover:bg-emerald-800/40 rounded-xl transition-all duration-300 disabled:opacity-50 backdrop-blur-sm group"
              >
                <RefreshCw className={`w-5 h-5 text-emerald-300 group-hover:text-emerald-200 transition-colors ${loading || fetchingStats ? 'animate-spin' : ''}`} />
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 bg-red-900/30 border border-red-700/30 text-red-200 rounded-xl hover:bg-red-800/40 transition-all duration-300 font-semibold backdrop-blur-sm group"
              >
                <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Cloudinary Status Banner */}
        {cloudinaryConfig && (
          <div className={`mb-6 p-4 rounded-2xl backdrop-blur-sm border ${cloudinaryConfig.configured ? 'bg-emerald-900/20 border-emerald-700/30' : 'bg-amber-900/20 border-amber-700/30'}`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${cloudinaryConfig.configured ? 'bg-emerald-500/20' : 'bg-amber-500/20'}`}>
                <Cloud className={`w-6 h-6 ${cloudinaryConfig.configured ? 'text-emerald-400' : 'text-amber-400'}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className={`font-bold ${cloudinaryConfig.configured ? 'text-emerald-200' : 'text-amber-200'}`}>
                    Cloudinary {cloudinaryConfig.configured ? 'Connected ✓' : 'Not Configured'}
                  </h3>
                  {cloudinaryConfig.cloudinary?.cloud_name && (
                    <span className="text-xs px-2 py-1 bg-emerald-900/50 rounded-full text-emerald-300">
                      {cloudinaryConfig.cloudinary.cloud_name}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${cloudinaryConfig.configured ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {cloudinaryConfig.configured 
                    ? 'Images are uploaded to Cloudinary CDN for optimal performance' 
                    : 'Configure Cloudinary in your .env file for image uploads'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border-2 border-red-700/50 rounded-2xl backdrop-blur-sm animate-slide-in">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-red-200 mb-1">Error Loading Data</h4>
                <p className="text-red-300 text-sm">{error}</p>
                <button
                  onClick={loadDashboardData}
                  className="mt-2 text-sm text-red-200 hover:text-white font-medium underline"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { 
              label: 'Total Posts', 
              value: stats.totalBlogs, 
              icon: FileText, 
              color: 'blue',
              subtext: `${stats.publishedBlogs} published`
            },
            { 
              label: 'Total Views', 
              value: stats.totalViews.toLocaleString(), 
              icon: EyeIcon, 
              color: 'emerald',
              subtext: `${stats.totalLikes} likes`
            },
            { 
              label: 'Comments', 
              value: stats.totalComments, 
              icon: MessageSquare, 
              color: 'purple',
              subtext: `${stats.totalBookmarks} bookmarks`
            },
            { 
              label: 'Drafts', 
              value: stats.draftBlogs, 
              icon: FileText, 
              color: 'amber',
              subtext: `${Math.round((stats.draftBlogs / stats.totalBlogs) * 100) || 0}%`
            }
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 backdrop-blur-xl p-5 rounded-2xl border border-emerald-700/20 hover:border-emerald-600/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-emerald-400 text-sm font-medium mb-1">{stat.label}</p>
                    <p className="text-3xl font-black bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-2.5 bg-${stat.color}-500/10 rounded-xl backdrop-blur-sm`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                </div>
                <p className="text-emerald-500 text-sm">{stat.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 backdrop-blur-xl rounded-2xl p-4 border border-emerald-700/20">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                  <input
                    type="text"
                    placeholder="Search posts by title or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500/70 backdrop-blur-sm transition-all text-sm"
                  />
                </div>
                
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2.5 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 backdrop-blur-sm transition-all text-sm min-w-[180px]"
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
                  setFormData(prev => ({ ...prev, author: adminUser?.username || 'Admin' }));
                  setShowCreateModal(true);
                }}
                className="relative group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden w-full md:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Plus className="w-4 h-4 relative z-10" />
                <span className="relative z-10 text-sm">New Post</span>
                <Sparkles className="w-3 h-3 relative z-10 group-hover:animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 backdrop-blur-xl rounded-2xl border border-emerald-700/20 overflow-hidden">
          <div className="px-5 py-4 border-b border-emerald-700/20 bg-emerald-950/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-emerald-100">Blog Posts</h2>
                <span className="px-2.5 py-0.5 bg-emerald-500/20 border border-emerald-600/30 rounded-full text-xs font-semibold text-emerald-300">
                  {blogs.length} posts
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-300">Live</span>
              </div>
            </div>
          </div>
          
          {blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-2xl"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-700/30">
                  <FileText className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              <p className="text-emerald-200 font-bold text-lg mb-2">No blog posts found</p>
              <p className="text-emerald-500 text-center mb-6 max-w-md">
                {searchTerm || filterCategory 
                  ? 'Try changing your search or filter criteria' 
                  : 'Start creating amazing content for your audience'}
              </p>
              <button
                onClick={() => {
                  resetForm();
                  setFormData(prev => ({ ...prev, author: adminUser?.username || 'Admin' }));
                  setShowCreateModal(true);
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 text-sm"
              >
                Create Your First Post
              </button>
            </div>
          ) : (
            <div className="p-4">
              <div className="space-y-4">
                {blogs.map((blog) => {
                  const optimizedImage = getOptimizedImageUrl(blog.featuredImage, { 
                    width: 400, 
                    height: 225, 
                    crop: 'fill' 
                  });
                  
                  return (
                    <div 
                      key={blog._id} 
                      className="group bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 backdrop-blur-sm rounded-xl border border-emerald-700/20 hover:border-emerald-600/40 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Image */}
                        <div className="relative w-full sm:w-48 h-48 sm:h-32 rounded-lg overflow-hidden flex-shrink-0 border border-emerald-700/30 group-hover:border-emerald-600/50 transition-colors">
                          <img
                            src={optimizedImage}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = `https://placehold.co/400x225/0f766e/ffffff?text=${encodeURIComponent(blog.title.substring(0, 20))}`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {blog.isFeatured && (
                            <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-sm rounded-md flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-white" />
                              <span className="text-xs font-bold text-white">Featured</span>
                            </div>
                          )}
                          
                          {blog.imagePublicId && (
                            <div className="absolute bottom-2 right-2">
                              <div className="px-1.5 py-0.5 bg-emerald-900/90 backdrop-blur-sm rounded flex items-center gap-1">
                                <Cloud className="w-3 h-3 text-emerald-300" />
                                <span className="text-xs font-bold text-emerald-200">CDN</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col h-full">
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-bold text-emerald-100 line-clamp-2 group-hover:text-emerald-50 transition-colors">
                                  {blog.title}
                                </h3>
                              </div>
                              
                              <p className="text-emerald-400 text-sm line-clamp-2 mb-3">
                                {blog.excerpt || 'No excerpt provided'}
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-600/30 rounded text-xs font-semibold text-emerald-300">
                                {blog.category || 'Uncategorized'}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs font-semibold border ${
                                blog.isPublished 
                                  ? 'bg-green-500/20 border-green-600/30 text-green-300' 
                                  : 'bg-amber-500/20 border-amber-600/30 text-amber-300'
                              }`}>
                                {blog.isPublished ? 'Published' : 'Draft'}
                              </span>
                              <span className="text-emerald-500 text-xs">•</span>
                              <span className="text-emerald-500 text-xs">{blog.readTime || 5} min read</span>
                              <span className="text-emerald-500 text-xs">•</span>
                              <span className="text-emerald-500 text-xs">{formatDate(blog.createdAt)}</span>
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
                              </div>
                              
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => window.open(`/blog/${blog.slug || blog._id}`, '_blank')}
                                  className="p-1.5 bg-emerald-900/50 border border-emerald-700/30 hover:bg-emerald-800/50 rounded-lg transition-all group/btn"
                                  title="View post"
                                >
                                  <Eye className="w-4 h-4 text-emerald-300 group-hover/btn:text-emerald-200" />
                                </button>
                                <button
                                  onClick={() => handleEditClick(blog)}
                                  className="p-1.5 bg-blue-900/50 border border-blue-700/30 hover:bg-blue-800/50 rounded-lg transition-all group/btn"
                                  title="Edit post"
                                >
                                  <Edit className="w-4 h-4 text-blue-300 group-hover/btn:text-blue-200" />
                                </button>
                                <button
                                  onClick={() => handleDeleteBlog(blog._id, blog.title, blog.imagePublicId)}
                                  className="p-1.5 bg-red-900/50 border border-red-700/30 hover:bg-red-800/50 rounded-lg transition-all group/btn"
                                  title="Delete post"
                                >
                                  <Trash2 className="w-4 h-4 text-red-300 group-hover/btn:text-red-200" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
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
          handleImageUrlChange={handleImageUrlChange}
          handleSubmit={showCreateModal ? handleCreateBlog : handleUpdateBlog}
          categories={categories}
          authors={authors}
          isEditing={showEditModal}
          loading={loading}
          uploadingImage={uploadingImage}
          uploadProgress={uploadProgress}
          selectedImageData={selectedImageData}
          cloudinaryConfig={cloudinaryConfig}
          copyCloudinaryUrl={copyCloudinaryUrl}
        />
      )}
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
  handleImageUrlChange,
  handleSubmit, 
  categories,
  authors,
  isEditing,
  loading,
  uploadingImage,
  uploadProgress,
  selectedImageData,
  cloudinaryConfig,
  copyCloudinaryUrl
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-emerald-700/30 shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-emerald-950/90 backdrop-blur-xl border-b border-emerald-700/30 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              {isEditing ? <Edit className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-white" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-100">
                {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              <p className="text-emerald-400 text-sm">All fields marked with * are required</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-emerald-800/50 rounded-lg transition-all group"
          >
            <X className="w-5 h-5 text-emerald-400 group-hover:text-emerald-200" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-emerald-300 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500/70 backdrop-blur-sm transition-all"
              placeholder="Enter a compelling title"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold text-emerald-300 mb-2">
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              required
              rows="3"
              className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500/70 backdrop-blur-sm transition-all"
              placeholder="Write a brief summary (150-300 characters)"
              maxLength="300"
            />
            <div className="flex justify-between mt-2">
              <p className="text-xs text-emerald-500">
                {formData.excerpt.length}/300 characters
              </p>
              <p className="text-xs text-emerald-500">
                Used for SEO meta description
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-emerald-300 mb-2">
              Content *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows="12"
              className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500/70 backdrop-blur-sm transition-all font-mono text-sm"
              placeholder="Write your blog content here (HTML supported)..."
            />
            <p className="text-xs text-emerald-500 mt-2">
              Supports HTML tags for formatting
            </p>
          </div>

          {/* Grid: Category, Read Time, Author */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-emerald-300 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 backdrop-blur-sm transition-all"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald-300 mb-2">
                Read Time (minutes)
              </label>
              <input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                min="1"
                max="60"
                className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 backdrop-blur-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald-300 mb-2">
                Author
              </label>
              <select
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 backdrop-blur-sm transition-all"
              >
                <option value="">Select author</option>
                {authors.map((author) => (
                  <option key={author} value={author}>{author}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Featured Image Section */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-emerald-300">
              Featured Image
            </label>
            
            {/* Image Preview */}
            {formData.featuredImage && (
              <div className="mb-4">
                <div className="relative w-full max-w-md h-48 rounded-lg overflow-hidden border border-emerald-700/30">
                  <img
                    src={formData.featuredImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/800x450/0f766e/ffffff?text=Image+Error';
                    }}
                  />
                  {formData.featuredImage.includes('cloudinary.com') && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-emerald-900/90 backdrop-blur-sm rounded flex items-center gap-1.5">
                      <Cloud className="w-3 h-3 text-emerald-300" />
                      <span className="text-xs font-bold text-emerald-200">Cloudinary</span>
                    </div>
                  )}
                </div>
                
                {/* Cloudinary Info */}
                {selectedImageData && selectedImageData.publicId && (
                  <div className="mt-3 p-3 bg-emerald-900/30 border border-emerald-700/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-300">Cloudinary Details</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyCloudinaryUrl(selectedImageData.publicId)}
                        className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        Copy ID
                      </button>
                    </div>
                    <p className="text-xs text-emerald-500 break-all">
                      {selectedImageData.publicId.substring(0, 60)}...
                    </p>
                    {selectedImageData.width && selectedImageData.height && (
                      <p className="text-xs text-emerald-500 mt-1">
                        {selectedImageData.width} × {selectedImageData.height} • {selectedImageData.format} • {(selectedImageData.bytes / 1024).toFixed(1)}KB
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {/* Upload Progress */}
            {uploadingImage && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-emerald-300 font-medium">Uploading to Cloudinary...</span>
                  <span className="text-emerald-400">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-emerald-900/50 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {/* Upload Options */}
            <div className="space-y-4">
              {/* Upload Button */}
              <div>
                <label className="cursor-pointer block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    className="hidden"
                    disabled={uploadingImage}
                  />
                  <div className={`flex items-center justify-center gap-3 px-4 py-3 border-2 border-dashed ${uploadingImage ? 'border-emerald-500/50 bg-emerald-900/30' : 'border-emerald-700/30 hover:border-emerald-500/50 hover:bg-emerald-900/20'} rounded-xl transition-all`}>
                    {uploadingImage ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin text-emerald-400" />
                        <span className="text-emerald-300 font-medium">Uploading...</span>
                      </>
                    ) : (
                      <>
                        <CloudUpload className="w-5 h-5 text-emerald-400" />
                        <div>
                          <span className="text-emerald-300 font-medium">Upload to Cloudinary</span>
                          <p className="text-emerald-500 text-xs mt-0.5">JPG, PNG, GIF, WebP • Max 10MB</p>
                        </div>
                      </>
                    )}
                  </div>
                </label>
                {!cloudinaryConfig?.configured && (
                  <p className="text-xs text-amber-500 mt-2">
                    ⚠️ Cloudinary not configured. Uploads may fail.
                  </p>
                )}
              </div>
              
              {/* OR Separator */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-emerald-700/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-emerald-950 text-emerald-500">OR</span>
                </div>
              </div>
              
              {/* URL Input */}
              <div>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                  <input
                    type="url"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleImageUrlChange}
                    className="w-full pl-10 pr-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500/70 backdrop-blur-sm transition-all"
                    placeholder="https://res.cloudinary.com/.../image.jpg"
                  />
                </div>
                <p className="text-xs text-emerald-500 mt-2">
                  Enter a Cloudinary URL for optimal performance
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-emerald-300 mb-2">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500/70 backdrop-blur-sm transition-all"
              placeholder="finance, investment, banking (comma separated)"
            />
          </div>

          {/* SEO Fields */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-emerald-300 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              SEO Optimization
            </h3>
            
            <div>
              <label className="block text-sm text-emerald-400 mb-2">
                Meta Title
              </label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500/70 backdrop-blur-sm transition-all"
                placeholder="Optimized title for search engines"
              />
            </div>
            
            <div>
              <label className="block text-sm text-emerald-400 mb-2">
                Meta Description
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-emerald-950/40 border border-emerald-700/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-100 placeholder-emerald-500/70 backdrop-blur-sm transition-all"
                placeholder="Brief description for search results"
                maxLength="160"
              />
              <p className="text-xs text-emerald-500 mt-2">
                {formData.metaDescription.length}/160 characters (optimal for SEO)
              </p>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-emerald-600 border-emerald-700/30 rounded bg-emerald-950/40 focus:ring-emerald-500/50"
                />
              </div>
              <div>
                <span className="font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Publish</span>
                <p className="text-xs text-emerald-500">Make this post publicly visible</p>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-emerald-600 border-emerald-700/30 rounded bg-emerald-950/40 focus:ring-emerald-500/50"
                />
              </div>
              <div>
                <span className="font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">Featured</span>
                <p className="text-xs text-emerald-500">Highlight this post on the homepage</p>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-emerald-700/30">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-emerald-700/30 text-emerald-300 rounded-xl font-semibold hover:bg-emerald-900/30 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || uploadingImage}
              className="relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin relative z-10" />
                  <span className="relative z-10 text-sm">{isEditing ? 'Updating...' : 'Creating...'}</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 text-sm">{isEditing ? 'Update Post' : 'Create Post'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}