// src/components/PageLoader.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const PageLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader when route changes
    setLoading(true);
    
    // Hide loader after a short delay (simulates page load)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, [location.pathname]); // Triggers whenever the route changes

  // Don't render anything if not loading
  if (!loading) return null;

  return <LoadingSpinner />;
};

export default PageLoader;