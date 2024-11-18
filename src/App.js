import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserManager from "./components/UserManager";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="sidebar">
          <Link to="/">Dashboard</Link>
          <Link to="/user-manager">User Manager</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-manager" element={<UserManager />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
