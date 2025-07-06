import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaReddit,
  FaWhatsapp,
} from "react-icons/fa";
import BoredSuggestion from "./Components/Api";
export default function App() {
  return (
    <div className="app">
      <div className="main-container">
        <div className="grid-container">

          <a
            href="https://drive.google.com/file/d/1bLVyK2P6ohos1tMXO_z4yx74EOGnXFw-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item item-1"
          ></a>

          <a href="https://www.youtube.com/@Rams_650" target="_blank" rel="noopener noreferrer">
          <div className="grid-item item-2"></div>
          </a>

          <a
            href="https://open.spotify.com/playlist/7EgbZx4zbgQziswCgvVKT7?si=76135731ad0241a5"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item item-3"
          ></a>
          
          <div className="grid-item item-4">Spotify API</div>

          
          <div className="grid-item item-5">MY PAGE</div>
          
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
          >
            <div className="grid-item item-8"> 
            <img
              src="/Images/Github2.png"
              alt="Github"
              width={100}
              height={100}
              />
          </div>
          </a>
          
          

        <a href="mailto:sriramv1227@gmail.com">
  <div className="grid-item item-9">

  </div>
</a>


          <div className="grid-item item-10"></div>
          <div className="grid-item item-11">
          <img src="/Images/Monkey.jpg" alt="Monkey" width={150} height={150} />

          </div>
          <div className="grid-item item-12"></div>

          <div className="grid-item item-13">
            <div className="social-icons">
              
              <a href="https://www.instagram.com/srixxam/" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-box"><FaInstagram size={40} color="white"/></div>
              </a>

              <a href="https://x.com/ItzSrii" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-box"><FaTwitter size={40} color="white"/></div>
              </a>
              
              <a href="https://discord.gg/ram4956" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-box"><FaDiscord size={40} color="white"/></div>
              </a>
              
              <a href="https://wa.me/+918925426667>" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-box"><FaWhatsapp size={40} color="white"/></div>
              </a>

              <a href="https://www.reddit.com/u/Fit-Vanilla1019/s/DZA19xkQxl" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-box"><FaReddit size={40} color="white"/></div>
              </a>

            </div>
          </div>

          <div className="grid-item item-14"></div>

        </div>
          <footer className="Terms">
            <p>
              © {new Date().getFullYear()} Sriram's Portfolio. All rights
              reserved. <br />
              Use of this site constitutes acceptance of our Terms & Conditions
              and Privacy Policy.
            </p>
          </footer>
      </div>
    </div>
  );
}
