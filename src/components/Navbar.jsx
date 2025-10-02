import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

const navLinks = [
  { label: "Banking", dropdown: ["Savings Accounts", "Corporate Accounts"] },
  {
    label: "Loans",
    dropdown: ["MTLoans", "IPPIS Loans", "Car4Cash", "MTPlus Loans", "SME Loan"],
  },
  {
    label: "Investment",
    dropdown: ["Treasury Note", "Fixed Deposit", "Mudurabah"],
  },
  {
    label: "Asset Finance",
    dropdown: ["MT Green Solar", "Agric Finance", "Auto Finance"],
  },
  {
    label: "Company",
    dropdown: ["About", "Leadership", "Gallery", "Corporate & Social Responsibility (CSR)"],
  },
  { label: "Blog" },
  { label: "Contact" },
  // 🚨 Removed "Internet Banking" from here
];


  const NavItem = ({ link, isMobile = false }) => {
    const hasDropdown = !!link.dropdown;
    const toggle = () =>
      isMobile && hasDropdown
        ? setOpenDropdown(openDropdown === link.label ? null : link.label)
        : null;

    // helper to convert a label to a path
    const pathFor = (item) =>
      `/${item.toLowerCase().replace(/\s*&\s*/g, "").replace(/\s+/g, "-")}`;

    return (
      <div className="relative group" onClick={toggle}>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-deepgreen-500 text-sm">
          {hasDropdown ? (
            <span>{link.label}</span>
          ) : (
            <Link
              to={pathFor(link.label)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          )}
          {hasDropdown && <ChevronDown className="w-3 h-3" />}
        </div>

        {/* Desktop Dropdown */}
        {hasDropdown && !isMobile && (
          <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-20">
            {link.dropdown.map((item) => (
              <Link
                key={item}
                to={pathFor(item)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-1 text-gray-700 hover:bg-gray-100 hover:text-green-500 text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Dropdown */}
        {hasDropdown && isMobile && openDropdown === link.label && (
          <div className="mt-1 ml-3 flex flex-col space-y-1">
            {link.dropdown.map((item) => (
              <Link
                key={item}
                to={pathFor(item)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-2 py-1 text-gray-600 hover:text-red-500 text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 h-20 bg-white border-b border-gray-200 shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-1">
          <img
            src="./emerald-logo.png"
            alt="Emerald Capital Logo"
            className="h-10 w-auto m-20"
          />
      </Link>


      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-4 text-gray-700">
        {navLinks.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
      </div>

      {/* Internet Banking / Mobile Toggle */}
      <div className="flex items-center space-x-2">
        <Link
          to="/login"
          className="hidden lg:block bg-red-500 text-white px-5 py-3 rounded-full text-xs font-semibold hover:bg-red-600"
        >
          Internet Banking
        </Link>
        <button
          className="lg:hidden p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md lg:hidden">
          <div className="flex flex-col space-y-3 p-4 text-gray-700 text-sm">
            {navLinks.map((link) => (
              <NavItem key={link.label} link={link} isMobile />
            ))}
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-red-500 text-white px-4 py-1 rounded-full text-xs font-semibold hover:bg-red-600 self-start"
            >
              Internet Banking
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
