import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Lock, Eye, EyeOff, LogIn, Shield,
  Loader, AlertCircle, Check, User,
  PenTool, BarChart3, TrendingUp, Zap, Globe,
  Sparkles, Server, Cpu, ShieldCheck, Key,
  ChevronRight, Database, Clock
} from 'lucide-react';

// Get the API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://emerald-capital-backend.onrender.com";

// Enhanced Bubble Component
const BubbleParticle = React.memo(({ 
  id, 
  initialX, 
  initialY, 
  size, 
  speed, 
  delay, 
  color, 
  isInteractive = false,
  onBubbleClick 
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [velocity, setVelocity] = useState({ 
    x: (Math.random() - 0.5) * 0.5, 
    y: -Math.random() * 0.8 - 0.2 
  });
  const [opacity, setOpacity] = useState(0.2);
  const [scale, setScale] = useState(0);
  const bubbleRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    const entranceTimer = setTimeout(() => {
      setScale(1);
      setOpacity(0.2);
    }, delay * 1000);

    // Floating animation
    const updatePosition = () => {
      setPosition(prev => ({
        x: prev.x + velocity.x,
        y: prev.y + velocity.y
      }));

      // Boundary collision
      if (position.x <= 0 || position.x >= 100) {
        setVelocity(prev => ({ ...prev, x: -prev.x * 0.8 }));
      }
      if (position.y <= -10) {
        setPosition({ x: Math.random() * 100, y: 110 });
      }

      // Random movement variation
      if (Math.random() > 0.98) {
        setVelocity(prev => ({
          x: prev.x + (Math.random() - 0.5) * 0.2,
          y: prev.y + (Math.random() - 0.5) * 0.1
        }));
      }
    };

    const animationInterval = setInterval(updatePosition, 50);
    
    // Pulsing effect
    const pulseInterval = setInterval(() => {
      setOpacity(prev => Math.min(0.3, Math.max(0.15, prev + (Math.random() - 0.5) * 0.05)));
    }, 2000);

    return () => {
      clearTimeout(entranceTimer);
      clearInterval(animationInterval);
      clearInterval(pulseInterval);
    };
  }, [delay, position.x, position.y, velocity]);

  const handleClick = () => {
    if (!isInteractive || !onBubbleClick) return;
    onBubbleClick(id);
  };

  const gradientColors = {
    emerald: 'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.1), transparent 70%)',
    teal: 'radial-gradient(circle at 30% 30%, rgba(20, 184, 166, 0.3), rgba(20, 184, 166, 0.1), transparent 70%)',
    cyan: 'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.3), rgba(6, 182, 212, 0.1), transparent 70%)',
    blue: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1), transparent 70%)'
  };

  return (
    <div
      ref={bubbleRef}
      onClick={handleClick}
      className={`absolute rounded-full ${isInteractive ? 'cursor-pointer hover:opacity-40' : 'cursor-default'} transition-all duration-700 ease-out`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: gradientColors[color] || gradientColors.emerald,
        opacity,
        transform: `scale(${scale})`,
        filter: `blur(${size / 20}px)`,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 2s ease',
      }}
    />
  );
});

