import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-intro">
        <p>
          Lokesh's Portfolio<br />
          Thank you for visiting my personal portfolio website.<br />
          Connect with me over socials.<br /><br />
          Keep Rising 🚀. Connect with me over live chat!
        </p>
      </div>

      <h3 className="quick-links-heading">Quick Links</h3>

      <div className="footer-quick-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education">Education</Link>
        <Link to="/achivements">Achievements</Link>
        <Link to="/experience">Experience</Link>
      </div>
       <div className="resume-button-container">
 <a href="/resume.pdf" target="_blank" className="resume-link" rel="noopener noreferrer">
  View Resume
</a>
</div>


      <div className="footer-contact-info">
        <p>+91 7993549539</p>
        <p>karrilokesh108@gmail.com</p>
        <p>Andhrapradhesh, India-535579</p>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/lokesh-karri-06532427a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/lokesh_karri_1" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://github.com/KARRI-LOKESH/" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>

      <div className="footer-bottom">
        <p>Designed with ❤️ by Karri Lokesh</p>
        <p>&copy; {new Date().getFullYear()} LokStack. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
