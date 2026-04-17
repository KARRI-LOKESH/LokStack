import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

// Expanded skills array for a better grid look
const skills = [
  { name: 'React.js', level: 'Intermediate', icon: '⚛️' },
  { name: 'Python', level: 'Advanced', icon: '🐍' },
  { name: 'JavaScript', level: 'Advanced', icon: 'JS' },
  { name: 'Django', level: 'Intermediate', icon: 'D' },
  { name: 'CSS', level: 'Intermediate', icon: 'C' },
  { name: 'Git & GitHub', level: 'Advanced', icon: 'G' },
  { name: 'SQL', level: 'Intermediate', icon: 'S' },
  { name: 'TypeScript', level: 'Advanced', icon: 'TS' }, // Added for a cleaner grid
];

// Map skill levels to colors/intensity
const levelStyle = {
  Advanced: { color: '#00f2ff', intensity: 0.8 }, // Blue
  Intermediate: { color: '#bc43fa', intensity: 0.6 }, // Purple
  Beginner: { color: '#eaff00', intensity: 0.3 }, // Yellow
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger entrance
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Skills & Abilities
      </motion.h2>
      
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => {
          const style = levelStyle[skill.level] || levelStyle.Beginner;
          
          return (
            <motion.div
              key={index}
              className={`skill-prism ${skill.level.toLowerCase()}`}
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotateY: 10 }} // Simple 3D rotation on hover
            >
              <div className="prism-content">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level" style={{ '--glow-color': style.color }}>
                  {skill.level}
                </span>
              </div>
              
              {/* This div creates the floating glow effect below the badge */}
              <div
                className="prism-glow"
                style={{
                  background: `radial-gradient(circle, ${style.color} 0%, transparent 70%)`,
                  opacity: style.intensity,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;