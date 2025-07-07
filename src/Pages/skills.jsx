import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiMongodb, SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Skills() {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF41";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // 🐢 Slower Matrix: was 33ms, now 80ms
    const interval = setInterval(draw, 80);
    return () => clearInterval(interval);
  }, []);

  const techStack = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 color="#e34c26" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: <FaCss3Alt color="#2965f1" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: <FaJs color="#f0db4f" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "React", icon: <FaReact color="#61dafb" />, link: "https://react.dev/" },
      { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" />, link: "https://tailwindcss.com/" },
      { name: "Vite", icon: <SiVite color="#646cff" />, link: "https://vitejs.dev/" },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs color="#3c873a" />, link: "https://nodejs.org/" },
      { name: "Express.js", icon: <SiExpress color="#ffffff" />, link: "https://expressjs.com/" },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" />, link: "https://www.mongodb.com/" },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt color="#f1502f" />, link: "https://git-scm.com/" },
      { name: "GitHub", icon: <FaGithub color="#ffffff" />, link: "https://github.com/" },
      { name: "Figma", icon: <FaFigma color="#a259ff" />, link: "https://figma.com/" },
    ],
  };

  return (
    <>
      <canvas
        id="matrix-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          background: "#000",
        }}
      />

      <div style={styles.wrapper}>
        <div style={styles.vscodeWindow}>
          <div style={styles.titleBar}>
            <span style={styles.close} />
            <span style={styles.minimize} />
            <span style={styles.maximize} />
          </div>

          <h1 style={styles.heading}>🚀 My Tech Stack</h1>

          {Object.entries(techStack).map(([section, skills]) => (
            <div key={section}>
              <h2 style={styles.section}>{section}</h2>
              <div style={styles.grid}>
                {skills.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.card}
                  >
                    <div style={{ fontSize: "2.5rem" }}>{s.icon}</div>
                    <p>{s.name}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <Link to="/" style={styles.backBtn}>
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  vscodeWindow: {
    width: "90%",
    maxWidth: "1000px",
    background: "rgba(30,30,30,0.75)",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
    backdropFilter: "blur(15px)",
    color: "#fff",
    fontFamily: "Menlo, monospace",
    position: "relative",
  },
  titleBar: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  close: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#ff5f56",
  },
  minimize: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#ffbd2e",
  },
  maximize: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#27c93f",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  section: {
    fontSize: "1.5rem",
    margin: "30px 0 10px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    paddingBottom: "5px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
    transition: "transform 0.3s, box-shadow 0.3s",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  },
  backBtn: {
    marginTop: "30px",
    display: "inline-block",
    fontSize: "14px",
    color: "#8ecaff",
    textDecoration: "none",
  },
};

// 👇 Add hover effects globally (or move to App.css)
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  a:hover {
    transform: scale(1.08) !important;
    box-shadow: 0 6px 15px rgba(0,255,100,0.3) !important;
  }
`;
document.head.appendChild(styleTag);
