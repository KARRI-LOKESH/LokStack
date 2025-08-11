import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const closeMenu = () => setMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="navbar-header" ref={navRef}>
      <Link to="/" className="logo-link">
        <img src="/lk.png" alt="LOKSTACK Logo" className="navbar-logo" />
      </Link>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
        <Link to="/projects" className="navbar-link" onClick={closeMenu}>Projects</Link>
        <Link to="/about" className="navbar-link" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
        <Link to="/skills" className="navbar-link" onClick={closeMenu}>Skills</Link>
        <Link to="/education" className="navbar-link" onClick={closeMenu}>Education</Link>
        <Link to="/experience" className="navbar-link" onClick={closeMenu}>Experience</Link>
        <Link to="/achievements" className="navbar-link" onClick={closeMenu}>Achievements</Link>
      </nav>
    </header>
  );
};

export default Navbar;
