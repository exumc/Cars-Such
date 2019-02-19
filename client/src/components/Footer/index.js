import React from "react";
import "./style.css";
import ChatBot from "../ChatBot";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer grey darken-3">
        <div className="footer-copyright">
          <div className="container center">
            © 2019 Keep it Running by the Power Coders
          </div>
          <div className="kirbyBtn">
            <ChatBot />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
