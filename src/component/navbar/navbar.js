import { useState, useEffect } from "react";
import React from "react";
import "./navbar.css";
import Button from "../button/button";
import logo from "./logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("div[id]"); // Select div elements with IDs
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY + 50 >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-wrapper">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="nav-content">
        <ul>
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about">About</a>
            <div className="border">
              <div className="circles"></div>
            </div>
          </li>
          <li className={activeSection === "skills" ? "active" : ""}>
            <a href="#skills">Skills</a>
            <div className="border">
              <div className="circles"></div>
            </div>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <a href="#projects">Projects</a>
            <div className="border">
              <div className="circles"></div>
            </div>
          </li>
          <li className={activeSection === "experience" ? "active" : ""}>
            <a href="#experience">Experience</a>
            <div className="border">
              <div className="circles"></div>
            </div>
          </li>
          <li className={activeSection === "education" ? "active" : ""}>
            <a href="#education">Education</a>
            <div className="border">
              <div className="circles"></div>
            </div>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact">Contact</a>
            <div className="border">
              <div className="circles"></div>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
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
        {/* <Button text="Hire me" /> */}
      </div>
    </div>
  );
};

export default Navbar;
