import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Bredon IT Solutions",
    date: "Jul 2025 – Dec 2025",
    description: [
      "Worked as a Full Stack Developer building scalable web applications using React.js and Django.",
      "Designed and developed responsive UI with modern CSS and optimized UX.",
      "Implemented backend APIs and database management using MySQL.",
      "Integrated AWS services (EC2 & S3) for high-performance deployment.",
      "Developed real-time features like chat systems and dynamic content updates.",
      "Built E-commerce platforms and clean business portfolio websites.",
      "Used Git and GitHub for version control and CI/CD workflow.",
      "Optimized performance and ensured cross-browser compatibility."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="experience-glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateX: 2, 
              rotateY: -2, 
              y: -5
            }}
          >
            {/* The Violet-Green Light Sweep */}
            <div className="glass-shine-mix"></div>
            
            <div className="exp-content">
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className="exp-badge">{exp.date}</span>
              </div>
              <h4>{exp.company}</h4>

              <ul className="exp-list">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;