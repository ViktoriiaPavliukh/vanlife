import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <div className="header-items">
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>
        <nav className="header-nav">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Vans
          </NavLink>
          <Link to="login" className="login-link">
            <img
              src="src/assets/icons/log-in.svg"
              className="login-icon"
              alt="login"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
