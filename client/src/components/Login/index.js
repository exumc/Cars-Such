import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Login(props) {
  return (
    <div class="signup-form">
      <form action="/login" method="post">
        <h2>Login</h2>

        <div class="input-field col s12">
          <input
            placeholder="Username"
            id="username"
            type="text"
            class="validate"
          />
          <label for="username">Username</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="text" class="validate" />
          <label for="password">Password</label>
        </div>
        <div class="form-group input-field">
          <select class="form-control" id="type" name="size">
            <option value="" disabled selected>
              Choose your type
            </option>
            <option>client</option>
            <option>admin</option>
          </select>
        </div>
        <div class="col s12">
          <button
            class="modal-close btn waves-effect waves-light red"
            type="submit"
            id="login"
            name="action"
          >
            Login
          </button>
        </div>
        <div class="col s12 login-help">
          <a href="/register" class="red-text modal-trigger">
            No account? Register here.
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
