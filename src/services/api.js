import axios from "axios";

/* ===============================
   API CONFIG
================================ */
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://emerald-capital-backend.onrender.com";

console.log("🚀 API BASE URL:", API_BASE_URL);

/* ===============================
   AXIOS INSTANCES
================================ */
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: { 
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
});

const adminApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

/* ===============================
   REQUEST INTERCEPTORS
================================ */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request in development
    if (import.meta.env.DEV) {
      console.log(`📤 ${config.method?.toUpperCase()} ${config.url}`, config.data || '');
    }
    
    return config;
  },
  (error) => {
    console.error("❌ Request interceptor error:", error);
    return Promise.reject(error);
  }
);

adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminAuthToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log admin request in development
    if (import.meta.env.DEV) {
      console.log(`👑 ${config.method?.toUpperCase()} ${config.url}`, config.data || '');
    }
    
    return config;
  },
  (error) => {
    console.error("❌ Admin request interceptor error:", error);
    return Promise.reject(error);
  }
);

/* ===============================
   RESPONSE INTERCEPTORS
================================ */
api.interceptors.response.use(
  (response) => {
    // Log successful response in development
    if (import.meta.env.DEV) {
      console.log(`✅ ${response.config.method?.toUpperCase()} ${response.config.url}: ${response.status}`);
    }
    
    return response;
  },
  (error) => {
    console.error(`❌ ${error.config?.method?.toUpperCase()} ${error.config?.url}: ${error.response?.status || 'Network Error'}`);
    
    if (error.response) {
      // Server responded with error status
      console.error("❌ Error response:", error.response.data);
      
      // Handle specific error codes
      if (error.response.status === 401 && !window.location.pathname.includes('/login')) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
      
      if (error.response.status === 403) {
        console.error("❌ Access forbidden");
      }
      
      if (error.response.status === 404) {
        console.error("❌ Endpoint not found");
      }
      
      if (error.response.status === 500) {
        console.error("❌ Server error");
      }
    } else if (error.request) {
      // Request made but no response
      console.error("❌ No response received:", error.request);
    } else {
      // Something else happened
      console.error("❌ Request setup error:", error.message);
    }
    
    return Promise.reject(error);
  }
);

adminApi.interceptors.response.use(
  (response) => {
    // Log successful admin response in development
    if (import.meta.env.DEV) {
      console.log(`👑 ${response.config.method?.toUpperCase()} ${response.config.url}: ${response.status}`);
    }
    
    return response;
  },
  (error) => {
    console.error(`👑❌ ${error.config?.method?.toUpperCase()} ${error.config?.url}: ${error.response?.status || 'Network Error'}`);
    
    if (error.response?.status === 401) {
      localStorage.removeItem("adminAuthToken");
      localStorage.removeItem("adminUser");
      window.location.href = "/admin/login";
    }
    
    return Promise.reject(error);
  }
);

/* ===============================
   HEALTH CHECK
================================ */
const healthAPI = {
  check: () => api.get("/api/health"),
  systemInfo: () => api.get("/api/system-info"),
  corsDebug: () => api.get("/api/cors-debug"),
  uploadsCheck: () => api.get("/api/uploads-check"),
};

/* ===============================
   AUTH API
================================ */
const authAPI = {
  login: (data) => api.post("/api/auth/login", data),
  register: (data) => api.post("/api/auth/register", data),
  getProfile: () => api.get("/api/auth/profile"),
  updateProfile: (data) => api.put("/api/auth/profile", data),
  changePassword: (data) => api.put("/api/auth/change-password", data),
  forgotPassword: (data) => api.post("/api/auth/forgot-password", data),
  resetPassword: (data) => api.post("/api/auth/reset-password", data),
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};

/* ===============================
   ADMIN AUTH API
================================ */
const adminAuthAPI = {
  login: (data) => adminApi.post("/api/admin/login", data),
  getProfile: () => adminApi.get("/api/admin/profile"),
  changePassword: (data) => adminApi.put("/api/admin/change-password", data),
  logout: () => {
    localStorage.removeItem("adminAuthToken");
    localStorage.removeItem("adminUser");
  }
};

/* ===============================
   LOAN API
================================ */
const loanAPI = {
  // User loan applications
  createApplication: (data) => api.post("/api/loans/applications", data),
  getMyApplications: (params = {}) => api.get("/api/loans/applications", { params }),
  getApplication: (id) => api.get(`/api/loans/applications/${id}`),
  updateApplication: (id, data) => api.put(`/api/loans/applications/${id}`, data),
  deleteApplication: (id) => api.delete(`/api/loans/applications/${id}`),
  
  // Admin loan management
  getAllApplications: (params = {}) => adminApi.get("/api/admin/loans/applications", { params }),
  updateApplicationStatus: (id, data) => adminApi.put(`/api/admin/loans/applications/${id}/status`, data),
  getLoanStats: () => adminApi.get("/api/admin/loans/stats"),
};

