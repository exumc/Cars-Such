var mongoose = require("mongoose");
var Schema = mongoose.Schema;
let carSchema = new mongoose.Schema({
  vin: {
    type: String,
    required: true,
    unique: true,
  },
  model: String,
  year: Number,
  make: String,
  Vehicle_Type: String,
  grossWeightRating: String,
  model: String,
  driveType: String,
  noCylinders: Number,
  HP: Number,
  fueltype: String,
  isDefault: Boolean,
  currentMileage: Number,
  dateMileageUpdate: Date,
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
