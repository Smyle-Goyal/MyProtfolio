import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          SMYLE GOYAL<span className="logo-dot"></span>
        </div>
        <ul className="footer-links">
          <li><a href="#about" className="footer-link">About</a></li>
          <li><a href="#skills" className="footer-link">Skills</a></li>
          <li><a href="#projects" className="footer-link">Projects</a></li>
          <li><a href="#timeline" className="footer-link">Milestones</a></li>
          <li><a href="#education" className="footer-link">Education</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
        </ul>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Smyle Goyal. All rights reserved. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}
