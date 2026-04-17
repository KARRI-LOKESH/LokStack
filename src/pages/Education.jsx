import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Engineering in CSE (AI&ML)",
    institution: "Avanthi Group Of Colleges | Vizianagaram",
    duration: "2021 - 2025 | 8.0 CGPA",
  },
  {
    degree: "M.P.C",
    institution: "Gotlam Gayathri Junior College",
    duration: "2019 - 2021 | 8.3 CGPA",
  },
  {
    degree: "SSC (10th Class)",
    institution: "ZPHS High School",
    duration: "2018 - 2019 | 8.7 CGPA",
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="vignette-overlay"></div>
      
      <motion.h2 
        initial={{ opacity: 0, letterSpacing: "20px" }}
        whileInView={{ opacity: 1, letterSpacing: "8px" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Education
      </motion.h2>

      <div className="timeline-container">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-card-wrapper">
            {/* The central square anchor */}
            <div className="timeline-dot-outer">
              <div className="timeline-dot-inner"></div>
            </div>
            
            <motion.div 
              className="education-glass-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                rotateY: index % 2 === 0 ? 10 : -10,
                rotateX: 5,
                translateZ: 20
              }}
            >
              <div className="card-scanner"></div>
              <div className="card-content">
                <span className="edu-duration">{item.duration}</span>
                <h3>{item.degree}</h3>
                <p className="edu-institution">{item.institution}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;