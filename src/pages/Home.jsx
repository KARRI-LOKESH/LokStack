// components/Home.jsx
import React from 'react';
import './Home.css';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import aaaImg from '../assets/aa.jpg';  // Adjust path if needed
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Achievements from './Achievements';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Lokesh Karri | Full-Stack Developer</title>
        <meta
          name="description"
          content="Lokesh Karri - Full-stack developer specializing in React, Django, Spring Boot, and scalable web applications."
        />
      </Helmet>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <h1>Lokesh Karri</h1>
            <h2 className="hero-title">Building Powerful, Scalable Web Applications</h2>
            <p className="hero-subtitle">
              Expert in React, Django, Spring Boot, Microservices, and AI-driven solutions.
            </p>
          </div>
          <div className="hero-right">
            <img src={aaaImg} alt="Lokesh" title="Lokesh" />
            
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="services-right">
            <h3 className="services-title">What I Offer</h3>
            <p className="services-desc">
              Custom full-stack web development focused on clean code, performance, and user experience.
            </p>
            <ul className="services-list">
              <li>Modern Frontend with React</li>
              <li>Robust Backend with Django & Spring Boot</li>
              <li>Cloud-native Microservices Architecture</li>
              <li>AI-powered Web Solutions</li>
            </ul>
          </div>
        </section>

        {/* Other Sections */}
        <Projects />
        <Skills/>
        <About />
        <Education/>
        <Experience />
        <Achievements/>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
