import React, { useState } from 'react';
import { Headphones, X, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from "react-hot-toast";

// Loading Spinner Component
const SignupLoadingSpinner = () => {
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
                <linearGradient id="signupSpinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                stroke="url(#signupSpinnerGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="220"
                strokeDashoffset="50"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-700 text-lg font-semibold">Creating your account...</p>
        <p className="text-gray-500 text-sm mt-2">Please wait a moment</p>
      </div>
    </div>
  );
};

const SignupPage = ({ onNavigate }) => {
  const { register } = useAuth();
  const [currentPage, setCurrentPage] = useState('signup');
  const [currentStep, setCurrentStep] = useState(0);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    ghanaCardNumber: '',
    fullName: '',
    phone: '',
    email: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { number: 1, label: 'Verify Ghana Card', component: 'identity' },
    { number: 2, label: 'Confirm Information', component: 'confirm' },
    { number: 3, label: 'Create Credentials', component: 'credentials' }
  ];

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

  const validateIdentity = () => {
    const newErrors = {};
    if (!formData.ghanaCardNumber || formData.ghanaCardNumber.length < 10) {
      newErrors.ghanaCardNumber = 'Please enter a valid Ghana Card number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateConfirmation = () => {
    const newErrors = {};
    if (formData.fullName.length < 3) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.address.length < 10) {
      newErrors.address = 'Please enter your full address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCredentials = () => {
    const newErrors = {};
    if (formData.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    let isValid = false;

    switch (currentStep) {
      case 0:
        isValid = validateIdentity();
        break;
      case 1:
        isValid = validateConfirmation();
        break;
      case 2:
        isValid = validateCredentials();
        break;
      default:
        isValid = false;
    }

    if (isValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setCurrentPage('signup');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrors({});

    try {
      const userData = {
        ghanaCardNumber: formData.ghanaCardNumber,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        username: formData.username,
        password: formData.password
      };

      const result = await register(userData);

      if (result.success) {
        toast.success('Account created successfully! Welcome to Emerald Capital.');
        setTimeout(() => {
          if (onNavigate) {
            onNavigate('/dashboard');
          }
        }, 1500);
      } else {
        toast.error(result.message || 'Registration failed. Please try again.');
        setErrors({
          general: result.message || 'Registration failed. Please try again.'
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
  };

  const handleCustomerService = () => {
    toast.info('Customer service chat coming soon!');
  };

  const Logo = ({ className = '' }) => (
    <div className={`flex items-center ${className}`}>
      <div className="w-10 h-8 bg-red-600 mr-3 relative rounded-sm">
        <div className="absolute top-1 left-1 right-1 h-1.5 bg-white rounded-sm"></div>
        <div className="absolute top-3.5 left-1 right-1 h-1.5 bg-white rounded-sm"></div>
      </div>
      <div className="text-gray-800 text-lg font-bold leading-tight">
        Emerald<br />
        <span className="text-blue-600 font-normal">Capital</span>
      </div>
    </div>
  );

  const ProgressSteps = () => (
    <div className="flex justify-between mb-10 relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
      {steps.map((step, index) => (
        <div key={step.number} className="flex flex-col items-center gap-2 relative z-10 flex-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              index < currentStep
                ? 'bg-green-600 text-white'
                : index === currentStep
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {index < currentStep ? <Check size={16} /> : step.number}
          </div>
          <div
            className={`text-xs ${
              index === currentStep ? 'text-red-600 font-semibold' : 'text-gray-500'
            } text-center`}
          >
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );

  const TermsModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity ${
        showTermsModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setShowTermsModal(false)}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative m-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-10">
          <div className="flex items-center mb-8 relative">
            <Logo />
            <h2 className="text-2xl font-semibold text-gray-800 ml-4">Terms & Conditions</h2>
            <button
              className="absolute right-0 top-0 text-gray-500 text-2xl bg-none border-none cursor-pointer"
              onClick={() => setShowTermsModal(false)}
            >
              <X size={28} />
            </button>
          </div>

          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-lg text-gray-800 mb-3">
                <span className="text-red-600">Privacy</span> Policy
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                At Mutual Trust Microfinance Bank Limited, one of our main priorities is the privacy 
                of our visitors. This Privacy Policy document contains types of information that is 
                collected and recorded and how we use it.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-gray-800 mb-3">Information We Collect</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We collect personal information including but not limited to your name, contact details, 
                Ghana Card, identification documents, and financial information necessary for account 
                creation and management.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-gray-800 mb-3">How We Use Your Information</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your information is used to verify your identity, process transactions, prevent fraud, 
                comply with regulatory requirements, and provide you with banking services.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg text-gray-800 mb-3">Data Security</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We implement industry-standard security measures to protect your personal information 
                from unauthorized access, disclosure, or misuse.
              </p>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={e => setAgreeTerms(e.target.checked)}
                className="w-5 h-5 text-red-600 mt-0.5"
              />
              <label htmlFor="agreeTerms" className="text-gray-700 text-sm cursor-pointer">
                I Agree to the Terms & Conditions and Privacy Policy
              </label>
            </div>

            <button
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                agreeTerms
                  ? 'bg-red-600 text-white hover:bg-red-700 hover:transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-300'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!agreeTerms}
              onClick={() => {
                setShowTermsModal(false);
                setCurrentPage('verification');
                setCurrentStep(0);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const IdentityStep = () => (
    <div>
      <h1 className="text-3xl text-gray-800 mb-2 font-semibold">Verify Ghana Card</h1>
      <p className="text-gray-500 text-base mb-8">Enter your Ghana Card details</p>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">Ghana Card Number</label>
        <input
          type="text"
          value={formData.ghanaCardNumber}
          onChange={e => handleInputChange('ghanaCardNumber', e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
          placeholder="GHA-XXXXXXXXX-X"
          disabled={isSubmitting}
        />
        {errors.ghanaCardNumber && <div className="text-red-600 text-sm mt-1">{errors.ghanaCardNumber}</div>}
      </div>

      <div className="bg-gradient-to-br from-blue-800 to-purple-600 text-white p-5 rounded-xl mb-6">
        <h4 className="text-base mb-3">Why we need your Ghana Card</h4>
        <p className="text-sm opacity-90 leading-relaxed">Ghana Card is the official national identification</p>
        <p className="text-sm opacity-90 leading-relaxed">We use it to verify your identity and comply with regulations</p>
      </div>
    </div>
  );

  const ConfirmStep = () => (
    <div>
      <h1 className="text-3xl text-gray-800 mb-2 font-semibold">Confirm Information</h1>
      <p className="text-gray-500 text-base mb-8">Please verify your details</p>

      <div className="mb-5">
        <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={e => handleInputChange('fullName', e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
          placeholder="Enter your full name"
          disabled={isSubmitting}
        />
        {errors.fullName && <div className="text-red-600 text-sm mt-1">{errors.fullName}</div>}
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={e => handleInputChange('phone', e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
          placeholder="Enter phone number"
          disabled={isSubmitting}
        />
        {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={e => handleInputChange('email', e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
          placeholder="Enter email address"
          disabled={isSubmitting}
        />
        {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">Residential Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={e => handleInputChange('address', e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
          placeholder="Enter your address"
          disabled={isSubmitting}
        />
        {errors.address && <div className="text-red-600 text-sm mt-1">{errors.address}</div>}
      </div>
    </div>
  );

  const CredentialsStep = () => (
    <div>
      <h1 className="text-3xl text-gray-800 mb-2 font-semibold">Create Credentials</h1>
      <p className="text-gray-500 text-base mb-8">Set up your login details</p>

      {errors.general && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-5">
          {errors.general}
        </div>
      )}

      <div className="mb-5">
        <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
        <input
          type="text"
          value={formData.username}
          onChange={e => handleInputChange('username', e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
          placeholder="Choose a username"
          disabled={isSubmitting}
        />
        {errors.username && <div className="text-red-600 text-sm mt-1">{errors.username}</div>}
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={e => handleInputChange('password', e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
          placeholder="Create a password"
          disabled={isSubmitting}
        />
        {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={e => handleInputChange('confirmPassword', e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100"
          placeholder="Confirm your password"
          disabled={isSubmitting}
        />
        {errors.confirmPassword && <div className="text-red-600 text-sm mt-1">{errors.confirmPassword}</div>}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <IdentityStep />;
      case 1:
        return <ConfirmStep />;
      case 2:
        return <CredentialsStep />;
      default:
        return <IdentityStep />;
    }
  };

  return (
    <>
      {/* Show loading spinner when submitting */}
      {isSubmitting && <SignupLoadingSpinner />}
      
      <div className="h-screen bg-white flex overflow-hidden">
        <div className="flex-1 p-14 flex flex-col justify-center max-w-lg overflow-y-auto">
          {currentPage === 'signup' ? (
            <div>
              <Logo className="mb-10" />
              
              <h1 className="text-3xl text-gray-800 mb-2 font-semibold">Do you have an Account with Us?</h1>
              <p className="text-gray-500 text-base mb-10"></p>

              <button
                className="w-full py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-semibold text-lg mb-4 transition-all hover:border-red-600 hover:text-red-600"
                onClick={() => setShowTermsModal(true)}
              >
                Yes, I already Have an Account
              </button>
              
              <button
                className="w-full py-4 bg-red-600 text-white rounded-xl font-semibold text-lg mb-4 transition-all hover:bg-red-700 hover:transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-300"
                onClick={() => setShowTermsModal(true)}
              >
                No, I'm ready to Onboard
              </button>

              <div className="text-center text-gray-700 text-sm mt-5">
                <button 
                  onClick={() => onNavigate && onNavigate('/login')}
                  className="text-red-600 bg-transparent border-none font-medium hover:underline cursor-pointer"
                >
                  Go Back to Login
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Logo className="mb-10" />
              <ProgressSteps />
              {renderStepContent()}
              
              <div className="flex gap-4 mt-8">
                <button
                  className="flex-1 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-semibold text-lg transition-all hover:border-gray-400"
                  onClick={handleBack}
                  disabled={isSubmitting}
                >
                  ← Back
                </button>
                <button
                  className={`flex-[2] py-4 rounded-xl font-semibold text-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-red-700 hover:transform hover:-translate-y-0.5'
                  }`}
                  onClick={handleProceed}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating Account...' : 
                   currentStep === steps.length - 1 ? 'Create Account' : 'Proceed'}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 bg-gray-100 flex items-center justify-center relative border-l border-gray-200 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop"
            alt="Happy customer"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-8 right-8 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-2xl shadow-red-300 cursor-pointer transition-transform hover:scale-110"
            onClick={handleCustomerService}
          >
            <Headphones size={24} />
          </div>
        </div>

        <TermsModal />
      </div>
    </>
  );
};

export default SignupPage;