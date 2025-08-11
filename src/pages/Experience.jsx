import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Python Programming Intern",
    company: "MotionCut",
    date: "Jun 2024 – Aug 2024 | Remote",
    description: [
      "Developed mini-projects like a motion-based game applying core concepts and improving logic building.",
      "Learned Python from basics to advanced, including OOPs, file handling, and real-time problem solving.",
      "Practiced coding challenges, debugging techniques, and wrote clean, modular, and efficient code.",
      "Gained hands-on experience with Git and improved understanding of project development flow."
    ]
  },
  {
    title: "Java FullStack Intern",
    company: "SkillDzire",
    date: "Jun 2024 – Aug 2024",
    project: "Hotel Service Management",
    projectLink: "https://github.com/YourGitHubLinkHere", // replace with your real link
    description: [
      "Learned full stack development using Java, Spring Boot, Microservices, and React.js.",
      "Worked with MySQL, JDBC, and MVC architecture for scalable code.",
      "Built a mini project with RESTful APIs, form validations, and authentication.",
      "Documented workflows for smooth team knowledge transfer."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="date">{exp.date}</p>
            {exp.project && (
              <p className="project">
                Project:{" "}
                <a href={exp.projectLink} target="_blank" rel="noreferrer">
                  {exp.project}
                </a>
              </p>
            )}
            <ul>
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
