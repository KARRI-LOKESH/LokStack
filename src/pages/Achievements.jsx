import React from "react";
import "./Achievements.css";

const achievements = [
  "Built 4+ full-stack projects using Django, React.js, Java, and Python.",
  "Certified in Web Development, Cybersecurity (edX), SQL (GreatLearning), NLP & AI (IBM).",
  "Created a real-time social media app and vehicle detection system using YOLOv5 & OCR."
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
