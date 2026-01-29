import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Lock, Eye, EyeOff, LogIn, Shield,
  Loader, AlertCircle, Check, User
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
    username: '',
    password: ''
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
    
    // Validate inputs
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please enter both username and password');
      return;
    }
    
    setLoading(true);
    setError('');
    setSuccess(false);

    // Debug: Log what we're sending
    console.log('🔐 === AUTHENTICATION DEBUG START ===');
    console.log('📤 Sending credentials to:', `${API_BASE_URL}/api/admin/login`);
    console.log('📝 Username:', formData.username);
    console.log('📝 Password length:', formData.password.length);
    console.log('📝 Password first char:', formData.password.charAt(0));
    console.log('📝 Password last char:', formData.password.charAt(formData.password.length - 1));
    console.log('📝 Has spaces in username?', formData.username !== formData.username.trim());
    console.log('📝 Has spaces in password?', formData.password !== formData.password.trim());

    try {
      const requestBody = {
        username: formData.username,
        password: formData.password
      };

      console.log('📦 Request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response status text:', response.statusText);
      console.log('📥 Response headers:', Object.fromEntries(response.headers.entries()));

      // Get response text first for debugging
      const responseText = await response.text();
      console.log('📥 Raw response text:', responseText);

      // Handle HTTP errors
      if (!response.ok) {
        console.error('❌ HTTP Error - Status:', response.status);
        
        let errorData = null;
        try {
          errorData = JSON.parse(responseText);
          console.error('❌ Parsed error data:', errorData);
        } catch (jsonError) {
          console.error('❌ Could not parse error response as JSON');
          console.error('❌ Raw error text:', responseText);
        }

        if (response.status === 401) {
          console.error('❌ 401 UNAUTHORIZED - Possible reasons:');
          console.error('   1. Username does not exist in database');
          console.error('   2. Password does not match');
          console.error('   3. Account is disabled/inactive');
          console.error('   4. Password comparison logic issue');
          console.error('📝 Server error message:', errorData?.message || 'No message');
          console.error('📝 Server error details:', errorData?.error || 'No details');
          throw new Error(errorData?.message || 'Invalid username or password. Please verify your credentials.');
        } else if (response.status === 403) {
          console.error('❌ 403 FORBIDDEN - Access denied');
          throw new Error('Access denied. Admin privileges required.');
        } else if (response.status === 404) {
          console.error('❌ 404 NOT FOUND - Endpoint does not exist');
          throw new Error('Login endpoint not found. Please contact support.');
        } else if (response.status >= 500) {
          console.error('❌ 500+ SERVER ERROR');
          throw new Error('Server error. Please try again later.');
        } else {
          console.error('❌ Unknown HTTP error:', response.status);
          throw new Error(`Authentication error: ${response.status}`);
        }
      }

      // Parse successful response
      let responseData = null;
      try {
        responseData = JSON.parse(responseText);
        console.log('✅ Successfully parsed response:', responseData);
      } catch (parseError) {
        console.error('❌ Failed to parse successful response as JSON');
        console.error('❌ Response text:', responseText);
        throw new Error('Invalid response format from server');
      }
      
      if (responseData.success) {
        console.log('✅ Login successful!');
        
        // Extract tokens and user data
        const token = responseData.data?.tokens?.access || responseData.token;
        const userData = responseData.data?.user || responseData.user;
        
        console.log('🎫 Token received:', token ? `${token.substring(0, 20)}...` : 'MISSING');
        console.log('👤 User data:', userData);
        
        if (!token) {
          console.error('❌ No token in response despite success=true');
          console.error('📦 Full response data:', responseData);
          throw new Error('Authentication token missing in response');
        }

        // Store authentication data
        localStorage.setItem('adminAuthToken', token);
        localStorage.setItem('adminUser', JSON.stringify(userData || {
          username: formData.username,
          role: 'admin'
        }));
        
        console.log('💾 Stored in localStorage:');
        console.log('   - Token:', localStorage.getItem('adminAuthToken') ? 'YES' : 'NO');
        console.log('   - User:', localStorage.getItem('adminUser'));
        
        setSuccess(true);
        console.log('✅ Redirecting to dashboard in 1.5 seconds...');
        
        setTimeout(() => {
          navigate('/admin/blog/dashboard');
        }, 1500);
        
      } else {
        console.error('❌ Response has success=false');
        console.error('📦 Full response:', responseData);
        setError(responseData.message || 'Authentication failed. Please check your credentials.');
      }
      
      console.log('🔐 === AUTHENTICATION DEBUG END ===');
    } catch (err) {
      console.error('❌ === AUTHENTICATION ERROR ===');
      console.error('Error name:', err.name);
      console.error('Error message:', err.message);
      console.error('Error stack:', err.stack);
      console.log('🔐 === AUTHENTICATION DEBUG END ===');
      
      // User-friendly error messages
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        setError('Network error. Please check your internet connection and try again.');
      } else if (err.message.includes('Invalid username or password')) {
        setError('Invalid credentials. Please verify your username and password are correct.');
      } else if (err.message.includes('Invalid response format')) {
        setError('Server returned invalid data. Please contact technical support.');
      } else {
        setError(err.message || 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setFormData({ username: '', password: '' });
    setError('');
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Logo/Header Section */}
      <div className="w-full max-w-md mb-8 z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Logo Container with White Background */}
          <div className="relative group mb-6">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Logo box */}
            <div className="relative w-48 h-48 bg-white rounded-3xl flex items-center justify-center shadow-2xl border-4 border-emerald-50 p-6 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/emerald-logo.png" 
                alt="Emerald Capital Ghana Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  parent.innerHTML = `
                    <div class="text-center">
                      <div class="flex items-center justify-center mb-3">
                        <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="text-2xl font-black text-emerald-600 mb-1">EMERALD</div>
                      <div class="text-lg font-bold text-teal-600">CAPITAL</div>
                      <div class="text-xs text-gray-500 font-semibold mt-1">GHANA LIMITED</div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
          
          {/* Company Name */}
          <div className="text-center">
            <h1 className="text-4xl font-black text-white tracking-tight mb-2">
              Emerald Capital
            </h1>
            <p className="text-emerald-400 text-lg font-semibold">
              Ghana Limited
            </p>
            <div className="mt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-400/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <p className="text-emerald-300 text-sm font-medium">
                  Financial Excellence Since 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md z-10">
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl"></div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {/* Login Form Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Admin Portal
            </h2>
            <p className="text-gray-600 font-medium">
              Content Management System
            </p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                SECURE ACCESS
              </span>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                v1.0.0
              </span>
            </div>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl animate-pulse shadow-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-1">Authentication Successful</h4>
                  <p className="text-sm text-green-700 font-medium">Redirecting to dashboard...</p>
                </div>
              </div>
            </div>
          )}

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl animate-shake shadow-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-red-900 mb-1">Authentication Failed</h4>
                  <p className="text-sm text-red-700 font-medium">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Username
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  disabled={loading || success}
                  autoComplete="username"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:border-emerald-300 font-medium"
                  placeholder="Enter admin username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  disabled={loading || success}
                  autoComplete="current-password"
                  className="w-full pl-12 pr-14 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:border-emerald-300 font-medium"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading || success}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 disabled:opacity-50 transition-colors p-1.5 hover:bg-gray-100 rounded-lg"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={clearForm}
                disabled={loading || success}
                className="flex-1 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-all duration-200 disabled:opacity-50 hover:shadow-md border-2 border-gray-200 hover:border-gray-300"
              >
                Clear
              </button>
              
              <button
                type="submit"
                disabled={loading || success || !formData.username.trim() || !formData.password.trim()}
                className="flex-1 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Authenticating...</span>
                  </>
                ) : success ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Success!</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Security Notice */}
          <div className="mt-8 pt-6 border-t-2 border-gray-100">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="font-bold text-gray-800">Secure Admin Access</span>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-center text-xs text-amber-800 font-semibold">
                ⚠️ Authorized personnel only
              </p>
              <p className="text-center text-xs text-amber-700 mt-1">
                All activities are monitored and logged
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-300 font-semibold">System Online</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-xs text-gray-400 font-medium">ISO 27001 Compliant</span>
          </div>
          
          <div className="text-gray-400 text-sm space-y-2">
            <p className="text-xs">
              © {new Date().getFullYear()} Emerald Capital Ghana Limited
            </p>
            <p className="text-xs text-gray-500">
              All rights reserved • Secure Access Portal
            </p>
          </div>
          
          <div className="pt-3">
            <a 
              href="mailto:support@emeraldcapital.gh" 
              className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              Technical Support: support@emeraldcapital.gh
            </a>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
}