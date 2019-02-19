import React from "react";
import { Link } from "react-router-dom";
import AuthService from '../AuthService';
import API from "../../utils/API"

import "./style.css";

class Register extends React.Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    }
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUp(this.state.firstname, this.state.lastname, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <section className="mainSection">
        <div className="container center">
            <h5 className="black-text">Register Your account</h5>
            <div className="container">
              <div className="z-depth-1 grey lighten-4 login-form">
                <form className="col s12" onSubmit={this.handleFormSubmit}>
                  <div className="row">
                    <div className="col s12" />
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                    <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">

                    <div className="input-field col s12">
                    <label htmlFor="email">Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                    <label htmlFor="email">Enter your email</label>
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
                    <label htmlFor="password">Enter your password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    
                  </div>

                  <br />
                    <div className="row">
                      <button
                        type="submit"
                        name="btn_login"
                        id="userLogin"
                        className="col s12 btn btn-large waves-effect light-blue lighten-2"
                      >
                        Register
                    </button>
                    </div>
                </form>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Register;
