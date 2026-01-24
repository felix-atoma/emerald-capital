import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogAPI } from '../services/api';
import {
  Calendar, Clock, User, Eye, Heart, Bookmark, Share2,
  MessageCircle, ArrowLeft, Twitter, Facebook, Linkedin,
  Send, Loader, Tag, ChevronRight
} from 'lucide-react';

// Blog Detail Page Component
export function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [comments, setComments] = useState([]);

  // Fetch blog details
  useEffect(() => {
    const fetchBlogDetail = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await blogAPI.getBlog(slug);
        
        if (response.data.success) {
          const blogData = response.data.data;
          setBlog(blogData);
          setIsLiked(blogData.isLiked || false);
          setIsBookmarked(blogData.isBookmarked || false);
          setLikesCount(blogData.likes?.length || 0);
          setComments(blogData.comments || []);
        } else {
          throw new Error('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err.response?.data?.message || 'Failed to load blog. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetail();
    }
  }, [slug]);

  // Handle like
  const handleLike = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to like posts');
      return;
    }

    try {
      const response = await blogAPI.likeBlog(blog._id);
      setIsLiked(response.data.isLiked);
      setLikesCount(response.data.likesCount);
    } catch (error) {
      console.error('Error liking blog:', error);
      alert('Failed to like post. Please try again.');
    }
  };

  // Handle bookmark
  const handleBookmark = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to bookmark posts');
      return;
    }

    try {
      const response = await blogAPI.bookmarkBlog(blog._id);
      setIsBookmarked(response.data.isBookmarked);
    } catch (error) {
      console.error('Error bookmarking blog:', error);
      alert('Failed to bookmark post. Please try again.');
    }
  };

  // Handle comment submission
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to comment');
      return;
    }

    if (!commentText.trim()) {
      alert('Please enter a comment');
      return;
    }

    setIsSubmittingComment(true);
    
    try {
      const response = await blogAPI.addComment(blog._id, { text: commentText });
      
      if (response.data.success) {
        setComments(response.data.data.comments);
        setCommentText('');
        alert('Comment added successfully!');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to add comment. Please try again.');
    } finally {
      setIsSubmittingComment(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Calculate read time
  const calculateReadTime = (content) => {
    const words = content?.split(' ').length || 0;
    return Math.max(1, Math.ceil(words / 200));
  };

  // Share handlers
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || '';
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader className="w-12 h-12 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <p className="text-red-600 font-medium mb-4">{error || 'Blog not found'}</p>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold flex items-center gap-2">
              <Tag className="w-3 h-3" />
              {blog.category || 'Uncategorized'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blog.authorId?.name || 'Admin'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{calculateReadTime(blog.content)} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{blog.views} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="max-w-4xl mx-auto px-4 -mt-12 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={blog.featuredImage} 
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar - Actions */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-4">
              <button
                onClick={handleLike}
                className={`w-full flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                  isLiked 
                    ? 'bg-red-50 text-red-600' 
                    : 'bg-white hover:bg-gray-50 text-gray-600'
                } border border-gray-200`}
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm font-semibold">{likesCount}</span>
              </button>

              <button
                onClick={handleBookmark}
                className={`w-full flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                  isBookmarked 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'bg-white hover:bg-gray-50 text-gray-600'
                } border border-gray-200`}
              >
                <Bookmark className={`w-6 h-6 ${isBookmarked ? 'fill-current' : ''}`} />
                <span className="text-xs">Save</span>
              </button>

              <div className="border-t pt-4 space-y-2">
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full p-3 rounded-xl bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 border border-gray-200 transition-all"
                >
                  <Twitter className="w-5 h-5 mx-auto" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full p-3 rounded-xl bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-700 border border-gray-200 transition-all"
                >
                  <Facebook className="w-5 h-5 mx-auto" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-full p-3 rounded-xl bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-800 border border-gray-200 transition-all"
                >
                  <Linkedin className="w-5 h-5 mx-auto" />
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-10">
            {/* Excerpt */}
            {blog.excerpt && (
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mb-8">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mb-12 pb-8 border-b">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Comments Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleSubmitComment} className="mb-8">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    disabled={isSubmittingComment || !commentText.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmittingComment ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Posting...
                      </>
                    ) : (
                      <>
                        Post Comment
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <div
                    key={comment._id || index}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {comment.user?.name?.[0] || comment.name?.[0] || 'U'}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-gray-900">
                            {comment.user?.name || comment.name || 'Anonymous'}
                          </span>
                          <span className="text-sm text-gray-500">
                            {formatDate(comment.date || comment.createdAt)}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {comments.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;