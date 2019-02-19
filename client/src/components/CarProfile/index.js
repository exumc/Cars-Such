import React from "react";
import "./style.css";
import services from "../../services.json";
import Service from "../Service";
import API from "../../utils/API"
import {
  Collapsible,
  CollapsibleItem,
  Row,
  Col,
  ProgressBar,
  Modal,
  Button
} from "react-materialize";

class CarProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      services,
      userCars: "",
      servicesFromDataBase: [],
      carmileage: "",
      carmileageUpdateDate: "",
      averageMileagePerDay: "",
      carId: ""
    };



  }

  componentDidMount() {


    API
      .getUser(this.props.id)
      .then(res => {
        if (res.data.cars[0]) {
          this.setState({ carId: res.data.cars[0]._id })
          if (res.data.cars[0].services[0]) {
            this.setState({
              servicesFromDataBase: res.data.services,
              carmileage: res.data.cars[0].currentMileage,
              // carmileageUpdateDate: res.data.cars[0].dateMileageUpdate,
              // carServiceDate: res.data.cars[0].services[0].dateServiced,
              carServiceMileage: res.data.cars[0].services[0].mileage,

            });

            let myCarObj = {
              // initialDate: this.state.carServiceDate,
              initialMileage: this.state.carServiceMileage,
              currentMileage: this.state.carmileage,
              // currentDate: this.state.carmileageUpdateDate,
            }
            // this.calculateAverageMileage(myCarObj);

            API.getService(res.data.cars[0]._id).then(res => {
              this.setState({ servicesFromDataBase: res.data.services })
            }).then(data => {
              let a = this.state.services
              let b = this.state.servicesFromDataBase
              for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < b.length; j++) {

                  if (b[j].serviceType === a[i].name) {
                    a[i].mileage = b[j].mileage;

                    let serviceLife = b[j].nextServiceMiles - b[j].mileage;
                    let milesCounter = myCarObj.currentMileage - a[i].mileage
                    console.log("current car mileage: " + myCarObj.currentMileage);
                    console.log("service Life: " + serviceLife);
                    console.log("miles counter: " + milesCounter);
                    a[i].percentage = 100 - Math.floor((milesCounter / serviceLife) * 100)
                    console.log(a[i].percentage);

                  }
                }
              }
              let serviceList = a.filter(data => {
                if (data.percentage) {
                  return data
                }
              })
              this.setState({ services: serviceList })
            })
          }
        }
      })
  }



  getPercentage(argDateServiced, argServiceLifeSpan) {



  }
  calculateAverageMileage(objInfo) {
    let initialDate = objInfo.initialDate;
    let initialMileage = objInfo.initialMileage;
    let currentMileage = objInfo.currentMileage;
    let currentDate = objInfo.currentDate;
    let date_1 = new Date(initialDate);
    let date_2 = new Date(currentDate);
    let differenceInDays = this.mydiff(date_1, date_2, "days");
    let averageMiles = Math.floor((currentMileage - initialMileage) / differenceInDays);
    let myNewObj = {
      mileageDif: currentMileage - initialMileage,
      daysDif: differenceInDays,
      averageMileagePerDay: averageMiles
    }
    this.setState({ averageMileagePerDay: averageMiles })
    return myNewObj.averageMileagePerDay
  }
  getPercentage(argDateServiced, argServiceLifeSpan) {
    let currentDate = new Date();
    argDateServiced = new Date(argDateServiced);
    let dateDifference = this.mydiff(argDateServiced, currentDate, "days");
    let milesCounter = dateDifference * this.state.averageMileagePerDay
    let percentage = Math.floor((milesCounter / argServiceLifeSpan) * 100)
    let percentageLeft = 100 - percentage

    return percentageLeft




  }

onModalSubmit = event => {
  API.addService(this.props.name);
}


  onServiceSubmit = event => {
    API.addService(this.props.name, this.state.mileage, this.props.carId);
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {

    return (
      <section className="mainSection">
        <div className="row" id="car-services">
          <h2 className="center">Your car services</h2>
          {this.state.services.map(service => {
            return (
              <Service
                id={service.id}
                key={service.id}
                name={service.name}
                image={service.image}
                partLife={service.percentage}
                nameId={service.nameId}
                carId={this.state.carId}
              />

            );

          })}
  
  <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Service</a>

<div id="modal1" class="modal">
  <div class="modal-content">
    <h4>Add Service</h4>


    <input placeholder="Input current mileage amount for service completed" name="mileage" id="mileage" type="text"  />
  </div>

  <div class="input-field col s12">
    <select onClick = {this.onModalSubmit} onChange = {this.handleChange}>
   <ul> 
    <li>{this.state.services.map(service => {
  return (
    <Service
      nameId={this.state.nameId}
    />

  );
  

})}
</li> 
</ul>
      {/* <option value="hey" >Choose service</option>
      <option value="1">{this.state.nameId}</option>
      <option value="2">{}</option>
      <option value="3"></option> */}
    </select>
    <label>Your services</label> 
  

   <Button onClick ={this.onServiceSubmit} type ="submit">Submit Service</Button>
    </div>
 
</div>
         
        </div>
      </section>
    );
  }
}

export default CarProfile;