import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink className={({ isActive }) => (isActive ? "active" : "not-active")} to="/">Home</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "not-active")}
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "not-active")}
        to="/contact"
      >
        contact
      </NavLink>
    </div>
  );
};

export default Navbar;
