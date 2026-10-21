import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header">
      <div className="container nav-container">
        <a href="#" className="logo">
          SMYLE GOYAL<span className="logo-dot"></span>
        </a>

        <button
          className={`mobile-nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
          <li><a href="#timeline" className="nav-link" onClick={closeMenu}>Milestones</a></li>
          <li><a href="#education" className="nav-link" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" className="nav-link nav-cta" onClick={closeMenu}>Get in Touch</a></li>
        </ul>
      </div>

      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </header>
  );
}