export default function AdminBlogLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [shakeError, setShakeError] = useState(false);
  const [inputFocus, setInputFocus] = useState({ username: false, password: false });
  const [bubbles, setBubbles] = useState([]);
  const [particleCount, setParticleCount] = useState(25);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Initialize bubbles
  useEffect(() => {
    const initializeBubbles = () => {
      const newBubbles = [];
      const colors = ['emerald', 'teal', 'cyan', 'blue'];
      
      for (let i = 0; i < particleCount; i++) {
        newBubbles.push({
          id: i,
          initialX: Math.random() * 100,
          initialY: 100 + Math.random() * 20,
          size: Math.random() * 40 + 20,
          speed: Math.random() * 0.5 + 0.2,
          delay: Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          isInteractive: Math.random() > 0.7
        });
      }
      
      setBubbles(newBubbles);
    };

    initializeBubbles();

    const handleResize = () => {
      const width = window.innerWidth;
      const newCount = Math.min(30, Math.floor(width / 40));
      setParticleCount(newCount);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [particleCount]);

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
    setShakeError(false);
  };

  const triggerErrorAnimation = () => {
    setShakeError(true);
    setTimeout(() => setShakeError(false), 500);
  };

  // FIXED: Authentication handler without custom headers
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please enter both username and password');
      triggerErrorAnimation();
      return;
    }
    
    setLoading(true);
    setError('');
    setSuccess(false);

    console.log('🔐 Authentication attempt:', formData.username);

    try {
      // Use only standard headers to avoid CORS issues
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          // Removed custom headers to avoid CORS preflight issues
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
        mode: 'cors', // Explicitly set CORS mode
        credentials: 'omit' // Don't send cookies unless needed
      });

      // Check if response is OK
      if (!response.ok) {
        // Try to parse error response
        let errorMessage = 'Authentication failed';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          // If response is not JSON, use status text
          errorMessage = response.statusText || errorMessage;
        }
        
        // Handle specific status codes
        if (response.status === 401) {
          errorMessage = 'Invalid username or password';
        } else if (response.status === 403) {
          errorMessage = 'Access denied. Admin privileges required.';
        } else if (response.status === 404) {
          errorMessage = 'Authentication endpoint not found';
        } else if (response.status >= 500) {
          errorMessage = 'Server error. Please try again later.';
        }
        
        throw new Error(errorMessage);
      }

      // Parse successful response
      const responseData = await response.json();
      
      if (responseData.success) {
        const token = responseData.data?.tokens?.access || responseData.token;
        const userData = responseData.data?.user || responseData.user;
        
        if (!token) {
          throw new Error('Authentication token missing in response');
        }

        // Store credentials
        localStorage.setItem('adminAuthToken', token);
        localStorage.setItem('adminUser', JSON.stringify({
          ...userData,
          username: formData.username,
          role: 'admin',
          loginTime: new Date().toISOString()
        }));
        
        console.log('✅ Login successful:', formData.username);
        
        // Success animation
        setSuccess(true);
        
        // Redirect after delay
        setTimeout(() => {
          navigate('/admin/blog/dashboard');
        }, 1500);
        
      } else {
        setError(responseData.message || 'Authentication failed');
        triggerErrorAnimation();
      }
    } catch (err) {
      console.error('🔴 Authentication error:', err.message);
      
      // Handle specific error types
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Network error. Please check your internet connection and try again.');
      } else if (err.message.includes('CORS')) {
        setError('Cross-origin request blocked. Please contact support.');
      } else {
        setError(err.message || 'Authentication failed. Please try again.');
      }
      
      triggerErrorAnimation();
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setFormData({ username: '', password: '' });
    setError('');
    setShowPassword(false);
    setShakeError(false);
  };

  // Handle bubble click
  const handleBubbleClick = (bubbleId) => {
    console.log('Bubble clicked:', bubbleId);
    // Optional: Add bubble click effects
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex relative overflow-hidden">
      
      {/* Bubble Animation Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated bubbles */}
        {bubbles.map(bubble => (
          <BubbleParticle
            key={bubble.id}
            {...bubble}
            onBubbleClick={handleBubbleClick}
          />
        ))}
        
        {/* Background gradients */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-emerald-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5 bg-[size:100px_100px] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-0 items-center z-10 p-4 lg:p-8">
        
        {/* LEFT SIDE - Branding */}
        <div className="hidden lg:flex flex-col justify-center p-12 xl:p-16 space-y-12 backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
          
          {/* Logo Section */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative w-40 h-40 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl flex items-center justify-center shadow-2xl border border-emerald-500/20 p-8">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 animate-gradient-move"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Database className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-black bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent tracking-tight">
                    CONTENT HUB
                  </div>
                  <div className="text-sm font-bold text-gray-400 mt-2">v2.1.4</div>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">ENTERPRISE CMS</span>
              </div>
              <h1 className="text-5xl xl:text-6xl font-black text-white mb-6 leading-tight">
                Secure
                <span className="block text-3xl xl:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mt-4 animate-gradient">
                  Admin Portal
                </span>
              </h1>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Platform Features
            </h3>
            
            {[
              {
                icon: PenTool,
                title: "Smart Editor",
                desc: "AI-powered content creation with real-time collaboration",
                color: "emerald"
              },
              {
                icon: BarChart3,
                title: "Live Analytics",
                desc: "Real-time performance tracking and insights dashboard",
                color: "teal"
              },
              {
                icon: ShieldCheck,
                title: "Military Security",
                desc: "Bank-grade encryption with multi-factor authentication",
                color: "blue"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="relative flex items-start gap-5">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color === 'emerald' ? 'teal' : feature.color}-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-emerald-500/50 transition-colors`}>
                    <feature.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-emerald-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Login Form */}
        <div className="flex items-center justify-center p-6 lg:p-12 min-h-screen lg:min-h-0">
          <div className="w-full max-w-lg" ref={formRef}>
            
            {/* Mobile Header */}
            <div className="lg:hidden mb-10 text-center">
              <div className="relative inline-block mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-emerald-500/20 p-4 flex items-center justify-center">
                  <Lock className="w-12 h-12 text-emerald-400" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-white mb-2">Secure Portal</h2>
              <p className="text-gray-400 font-medium">Enterprise Authentication</p>
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-emerald-400">ENCRYPTED</span>
              </div>
            </div>

            {/* Login Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/10">
                
                {/* Header */}
                <div className="text-center mb-10 relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-3xl shadow-xl border border-emerald-500/30 flex items-center justify-center">
                        <Lock className="w-10 h-10 text-emerald-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-16">
                    <h2 className="text-2xl font-black text-white mb-3">
                      Admin Authentication
                    </h2>
                    <p className="text-gray-400 font-medium">
                      Please enter your credentials
                    </p>
                  </div>
                </div>

                {/* Success State */}
                {success && (
                  <div className="mb-6 p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl animate-fade-in">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Check className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-emerald-400 text-lg mb-2">Access Granted</h4>
                        <p className="text-sm text-emerald-300/80 font-semibold">Redirecting to dashboard...</p>
                        <div className="w-full bg-emerald-500/20 h-1 mt-3 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full animate-progress"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <div className={`mb-6 p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl ${shakeError ? 'animate-shake' : 'animate-fade-in'}`}>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <AlertCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-red-400 text-lg mb-2">Authentication Failed</h4>
                        <p className="text-sm text-red-300/80 font-semibold">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Username Field */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-gray-300 mb-4 uppercase tracking-widest">
                      Username
                    </label>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl transition-all duration-500 ${
                        inputFocus.username ? 'opacity-10 blur-sm' : 'opacity-0'
                      }`}></div>
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        onFocus={() => setInputFocus(prev => ({ ...prev, username: true }))}
                        onBlur={() => setInputFocus(prev => ({ ...prev, username: false }))}
                        required
                        disabled={loading || success}
                        className="w-full pl-14 pr-5 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white/10 disabled:opacity-50 font-semibold text-white placeholder:text-gray-500 transition-all duration-300"
                        placeholder="Enter username"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-gray-300 mb-4 uppercase tracking-widest">
                      Password
                    </label>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl transition-all duration-500 ${
                        inputFocus.password ? 'opacity-10 blur-sm' : 'opacity-0'
                      }`}></div>
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onFocus={() => setInputFocus(prev => ({ ...prev, password: true }))}
                        onBlur={() => setInputFocus(prev => ({ ...prev, password: false }))}
                        required
                        disabled={loading || success}
                        className="w-full pl-14 pr-14 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white/10 disabled:opacity-50 font-semibold text-white placeholder:text-gray-500 transition-all duration-300"
                        placeholder="Enter password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={loading || success}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-400 disabled:opacity-50 transition-colors p-2"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-8">
                    <button
                      type="button"
                      onClick={clearForm}
                      disabled={loading || success}
                      className="flex-1 py-5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl font-bold uppercase text-sm tracking-wider transition-all duration-300 disabled:opacity-50 hover:shadow-lg border-2 border-white/10 hover:border-emerald-500/30"
                    >
                      Clear
                    </button>
                    
                    <button
                      type="submit"
                      disabled={loading || success || !formData.username.trim() || !formData.password.trim()}
                      className="flex-1 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-bold uppercase text-sm tracking-wider shadow-2xl hover:shadow-emerald-500/25 disabled:opacity-50 flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Button shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      
                      {loading ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>Authenticating</span>
                        </>
                      ) : success ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Verified</span>
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

                {/* Footer */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="text-center text-xs text-gray-500 space-y-2">
                    <div className="flex items-center justify-center gap-4">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                        Secure Connection
                      </span>
                      <span>•</span>
                      <span>End-to-end Encryption</span>
                    </div>
                    <div>
                      © {new Date().getFullYear()} Enterprise CMS v2.1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes floatBubble {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.2;
          }
          33% { 
            transform: translateY(-30px) translateX(10px) rotate(5deg);
            opacity: 0.3;
          }
          66% { 
            transform: translateY(-60px) translateX(-10px) rotate(-5deg);
            opacity: 0.2;
          }
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
          }
        }
        
        .animate-float {
          animation: floatBubble 8s ease-in-out infinite;
        }
        
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-progress {
          animation: progress 2s ease-in-out;
        }
        
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 15s linear infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .bubble-particle {
            animation-duration: 12s !important;
          }
        }
      `}</style>
    </div>
  );
}