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
          className={`${classes.navbarBrand} 
          ${classes.navbarMain}`}>

          {/* Football icon (will become brand logo) */}

            <NavLink 
              to="/" 
              exact 
              className={classes.navbarBrand}>
              <i style={{color:'white'}}className="far fa-futbol"></i>
            </NavLink>

            {/* Team home page link */}

          <NavLink 
            to="/home/" 
            exact 
            className={classes.navLink}>
            <span className={classes.navElem}>
             Home  
            </span> 
            <i className="fas fa-home"></i>
          </NavLink>

          {/* Squad page link */}

          <NavLink 
            to="/squad/" 
            exact 
            className={classes.navLink}>
            <span 
              className={classes.navElem}> 
              Squad 
            </span> 
        
            <i className="fas fa-users"></i>
          </NavLink>

          {/* Stats page link */}

          <NavLink 
            to="/stats/" 
            exact 
            className={classes.navLink}>
            <span 
            className={classes.navElem}>
             Stats 
             </span> 
             <i className="fas fa-chart-line"></i>
          </NavLink>

            {/* Login burger menu */}

          <NavbarToggler 
          onClick={this.toggleNavbar} 
          className={classes.toggler} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <ul className={classes.navbarNav}>
                <li className={classes.navItem}>
                  <NavLink 
                  to="/login/" 
                  exact 
                  className={`${classes.navLink}
                  ${classes.loginMenu}`}
                  >
                    Login
                  </NavLink>
                </li>
                <li 
                className={classes.navItem}>
                  <NavLink 
                  to="/register/" 
                  exact 
                  className={`${classes.navLink}
                  ${classes.loginMenu}`}
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                  to="/about/" 
                  exact 
                  className={`${classes.navLink}
                  ${classes.loginMenu}`}
                  >
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
