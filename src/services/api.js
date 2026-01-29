import axios from "axios";

/* ===============================
   API CONFIG
================================ */
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://emerald-capital-backend.onrender.com";

console.log("🚀 API BASE URL:", API_BASE_URL);

// Cloudinary configuration from environment variables
const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dbjjbxazd",
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || "314746397211829",
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "emerald_capital",
  apiUrl: `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dbjjbxazd'}/image/upload`,
  isConfigured: !!(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME && 
                   import.meta.env.VITE_CLOUDINARY_API_KEY && 
                   import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET),
  blogFolder: import.meta.env.VITE_CLOUDINARY_BLOG_FOLDER || "emerald-capital/blog-images",
  maxFileSize: parseInt(import.meta.env.VITE_MAX_FILE_SIZE) || 10485760, // 10MB
  allowedTypes: (import.meta.env.VITE_ALLOWED_FILE_TYPES || "image/jpeg,image/jpg,image/png,image/gif,image/webp").split(",")
};

console.log("☁️ Cloudinary Config:", {
  configured: CLOUDINARY_CONFIG.isConfigured,
  cloudName: CLOUDINARY_CONFIG.cloudName,
  hasUploadPreset: !!CLOUDINARY_CONFIG.uploadPreset,
  maxFileSize: `${CLOUDINARY_CONFIG.maxFileSize / 1024 / 1024}MB`
});

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

// Direct Cloudinary upload instance (bypasses backend)
const cloudinaryApi = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1",
  timeout: 60000, // Longer timeout for uploads
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
  cloudinaryConfig: () => api.get("/api/upload/config").catch(() => ({
    data: {
      success: true,
      data: {
        cloudinary: {
          configured: CLOUDINARY_CONFIG.isConfigured,
          cloud_name: CLOUDINARY_CONFIG.cloudName,
          upload_preset: CLOUDINARY_CONFIG.uploadPreset,
          from_env: true
        },
        endpoints: {
          direct_upload: CLOUDINARY_CONFIG.apiUrl
        },
        limits: {
          max_file_size: CLOUDINARY_CONFIG.maxFileSize,
          allowed_types: CLOUDINARY_CONFIG.allowedTypes
        }
      }
    }
  })),
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
   UPLOAD API - ENHANCED WITH DIRECT CLOUDINARY UPLOAD
