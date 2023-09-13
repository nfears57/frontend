// src/components/NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
