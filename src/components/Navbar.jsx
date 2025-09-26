import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ children, hasDropdown = false }) => (
    <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition-colors">
      <span>{children}</span>
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </div>
  );

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded"></div>
          <div className="w-8 h-8 bg-red-400 rounded"></div>
          <div className="w-8 h-8 bg-red-300 rounded"></div>
        </div>
        <div className="ml-3">
          <div className="text-xl font-bold text-gray-800">mutual</div>
          <div className="text-xl font-bold text-red-500">Trust</div>
          <div className="text-xs text-gray-600">MFBank</div>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-8 text-gray-700">
        <NavItem hasDropdown>Banking</NavItem>
        <NavItem hasDropdown>Loans</NavItem>
        <NavItem hasDropdown>Investment</NavItem>
        <NavItem hasDropdown>Asset Finance</NavItem>
        <NavItem hasDropdown>Company</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
      </div>

      {/* Internet Banking / Mobile Toggle */}
      <div className="flex items-center space-x-4">
        <button className="hidden lg:block bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
          Internet Banking
        </button>
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden">
          <div className="flex flex-col space-y-4 p-6 text-gray-700">
            <NavItem hasDropdown>Banking</NavItem>
            <NavItem hasDropdown>Loans</NavItem>
            <NavItem hasDropdown>Investment</NavItem>
            <NavItem hasDropdown>Asset Finance</NavItem>
            <NavItem hasDropdown>Company</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Contact</NavItem>
            <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors self-start">
              Internet Banking
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
