import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Headphones, X, Check, Shield, Lock, User, Phone, MapPin, Building, Eye, EyeOff, Calendar, Mail, IdCard } from 'lucide-react';
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

// Create stable input components outside the main component
const InputField = React.memo(({ 
  label, 
  type = 'text', 
  defaultValue,
  onChange,
  error, 
  placeholder, 
  disabled, 
  autoComplete,
  icon: Icon,
  optional = false,
  inputRef
}) => {
  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-3 flex items-center gap-2">
        {Icon && <Icon size={16} className="text-gray-500" />}
        {label}
        {optional && <span className="text-gray-400 text-sm font-normal">(Optional)</span>}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type={type}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={`w-full p-4 border-2 rounded-xl text-base transition-all duration-200 bg-white focus:bg-white focus:ring-3 outline-none ${
            error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
              : 'border-gray-300 focus:border-red-500 focus:ring-red-100'
          } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'hover:border-gray-400'}`}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
        />
      </div>
      {error && (
        <div className="text-red-600 text-sm mt-2 flex items-center gap-1">
          <X size={14} />
          {error}
        </div>
      )}
    </div>
  );
});

const SelectField = React.memo(({ 
  label, 
  defaultValue,
  onChange, 
  error, 
  disabled, 
  icon: Icon,
  children,
  inputRef
}) => {
  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-3 flex items-center gap-2">
        {Icon && <Icon size={16} className="text-gray-500" />}
        {label}
      </label>
      <select
        ref={inputRef}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={`w-full p-4 border-2 rounded-xl text-base transition-all duration-200 bg-white focus:bg-white focus:ring-3 outline-none ${
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
            : 'border-gray-300 focus:border-red-500 focus:ring-red-100'
        } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'hover:border-gray-400'}`}
        disabled={disabled}
      >
        {children}
      </select>
      {error && (
        <div className="text-red-600 text-sm mt-2 flex items-center gap-1">
          <X size={14} />
          {error}
        </div>
      )}
    </div>
  );
});

