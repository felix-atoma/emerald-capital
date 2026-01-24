// src/pages/BlogPost.jsx
import React from 'react';
import IntegratedBlogSection from '../components/IntegratedBlogSection';

/**
 * Blog Listing Page
 * Displays all blog posts with search, filter, and pagination
 */
export default function BlogPost() {
  return (
    <div className="min-h-screen">
      <IntegratedBlogSection />
    </div>
  );
}