// hooks/useBlogs.js
import { useState, useEffect, useCallback } from 'react';
import { blogAPI } from '../services/api';

export const useBlogs = (initialParams = {}) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    currentPage: 1,
  });

  const fetchBlogs = useCallback(async (params = {}) => {
    try {
      setLoading(true);
      const response = await blogAPI.getBlogs({
        page: 1,
        limit: 9,
        ...initialParams,
        ...params,
      });
      
      setBlogs(response.data.data);
      setPagination({
        total: response.data.total,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
      });
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  }, [initialParams]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return {
    blogs,
    loading,
    error,
    pagination,
    refetch: fetchBlogs,
    fetchBlogs,
  };
};

export const useBlog = (slug) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = useCallback(async () => {
    if (!slug) return;
    
    try {
      setLoading(true);
      const response = await blogAPI.getBlog(slug);
      setBlog(response.data.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch blog');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const likeBlog = async () => {
    if (!blog) return;
    
    try {
      const response = await blogAPI.likeBlog(blog._id);
      setBlog(response.data.data);
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to like blog');
    }
  };

  const bookmarkBlog = async () => {
    if (!blog) return;
    
    try {
      const response = await blogAPI.bookmarkBlog(blog._id);
      setBlog(response.data.data);
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to bookmark blog');
    }
  };

  const addComment = async (text) => {
    if (!blog) return;
    
    try {
      const response = await blogAPI.addComment(blog._id, { text });
      setBlog(response.data.data);
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to add comment');
    }
  };

  const deleteComment = async (commentId) => {
    if (!blog) return;
    
    try {
      const response = await blogAPI.deleteComment(blog._id, commentId);
      setBlog(response.data.data);
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to delete comment');
    }
  };

  return {
    blog,
    loading,
    error,
    refetch: fetchBlog,
    likeBlog,
    bookmarkBlog,
    addComment,
    deleteComment,
  };
};

export const usePopularBlogs = (limit = 5) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPopularBlogs = useCallback(async () => {
    try {
      setLoading(true);
      const response = await blogAPI.getPopularBlogs(limit);
      setBlogs(response.data.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch popular blogs');
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchPopularBlogs();
  }, [fetchPopularBlogs]);

  return { blogs, loading, error, refetch: fetchPopularBlogs };
};