
import React from "react";
import "./style.css";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col m10 offset-m1 s12">
              <h2 className="center-align">Contact Form</h2>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col m6 s12">
                      <input id="first_name" type="text" className="validate" />
                      <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col m6 s12">
                      <input id="last_name" type="text" className="validate" />
                      <label for="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col m6 s12">
                      <i className="mdi-content-mail prefix" />
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        required
                      />
                      <label for="email">Email</label>
                    </div>
                    <div className="input-field col m6 s12">
                      <i className="mdi-maps-store-mall-directory prefix" />
                      <input id="company" type="text" className="validate" />
                      <label for="company">Company</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="message" className="materialize-textarea" />
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <label>How Did You Find Us?</label>
                      <br />
                    </div>
                    <div className="input-field col m3 s6 center-align">
                      <input name="group1" type="radio" id="google" />
                      <label for="google">Google</label>
                    </div>
                    <div className="input-field col m3 s6 center-align">
                      <input name="group1" type="radio" id="customer" />
                      <label for="customer">Customer</label>
                    </div>
                    <div className="input-field col m3 s6 center-align">
                      <input name="group1" type="radio" id="store" />
                      <label for="store">Store</label>
                    </div>
                    <div className="input-field col m3 s6 center-align">
                      <input name="group1" type="radio" id="other" />
                      <label for="other">Other</label>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="row">
                    <div className="input-field col s12">
                      <label>Communication Preferences</label>
                      <br />
                    </div>
                    <div className="input-field col m4 s12 center-align">
                      <input name="group2" type="checkbox" id="emailComm" />
                      <label for="emailComm">Email</label>
                    </div>
                    <div className="input-field col m4 s12 center-align">
                      <input name="group2" type="checkbox" id="callComm" />
                      <label for="callComm">Call Me</label>
                    </div>
                    <div className="input-field col m4 s12 center-align">
                      <input name="group2" type="checkbox" id="newsletter" />
                      <label for="newsletter">Newsletter</label>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="row">
                    <div className="col m12">
                      <p className="right-align">
                        <button
                          className="btn btn-large waves-effect waves-light"
                          type="button"
                          name="action"
                        >
                          Send Message
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
