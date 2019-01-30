var mongoose = require("mongoose");

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
    // engineOilService: {
    //     type: Schema.Types.ObjectId,
    //     ref: "EngineOilService"
    // },
    // breakFluidService: {
    //     type: Schema.Types.ObjectId,
    //     ref: "BrakeFluidService"
    // },
    });


const Car = mongoose.model('Car', carSchema);


module.exports = Car;