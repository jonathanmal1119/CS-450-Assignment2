import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div class="about-item">
          <div class="about-photo" aria-label="Your Photo">
            <img alt="Jonathan Malave" src="/Images/JM_Profile_Picture.jpg"/>
          </div>
          <div class="about-info">
            <h2 class="about-title">About Me</h2>
            <p class="about-text">Hey! I’m a senior studying Computer Science at NJIT. I like building things that work well and make life easier. During my internship at MarketMaker CRE, I created a QA automation system using Python and Selenium, and helped set up CI/CD pipelines to speed up testing. I’ve also worked on personal projects like an AI-powered PC builder and a course planner tool using React and Express. Outside of school and coding, I’m into cars, building PCs, and Legos. I enjoy learning, figuring things out, and turning ideas into something real.</p>
            <h3 class="skills-title">Skills &amp; Technologies</h3>
            <div class="skills-chips">
              
              <div>
                <span class="skills-name">Languages: </span>
                <span> Python, Java, C/C++, C#, TypeScript, JavaScript, HTML, CSS, SQL</span>
              </div>

              <div>
                <span class="skills-name">Libraries &amp; Frameworks: </span>
                <span>Spring Boot, React.js, Node.js, Express.js, Pandas, NumPy, Matplotlib, Scikit-learn, PyTorch, Selenium, .NET, WPF, XAML</span>
              </div>

              <div>
                <span class="skills-name">Technology &amp; Tools: </span>
                <span>WS, Azure DevOps, MySQL, MongoDB, PostgreSQL, Git, Microsoft Office Suite, Figma, Bash/Shell Scripting</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;