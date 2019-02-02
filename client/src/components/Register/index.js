import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Register(props) {
  return (
    <section className="signin">
      <div className="container">
        <center>
          <div class="section" />
          <h5 class="black-text">Register Your account</h5>
          <div class="section" />
          <div class="container">
            <div class="z-depth-1 grey lighten-4 row login-form">
              <form class="col s12" method="post">
                <div class="row">
                  <div class="col s12" />
                </div>

                <div class="row">
                  <div class="input-field col s6">
                    <input
                      class="validate"
                      type="text"
                      name="firstName"
                      id="firstName"
                    />
                    <label for="firstName">First Name</label>
                  </div>
                  <div class="input-field col s6">
                    <input
                      class="validate"
                      type="text"
                      name="lastName"
                      id="lastName"
                    />
                    <label for="email">Last Name</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s12">
                    <input
                      class="validate"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label for="email">Enter your email</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s12">
                    <input
                      class="validate"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <label for="password">Enter your password</label>
                  </div>
                  <div class="input-field col s12">
                    <input
                      class="validate"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <label for="password">Confirm your password</label>
                  </div>
                  
                </div>

                <br />
                <center>
                  <div class="row">
                    <button
                      type="submit"
                      name="btn_login"
                      id="userLogin"
                      class="col s12 btn btn-large waves-effect light-blue lighten-2"
                    >
                      Login
                    </button>
                  </div>
                </center>
              </form>
            </div>
          </div>
          <Link to="/register">Register an Account</Link>
        </center>
      </div>
    </section>
  );
}

export default Register;
