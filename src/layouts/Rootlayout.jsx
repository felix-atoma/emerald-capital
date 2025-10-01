import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";

const RootLayout = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll percentage
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Call once to set initial position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full bg-white m-0 p-0 space-y-0 relative">
      {/* Scroll Progress Indicator - Horizontal Line */}
      <div className="fixed left-0 top-0 w-full h-1 z-50 pointer-events-none">
        <div 
          className="h-full bg-white border-b-2 border-black transition-all duration-100 ease-out"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 -1px 2px rgba(255,255,255,0.8)'
          }}
        />
      </div>

      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default RootLayout;