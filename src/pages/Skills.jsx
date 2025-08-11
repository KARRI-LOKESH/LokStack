import React, { useEffect, useState } from 'react';
import './Skills.css';

const skills = [
  { name: 'React.js', level: 'Intermediate' },
  { name: 'Python', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'Django', level: 'Intermediate' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'Git & GitHub', level: 'Advanced' },
  { name: 'SQL', level: 'Intermediate' },
];

// Map skill levels to target widths
const levelWidth = {
  Advanced: '90%',
  Intermediate: '60%',
  Beginner: '30%',
};

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Abilities</h2>
      <div className="skills-container">
        {skills.map((skill, index) => {
          const width = levelWidth[skill.level] || '0%';
          return (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-background">
                <div
                  className={`skill-bar-fill ${skill.level.toLowerCase()} ${animate ? 'animate' : ''}`}
                  style={{ '--target-width': width }}
                >
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
