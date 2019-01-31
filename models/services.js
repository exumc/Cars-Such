var mongoose = require("mongoose");

let ServiceSchema = new mongoose.Schema(
    {
        serviceType: String,
        dateServiced:{
            type:Date,
            default: Date.now
        },
        mileage: Number,
        nextServiceMiles:Number,
        nextServiceDate:{
            type:Date,
            default: Date.now
        },
    });
    ServiceSchema.methods.updateServices = function() {
        if (this.serviceType=== "Oil Filter"){
            this.nextServiceMiles = this.mileage + 5000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Oil Change"){
            this.nextServiceMiles = this.mileage + 5000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Air Filter"){
            this.nextServiceMiles = this.mileage + 30000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Tune Up"){
            this.nextServiceMiles = this.mileage + 30000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Shocks and Struts"){
            this.nextServiceMiles = this.mileage + 50000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Breaks"){
            this.nextServiceMiles = this.mileage + 60000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Battery"){
            this.nextServiceMiles = this.mileage + 60000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Coolant"){
            this.nextServiceMiles = this.mileage + 60000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Transmission"){
            this.nextServiceMiles = this.mileage + 60000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Timing Belt"){
            this.nextServiceMiles = this.mileage + 90000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Spark Plugs"){
            this.nextServiceMiles = this.mileage + 90000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Battery"){
            this.nextServiceMiles = this.mileage + 60000
            //TODO need to add the code for the time in days here 
        }else if(this.serviceType=== "Power Steering"){
            this.nextServiceMiles = this.mileage + 60000
            //TODO need to add the code for the time in days here 
        }  
    };

const Service = mongoose.model('Service', ServiceSchema );


module.exports = Service;