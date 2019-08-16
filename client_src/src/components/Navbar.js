import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Meetupz
            </a>
            <a data-target="main-menu" className="sidenav-trigger show-on-large">
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <NavLink to="/">
                  <i className="fa fa-users" />
                  Meetups
                </NavLink>
              </li>
            </ul>
            <ul className="sidenav" id="main-menu">
              <li>
                <NavLink to="/">
                  <i className="fa fa-users" />
                  Meetups
                </NavLink>
              </li>
              <li>
                <NavLink to="/meetups/add">
                  <i className="fa fa-plus" />
                  Add Meetups
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <i className="fa fa-question-circle" />
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
