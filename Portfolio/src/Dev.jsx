import React from "react";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "GitHub", "VS Code"];

const projects = [
  {
    name: "Portfolio Site",
    description: "React-based personal portfolio with animated sections.",
    url: "https://codedbyram.vercel.app/",
    tag: "Web",
  },
  {
    name: "WebCast",
    description: "WebRTC movie room — host rooms, watch together, synced face cams.",
    url: "https://webcast-nu.vercel.app/",
    tag: "Real-time",
  },
  {
    name: "iCal Calculator",
    description: "Minimal Apple-styled scientific calculator.",
    url: "https://ical-the-calculator.vercel.app/",
    tag: "UI",
  },
  {
    name: "Food Price Compare",
    description: "Compares prices across Blinkit, Swiggy & Zomato. In development.",
    url: "#",
    tag: "In Progress",
  },
];

function Dev() {
  return (
    <div className="page">
      <Nav />
      <header className="page-header">
        <Link to="/" className="page-back">← Back to Home</Link>
        <div className="section-tag">Profile</div>
        <h1 className="section-title">Development</h1>
        <p className="section-sub">
          Full Stack Developer in my 7th semester of B.Tech (Information Technology)
          at KCG College of Technology. I build with React on the frontend and
          Node.js / MongoDB on the backend, currently sharpening backend and cloud
          deployment skills to go full-time.
        </p>
      </header>

      <section className="section">
        <div className="about-grid">
          <div className="about-photo">
            <img src="/2.jpg" alt="Sriram" />
          </div>
          <div className="about-body">
            <p>
              I speak English and Tamil fluently and I'm learning Japanese. Outside
              of code, I'm into cinematography, gaming on my PS5, riding bikes, and
              Apple-inspired minimal UI/UX design — all of which feed back into how
              I approach building products.
            </p>
            <div className="about-cols">
              <div className="about-block">
                <h3>Skills</h3>
                <div className="skill-row">
                  {skills.map((s) => (
                    <span className="skill-chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="about-block">
                <h3>Education</h3>
                <div className="timeline-item">
                  <div className="t-date">2022 — Present</div>
                  <div className="t-title">B.Tech, Information Technology</div>
                  <div className="t-sub">KCG College of Technology</div>
                </div>
              </div>
              <div className="about-block">
                <h3>Languages</h3>
                <div className="lang-row">
                  <span>Tamil</span><div className="lang-bar"><div className="lang-bar-fill" style={{width: "100%"}} /></div><span>100%</span>
                </div>
                <div className="lang-row">
                  <span>English</span><div className="lang-bar"><div className="lang-bar-fill" style={{width: "95%"}} /></div><span>95%</span>
                </div>
                <div className="lang-row">
                  <span>Japanese</span><div className="lang-bar"><div className="lang-bar-fill" style={{width: "15%"}} /></div><span>15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-tag">Work</div>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Projects</h2>
        <div className="card-grid">
          {projects.map((p, i) => (
            <a className="info-card" href={p.url} target="_blank" rel="noopener noreferrer" key={p.name}>
              <span className="p-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </div>
              <span className="p-tag">{p.tag}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dev;
