import React from "react";
import "./style.css";
import services from "../../services.json";
import Service from "../Service";
class CarProfile extends React.Component {
  state = {
    services
  };
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
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default CarProfile;
