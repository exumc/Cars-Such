import React from "react";
import "./style.css";
import services from "../../services.json";
import Service from "../Service";
import API from "../../utils/API"
import { Button, Row, Modal } from "react-materialize";
import Select from 'react-select';

const options = [
  { value: 'Oil Change', label: 'Oil Change' },
  { value: 'Air Filter', label: 'Air Filter' },
  { value: 'Tune Up', label: 'Tune Up' },
  { value: 'Shocks and Struts', label: 'Shocks and Struts' },
  { value: 'Brakes', label: 'Brakes' },
  { value: 'Battery', label: 'Battery' },
  { value: 'Coolant', label: 'Coolant' },
  { value: 'Timing Belt', label: 'Timing Belt' },
  { value: 'Transmission', label: 'Transmission' },
  { value: 'Spark Plugs', label: 'Spark Plugs' },
  { value: 'Power Steering', label: 'Power Steering' },
  { value: 'Tire Rotation', label: 'Tire Rotation' },
  { value: 'Air Conditioning', label: 'Air Conditioning' }
];

class CarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services,
      value: "Select",
      options: "",
      userCars: "",
      servicesFromDataBase: [],
      carmileage: "",
      carmileageUpdateDate: "",
      averageMileagePerDay: "",
      selectedOption: null,
      carId: "",
      mileage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onServiceSubmit = this.onServiceSubmit.bind(this);
  }

  handleServiceChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
  }

  componentDidMount() {

    API.getUser(this.props.id).then(res => {
      if (res.data.cars[0]) {
        this.setState({ carId: res.data.cars[0]._id });
        if (res.data.cars[0].services[0]) {
          this.setState({
            servicesFromDataBase: res.data.services,
            carmileage: res.data.cars[0].currentMileage,
            // carmileageUpdateDate: res.data.cars[0].dateMileageUpdate,
            // carServiceDate: res.data.cars[0].services[0].dateServiced,
            carServiceMileage: res.data.cars[0].services[0].mileage
          });

          let myCarObj = {
            // initialDate: this.state.carServiceDate,
            initialMileage: this.state.carServiceMileage,
            currentMileage: this.state.carmileage
            // currentDate: this.state.carmileageUpdateDate,
          };
          // this.calculateAverageMileage(myCarObj);

          API.getService(res.data.cars[0]._id)
            .then(res => {
              this.setState({ servicesFromDataBase: res.data.services });
            })
            .then(data => {
              let a = this.state.services;
              let b = this.state.servicesFromDataBase;
              console.log(b);
              for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < b.length; j++) {
                  if (b[j].serviceType === a[i].name) {
                    a[i].mileage = b[j].mileage;
                    a[i].serviceId = b[j]._id;

                    let serviceLife = b[j].nextServiceMiles - b[j].mileage;
                    let milesCounter = myCarObj.currentMileage - a[i].mileage;
                    console.log(
                      "current car mileage: " + myCarObj.currentMileage
                    );
                    console.log("service Life: " + serviceLife);
                    console.log("miles counter: " + milesCounter);
                    a[i].percentage =
                      100 - Math.floor((milesCounter / serviceLife) * 100);
                    console.log(a[i].percentage);
                  }
                }
              }
              let serviceList = a.filter(data => {
                if (data.percentage) {
                  return data;
                }
                return null
              });
              this.setState({ services: serviceList });
            });
        }
      }
    });
  }

  calculateAverageMileage(objInfo) {
    let initialDate = objInfo.initialDate;
    let initialMileage = objInfo.initialMileage;
    let currentMileage = objInfo.currentMileage;
    let currentDate = objInfo.currentDate;
    let date_1 = new Date(initialDate);
    let date_2 = new Date(currentDate);
    let differenceInDays = this.mydiff(date_1, date_2, "days");
    let averageMiles = Math.floor(
      (currentMileage - initialMileage) / differenceInDays
    );
    let myNewObj = {
      mileageDif: currentMileage - initialMileage,
      daysDif: differenceInDays,
      averageMileagePerDay: averageMiles
    };
    this.setState({ averageMileagePerDay: averageMiles });
    return myNewObj.averageMileagePerDay;
  }

  getPercentage(argDateServiced, argServiceLifeSpan) {
    let currentDate = new Date();
    argDateServiced = new Date(argDateServiced);
    let dateDifference = this.mydiff(argDateServiced, currentDate, "days");
    let milesCounter = dateDifference * this.state.averageMileagePerDay;
    let percentage = Math.floor((milesCounter / argServiceLifeSpan) * 100);
    let percentageLeft = 100 - percentage;
    return percentageLeft;
  }

  onServiceSubmit = event => {
    event.preventDefault();
    this.setState({ mileage: this.state.mileage })
    console.log(this.state.selectedOption.value);
    console.log(this.state.mileage);
    let serviceExists = false;
    this.state.servicesFromDataBase.map(data => {
      console.log(data)
      if (data.serviceType === this.state.selectedOption.value) {
        serviceExists = true
      }
    })
    if (!serviceExists) {
      API.addService(this.state.selectedOption.value, this.state.mileage, this.state.carId);
      // window.location.reload();
    }

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }

  render() {
    const { selectedOption } = this.state;

    return (
      <section className="mainSection">
        <div className="row center" id="car-services">
          <div className="row">
            <h2 className="">Your car services</h2>
            <br />
          </div>
          {this.state.services.map(service => {
            if (service.serviceId) {
              return (
                <Service
                  id={service.id}
                  key={service.id}
                  name={service.name}
                  image={service.image}
                  partLife={service.percentage}
                  nameId={service.nameId}
                  carId={this.state.carId}
                  serviceId={service.serviceId}
                />
              );
            }
            return null
          })}

          <Row>
            <Modal
              className="services-modal"
              header="Your Services"
              trigger={<Button className="light-blue lighten-2" waves="light">Add a new service</Button>}
              actions={
                <div></div>
              }>
              <div className="modal-content">
                <h4>Select service to add</h4>
                <form onSubmit={this.onServiceSubmit}>
                  <Row>
                    <Select
                      value={selectedOption}
                      onChange={this.handleServiceChange}
                      options={options} />
                  </Row>
                  <Row>
                    <div className="input-field col s12">
                      <input
                        placeholder="Input current mileage amount for service completed"
                        name="mileage"
                        id="mileage"
                        type="text"
                        value={this.state.mileage}
                        onChange={this.handleChange}
                      />
                    </div>
                  </Row>
                  <div>
                    <Button className="light-blue lighten-2" type="submit">Submit Service</Button>
                  </div>
                </form>

              </div>
            </Modal>
          </Row>

        </div>
      </section>
    );
  }
}

export default CarProfile;