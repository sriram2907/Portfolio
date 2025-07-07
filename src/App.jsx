import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaReddit,
  FaWhatsapp,
} from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import BoredSuggestion from "./Components/Api";
import Checkbox from "./Components/Light";
import Skills from "./Pages/skills";
import Loading from "./Components/Loading"; // ✅ Terminal loader

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loading />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <div className="main-container">
                <div className="grid-container">
                  <a
                    href="https://drive.google.com/file/d/1bLVyK2P6ohos1tMXO_z4yx74EOGnXFw-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-item item-1"
                  ></a>
                  <a
                    href="https://www.youtube.com/@Rams_650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-item item-2"
                  ></a>
                  <a
                    href="https://open.spotify.com/playlist/7EgbZx4zbgQziswCgvVKT7?si=76135731ad0241a5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-item item-3"
                  ></a>
                  <div className="grid-item item-4">
                    <video autoPlay loop muted playsInline className="bg-video">
                      <source src="/spotify-api.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="grid-item item-5"></div>
                  <a
                    href="https://www.linkedin.com/in/sri-ram-92389425b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-item item-6"
                  ></a>
                  <div className="grid-item item-7"></div>
                  <a
                    href="https://github.com/sriram2907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-item item-8"
                  ></a>
                  <a
                    href="mailto:sriramv1227@gmail.com"
                    className="grid-item item-9"
                  ></a>

                  {/* 🟢 Working Skills page route link */}
                  <Link to="/Skills" className="grid-item item-10"></Link>

                  <div className="grid-item item-11"></div>
                  <div className="grid-item item-12">
                    <Checkbox />
                  </div>

                  <div className="grid-item item-13">
                    <div className="social-icons">
                      <a href="https://www.instagram.com/srixxam/" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-box">
                          <FaInstagram size={40} color="white" />
                        </div>
                      </a>
                      <a href="https://x.com/ItzSrii" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-box">
                          <FaTwitter size={40} color="white" />
                        </div>
                      </a>
                      <a href="https://discord.gg/ram4956" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-box">
                          <FaDiscord size={40} color="white" />
                        </div>
                      </a>
                      <a href="https://wa.me/+918925426667" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-box">
                          <FaWhatsapp size={40} color="white" />
                        </div>
                      </a>
                      <a href="https://www.reddit.com/u/Fit-Vanilla1019/s/DZA19xkQxl" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-box">
                          <FaReddit size={40} color="white" />
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="grid-item item-14"></div>
                </div>

                <footer className="Terms">
                  <p>
                    © {new Date().getFullYear()} Sriram's Portfolio. All rights reserved. <br />
                    Use of this site constitutes acceptance of our Terms & Conditions and Privacy Policy.
                  </p>
                </footer>
              </div>
            </div>
          }
        />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
