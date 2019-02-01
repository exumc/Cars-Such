import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper white">
          <div className="myRow">
            <Link to='/'><span className="brand-logo center black-text bold">
              Keep it Running
            </span></Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down thin">
              <li>
                <Link to='/profile'>
                  <i class="fas fa-user-circle" />
                </Link>
              </li>

              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
