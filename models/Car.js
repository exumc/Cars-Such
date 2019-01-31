var mongoose = require("mongoose");


// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
let carSchema = new mongoose.Schema(
    {
    vin:{
        type:String,
        required:true,
        unique:true,
    },
    year: Number,
    make: String,
    model: String,
    trimLevel: String,
    style: String,
    madeIn: String,
    engine: String,
    steeringType: String,
    antiBrakeSystem:String,
    fueltype:String,
    tankSize:String,
    overallHeight:String,
    overallLength:String,
    overallWidth: String,
    standardSeating:String,
    optionalSeating:String,
    highWayMilage:String,
    cityMilage:String,
    driveType:String,
    transmission:String,
    isDefault: Boolean,
    services: [{
        type: Schema.Types.ObjectId,
        ref: "Service"
    }],
    
    });


const Car = mongoose.model('Car', carSchema);


module.exports = Car;