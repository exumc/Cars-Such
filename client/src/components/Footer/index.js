import React from "react";
import "./style.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer grey darken-3">
        <div className="footer-copyright">
          <div className="container center">
          <iframe src='https://webchat.botframework.com/embed/KIRBY-QnA-Bot?s=_lT2vfCPriE.cwA.q_E.Uayli8H0yMh-Bndz-MekTTW2gFu0dBJ2x7V7vKm9l3k'  style='min-width: 400px; width: 100%; min-height: 500px;'></iframe>
            © 2019 Keep it Running by the Power Coders
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;