var mongoose = require("mongoose");

let ServiceSchema = new mongoose.Schema({
  serviceType: String,
  dateServiced: {
    type: Date,
    default: Date.now,
  },
  mileage: Number,
  nextServiceMiles: Number,
  nextServiceDate: {
    type: Date,
    default: Date.now,
  },
});
ServiceSchema.pre("findOneAndUpdate", function (next) {
  console.log(this._collection);
  if (this._update.serviceType === "Oil Filter") {
    this._update.nextServiceMiles = parseInt(this._update.mileage) + 5000;
  } else if (this._update.serviceType === "Oil Change") {
    this._update.nextServiceMiles = parseInt(this._update.mileage) + 5000;
  } else if (this._update.serviceType === "Air Filter") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 30000;
  } else if (this._update.serviceType === "Tune Up") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 30000;
  } else if (this._update.serviceType === "Shocks and Struts") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 50000;
  } else if (this._update.serviceType === "Breaks") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 60000;
  } else if (this._update.serviceType === "Battery") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 60000;
  } else if (this._update.serviceType === "Coolant") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 60000;
  } else if (this._update.serviceType === "Transmission") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 60000;
  } else if (this._update.serviceType === "Timing Belt") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 90000;
  } else if (this._update.serviceType === "Spark Plugs") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 90000;
  } else if (this._update.serviceType === "Battery") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 40000;
  } else if (this._update.serviceType === "Power Steering") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 60000;
  } else if (this._update.serviceType === "Tire Rotation") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 7000;
  } else if (this._update.serviceType === "Air Conditioning") {
    this.nextServiceMiles = parseInt(this._update.mileage) + 5000;
  }
  next();
});
ServiceSchema.methods.updateServices = function () {
  if (this.serviceType === "Oil Filter") {
    this.nextServiceMiles = this.mileage + 5000;
  } else if (this.serviceType === "Oil Change") {
    this.nextServiceMiles = this.mileage + 5000;
  } else if (this.serviceType === "Air Filter") {
    this.nextServiceMiles = this.mileage + 30000;
  } else if (this.serviceType === "Tune Up") {
    this.nextServiceMiles = this.mileage + 30000;
  } else if (this.serviceType === "Shocks and Struts") {
    this.nextServiceMiles = this.mileage + 50000;
  } else if (this.serviceType === "Breaks") {
    this.nextServiceMiles = this.mileage + 60000;
  } else if (this.serviceType === "Battery") {
    this.nextServiceMiles = this.mileage + 60000;
  } else if (this.serviceType === "Coolant") {
    this.nextServiceMiles = this.mileage + 60000;
  } else if (this.serviceType === "Transmission") {
    this.nextServiceMiles = this.mileage + 60000;
  } else if (this.serviceType === "Timing Belt") {
    this.nextServiceMiles = this.mileage + 90000;
  } else if (this.serviceType === "Spark Plugs") {
    this.nextServiceMiles = this.mileage + 90000;
  } else if (this.serviceType === "Battery") {
    this.nextServiceMiles = this.mileage + 40000;
  } else if (this.serviceType === "Power Steering") {
    this.nextServiceMiles = this.mileage + 60000;
  } else if (this.serviceType === "Tire Rotation") {
    this.nextServiceMiles = this.mileage + 7000;
  } else if (this.serviceType === "Air Conditioning") {
    this.nextServiceMiles = this.mileage + 5000;
  }
};

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
