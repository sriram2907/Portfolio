import React from "react";

const Live = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#f7931a", // vibrant orange
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      {/* Centered dark card */}
      <div
        style={{
          position: "relative",
          width: 700,
          maxWidth: "95vw",
          height: 440,
          background: "#181a1b",
          borderRadius: 24,
          boxShadow: "0 16px 64px #c96a0a44, 0 2px 16px #000a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Subtle background image overlay (placeholder) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80') center/cover no-repeat",
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        {/* Logo top left */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 36,
            fontWeight: 700,
            fontSize: 18,
            color: "#fff",
            letterSpacing: 2,
            zIndex: 2,
            fontFamily: 'Montserrat, Arial, sans-serif',
          }}
        >
          MOTIVATOR
        </div>
        {/* Nav top right */}
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 36,
            display: "flex",
            gap: 32,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: 2,
            zIndex: 2,
          }}
        >
          <span style={{ color: "#fff", opacity: 0.8, cursor: "pointer" }}>HOME</span>
          <span style={{ color: "#f7931a", textShadow: "0 2px 8px #f7931a55", cursor: "pointer" }}>LIVE</span>
          <span style={{ color: "#fff", opacity: 0.8, cursor: "pointer" }}>WORK</span>
        </div>
        {/* Main text center */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              fontFamily: 'Pacifico, "Brush Script MT", cursive',
              fontSize: 72,
              color: "#f7931a",
              letterSpacing: 2,
              marginBottom: 8,
              textShadow: "0 4px 24px #f7931a33",
            }}
          >
            Type
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#f7b95a",
              letterSpacing: 8,
              fontWeight: 400,
              opacity: 0.7,
              marginTop: 0,
            }}
          >
            SOMETHING
          </div>
        </div>
        {/* Glowing orange button bottom left */}
        <button
          style={{
            position: "absolute",
            left: 36,
            bottom: 32,
            background: "linear-gradient(90deg, #f7b95a, #f7931a)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            border: "none",
            borderRadius: 8,
            padding: "12px 32px",
            boxShadow: "0 2px 16px #f7931a88, 0 0 0 4px #fff0",
            cursor: "pointer",
            letterSpacing: 2,
            transition: "box-shadow 0.2s, background 0.2s",
          }}
          onMouseOver={e => (e.currentTarget.style.boxShadow = "0 4px 32px #f7931a, 0 0 0 4px #fff2")}
          onMouseOut={e => (e.currentTarget.style.boxShadow = "0 2px 16px #f7931a88, 0 0 0 4px #fff0")}
        >
          Layouts
        </button>
        {/* Right vertical line and dots */}
        <div
          style={{
            position: "absolute",
            right: 36,
            top: 100,
            bottom: 60,
            width: 2,
            background: "linear-gradient(to bottom, #fff2 60%, #f7931a 100%)",
            borderRadius: 1,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f7931a", marginBottom: 8, boxShadow: "0 0 8px #f7931a88" }} />
          <div style={{ flex: 1 }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff2", marginTop: 8 }} />
        </div>
      </div>
    </div>
  );
};

export default Live; 