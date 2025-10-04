// src/components/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          {/* Outer static circle */}
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          {/* Inner spinning circle */}
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-600 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;