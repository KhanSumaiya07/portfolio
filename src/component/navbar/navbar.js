import { useState } from "react";
import React from "react";
import "./navbar.css";
import Button from "../button/button";

const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-wrapper">
      <div className="logo">
        <a href="#home">
          <img src="logo.png" alt="Logo" />
        </a>
      </div>
      <div className="nav-content">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
     <div className="button-display">
     <Button text="Hire me" />
     </div>
      {/* mobile-view */}
      <div 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      {/* Mobile menu container */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <Button text="Hire me" />
      </div>
    </div>
  );
};

export default Navbar;
