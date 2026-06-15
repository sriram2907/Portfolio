import React from "react";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sriram-v-92389425b",
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#18181c"/>
        <path d="M10.666 13.333h3.111v1.333h.045c.433-.82 1.492-1.686 3.073-1.686 3.29 0 3.895 2.165 3.895 4.983v5.37h-3.222v-4.765c0-1.137-.02-2.6-1.584-2.6-1.586 0-1.828 1.24-1.828 2.52v4.845h-3.222v-10zM8.667 8.667a1.556 1.556 0 1 1 0 3.111 1.556 1.556 0 0 1 0-3.111zm1.611 4.666H7.056v10h3.222v-10z" fill="#00A0DC"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    url: "https://twitter.com/ItzSrii",
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#18181c"/>
        <path d="M25.333 11.267a6.6 6.6 0 0 1-1.885.516 3.293 3.293 0 0 0 1.443-1.816 6.574 6.574 0 0 1-2.084.797 3.283 3.283 0 0 0-5.592 2.99A9.325 9.325 0 0 1 8.373 10.6a3.283 3.283 0 0 0 1.016 4.378 3.267 3.267 0 0 1-1.487-.411v.041a3.283 3.283 0 0 0 2.632 3.218 3.29 3.29 0 0 1-.864.115c-.211 0-.417-.02-.617-.058a3.284 3.284 0 0 0 3.065 2.28A6.588 6.588 0 0 1 7.333 22.1c-.43 0-.855-.025-1.273-.074a9.29 9.29 0 0 0 5.034 1.475c6.042 0 9.353-5.006 9.353-9.353 0-.143-.003-.285-.01-.426a6.684 6.684 0 0 0 1.636-1.705z" fill="#1DA1F2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    url: "https://github.com/sriram2907",
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#18181c"/>
        <path d="M16 8C11.03 8 7 12.03 7 17c0 3.98 2.58 7.34 6.16 8.53.45.08.62-.2.62-.44 0-.22-.01-.8-.01-1.57-2.51.54-3.04-1.21-3.04-1.21-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.8 1.38 2.09.98 2.6.75.08-.58.31-.98.56-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.78.92-2.41-.09-.23-.4-1.16.09-2.41 0 0 .76-.24 2.5.92a8.6 8.6 0 0 1 2.28-.31c.77.01 1.54.11 2.28.31 1.74-1.16 2.5-.92 2.5-.92.49 1.25.18 2.18.09 2.41.57.63.92 1.43.92 2.41 0 3.46-2.1 4.22-4.1 4.45.32.28.6.83.6 1.67 0 1.2-.01 2.17-.01 2.47 0 .24.17.52.62.44C22.42 24.34 25 20.98 25 17c0-4.97-4.03-9-9-9z" fill="#fff"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    url: "https://instagram.com/srixxam",
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#18181c"/>
        <rect x="10" y="10" width="12" height="12" rx="4" fill="#fff"/>
        <circle cx="16" cy="16" r="3" fill="#E1306C"/>
        <circle cx="21" cy="11" r="1" fill="#E1306C"/>
      </svg>
    ),
  },
];

function Contact() {
  return (
    <div className="page">
      <Nav />
      <header className="page-header" style={{ minHeight: "100vh", justifyContent: "center" }}>
        <Link to="/" className="page-back">← Back to Home</Link>
        <div className="contact-grid">
          <div>
            <div className="section-tag">Get in touch</div>
            <div className="contact-card">
              <div className="contact-avatar">
                <img src="/me2.jpg" alt="Sriram" />
              </div>
              <div>
                <div className="contact-name">Sriram</div>
                <div className="contact-links">
                  {socialLinks.map((link) => (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.label}>
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="thank-you">
            <h2>Thank You<br />2026</h2>
            <div className="contact-cta">
              <a
                href="https://drive.google.com/file/d/1-f0toLT6PGF7umGM21R30MIXVbuvCtbl/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="skill-chip cta-link"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contact;
