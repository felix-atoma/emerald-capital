import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headphones, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../components/CustomToast';

// Loading Spinner Component
const LoginLoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/emerald.png" 
              alt="Logo" 
              className="w-20 h-20 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <div className="absolute inset-0">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '1.5s' }} viewBox="0 0 100 100">
              <defs>
                <linearGradient id="loginSpinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#008B8B', stopOpacity: 1 }} />
                  <stop offset="33%" style={{ stopColor: '#40E0D0', stopOpacity: 1 }} />
                  <stop offset="66%" style={{ stopColor: '#2EB88A', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#C8D900', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#loginSpinnerGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="220"
                strokeDashoffset="50"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-700 text-lg font-semibold">Logging you in...</p>
        <p className="text-gray-500 text-sm mt-2">Please wait a moment</p>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const toast = useToast();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent multiple submissions and handle component mount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Check if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isMounted || isSubmitting) return;
    
    if (validateForm()) {
      setIsSubmitting(true);
      setErrors({});

      try {
        const result = await login({
          username: formData.username.trim(),
          password: formData.password
        });

        if (result && result.success) {
          toast.success('Login successful! Redirecting to dashboard...', 2000);
          setTimeout(() => {
            if (isMounted) {
              navigate('/dashboard', { replace: true });
            }
          }, 1500);
        } else {
          throw new Error(result?.message || 'Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Login error:', error);
        const errorMessage = error.message || 'Login failed. Please check your credentials.';
        toast.error(errorMessage, 4000);
        setErrors({
          general: errorMessage
        });
      } finally {
        if (isMounted) {
          setIsSubmitting(false);
        }
      }
    } else {
      toast.error('Please fix the form errors before submitting.', 3000);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    toast.info('Password reset feature coming soon!', 3000);
    // navigate('/forgot-password');
  };

  const handleCustomerService = () => {
    toast.info('Connecting you to customer service...', 3000);
  };

  const handleSignupRedirect = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  const Logo = () => (
    <div className="flex items-center mb-10">
      <div className="w-10 h-8 bg-red-600 mr-3 relative rounded-sm">
        <div className="absolute top-1 left-1 right-1 h-1.5 bg-white rounded-sm"></div>
        <div className="absolute top-3.5 left-1 right-1 h-1.5 bg-white rounded-sm"></div>
      </div>
      <div className="text-gray-800 text-lg font-bold">
        Emerald<br />
        <span className="text-blue-600 font-normal">Capital</span>
      </div>
    </div>
  );

  return (
    <>
      {isSubmitting && <LoginLoadingSpinner />}
      
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 p-8 lg:p-14 flex flex-col justify-center max-w-lg mx-auto">
          <Logo />
          
          <h1 className="text-2xl lg:text-3xl text-gray-800 mb-2 font-semibold">Log in</h1>
          <p className="text-gray-500 text-base mb-8 lg:mb-10">Welcome back! Please enter your details.</p>

          <form onSubmit={handleSubmit} className="mb-6 lg:mb-8">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-5">
                {errors.general}
              </div>
            )}

            <div className="mb-4 lg:mb-5">
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
                placeholder="Username or Account Number"
                required
                disabled={isSubmitting}
                autoComplete="username"
              />
              {errors.username && (
                <div className="text-red-600 text-sm mt-1">{errors.username}</div>
              )}
            </div>

            <div className="mb-4 lg:mb-5 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 pr-12 outline-none"
                placeholder="••••••••"
                required
                disabled={isSubmitting}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-transparent border-none cursor-pointer p-1 hover:text-gray-700 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isSubmitting}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <div className="text-red-600 text-sm mt-1">{errors.password}</div>
              )}
            </div>

            <div className="flex justify-between items-center mb-6 lg:mb-8">
              <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                  className="w-4 h-4 text-red-600 rounded focus:ring-2 focus:ring-red-500"
                  disabled={isSubmitting}
                />
                Remember for 30 days
              </label>
              <button
                type="button"
                className="text-red-600 text-sm font-medium hover:underline bg-transparent border-none cursor-pointer transition-colors"
                onClick={handleForgotPassword}
                disabled={isSubmitting}
              >
                Forgot Password
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 lg:py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-red-600 text-white hover:bg-red-700 transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-300 active:translate-y-0'
              }`}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <button
            onClick={handleSignupRedirect}
            className="text-center text-gray-700 text-sm font-medium hover:text-red-600 bg-transparent border-none cursor-pointer w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            Set Up Internet Banking
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{' '}
              <button
                onClick={handleSignupRedirect}
                className="text-red-600 hover:underline font-medium bg-transparent border-none cursor-pointer"
                disabled={isSubmitting}
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50 to-purple-50 items-center justify-center relative border-l border-gray-200">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-64 h-64 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">EC</div>
                  <div className="text-lg font-semibold">Emerald Capital</div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Secure Banking</h2>
              <p className="text-gray-600 max-w-md">
                Access your account securely with our advanced authentication system.
                Your financial safety is our top priority.
              </p>
            </div>
          </div>

          <button
            className="absolute bottom-8 right-8 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-2xl shadow-red-300 cursor-pointer transition-transform hover:scale-110 border-none"
            onClick={handleCustomerService}
            title="Contact Customer Service"
          >
            <Headphones size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;