/* ===============================
   CONTACT API
================================ */
const contactAPI = {
  // Public contact form
  submitMessage: (data) => api.post("/api/contact", data),
  
  // Admin contact management
  getMessages: (params = {}) => adminApi.get("/api/admin/contact", { params }),
  getMessage: (id) => adminApi.get(`/api/admin/contact/${id}`),
  updateMessageStatus: (id, data) => adminApi.put(`/api/admin/contact/${id}/status`, data),
  deleteMessage: (id) => adminApi.delete(`/api/admin/contact/${id}`),
  getContactStats: () => adminApi.get("/api/admin/contact/stats"),
};

/* ===============================
   NEWSLETTER API
================================ */
const newsletterAPI = {
  // Public subscription
  subscribe: (data) => api.post("/api/newsletter/subscribe", data),
  unsubscribe: (data) => api.post("/api/newsletter/unsubscribe", data),
  
  // User subscription management
  getMySubscription: () => api.get("/api/newsletter/my-subscription"),
  updateSubscription: (data) => api.put("/api/newsletter/update", data),
  
  // Admin newsletter management
  getAllSubscribers: (params = {}) => adminApi.get("/api/admin/newsletter/subscribers", { params }),
  getSubscriber: (id) => adminApi.get(`/api/admin/newsletter/subscribers/${id}`),
  updateSubscriber: (id, data) => adminApi.put(`/api/admin/newsletter/subscribers/${id}`, data),
  deleteSubscriber: (id) => adminApi.delete(`/api/admin/newsletter/subscribers/${id}`),
  getNewsletterStats: () => adminApi.get("/api/admin/newsletter/stats"),
  sendNewsletter: (data) => adminApi.post("/api/admin/newsletter/send", data),
};

/* ===============================
   ACCOUNT API
================================ */
const accountAPI = {
  // User account operations
  getBalance: () => api.get("/api/account/balance"),
  getDetails: () => api.get("/api/account/details"),
  getTransactions: (params = {}) => api.get("/api/account/transactions", { params }),
  getTransaction: (id) => api.get(`/api/account/transactions/${id}`),
  transferFunds: (data) => api.post("/api/account/transfer", data),
  updateStatus: (data) => api.patch("/api/account/status", data),
  
  // Admin account management
  getAllAccounts: (params = {}) => adminApi.get("/api/admin/accounts", { params }),
  getAccountDetails: (id) => adminApi.get(`/api/admin/accounts/${id}`),
  updateAccount: (id, data) => adminApi.put(`/api/admin/accounts/${id}`, data),
  getAccountStats: () => adminApi.get("/api/admin/accounts/stats"),
};

/* ===============================
   BLOG API - UPDATED FOR CLOUDINARY
================================ */
const blogAPI = {
  // Public blog access
  getBlogs: (params = {}) => api.get("/api/blogs", { 
    params,
    timeout: 15000
  }),
  
  getBlog: (slugOrId) => api.get(`/api/blogs/${slugOrId}`),
  
  getPopularBlogs: (limit = 5) => api.get("/api/blogs/popular", { params: { limit } }),
  
  // User interactions (require authentication)
  likeBlog: (id) => api.put(`/api/blogs/${id}/like`),
  bookmarkBlog: (id) => api.put(`/api/blogs/${id}/bookmark`),
  
  // Comments (require authentication)
  addComment: (id, data) => api.post(`/api/blogs/${id}/comments`, data),
  deleteComment: (id, commentId) => api.delete(`/api/blogs/${id}/comments/${commentId}`),
  
  // User content (require authentication)
  getMyBookmarks: () => api.get("/api/blogs/bookmarks/my"),
  getMyLikes: () => api.get("/api/blogs/likes/my"),
  
  // Admin blog management
  createBlog: (data) => adminApi.post("/api/blogs", data),
  updateBlog: (id, data) => adminApi.put(`/api/blogs/${id}`, data),
  deleteBlog: (id) => adminApi.delete(`/api/blogs/${id}`),
  
  // Blog statistics
  getBlogStats: () => adminApi.get("/api/admin/blogs/stats").catch(() => {
    return api.get("/api/blogs", { params: { limit: 100 } }).then(response => {
      const blogs = response.data.data?.blogs || response.data.blogs || [];
      const stats = {
        totalBlogs: blogs.length,
        publishedBlogs: blogs.filter(b => b.isPublished).length,
        draftBlogs: blogs.filter(b => !b.isPublished).length,
        totalViews: blogs.reduce((sum, b) => sum + (b.views || 0), 0),
        totalComments: blogs.reduce((sum, b) => sum + (b.comments?.length || 0), 0),
        blogsByCategory: blogs.reduce((acc, blog) => {
          const category = blog.category || 'Uncategorized';
          acc[category] = (acc[category] || 0) + 1;
          return acc;
        }, {})
      };
      return { data: { success: true, data: { stats } } };
    });
  }),
};

