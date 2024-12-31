import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <div>
        <nav className="navbar">
          <div className="title">Navigation Bar</div>
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/Login">Login</Link></li>
          </ul>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
        </nav>
      </div>
    
  );
}

export default App;
