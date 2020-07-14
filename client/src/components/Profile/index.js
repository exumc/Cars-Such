import React from "react";
import "./style.css";

import Home from "./subcomponents/Home";
import Vehicle from "./subcomponents/Vehicle";
import { Row, Tab, Modal, Button, Tabs } from "react-materialize";
import API from "../../utils/API";
import AuthService from "../AuthService";
import withAuth from "../withAuth";

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
      vin: "",
      userId: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    if (this.Auth.loggedIn()) {
      API.addCar(this.state.userDetails._id, this.state.vin);
    }
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      if (res.data.cars[0]) {
        this.setState({ carIsSet: true, userId: this.props.user.id });
        var now = new Date(res.data.cars[0].dateMileageUpdate);
        var today = now.toLocaleDateString();
        this.setState({
          userDetails: res.data,
          userCars: res.data.cars[0]
        });

        // edited this code, Helder need to check if it still works the way he intends -Cord
        this.state.userCars.dateMileageUpdate = today;
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
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col s10">
              <h1>{`${this.state.userDetails.firstname} ${this.state.userDetails.lastname}`}</h1>
            </div>
          </div>

          <Row>
            <Modal
              header="Modal Header"
              trigger={
                <Button
                  className="light-blue lighten-4 black-text mb-4"
                  waves="light"
                >
                  Add Car
                </Button>
              }
              actions={
                <div>
                  <Button
                    type="submit"
                    className="btn btn-large waves-effect waves-light light-blue lighten-2"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              }
              className="add-car-modal"
            >
              <Row>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <input
                      placeholder="VIN"
                      s={6}
                      name="vin"
                      id="vin"
                      type="text"
                      value={this.state.vin}
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </Row>
            </Modal>
            <div className="row">
              <div className="col s12">
                <Tabs className="tabs">
                  <Tab title="Home" active>
                    <Home
                      firstName={this.state.userDetails.firstname}
                      lastName={this.state.userDetails.lastname}
                      email={this.state.userDetails.email}
                      handleChange={this.handleChange}
                      id={this.state.userId}
                    />
                  </Tab>

                  {this.state.carIsSet ? (
                    <Tab title="Vehicle">
                      <Vehicle
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
                        lastMileage={this.state.userCars.currentMileage}
                        currentMileage={this.state.userCars.currentMileage}
                        carId={this.state.userCars._id}
                        handleChange={this.handleChange}
                      />
                    </Tab>
                  ) : (
                    <Tab title="" />
                  )}
                </Tabs>
              </div>
            </div>

          </Row>
        </div>
      </section>
    );
  }
}

export default withAuth(Profile);
