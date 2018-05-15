import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

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
        <Navbar light className="navbarMain">
          <NavLink to="/" exact className="navbar-brand">
            <i class="far fa-futbol"></i>
          </NavLink>
          <NavLink to="/home/" exact className="nav-link">
            <span className='navel'> Home </span> <i className="fas fa-home"></i>
          </NavLink>
          <NavLink to="/squad/" exact className="nav-link">
          <span className='navel'> Squad </span> <i className="fas fa-users"></i>
          </NavLink>
          <NavLink to="/stats/" exact className="nav-link">
          <span className='navel'> Stats </span> <i class="fas fa-chart-line"></i>
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
