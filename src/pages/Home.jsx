// components/Home.jsx
import React from 'react';
import './Home.css';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LOKSTACK</title>
        <meta
          name="description"
          content="LOKSTACK builds modern full-stack solutions using React, Django, and Spring Boot."
        />
      </Helmet>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <h1>LOKSTACK</h1>
          <h2 className="hero-title">We Build Killer Web Solutions</h2>
          <p className="hero-subtitle">Leveraging the power of React, Django & Spring Boot</p>
        </section>

        {/* Services */}
        <section className="services">
          <div className="services-left">
            <h3 className="services-title">Our Services</h3>
            <p className="services-desc">
              Empowering businesses with cutting-edge web applications
            </p>
          </div>
          <div className="services-right">
            <i className="fab fa-react service-icon" title="React"></i>
            <img
              src="https://static.djangoproject.com/img/logos/django-logo-positive.svg"
              alt="Django"
              title="Django"
              className="service-iconi"
            />
            <i className="fas fa-leaf service-icon" title="Spring Boot"></i>
          </div>
        </section>

        {/* Sections */}
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
