import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar className="navbarMain">
          <NavLink to="/" exact className="navbar-brand" href="#">
            <img
              src="https://www.iflmadrid.com/sites/default/files/styles/medium/public/team/logo/branch_liverpool2.jpg?itok=gCP3jpTE"
              className="img-thumbnail"
              alt="badge"
            />
          </NavLink>
          <NavLink to="/" exact className="nav-link">
            Home
          </NavLink>
          <NavLink to="/squad/" exact className="nav-link">
            Squad
          </NavLink>
          <NavLink to="/stats/" exact className="nav-link">
            Stats
          </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className="toggler" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/login/" exact className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register/" exact className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/" exact className="nav-link">
                    About
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
