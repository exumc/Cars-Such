import React from "react";
import "./style.css";

function Vehicle(props) {

    return (
        <section className = "vehicle">
        <div className="tab-panel" id="vehicles">
            
              <form
                className="form"
                action="##"
                method="post"
                id="registrationForm2"
              >
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="year">
                      <h6>Year</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="vehicle Year"
                      id="year"
                      placeholder="year"
                      title="enter vehicle year"
                      value={props.year}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="Make">
                      <h6>Make</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="make"
                      id="make"
                      placeholder="make"
                      title="enter vehicle make."
                      value={props.make}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="Vehicle model">
                      <h6>Vehicle Model</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="model"
                      id="model"
                      placeholder="model"
                      title="enter vehicle model"
                      value={props.model}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="mobile">
                      <h6>Vehicle Type</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="vehicle type"
                      id="vehicletype"
                      placeholder="type"
                      title="enter vehicle type."
                      value={props.type}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="text">
                      <h6>Drive Type</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Drive type"
                      id="text"
                      placeholder="drive type"
                      title="enter Drive type."
                      value={props.driveType}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="horse power">
                      <h6>Horse Power</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="horsepower"
                      placeholder="horse power"
                      title="enter horse power"
                      value={props.hp}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="vehicle weight">
                      <h6>Vehicle Weight</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="vehicle weight"
                      id="weight"
                      placeholder="weight"
                      title="enter vehicle weight."
                      value={props.weight}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="password2">
                      <h6>Cylinders</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="Cylinders"
                      id="Cylinders"
                      placeholder="cylinders"
                      title="enter Cylinders."
                      value={props.noCylinders}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="vehicle weight">
                      <h6>Last Mileage Date</h6>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      id="date"
                      title="enter your vehilce weight"
                      placeholder={props.lastMileageDate}
                      value={props.lastMileageDate}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="Current Mileage">
                      <h6>Current Mileage</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="Current Mileage"
                      id="vehiclemileage"
                      placeholder="mileage"
                      title="enter your vehicle mileage."
                      value={props.currentMileage}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label for="last mileage">
                      <h6>Last Updated Mileage</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="last Mileage"
                      id="lastmileage"
                      placeholder="Last Mileage"
                      title="enter your Last Mileage."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <br />
                    <button className="btn btn-large waves-effect waves-light light-blue lighten-2" type="submit">
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
            {/* <!--/tab-pane--> */}
        </section>
    )
}
export default Vehicle;