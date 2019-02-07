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
      carmileageUpdateDate: "",
      averageMileagePerDay:"",
      carId: ""
    };
  }

  componentDidMount() {
    

    API
      .getUser(this.props.id)
      .then(res => {
        if (res.data.cars[0]) {
          this.setState({carId : res.data.cars[0]._id})
          if (res.data.cars[0].services[0]) {
              this.setState({
              servicesFromDataBase: res.data.services,
              carmileage: res.data.cars[0].currentMileage,
              carmileageUpdateDate: res.data.cars[0].dateMileageUpdate,
              carServiceDate: res.data.cars[0].services[0].dateServiced,
              carServiceMileage: res.data.cars[0].services[0].mileage,
              
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
                    let serviceLife = b[j].nextServiceMiles - b[j].mileage;
                    a[i].percentage =this.getPercentage(b[j].dateServiced ,serviceLife) 
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
    let currentDate = objInfo.currentDate;
    let date_1 = new Date(initialDate);
    let date_2 = new Date(currentDate);
    let differenceInDays =this.mydiff(date_1 , date_2 , "days");
    let averageMiles =Math.floor( (currentMileage - initialMileage) / differenceInDays);
    let myNewObj = {
      mileageDif: currentMileage - initialMileage,
      daysDif: differenceInDays,
      averageMileagePerDay:averageMiles
    }
    this.setState({averageMileagePerDay:averageMiles})
    return myNewObj.averageMileagePerDay
  }
  getPercentage(argDateServiced , argServiceLifeSpan){
    let currentDate = new Date();
    argDateServiced = new Date(argDateServiced);
    let dateDifference = this.mydiff(argDateServiced , currentDate , "days");
    let milesCounter = dateDifference * this.state.averageMileagePerDay
    let percentage =Math.floor((milesCounter / argServiceLifeSpan) * 100) 
    let percentageLeft =100 - percentage

    return percentageLeft



  }
  
  mydiff(date1,date2,interval) {
    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years": return date2.getFullYear() - date1.getFullYear();
        case "months": return (
            ( date2.getFullYear() * 12 + date2.getMonth() )
            -
            ( date1.getFullYear() * 12 + date1.getMonth() )
        );
        case "weeks"  : return Math.floor(timediff / week);
        case "days"   : return Math.floor(timediff / day); 
        case "hours"  : return Math.floor(timediff / hour); 
        case "minutes": return Math.floor(timediff / minute);
        case "seconds": return Math.floor(timediff / second);
        default: return undefined;
    }
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
                partLife={service.percentage}
                nameId={service.nameId}
                carId={this.state.carId}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default CarProfile;