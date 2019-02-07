import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



class Nav extends React.Component {
  render() {
    return (
      <nav>

        <div className="nav-wrapper white">
          
          <div className="myRow">
            <Link to="/">
              <span className="brand-logo center black-text bold">
                Keep it Running
              </span>
            </Link>
            

            <a
              href="menu"
              data-target="mobile-demo"
              className="sidenav-trigger black-text right"
            >
              <i className="fas fa-bars" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down thin">
              <li>
                <Link to="/profile">
                  <i className="fas fa-user-circle" />
                </Link>
              </li>
              <li>
              <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/profile">
              <i className="fas fa-user-circle" />
            </Link>{" "}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        
      </nav>
    );
  }
}

export default Nav;
