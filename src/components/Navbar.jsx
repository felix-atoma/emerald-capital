import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const dropdownRefs = useRef({});

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref && !ref.contains(event.target)) {
          setOpenDropdown(null);
          setOpenNestedDropdown(null);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { 
      label: "Banking", 
      dropdown: [
        { label: "Remittance & Money Transfer", link: true },
        { 
          label: "Savings Products",
          nested: [
            "Emerald Capital — Savings Products",
            // "Digital & Mobile Banking",
            // "Remittance & Money Transfer",
            // "Investment & Wealth Management",
            // "Savings Products (Purple / Gold Theme)"
          ]
        }
      ]
    },
    {
      label: "Loans",
      dropdown: [
        { 
          label: "Microfinance Loans",
          nested: [
            "Business Starter Loan",
            "Working Capital Loan",
            "Agricultural Loan",
            
            
            "Group/Community Loan",
            "Green & Sustainable Loan",
            "Housing & Home Improvement Loan",
            "Health & Medical Loan",
            "Women's Empowerment Loan",
            "Micro-Enterprise Expansion Loan",
            // "Emergency Agriculture Relief Loan",
            "Transport & Equipment Loan",
            "Seasonal Business Loan"
          ]
        },
        { 

          // no more nested links
          label: "Specialized Loans",
          nested: [
            
            "Section 2: Specialized Loan Products"   
          ]
        },
        { label: "SME Loan", link: true },
        { label: "Business Loan", link: true },
        { label: "Personal Loan", link: true },
        { label: "Funeral Loans", link: true },
        { label: "Education Loan", link: true },
      ]
    },
    {
      label: "Investment",
      dropdown: [
        { label: "Investment & Wealth Management", link: true },
        { label: "Fixed Deposit", link: true },
      ],
    },
    {
      label: "Project Financing",
      dropdown: [
        { label: "Emerald Business", link: true },
        // { label: "Emerald Pay", link: true },
        { label: "Insurance Products", link: true },
      ],
    },
    {
      label: "Company",
      dropdown: [
        { label: "About", link: true },
        { 
          label: "Leadership & Governance",
          nested: [
            "Leadership & Governance Overview",
            "Ownership & Shareholders",
            "Board of Directors",
            "Executive Leadership Team",
            "Governance Framework"
          ]
        },
        { 
          label: "Organizational Structure",
          nested: [
            "Shareholders/Owners",
            "Board of Directors Structure",
            "Executive Management / C-Suite",
            "Chief Executive Officer (CEO)",
            // "Chief Operating Officer (COO)",
            // "Chief Financial Officer (CFO)",
            // "Chief Risk Officer (CRO)",
            // "Chief Technology Officer (CTO)",
            // "Chief Marketing & Business Development Officer (CMO/BDO)",
            // "Chief Compliance & Legal Officer (CCO/CLO)",
            // "Chief Investment Officer (CIO)",
            // "Chief Insurance Officer (CInsO)",
            // "Chief Human Resources Officer (CHRO)",
            // "Operational Structure and Organogram"
          ]
        },
       { label: "Regional Management", link: true },
      ]
    },
    // { label: "Blog", link: true },
    { label: "Contact", link: true },
  ];

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
    setOpenNestedDropdown(null);
  };

  const handleNestedToggle = (label) => {
    setOpenNestedDropdown(openNestedDropdown === label ? null : label);
  };

  const pathFor = (item) => {
    // Special case for Digital & Mobile Banking
    if (item === "Digital & Mobile Banking") {
      return "/digital-banking";
    }
    
    const cleanItem = item
      .replace(/^Section\s+\d+:\s*/, '')
      .replace(/—/g, '')
      .toLowerCase()
      .replace(/\s*&\s*/g, "-and-")
      .replace(/\s*\/\s*/g, '')  // Remove slashes with spaces
      .replace(/[^a-z0-9-]/g, '')
      .replace(/\s+/g, "-")
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    return `/${cleanItem}`;
  };

  // Desktop Nav Item Component
  const DesktopNavItem = ({ link }) => {
    const hasDropdown = link.dropdown && link.dropdown.length > 0;
    
    return (
      <div 
        className="relative group"
        ref={el => dropdownRefs.current[link.label] = el}
      >
        <div className="flex items-center space-x-1 cursor-pointer hover:text-emerald-600 text-sm font-medium px-3 py-2 rounded-lg hover:bg-emerald-50 transition-colors">
          {hasDropdown ? (
            <span>{link.label}</span>
          ) : (
            <Link to={pathFor(link.label)}>{link.label}</Link>
          )}
          {hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
        </div>

        {/* Desktop Main Dropdown */}
        {hasDropdown && (
          <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="bg-white rounded-lg shadow-xl border border-emerald-100 w-64">
              <div className="py-2">
                {link.dropdown.map((item, index) => (
                  <div key={`${link.label}-${index}`} className="relative group/sub">
                    {item.nested ? (
                      <>
                        <div className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer border-b border-gray-100 last:border-b-0">
                          <span className="font-medium">{item.label}</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        
                        {/* Nested Desktop Dropdown */}
                        <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                          <div className="bg-white rounded-lg shadow-xl border border-emerald-100 w-64 ml-2">
                            <div className="py-2 max-h-80 overflow-y-auto">
                              {item.nested.map((nestedItem, nestedIndex) => (
                                <Link
                                  key={`${item.label}-${nestedIndex}`}
                                  to={pathFor(nestedItem)}
                                  className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border-b border-gray-100 last:border-b-0"
                                >
                                  {nestedItem}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={pathFor(item.label)}
                        className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border-b border-gray-100 last:border-b-0 font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Mobile Nav Item Component
  const MobileNavItem = ({ link }) => {
    const hasDropdown = link.dropdown && link.dropdown.length > 0;
    
    return (
      <div className="border-b border-gray-100 last:border-b-0">
        {hasDropdown ? (
          <>
            <div 
              className="flex items-center justify-between py-4 px-4 text-gray-800 font-medium cursor-pointer"
              onClick={() => handleDropdownToggle(link.label)}
            >
              <span>{link.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
            </div>
            
            {/* Mobile Main Dropdown */}
            {openDropdown === link.label && (
              <div className="bg-gray-50">
                {link.dropdown.map((item, index) => (
                  <div key={`mobile-${link.label}-${index}`}>
                    {item.nested ? (
                      <>
                        <div 
                          className="flex items-center justify-between py-3 px-6 text-gray-700 cursor-pointer border-t border-gray-200"
                          onClick={() => handleNestedToggle(`${link.label}-${item.label}`)}
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${openNestedDropdown === `${link.label}-${item.label}` ? 'rotate-180' : ''}`} />
                        </div>
                        
                        {/* Mobile Nested Dropdown */}
                        {openNestedDropdown === `${link.label}-${item.label}` && (
                          <div className="bg-gray-100">
                            {item.nested.map((nestedItem, nestedIndex) => (
                              <Link
                                key={`mobile-nested-${item.label}-${nestedIndex}`}
                                to={pathFor(nestedItem)}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-3 px-8 text-gray-600 hover:text-emerald-600 border-t border-gray-300"
                              >
                                {nestedItem}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={pathFor(item.label)}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-6 text-gray-700 hover:text-emerald-600 font-medium border-t border-gray-200"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            to={pathFor(link.label)}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-4 px-4 text-gray-800 font-medium hover:text-emerald-600"
          >
            {link.label}
          </Link>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="./emerald-logo.png"
              alt="Emerald Capital Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.label} link={link} />
            ))}
            
            {/* Digital Banking Button */}
            <Link
              to="/digital-banking"
              className="ml-6 bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Digital & Mobile Banking
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Removed the mobile login button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="py-2">
              {navLinks.map((link) => (
                <MobileNavItem key={`mobile-${link.label}`} link={link} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;