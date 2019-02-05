import React from "react";
import { Link } from "react-router-dom";
import AuthService from '../AuthService';
import API from "../../utils/API"

import "./style.css";

class  Register extends React.Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      firstname:"",
      lastname:"",
      email:"",
      password:"",
    }
  }
  

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUp(this.state.firstname,this.state.firstname ,this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };
 render(){
  return (
    <section className="signin">
      <div className="container">
        <center>
          <div class="section" />
          <h5 class="black-text">Register Your account</h5>
          <div class="section" />
          <div class="container">
            <div class="z-depth-1 grey lighten-4 row login-form">
              <form class="col s12" onSubmit={this.handleFormSubmit}>
                <div class="row">
                  <div class="col s12" />
                </div>

                <div class="row">
                  <div class="input-field col s6">
                    <input
                      class="validate"
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={this.state.firstname}
                      onChange={this.handleChange}
                    />
                    <label for="firstName">First Name</label>
                  </div>
                  <div class="input-field col s6">
                    <input
                      class="validate"
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={this.state.lastname}
                      onChange={this.handleChange}
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
                      value={this.state.email}
                      onChange={this.handleChange}
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
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <label for="password">Enter your password</label>
                  </div>
                  <div class="input-field col s12">
                    <input
                      class="validate"
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.handleChange}
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
                      Register
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
}

export default Register;
