import { useState, useEffect } from "react";
import Button from "./Components/Button";
import Switch from "./Components/Toggle"; 
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Switch darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />

      <div className="main-container">
        <div className="grid-container">
          <div className="grid-item item-1">grid 1</div>
          <div className="grid-item item-2"></div>
          <div className="grid-item item-3"></div>
          <div className="grid-item item-4"></div>
          <div className="grid-item item-5"></div>
          <div className="grid-item item-6">grid 6</div>
          <div className="grid-item item-7"></div>
          <div className="grid-item item-8"></div>
          <div className="grid-item item-9"></div>
          <div className="grid-item item-10">grid 10</div>
          <div className="grid-item item-11">
            <Button />
          </div>
          <div className="grid-item item-12"></div>
          <div className="grid-item item-13"></div>
          <div className="grid-item item-14">grid 14</div>
        </div>
      </div>
    </div>
  );
}
