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
    
    // Always return response.data for consistency
    return {
      ...response,
      data: response.data
    };
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
    
    // Return a consistent error structure
    return Promise.reject({
      success: false,
      message: error.response?.data?.message || error.message || "Network Error",
      status: error.response?.status,
      data: error.response?.data
    });
  }
);

adminApi.interceptors.response.use(
  (response) => {
    // Log successful admin response in development
    if (import.meta.env.DEV) {
      console.log(`👑 ${response.config.method?.toUpperCase()} ${response.config.url}: ${response.status}`);
    }
    
    return {
      ...response,
      data: response.data
    };
  },
  (error) => {
    console.error(`👑❌ ${error.config?.method?.toUpperCase()} ${error.config?.url}: ${error.response?.status || 'Network Error'}`);
    
    if (error.response?.status === 401) {
      localStorage.removeItem("adminAuthToken");
      localStorage.removeItem("adminUser");
      window.location.href = "/admin/login";
    }
    
    return Promise.reject({
      success: false,
      message: error.response?.data?.message || error.message || "Network Error",
      status: error.response?.status,
      data: error.response?.data
    });
  }
);

/* ===============================
   HEALTH CHECK
================================ */
export const healthAPI = {
  check: () => api.get("/api/health"),
  systemInfo: () => api.get("/api/system-info"),
};

/* ===============================
   AUTH API
================================ */
export const authAPI = {
  login: (data) => api.post("/api/auth/login", data),
  register: (data) => api.post("/api/auth/register", data),
  getProfile: () => api.get("/api/auth/profile"),
  updateProfile: (data) => api.put("/api/auth/profile", data),
  changePassword: (data) => api.put("/api/auth/change-password", data),
  forgotPassword: (data) => api.post("/api/auth/forgot-password", data),
  resetPassword: (data) => api.post("/api/auth/reset-password", data),
};

/* ===============================
   ADMIN AUTH API
================================ */
export const adminAuthAPI = {
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
export const loanAPI = {
  // User loan applications
  createApplication: (data) => api.post("/api/loans/applications", data, {
    headers: { "Content-Type": "multipart/form-data" },
  }),
  getMyApplications: (params = {}) => api.get("/api/loans/applications", { params }),
  getApplication: (id) => api.get(`/api/loans/applications/${id}`),
  updateApplication: (id, data) => api.put(`/api/loans/applications/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  }),
  deleteApplication: (id) => api.delete(`/api/loans/applications/${id}`),
  
  // Admin loan management
  getAllApplications: (params = {}) => adminApi.get("/api/admin/loans/applications", { params }),
  updateApplicationStatus: (id, data) => adminApi.put(`/api/admin/loans/applications/${id}/status`, data),
  getLoanStats: () => adminApi.get("/api/admin/loans/stats"),
};

/* ===============================
   CONTACT API
================================ */
export const contactAPI = {
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
export const newsletterAPI = {
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
export const accountAPI = {
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
   BLOG API - UPDATED WITH CORRECT RESPONSE HANDLING
================================ */
export const blogAPI = {
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
  
  // Admin blog management - FIXED: Use adminApi with correct endpoints
  createBlog: (data) => adminApi.post("/api/blogs", data),
  updateBlog: (id, data) => adminApi.put(`/api/blogs/${id}`, data),
  deleteBlog: (id) => adminApi.delete(`/api/blogs/${id}`),
  
  // Blog statistics
  getBlogStats: () => {
    // Try admin endpoint first, fallback to calculating from public data
    return adminApi.get("/api/blogs/stats/summary").catch(() => {
      return blogAPI.getBlogs({ limit: 100 }).then(response => {
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
        return { 
          data: { 
            success: true, 
            data: { stats } 
          } 
        };
      });
    });
  },
};

/* ===============================
   UPLOAD API
================================ */
export const uploadAPI = {
  // File uploads with FormData
  uploadImage: (formData, type = 'blog') => {
    const token = localStorage.getItem("adminAuthToken") || localStorage.getItem("token");
    return api.post(`/api/upload/image?type=${type}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });
  },
  
  uploadFile: (formData, type = 'general') => {
    const token = localStorage.getItem("adminAuthToken") || localStorage.getItem("token");
    return api.post(`/api/upload/file?type=${type}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });
  },
  
  // Get upload info
  getUploadInfo: () => api.get("/api/upload/info"),
};

/* ===============================
   ADMIN DASHBOARD API
================================ */
export const adminAPI = {
  // Dashboard statistics
  getDashboardStats: () => adminApi.get("/api/admin/dashboard"),
  
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
   EXPORTS
================================ */
export default api;
export { adminApi };