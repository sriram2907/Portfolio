import React, { useRef, useEffect } from "react";

const grid1 = [
  { title: "Webcase" },
];
const grid2 = [
  { title: "Project Beta" },
];

const glassCardStyle = {
  background: "rgba(255,255,255,0.13)",
  borderRadius: 18,
  boxShadow: "0 8px 32px #000a",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s cubic-bezier(.4,0,.2,1)",
  cursor: "pointer",
  minWidth: 220,
  minHeight: 120,
  maxWidth: 260,
  margin: "auto",
  border: "1.5px solid rgba(255,255,255,0.18)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
};

function handleCardMouseMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;
  card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
  card.style.boxShadow = "0 16px 48px #00ff9d33";
}
function handleCardMouseLeave(e) {
  const card = e.currentTarget;
  card.style.transform = "none";
  card.style.boxShadow = glassCardStyle.boxShadow;
}

const AnimatedGridBg = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let t = 0;
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Minimal, slow-moving grid of dots
      const spacing = 48;
      const dotRadius = 1.8;
      const speed = 0.008; // very slow
      const offsetX = Math.sin(t * speed) * 12;
      const offsetY = Math.cos(t * speed * 0.7) * 12;
      for (let y = 0; y < height + spacing; y += spacing) {
        for (let x = 0; x < width + spacing; x += spacing) {
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, dotRadius, 0, 2 * Math.PI);
          ctx.fillStyle = "rgba(180,180,200,0.13)";
          ctx.shadowColor = "#fff";
          ctx.shadowBlur = 2;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      t += 1;
      requestAnimationFrame(draw);
    }
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 0, pointerEvents: "none" }} />;
};

const AnimatedGradientBg = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let t = 0;
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Minimal Apple-style: 2 large, soft, pastel blobs
      const blobs = [
        { x: width * 0.35 + Math.sin(t/90) * 80, y: height * 0.45 + Math.cos(t/120) * 60, r: 420, c: "#e0e7ff" }, // soft blue
        { x: width * 0.65 + Math.cos(t/110) * 90, y: height * 0.55 + Math.sin(t/100) * 70, r: 400, c: "#ffe7e0" }, // soft peach
      ];
      blobs.forEach(blob => {
        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        grad.addColorStop(0, blob.c + "55"); // very low opacity
        grad.addColorStop(1, blob.c + "00");
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, 2 * Math.PI);
        ctx.filter = "blur(32px)";
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.filter = "none";
      });
      t += 1;
      requestAnimationFrame(draw);
    }
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 1, pointerEvents: "none" }} />;
};

const Showcase = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        fontFamily: 'Inter, Arial, sans-serif',
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        overflow: "hidden",
      }}
    >
      {/* Floating top bar */}
      <div style={{
        position: "fixed",
        top: 24,
        left: 0,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        zIndex: 10,
        pointerEvents: "none"
      }}>
        <div style={{
          background: "rgba(255,255,255,0.13)",
          borderRadius: 16,
          boxShadow: "0 2px 16px #0003",
          border: "1.5px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          display: "flex",
          gap: 24,
          padding: "10px 32px",
          pointerEvents: "auto"
        }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 17, letterSpacing: 1, opacity: 0.85, transition: "opacity 0.2s" }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.85}>Home</a>
          <a href="/projects" style={{ color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 17, letterSpacing: 1, opacity: 0.85, transition: "opacity 0.2s" }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.85}>Contact</a>
        </div>
      </div>
      <AnimatedGridBg />
      <AnimatedGradientBg />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 48,
          width: "100%",
          maxWidth: 1200,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          zIndex: 2,
        }}
      >
        {/* Grid 1 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, minWidth: 260, flex: 1 }}>
          {grid1.map((proj, i) => (
            <div
              key={proj.title}
              style={glassCardStyle}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div style={{ padding: 36, textAlign: "center" }}>
                <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1, color: "#fff" }}>{proj.title}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Grid 2 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, minWidth: 260, flex: 1 }}>
          {grid2.map((proj, i) => (
            <div
              key={proj.title}
              style={glassCardStyle}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div style={{ padding: 36, textAlign: "center" }}>
                <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1, color: "#fff" }}>{proj.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Responsive style for mobile: stack grids */}
      <style>{`
        @media (max-width: 700px) {
          .showcase-grids {
            flex-direction: column !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Showcase; 