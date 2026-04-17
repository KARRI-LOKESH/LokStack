import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion"; // Highly recommended for the 3D effect
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-perspective-container">
      <motion.div 
        className="footer-glass-card"
        initial={{ rotateX: 20, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-glow"></div>

        <div className="footer-content">
          <div className="footer-intro">
            <h2 className="brand-logo">LOK<span>ESH</span></h2>
            <p className="intro-text">
              SYSTEM STATUS: ONLINE <br />
              CONNECTED TO CLOUD_ENGINE_V3
            </p>
            <div className="live-chat-tag">
              <span className="pulse-dot"></span> KEEP RISING 🚀
            </div>
          </div>

          <div className="footer-links-section">
            <h3 className="section-heading">Navigation</h3>
            <div className="footer-quick-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/education">Education</Link>
              <Link to="/achievements">Achievements</Link>
              <Link to="/experience">Experience</Link>
            </div>
          </div>

          <div className="footer-contact-section">
            <h3 className="section-heading">Contact_Data</h3>
            <div className="footer-contact-info">
              <p>TEL: +91 7993549539</p>
              <p>MAIL: karrilokesh108@gmail.com</p>
              <p>LOC: Andhra Pradesh, IN</p>
            </div>
            
            <div className="footer-action-row">
              <a href="/resume.pdf" target="_blank" className="resume-link" rel="noopener noreferrer">
                ACCESS_RESUME
              </a>
              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-legal">
            <p>DESIGNED BY KARRI LOKESH // CORE_V1.0</p>
            <p>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;