var express = require("express");
var router = express.Router();
var axios = require("axios");
var cheerio = require("cheerio");
const jwt = require("jsonwebtoken");
const exjwt = require("express-jwt");
var db = require("../models");
const isAuthenticated = exjwt({
  secret: "all sorts of code up in here"
});

router.post("removecar/:id/car/:id", function (req, res) {
  // route to remove a car from the user
  // to be implemented after we have the mvp working

});

// LOGIN ROUTE
router.post("/login", (req, res) => {
  db.User.findOne({
    email: req.body.email
  }).then(user => {
    user.verifyPassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        let token = jwt.sign({ id: user._id, email: user.email }, process.env.SERVER_SECRET, { expiresIn: 129600 }); // Sigining the token
        res.json({ success: true, message: "Token Issued!", token: token, user: user });
      } else {
        res.status(401).json({ success: false, message: "Authentication failed. Wrong password." });
      }
    });
  }).catch(err => res.status(404).json({ success: false, message: "User not found", error: err }));
});

// SIGNUP ROUTE
router.post("/signup", (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
router.put("/updatecar/:carid" , function(req,res){
db.Car.findByIdAndUpdate(req.params.carid,{$set:req.body}, function(err, result){
  if(err){
    throw(err)
  }
  res.send('Done')
});



})

// Any route with isAuthenticated is protected and you need a valid token
// to access , removed isAuthenticated from function temporarily
// Helder
router.get("/user/:id", (req, res) => {
  db.User.findById(req.params.id)
    .populate({
      path: "cars",
      populate: {
        path: "cars"
      }
    }).populate({
      path: "cars",
      populate: {
        path: "services"
      }
    })
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({
          success: false,
          message: "No user found"
        });
      }
    })
    .catch(err => res.status(400).send(err));
});
// Any route with isAuthenticated is protected and you need a valid token
// to access , removed isAuthenticated from function temporarily
// Helder // isAuthenticated,
router.post("/edituser/:id", function (req, res) {
  // route to edit the user information
  console.log(req.params.id);
  console.log(req.body);
  db.User.findOneAndUpdate(
    {"_id": req.params.id},
    {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password:req.body.password
  }).then(function (data) {
    res.json(data);
  });
});

