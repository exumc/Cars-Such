import React from "react";
import "./style.css";
import withAuth from "../withAuth";
import Home from "./subcomponents/Home";
import Vehicle from "./subcomponents/Vehicle";
import { Tabs, Tab } from 'react-materialize';
//added import to the API -- Helder
import API from "../../utils/API"
//turned the function into a class 
class Profile extends React.Component {
  // Must initialize state first
  state = {
    userDetails: {},
    userCars: ""
  }

  componentDidMount() {
    API
      .getUser("5c54a0586f5161041cda39b3")
      .then(res => {
        var now = new Date(res.data.cars[0].dateMileageUpdate);
        var today = now.toLocaleDateString()
        console.log(today);
        this.setState({
          userDetails: res.data,
          userCars: res.data.cars[0]
        });
        this.state.userCars.dateMileageUpdate = today;
        console.log(this.state.userCars.dateMileageUpdate);

      });
  }

  render() {
    return (
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col l10">
              <h1>User name</h1>
            </div>
          </div>

          <div className="row">

            <div className="col s3">

              <div className="col s12" id="profile-image">
                <img
                  src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Upload a different photo...</h6>
                <input
                  type="file"
                  className="text-center center-block file-upload"
                />
              </div>
              <ul className="list-group">
                <li className="list-group-item text-muted">
                  Recent Destinations <i className="fa fa-dashboard fa-1x" />
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Home</strong>
                  </span>
                  125 miles
            </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Work</strong>
                  </span>
                  13 miles
            </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Ya moms house</strong>
                  </span>
                  37 miles
            </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>HER moms house</strong>
                  </span>
                  78 miles
            </li>
              </ul>
            </div>
            <div className="col s9">
              <Tabs className="tabs">
                <Tab title="Home" active>
                  <Home
                    firstName={this.state.userDetails.firstname}
                    lastName={this.state.userDetails.lastname}
                    email={this.state.userDetails.email}
                  />
                </Tab>
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
                    currentMileage={this.state.userCars.currentMileage}

                  />
                </Tab>
              </Tabs>
            </div>
          </div>

        </div>


      </section>
    );
  }
}

export default (Profile);