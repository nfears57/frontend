// src/components/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

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
          { <BlogList />}
          <p></p>
        </div>
        <div className="home-right">
          {showBlogForm ? (
            <div>
              <button onClick={handleCloseForm}>X</button>
              <BlogForm />
            </div>
          ) : (
            <button className="new-blog-button" onClick={handleNewBlogClick}>New Blog</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
