import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://emerald-capital-backend.onrender.com/api';

// Create regular axios instance for users
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create admin axios instance for admin routes
const adminApi = axios.create({
  baseURL: API_BASE_URL,
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
  (error) => {
    return Promise.reject(error);
  }
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
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors for regular users
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

// Response interceptor to handle errors for admin users
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

// Admin Auth API (uses direct calls without token for login)
export const adminAuthAPI = {
  login: (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials),
};

// Loan API
export const loanAPI = {
  createApplication: (formData) => {
    return api.post('/loans/applications', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getMyApplications: (params) => api.get('/loans/applications', { params }),
  getApplication: (id) => api.get(`/loans/applications/${id}`),
  updateApplication: (id, formData) => {
    return api.put(`/loans/applications/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  deleteApplication: (id) => api.delete(`/loans/applications/${id}`),
};

// Contact API
export const contactAPI = {
  submitMessage: (messageData) => api.post('/contact', messageData),
};

// Admin Contact API (uses admin token)
export const adminContactAPI = {
  getMessages: (params) => adminApi.get('/contact', { params }),
  getMessage: (id) => adminApi.get(`/contact/${id}`),
  updateMessageStatus: (id, statusData) => adminApi.put(`/contact/${id}/status`, statusData),
  deleteMessage: (id) => adminApi.delete(`/contact/${id}`),
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (email) => api.post('/newsletter/subscribe', { email }),
  unsubscribe: (email) => api.post('/newsletter/unsubscribe', { email }),
};

// Admin API
export const adminAPI = {
  getDashboardStats: () => adminApi.get('/admin/dashboard'),
  getUsers: (params) => adminApi.get('/admin/users', { params }),
  getUser: (id) => adminApi.get(`/admin/users/${id}`),
  updateUser: (id, userData) => adminApi.put(`/admin/users/${id}`, userData),
  deleteUser: (id) => adminApi.delete(`/admin/users/${id}`),
};

export default api;
export { adminApi };