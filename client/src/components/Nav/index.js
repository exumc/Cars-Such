import React from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../AuthService";
import LogoutButton from "./LogoutButton";
import "./style.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
  }

  render() {
    if (this.Auth.loggedIn()) {
      return <MainNav id={this.Auth.getProfile().id} />;
    }
    return <GuestNav />;
  }
}

function MainNav(props) {
  return (
    <nav>
      <div className="nav-wrapper white">
        <div className="myRow">
          <NavLink to="/">
            <span className="brand-logo center black-text bold">
              Keep it Running
            </span>
          </NavLink>
          <a
            href="menu"
            data-target="mobile-demo"
            className="sidenav-trigger black-text right"
          >
            <i className="fas fa-bars" />
          </a>
          <ul className="right hide-on-med-and-down thin nav">
            <li>
              <NavLink to="/profile">
                <i className="fas fa-user-circle" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Car Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              {" "}
              <LogoutButton />
            </li>{" "}
          </ul>
        </div>
      </div>

      <ul className="sidenav nav" id="mobile-demo">
        <li>
          <NavLink to="/profile" className="sidenav-close">
            <i className="fas fa-user-circle" /><span>Profile</span>
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/" className="sidenav-close">
            Car Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="sidenav-close">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="sidenav-close">
            Contact
          </NavLink>
        </li>
        <li>
          {" "}
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

function GuestNav(props) {
  return (
    <nav>
      <div className="nav-wrapper white">
        <div className="myRow">
          <NavLink to="/">
            <span className="brand-logo center black-text bold">
              Keep it Running
            </span>
          </NavLink>
          <a
            href="menu"
            data-target="mobile-demo"
            className="sidenav-trigger black-text right"
          >
            <i className="fas fa-bars" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down thin">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink to="/profile" className="sidenav-close">
            <i className="fas fa-user-circle" />
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/" className="sidenav-close">
            Car Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="sidenav-close">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="sidenav-close">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
