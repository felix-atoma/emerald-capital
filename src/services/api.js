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
   AUTH API
================================ */
export const authAPI = {
  login: (data) => api.post("/auth/login", data),
  register: (data) => api.post("/auth/register", data),
  getProfile: () => api.get("/auth/profile"),
  updateProfile: (data) => api.put("/auth/profile", data),
  changePassword: (data) => api.put("/auth/change-password", data),
  healthCheck: () => api.get("/health"),
};

/* ===============================
   ADMIN AUTH
================================ */
export const adminAuthAPI = {
  login: (data) => adminApi.post("/admin/login", data),
  getProfile: () => adminApi.get("/admin/profile"),
  changePassword: (data) =>
    adminApi.put("/admin/change-password", data),
};

/* ===============================
   NEWSLETTER API - UPDATED WITH ALL ENDPOINTS
================================ */
export const newsletterAPI = {
  // Public routes - anyone can subscribe/unsubscribe
  subscribe: (data) => {
    console.log("📧 Subscribing to newsletter:", data.email);
    return api.post("/api/newsletter/subscribe", data);
  },
  
  unsubscribe: (data) => {
    console.log("📧 Unsubscribing from newsletter:", data.email);
    return api.post("/api/newsletter/unsubscribe", data);
  },
  
  // Protected routes - user can manage their subscription
  getMySubscription: () => {
    console.log("📧 Getting user subscription");
    return api.get("/api/newsletter/my-subscription");
  },
  
  updateSubscription: (data) => {
    console.log("📧 Updating subscription preferences");
    return api.put("/api/newsletter/update", data);
  },
  
  // Admin routes
  getAllSubscribers: (params = {}) => {
    console.log("📧 Getting all subscribers (admin)");
    return adminApi.get("/api/newsletter/subscribers", { params });
  },
  
  getSubscriber: (id) => {
    console.log(`📧 Getting subscriber ${id} (admin)`);
    return adminApi.get(`/api/newsletter/subscribers/${id}`);
  },
  
  updateSubscriber: (id, data) => {
    console.log(`📧 Updating subscriber ${id} (admin)`);
    return adminApi.put(`/api/newsletter/subscribers/${id}`, data);
  },
  
  deleteSubscriber: (id) => {
    console.log(`📧 Deleting subscriber ${id} (admin)`);
    return adminApi.delete(`/api/newsletter/subscribers/${id}`);
  },
  
  getNewsletterStats: () => {
    console.log("📧 Getting newsletter statistics (admin)");
    return adminApi.get("/api/newsletter/stats");
  },
  
  sendNewsletter: (data) => {
    console.log("📧 Sending newsletter to subscribers (admin)");
    return adminApi.post("/api/newsletter/send", data);
  }
};

/* ===============================
   LOANS
================================ */
export const loanAPI = {
  createApplication: (data) =>
    api.post("/api/loans/applications", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  getMyApplications: (params) =>
    api.get("/api/loans/applications", { params }),
  getApplication: (id) =>
    api.get(`/api/loans/applications/${id}`),
  updateApplication: (id, data) =>
    api.put(`/api/loans/applications/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  deleteApplication: (id) =>
    api.delete(`/api/loans/applications/${id}`),
};

/* ===============================
   CONTACT
================================ */
export const contactAPI = {
  submitMessage: (data) => api.post("/api/contact", data),
};

export const adminContactAPI = {
  getMessages: (params) =>
    adminApi.get("/api/contact", { params }),
  getMessage: (id) =>
    adminApi.get(`/api/contact/${id}`),
  updateMessageStatus: (id, data) =>
    adminApi.put(`/api/contact/${id}/status`, data),
  deleteMessage: (id) =>
    adminApi.delete(`/api/contact/${id}`),
};

/* ===============================
   ADMIN DASHBOARD
================================ */
export const adminAPI = {
  getDashboardStats: () =>
    adminApi.get("/api/admin/dashboard"),
  getUsers: (params) =>
    adminApi.get("/api/admin/users", { params }),
  getUser: (id) =>
    adminApi.get(`/api/admin/users/${id}`),
  updateUser: (id, data) =>
    adminApi.put(`/api/admin/users/${id}`, data),
  deleteUser: (id) =>
    adminApi.delete(`/api/admin/users/${id}`),
  getAllLoanApplications: (params) =>
    adminApi.get("/api/admin/loans/applications", { params }),
};

/* ===============================
   ACCOUNT
================================ */
export const accountAPI = {
  getBalance: () => api.get("/api/account/balance"),
  getDetails: () => api.get("/api/account/details"),
  getTransactions: (params) =>
    api.get("/api/account/transactions", { params }),
  getTransaction: (id) =>
    api.get(`/api/account/transactions/${id}`),
  transferFunds: (data) =>
    api.post("/api/account/transfer", data),
  updateStatus: (data) =>
    api.patch("/api/account/status", data),
};

/* ===============================
   BLOG API
================================ */
export const blogAPI = {
  getBlogs: (params = {}) => {
    console.log("🔍 Fetching blogs from:", `${API_BASE_URL}/api/blogs`);
    return api.get("/api/blogs", { 
      params,
      timeout: 15000
    });
  },
  
  getBlog: (slug) => api.get(`/api/blogs/${slug}`),
  
  getPopularBlogs: (limit = 5) => api.get("/api/blogs/popular", { params: { limit } }),
  
  likeBlog: (id) => api.put(`/api/blogs/${id}/like`),
  
  bookmarkBlog: (id) => api.put(`/api/blogs/${id}/bookmark`),
  
  addComment: (id, data) => api.post(`/api/blogs/${id}/comments`, data),
  
  deleteComment: (id, commentId) => api.delete(`/api/blogs/${id}/comments/${commentId}`),
  
  getMyBookmarks: () => api.get("/api/blogs/bookmarks/my"),
  
  getMyLikes: () => api.get("/api/blogs/likes/my"),
  
  createBlog: (data) => {
    const adminToken = localStorage.getItem("adminAuthToken");
    if (!adminToken) throw new Error("Admin token required");
    return api.post("/api/blogs", data, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
  },
  
  updateBlog: (id, data) => {
    const adminToken = localStorage.getItem("adminAuthToken");
    if (!adminToken) throw new Error("Admin token required");
    return api.put(`/api/blogs/${id}`, data, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
  },
  
  deleteBlog: (id) => {
    const adminToken = localStorage.getItem("adminAuthToken");
    if (!adminToken) throw new Error("Admin token required");
    return api.delete(`/api/blogs/${id}`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
  },
  
  getBlogStats: () => {
    const adminToken = localStorage.getItem("adminAuthToken");
    if (!adminToken) throw new Error("Admin token required");
    return api.get("/api/blogs/stats/summary", {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
  }
};

/* ===============================
   ADMIN BLOG API
================================ */
export const adminBlogAPI = {
  createBlog: (data) => adminApi.post("/api/blogs", data),
  updateBlog: (id, data) => adminApi.put(`/api/blogs/${id}`, data),
  deleteBlog: (id) => adminApi.delete(`/api/blogs/${id}`),
  getBlogStats: () => adminApi.get("/api/blogs/stats/summary"),
};

/* ===============================
   EXPORTS
================================ */
export default api;
export { adminApi };