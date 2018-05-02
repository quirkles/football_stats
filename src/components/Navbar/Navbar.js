import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navbar = () => {
  return (
    <div>
      {/* Icon */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" exact className="navbar-brand" href="#">
          <img
            src="https://www.iflmadrid.com/sites/default/files/styles/medium/public/team/logo/branch_liverpool2.jpg?itok=gCP3jpTE"
            className="img-thumbnail"
            alt='badge'
          />{" "}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Pages */}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <NavLink to="/" exact className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/squad/" exact className="nav-link">
                Squad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/stats/" exact className="nav-link">
                Stats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about/" exact className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
          {/* Login and Register */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/login/" exact className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register/" exact className="nav-link">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
