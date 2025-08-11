import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
    institution: "Avanthi Group Of Colleges | Vizianagaram",
    duration: "2021 - 2025 | Completed",
  },
  {
    degree: "M.P.C",
    institution: "Gotlam Gayathri Junior College",
    duration: "2019 - 2021 | Completed",
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>My Education</h2>
      <p className="education-intro">
        Education is not the learning of facts, but the training of the mind to think.
      </p>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <p className="institution">{item.institution}</p>
              <span className="duration">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
