import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../AuthService";
import "./style.css";

class Login extends React.Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }
  state = {
    email: "",
    password: ""
  };

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace("/");
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile`);
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div className="mainSection">
        <div className="container">
          <center>
            <div className="section" />
            <h5 className="black-text">Please, login into your account</h5>
            <div className="section" />
            <div className="container">
              <div className="z-depth-1 grey lighten-4 row login-form">
                <form className="col s12" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col s12" />
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <label for="email">Enter your email</label>

                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <label for="password">Enter your password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <label className="right">
                      <a className="light-blue-text" href="#!">
                        <b>Forgot Password?</b>
                      </a>
                    </label>
                  </div>

                  <br />
                  <center>
                    <div className="row">
                      <button
                        type="submit"
                        name="btn_login"
                        id="userLogin"
                        className="col s12 btn btn-large waves-effect light-blue lighten-2"
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
      </div>
    );
  }
}

export default Login;
