import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "/CS-450-Assignment2/Images/SiliconGuideBackground.png",
          title: "Silicon Guide ",
          description: "AI-powered PC builder leveraging React.js, Node.js, and the OpenAI API to deliver hardware recommendations based on user budgets and preferences.",
          technologies: ["React.js", "Express.js", "MongoDB", "OpenAI API", "AWS"],
          live_demo: "https://siliconguideai.com/",
          github: "https://github.com/jonathanmal1119/SiliconGuide"
        },
        {
          project_image: "/CS-450-Assignment2/Images/CoursifyBackground.jpg",
          title: "Coursify",
          description: "A student schedule planing website built with React.js, Node.js, and MySQL to help students plan valid course schedules.",
          technologies: ["React.js", "Express.js", "MySQL", "AWS"],
          live_demo: "https://www.coursify1.com/",
          github: "https://github.com/Ismail-Shaikh03/Coursify"
        },
        {
          project_image: "/CS-450-Assignment2/Images/LearnProjectBackground.png",
          title: "Learn Project",
          description: "Windows desktop app to help users optimize study habits through session tracking.",
          technologies: ["C#", ".NET", "WPF", "XAML"],
          live_demo: "https://private-user-images.githubusercontent.com/95556326/472287074-b3e9448b-9365-4c5b-997e-dff666a1264a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk4OTI2NzcsIm5iZiI6MTc1OTg5MjM3NywicGF0aCI6Ii85NTU1NjMyNi80NzIyODcwNzQtYjNlOTQ0OGItOTM2NS00YzViLTk5N2UtZGZmNjY2YTEyNjRhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEwMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMDA4VDAyNTkzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY4ODY4OTkzNTExZDVlMzY4NWZmZWM2Zjc2MjZjN2NjYmUxMDBlODc1MzgxYjIwM2RkMmYxY2RlZTc3NWE0ODcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ed7OyeWJ0lWiwdqusK3-Cf3weiKkl1lEstIxa_zkibE",
          github: "https://github.com/jonathanmal1119/LearnProject"
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h2 className="portfolio-title">My Portfolio</h2>
        <div className="projects-grid">
          {this.state.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.project_image ? (
                  <img src={project.project_image} alt={project.title} />
                ) : (
                  <div className="placeholder-image">
                    <span>No Image</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.live_demo} target="_blank" rel="noreferrer" className="btn-live-demo">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-view-code">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;