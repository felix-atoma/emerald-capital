import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminAuthAPI } from '../../services/api';
import {
  Lock, Eye, EyeOff, LogIn, Shield,
  Loader, AlertCircle, FileText, Check, User
} from 'lucide-react';

// Get the API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://emerald-capital-backend.onrender.com";

export default function AdminBlogLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    username: 'adminuser',
    password: 'admin123'
  });

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminAuthToken');
    if (token) {
      navigate('/admin/blog/dashboard');
    }
  }, [navigate]);

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
      
      // Make direct fetch call to debug
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', Object.fromEntries(response.headers.entries()));

      // First check if response is OK
      if (!response.ok) {
        let errorText = await response.text();
        console.error('❌ Response not OK. Text:', errorText);
        
        // Try to parse as JSON if possible
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.message || `Server error: ${response.status}`);
        } catch (jsonError) {
          throw new Error(`Server error ${response.status}: ${errorText || 'Unknown error'}`);
        }
      }

      // Try to parse response as JSON
      let responseData;
      const responseText = await response.text();
      console.log('📥 Raw response text:', responseText);
      
      try {
        responseData = responseText ? JSON.parse(responseText) : {};
        console.log('✅ Parsed response data:', responseData);
      } catch (parseError) {
        console.error('❌ JSON parse error:', parseError);
        console.error('❌ Response text that failed to parse:', responseText);
        throw new Error('Invalid response from server');
      }

      // Check if login was successful
      if (responseData.success) {
        // Get token and user data from the backend response structure
        const token = responseData.data?.tokens?.access || responseData.token;
        const userData = responseData.data?.user || responseData.user;
        
        if (!token) {
          throw new Error('No authentication token received');
        }

        // Store tokens and user data
        localStorage.setItem('adminAuthToken', token);
        localStorage.setItem('adminUser', JSON.stringify(userData || {
          username: formData.username,
          role: 'admin'
        }));
        
        console.log('✅ Stored in localStorage:', {
          token: localStorage.getItem('adminAuthToken') ? 'exists' : 'missing',
          user: JSON.parse(localStorage.getItem('adminUser'))
        });
        
        // Show success message
        setSuccess(true);
        console.log('✅ Login successful! Redirecting to blog dashboard...');
        
        // Wait a moment to show success message, then redirect
        setTimeout(() => {
          navigate('/admin/blog/dashboard');
        }, 1500);
        
      } else {
        setError(responseData.message || 'Login failed');
      }
    } catch (err) {
      console.error('❌ Full login error:', err);
      console.error('❌ Error details:', {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
      
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        setError('Cannot connect to server. Please check your internet connection.');
      } else if (err.message.includes('Invalid response from server')) {
        setError('Server returned invalid data. Please contact support.');
      } else {
        setError(err.message || 'An unexpected error occurred. Please try again.');
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

  const handleDirectFetch = async () => {
    // Debug function to test API directly
    console.log('🔍 Testing direct fetch...');
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'adminuser', password: 'admin123' })
      });
      console.log('Direct fetch response:', response);
      const text = await response.text();
      console.log('Direct fetch response text:', text);
      try {
        const json = JSON.parse(text);
        console.log('Direct fetch JSON:', json);
      } catch (e) {
        console.log('Could not parse as JSON:', e);
      }
    } catch (err) {
      console.error('Direct fetch error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl mb-4">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              Blog Admin Login
            </h1>
            <p className="text-emerald-600 text-lg font-semibold">
              Emerald Capital Ghana
            </p>
            <div className="mt-2 text-xs text-gray-500 font-mono">
              Manage blog posts and content
            </div>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-pulse">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 mb-1">Login Successful!</h4>
                  <p className="text-sm text-green-700">Redirecting to blog dashboard...</p>
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
                  <button
                    onClick={handleDirectFetch}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    🔍 Test API Connection
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
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
                  disabled={loading || success}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  placeholder="Enter your username"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Use your admin username (not email)
              </p>
            </div>

            {/* Password Field */}
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
                  disabled={loading || success}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading || success}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || success}
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
                  Login to Blog Dashboard
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
              <span>Secure admin blog portal</span>
            </div>
          </div>
        </div>

        {/* Test Credentials Info */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
          <p className="text-sm font-semibold mb-2">📝 Test Credentials:</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center justify-between">
              <span>Username:</span>
              <code className="bg-white/20 px-2 py-0.5 rounded font-mono">adminuser</code>
            </div>
            <div className="flex items-center justify-between">
              <span>Password:</span>
              <code className="bg-white/20 px-2 py-0.5 rounded font-mono">admin123</code>
            </div>
          </div>
          <p className="text-xs text-emerald-200 mt-3">
            ⚠️ Change default credentials in production
          </p>
          <div className="mt-3 text-xs">
            <p>🌐 API Endpoint: <code className="bg-white/20 px-1 rounded">{API_BASE_URL}/api/admin/login</code></p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-emerald-200 text-sm">
          <p>© {new Date().getFullYear()} Emerald Capital Ghana. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}