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
      servicesFromDataBase: [],
      carmileage: "",
      carmileageUpdateDate: ""
    };
  }

  componentDidMount() {
    API
      .getUser(this.props.id)
      .then(res => {
        if (res.data.cars[0]) {
          if (res.data.cars[0].services[0]) {
            this.setState({
              servicesFromDataBase: res.data.services,
              carmileage: res.data.cars[0].currentMileage,
              carmileageUpdateDate: res.data.cars[0].dateMileageUpdate,
              carServiceDate: res.data.cars[0].services[0].dateServiced,
              carServiceMileage: res.data.cars[0].services[0].mileage
            });
            let myCarObj = {
              initialDate: this.state.carServiceDate,
              initialMileage: this.state.carServiceMileage,
              currentMileage: this.state.carmileage,
              currentDate: this.state.carmileageUpdateDate,
            }
            this.calculateAverageMileage(myCarObj);

            API.getService(res.data.cars[0]._id).then(res => {
              this.setState({ servicesFromDataBase: res.data.services })
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
          }
        }
      })
  }

  calculateAverageMileage(objInfo) {
    let initialDate = objInfo.initialDate;
    let initialMileage = objInfo.initialMileage;
    let currentMileage = objInfo.currentMileage;
    let currentDate = objInfo.CurrentDate;
    let date_1 = new Date(initialDate);
    let date_2 = new Date(currentDate);
    var timediff = Math.abs(date_2.getTime() - date_1.getTime());
    let dayDifference = Math.ceil(timediff / (1000 * 3600 * 24));
    let myNewObj = {
      mileageDif: currentMileage - initialMileage,
      daysDif: dayDifference
    }
  }

  // avgPerDay = mileageDif / daysDif
  // currentLife = avgPerDay * daysDiff
  
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
                life={1 - (currentLife / service.totalLife)}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default CarProfile;