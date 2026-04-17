import React from 'react';
import './About.css';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const About = () => {
  // Data array to keep the JSX clean and manageable
  const aboutData = [
    {
      title: "What I Build",
      content: (
        <ul>
          <li>Full Stack Web Applications (React + Django)</li>
          <li>Real-time Features (Chat, Notifications)</li>
          <li>E-commerce Platforms</li>
          <li>REST APIs & Backend Systems</li>
        </ul>
      )
    },
    {
      title: "Technical Skills",
      content: (
        <ul>
          <li>Frontend: React.js, HTML, CSS, JS</li>
          <li>Backend: Django, REST Framework</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Tools: Git, GitHub, AWS</li>
        </ul>
      )
    },
    {
      title: "Experience & Focus",
      content: (
        <ul>
      <li>Internship @ Bredon IT Solutions</li>
      <li>Real-time E-commerce & Business Solutions</li>
      <li>Full-cycle Deployment & Hosting</li>
      <li>Performance Tuning & SEO Optimization</li>
    </ul>
      )
    },
    {
    title: "Video Editing",
    content: (
      <ul>
        <li>Cinematic Editing using DaVinci Resolve</li>
        <li>Advanced Color Grading & Correction</li>
        <li>Instagram Reels & YouTube Shorts Editing</li>
        <li>Smooth Transitions & Motion Effects</li>
      </ul>
    )
  }
  ];

  return (
    <>
      <Helmet>
        <title>Lokesh Karri - About</title>
        <meta name="description" content="Lokesh Karri - Full Stack Developer skilled in React, Django, and AWS." />
      </Helmet>

      <div className="about-page">
        <motion.div 
          className="about-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="about-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h1>

          <motion.p 
            className="about-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I’m Lokesh Karri, a Full Stack Developer focusing on creating 
            responsive, scalable, and user-friendly applications with clean code.
          </motion.p>

          <div className="about-boxes">
            {aboutData.map((box, index) => (
              <motion.div 
                key={index}
                className="about-box glass-morph"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                /* This creates the 3D tilt movement on hover */
                whileHover={{ 
                  rotateX: 7, 
                  rotateY: -7, 
                  z: 50,
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Hollywood Light Sweep Layer */}
                <div className="glass-shine"></div>
                
                <div className="box-content">
                  <h3>{box.title}</h3>
                  {box.content}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="about-desc bottom-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Continuous learner aiming for high-level software engineering.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default About;