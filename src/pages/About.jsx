import React from 'react';
import './About.css';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Lokesh Karri - Portfolio</title>
        <meta name="description" content="Lokesh Karri - Full Stack Developer specializing in React, Django, and Spring Boot." />
      </Helmet>

      <div className="about-page">
        <div className="about-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-desc">
            Hi, I’m Lokesh Karri — a passionate full-stack developer specializing in building modern, scalable web applications using React, Django, and Spring Boot. I love turning ideas into reality with clean code and innovative solutions.
          </p>

          <div className="about-boxes">
            <div className="about-box">
              <h3>What I Do</h3>
              <ul>
                <li>Custom Web Application Development</li>
                <li>Voice-enabled Hotel Service Platforms</li>
                <li>AI-powered Object Detection Projects</li>
                <li>End-to-End Microservices Architecture</li>
              </ul>
            </div>

            <div className="about-box">
              <h3>My Values</h3>
              <ul>
                <li>Innovation & Creativity</li>
                <li>User-Centric Design</li>
                <li>Performance & Scalability</li>
                <li>Secure & Maintainable Code</li>
              </ul>
            </div>

            <div className="about-box">
              <h3>My Vision</h3>
              <p>
                To become a trusted software engineer who delivers impactful digital solutions that solve real-world problems and improve people’s lives.
              </p>
            </div>
          </div>

          <p className="about-desc">
            I am dedicated to continuous learning and building powerful, user-friendly applications that make a difference.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
