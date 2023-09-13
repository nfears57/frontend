// src/components/BlogList.js
import React from 'react';
import './BlogList.css';

const BlogList = ({ selectedCategory }) => {
  // Sample blog data, you should replace this with your actual blog data
  const blogPosts = [
    // Your blog post objects with categories
    // { title: 'Blog Post 1', category: 'MLB' },
    // { title: 'Blog Post 2', category: 'NBA' },
    // ...
  ];

  const filteredBlogPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      <ul>
        {filteredBlogPosts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
