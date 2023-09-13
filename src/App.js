import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;