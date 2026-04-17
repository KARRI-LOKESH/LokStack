import React from 'react';
import './Home.css';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import aaaImg from '../assets/aa.jpg';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Achievements from './Achievements';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // ✅ FIXED

  // Service data
  const serviceList = [
    "Frontend Development with React.js",
    "Backend Development with Django & REST APIs",
    "Deployment using AWS (EC2, S3)",
    "Cinematic Video Editing (DaVinci Resolve)",
    "Color Grading,Reels & Shorts Editing",
    "Transitions, Effects,Motion Editing & Visual Enhancement" 
  ];

  return (
    <>
      <Helmet>
        <title>Lokesh Karri | Full Stack Developer</title>
        <meta
          name="description"
          content="Lokesh Karri - Full Stack Developer skilled in React, Django, and AWS, building real-world scalable applications."
        />
      </Helmet>

      <div className="home-container">

        {/* Sparkles */}
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Lokesh Karri
            </motion.h1>

            <motion.span
              className="hero-tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              I build responsive and scalable web applications using React, Django, and modern technologies.
              Passionate about creating real-world projects with clean UI and efficient backend systems.
              <br /><br />
              Also skilled in video editing using DaVinci Resolve, creating cinematic edits and engaging content.
            </motion.p>

            {/* 🎬 Video Portfolio Button */}
            <motion.button
              className="video-portfolio-btn"
              onClick={() => navigate('/video-portfolio')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              🎬 Video Editor Portfolio
            </motion.button>

          </div>

          <div className="hero-right">
            <motion.img
              src={aaaImg}
              alt="Lokesh"
              title="Lokesh"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </section>

        {/* Services */}
      <section className="services">
  <motion.h3 
    className="services-title"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    What I Do
  </motion.h3>

  <ul className="services-list">
    {serviceList.map((service, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <span className="service-number">0{index + 1}</span>
        <div className="card-content">
          <div className="service-icon">✦</div>
          <p>{service}</p>
        </div>
      </motion.li>
    ))}
  </ul>
</section>

        {/* Other Sections */}
        <Projects />
        <Skills />
        <About />
        <Education />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />

      </div>
    </>
  );
};

export default Home;