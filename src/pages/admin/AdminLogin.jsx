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
    
    // Trim inputs
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    
    console.log('🎯 FINAL CREDENTIALS BEING SENT:', {
      username: trimmedUsername,
      password: '***' + trimmedPassword.slice(-3),
      usernameLength: trimmedUsername.length,
      passwordLength: trimmedPassword.length
    });

    if (!trimmedUsername || !trimmedPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      console.log('🔑 Making API call to /api/admin/login...');
      
      const response = await adminAuthAPI.login({ 
        username: trimmedUsername, 
        password: trimmedPassword 
      });
      
      console.log('✅ API Call Successful!');
      console.log('📦 Full response:', response);
      console.log('📊 Response data:', response.data);

      // Handle the exact backend response structure
      if (response.data && response.data.success) {
        const responseData = response.data.data;
        
        console.log('🔍 Response structure analysis:', {
          hasUser: !!responseData?.user,
          hasTokens: !!responseData?.tokens,
          hasAccessToken: !!responseData?.tokens?.access,
          userKeys: responseData?.user ? Object.keys(responseData.user) : [],
          tokenKeys: responseData?.tokens ? Object.keys(responseData.tokens) : []
        });

        // Extract data from backend response structure: { success: true, data: { user: {}, tokens: { access: '' } } }
        const authToken = responseData?.tokens?.access;
        const userData = responseData?.user;

        console.log('🔑 Token extraction:', authToken ? `✅ Found (${authToken.substring(0, 20)}...)` : '❌ Not found');
        console.log('👤 User data extraction:', userData ? '✅ Found' : '❌ Not found');

        if (authToken && userData) {
          console.log('🎉 Login successful! Saving data...');
          
          // Save to localStorage
          localStorage.setItem('adminAuthToken', authToken);
          localStorage.setItem('adminUser', JSON.stringify(userData));
          
          console.log('💾 Data saved to localStorage');
          console.log('👤 Admin user info:', {
            username: userData.username,
            role: userData.role,
            firstName: userData.firstName,
            lastName: userData.lastName
          });
          
          toast.success(`Welcome back, ${userData.firstName || userData.username || 'Admin'}!`);
          
          // Redirect to admin dashboard
          setTimeout(() => {
            navigate('/admin/dashboard');
          }, 1500);
        } else {
          console.error('❌ Failed to extract auth data');
          console.error('📊 Full response data for debugging:', responseData);
          toast.error('Login failed: Could not process authentication data');
        }
      } else {
        console.error('❌ Invalid response structure');
        toast.error('Login failed: Invalid server response');
      }
    } catch (err) {
      console.error('💥 LOGIN ERROR:', err);
      
      // Detailed error analysis
      if (err.response) {
        console.error('📊 Server responded with error:');
        console.error('  Status:', err.response.status);
        console.error('  Status Text:', err.response.statusText);
        console.error('  Data:', err.response.data);
        
        if (err.response.status === 401) {
          toast.error('Invalid username or password');
        } else if (err.response.status === 404) {
          toast.error('Admin login endpoint not found');
        } else if (err.response.status === 500) {
          toast.error('Server error. Please try again later.');
        } else {
          toast.error(err.response.data?.message || `Error: ${err.response.status}`);
        }
      } else if (err.request) {
        console.error('📡 No response received:', err.request);
        toast.error('Cannot connect to server. Please check your connection.');
      } else {
        console.error('⚡ Request setup error:', err.message);
        toast.error('Login failed: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Test the exact endpoint
  const testEndpoint = async () => {
    console.log('🧪 Testing /api/admin/login endpoint directly...');
    
    const credentials = {
      username: 'admin',
      password: 'admin123'
    };

    try {
      const response = await fetch('https://emerald-capital-backend.onrender.com/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      
      console.log('📊 Direct fetch response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });
      
      const data = await response.json();
      console.log('📦 Response data:', data);
      
      if (response.ok) {
        toast.success('✅ Endpoint is working! Check console for details.');
      } else {
        toast.error(`❌ Endpoint error: ${data.message}`);
      }
    } catch (error) {
      console.error('❌ Endpoint test error:', error);
      toast.error('❌ Cannot connect to endpoint');
    }
  };

  // Test server connection
  const testConnection = async () => {
    try {
      console.log('🌐 Testing server connection...');
      const response = await fetch('https://emerald-capital-backend.onrender.com/api/health');
      const data = await response.json();
      console.log('✅ Server health:', data);
      toast.success('Server connection successful!');
    } catch (error) {
      console.error('❌ Server connection failed:', error);
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
          
          {/* Debug buttons */}
          <div className="mt-4 flex gap-2 justify-center">
            <button
              onClick={testConnection}
              className="text-xs text-blue-600 hover:text-blue-800 underline"
              type="button"
            >
              Test Connection
            </button>
            <button
              onClick={testEndpoint}
              className="text-xs text-green-600 hover:text-green-800 underline"
              type="button"
            >
              Test Login Endpoint
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