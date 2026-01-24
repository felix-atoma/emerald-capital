import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogAPI } from '../../services/api';
import {
  Plus, Edit, Trash2, Eye, Search, Filter, Calendar,
  User, Tag, FileText, Image as ImageIcon, Save,
  X, Upload, AlertCircle, CheckCircle, Loader,
  MoreVertical, LogOut, Settings, BarChart
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
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    totalViews: 0,
    totalComments: 0
  });

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
    tags: ''
  });

  // Categories
  const categories = [
    'Credit & Loans',
    'Personal Finance',
    'Business Banking',
    'Investment',
    'Digital Banking',
    'Agriculture'
  ];

  // Check admin authentication
  useEffect(() => {
    const adminToken = localStorage.getItem('adminAuthToken');
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');
    
    if (!adminToken || (adminUser.role !== 'admin' && adminUser.role !== 'officer')) {
      navigate('/admin/blog/login');
    }
  }, [navigate]);

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await blogAPI.getBlogs({ 
        page: 1, 
        limit: 100,
        ...(searchTerm && { search: searchTerm }),
        ...(filterCategory && { category: filterCategory })
      });
      
      if (response.data.success) {
        setBlogs(response.data.data);
        calculateStats(response.data.data);
      }
    } catch (err) {
      setError('Failed to load blogs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Calculate statistics
  const calculateStats = (blogData) => {
    setStats({
      totalBlogs: blogData.length,
      publishedBlogs: blogData.filter(b => b.isPublished).length,
      totalViews: blogData.reduce((sum, b) => sum + (b.views || 0), 0),
      totalComments: blogData.reduce((sum, b) => sum + (b.comments?.length || 0), 0)
    });
  };

  useEffect(() => {
    fetchBlogs();
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

  // Create new blog
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };

      const response = await blogAPI.createBlog(blogData);
      
      if (response.data.success) {
        alert('Blog post created successfully!');
        setShowCreateModal(false);
        resetForm();
        fetchBlogs();
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to create blog post');
      console.error(err);
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
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };

      const response = await blogAPI.updateBlog(currentBlog._id, blogData);
      
      if (response.data.success) {
        alert('Blog post updated successfully!');
        setShowEditModal(false);
        setCurrentBlog(null);
        resetForm();
        fetchBlogs();
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update blog post');
      console.error(err);
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
      fetchBlogs();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete blog post');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Open edit modal
  const handleEditClick = (blog) => {
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      featuredImage: blog.featuredImage || '',
      isPublished: blog.isPublished,
      isFeatured: blog.isFeatured || false,
      tags: blog.tags?.join(', ') || ''
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
      tags: ''
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
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
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
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-black text-gray-900">{stats.totalBlogs}</span>
            </div>
            <p className="text-gray-600 font-medium">Total Posts</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-black text-gray-900">{stats.publishedBlogs}</span>
            </div>
            <p className="text-gray-600 font-medium">Published</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Eye className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-black text-gray-900">{stats.totalViews}</span>
            </div>
            <p className="text-gray-600 font-medium">Total Views</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <BarChart className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-black text-gray-900">{stats.totalComments}</span>
            </div>
            <p className="text-gray-600 font-medium">Comments</p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
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
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader className="w-8 h-8 text-emerald-600 animate-spin" />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          ) : blogs.length === 0 ? (
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
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {blog.featuredImage ? (
                            <img
                              src={blog.featuredImage}
                              alt={blog.title}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                              <ImageIcon className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-gray-900 line-clamp-1">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {blog.excerpt}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1 text-sm">
                          <span className="text-gray-600">
                            <Eye className="w-4 h-4 inline mr-1" />
                            {blog.views || 0} views
                          </span>
                          <span className="text-gray-600">
                            {(blog.comments?.length || 0)} comments
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          blog.isPublished
                            ? 'bg-green-50 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {blog.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(blog.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
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
                  ))}
                </tbody>
              </table>
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
          handleSubmit={showCreateModal ? handleCreateBlog : handleUpdateBlog}
          categories={categories}
          isEditing={showEditModal}
          loading={loading}
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
  handleSubmit, 
  categories,
  isEditing,
  loading
}) {
  if (!isOpen) return null;

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

          {/* Slug (auto-generated, read-only) */}
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
              placeholder="Brief summary of the blog post"
            />
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

          {/* Category & Featured Image */}
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
                Featured Image URL
              </label>
              <input
                type="url"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
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
              disabled={loading}
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