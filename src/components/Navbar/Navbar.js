import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from"./Navbar.module.css";
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
        <Navbar light 
          className={classes.navbarBrand} 
          className={classes.navbarMain}>
            <NavLink 
              to="/" 
              exact 
              className="navbar-brand">
              <i style={{color:'white'}}className="far fa-futbol"></i>
            </NavLink>
          <NavLink 
            to="/home/" 
            exact 
            className={classes.navLink}>
            <span className='navel'> Home </span> <i className="fas fa-home"></i>
          </NavLink>
          <NavLink 
            to="/squad/" 
            exact 
            className={classes.navLink}>
            <span 
              className='navel'> Squad </span> 
            <i className="fas fa-users"></i>
          </NavLink>
          <NavLink 
            to="/stats/" 
            exact className={classes.navLink}>
            <span className='navel'> Stats </span> <i className="fas fa-chart-line"></i>
          </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className="toggler" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/login/" exact className="nav-link login-menu">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register/" exact className="nav-link login-menu">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/" exact className="nav-link login-menu">
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
