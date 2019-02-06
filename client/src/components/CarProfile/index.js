import React from "react";
import "./style.css";
import services from "../../services.json";
import Service from "../Service";
import API from "../../utils/API"
class CarProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      services,
      userCars: "",
      servicesFromDataBase: []
    };

  }

  componentDidMount() {

    API
      .getUser(this.props.id)
      .then(res => {
        API.getService(res.data.cars[0]._id).then(res => {
          this.setState({ servicesFromDataBase: res.data.services });
        }).then(data => {
          let a = this.state.services
          let b = this.state.servicesFromDataBase
          for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {

              if (b[j].serviceType === a[i].name) {
                a[i].mileage = b[j].mileage;
                a[i].dateServiced = b[j].dateServiced;
              }
            }
          }
          this.setState({ services: a })
        })
      })
  }

  render() {
    return (
      <section className="mainSection">
        <div className="container" id="car-services">
          <h2 className="center">Your car services</h2>
          {this.state.services.map(service => {
            return (
              <Service
                id={service.id}
                key={service.id}
                name={service.name}
                image={service.image}
                partLife={service.partLife}


              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default CarProfile;