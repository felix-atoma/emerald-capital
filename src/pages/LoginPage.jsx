import React, { useState } from 'react';
import { Headphones, Eye, EyeOff, Image } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Username validation
    if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSuccessMessage('');

      // Simulate login process
      setTimeout(() => {
        setSuccessMessage('Login successful! Redirecting...');
        
        setTimeout(() => {
          alert('Login successful! You would now be redirected to your dashboard.');
          setIsSubmitting(false);
          // Reset form
          setFormData({
            username: '',
            password: '',
            rememberMe: false
          });
        }, 1500);
      }, 2000);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Password reset functionality would be implemented here. Please contact customer service.');
  };

  const handleCustomerService = () => {
    alert('Customer service chat would be opened here.');
  };

  const Logo = () => (
    <div className="flex items-center mb-10">
      <div className="w-10 h-8 bg-red-600 mr-3 relative rounded-sm">
        <div className="absolute top-1 left-1 right-1 h-1.5 bg-white rounded-sm"></div>
        <div className="absolute top-3.5 left-1 right-1 h-1.5 bg-white rounded-sm"></div>
      </div>
      <div className="text-gray-800 text-lg font-bold">
        Emarald<br />
        <span className="text-red-600">trust</span>{' '}
        <span className="text-blue-600 font-normal">Capital</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex">
      {/* Login Section */}
      <div className="flex-1 p-14 flex flex-col justify-center max-w-lg">
        <Logo />
        
        <h1 className="text-3xl text-gray-800 mb-2 font-semibold">Log in</h1>
        <p className="text-gray-500 text-base mb-10">Welcome back! Please enter your details.</p>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-5">
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
              placeholder="Username or Account Number"
              required
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

          {successMessage && (
            <div className="text-green-600 text-sm mt-3 text-center">
              {successMessage}
            </div>
          )}
        </form>

        <a
          href="/signup"
          className="text-center text-gray-700 no-underline text-sm font-medium hover:text-red-600 block"
        >
          Set Up Internet Banking
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center relative border-l border-gray-200">
        <div className="w-full h-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-none flex flex-col items-center justify-center text-gray-500 text-lg text-center">
          <Image size={64} className="opacity-50 mb-4" />
          <p>Photo Placeholder</p>
          <p className="text-sm mt-2">Image would be displayed here</p>
        </div>

        <div
          className="absolute bottom-8 right-8 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-2xl shadow-red-300 cursor-pointer transition-transform hover:scale-110"
          onClick={handleCustomerService}
        >
          <Headphones size={24} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
