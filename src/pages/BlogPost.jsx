// src/pages/BlogPost.jsx
import React from 'react';
import BlogIter from '../components/BlogIter';

/**
 * Blog Listing Page
 * Displays all blog posts with search, filter, and pagination
 */
export default function BlogPost() {
  return (
    <div className="min-h-screen">
      <BlogIter/>
    </div>
  );
}