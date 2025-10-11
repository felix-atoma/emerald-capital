import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://emerald-capital-backend.onrender.com';

console.log('🚀 API Configuration:', {
  API_BASE_URL,
  hasEnvVar: !!import.meta.env.VITE_API_BASE_URL
});

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
      console.log('🔑 Added user token to request:', config.url);
    }
    return config;
  },
  (error) => {
    console.error('❌ User API request error:', error);
    return Promise.reject(error);
  }
);

// Request interceptor to add ADMIN auth token
adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminAuthToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('🔑 Added admin token to request:', config.url);
    }
    return config;
  },
  (error) => {
    console.error('❌ Admin API request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptors
api.interceptors.response.use(
  (response) => {
    console.log('✅ User API response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ User API response error:', error.response?.status, error.config?.url);
    if (error.response?.status === 401) {
      console.log('🔐 User token expired, redirecting to login');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

adminApi.interceptors.response.use(
  (response) => {
    console.log('✅ Admin API response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ Admin API response error:', error.response?.status, error.config?.url);
    if (error.response?.status === 401) {
      console.log('🔐 Admin token expired, redirecting to admin login');
      localStorage.removeItem('adminAuthToken');
      localStorage.removeItem('adminUser');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => {
    console.log('👤 User login attempt:', credentials.username);
    return api.post('/auth/login', credentials);
  },
  register: (userData) => {
    console.log('👤 User registration attempt:', userData.email);
    return api.post('/auth/register', userData);
  },
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
  changePassword: (passwordData) => api.put('/auth/change-password', passwordData),
  healthCheck: () => api.get('/health'),
};

// Admin Auth API - UPDATED to match backend response structure
export const adminAuthAPI = {
  login: (credentials) => {
    console.log('👑 Admin login attempt:', {
      username: credentials.username,
      endpoint: `${API_BASE_URL}/api/admin/login`
    });
    return axios.post(`${API_BASE_URL}/api/admin/login`, credentials, {
      headers: { 'Content-Type': 'application/json' },
    });
  },
  getProfile: () => adminApi.get('/admin/profile'),
  changePassword: (passwordData) => adminApi.put('/admin/change-password', passwordData),
};

// Loan API
export const loanAPI = {
  createApplication: (formData) => {
    console.log('📄 Creating loan application');
    return api.post('/loans/applications', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  getMyApplications: (params) => api.get('/loans/applications', { params }),
  getApplication: (id) => api.get(`/loans/applications/${id}`),
  updateApplication: (id, formData) => {
    console.log('📄 Updating loan application:', id);
    return api.put(`/loans/applications/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  deleteApplication: (id) => {
    console.log('📄 Deleting loan application:', id);
    return api.delete(`/loans/applications/${id}`);
  },
};

// Contact API (Public)
export const contactAPI = {
  submitMessage: (messageData) => {
    console.log('📧 Submitting contact message from:', messageData.email);
    return api.post('/contact', messageData);
  },
};

// Admin Contact API - UPDATED to use correct endpoints
export const adminContactAPI = {
  getMessages: (params) => {
    console.log('📨 Fetching contact messages');
    return adminApi.get('/admin/contact', { params });
  },
  getMessage: (id) => adminApi.get(`/admin/contact/${id}`),
  updateMessageStatus: (id, statusData) => {
    console.log('📨 Updating message status:', id, statusData);
    return adminApi.put(`/admin/contact/${id}/status`, statusData);
  },
  deleteMessage: (id) => {
    console.log('📨 Deleting message:', id);
    return adminApi.delete(`/admin/contact/${id}`);
  },
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (data) => {
    console.log('📰 Newsletter subscription:', data.email);
    return api.post('/newsletter/subscribe', data);
  },
  unsubscribe: (data) => {
    console.log('📰 Newsletter unsubscription:', data.email);
    return api.post('/newsletter/unsubscribe', data);
  },
};

// Admin API
export const adminAPI = {
  getDashboardStats: () => {
    console.log('📊 Fetching dashboard stats');
    return adminApi.get('/admin/dashboard');
  },
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