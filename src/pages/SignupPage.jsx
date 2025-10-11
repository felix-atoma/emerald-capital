import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Headphones, X, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/CustomToast';

// Loading Spinner Component
const SignupLoadingSpinner = () => {
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

const SignupPage = () => {
  const { register, user } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  
  const [currentPage, setCurrentPage] = useState('signup');
  const [currentStep, setCurrentStep] = useState(0);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Use useRef for form data to prevent unnecessary re-renders
  const formDataRef = useRef({
    ghanaCardNumber: '',
    firstName: '',
    middleName: '',
    lastName: '',
    sex: '',
    dateOfBirth: '',
    phone: '',
    otherPhone: '',
    email: '',
    homeAddress: '',
    region: '',
    nextOfKinFirstName: '',
    nextOfKinLastName: '',
    nextOfKinPhone: '',
    nextOfKinRelationship: '',
    employmentType: '',
    employer: '',
    staffNumber: '',
    employmentDate: '',
    gradeLevel: '',
    lastMonthPay: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [formVersion, setFormVersion] = useState(0);

  // Updated Ghana regions to match backend expected format
  const ghanaRegions = useMemo(() => [
    'Greater Accra',
    'Ashanti',
    'Western',
    'Eastern',
    'Central',
    'Northern',
    'Upper East',
    'Upper West',
    'Volta',
    'Bono',
    'Bono East',
    'Ahafo',
    'Savannah',
    'North East',
    'Oti',
    'Western North'
  ], []);

  // Employment types
  const employmentTypes = useMemo(() => [
    'Government',
    'Private',
    'Self-Employed',
    'Unemployed',
    'Student',
    'Retired'
  ], []);

  // Next of Kin relationship types
  const relationshipTypes = useMemo(() => [
    'spouse',
    'parent', 
    'child',
    'sibling',
    'other'
  ], []);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const steps = useMemo(() => [
    { number: 1, label: 'Personal Info', component: 'personal' },
    { number: 2, label: 'Next of Kin', component: 'nextOfKin' },
    { number: 3, label: 'Employment', component: 'employment' },
    { number: 4, label: 'Credentials', component: 'credentials' }
  ], []);

  // Single optimized handler for all inputs
  const handleInputChange = useCallback((field, value) => {
    formDataRef.current[field] = value;
    
    // Only update errors if this field has an error
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
    
    // Force a re-render to update the input value
    setFormVersion(prev => prev + 1);
  }, [errors]);

  // Create stable handler functions
  const createChangeHandler = useCallback((field) => {
    return (e) => handleInputChange(field, e.target.value);
  }, [handleInputChange]);

  // Memoize all handlers
  const handlers = useMemo(() => ({
    ghanaCardNumber: createChangeHandler('ghanaCardNumber'),
    firstName: createChangeHandler('firstName'),
    middleName: createChangeHandler('middleName'),
    lastName: createChangeHandler('lastName'),
    sex: createChangeHandler('sex'),
    dateOfBirth: createChangeHandler('dateOfBirth'),
    phone: createChangeHandler('phone'),
    otherPhone: createChangeHandler('otherPhone'),
    email: createChangeHandler('email'),
    homeAddress: createChangeHandler('homeAddress'),
    region: createChangeHandler('region'),
    nextOfKinFirstName: createChangeHandler('nextOfKinFirstName'),
    nextOfKinLastName: createChangeHandler('nextOfKinLastName'),
    nextOfKinPhone: createChangeHandler('nextOfKinPhone'),
    nextOfKinRelationship: createChangeHandler('nextOfKinRelationship'),
    employmentType: createChangeHandler('employmentType'),
    employer: createChangeHandler('employer'),
    staffNumber: createChangeHandler('staffNumber'),
    employmentDate: createChangeHandler('employmentDate'),
    gradeLevel: createChangeHandler('gradeLevel'),
    lastMonthPay: createChangeHandler('lastMonthPay'),
    username: createChangeHandler('username'),
    password: createChangeHandler('password'),
    confirmPassword: createChangeHandler('confirmPassword')
  }), [createChangeHandler]);

  const validatePersonalInfo = () => {
    const formData = formDataRef.current;
    const newErrors = {};
    const ghanaCardRegex = /^GHA-\d{9}-\d{1}$/;
    const phoneRegex = /^0\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.ghanaCardNumber.trim()) {
      newErrors.ghanaCardNumber = 'Ghana Card number is required';
    } else if (!ghanaCardRegex.test(formData.ghanaCardNumber.trim())) {
      newErrors.ghanaCardNumber = 'Please enter a valid Ghana Card number (GHA-XXXXXXXXX-X)';
    }
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.sex) {
      newErrors.sex = 'Gender is required';
    }
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const today = new Date();
      const birthDate = new Date(formData.dateOfBirth);
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) newErrors.dateOfBirth = 'You must be at least 18 years old';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.homeAddress.trim()) {
      newErrors.homeAddress = 'Home address is required';
    }
    
    if (!formData.region) {
      newErrors.region = 'Region is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateNextOfKin = () => {
    const formData = formDataRef.current;
    const newErrors = {};
    const phoneRegex = /^0\d{9}$/;
    
    if (!formData.nextOfKinFirstName.trim()) {
      newErrors.nextOfKinFirstName = 'Next of kin first name is required';
    }
    
    if (!formData.nextOfKinLastName.trim()) {
      newErrors.nextOfKinLastName = 'Next of kin last name is required';
    }
    
    if (!formData.nextOfKinPhone.trim()) {
      newErrors.nextOfKinPhone = 'Next of kin phone number is required';
    } else if (!phoneRegex.test(formData.nextOfKinPhone.trim())) {
      newErrors.nextOfKinPhone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.nextOfKinRelationship) {
      newErrors.nextOfKinRelationship = 'Relationship is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmployment = () => {
    const formData = formDataRef.current;
    const newErrors = {};
    
    if (!formData.employmentType) {
      newErrors.employmentType = 'Employment type is required';
    }
    
    if (formData.employmentType !== 'Unemployed' && !formData.employer.trim()) {
      newErrors.employer = 'Employer name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCredentials = () => {
    const formData = formDataRef.current;
    const newErrors = {};
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (!usernameRegex.test(formData.username.trim())) {
      newErrors.username = 'Username must be 4-20 characters (letters, numbers, underscore only)';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must include uppercase, lowercase, and numbers';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    if (!isMounted || isSubmitting) return;
    
    let isValid = false;

    switch (currentStep) {
      case 0:
        isValid = validatePersonalInfo();
        break;
      case 1:
        isValid = validateNextOfKin();
        break;
      case 2:
        isValid = validateEmployment();
        break;
      case 3:
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
    } else {
      toast.error('Please fix the validation errors', 3000);
    }
  };

  const handleBack = () => {
    if (!isMounted || isSubmitting) return;
    
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setCurrentPage('signup');
    }
  };

  const handleSubmit = async () => {
    if (!isMounted || isSubmitting) return;
    
    setIsSubmitting(true);
    setErrors({});

    try {
      const formData = formDataRef.current;
      
      // Format nextOfKin as an array with phone field included
      const nextOfKinArray = (formData.nextOfKinFirstName.trim() && formData.nextOfKinLastName.trim()) ? [
        {
          firstName: formData.nextOfKinFirstName.trim(),
          lastName: formData.nextOfKinLastName.trim(),
          phone: formData.nextOfKinPhone.trim(), // Include phone in the array object
          relationship: formData.nextOfKinRelationship
        }
      ] : [];

      const userData = {
        sex: formData.sex,
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        middleName: formData.middleName.trim(),
        dateOfBirth: formData.dateOfBirth,
        phone: formData.phone.trim(),
        otherPhone: formData.otherPhone.trim(),
        ghanaCardNumber: formData.ghanaCardNumber.trim().toUpperCase(),
        email: formData.email.trim().toLowerCase(),
        homeAddress: formData.homeAddress.trim(),
        region: formData.region,
        nextOfKin: nextOfKinArray, // Send as array
        employmentType: formData.employmentType,
        employer: formData.employer.trim(),
        staffNumber: formData.staffNumber.trim(),
        employmentDate: formData.employmentDate,
        gradeLevel: formData.gradeLevel.trim(),
        lastMonthPay: formData.lastMonthPay,
        username: formData.username.trim(),
        password: formData.password
      };

      console.log('Submitting user data:', userData);

      const result = await register(userData);

      if (result && result.success) {
        toast.success('Account created successfully! Welcome to Emerald Capital.', 3000);
        setTimeout(() => {
          if (isMounted) {
            navigate('/dashboard', { replace: true });
          }
        }, 2000);
      } else {
        throw new Error(result?.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = error.message || 'Registration failed. Please try again.';
      toast.error(errorMessage, 4000);
      setErrors({
        general: errorMessage
      });
    } finally {
      if (isMounted) {
        setIsSubmitting(false);
      }
    }
  };

  const handleCustomerService = () => {
    toast.info('Connecting you to customer service...', 3000);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleExistingAccount = () => {
    toast.info('Redirecting to login page...', 2000);
    setTimeout(() => {
      navigate('/login');
    }, 1500);
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
    <div className="flex justify-between mb-8 lg:mb-10 relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
      {steps.map((step, index) => (
        <div key={step.number} className="flex flex-col items-center gap-2 relative z-10 flex-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
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
            className={`text-xs text-center transition-colors ${
              index === currentStep ? 'text-red-600 font-semibold' : 'text-gray-500'
            }`}
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
        <div className="p-6 lg:p-10">
          <div className="flex items-center mb-6 lg:mb-8 relative">
            <Logo />
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 ml-4">Terms & Conditions</h2>
            <button
              className="absolute right-0 top-0 text-gray-500 text-2xl bg-transparent border-none cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => setShowTermsModal(false)}
            >
              <X size={28} />
            </button>
          </div>

          <div className="mb-6 lg:mb-8">
            <div className="mb-4 lg:mb-6">
              <h3 className="text-lg text-gray-800 mb-3">
                <span className="text-red-600">Privacy</span> Policy
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                At Emerald Capital Microfinance Bank Limited, one of our main priorities is the privacy 
                of our visitors. This Privacy Policy document contains types of information that is 
                collected and recorded and how we use it.
              </p>
            </div>

            <div className="mb-4 lg:mb-6">
              <h3 className="text-lg text-gray-800 mb-3">Information We Collect</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We collect personal information including but not limited to your name, contact details, 
                Ghana Card, identification documents, and financial information necessary for account 
                creation and management.
              </p>
            </div>

            <div className="mb-4 lg:mb-6">
              <h3 className="text-lg text-gray-800 mb-3">How We Use Your Information</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your information is used to verify your identity, process transactions, prevent fraud, 
                comply with regulatory requirements, and provide you with banking services.
              </p>
            </div>

            <div className="mb-6 lg:mb-8">
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
                className="w-5 h-5 text-red-600 mt-0.5 rounded focus:ring-2 focus:ring-red-500"
              />
              <label htmlFor="agreeTerms" className="text-gray-700 text-sm cursor-pointer">
                I Agree to the Terms & Conditions and Privacy Policy
              </label>
            </div>

            <button
              className={`w-full py-3 lg:py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                agreeTerms
                  ? 'bg-red-600 text-white hover:bg-red-700 transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-300 active:translate-y-0'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!agreeTerms}
              onClick={() => {
                if (agreeTerms) {
                  setShowTermsModal(false);
                  setCurrentPage('verification');
                  setCurrentStep(0);
                  toast.success('Terms accepted! Starting registration process.', 2000);
                }
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const PersonalInfoStep = () => {
    const formData = formDataRef.current;
    return (
      <div>
        <h1 className="text-2xl lg:text-3xl text-gray-800 mb-2 font-semibold">Personal Information</h1>
        <p className="text-gray-500 text-base mb-6 lg:mb-8">Enter your personal details</p>

        <div className="mb-4 lg:mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">Ghana Card Number</label>
          <input
            type="text"
            value={formData.ghanaCardNumber}
            onChange={handlers.ghanaCardNumber}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            placeholder="GHA-XXXXXXXXX-X"
            disabled={isSubmitting}
            autoComplete="off"
            autoFocus={currentStep === 0}
          />
          {errors.ghanaCardNumber && <div className="text-red-600 text-sm mt-1">{errors.ghanaCardNumber}</div>}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 lg:mb-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={handlers.firstName}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              placeholder="First name"
              disabled={isSubmitting}
              autoComplete="given-name"
            />
            {errors.firstName && <div className="text-red-600 text-sm mt-1">{errors.firstName}</div>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Middle Name</label>
            <input
              type="text"
              value={formData.middleName}
              onChange={handlers.middleName}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              placeholder="Middle name"
              disabled={isSubmitting}
              autoComplete="additional-name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={handlers.lastName}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              placeholder="Last name"
              disabled={isSubmitting}
              autoComplete="family-name"
            />
            {errors.lastName && <div className="text-red-600 text-sm mt-1">{errors.lastName}</div>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 lg:mb-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Gender</label>
            <select
              value={formData.sex}
              onChange={handlers.sex}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              disabled={isSubmitting}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.sex && <div className="text-red-600 text-sm mt-1">{errors.sex}</div>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Date of Birth</label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={handlers.dateOfBirth}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              disabled={isSubmitting}
              max={new Date().toISOString().split('T')[0]}
            />
            {errors.dateOfBirth && <div className="text-red-600 text-sm mt-1">{errors.dateOfBirth}</div>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 lg:mb-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={handlers.phone}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              placeholder="0241234567"
              disabled={isSubmitting}
              autoComplete="tel"
            />
            {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Other Phone (Optional)</label>
            <input
              type="tel"
              value={formData.otherPhone}
              onChange={handlers.otherPhone}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              placeholder="0241234567"
              disabled={isSubmitting}
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="mb-4 lg:mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={handlers.email}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            placeholder="your.email@example.com"
            disabled={isSubmitting}
            autoComplete="email"
          />
          {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
        </div>

        <div className="mb-4 lg:mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">Home Address</label>
          <input
            type="text"
            value={formData.homeAddress}
            onChange={handlers.homeAddress}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            placeholder="Enter your complete home address"
            disabled={isSubmitting}
            autoComplete="street-address"
          />
          {errors.homeAddress && <div className="text-red-600 text-sm mt-1">{errors.homeAddress}</div>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">Region</label>
          <select
            value={formData.region}
            onChange={handlers.region}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            disabled={isSubmitting}
          >
            <option value="">Select your region</option>
            {ghanaRegions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          {errors.region && <div className="text-red-600 text-sm mt-1">{errors.region}</div>}
        </div>
      </div>
    );
  };

  const NextOfKinStep = () => {
    const formData = formDataRef.current;
    return (
      <div>
        <h1 className="text-2xl lg:text-3xl text-gray-800 mb-2 font-semibold">Next of Kin Information</h1>
        <p className="text-gray-500 text-base mb-6 lg:mb-8">Enter your next of kin details</p>

        <div className="grid grid-cols-2 gap-4 mb-4 lg:mb-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              value={formData.nextOfKinFirstName}
              onChange={handlers.nextOfKinFirstName}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              placeholder="First name"
              disabled={isSubmitting}
              autoComplete="given-name"
              autoFocus={currentStep === 1}
            />
            {errors.nextOfKinFirstName && <div className="text-red-600 text-sm mt-1">{errors.nextOfKinFirstName}</div>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              value={formData.nextOfKinLastName}
              onChange={handlers.nextOfKinLastName}
              className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
              placeholder="Last name"
              disabled={isSubmitting}
              autoComplete="family-name"
            />
            {errors.nextOfKinLastName && <div className="text-red-600 text-sm mt-1">{errors.nextOfKinLastName}</div>}
          </div>
        </div>

        <div className="mb-4 lg:mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">Relationship</label>
          <select
            value={formData.nextOfKinRelationship}
            onChange={handlers.nextOfKinRelationship}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            disabled={isSubmitting}
          >
            <option value="">Select relationship</option>
            {relationshipTypes.map(relationship => (
              <option key={relationship} value={relationship}>
                {relationship.charAt(0).toUpperCase() + relationship.slice(1)}
              </option>
            ))}
          </select>
          {errors.nextOfKinRelationship && <div className="text-red-600 text-sm mt-1">{errors.nextOfKinRelationship}</div>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.nextOfKinPhone}
            onChange={handlers.nextOfKinPhone}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            placeholder="0241234567"
            disabled={isSubmitting}
            autoComplete="tel"
          />
          {errors.nextOfKinPhone && <div className="text-red-600 text-sm mt-1">{errors.nextOfKinPhone}</div>}
        </div>
      </div>
    );
  };

  const EmploymentStep = () => {
    const formData = formDataRef.current;
    return (
      <div>
        <h1 className="text-2xl lg:text-3xl text-gray-800 mb-2 font-semibold">Employment Information</h1>
        <p className="text-gray-500 text-base mb-6 lg:mb-8">Enter your employment details</p>

        <div className="mb-4 lg:mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">Employment Type</label>
          <select
            value={formData.employmentType}
            onChange={handlers.employmentType}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            disabled={isSubmitting}
            autoFocus={currentStep === 2}
          >
            <option value="">Select employment type</option>
            {employmentTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.employmentType && <div className="text-red-600 text-sm mt-1">{errors.employmentType}</div>}
        </div>

        {formData.employmentType !== 'Unemployed' && (
          <>
            <div className="mb-4 lg:mb-5">
              <label className="block text-gray-700 text-sm font-medium mb-2">Employer Name</label>
              <input
                type="text"
                value={formData.employer}
                onChange={handlers.employer}
                className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
                placeholder="Enter employer name"
                disabled={isSubmitting}
              />
              {errors.employer && <div className="text-red-600 text-sm mt-1">{errors.employer}</div>}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 lg:mb-5">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Staff Number (Optional)</label>
                <input
                  type="text"
                  value={formData.staffNumber}
                  onChange={handlers.staffNumber}
                  className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
                  placeholder="Staff number"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Employment Date (Optional)</label>
                <input
                  type="date"
                  value={formData.employmentDate}
                  onChange={handlers.employmentDate}
                  className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
                  disabled={isSubmitting}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Grade Level (Optional)</label>
                <input
                  type="text"
                  value={formData.gradeLevel}
                  onChange={handlers.gradeLevel}
                  className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
                  placeholder="Grade level"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Last Month Pay (Optional)</label>
                <input
                  type="number"
                  value={formData.lastMonthPay}
                  onChange={handlers.lastMonthPay}
                  className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
                  placeholder="0.00"
                  disabled={isSubmitting}
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const CredentialsStep = () => {
    const formData = formDataRef.current;
    return (
      <div>
        <h1 className="text-2xl lg:text-3xl text-gray-800 mb-2 font-semibold">Create Account Credentials</h1>
        <p className="text-gray-500 text-base mb-6 lg:mb-8">Set up your login details</p>

        {errors.general && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-5">
            {errors.general}
          </div>
        )}

        <div className="mb-4 lg:mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={handlers.username}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            placeholder="Choose a username"
            disabled={isSubmitting}
            autoComplete="username"
            autoFocus={currentStep === 3}
          />
          {errors.username && <div className="text-red-600 text-sm mt-1">{errors.username}</div>}
        </div>

        <div className="mb-4 lg:mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={handlers.password}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            placeholder="Create a strong password"
            disabled={isSubmitting}
            autoComplete="new-password"
          />
          {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={handlers.confirmPassword}
            className="w-full p-3 lg:p-4 border-2 border-gray-200 rounded-xl text-base transition-all bg-gray-50 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            placeholder="Confirm your password"
            disabled={isSubmitting}
            autoComplete="new-password"
          />
          {errors.confirmPassword && <div className="text-red-600 text-sm mt-1">{errors.confirmPassword}</div>}
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep />;
      case 1:
        return <NextOfKinStep />;
      case 2:
        return <EmploymentStep />;
      case 3:
        return <CredentialsStep />;
      default:
        return <PersonalInfoStep />;
    }
  };

  return (
    <>
      {isSubmitting && <SignupLoadingSpinner />}
      
      <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 p-6 lg:p-8 xl:p-14 flex flex-col justify-center max-w-lg mx-auto w-full">
          {currentPage === 'signup' ? (
            <div>
              <Logo className="mb-8 lg:mb-10" />
              
              <h1 className="text-2xl lg:text-3xl text-gray-800 mb-2 font-semibold">Do you have an Account with Us?</h1>
              <p className="text-gray-500 text-base mb-8 lg:mb-10">Choose an option to continue</p>

              <button
                className="w-full py-3 lg:py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-semibold text-lg mb-4 transition-all duration-200 hover:border-red-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleExistingAccount}
                disabled={isSubmitting}
              >
                Yes, I already Have an Account
              </button>
              
              <button
                className="w-full py-3 lg:py-4 bg-red-600 text-white rounded-xl font-semibold text-lg mb-4 transition-all duration-200 hover:bg-red-700 transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-300 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setShowTermsModal(true)}
                disabled={isSubmitting}
              >
                No, I'm ready to Onboard
              </button>

              <div className="text-center text-gray-700 text-sm mt-5">
                <button 
                  onClick={handleLoginRedirect}
                  className="text-red-600 bg-transparent border-none font-medium hover:underline cursor-pointer transition-colors disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  Go Back to Login
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Logo className="mb-8 lg:mb-10" />
              <ProgressSteps />
              {renderStepContent()}
              
              <div className="flex gap-3 lg:gap-4 mt-6 lg:mt-8">
                <button
                  className="flex-1 py-3 lg:py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-semibold text-lg transition-all duration-200 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleBack}
                  disabled={isSubmitting}
                >
                  ← Back
                </button>
                <button
                  className={`flex-[2] py-3 lg:py-4 rounded-xl font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting
                      ? 'bg-gray-400 text-white'
                      : 'bg-red-600 text-white hover:bg-red-700 transform hover:-translate-y-0.5 active:translate-y-0'
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

        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50 to-purple-50 items-center justify-center relative border-l border-gray-200 overflow-hidden">
          <div className="text-center p-8 max-w-md">
            <div className="w-48 h-48 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-2">EC</div>
                <div className="text-lg font-semibold">Emerald Capital</div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Emerald Capital</h2>
            <p className="text-gray-600">
              Start your financial journey with us. Enjoy secure banking, competitive rates, 
              and personalized service tailored to your needs.
            </p>
          </div>

          <button
            className="absolute bottom-8 right-8 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-2xl shadow-red-300 cursor-pointer transition-transform hover:scale-110 border-none"
            onClick={handleCustomerService}
            title="Contact Customer Service"
          >
            <Headphones size={24} />
          </button>
        </div>

        <TermsModal />
      </div>
    </>
  );
};

export default SignupPage;