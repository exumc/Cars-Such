import React from "react";
import "./style.css";

function Home(props) {

  return (
          <div className="tab-content">
            <div className="tab-panel" id="home">
              <hr />
              <form
                className="form"
                action="##"
                method="post"
                id="registrationForm1"
              >
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="first_name">
                      <h6>First name</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      id="first_name"
                      placeholder="first name"
                      title="enter your first name if any."
                      value={props.firstName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="last_name">
                      <h6>Last name</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      id="last_name"
                      placeholder="last name"
                      title="enter your last name if any."
                      value={props.lastName}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="phone">
                      <h6>Phone</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="enter phone"
                      title="enter your phone number if any."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="mobile">
                      <h6>Mobile</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobile"
                      id="mobile"
                      placeholder="enter mobile number"
                      title="enter your mobile number if any."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="email">
                      <h6>Email</h6>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="you@email.com"
                      title="enter your email."
                      value={props.email}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="email">
                      <h6>Location</h6>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="location"
                      placeholder="somewhere"
                      title="enter a location"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="password">
                      <h6>Password</h6>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="password"
                      title="enter your password."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="password2">
                      <h6>Verify</h6>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password2"
                      id="password2"
                      placeholder="verify password"
                      title="enter your password again."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <br />
                    <button className ="btn btn-large waves-effect waves-light light-blue lighten-2" type="submit">
                      <i className="glyphicon glyphicon-ok-sign" />
                      Save
                    </button>
                    <button className="btn btn-large waves-effect waves-light light-blue lighten-2" type="reset">
                      <i className="glyphicon glyphicon-repeat" />
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </div>

  );
}

export default Home;