router.post("/addcar/:id/user/:uid", (req, res) => {
  // route to a car to the existing logged in user
  
  axios
    .get(
      "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/" +
      req.params.id +
      "?format=json"
    )
    .then(function (result) {
      var data = [];
      result.data.Results.forEach(function (el) {
        data[el.VariableId] = [];
        data[el.VariableId]["name"] = el.Variable;
        data[el.VariableId]["value"] = el.Value;
      });
      var main = [];
      var manu_arr = [];
      if (typeof data[31] !== "undefined" && data[31]["value"]) {
        manu_arr.push(data[31]["value"]);
        main.push(31);
      }
      if (typeof data[77] !== "undefined" && data[77]["value"]) {
        manu_arr.push(data[77]["value"]);
        main.push(77);
      }
      if (typeof data[75] !== "undefined" && data[75]["value"]) {
        manu_arr.push(data[75]["value"]);
        main.push(75);
      }
      if (manu_arr.length) {
        var manufactured = manu_arr.join(", ");
      }
      if (typeof data[29] !== "undefined" && data[29]["value"]) {
        var manufacture_year = parseInt(data[29]["value"]);
        var current_year = new Date().getFullYear();
        current_year = parseInt(current_year);
        var age = current_year - manufacture_year;
        if (age) {
          if (age === 1) var vehicle_age = "1 year";
          else var vehicle_age = age + " years";
        }
      }
      if (typeof data[26] !== "undefined" && data[26]["value"])
        var make = data[26]["value"];
      if (typeof data[28] !== "undefined" && data[28]["value"])
        var model = data[28]["value"];
      if (typeof data[29] !== "undefined" && data[29]["value"])
        var year = data[29]["value"];
      if (typeof data[39] !== "undefined" && data[39]["value"])
        var Vehicle_Type = data[39]["value"];
      if (typeof data[5] !== "undefined" && data[5]["value"])
        var Body_Type = data[5]["value"];
      if (typeof data[25] !== "undefined" && data[25]["value"])
        var grossWeightRating = data[25]["value"];
      if (typeof data[15] !== "undefined" && data[15]["value"])
        var driveType = data[15]["value"];
      if (typeof data[9] !== "undefined" && data[9]["value"])
        var noCylinders = data[9]["value"];
      if (typeof data[21] !== "undefined" && data[21]["value"])
        var HP = (data[21]["value"] * 1.341).toFixed(0);
      if (typeof data[24] !== "undefined" && data[24]["value"])
        var fuelType = data[24]["value"];
      let carObj = {
        vin: req.params.id,
        model: model,
        make: make,
        year: year,
        Vehicle_Type: Vehicle_Type,
        Body_Type: Body_Type,
        grossWeightRating: grossWeightRating,
        driveType: driveType,
        noCylinders: noCylinders,
        HP: HP,
        fuelType: fuelType
      };
      db.Car.create(carObj)
        .then(function (data) {
          return db.User.findOneAndUpdate(
            {
              _id: req.params.uid
            },
            {
              $push: {
                cars: data.id
              }
            }
          );
        })
        //get the User with the id of req.params.id
        .then(function (data) {
          db.User.findById(req.params.uid)
            .populate({
              path: "cars",
              populate: {
                path: "cars"
              }
            })
            .then(function (newData) {
              res.json(newData);
            });
        })
        .catch(err => res.status(400).json(err));
    });
});
router.post("/updateservice/:serviceid", function (req, res) {

db.Services.findOneAndUpdate(

{_id:req.params.serviceid},
{serviceType:req.body.serviceType ,
 mileage:req.body.mileage, 
 nextServiceMiles:0
}

).then(data =>{
  res.json(data);
})



})
router.post("/addservice/:carid", function (req, res) {
  // route to add a service type to a chosen car.
  // creates an instance of db.servicesyarn start

  var Service = db.Services;
  //console log req.body
  // creates a var for a new instance of Service
  // and uses req.body contents to initialize it
  var service = new Service(req.body);
  // calls the updateServices stored function in the service model
  service.updateServices();
  //creates the new entry in the database
  db.Services.create(service)
    // gets the car with the id provided by req.params
    .then(function (data) {
      return db.Car.findOneAndUpdate(
        {
          _id: req.params.carid
        },
        {
          // push the newly created service log _id to the array of services in the cars model
          $push: {
            services: data._id
          }
        }
      );
    })
    //get the car with the id of req.params.carid
    .then(function (data) {
      db.Car.findById(req.params.carid)
        //runs a deep population instruction to get all the services
        //associated with that car
        .populate({
          path: "services",
          //within the array get all the information about the object
          populate: {
            path: "services"
          }
          // with the populated data sends to the client a json type resposnse with
          //the contents
        })
        .then(function (newData) {
          res.json(newData);
        });
    });
});

router.get("/carinfo/:carid", function (req, res) {
  // route to get the car info
  // Find the car with the specific id from req.params.carid
  db.Car.findById(
    req.params.carid
    //runs a deep population instruction to get all the services
    //associated with that car
  )
    .populate({
      path: "services",
      //within the array get all the information about the object
      populate: {
        path: "services"
      }
      // with the populated data sends to the client a json type resposnse with
      // the contents
    })
    .then(function (data) {
      res.json(data);
    });
});

router.post("/carmileage/:id", function (req, res) {
  let myDate = new Date();

  db.Car.updateOne({
    _id: req.params.id,
    currentMileage: req.body.mileage,
    dateMileageUpdate: myDate
  }).then(data => {
    res.json(data);
  });
});
router.get("/getservices/:carid", function (req, res) {
  db.Car.findById(req.params.carid)
    .populate({
      path: "services",
      //within the array get all the information about the object
      populate: {
        path: "services"
      }
      // with the populated data sends to the client a json type resposnse with
      // the contents
    }).then(data => {
      res.json(data)
    })

})

module.exports = router;
