import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile";

import "./style.css";

function Guest() {
  return (
    <section>
      <div className="row white-text center">
        <div className="col s4 offset-s4">
          <p>
            Save the clock tower. Yeah, who are you? Unroll their fire. Can I go
            now, Mr. Strickland? Pretty Mediocre photographic fakery, they cut
            off your brother's hair. What did you say? Ahh. Ahh. Yeah, where
            does he live? Nothing, nothing, nothing, look tell her destiny has
            brought you together, tell her that she's the most beautiful you
            have ever seen. Girls like that stuff. What, what are you doing
            George? Good, you could start by sweeping the floor.
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

function User() {
  return <Profile />;
}

function Home(props) {
  const isLoggedIn = props.loggedIn;
  if (isLoggedIn) {
    return <User />;
  }
  return <Guest />;
}

export default Home;
