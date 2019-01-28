var mongoose = require("mongoose");

let BrakeFluidServiceSchema = new mongoose.Schema(
    {
   
    });


const BrakeFluidService = mongoose.model('BrakeFluidService', BrakeFluidServiceSchema );


module.exports = BrakeFluidService;