import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://emerald-capital-backend.onrender.com/api';


// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
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

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
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

// Newsletter API
export const newsletterAPI = {
  subscribe: (email) => api.post('/newsletter/subscribe', { email }),
  unsubscribe: (email) => api.post('/newsletter/unsubscribe', { email }),
};

export default api;