import React from 'react';
import '../pages/Projects.css';
import { Helmet } from 'react-helmet';

const Projects = () => {
  const defaultIcons = [
    "/default-html.png",
    "/default-css.png",
    "/default-js.png"
  ];

  const projects = [
    {
      title: "Student Portal Web Application",
      techIcons: ["/python.png", "/react-logo.png", "/django-logo-negativ.png"],
      demoUrl: "https://student-portal-gczq.vercel.app/login",
      githubUrl: "https://github.com/KARRI-LOKESH/Student_Portal"
    },
    {
      title: "Employee Management System",
      techIcons: ["/django-logo-negativ.png", "/react-logo.png", "/python.png"],
      demoUrl: "https://employee-portal-zcc9.onrender.com",
      githubUrl: "https://github.com/KARRI-LOKESH/Employee_portal"
    },
    {
      title: "Social Media Application",
      techIcons: ["/react-logo.png", "/django-logo-negativ.png", "/cloud-icon.png"],
      demoUrl: "https://ivallap.onrender.com/users/entry/",
      githubUrl: "https://github.com/KARRI-LOKESH/ivallap"
    },
    {
      title: "Online Coffee Shop",
      techIcons: ["/react-logo.png", "/django-logo-negativ.png"],
      demoUrl: "https://coffee-shop-20wl.onrender.com",
      githubUrl: "https://github.com/KARRI-LOKESH/coffee-shop"
    },
    {
      title: "College Website",
      techIcons: ["/react-logo.png", "/django-logo-negativ.png", "/python.png"],
      demoUrl: "https://clg-web.onrender.com/anni/home/",
      githubUrl: "https://github.com/KARRI-LOKESH/coffee-shop"
    }
  ];

  return (
    <div className="projects-page">
      <Helmet>
        <title>LOKESH</title>
        <meta name="description" content="LOKESH builds modern full-stack solutions using React, Django, and Spring Boot." />
      </Helmet>

      {/* Removed hero-section and features-section as requested */}

      <section className="projects-section">
        <h2 className="section-heading">Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="tech-icons">
                {project.techIcons.map((icon, i) => (
                  <img key={i} src={icon} alt="Tech Icon" />
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="project-btn">Live</button>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <button className="project-btn">GitHub</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