/* ===============================
   UPLOAD API - UPDATED FOR CLOUDINARY
================================ */
const uploadAPI = {
  // Get upload configuration
  getConfig: () => api.get("/api/upload/config"),
  
  // File uploads with FormData
  uploadImage: (file, type = 'blog') => {
    const formData = new FormData();
    formData.append('image', file);
    
    const token = localStorage.getItem("adminAuthToken") || localStorage.getItem("token");
    return api.post(`/api/upload/image?type=${type}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(token && { Authorization: `Bearer ${token}` })
      },
      timeout: 60000 // Longer timeout for uploads
    });
  },
  
  uploadMultipleImages: (files, type = 'blog') => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('images', file);
    });
    
    const token = localStorage.getItem("adminAuthToken") || localStorage.getItem("token");
    return api.post(`/api/upload/images?type=${type}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(token && { Authorization: `Bearer ${token}` })
      },
      timeout: 60000
    });
  },
  
  // Delete uploaded file
  deleteImage: (publicId) => {
    const token = localStorage.getItem("adminAuthToken") || localStorage.getItem("token");
    return api.delete(`/api/upload/${publicId}`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });
  },
  
  // Test helper for creating blogs with images
  createBlogWithImage: async (blogData, imageFile) => {
    try {
      // First upload image
      const uploadResponse = await uploadAPI.uploadImage(imageFile, 'blog');
      
      if (uploadResponse.data.success) {
        // Create blog with Cloudinary URL
        const blogWithImage = {
          ...blogData,
          image: uploadResponse.data.data.url,
          imagePublicId: uploadResponse.data.data.public_id
        };
        
        // Create blog post
        return await blogAPI.createBlog(blogWithImage);
      }
    } catch (error) {
      throw error;
    }
  }
};

/* ===============================
   CATEGORY API
================================ */
const categoryAPI = {
  // Public category access
  getCategories: () => api.get("/api/categories"),
  getCategory: (id) => api.get(`/api/categories/${id}`),
  
  // Admin category management
  createCategory: (data) => adminApi.post("/api/categories", data),
  updateCategory: (id, data) => adminApi.put(`/api/categories/${id}`, data),
  deleteCategory: (id) => adminApi.delete(`/api/categories/${id}`),
};

/* ===============================
   ADMIN DASHBOARD API
================================ */
const adminAPI = {
  // Dashboard statistics
  getDashboardStats: () => adminApi.get("/api/admin/dashboard", { timeout: 15000 }),
  
  // User management
  getUsers: (params = {}) => adminApi.get("/api/admin/users", { params }),
  getUser: (id) => adminApi.get(`/api/admin/users/${id}`),
  createUser: (data) => adminApi.post("/api/admin/users", data),
  updateUser: (id, data) => adminApi.put(`/api/admin/users/${id}`, data),
  deleteUser: (id) => adminApi.delete(`/api/admin/users/${id}`),
  updateUserRole: (id, data) => adminApi.put(`/api/admin/users/${id}/role`, data),
  
  // System management
  getSystemInfo: () => adminApi.get("/api/admin/system-info"),
  getActivityLogs: (params = {}) => adminApi.get("/api/admin/activity-logs", { params }),
  clearCache: () => adminApi.delete("/api/admin/cache"),
};

/* ===============================
   UTILITY FUNCTIONS
================================ */
const apiUtils = {
  // Handle Cloudinary URL generation
  getCloudinaryUrl: (publicId, options = {}) => {
    if (!publicId) return null;
    
    const { width, height, crop = 'fill', quality = 'auto' } = options;
    let url = `https://res.cloudinary.com/dbjjbxazd/image/upload`;
    
    if (width || height || crop !== 'fill' || quality !== 'auto') {
      const transformations = [];
      if (width) transformations.push(`w_${width}`);
      if (height) transformations.push(`h_${height}`);
      if (crop) transformations.push(`c_${crop}`);
      if (quality) transformations.push(`q_${quality}`);
      
      url += `/${transformations.join(',')}`;
    }
    
    url += `/${publicId}`;
    return url;
  },
  
  // Extract public ID from Cloudinary URL
  extractPublicId: (cloudinaryUrl) => {
    if (!cloudinaryUrl || !cloudinaryUrl.includes('cloudinary.com')) return null;
    
    try {
      const url = new URL(cloudinaryUrl);
      const pathParts = url.pathname.split('/');
      const uploadIndex = pathParts.indexOf('upload');
      
      if (uploadIndex !== -1) {
        return pathParts.slice(uploadIndex + 2).join('/').replace(/\.[^/.]+$/, '');
      }
    } catch (error) {
      console.error('Error extracting public ID:', error);
    }
    
    return null;
  },
  
  // Create FormData from object
  createFormData: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        data[key].forEach(item => {
          formData.append(key, item);
        });
      } else {
        formData.append(key, data[key]);
      }
    });
    return formData;
  }
};

/* ===============================
   EXPORTS
================================ */
export default api;
export {
  adminApi,
  apiUtils,
  healthAPI,
  authAPI,
  adminAuthAPI,
  loanAPI,
  contactAPI,
  newsletterAPI,
  accountAPI,
  blogAPI,
  uploadAPI,
  categoryAPI,
  adminAPI
};