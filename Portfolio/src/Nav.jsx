import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav-pill">
    <NavLink to="/dev" className={({ isActive }) => isActive ? "active" : ""}>Dev</NavLink>
    <NavLink to="/business" className={({ isActive }) => isActive ? "active" : ""}>Business</NavLink>
    <NavLink to="/photography" className={({ isActive }) => isActive ? "active" : ""}>Photography</NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
    <span className="nav-indicator"></span>
  </nav>
);

export default Nav;
