import React from "react";
import "./Achievements.css";
import { motion } from "framer-motion";

const achievements = [
  { text: "6+ Full-Stack Applications Deployed", icon: "" },
  { text: "Full Social Media Suite (Chat, Stories, Live)", icon: "" },
  { text: "E-commerce Engine with Order Processing", icon: "" },
  { text: "AWS Scalable Deployment (EC2, S3)", icon: "" },
  { text: "IBM & edX Certified: AI, NLP, CyberSec", icon: "" },
  { text: "Full Project Lifecycle Mastery", icon: "" },
  { text: "Optimized Frontend Architecture", icon: "" }
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <motion.h2 
        initial={{ opacity: 0, letterSpacing: "10px" }}
        whileInView={{ opacity: 1, letterSpacing: "2px" }}
        transition={{ duration: 1 }}
      >
        ACHIEVEMENTS
      </motion.h2>
      
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <motion.div 
            key={index} 
            className="achievement-node"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ 
              rotateX: 10, 
              rotateY: 10, 
              z: 100,
              boxShadow: "0 0 30px rgba(188, 67, 250, 0.3)" 
            }}
          >
            {/* Prismatic Scanner Beam */}
            <div className="node-scanner"></div>
            
            <div className="node-content">
              <span className="node-icon">{item.icon}</span>
              <p>{item.text}</p>
            </div>

            {/* Corner Decorative Brackets */}
            <div className="bracket-top"></div>
            <div className="bracket-bottom"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;