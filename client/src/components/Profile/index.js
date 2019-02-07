import React from "react";
import "./style.css";
import withAuth from "../withAuth";
import Home from "./subcomponents/Home";
import Vehicle from "./subcomponents/Vehicle";
import { Tabs, Tab, Modal, Button, Row, Input, Col } from "react-materialize";
import API from "../../utils/API"
import ChatBot from "../ChatBot";
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
      vin: ""
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();

  }

  handleChange = (event) => {
    
    const { name, value } = event.target;
   this.setState({
     [name]: value
   });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.Auth.loggedIn()) {
    API.addcar(this.state.userDetails._id, this.state.vin)
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
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col s10">
              <h1>{`${this.state.userDetails.firstname} ${this.state.userDetails.lastname}`}</h1>
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

                {this.state.carIsSet ?

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
                  :
                  <Tab title="Add Car">
                    <Modal header='Modal Header'
                      trigger={<Button className="light-blue lighten-4 black-text" waves='light'>Add Car</Button>}>
                      <Row>
                        {/* <form onSubmit={this.handleSubmit}> */}
                        <Input placeholder="VIN" s={6} name="vin" label="" id="vin" type="text" value={this.state.vin} onChange={this.handleChange}/>
                        <Button 
                        type="submit"
                        onSubmit={this.handleSubmit}
                        
                        >Submit</Button>
                        {/* </form> */}
                      </Row>
                    </Modal>
                  </Tab>
                }
              </Tabs>
            </div>
          </div>
          <Row>
            <button
              type="submit"
              name="btn_logout"
              id="userLogout"
              onClick={this.handleLogout}
              className="btn btn-large waves-effect light-blue lighten-2"
            > Logout
          </button>
          </Row>
          <Row>
            <Col s={4}><ChatBot />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default withAuth(Profile);