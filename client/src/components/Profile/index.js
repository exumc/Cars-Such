import React from "react";
import "./style.css";
import withAuth from "../withAuth";
import Home from "./subcomponents/Home";
import Vehicle from "./subcomponents/Vehicle";
import AddVehicle from "./subcomponents/AddVehicle"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Row, Col } from "react-materialize";
import API from "../../utils/API"
import AuthService from '../AuthService';


class Profile extends React.Component {

  // Must initialize state first
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      userCars: "",
      username: "",
      email: "",
      carIsSet: false,
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();

  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.Auth.loggedIn()) {
      API.addCar(this.state.userDetails._id, this.state.value);
    }
  }

  handleLogout = (event) => {

    event.preventDefault();
    this.Auth.logout()
      .then(res => {
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  }

  componentDidMount() {
    console.log(this.props.user.id);
    API.getUser(this.props.user.id).then(res => {
      if (res.data.cars[0]) {
        this.setState({ carIsSet: true });
        var now = new Date(res.data.cars[0].dateMileageUpdate);
        var today = now.toLocaleDateString();
        console.log(today);
        this.setState({
          userDetails: res.data,
          userCars: res.data.cars[0]
        });

        // edited this code, Helder need to check if it still works the way he intends -Cord
        this.state.userCars.dateMileageUpdate = today;
        console.log(this.state.userCars.dateMileageUpdate);
      } else {
        this.setState({
          carIsSet: false,
          userDetails: res.data
        });
      }
    });
  }

  render() {
    return (
      <Router>

        <section className="mainSection">
          <div className="container">
            <div className="row">
              <div className="col s10">
                <h1>{`${this.state.userDetails.firstname} ${this.state.userDetails.lastname}`}</h1>
              </div>

            </div>

            <div className="row">

              <ul>

                <li>
                  <Link to='/profile' className="navTab center">Home</Link>


                </li>

                <li>
                  <Switch>
                    {this.state.carIsSet ?

                      <Link to='/profile/vehicle' className="navTab center">Vehicle</Link>


                      :

                      <Link to='/profile/addvehicle' className="navTab center">Add Vehicle</Link>


                    }
                  </Switch>
                </li>


              </ul>

            </div>


            <Col s={12}>
              <Route
                exact
                path="/profile"
                render={props => <Home {...props}
                  firstName={this.state.userDetails.firstname}
                  lastName={this.state.userDetails.lastname}
                  email={this.state.userDetails.email} />}
              />
              <Route
                path="/profile/addvehicle"
                render={props => <AddVehicle {...props}
                  value={props.value}
                  onChange={props.handleChange}
                  onClick={props.handleSubmit}

                />}
              />

              <Route
                exact
                path="/profile/vehicle"
                render={props => <Vehicle {...props}
                  year={this.state.userCars.year}
                  make={this.state.userCars.make}
                  model={this.state.userCars.model}
                  type={this.state.userCars.Vehicle_Type}
                  driveType={this.state.userCars.driveType}
                  hp={this.state.userCars.HP}
                  fuelType={this.state.userCars.fueltype}
                  noCylinders={this.state.userCars.noCylinders}
                  weight={this.state.userCars.grossWeightRating}
                  lastMileageDate={this.state.userCars.dateMileageUpdate}
                  currentMileage={this.state.userCars.currentMileage} />}
              />
            </Col>
            <Row>
              <button
                type="submit"
                name="btn_logout"
                id="userLogout"
                onClick={this.handleLogout}
                className="btn btn-large waves-effect red lighten-2"
              > Logout
          </button>
            </Row>
          </div>
        </section>
      </Router>
    );
  }
}

export default withAuth(Profile);