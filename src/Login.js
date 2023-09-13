// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Login.css';

const Login = ({onLogin}) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
      })
      const [errors, setErrors] = useState(null)
    
      function handleChange(e) {
        const value = e.target.value;
        const keyName = e.target.name;
        setForm({ ...form, [keyName]: value })
      }
      
      const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          console.log(user)
          setErrors(null);
          window.location.href = '/';
        })
      } else {
        r.json().then(errors => setErrors(errors))
      }
    }).catch((error) => {
      console.error("Error:", error);
    });

    setForm({
      email: "",
      password: "",
    })
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(handleChange)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={(handleChange)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Don't have an account? <Link to="/create-account">Create one</Link></p>
    
    </div>
  );
};

export default Login;
