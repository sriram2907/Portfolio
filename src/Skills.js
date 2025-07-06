import React from "react";
import "./Skills.css";
import { Link } from "react-router-dom"; // ✅ Use Link instead of <a>

export default function Skills() {
  return (
    <div className="skills-page">
      <h1 className="title">My Skills</h1>
      <div className="container">
        <div className="skill-card">
          <img src="/Images/react.png" alt="React" />
          <span>React.js</span>
        </div>
        <div className="skill-card">
          <img src="/Images/nextjs.png" alt="Next.js" />
          <span>Next.js</span>
        </div>
        <div className="skill-card">
          <img src="/Images/node.png" alt="Node.js" />
          <span>Node.js</span>
        </div>
        <div className="skill-card">
          <img src="/Images/mongodb.png" alt="MongoDB" />
          <span>MongoDB</span>
        </div>
        <div className="skill-card">
          <img src="/Images/javascript.png" alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="skill-card">
          <img src="/Images/html.png" alt="HTML5" />
          <span>HTML5</span>
        </div>
        <div className="skill-card">
          <img src="/Images/css.png" alt="CSS3" />
          <span>CSS3</span>
        </div>
        <div className="skill-card">
          <img src="/Images/git.png" alt="Git" />
          <span>Git & GitHub</span>
        </div>
      </div>

      {/* ✅ Use React Router Link instead of <a> */}
      <Link to="/" className="back">← Back to Home</Link>
    </div>
  );
}
