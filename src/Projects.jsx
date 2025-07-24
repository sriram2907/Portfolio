import React from "react";

const socialLinks = [
  { icon: "🌐", url: "#" }, // Website
  { icon: "🐦", url: "#" }, // Twitter
  { icon: "💼", url: "#" }, // LinkedIn
  { icon: "📸", url: "#" }, // Instagram
];

const Projects = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "radial-gradient(ellipse at 50% 40%, #23242a 60%, #18181c 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: 'Inter, Arial, sans-serif',
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Top left minimal icon/text */}
      <div style={{
        position: "absolute",
        top: 32,
        left: 48,
        fontSize: 16,
        color: "#b0b0b0",
        opacity: 0.7,
        letterSpacing: 2,
      }}>
        //SRIX*LAB
      </div>
      {/* Top right minimal icon */}
      <div style={{
        position: "absolute",
        top: 32,
        right: 48,
        fontSize: 24,
        color: "#b0b0b0",
        opacity: 0.7,
      }}>
        ●●●
      </div>
      {/* Centered card */}
      <div
        style={{
          position: "relative",
          width: 380,
          maxWidth: "90vw",
          minHeight: 520,
          background: "rgba(30,30,34,0.85)",
          borderRadius: 28,
          border: "2px solid #fff2",
          boxShadow: "0 8px 48px #000a, 0 1.5px 8px #00ff9d22",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 32px 32px 32px",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Top row: green dot and password dots */}
        <div style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: 24,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 18, height: 18, background: "#00ff9d", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ color: "#fff", fontSize: 18, letterSpacing: 4 }}>*******</span>
          </div>
          <span style={{ color: "#fff", fontSize: 24, opacity: 0.7 }}>...</span>
        </div>
        {/* Centered image */}
        <img
          src="/me2.jpg"
          alt="Your portrait"
          style={{
            width: 180,
            height: 180,
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 8px 40px #000a, 0 1.5px 8px #00ff9d33",
            border: "4px solid #23242a",
            marginBottom: 32,
          }}
        />
        {/* Name/branding and subtitle */}
        <div style={{
          fontSize: 38,
          fontWeight: 800,
          letterSpacing: 2,
          marginBottom: 8,
          textAlign: "center",
        }}>
          srix*lab
        </div>
        <div style={{
          fontSize: 18,
          color: "#b0b0b0",
          opacity: 0.9,
          letterSpacing: 2,
          marginBottom: 32,
          textAlign: "center",
        }}>
          FULL STACK DEVELOPER
        </div>
        {/* Social icons row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          marginTop: 16,
        }}>
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                fontSize: 26,
                opacity: 0.8,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = 1)}
              onMouseOut={e => (e.currentTarget.style.opacity = 0.8)}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 