import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminAuthAPI, healthAPI } from '../../services/api';
import {
  Lock, Eye, EyeOff, LogIn, Shield,
  Loader, AlertCircle, FileText, Server, Check, X, User
} from 'lucide-react';

// Get the API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://emerald-capital-backend.onrender.com";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState({ online: false, loading: true });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  // Use username instead of email (based on backend requirements)
  const [formData, setFormData] = useState({
    username: 'adminuser', // Use username from seed file
    password: 'admin123'
  });

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminAuthToken');
    if (token) {
      navigate('/admin/dashboard');
    }
    checkBackendStatus();
  }, [navigate]);

  const checkBackendStatus = async () => {
    try {
      const response = await healthAPI.check();
      setBackendStatus({ 
        online: true, 
        loading: false,
        data: response.data 
      });
    } catch (error) {
      setBackendStatus({ 
        online: false, 
        loading: false,
        error: error.message 
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      console.log('🔐 Sending login data to:', `${API_BASE_URL}/api/admin/login`);
      console.log('📤 Request payload:', { username: formData.username, password: '***' });
      
      const response = await adminAuthAPI.login(formData);
      
      console.log('✅ Login response:', response.data);
      
      if (response.data.success) {
        // Store tokens
        localStorage.setItem('adminAuthToken', response.data.token);
        localStorage.setItem('adminUser', JSON.stringify(response.data.user));
        
        // Show success message
        setSuccess(true);
        console.log('✅ Login successful! Redirecting to dashboard...');
        
        // Wait a moment to show success message, then redirect
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1500);
        
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      console.error('❌ Full login error:', err);
      
      if (err.response) {
        console.error('❌ Response error:', err.response.status, err.response.data);
        
        if (err.response.status === 400) {
          setError('Invalid request: ' + (err.response.data?.message || 'Check your credentials'));
        } else if (err.response.status === 404) {
          setError('Admin login endpoint not found. Please contact support.');
        } else if (err.response.status === 401) {
          setError('Invalid username or password');
        } else if (err.response.status === 500) {
          setError('Server error. Please try again later.');
        } else {
          setError(`Error ${err.response.status}: ${err.response.data?.message || 'Please try again'}`);
        }
      } else if (err.request) {
        setError('Cannot connect to server. Please check your internet connection.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const useTestCredentials = () => {
    setFormData({ 
      username: 'adminuser', 
      password: 'admin123' 
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* Status Indicator */}
        <div className="mb-8">
          <div className={`flex items-center justify-between p-4 rounded-lg ${backendStatus.online ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${backendStatus.online ? 'bg-green-500' : 'bg-red-500'}`}>
                {backendStatus.online ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <X className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <p className="font-semibold text-white">
                  Backend {backendStatus.online ? 'Online' : 'Offline'}
                </p>
                <p className="text-sm text-gray-300">
                  {backendStatus.loading ? 'Checking...' : backendStatus.online ? 'Ready to connect' : 'Cannot connect'}
                </p>
              </div>
            </div>
            <button
              onClick={checkBackendStatus}
              disabled={backendStatus.loading}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-sm rounded transition-colors disabled:opacity-50"
            >
              {backendStatus.loading ? 'Checking...' : 'Retry'}
            </button>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-black text-gray-800 mb-2">
              Admin Portal
            </h1>
            <p className="text-gray-600 text-sm">
              Emerald Capital Management System
            </p>
            <div className="mt-2 text-xs text-emerald-600 font-mono">
              Login to access admin dashboard
            </div>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-pulse">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 mb-1">Login Successful!</h4>
                  <p className="text-sm text-green-700">Redirecting to dashboard...</p>
                </div>
              </div>
            </div>
          )}

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-900 mb-1">Login Failed</h4>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  disabled={!backendStatus.online || loading || success}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  placeholder="Enter your username"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Note: Backend expects "username" field, not "email"
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  disabled={!backendStatus.online || loading || success}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading || success}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !backendStatus.online || success}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-200"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Authenticating...
                </>
              ) : success ? (
                <>
                  <Check className="w-5 h-5" />
                  Login Successful!
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  {backendStatus.online ? 'Login to Dashboard' : 'Backend Offline'}
                </>
              )}
            </button>
          </form>

          {/* Test Credentials Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={useTestCredentials}
              disabled={loading || success}
              className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              Use Test Credentials
            </button>
          </div>

          {/* Security Notice */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Secure admin portal</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <p className="font-mono">Endpoint: POST /api/admin/login</p>
              <p className="font-mono mt-1">Expected: {"{ username: '...', password: '...' }"}</p>
            </div>
          </div>
        </div>

        {/* Debug Info */}
        <div className="mt-6 p-4 bg-black/20 backdrop-blur-sm rounded-xl text-white text-sm">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <Server className="w-4 h-4" />
            Connection Details
          </h3>
          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span>Backend URL:</span>
              <code className="bg-white/10 px-2 py-1 rounded break-all">
                {API_BASE_URL}
              </code>
            </div>
            <div className="flex items-center justify-between">
              <span>Endpoint:</span>
              <code className="bg-white/10 px-2 py-1 rounded">
                /api/admin/login
              </code>
            </div>
            <div className="flex items-center justify-between">
              <span>Method:</span>
              <code className="bg-white/10 px-2 py-1 rounded">
                POST
              </code>
            </div>
            <div className="flex items-center justify-between">
              <span>Status:</span>
              <span className={`px-2 py-1 rounded ${backendStatus.online ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'}`}>
                {backendStatus.online ? '✅ Online' : '❌ Offline'}
              </span>
            </div>
          </div>
          
          {/* Test Credentials Info */}
          <div className="mt-4 p-3 bg-emerald-500/20 rounded">
            <p className="font-semibold mb-2">Test Credentials:</p>
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span>Username:</span>
                <code className="bg-black/30 px-2 py-1 rounded">adminuser</code>
              </div>
              <div className="flex items-center justify-between">
                <span>Password:</span>
                <code className="bg-black/30 px-2 py-1 rounded">admin123</code>
              </div>
            </div>
          </div>
          
          {/* Troubleshooting */}
          {!backendStatus.online && !backendStatus.loading && (
            <div className="mt-4 p-3 bg-yellow-500/20 rounded text-xs">
              <p className="font-semibold mb-2">⚠️ Troubleshooting:</p>
              <ul className="space-y-1 ml-4 list-disc">
                <li>Check if backend server is running</li>
                <li>Verify network connection</li>
                <li>Make sure endpoint exists</li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Emerald Capital Ghana</p>
          <p className="mt-1 text-xs">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}