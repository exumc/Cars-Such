import axios from "axios";

export default {
  signUp: function(firstname, lastname, email, password) {
    let user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    };
    return axios.post("/api/signup/", user);
  },
  addCar: function(userId, vinNumber) {
    return axios.post("/api/addcar/" + vinNumber + "/user/" + userId);
  },
  editCar: function(carId, objUpdatedData) {
    let myObj = {
      year: objUpdatedData.year,
      make: objUpdatedData.make,
      model: objUpdatedData.model,
      vehicle_Type: objUpdatedData.type,
      driveType: objUpdatedData.driveType,
      HP: objUpdatedData.hp,
      fuelType: objUpdatedData.fuelType,
      noCylinders: objUpdatedData.noCylinders,
      grossWeightRating: objUpdatedData.weight,
      lastMileageDate: objUpdatedData.lastMileageDate,
      currentMileage: objUpdatedData.currentMileage
    };
    return axios.put("/api/updatecar/" + carId, myObj);
  },
  removeCar: function(userId, carId) {
    return axios.post("/removecar/user/" + userId + "/car" + carId);
  },
  editUser: function(firstName, lastName, email, userPassword, userId) {
    let userObj = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: userPassword
    };
    return axios.post("/api/edituser/" + userId, userObj);
  },
  login: function(userEmail, userPassword) {
    let userObj = {
      email: userEmail,
      password: userPassword
    };
    return axios.post("/api/login/", userObj);
  },
  addService: function(serviceType, mileage, carId) {
    let serviceObj = {
      serviceType: serviceType,
      mileage: mileage
    };
    return axios.post("/api/addservice/" + carId, serviceObj);
  },
  updateService: function(serviceType, mileage, serviceId) {
    let serviceObj = {
      serviceType: serviceType,
      mileage: mileage
    };
    return axios.post("/api/updateservice/" + serviceId, serviceObj);
  },
  getService: function(carId) {
    return axios.get("/api/getservices/" + carId);
  },
  updateMileage: function(carId, mileage) {
    return axios.post("/api/carmileage/" + carId, mileage);
  },
  getUser: function(userId) {
    return axios.get("/api/user/" + userId);
  }
};
