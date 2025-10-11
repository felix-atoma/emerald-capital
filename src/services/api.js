import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://emerald-capital-backend.onrender.com';

// Create regular axios instance for users
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create admin axios instance for admin routes
const adminApi = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add regular user auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Request interceptor to add ADMIN auth token
adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminAuthToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

adminApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminAuthToken');
      localStorage.removeItem('adminUser');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
  changePassword: (passwordData) => api.put('/auth/change-password', passwordData),
  healthCheck: () => api.get('/health'),
};

// Admin Auth API
export const adminAuthAPI = {
  login: (credentials) => {
    console.log('🔐 Admin login endpoint:', `${API_BASE_URL}/api/admin/login`);
    return axios.post(`${API_BASE_URL}/api/admin/login`, credentials, {
      headers: { 'Content-Type': 'application/json' },
    });
  },
  getProfile: () => adminApi.get('/admin/profile'),
  changePassword: (passwordData) => adminApi.put('/admin/change-password', passwordData),
};

// Loan API
export const loanAPI = {
  createApplication: (formData) =>
    api.post('/loans/applications', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  getMyApplications: (params) => api.get('/loans/applications', { params }),
  getApplication: (id) => api.get(`/loans/applications/${id}`),
  updateApplication: (id, formData) =>
    api.put(`/loans/applications/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  deleteApplication: (id) => api.delete(`/loans/applications/${id}`),
};

// Contact API (Public)
export const contactAPI = {
  submitMessage: (messageData) => api.post('/contact', messageData),
};

// ✅ Admin Contact API (fixed)
export const adminContactAPI = {
  getMessages: (params) => adminApi.get('/contact', { params }),
  getMessage: (id) => adminApi.get(`/contact/${id}`),
  updateMessageStatus: (id, statusData) => adminApi.put(`/contact/${id}/status`, statusData),
  deleteMessage: (id) => adminApi.delete(`/contact/${id}`),
};

// ✅ FIXED: Newsletter API - accept data object directly
export const newsletterAPI = {
  subscribe: (data) => api.post('/newsletter/subscribe', data),
  unsubscribe: (data) => api.post('/newsletter/unsubscribe', data),
};

// Admin API
export const adminAPI = {
  getDashboardStats: () => adminApi.get('/admin/dashboard'),
  getUsers: (params) => adminApi.get('/admin/users', { params }),
  getUser: (id) => adminApi.get(`/admin/users/${id}`),
  updateUser: (id, userData) => adminApi.put(`/admin/users/${id}`, userData),
  deleteUser: (id) => adminApi.delete(`/admin/users/${id}`),
  getAllLoanApplications: (params) => adminApi.get('/admin/loans/applications', { params }),
  getLoanApplication: (id) => adminApi.get(`/admin/loans/applications/${id}`),
  updateLoanApplication: (id, updateData) => adminApi.put(`/admin/loans/applications/${id}`, updateData),
  deleteLoanApplication: (id) => adminApi.delete(`/admin/loans/applications/${id}`),
};

export default api;
export { adminApi };