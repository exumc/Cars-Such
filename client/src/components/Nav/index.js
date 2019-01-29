import React from "react";
import "./style.css";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-4">
          <a href="/" className="brand-logo center">
            Keep it Running
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/profile">
                <i class="fas fa-user-circle" />
              </a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
