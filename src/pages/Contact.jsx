import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // --- 3D INTERACTIVE LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoothing the movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");
    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) throw new Error();
      setStatus("TRANSMISSION COMPLETE.");
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      setStatus("TRANSMISSION FAILED.");
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>LOKSTACK | SECURE_CONTACT</title>
      </Helmet>

      {/* Moving Background Grid */}
      <div className="grid-background"></div>

      <motion.div 
        className="contact-glass-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Prismatic Laser Line */}
        <div className="contact-scan-line"></div>
        
        {/* Floating Content (TranslateZ creates the 3D depth) */}
        <div className="card-content-wrapper" style={{ transform: "translateZ(60px)" }}>
          <h1 className="contact-title">ESTABLISH CONNECTION</h1>
          <p className="contact-subtitle">Authentication: Level 04 Required</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="NAME_ID"
                className="contact-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="input-glow"></div>
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="EMAIL_ADDRESS"
                className="contact-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="input-glow"></div>
            </div>

            <div className="input-group">
              <textarea
                placeholder="YOUR_MESSAGE_CORE"
                className="contact-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div className="input-glow"></div>
            </div>

            <motion.button 
              type="submit" 
              className="contact-button"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--neon-violet)" }}
              whileTap={{ scale: 0.95 }}
            >
              SEND TRANSMISSION
            </motion.button>
          </form>

          {status && <p className="contact-status">{status}</p>}

          <div className="contact-footer">
            <div className="footer-laser"></div>
            <div className="social-links">
              <a href="https://github.com/KARRI-LOKESH" target="_blank" rel="noreferrer">GITHUB</a>
              <a href="https://www.linkedin.com/in/lokesh-karri-06532427a" target="_blank" rel="noreferrer">LINKEDIN</a>
              <a href="mailto:karrilokesh108@gmail.com">EMAIL_DIRECT</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;