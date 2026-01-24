// src/services/api.js
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
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminAuthToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/* ===============================
   RESPONSE INTERCEPTORS
================================ */
api.interceptors.response.use(
  (res) => {
    console.log(`✅ ${res.config.method?.toUpperCase()} ${res.config.url}: ${res.status}`);
    return res;
  },
  (err) => {
    console.error(`❌ ${err.config?.method?.toUpperCase()} ${err.config?.url}: ${err.response?.status}`);
    
    if (err.response?.status === 401 && !window.location.pathname.includes('/login')) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

adminApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("adminAuthToken");
      localStorage.removeItem("adminUser");
      window.location.href = "/admin/login";
    }
    return Promise.reject(err);
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
  getMyApplications: (params) => api.get("/api/loans/applications", { params }),
  getApplication: (id) => api.get(`/api/loans/applications/${id}`),
  updateApplication: (id, data) => api.put(`/api/loans/applications/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  }),
  deleteApplication: (id) => api.delete(`/api/loans/applications/${id}`),
  
  // Admin loan management
  getAllApplications: (params) => adminApi.get("/api/admin/loans/applications", { params }),
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
  getMessages: (params) => adminApi.get("/api/admin/contact", { params }),
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
  getTransactions: (params) => api.get("/api/account/transactions", { params }),
  getTransaction: (id) => api.get(`/api/account/transactions/${id}`),
  transferFunds: (data) => api.post("/api/account/transfer", data),
  updateStatus: (data) => api.patch("/api/account/status", data),
  
  // Admin account management
  getAllAccounts: (params) => adminApi.get("/api/admin/accounts", { params }),
  getAccountDetails: (id) => adminApi.get(`/api/admin/accounts/${id}`),
  updateAccount: (id, data) => adminApi.put(`/api/admin/accounts/${id}`, data),
  getAccountStats: () => adminApi.get("/api/admin/accounts/stats"),
};

/* ===============================
   BLOG API
================================ */
export const blogAPI = {
  // Public blog access
  getBlogs: (params = {}) => api.get("/api/blogs", { 
    params,
    timeout: 15000
  }),
  getBlog: (slug) => api.get(`/api/blogs/${slug}`),
  getPopularBlogs: (limit = 5) => api.get("/api/blogs/popular", { params: { limit } }),
  getFeaturedBlogs: (limit = 3) => api.get("/api/blogs/featured", { params: { limit } }),
  searchBlogs: (query) => api.get("/api/blogs/search", { params: { q: query } }),
  
  // User interactions (authenticated)
  likeBlog: (id) => api.put(`/api/blogs/${id}/like`),
  unlikeBlog: (id) => api.put(`/api/blogs/${id}/unlike`),
  bookmarkBlog: (id) => api.put(`/api/blogs/${id}/bookmark`),
  removeBookmark: (id) => api.put(`/api/blogs/${id}/remove-bookmark`),
  
  // Comments
  addComment: (id, data) => api.post(`/api/blogs/${id}/comments`, data),
  updateComment: (id, commentId, data) => api.put(`/api/blogs/${id}/comments/${commentId}`, data),
  deleteComment: (id, commentId) => api.delete(`/api/blogs/${id}/comments/${commentId}`),
  getComments: (id, params) => api.get(`/api/blogs/${id}/comments`, { params }),
  
  // User content
  getMyBookmarks: () => api.get("/api/blogs/bookmarks/my"),
  getMyLikes: () => api.get("/api/blogs/likes/my"),
  getMyComments: () => api.get("/api/blogs/comments/my"),
  
  // Admin blog management
  createBlog: (data) => adminApi.post("/api/admin/blogs", data),
  updateBlog: (id, data) => adminApi.put(`/api/admin/blogs/${id}`, data),
  deleteBlog: (id) => adminApi.delete(`/api/admin/blogs/${id}`),
  getBlogStats: () => adminApi.get("/api/admin/blogs/stats"),
  getAllComments: (params) => adminApi.get("/api/admin/blogs/comments", { params }),
  updateCommentStatus: (id, data) => adminApi.put(`/api/admin/blogs/comments/${id}/status`, data),
};

/* ===============================
   CATEGORY API
================================ */
export const categoryAPI = {
  // Public category access
  getCategories: () => api.get("/api/categories"),
  getCategory: (slug) => api.get(`/api/categories/${slug}`),
  getCategoryBlogs: (slug, params) => api.get(`/api/categories/${slug}/blogs`, { params }),
  
  // Admin category management
  createCategory: (data) => adminApi.post("/api/admin/categories", data),
  updateCategory: (id, data) => adminApi.put(`/api/admin/categories/${id}`, data),
  deleteCategory: (id) => adminApi.delete(`/api/admin/categories/${id}`),
  getCategoryStats: () => adminApi.get("/api/admin/categories/stats"),
};

/* ===============================
   UPLOAD API
================================ */
export const uploadAPI = {
  // File uploads
  uploadImage: (data) => {
    const token = localStorage.getItem("adminAuthToken") || localStorage.getItem("token");
    return api.post("/api/upload/image", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });
  },
  
  uploadFile: (data) => {
    const token = localStorage.getItem("adminAuthToken") || localStorage.getItem("token");
    return api.post("/api/upload/file", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });
  },
  
  // Admin upload management
  getAllUploads: (params) => adminApi.get("/api/admin/uploads", { params }),
  deleteUpload: (id) => adminApi.delete(`/api/admin/uploads/${id}`),
  getUploadStats: () => adminApi.get("/api/admin/uploads/stats"),
};

/* ===============================
   ADMIN DASHBOARD API
================================ */
export const adminAPI = {
  // Dashboard statistics
  getDashboardStats: () => adminApi.get("/api/admin/dashboard"),
  
  // User management
  getUsers: (params) => adminApi.get("/api/admin/users", { params }),
  getUser: (id) => adminApi.get(`/api/admin/users/${id}`),
  createUser: (data) => adminApi.post("/api/admin/users", data),
  updateUser: (id, data) => adminApi.put(`/api/admin/users/${id}`, data),
  deleteUser: (id) => adminApi.delete(`/api/admin/users/${id}`),
  updateUserRole: (id, data) => adminApi.put(`/api/admin/users/${id}/role`, data),
  
  // System management
  getSystemInfo: () => adminApi.get("/api/admin/system-info"),
  getActivityLogs: (params) => adminApi.get("/api/admin/activity-logs", { params }),
  clearCache: () => adminApi.delete("/api/admin/cache"),
  
  // Analytics
  getAnalytics: (period) => adminApi.get("/api/admin/analytics", { params: { period } }),
  getRevenueStats: () => adminApi.get("/api/admin/analytics/revenue"),
  getUserGrowth: () => adminApi.get("/api/admin/analytics/user-growth"),
};

/* ===============================
   EXPORTS
================================ */
export default api;
export { adminApi };