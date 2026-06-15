import React from "react";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home() {
  return (
    <div className="site">
      <Nav />
      <section className="hero">
        <div className="hero-mark">SV</div>
        <div className="hero-content">
          <div className="hero-photo">
            <img src="/me2.jpg" alt="Sriram" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Portfolio <span className="year">2026</span>
            </h1>
            <span className="hero-role">
              <span className="dot" />
              Developer · Founder · Visual Storyteller
            </span>
            <div className="hero-menu">
              <Link to="/dev">Development</Link>
              <Link to="/business">Businesses</Link>
              <Link to="/photography">Photography</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">Pick a path to explore</div>
      </section>
    </div>
  );
}

export default Home;
