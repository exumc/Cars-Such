import React from "react";
import "./style.css";
import withAuth from "../withAuth";
import Home from "./subcomponents/Home";
import Vehicle from "./subcomponents/Vehicle";
import { Tabs, Tab } from "react-materialize";
//added import to the API -- Helder
import API from "../../utils/API"
//turned the function into a class
import UserModal from "../Modal"

class Profile extends React.Component {
  // Must initialize state first
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      userCars: "",
      username: "",
      email: "",
      carIsSet: false
    };
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
      <section className="mainSection">
      <div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col l10">
              <h1>{this.props.user.name}</h1>
            </div>
          </div>

          <div className="row">
            
            <div className="col s12">
              <Tabs className="tabs">
                <Tab title="Home" active>
                  <Home
                    firstName={this.state.userDetails.firstname}
                    lastName={this.state.userDetails.lastname}
                    email={this.state.userDetails.email}
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
                      currentMileage={this.state.userCars.currentMileage}
                    />
                  </Tab>
                ) : 
                <Tab>
                  <UserModal />
                </Tab>
                }
              </Tabs>
            </div>
          </div>
        
        
        </div>
      </section>
    );
  }
}

export default withAuth(Profile);
