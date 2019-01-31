var mongoose = require("mongoose");

let serviceSchema = new mongoose.Schema()
    

const Services = mongoose.model('Services', serviceSchema);




module.exports = Services;