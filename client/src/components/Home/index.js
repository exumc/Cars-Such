import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Home(props) {
  return (
    <section>
      <div className="row white-text center">
        <div className="col s4 offset-s4">
          <p>
            “The place to improve the world is first in one's own heart and head
            and hands, and then work outward from there.”
            <br />
            ― Robert M. Pirsig, Zen and the Art of Motorcycle Maintenance
          <br />
          <br />
            At Keep It Running we aim to put the knowledge and capability into
            the hands of people that wish to improve the world around them.
            Starting with that which takes them from place to place every day.
            Learning to care for and maintain one's own vehicle not only saves
            money but also instills a sense of pride, growth in knowledge, and
            confidence in ability that can be turned to time and time again.
          </p>
        </div>
      </div>
      <div className="container center login">
        <Link to="/login">
          <span
            class="btn grey lighten-4 grey-text text-darken-4"
            href="/login"
          >
            Login/Register
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Home;
