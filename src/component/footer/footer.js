// Footer.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { IoLogoWhatsapp } from 'react-icons/io';
import { FaGithub } from "react-icons/fa";

// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="quick-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
        <div className="social-links">
          <a target='_blank' href="mailto:eng.sumaiyakhan@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/sumaiya-khan-2a314324b" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a target='_blank' href="https://github.com/KhanSumaiya07" aria-label="Github">
          <FaGithub />
          </a>
          <a target='_blank' href="https://www.instagram.com/_khan_sumaiya_07" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
