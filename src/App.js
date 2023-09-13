import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import HomePage from './HomePage';
import Profile from './Profile';
import Login from './Login';
import CreateAccountForm from './CreateAccountForm';
import Categories from './Categories'

function App({id}) {
  const [user, setUser] = useState(null)
  console.log("app.js", user)

  useEffect(() => {
    fetch(`/me/${id}`)
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
    console.log(user)
  }, [])

  function handleLogOut() {
    fetch('/logout', {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        setUser(null)
      }
    })
  }

  
  function onLogin(user){
    setUser(user)
  }


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login setUser={setUser} onLogin={onLogin}/>} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
