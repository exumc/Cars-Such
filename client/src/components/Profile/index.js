import React from "react";
import "./style.css";

function About(props) {
  // let alan = require('../../images/alan.jpg')

  return (
    <section>
    <hr/>
    
    <div className="container">
        <div className="row">
            <div className="col-sm-10">
                <h1>User name</h1>
            </div>
        </div>
        <div className="row"/>
            <div className="col-sm-3">
                {/* <!--left col--> */}


                <div className="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail"
                        alt="avatar"/>
                    <h6>Upload a different photo...></h6>
                    <input type="file" className="text-center center-block file-upload"/>
                </div>
                <br/>




                <ul className="list-group">
                    <li className="list-group-item text-muted">Recent Destinations <i className="fa fa-dashboard fa-1x"></i></li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Home</strong></span> 125 miles</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Work</strong></span> 13 miles</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Ya moms house</strong></span> 37 miles</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>HER moms house</strong></span> 78 miles</li>
                </ul>


            </div>
            {/* <!--/col-3--> */}
            <div className="col-sm-9">
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
                    <li><a data-toggle="tab" href="#messages">Vehicle 1</a></li>
                 
                  
                </ul>


                <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <hr/>
                        <form className="form" action="##" method="post" id="registrationForm">
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="first_name">
                                        <h4>First name</h4>
                                    </label>
                                    <input type="text" className="form-control" name="first_name" id="first_name"
                                        placeholder="first name" title="enter your first name if any."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="last_name">
                                        <h4>Last name</h4>
                                    </label>
                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name"
                                        title="enter your last name if any."/>
                                </div>
                            </div>

                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="phone">
                                        <h4>Phone</h4>
                                    </label>
                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone"
                                        title="enter your phone number if any."/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-xs-6">
                                    <label for="mobile">
                                        <h4>Mobile</h4>
                                    </label>
                                    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number"
                                        title="enter your mobile number if any."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="email">
                                        <h4>Email</h4>
                                    </label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com"
                                        title="enter your email."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="email">
                                        <h4>Location</h4>
                                    </label>
                                    <input type="email" className="form-control" id="location" placeholder="somewhere"
                                        title="enter a location"/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="password">
                                        <h4>Password</h4>
                                    </label>
                                    <input type="password" className="form-control" name="password" id="password"
                                        placeholder="password" title="enter your password."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="password2">
                                        <h4>Verify</h4>
                                    </label>
                                    <input type="password" className="form-control" name="password2" id="password2"
                                        placeholder="password2" title="enter your password2."/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <br/>
                                    <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i>
                                        Save</button>
                                    <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i>
                                        Reset</button>
                                </div>
                            </div>
                        </form>

                        <hr/>

                    </div>
                    {/* <!--/tab-pane--> */}
                    <div className="tab-pane" id="messages">

                        <h2></h2>

                        <hr/>
                        <form className="form" action="##" method="post" id="registrationForm">
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="year">
                                        <h4>Year</h4>
                                    </label>
                                    <input type="text" className="form-control" name="vehicle Year" id="year"
                                        placeholder="Year" title="enter vehicle year"/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="Make">
                                        <h4>Make</h4>
                                    </label>
                                    <input type="text" className="form-control" name="last_name" id="make" placeholder="Make"
                                        title="enter vehicle make."/>
                                </div>
                            </div>

                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="Vehicle model">
                                        <h4>Vehicle Model</h4>
                                    </label>
                                    <input type="text" className="form-control" name="model" id="model" placeholder="model"
                                        title="enter vehicle model"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-xs-6">
                                    <label for="mobile">
                                        <h4>Vehicle Type</h4>
                                    </label>
                                    <input type="text" className="form-control" name="vehicle type" id="vehicletype" placeholder="Vehicle type"
                                        title="enter vehicle type."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="text">
                                        <h4>Drive Type</h4>
                                    </label>
                                    <input type="text" className="form-control" name="Drive type" id="text" placeholder="Drive type"
                                        title="enter Drive type."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="horse power">
                                        <h4>Horse Power</h4>
                                    </label>
                                    <input type="text" className="form-control" id="horsepower" placeholder="horse power"
                                        title="enter horse power"/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="vehicle weight">
                                        <h4>Vehicle Weight</h4>
                                    </label>
                                    <input type="number" className="form-control" name="vehicle weight" id="weight"
                                        placeholder="Vehicle weight" title="enter vehicle weight."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="password2">
                                        <h4>Cylinders</h4>
                                    </label>
                                    <input type="number" className="form-control" name="Cylinders" id="Cylinders"
                                        placeholder="Cylinders" title="enter Cylinders."/>
                                </div>
                            </div>
                            <div className="form-group">

                                    <div className="col-xs-6">
                                        <label for="vehicle weight">
                                            <h4>Last Mileage Date</h4>
                                        </label>
                                        <input type="date" className="form-control" name="last date" id="date"
                                            title="enter your vehilce weight"/>
                                    </div>
                                </div>
                                <div className="form-group">

                                        <div className="col-xs-6">
                                            <label for="Current Mileage">
                                                <h4>Current Mileage</h4>
                                            </label>
                                            <input type="number" className="form-control" name="Current Mileage" id="vehiclemileage"
                                                placeholder="Current Mileage" title="enter your vehicle mileage."/>
                                        </div>
                                    </div>
                                    <div className="form-group">

                                            <div className="col-xs-6">
                                                <label for="Last Mileage">
                                                    <h4>Last Updated Mileage</h4>
                                                </label>
                                                <input type="text" className="form-control" name="last Mileage" id="lastmileage"
                                                    placeholder="Last Mileage" title="enter your Last Mileage."/>
                                            </div>
                                        </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <br/>
                                    <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i>
                                        Save</button>
                                    <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i>
                                        Reset</button>
                                </div>
                            </div>
                        </form>

                    </div>
                    {/* <!--/tab-pane--> */}
                    <div className="tab-pane" id="settings">


                        <hr/>
                        <form className="form" action="##" method="post" id="registrationForm">
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="first_name">
                                        <h4>First name</h4>
                                    </label>
                                    <input type="text" className="form-control" name="first_name" id="first_name"
                                        placeholder="first name" title="enter your first name if any."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="last_name">
                                        <h4>Last name</h4>
                                    </label>
                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name"
                                        title="enter your last name if any."/>
                                </div>
                            </div>

                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="phone">
                                        <h4>Phone</h4>
                                    </label>
                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone"
                                        title="enter your phone number if any."/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-xs-6">
                                    <label for="mobile">
                                        <h4>Mobile</h4>
                                    </label>
                                    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number"
                                        title="enter your mobile number if any."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="email">
                                        <h4>Email</h4>
                                    </label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com"
                                        title="enter your email."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="email">
                                        <h4>Location</h4>
                                    </label>
                                    <input type="email" className="form-control" id="location" placeholder="somewhere"
                                        title="enter a location"/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="password">
                                        <h4>Password</h4>
                                    </label>
                                    <input type="password" className="form-control" name="password" id="password"
                                        placeholder="password" title="enter your password."/>
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="password2">
                                        <h4>Verify</h4>
                                    </label>
                                    <input type="password" className="form-control" name="password2" id="password2"
                                        placeholder="password2" title="enter your password2."/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <br/>
                                    <button className="btn btn-lg btn-success pull-right" type="submit"><i className="glyphicon glyphicon-ok-sign"></i>
                                        Save</button>
                                    <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                {/* <!--/tab-pane--> */}
            </div>
            {/* <!--/tab-content--> */}

        </div>
        {/* <!--/col-9--> */}
    
</section>
  );
}

export default About;
