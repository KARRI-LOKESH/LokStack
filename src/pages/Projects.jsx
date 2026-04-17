import React from 'react';
import '../pages/Projects.css';
import { Helmet } from 'react-helmet';

const Projects = () => {
  const projects = [
    {
      title: "Student Portal Web Application",
      description: "A full-stack web application for managing student records, authentication, and academic data with secure login and dashboard features.",
      techIcons: ["/python.png", "/react-logo.png", "/django-logo-negativ.png"],
      demoUrl: "https://student-portal-gczq.vercel.app/login",
      githubUrl: "https://github.com/KARRI-LOKESH/Student_Portal"
    },
    {
      title: "Employee Management System",
      description: "A system to manage employee data including CRUD operations, role-based access, and efficient workforce management.",
      techIcons: ["/django-logo-negativ.png", "/react-logo.png", "/python.png"],
      demoUrl: "https://employee-portal-zcc9.onrender.com",
      githubUrl: "https://github.com/KARRI-LOKESH/Employee_portal"
    },
    {
      title: "Social Media Application",
      description: "A mini social media platform with features like posts, likes, comments, messaging, and real-time interactions using Django Channels.",
      techIcons: ["/react-logo.png", "/django-logo-negativ.png", "/cloud-icon.png"],
      demoUrl: "https://ivallap.onrender.com/users/entry/",
      githubUrl: "https://github.com/KARRI-LOKESH/ivallap"
    },
    {
      title: "Online Coffee Shop",
      description: "An e-commerce web app for ordering coffee online with product listings, cart functionality, and order management.",
      techIcons: ["/react-logo.png", "/django-logo-negativ.png"],
      demoUrl: "https://coffee-shop-20wl.onrender.com",
      githubUrl: "https://github.com/KARRI-LOKESH/coffee-shop"
    },
    {
      title: "College Website",
      description: "A responsive college website with multiple sections like admissions, departments, placements, and contact pages.",
      techIcons: ["/react-logo.png", "/django-logo-negativ.png", "/python.png"],
      demoUrl: "https://clg-web.onrender.com/anni/home/",
      githubUrl: "https://github.com/KARRI-LOKESH/coffee-shop"
    },
    {
      title: "Digital Menu",
      description: "A digital restaurant menu system where users can view items, categories, prices, and place orders with a clean UI design.",
      techIcons: ["/react-logo.png", "/django-logo-negativ.png", "/python.png"],
      demoUrl: "https://digital-menu-4696.vercel.app/menu/", 
      githubUrl: "https://github.com/KARRI-LOKESH/Digital-menu" 
    }
  ];

  return (
    <div className="projects-page">
      <Helmet>
        <title>LOKESH</title>
        <meta name="description" content="LOKESH builds modern full-stack solutions using React, Django, and Spring Boot." />
      </Helmet>

      <section className="projects-section">
        <h2 className="section-heading">Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>

              {/* Description added */}
              <p className="project-desc">{project.description}</p>

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