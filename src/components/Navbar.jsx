import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    {name: "Editing", path: "/video-portfolio" },
    { name: "Achievements", path: "/achievements" }
  ];

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Auto-close menu when a route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle clicks outside the navbar to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="navbar-header" ref={navRef}>
      <Link to="/" className="logo-link">
        <img src="/lk.png" alt="Logo" className="navbar-logo" />
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

      {/* The 'open' class here controls the mobile visibility */}
      <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="link-status-dot"></span>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;