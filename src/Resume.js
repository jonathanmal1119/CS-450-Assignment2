import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "B.S Computer Science",
      school: "New Jersey Institute of Technology",
      year: "Sep 2022 – May 2026",
      gpa: "3.5/4.0"
    }
  ];

  const experience = [
    {
      title: "QA Automation Intern",
      company: "MarketMaker CRE",
      period: "Aug 2024 – Apr 2025",
      responsibilities: [
        "Designed and deployed a Python–Selenium QA automation system with 50+ test cases",
        "Integrated Azure DevOps for source control, work tracking, and automation",
        "Implemented CI/CD on Azure to automate test runs, cutting manual QA time by ~40%"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C/C++", "C#", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
    "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Spring Boot", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "PyTorch", "Selenium", ".NET", "WPF", "XAML"],
    "Tools & Technologies": ["AWS", "Azure DevOps", "MySQL", "MongoDB", "PostgreSQL", "Git", "Figma", "Microsoft Office Suite", "Bash/Shell Scripting"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Professional Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;