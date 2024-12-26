import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="title">Navigation Bar</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
    </div>
  );
}

export default App;