const PasswordField = React.memo(({ 
  label, 
  defaultValue,
  onChange, 
  error, 
  placeholder, 
  disabled,
  showPassword,
  onToggleVisibility,
  inputRef
}) => {
  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-3 flex items-center gap-2">
        <Lock size={16} className="text-gray-500" />
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type={showPassword ? "text" : "password"}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={`w-full p-4 border-2 rounded-xl text-base transition-all duration-200 bg-white focus:bg-white focus:ring-3 outline-none pr-12 ${
            error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
              : 'border-gray-300 focus:border-red-500 focus:ring-red-100'
          } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'hover:border-gray-400'}`}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="new-password"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onToggleVisibility}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && (
        <div className="text-red-600 text-sm mt-2 flex items-center gap-1">
          <X size={14} />
          {error}
        </div>
      )}
    </div>
  );
});

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
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Use refs to store form data without causing re-renders
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

  // Create refs for all inputs
  const inputRefs = useRef({
    ghanaCardNumber: React.createRef(),
    firstName: React.createRef(),
    middleName: React.createRef(),
    lastName: React.createRef(),
    sex: React.createRef(),
    dateOfBirth: React.createRef(),
    phone: React.createRef(),
    otherPhone: React.createRef(),
    email: React.createRef(),
    homeAddress: React.createRef(),
    region: React.createRef(),
    nextOfKinFirstName: React.createRef(),
    nextOfKinLastName: React.createRef(),
    nextOfKinPhone: React.createRef(),
    nextOfKinRelationship: React.createRef(),
    employmentType: React.createRef(),
    employer: React.createRef(),
    staffNumber: React.createRef(),
    employmentDate: React.createRef(),
    gradeLevel: React.createRef(),
    lastMonthPay: React.createRef(),
    username: React.createRef(),
    password: React.createRef(),
    confirmPassword: React.createRef()
  });

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

  // Employment types - must match backend validation
  const employmentTypes = useMemo(() => [
    { value: 'civilService', label: 'Civil Service', icon: Building },
    { value: 'police', label: 'Police', icon: Shield },
    { value: 'military', label: 'Military', icon: Shield },
    { value: 'immigration', label: 'Immigration', icon: Shield },
    { value: 'fire', label: 'Fire Service', icon: Shield },
    { value: 'education', label: 'Education', icon: User },
    { value: 'health', label: 'Health', icon: User },
    { value: 'private', label: 'Private Sector', icon: Building },
    { value: 'other', label: 'Other', icon: Building }
  ], []);

  // Next of Kin relationship types
  const relationshipTypes = useMemo(() => [
    { value: 'spouse', label: 'Spouse' },
    { value: 'parent', label: 'Parent' }, 
    { value: 'child', label: 'Child' },
    { value: 'sibling', label: 'Sibling' },
    { value: 'other', label: 'Other' }
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

  // Calculate password strength
  useEffect(() => {
    if (!formDataRef.current.password) {
      setPasswordStrength(0);
      return;
    }

    let strength = 0;
    if (formDataRef.current.password.length >= 8) strength += 1;
    if (/[a-z]/.test(formDataRef.current.password)) strength += 1;
    if (/[A-Z]/.test(formDataRef.current.password)) strength += 1;
    if (/[0-9]/.test(formDataRef.current.password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(formDataRef.current.password)) strength += 1;

    setPasswordStrength(strength);
  }, [formDataRef.current.password]);

  const steps = useMemo(() => [
    { 
      number: 1, 
      label: 'Personal Info', 
      component: 'personal',
      icon: User,
      description: 'Your basic information'
    },
    { 
      number: 2, 
      label: 'Next of Kin', 
      component: 'nextOfKin',
      icon: User,
      description: 'Emergency contact'
    },
    { 
      number: 3, 
      label: 'Employment', 
      component: 'employment',
      icon: Building,
      description: 'Work details'
    },
    { 
      number: 4, 
      label: 'Security', 
      component: 'credentials',
      icon: Lock,
      description: 'Login credentials'
    }
  ], []);

  // Simple input handler that updates ref without causing re-renders
  const handleInputChange = useCallback((field, value) => {
    formDataRef.current[field] = value;
    
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  }, [errors]);

  // Create stable handler functions
  const createChangeHandler = useCallback((field) => {
    return (value) => handleInputChange(field, value);
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
    
    if (formData.employmentType && formData.employmentType !== 'other' && !formData.employer.trim()) {
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
      
      // Format nextOfKin as an array WITHOUT phone field
      const nextOfKinArray = (formData.nextOfKinFirstName.trim() && formData.nextOfKinLastName.trim()) ? [
        {
          firstName: formData.nextOfKinFirstName.trim(),
          lastName: formData.nextOfKinLastName.trim(),
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
        nextOfKin: nextOfKinArray,
        nextOfKinPhone: formData.nextOfKinPhone.trim(),
        employmentType: formData.employmentType ? [formData.employmentType] : [],
        employer: formData.employer.trim() || undefined,
        staffNumber: formData.staffNumber.trim() || undefined,
        employmentDate: formData.employmentDate || undefined,
        gradeLevel: formData.gradeLevel.trim() || undefined,
        lastMonthPay: formData.lastMonthPay || undefined,
        username: formData.username.trim(),
        password: formData.password,
        agreementConfirmed: agreeTerms
      };

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
      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl mr-3 relative flex items-center justify-center shadow-lg">
        <div className="text-white font-bold text-lg">EC</div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
      </div>
      <div className="text-gray-800 text-xl font-bold leading-tight">
        Emerald<br />
        <span className="text-emerald-600 font-semibold text-lg">Capital</span>
      </div>
    </div>
  );

  const ProgressSteps = () => (
    <div className="mb-8 lg:mb-10">
      <div className="flex justify-between relative mb-4">
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center gap-3 relative z-10 flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                    : index === currentStep
                    ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-200 scale-110'
                    : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                }`}
              >
                {index < currentStep ? <Check size={16} /> : <StepIcon size={16} />}
              </div>
              <div className="text-center">
                <div
                  className={`text-xs font-medium transition-colors ${
                    index === currentStep ? 'text-red-600' : index < currentStep ? 'text-green-600' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </div>
                <div className="text-xs text-gray-400 mt-1 hidden lg:block">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-600 font-medium">
          Step {currentStep + 1} of {steps.length}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {steps[currentStep].description}
        </div>
      </div>
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
        <div className="p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Logo />
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 ml-4">Terms & Conditions</h2>
            </div>
            <button
              className="text-gray-500 hover:text-gray-700 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              onClick={() => setShowTermsModal(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                <Shield size={20} />
                Privacy Policy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                At Emerald Capital Microfinance Bank Limited, one of our main priorities is the privacy 
                of our visitors. This Privacy Policy document contains types of information that is 
                collected and recorded and how we use it.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Information We Collect</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We collect personal information including but not limited to your name, contact details, 
                  Ghana Card, identification documents, and financial information necessary for account 
                  creation and management.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How We Use Your Information</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your information is used to verify your identity, process transactions, prevent fraud, 
                  comply with regulatory requirements, and provide you with banking services.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Data Security</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We implement industry-standard security measures to protect your personal information 
                  from unauthorized access, disclosure, or misuse.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={e => setAgreeTerms(e.target.checked)}
                  className="w-5 h-5 text-red-600 mt-0.5 rounded focus:ring-2 focus:ring-red-500"
                />
                <label htmlFor="agreeTerms" className="text-gray-700 text-sm cursor-pointer flex-1">
                  I Agree to the Terms & Conditions and Privacy Policy. I understand that Emerald Capital 
                  will process my information in accordance with these terms.
                </label>
              </div>
            </div>

            <button
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                agreeTerms
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-2xl hover:shadow-red-300 transform hover:-translate-y-0.5'
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
              <Check size={20} />
              Continue to Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const PersonalInfoStep = () => (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <User className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Personal Information</h1>
        <p className="text-gray-500">Enter your personal details to get started</p>
      </div>

      <div className="space-y-1">
        <InputField
          label="Ghana Card Number"
          defaultValue={formDataRef.current.ghanaCardNumber}
          onChange={handlers.ghanaCardNumber}
          error={errors.ghanaCardNumber}
          placeholder="GHA-XXXXXXXXX-X"
          disabled={isSubmitting}
          icon={IdCard}
          inputRef={inputRefs.current.ghanaCardNumber}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField
            label="First Name"
            defaultValue={formDataRef.current.firstName}
            onChange={handlers.firstName}
            error={errors.firstName}
            placeholder="First name"
            disabled={isSubmitting}
            autoComplete="given-name"
            inputRef={inputRefs.current.firstName}
          />
          <InputField
            label="Middle Name"
            defaultValue={formDataRef.current.middleName}
            onChange={handlers.middleName}
            placeholder="Middle name"
            disabled={isSubmitting}
            autoComplete="additional-name"
            optional
            inputRef={inputRefs.current.middleName}
          />
          <InputField
            label="Last Name"
            defaultValue={formDataRef.current.lastName}
            onChange={handlers.lastName}
            error={errors.lastName}
            placeholder="Last name"
            disabled={isSubmitting}
            autoComplete="family-name"
            inputRef={inputRefs.current.lastName}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            label="Gender"
            defaultValue={formDataRef.current.sex}
            onChange={handlers.sex}
            error={errors.sex}
            disabled={isSubmitting}
            inputRef={inputRefs.current.sex}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </SelectField>
          
          <InputField
            label="Date of Birth"
            type="date"
            defaultValue={formDataRef.current.dateOfBirth}
            onChange={handlers.dateOfBirth}
            error={errors.dateOfBirth}
            disabled={isSubmitting}
            icon={Calendar}
            inputRef={inputRefs.current.dateOfBirth}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Phone Number"
            type="tel"
            defaultValue={formDataRef.current.phone}
            onChange={handlers.phone}
            error={errors.phone}
            placeholder="0241234567"
            disabled={isSubmitting}
            icon={Phone}
            autoComplete="tel"
            inputRef={inputRefs.current.phone}
          />
          <InputField
            label="Other Phone"
            type="tel"
            defaultValue={formDataRef.current.otherPhone}
            onChange={handlers.otherPhone}
            placeholder="0241234567"
            disabled={isSubmitting}
            autoComplete="tel"
            optional
            inputRef={inputRefs.current.otherPhone}
          />
        </div>

        <InputField
          label="Email Address"
          type="email"
          defaultValue={formDataRef.current.email}
          onChange={handlers.email}
          error={errors.email}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
          icon={Mail}
          autoComplete="email"
          inputRef={inputRefs.current.email}
        />

        <InputField
          label="Home Address"
          defaultValue={formDataRef.current.homeAddress}
          onChange={handlers.homeAddress}
          error={errors.homeAddress}
          placeholder="Enter your complete home address"
          disabled={isSubmitting}
          icon={MapPin}
          autoComplete="street-address"
          inputRef={inputRefs.current.homeAddress}
        />

        <SelectField
          label="Region"
          defaultValue={formDataRef.current.region}
          onChange={handlers.region}
          error={errors.region}
          disabled={isSubmitting}
          icon={MapPin}
          inputRef={inputRefs.current.region}
        >
          <option value="">Select your region</option>
          {ghanaRegions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </SelectField>
      </div>
    </div>
  );

  const NextOfKinStep = () => (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <User className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Next of Kin Information</h1>
        <p className="text-gray-500">Provide emergency contact details</p>
      </div>

      <div className="space-y-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="First Name"
            defaultValue={formDataRef.current.nextOfKinFirstName}
            onChange={handlers.nextOfKinFirstName}
            error={errors.nextOfKinFirstName}
            placeholder="First name"
            disabled={isSubmitting}
            autoComplete="given-name"
            inputRef={inputRefs.current.nextOfKinFirstName}
          />
          <InputField
            label="Last Name"
            defaultValue={formDataRef.current.nextOfKinLastName}
            onChange={handlers.nextOfKinLastName}
            error={errors.nextOfKinLastName}
            placeholder="Last name"
            disabled={isSubmitting}
            autoComplete="family-name"
            inputRef={inputRefs.current.nextOfKinLastName}
          />
        </div>

        <SelectField
          label="Relationship"
          defaultValue={formDataRef.current.nextOfKinRelationship}
          onChange={handlers.nextOfKinRelationship}
          error={errors.nextOfKinRelationship}
          disabled={isSubmitting}
          inputRef={inputRefs.current.nextOfKinRelationship}
        >
          <option value="">Select relationship</option>
          {relationshipTypes.map(relationship => (
            <option key={relationship.value} value={relationship.value}>
              {relationship.label}
            </option>
          ))}
        </SelectField>

        <InputField
          label="Phone Number"
          type="tel"
          defaultValue={formDataRef.current.nextOfKinPhone}
          onChange={handlers.nextOfKinPhone}
          error={errors.nextOfKinPhone}
          placeholder="0241234567"
          disabled={isSubmitting}
          icon={Phone}
          autoComplete="tel"
          inputRef={inputRefs.current.nextOfKinPhone}
        />
      </div>
    </div>
  );

  const EmploymentStep = () => (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Building className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Employment Information</h1>
        <p className="text-gray-500">Tell us about your work situation</p>
      </div>

      <div className="space-y-1">
        <SelectField
          label="Employment Type"
          defaultValue={formDataRef.current.employmentType}
          onChange={handlers.employmentType}
          error={errors.employmentType}
          disabled={isSubmitting}
          icon={Building}
          inputRef={inputRefs.current.employmentType}
        >
          <option value="">Select employment type</option>
          {employmentTypes.map(type => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </SelectField>

        {formDataRef.current.employmentType && formDataRef.current.employmentType !== 'other' && (
          <>
            <InputField
              label="Employer Name"
              defaultValue={formDataRef.current.employer}
              onChange={handlers.employer}
              error={errors.employer}
              placeholder="Enter employer name"
              disabled={isSubmitting}
              inputRef={inputRefs.current.employer}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Staff Number"
                defaultValue={formDataRef.current.staffNumber}
                onChange={handlers.staffNumber}
                placeholder="Staff number"
                disabled={isSubmitting}
                optional
                inputRef={inputRefs.current.staffNumber}
              />
              <InputField
                label="Employment Date"
                type="date"
                defaultValue={formDataRef.current.employmentDate}
                onChange={handlers.employmentDate}
                disabled={isSubmitting}
                icon={Calendar}
                optional
                inputRef={inputRefs.current.employmentDate}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Grade Level"
                defaultValue={formDataRef.current.gradeLevel}
                onChange={handlers.gradeLevel}
                placeholder="Grade level"
                disabled={isSubmitting}
                optional
                inputRef={inputRefs.current.gradeLevel}
              />
              <InputField
                label="Last Month Pay"
                type="number"
                defaultValue={formDataRef.current.lastMonthPay}
                onChange={handlers.lastMonthPay}
                placeholder="0.00"
                disabled={isSubmitting}
                optional
                inputRef={inputRefs.current.lastMonthPay}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );

  const CredentialsStep = () => (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Security Credentials</h1>
        <p className="text-gray-500">Create secure login details</p>
      </div>

      {errors.general && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 rounded-xl mb-6 flex items-center gap-2">
          <X size={16} />
          {errors.general}
        </div>
      )}

      <div className="space-y-1">
        <InputField
          label="Username"
          defaultValue={formDataRef.current.username}
          onChange={handlers.username}
          error={errors.username}
          placeholder="Choose a username"
          disabled={isSubmitting}
          autoComplete="username"
          inputRef={inputRefs.current.username}
        />

        <div>
          <PasswordField
            label="Password"
            defaultValue={formDataRef.current.password}
            onChange={handlers.password}
            error={errors.password}
            placeholder="Create a strong password"
            disabled={isSubmitting}
            showPassword={showPassword}
            onToggleVisibility={() => setShowPassword(!showPassword)}
            inputRef={inputRefs.current.password}
          />
          
          {/* Password Strength Indicator */}
          {formDataRef.current.password && (
            <div className="mt-3 mb-6">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Password Strength</span>
                <span className={passwordStrength < 3 ? 'text-red-500' : passwordStrength < 5 ? 'text-yellow-500' : 'text-green-500'}>
                  {passwordStrength < 3 ? 'Weak' : passwordStrength < 5 ? 'Good' : 'Strong'}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    passwordStrength < 3 ? 'bg-red-500' : passwordStrength < 5 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${(passwordStrength / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <PasswordField
          label="Confirm Password"
          defaultValue={formDataRef.current.confirmPassword}
          onChange={handlers.confirmPassword}
          error={errors.confirmPassword}
          placeholder="Confirm your password"
          disabled={isSubmitting}
          showPassword={showConfirmPassword}
          onToggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
          inputRef={inputRefs.current.confirmPassword}
        />
      </div>
    </div>
  );

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
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Panel - Form */}
        <div className="flex-1 p-6 lg:p-8 xl:p-12 flex flex-col justify-center max-w-4xl mx-auto w-full">
          {currentPage === 'signup' ? (
            <div className="text-center max-w-md mx-auto">
              <Logo className="mb-8 lg:mb-12 justify-center" />
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Join Emerald Capital</h1>
                <p className="text-gray-500 text-lg mb-8">Choose an option to continue your journey</p>

                <div className="space-y-4">
                  <button
                    className="w-full py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-semibold text-lg transition-all duration-200 hover:border-red-500 hover:text-red-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    onClick={handleExistingAccount}
                    disabled={isSubmitting}
                  >
                    <Check size={20} />
                    Yes, I already Have an Account
                  </button>
                  
                  <button
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-red-300 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    onClick={() => setShowTermsModal(true)}
                    disabled={isSubmitting}
                  >
                    <User size={20} />
                    No, I'm ready to Onboard
                  </button>
                </div>

                <div className="text-center text-gray-600 text-sm mt-6">
                  <button 
                    onClick={handleLoginRedirect}
                    className="text-red-600 bg-transparent border-none font-medium hover:underline cursor-pointer transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    ← Go Back to Login
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto w-full">
              <Logo className="mb-6" />
              <ProgressSteps />
              <div className="max-h-[60vh] overflow-y-auto pr-2">
                {renderStepContent()}
              </div>
              
              <div className="flex gap-4 mt-8 pt-4 border-t border-gray-200">
                <button
                  className="flex-1 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-semibold text-lg transition-all duration-200 hover:border-gray-400 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  onClick={handleBack}
                  disabled={isSubmitting}
                >
                  ← Back
                </button>
                <button
                  className={`flex-[2] py-4 rounded-xl font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 text-white'
                      : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-2xl hover:shadow-red-300 transform hover:-translate-y-1 active:translate-y-0'
                  }`}
                  onClick={handleProceed}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      {currentStep === steps.length - 1 ? (
                        <>
                          <Check size={20} />
                          Create Account
                        </>
                      ) : (
                        'Continue'
                      )}
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Graphics */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-red-600 to-red-700 items-center justify-center relative overflow-hidden">
          <div className="text-center p-8 max-w-md text-white relative z-10">
            <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl backdrop-blur-sm">
              <div className="text-white text-center">
                <div className="text-4xl font-bold mb-3">EC</div>
                <div className="text-xl font-semibold">Emerald Capital</div>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Start Your Financial Journey</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Join thousands of Ghanaians who trust Emerald Capital for secure banking, 
              competitive rates, and personalized service that grows with you.
            </p>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-white/80">Digital Banking</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-white/80">Secure</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0₵</div>
                  <div className="text-white/80">Account Fee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white rounded-full opacity-40 animate-ping"></div>

          <button
            className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center text-red-600 text-xl shadow-2xl cursor-pointer transition-transform hover:scale-110 border-none group"
            onClick={handleCustomerService}
            title="Contact Customer Service"
          >
            <Headphones size={28} className="group-hover:animate-bounce" />
          </button>
        </div>

        <TermsModal />
      </div>
    </>
  );
};

export default SignupPage;