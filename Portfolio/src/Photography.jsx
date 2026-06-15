import React from "react";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Photography() {
  return (
    <div className="page">
      <Nav />
      <header className="page-header">
        <Link to="/" className="page-back">← Back to Home</Link>
        <div className="section-tag">Visuals</div>
        <h1 className="section-title">Photography & Film</h1>
        <p className="section-sub">
          Cinematography and photography work — through Norven Media and personal
          projects. Gallery coming soon.
        </p>
      </header>

      <section className="section">
        <div className="gallery-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="gallery-tile" key={i}>Coming Soon</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Photography;
