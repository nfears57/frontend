// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import './BlogList.css';
import axios from 'axios';
import Blog from './Blog'; // Import the Blog component

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

//   useEffect(() => {
//     // Fetch the data from the API
//     fetch('/games')
//       .then((response) => response.json())
//       .then((events) => {
//         setEvents(events);
//       })
//       .catch((error) => {
//         console.error(error);
//         setEvents([]); // Set default value for games state
//       });
//   }, []);
  useEffect(() => {
    // Make a GET request to fetch blog posts from the specified API endpoint
    fetch('/blogs')
      .then((response) => response.json())
      .then((blogPosts) => { setBlogPosts(blogPosts)
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

//   const handleDeleteBlog = (blogId) => {
//     // Make a DELETE request to delete a blog post by ID
//     axios.delete(`http://localhost:3000/blogs/${blogId}`)
//       .then(() => {
//         const updatedPosts = blogPosts.filter((post) => post.id !== blogId);
//         setBlogPosts(updatedPosts);
//       })
//       .catch((error) => {
//         console.error(`Error deleting blog post with ID ${blogId}:`, error);
//       });
//   };

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      {blogPosts.map((post) => (
        <Blog key={post.id} blog={post} />
      ))}
      <div className="create-blog-form">
      </div>
    </div>
  );
};

export default BlogList;


