// Copy this folder to make a new component. Rename the className and export appropriately

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
                        <div className="input-field col m5 s12">
                            <form className="column-center">
                                <input id="first_name" type="text" className="validate"/>
                                <label for="first_name">First Name</label>
                            </form>
                        </div>
                        <div className="input-field col m5 s12">
                            <form className="column-center">
                                <input id="last_name" type="text" className="validate"/>
                                <label for="last_name">Last Name</label>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col m5 s12">
                            <form className="column-center">
                                <input id="email" type="email" className="validate" required/>
                                <label for="email">Email</label>
                            </form>
                        </div>
                        <div className="input-field col m5 s12">
                            <form className="column-center">
                                <input id="company" type="text" className="validate"/>
                                <label for="company">Company</label>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col m10 s12">
                          <textarea id="message" className="materialize-textarea"></textarea>
                          <label for="message">Message</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col m7">
                         <p className="right-align"><button className="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
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