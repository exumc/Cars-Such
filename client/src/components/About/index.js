import React from "react";
import "./style.css";

function About(props) {
  return (
    <section className="about">
      <div className="row white-text center">
        <div className="col s4 offset-s4">
          <p className="black-text">
            Keep It Running comes as the brain child of Helder Calado, Chris
            Pierre-Lewis, Cord Exum, Leslie Morris, and Alan Lopez. We set out
            to build an application that would not only benefit ourselves in our
            immeadiate lives but to also continue to do so throughout it's
            usage. We all started from a cohort of the UCSD Full-Stack Web
            Development Bootcamp and quickly gravitated towards working
            together, and working together well more importantly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
