import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { newsletterAPI } from '../services/api';
import toast from "react-hot-toast";

toast.success("Form submitted successfully!");
toast.error("Something went wrong!");

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubscriptionStatus('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setSubscriptionStatus('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus('');

    try {
      const response = await newsletterAPI.subscribe({ email });
      
      if (response.data.success) {
        setSubscriptionStatus('Successfully subscribed to our newsletter!');
        setEmail('');
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubscriptionStatus('');
        }, 5000);
      }
    } catch (error) {
      // Handle different error cases
      if (error.response?.status === 400) {
        if (error.response?.data?.message?.includes('already subscribed')) {
          setSubscriptionStatus('This email is already subscribed to our newsletter.');
        } else {
          setSubscriptionStatus(error.response?.data?.message || 'Invalid email address.');
        }
      } else {
        setSubscriptionStatus('Subscription failed. Please try again later.');
      }
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Circuit Board Background */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="40" x2="60" y2="40" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            <line x1="80" y1="40" x2="200" y2="40" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            
            <line x1="0" y1="120" x2="40" y2="120" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            <line x1="60" y1="120" x2="140" y2="120" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            <line x1="160" y1="120" x2="200" y2="120" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            
            <line x1="0" y1="160" x2="100" y2="160" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            <line x1="120" y1="160" x2="200" y2="160" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            
            {/* Vertical lines */}
            <line x1="50" y1="0" x2="50" y2="80" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            <line x1="50" y1="100" x2="50" y2="200" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            
            <line x1="130" y1="0" x2="130" y2="60" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            <line x1="130" y1="80" x2="130" y2="140" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            
            <line x1="180" y1="0" x2="180" y2="100" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            <line x1="180" y1="120" x2="180" y2="200" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            
            {/* Diagonal lines */}
            <line x1="0" y1="80" x2="30" y2="50" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            <line x1="150" y1="20" x2="180" y2="50" stroke="#1e40af" strokeWidth="1" opacity="0.5"/>
            
            {/* Circuit nodes/dots */}
            <circle cx="50" cy="40" r="3" fill="#2563eb" opacity="0.8"/>
            <circle cx="130" cy="120" r="3" fill="#2563eb" opacity="0.8"/>
            <circle cx="180" cy="160" r="3" fill="#2563eb" opacity="0.8"/>
            <circle cx="50" cy="160" r="3" fill="#2563eb" opacity="0.8"/>
            <circle cx="180" cy="40" r="3" fill="#2563eb" opacity="0.8"/>
            
            {/* Larger connection points */}
            <circle cx="70" cy="40" r="2" fill="#3b82f6" opacity="0.6"/>
            <circle cx="150" cy="120" r="2" fill="#3b82f6" opacity="0.6"/>
            <circle cx="110" cy="160" r="2" fill="#3b82f6" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We have a value system that is passionately hinged on our professionalism,
              ethics, integrity, core values, and superior customer service.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  No. 56 Atongo Street, Bolgatanga, Northern Region - Ghana.
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:info@emeraldcapital.com" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                  info@emeraldcapital.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+23324030303030" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                  0240 3030 3030
                </a>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-500 transition-colors group">
                <svg className="w-5 h-5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-500 transition-colors group">
                <svg className="w-5 h-5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-500 transition-colors group">
                <svg className="w-5 h-5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">About us</a></li>
              <li><a href="/blog" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Loans */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Loans</h3>
            <ul className="space-y-2">
              <li><a href="/loans/ec-loans" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">ECLoans</a></li>
              <li><a href="/loans/ippis" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">IPPIS Loan</a></li>
              <li><a href="/loans/car4cash" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">Car4Cash</a></li>
              <li><a href="/loans/ec-plus" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">ECPlus Loan</a></li>
              <li><a href="/loans/sme" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">SME Loan</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Be the first to know, subscribe to our newsletter</p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm border border-gray-700 rounded-l focus:outline-none focus:border-blue-500"
                required
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 text-white text-sm font-medium rounded-r transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {/* Status Messages */}
            {subscriptionStatus && (
              <div className={`mt-3 text-xs ${
                subscriptionStatus.includes('Successfully') || subscriptionStatus.includes('already subscribed')
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}>
                {subscriptionStatus}
              </div>
            )}

            <p className="text-gray-400 text-xs mt-3 italic">
              By subscribing, you accept our <a href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors underline">Privacy Policy</a>
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-400">
            Developed by <a href="#" className="text-white hover:text-blue-400 transition-colors underline">FeliD Media</a>
          </div>
          <div className="text-gray-400">
            © 2025 Copyrights. <span className="text-white">Emerald Capital Ltd.</span> All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;