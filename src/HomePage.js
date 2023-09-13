// src/components/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import BlogForm from './BlogForm'; // Correct the component name to 'BlogForm'


const HomePage = () => {
  const [showBlogForm, setShowBlogForm] = useState(false);

  const handleNewBlogClick = () => {
    setShowBlogForm(true);
  };

  const handleCloseForm = () => {
    setShowBlogForm(false);
  };

  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-left">
          <h1>The New Timers</h1>
          <p></p>
        </div>
        <div className="home-left">
          {showBlogForm ? (
            <div>
              <button onClick={handleCloseForm}>X</button>
              <BlogForm />
            </div>
          ) : (
            <button onClick={handleNewBlogClick}>New Blog</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
