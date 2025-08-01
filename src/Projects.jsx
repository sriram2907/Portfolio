import React from "react";
import { Link } from "react-router-dom"; // Ensure you're using React Router

const projects = [
  {
    name: "portfolio-site",
    description: "React-based personal portfolio with animated sections.",
    url: "https://codedbyram.vercel.app/",
  },
  {
    name: "food-price-compare",
  description: "Compares prices across Blinkit, Swiggy & Zomato. (UNDER DEVELOPMENT)",
    url: "#",
  },
  {
    name: "watch-party",
    description: "WebRTC based movie room with sync and webcam.",
    url: "https://webcast-nu.vercel.app/",
  },
  {
    name: "Apple Style calculator",
    description: "minimal aple styled simple scientific calculator.",
    url: "https://ical-the-calculator.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        color: "#00FF9D",
        minHeight: "100vh",
        fontFamily: "'Fira Code', monospace",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid #00FF9D33",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "800px",
          padding: "32px",
          boxShadow: "0 0 20px #00FF9D11",
        }}
      >
        {/* Terminal header */}
        <div
          style={{
            borderBottom: "1px solid #00FF9D22",
            paddingBottom: "12px",
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "#00FF9Daa",
          }}
        >
          <span>➜ srixlab@projects</span>
          <span>terminal — bash</span>
        </div>

        {/* Fake command */}
        <div style={{ marginBottom: "20px" }}>
          <span style={{ color: "#00FF9D" }}>srixlab@dev</span>:~${" "}
          <span style={{ color: "#fff" }}>ls projects</span>
        </div>

        {/* Project list */}
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <div>
              <span style={{ color: "#00FF9D" }}>➜</span>{" "}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00FF9D",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {project.name}
              </a>
            </div>
            <div
              style={{
                marginLeft: "28px",
                color: "#aaa",
                fontSize: "14px",
              }}
            >
              {project.description}
            </div>
          </div>
        ))}

        {/* Blinking cursor */}
        <div style={{ marginTop: "32px", fontSize: "16px" }}>
          <span style={{ color: "#00FF9D" }}>srixlab@dev</span>:~${" "}
          <span className="blinking-cursor">|</span>
        </div>

        {/* Action buttons */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "flex-start",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {/* Back to Home (React Router) */}
          <Link
            to="/"
            style={{
              backgroundColor: "#00FF9D22",
              color: "#00FF9D",
              border: "1px solid #00FF9D44",
              borderRadius: "6px",
              padding: "10px 20px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background 0.2s ease",
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = "#00FF9D33")}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = "#00FF9D22")}
          >
            ← Back to Home
          </Link>

          {/* Download CV */}
          <a
            href="https://drive.google.com/file/d/1alJxy290lnHMrKzCypT_P3w8bvXh56Mm/view?usp=sharing" // Make sure this file is in the public folder
            download="Sriram_CV.pdf"
            style={{
              backgroundColor: "#00FF9D22",
              color: "#00FF9D",
              border: "1px solid #00FF9D44",
              borderRadius: "6px",
              padding: "10px 20px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background 0.2s ease",
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = "#00FF9D33")}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = "#00FF9D22")}
          >
            ⬇ Download CV
          </a>
        </div>
      </div>

      {/* Blinking cursor CSS */}
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            width: 8px;
            height: 20px;
            background-color: #00FF9D;
            animation: blink 1s steps(2, start) infinite;
            vertical-align: middle;
            margin-left: 4px;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
