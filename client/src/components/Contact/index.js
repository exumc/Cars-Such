// Copy this folder to make a new component. Rename the class and export appropriately

import React from "react";
import "./style.css";

class Contact extends React.Component {
    render() {
        return (
            <div class="container">
    <div class="row">
        <div class="col m10 offset-m1 s12">
            <h2 class="center-align">Contact Form</h2>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col m6 s12">
                            <input id="first_name" type="text" class="validate"/>
                            <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field col m6 s12">
                            <input id="last_name" type="text" class="validate"/>
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col m6 s12">
                            <i class="mdi-content-mail prefix"></i>
                            <input id="email" type="email" class="validate" required/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col m6 s12">
                            <i class="mdi-maps-store-mall-directory prefix"></i>
                            <input id="company" type="text" class="validate"/>
                            <label for="company">Company</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                          <textarea id="message" class="materialize-textarea"></textarea>
                          <label for="message">Message</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                          <label for="budget">Budget</label>
                          <br/>
                        </div>
                        <div class="input-field col s12">
                            <select class="browser-default" id="budget">
                              <option value="" selected disabled>Choose your option</option>
                              <option value="1">&lt; $4000</option>
                              <option value="2">$4000 - $9000</option>
                              <option value="3">&gt; $9000</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                          <label>How Did You Find Us?</label>
                          <br/>
                        </div>
                        <div class="input-field col m3 s6 center-align">
                          <input name="group1" type="radio" id="google" />
                          <label for="google">Google</label>
                        </div>
                        <div class="input-field col m3 s6 center-align">
                          <input name="group1" type="radio" id="customer" />
                          <label for="customer">Customer</label>
                        </div>
                        <div class="input-field col m3 s6 center-align">
                          <input name="group1" type="radio" id="store" />
                          <label for="store">Store</label>
                        </div>
                        <div class="input-field col m3 s6 center-align">
                          <input name="group1" type="radio" id="other" />
                          <label for="other">Other</label>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="row">
                        <div class="input-field col s12">
                          <label>Communication Preferences</label>
                          <br/>
                        </div>
                        <div class="input-field col m4 s12 center-align">
                          <input name="group2" type="checkbox" id="emailComm" />
                          <label for="emailComm">Email</label>
                        </div>
                        <div class="input-field col m4 s12 center-align">
                          <input name="group2" type="checkbox" id="callComm" />
                          <label for="callComm">Call Me</label>
                        </div>
                        <div class="input-field col m4 s12 center-align">
                          <input name="group2" type="checkbox" id="newsletter" />
                          <label for="newsletter">Newsletter</label>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="row">
                        <div class="col m12">
                         <p class="right-align"><button class="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default Contact;