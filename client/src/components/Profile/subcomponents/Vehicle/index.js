import React from "react";
import "./style.css";
import API from "../../../../utils/API";
import { Redirect } from 'react-router-dom'

class Vehicle extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      userCars: "",
      username: "",
      email: "",
      carIsSet: false,
      vin: "",
    }
  }

  componentDidMount() {
    let convertedDate = new Date(this.props.lastMileageDate);
    convertedDate = convertedDate.toLocaleDateString();
    console.log(this.props.carId);
    this.setState({
      year: this.props.year,
      make: this.props.make,
      model: this.props.model,
      type: this.props.type,
      driveType: this.props.driveType,
      hp: this.props.hp,
      fuelType: this.props.fuelType,
      noCylinders: this.props.noCylinders,
      weight: this.props.weight,
      lastMileageDate: convertedDate,
      currentMileage: "",
      lastMileage: this.props.currentMileage,
      carId: this.props.carId
    })

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.Auth.logout()
      .then(res => {
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  }

  handleSubmitUpdateCarInfo = (event) => {
    event.preventDefault();
    this.setState({
      year: this.state.year,
      make: this.state.make,
      model: this.state.model,
      type: this.state.type,
      driveType: this.state.driveType,
      hp: this.state.hp,
      fuelType: this.state.fuelType,
      noCylinders: this.state.noCylinders,
      weight: this.state.weight,
      lastMileageDate: new Date(),
      currentMileage: "",
      lastMileage: this.state.currentMileage,
      carId: this.state.carId
    })
    API.editCar(this.state.carId, this.state).then(res => {
    })
  }

  render() {
    return (
      <section className="vehicle">
        <div className="tab-panel" id="vehicles">
          <form
            className="form"
            onSubmit={this.handleSubmitUpdateCarInfo}
            id="registrationForm2"
          >
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="year">
                  <h6>Year</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="year"
                  id="year"
                  placeholder="year"
                  title="enter vehicle year"
                  value={this.state.year}
                  onChange={this.handleChange}

                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="Make">
                  <h6>Make</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="make"
                  id="make"
                  placeholder="make"
                  title="enter vehicle make."
                  value={this.state.make}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="Vehicle model">
                  <h6>Vehicle Model</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="model"
                  id="model"
                  placeholder="model"
                  title="enter vehicle model"
                  value={this.state.model}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="mobile">
                  <h6>Vehicle Type</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  id="type"
                  placeholder="type"
                  title="enter vehicle type."
                  value={this.state.type}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="text">
                  <h6>Drive Type</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="driveType"
                  id="driveType"
                  placeholder="drive type"
                  title="enter Drive type."
                  value={this.state.driveType}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="horse power">
                  <h6>Horse Power</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hp"
                  name="hp"
                  placeholder="horse power"
                  title="enter horse power"
                  value={this.state.hp}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="vehicle weight">
                  <h6>Vehicle Weight</h6>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  id="weight"
                  placeholder="weight"
                  title="enter vehicle weight."
                  value={this.state.weight}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="password2">
                  <h6>Cylinders</h6>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="noCylinders"
                  id="Cylinders"
                  placeholder="cylinders"
                  title="enter Cylinders."
                  value={this.state.noCylinders}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="Current Mileage">
                  <h6>Current Mileage</h6>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="currentMileage"
                  id="vehiclemileage"
                  placeholder="mileage"
                  title="enter your vehicle mileage."
                  value={this.state.currentMileage}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s6">
                <label htmlFor="last mileage">
                  <h6>Last Updated Mileage</h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastMileage"
                  id="lastmileage"
                  placeholder="Last Mileage"
                  title="enter your Last Mileage."
                  value={this.state.lastMileage}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col s12">
                <br />
                <button className="btn btn-large waves-effect waves-light light-blue lighten-2" type="submit">
                  <i className="fas fa-check"></i>Save

                    </button>
                <button className="btn btn-large waves-effect waves-light light-blue lighten-2" type="reset">
                  <i className="fas fa-redo"></i>Reset
                    </button>
              </div>
            </div>
          </form>

        </div>
        {/* <!--/tab-pane--> */}

      </section>
    )
  }
}
export default Vehicle;