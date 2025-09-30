import React, { useState } from 'react';
import { MapPin, Mail, Phone, Twitter, Facebook, Instagram } from 'lucide-react';

const FooterComponent = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background tech pattern (unchanged) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-20 w-1 h-1 bg-blue-400 rounded-full"></div>
        <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
        <div className="absolute top-48 left-1/3 w-1 h-1 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-48 left-16 w-1 h-1 bg-blue-400 rounded-full"></div>
        <div className="absolute top-64 right-1/4 w-1 h-1 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-16 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              We have a value system that is passionately hinged on our professionalism,
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              ethics, integrity, core values, and superior customer service.
            </p>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="text-gray-300 text-sm">
                797 Adetokunbo Ademola Crescent, Wuse 2, Abuja<br/>
                27, Mississippi Crescent, Maitama, Abuja.
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <a
                href="mailto:mails@mutualtrustmfb.com"
                className="text-gray-300 text-sm hover:text-red-500 transition-colors"
              >
                mails@mutualtrustmfb.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <a
                href="tel:07068882587878"
                className="text-gray-300 text-sm hover:text-red-500 transition-colors"
              >
                07068882587878
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-800" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              {['Home', 'About us', 'Blog', 'Contact', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-red-500 transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loans */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Loans</h3>
            <ul className="space-y-3">
              {['MTLoans', 'IPPIS Loan', 'Car4Cash', 'MTPlus Loan', 'SME Loan'].map((loan) => (
                <li key={loan}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-red-500 transition-colors block"
                  >
                    {loan}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Be the first to know, subscribe to our newsletter
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors text-sm"
              >
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              By subscribing, you accepted our{' '}
              <a href="#" className="text-gray-400 hover:text-red-500 underline transition-colors">
                Policy
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-2 md:space-y-0 md:space-x-2">
            <a
              href="#"
              className="hover:text-red-500 transition-colors underline"
            >
              Developed by Goldencity Media
            </a>
            <span className="hidden md:inline">|</span>
            <span>© 2024 Copyrights. MutualTrust MFBank Ltd. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
