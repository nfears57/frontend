import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import HomePage from './HomePage';
import Profile from './Profile';
import Login from './Login';
import CreateAccountForm from './CreateAccountForm';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
      </Routes>
    </Router>
  );
}

export default App;
