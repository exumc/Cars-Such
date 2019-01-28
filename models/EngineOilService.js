var mongoose = require("mongoose");

let EngineOilServiceSchema = new mongoose.Schema(
    {
   
    });


const EngineOilService = mongoose.model('EngineOilService', EngineOilServiceSchema );


module.exports = EngineOilService;