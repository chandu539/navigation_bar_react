import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <nav className="navbar">
        <div className="title">Navigation bar</div>
        <ul>
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
