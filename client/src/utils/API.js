import axios from "axios";

export default {
    
    signUp: function(user) {
        return axios.post("/api/signup/", user);
    },
    addCar: function(userId , vinNumber ) {
        return axios.post("/addcar/"+vinNumber+"user/"+userId);
    },
    editUser: function(firstName, lastName ,email , userPassword ) {
        return axios.post("/addcar/"+vinNumber+"user/"+userId);
    },
    login: function(userEmail , userPassword ) {
        let userObj = {
            email:userEmail,
            password:userPassword
        }
        return axios.post("/login/",userObj);
    },
    addService: function(serviceType , mileage ) {
        let carObj = {
            serviceType:serviceType,
            mileage:mileage
        }
        return axios.post("/login/",carObj);
    },
    updateMileage: function(carId , mileage ) {
        let carObj = {
            
            mileage:mileage
        }
        return axios.post("/carmileage/"+carId,carObj);
    }
    
};