================================ */
const uploadAPI = {
  // Get upload configuration
  getConfig: () => healthAPI.cloudinaryConfig(),
  
  // Direct Cloudinary upload (client-side)
  uploadDirectToCloudinary: async (file, type = 'blog', progressCallback = null) => {
    if (!CLOUDINARY_CONFIG.isConfigured) {
      throw new Error("Cloudinary not configured. Check your .env file.");
    }
    
    // Validate file
    if (!CLOUDINARY_CONFIG.allowedTypes.includes(file.type) && 
        !CLOUDINARY_CONFIG.allowedTypes.some(type => file.type.includes(type.replace('image/', '')))) {
      throw new Error(`File type not allowed. Allowed types: ${CLOUDINARY_CONFIG.allowedTypes.join(', ')}`);
    }
    
    if (file.size > CLOUDINARY_CONFIG.maxFileSize) {
      throw new Error(`File too large. Maximum size: ${CLOUDINARY_CONFIG.maxFileSize / 1024 / 1024}MB`);
    }
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
    formData.append('cloud_name', CLOUDINARY_CONFIG.cloudName);
    formData.append('folder', `${CLOUDINARY_CONFIG.blogFolder}/${type}`);
    formData.append('tags', `emerald-capital,${type},blog`);
    
    // Add optimization parameters
    formData.append('transformation', 'c_fill,w_1200,h_630,q_auto:good,f_auto');
    
    try {
      console.log(`📤 Uploading directly to Cloudinary: ${file.name}`);
      
      const response = await cloudinaryApi.post(
        `/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
        formData,
        {
          onUploadProgress: progressCallback ? (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            progressCallback(percent);
          } : undefined,
        }
      );
      
      console.log('✅ Direct Cloudinary upload successful:', response.data);
      
      // Enhanced response data
      return {
        data: {
          success: true,
          message: 'Image uploaded successfully to Cloudinary',
          data: {
            public_id: response.data.public_id,
            url: response.data.secure_url,
            thumbnail_url: response.data.secure_url.replace('/upload/', '/upload/c_fill,w_400,h_225,q_auto/'),
            medium_url: response.data.secure_url.replace('/upload/', '/upload/c_fill,w_800,h_450,q_auto/'),
            large_url: response.data.secure_url.replace('/upload/', '/upload/c_fill,w_1200,h_630,q_auto/'),
            width: response.data.width,
            height: response.data.height,
            bytes: response.data.bytes,
            format: response.data.format,
            created_at: response.data.created_at,
            resource_type: response.data.resource_type,
            tags: response.data.tags || [],
            signature: response.data.signature,
            version: response.data.version,
            etag: response.data.etag,
            placeholder: response.data.placeholder,
            original_filename: response.data.original_filename,
            api_response: response.data
          }
        }
      };
      
    } catch (error) {
      console.error('❌ Direct Cloudinary upload failed:', error);
      throw error;
    }
  },
  
  // Backend upload (fallback)
  uploadImage: async (file, type = 'blog', progressCallback = null) => {
    try {
      // Try direct Cloudinary upload first
      console.log('🔄 Trying direct Cloudinary upload...');
      return await uploadAPI.uploadDirectToCloudinary(file, type, progressCallback);
    } catch (directError) {
      console.log('🔄 Direct upload failed, trying backend upload...', directError.message);
      
      // Fallback to backend upload
      const formData = new FormData();
      formData.append('image', file);
      
      const token = localStorage.getItem("adminAuthToken") || localStorage.getItem("token");
      return api.post(`/api/upload/image?type=${type}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token && { Authorization: `Bearer ${token}` })
        },
        timeout: 60000,
        onUploadProgress: progressCallback ? (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          progressCallback(percent);
        } : undefined,
      });
    }
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
  
  // Delete directly from Cloudinary (requires signed request)
  deleteFromCloudinary: async (publicId) => {
    if (!publicId || !CLOUDINARY_CONFIG.isConfigured) {
      throw new Error("Cannot delete: Invalid public ID or Cloudinary not configured");
    }
    
    // Note: Direct deletion requires backend signing for security
    console.warn('⚠️ Direct Cloudinary deletion requires backend signing.');
    console.warn('   Using backend delete endpoint instead.');
    
    return uploadAPI.deleteImage(publicId);
  },
  
  // Helper to create blog with image
  createBlogWithImage: async (blogData, imageFile, progressCallback = null) => {
    try {
      // Upload image first
      console.log('📤 Uploading image...');
      const uploadResponse = await uploadAPI.uploadImage(imageFile, 'blog', progressCallback);
      
      if (uploadResponse.data.success) {
        console.log('✅ Image uploaded, creating blog post...');
        
        // Create blog with Cloudinary URL
        const blogWithImage = {
          ...blogData,
          featuredImage: uploadResponse.data.data.url,
          imagePublicId: uploadResponse.data.data.public_id,
          imageData: {
            width: uploadResponse.data.data.width,
            height: uploadResponse.data.data.height,
            format: uploadResponse.data.data.format,
            size: uploadResponse.data.data.bytes
          }
        };
        
        // Create blog post
        return await blogAPI.createBlog(blogWithImage);
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error('❌ createBlogWithImage failed:', error);
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
   UTILITY FUNCTIONS - ENHANCED
================================ */
const apiUtils = {
  // Cloudinary configuration
  cloudinaryConfig: CLOUDINARY_CONFIG,
  
  // Check if Cloudinary is configured
  isCloudinaryConfigured: () => CLOUDINARY_CONFIG.isConfigured,
  
  // Handle Cloudinary URL generation with transformations
  getCloudinaryUrl: (publicId, options = {}) => {
    if (!publicId) {
      // Return placeholder if no public ID
      const { width = 800, height = 450 } = options;
      return `https://placehold.co/${width}x${height}/0f766e/ffffff?text=Blog+Image`;
    }
    
    const cloudName = CLOUDINARY_CONFIG.cloudName;
    let url = `https://res.cloudinary.com/${cloudName}/image/upload`;
    
    const { 
      width, 
      height, 
      crop = 'fill', 
      quality = 'auto:good', 
      format = 'auto',
      gravity = 'auto',
      effect = null,
      radius = null,
      border = null,
      overlay = null,
      opacity = null
    } = options;
    
    // Build transformations array
    const transformations = [];
    
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (crop) transformations.push(`c_${crop}`);
    if (gravity && gravity !== 'auto') transformations.push(`g_${gravity}`);
    if (quality) transformations.push(`q_${quality}`);
    if (format && format !== 'auto') transformations.push(`f_${format}`);
    if (effect) transformations.push(`e_${effect}`);
    if (radius) transformations.push(`r_${radius}`);
    if (border) transformations.push(`bo_${border}`);
    if (overlay) transformations.push(`l_${overlay}`);
    if (opacity) transformations.push(`o_${opacity}`);
    
    // Add transformations if any
    if (transformations.length > 0) {
      url += `/${transformations.join(',')}`;
    }
    
    url += `/${publicId}`;
    
    // Add format extension if specified
    if (format && format !== 'auto') {
      url += `.${format}`;
    }
    
    return url;
  },
  
  // Extract public ID from Cloudinary URL (improved)
  extractPublicId: (cloudinaryUrl) => {
    if (!cloudinaryUrl || typeof cloudinaryUrl !== 'string') return null;
    
    // Check if it's a Cloudinary URL
    if (!cloudinaryUrl.includes('cloudinary.com')) return null;
    
    try {
      // Remove protocol and domain
      const urlWithoutProtocol = cloudinaryUrl.replace(/^https?:\/\//, '');
      
      // Split by slashes
      const parts = urlWithoutProtocol.split('/');
      
      // Find 'upload' index
      const uploadIndex = parts.indexOf('upload');
      if (uploadIndex === -1) return null;
      
      // Get everything after upload and version (v123456789/)
      let publicIdParts = parts.slice(uploadIndex + 2);
      
      // Remove any transformation parameters (t_xxx,w_xxx/, etc.)
      if (publicIdParts.length > 0 && publicIdParts[0].includes(',')) {
        publicIdParts = publicIdParts.slice(1);
      }
      
      // Join and remove file extension
      let publicId = publicIdParts.join('/');
      
      // Remove file extension
      publicId = publicId.replace(/\.[^/.]+$/, '');
      
      // Remove any version prefix that might still be there
      publicId = publicId.replace(/^v\d+\//, '');
      
      return publicId || null;
    } catch (error) {
      console.error('❌ Error extracting public ID:', error);
      return null;
    }
  },
  
  // Create thumbnail URL
  createThumbnailUrl: (url, width = 400, height = 225) => {
    const publicId = apiUtils.extractPublicId(url);
    
    if (publicId) {
      return apiUtils.getCloudinaryUrl(publicId, {
        width,
        height,
        crop: 'fill',
        quality: 'auto:good',
        gravity: 'auto'
      });
    }
    
    // Return original URL if not Cloudinary
    return url;
  },
  
  // Create optimized URL for display
  createOptimizedUrl: (url, size = 'medium') => {
    const sizes = {
      thumbnail: { width: 400, height: 225 },
      medium: { width: 800, height: 450 },
      large: { width: 1200, height: 630 },
      full: { width: 1920, height: 1080 }
    };
    
    const sizeConfig = sizes[size] || sizes.medium;
    return apiUtils.createThumbnailUrl(url, sizeConfig.width, sizeConfig.height);
  },
  
  // Validate file before upload
  validateFile: (file) => {
    const errors = [];
    
    // Check file type
    if (!CLOUDINARY_CONFIG.allowedTypes.some(type => 
      file.type === type || file.name.toLowerCase().endsWith(type.replace('image/', '.'))
    )) {
      errors.push(`File type not allowed. Allowed: ${CLOUDINARY_CONFIG.allowedTypes.join(', ')}`);
    }
    
    // Check file size
    if (file.size > CLOUDINARY_CONFIG.maxFileSize) {
      errors.push(`File too large. Max: ${CLOUDINARY_CONFIG.maxFileSize / 1024 / 1024}MB`);
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
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
  },
  
  // Generate random filename with timestamp
  generateFilename: (originalName, prefix = 'blog') => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    const extension = originalName.split('.').pop();
    return `${prefix}_${timestamp}_${random}.${extension}`;
  }
};

/* ===============================
   ENVIRONMENT CHECK
================================ */
console.log("🌍 Environment Check:");
console.log("   API URL:", API_BASE_URL);
console.log("   Cloudinary Configured:", CLOUDINARY_CONFIG.isConfigured);
console.log("   Cloud Name:", CLOUDINARY_CONFIG.cloudName);
console.log("   Upload Preset:", CLOUDINARY_CONFIG.uploadPreset ? "Set" : "Not Set");
console.log("   Max File Size:", `${CLOUDINARY_CONFIG.maxFileSize / 1024 / 1024}MB`);

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
  adminAPI,
  CLOUDINARY_CONFIG
};