// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuOnNavClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    setMenuOpen(false); // close menu on route change
  }, [location]);

  return (
    <header className="navbar-header">
      <img src="/logolg.png" alt="LOKGAN Logo" className="navbar-logo" />

      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link" onClick={closeMenuOnNavClick}>Home</Link>
        <Link to="/projects" className="navbar-link" onClick={closeMenuOnNavClick}>Projects</Link>
        <Link to="/about" className="navbar-link" onClick={closeMenuOnNavClick}>About</Link>
        <Link to="/contact" className="navbar-link" onClick={closeMenuOnNavClick}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
