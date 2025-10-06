import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headphones, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from "react-hot-toast";

// Loading Spinner Component
const LoginLoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Your Logo in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/path-to-your-logo.png" 
              alt="Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          
          {/* Spinning gradient ring around logo */}
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
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setErrors({});

      try {
        const result = await login({
          username: formData.username,
          password: formData.password
        });

        if (result.success) {
          toast.success('Login successful! Redirecting...');
          setTimeout(() => {
            navigate('/dashboard');
          }, 1500);
        } else {
          toast.error(result.message || 'Login failed. Please check your credentials.');
          setErrors({
            general: result.message || 'Login failed. Please check your credentials.'
          });
          setIsSubmitting(false);
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
        setErrors({
          general: 'An error occurred. Please try again.'
        });
        setIsSubmitting(false);
      }
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate('/forgot-password');
  };

  const handleCustomerService = () => {
    toast.info('Customer service chat coming soon!');
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
      {/* Show loading spinner when submitting */}
      {isSubmitting && <LoginLoadingSpinner />}
      
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 p-14 flex flex-col justify-center max-w-lg">
          <Logo />
          
          <h1 className="text-3xl text-gray-800 mb-2 font-semibold">Log in</h1>
          <p className="text-gray-500 text-base mb-10">Welcome back! Please enter your details.</p>

          <form onSubmit={handleSubmit} className="mb-8">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-5">
                {errors.general}
              </div>
            )}

            <div className="mb-5">
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
                placeholder="Username or Account Number"
                required
                disabled={isSubmitting}
              />
              {errors.username && (
                <div className="text-red-600 text-sm mt-1">{errors.username}</div>
              )}
            </div>

            <div className="mb-5 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 pr-12"
                placeholder="••••••••"
                required
                disabled={isSubmitting}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-none border-none cursor-pointer p-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <div className="text-red-600 text-sm mt-1">{errors.password}</div>
              )}
            </div>

            <div className="flex justify-between items-center mb-8">
              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                  className="w-4 h-4 text-red-600"
                  disabled={isSubmitting}
                />
                Remember for 30 days
              </label>
              <a
                href="#"
                className="text-red-600 no-underline text-sm font-medium hover:underline"
                onClick={handleForgotPassword}
              >
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700 hover:transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-300'
              }`}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <a
            href="/signup"
            className="text-center text-gray-700 no-underline text-sm font-medium hover:text-red-600 block"
            onClick={(e) => {
              e.preventDefault();
              navigate('/signup');
            }}
          >
            Set Up Internet Banking
          </a>
        </div>

        <div className="flex-1 bg-gray-100 flex items-center justify-center relative border-l border-gray-200">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img 
              src="" 
              alt="Login visual" 
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute bottom-8 right-8 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-2xl shadow-red-300 cursor-pointer transition-transform hover:scale-110"
            onClick={handleCustomerService}
          >
            <Headphones size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;