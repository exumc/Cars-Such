import React from "react";
import "./style.css";
import services from "../../services.json";
import Service from "../Service";
import API from "../../utils/API"
import {
  Button,
  Input
} from "react-materialize";

class CarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services,
      value: "Select",
      options:"",
      userCars: "",
      servicesFromDataBase: [],
      carmileage: "",
      carmileageUpdateDate: "",
      averageMileagePerDay: "",
      carId: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.populateSelect();
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
              for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < b.length; j++) {
                  if (b[j].serviceType === a[i].name) {
                    a[i].mileage = b[j].mileage;

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
              });
              this.setState({ services: serviceList });
            });
        }
      }
    });

  }

  // calculateAverageMileage(objInfo) {
  //   let initialDate = objInfo.initialDate;
  //   let initialMileage = objInfo.initialMileage;
  //   let currentMileage = objInfo.currentMileage;
  //   let currentDate = objInfo.currentDate;
  //   let date_1 = new Date(initialDate);
  //   let date_2 = new Date(currentDate);
  //   let differenceInDays =this.mydiff(date_1 , date_2 , "days");
  //   let averageMiles =Math.floor( (currentMileage - initialMileage) / differenceInDays);
  //   let myNewObj = {
  //     mileageDif: currentMileage - initialMileage,
  //     daysDif: differenceInDays,
  //     averageMileagePerDay:averageMiles
  //   }
  //   console.log(myNewObj);
  //   this.setState({averageMileagePerDay:averageMiles})
  //   return myNewObj.averageMileagePerDay
  // }
  getPercentage(argDateServiced, argServiceLifeSpan) {
    // let currentDate = new Date();
    // argDateServiced = new Date(argDateServiced);
    // let dateDifference = this.mydiff(argDateServiced , currentDate , "days");
    // console.log("avg Miles per day: "+ this.state.averageMileagePerDay);
    // let milesCounter = dateDifference * this.state.averageMileagePerDay
    // let percentage =Math.floor((milesCounter / argServiceLifeSpan) * 100)
    // let percentageLeft =100 - percentage
    // console.log("Service Life Span: "+ argServiceLifeSpan);
    // console.log("Days Since last Service: "+ dateDifference);
    // console.log("Estimated Miles Since Last Service: "+ milesCounter);
    // console.log("Percentage Used / Left : "+ percentage +" / "+ percentageLeft);
    // return percentageLeft
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

  //   mydiff(date1,date2,interval) {
  //     var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
  //     date1 = new Date(date1);
  //     date2 = new Date(date2);
  //     var timediff = date2 - date1;
  //     if (isNaN(timediff)) return NaN;
  //     switch (interval) {
  //         case "years": return date2.getFullYear() - date1.getFullYear();
  //         case "months": return (
  //             ( date2.getFullYear() * 12 + date2.getMonth() )
  //             -
  //             ( date1.getFullYear() * 12 + date1.getMonth() )
  //         );
  //         case "weeks"  : return Math.floor(timediff / week);
  //         case "days"   : return Math.floor(timediff / day);
  //         case "hours"  : return Math.floor(timediff / hour);
  //         case "minutes": return Math.floor(timediff / minute);
  //         case "seconds": return Math.floor(timediff / second);
  //         default: return undefined;
  //     }
  // }
populateSelect(){
  let myOptions = this.state.services.map( (option, index) => {
    return(
     <option key={index}>
     {option.name}
  </option>

    )

    })
    this.setState({options:myOptions})
    console.log(this.state.options);
    console.log(myOptions);
}
  handleChange(event) {

    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }
  render() {
      
    

    return (
      <section className="mainSection">
        <div className="row center" id="car-services">
          <div className="row">
            <h2 className="">Your car services</h2>
            <br />
            <a className="waves-effect waves-light light-blue lighten-2 btn modal-trigger" href="#servicesModal">Add a new Service</a>
          </div>
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

          <div id="servicesModal" className="modal">
            <div className="modal-content">
              <h4>Add Service</h4>
              <form>
                <div className="input-field col s12">
                  <input placeholder="Input current mileage amount for service completed" name="mileage" id="mileage" type="text" />
                </div>
                <div className="input-field col s12">

                <select  >
                    {this.state.options}
                      
                      
                  </select>
                  <label htmlFor="services">Your services</label>
                  <Button className="light-blue lighten-2" type="submit">Submit Service</Button>
                </div>
              </form>
            </div>



          </div>

        </div>
      </section>
    );
  }
}

export default CarProfile;
