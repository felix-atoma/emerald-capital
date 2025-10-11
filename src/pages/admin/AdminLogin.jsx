import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useToast } from '../../components/CustomToast';
import { adminAuthAPI } from '../../services/api';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminAuthToken');
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');
    
    if (token && (adminUser.role === 'admin' || adminUser.role === 'officer')) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username.trim() || !password.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      console.log('🔑 Attempting admin login with username:', username);
      
      const response = await adminAuthAPI.login({ 
        username: username.trim(), 
        password: password 
      });
      
      console.log('📦 Full response:', response);
      console.log('📊 Response data:', response.data);

      // Handle response structure: { success: true, message: '...', data: { tokens: { ... }, user: { ... } } }
      if (response.data && response.data.success) {
        const { data: responseData } = response.data;
        
        console.log('🔍 Nested data:', responseData);

        if (responseData) {
          // Extract token and user data - FIXED LOGIC
          let authToken = null;
          let userData = null;

          console.log('🔑 Available tokens keys:', Object.keys(responseData.tokens || {}));
          console.log('👤 Available user keys:', Object.keys(responseData.user || {}));

          // Check all possible token locations
          if (responseData.tokens) {
            // Try different token property names
            authToken = responseData.tokens.access || 
                       responseData.tokens.accessToken || 
                       responseData.tokens.token ||
                       responseData.tokens.authToken;
          }
          
          // Get user data
          userData = responseData.user;

          console.log('🔑 Extracted token:', authToken ? '✅ Found: ' + authToken.substring(0, 20) + '...' : '❌ Not found');
          console.log('👤 Extracted user data:', userData);

          if (authToken && userData) {
            console.log('✅ Login successful, saving tokens...');
            
            // Save admin token and user data
            localStorage.setItem('adminAuthToken', authToken);
            localStorage.setItem('adminUser', JSON.stringify(userData));
            
            console.log('👤 Admin user data saved:', userData);
            console.log('🔑 Auth token saved');
            
            toast.success(`Welcome back, ${userData.username || userData.name || 'Admin'}!`);
            
            // Redirect to admin dashboard
            setTimeout(() => {
              navigate('/admin/dashboard');
            }, 1500);
          } else {
            // If we have the data but extraction failed, log the exact structure
            console.error('❌ Token extraction failed. Full tokens object:', responseData.tokens);
            console.error('❌ User data:', responseData.user);
            toast.error('Login failed: Could not extract authentication data');
          }
        } else {
          console.error('❌ No data nested in response');
          toast.error('Login failed: No user data received');
        }
      } else {
        console.error('❌ Unsuccessful response or invalid structure');
        toast.error('Login failed: Invalid credentials or server error');
      }
    } catch (err) {
      console.error('❌ Login error:', err);
      
      // Detailed error logging
      if (err.response) {
        console.error('📊 Error response status:', err.response.status);
        console.error('📊 Error response data:', err.response.data);
      } else if (err.request) {
        console.error('📡 No response received:', err.request);
      } else {
        console.error('⚡ Request setup error:', err.message);
      }
      
      // User-friendly error messages
      if (err.response?.status === 401) {
        toast.error('Invalid username or password');
      } else if (err.response?.status === 404) {
        toast.error('Admin account not found');
      } else if (err.response?.status === 500) {
        toast.error('Server error. Please try again later.');
      } else if (err.code === 'NETWORK_ERROR' || err.code === 'ECONNREFUSED') {
        toast.error('Cannot connect to server. Please check your connection.');
      } else {
        toast.error(err.response?.data?.message || 'Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Debug function to check the exact response structure
  const debugResponse = async () => {
    try {
      console.log('🐛 Debug: Checking exact response structure...');
      const response = await adminAuthAPI.login({ 
        username: 'admin', 
        password: 'admin123' 
      });
      
      console.log('🐛 DEBUG - Full response structure:', JSON.stringify(response.data, null, 2));
      
      if (response.data.data) {
        console.log('🐛 DEBUG - Tokens structure:', JSON.stringify(response.data.data.tokens, null, 2));
        console.log('🐛 DEBUG - User structure:', JSON.stringify(response.data.data.user, null, 2));
        console.log('🐛 DEBUG - Tokens keys:', Object.keys(response.data.data.tokens || {}));
      }
    } catch (error) {
      console.error('🐛 DEBUG - Error:', error);
    }
  };

  // Test connection function
  const testConnection = async () => {
    try {
      console.log('🧪 Testing server connection...');
      const response = await fetch('https://emerald-capital-backend.onrender.com/api/health');
      const data = await response.json();
      console.log('🌐 Server health check:', data);
      toast.success('Server connection successful!');
    } catch (error) {
      console.error('🌐 Server connection test failed:', error);
      toast.error('Cannot connect to server');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full mb-4 shadow-lg">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
          <p className="text-gray-600">Emerald Capital Dashboard</p>
          
          {/* Debug & Connection Test Buttons */}
          <div className="mt-4 flex gap-2 justify-center">
            <button
              onClick={testConnection}
              className="text-xs text-blue-600 hover:text-blue-800 underline"
              type="button"
            >
              Test Connection
            </button>
            <button
              onClick={debugResponse}
              className="text-xs text-gray-600 hover:text-gray-800 underline"
              type="button"
            >
              Debug Response
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition outline-none"
                placeholder="Enter username"
                required
                disabled={loading}
                autoComplete="username"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition outline-none"
                placeholder="••••••••"
                required
                disabled={loading}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                disabled={loading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Logging in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Lock className="w-4 h-4" />
            <span>Authorized Personnel Only</span>
          </div>
          
          {/* Demo Credentials */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-600 font-medium">Demo Credentials:</p>
            <p className="text-xs text-gray-500 mt-1">Username: <span className="font-mono bg-gray-200 px-1 rounded">admin</span></p>
            <p className="text-xs text-gray-500">Password: <span className="font-mono bg-gray-200 px-1 rounded">admin123</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;