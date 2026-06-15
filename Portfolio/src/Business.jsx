import React from "react";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const businesses = [
  {
    name: "Joje Store",
    description: "Custom clothing brand — designed and printed apparel built around original drops.",
    tag: "Apparel",
    url: "#",
  },
  {
    name: "Joje Gears",
    description: "Biking accessories — gear and add-ons made for riders who push their bikes hard.",
    tag: "Accessories",
    url: "#",
  },
  {
    name: "Norven Media",
    description: "Media company for advertising — also our photography and videography arm, handling campaigns end to end.",
    tag: "Media & Ads",
    url: "#",
  },
  {
    name: "Ather Edits",
    description: "Our editing studio — video and photo post-production for creators and brands.",
    tag: "Post-Production",
    url: "#",
  },
];

function Business() {
  return (
    <div className="page">
      <Nav />
      <header className="page-header">
        <Link to="/" className="page-back">← Back to Home</Link>
        <div className="section-tag">Ventures</div>
        <h1 className="section-title">Businesses</h1>
        <p className="section-sub">
          Outside of writing code, I run a small group of brands across apparel,
          biking gear, media production, and editing.
        </p>
      </header>

      <section className="section">
        <div className="card-grid">
          {businesses.map((b, i) => (
            <a className="info-card" href={b.url} key={b.name}>
              <span className="p-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{b.name}</h3>
                <p>{b.description}</p>
              </div>
              <span className="p-tag">{b.tag}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Business;
