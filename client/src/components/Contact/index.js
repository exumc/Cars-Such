import React from "react";
import "./style.css";

class Contact extends React.Component {

  render() {
        return (
            <div className="container">
    <div className="row">
    <div>""</div>
    <div>""</div>
        <div className="col m10 offset-m3 s8">
            <div className="row">
                <form className="col s8">
                    <div className="row">
                        <div className="input-field col m5 s8">
                            <input id="first_name" type="text" className="validate"/>
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col m5 s8">
                            <input id="last_name" type="text" className="validate"/>
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col m5 s8">
                            <input id="email" type="email" className="validate" required/>
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field col m5 s8">
                            <input id="company" type="text" className="validate"/>
                            <label for="company">Company</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col m10 s8">
                          <textarea id="message" className="materialize-textarea"></textarea>
                          <label for="message">Message</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col m7">
                         <p className="right-align"><button className="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
                        </div>
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
