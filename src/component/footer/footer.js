// Footer.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="quick-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="social-links">
          <a href="mailto:your-email@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/1234567890" aria-label="WhatsApp">
            <IoLogoWhatsapp />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
