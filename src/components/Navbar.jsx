import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('lokstack_user'));
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const closeMenuOnNavClick = () => {
    if (window.innerWidth <= 768) setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false); // close menu when route changes
  }, [location]);

  const handleLogout = () => {
    // Clear user info from storage/session
    localStorage.removeItem('lokstack_user');

    // Update logged-in state
    setLoggedIn(false);

    // Redirect to login or home page
    navigate('/login');
  };

  return (
    <header className="navbar-header">
      <Link to="/" className="logo-link">
        <img src="/logols.png" alt="LOKSTACK Logo" className="navbar-logo" />
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
        <Link to="/" className="navbar-link" onClick={closeMenuOnNavClick}>Home</Link>
        <Link to="/projects" className="navbar-link" onClick={closeMenuOnNavClick}>Projects</Link>
        <Link to="/about" className="navbar-link" onClick={closeMenuOnNavClick}>About</Link>
        <Link to="/contact" className="navbar-link" onClick={closeMenuOnNavClick}>Contact</Link>
        {loggedIn ? (
          <button className="navbar-link logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login" className="navbar-link" onClick={closeMenuOnNavClick}>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
