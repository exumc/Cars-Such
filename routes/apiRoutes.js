var express = require("express");
var router = express.Router();
var axios = require("axios");
var cheerio = require("cheerio");
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
var db = require("../models");
const isAuthenticated = exjwt({
  secret: 'all sorts of code up in here'
});
router.get("/car/:id", function (req, res) {
  let carUrl = `http://vinfreecheck.com/vin/${req.params.id}`;
  //VIN NUMBER 1FTFW1EF7DKD26755


  axios.get(carUrl).then(function (response) {
    // Load the HTML into cheerio

    try {
      var $ = cheerio.load(response.data);
    } catch (e) {
      console.log(e); // handle error
    }

    // Make an empty array for saving our scraped info
    var results = [];

    $("main.content").each(function (i, element) {
      let year = $(element)
        .find("tbody")
        .eq(1)
        .children("tr")
        .eq(0)
        .children("td")
        .eq(1)
        .html();
      let make = $(element)
        .find("tbody")
        .eq(1)
        .children("tr")
        .eq(1)
        .children("td")
        .eq(1)
        .html();
      let model = $(element)
        .find("tbody")
        .eq(1)
        .children("tr")
        .eq(2)
        .children("td")
        .eq(1)
        .html();
      let trimLevel = $(element)
        .find("tbody")
        .eq(1)
        .children("tr")
        .eq(3)
        .children("td")
        .eq(1)
        .html();
      let style = $(element)
        .find("tbody")
        .eq(1)
        .children("tr")
        .eq(4)
        .children("td")
        .eq(1)
        .html();
      let madeIn = $(element)
        .find("tbody")
        .eq(1)
        .children("tr")
        .eq(5)
        .children("td")
        .eq(1)
        .html();
      let engine = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(0)
        .children("td")
        .eq(1)
        .html();
      let steeringType = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(1)
        .children("td")
        .eq(1)
        .text();
      let antiBrakeSystem = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(2)
        .children("td")
        .eq(1)
        .text();
      let fueltype = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(3)
        .children("td")
        .eq(1)
        .text();
      let tankSize = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(4)
        .children("td")
        .eq(1)
        .text();
      let overallHeight = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(5)
        .children("td")
        .eq(1)
        .text();
      let overallLength = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(6)
        .children("td")
        .eq(1)
        .text();
      let overallWidth = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(7)
        .children("td")
        .eq(1)
        .text();
      let standardSeating = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(8)
        .children("td")
        .eq(1)
        .text();
      let optionalSeating = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(9)
        .children("td")
        .eq(1)
        .text();
      let highWayMilage = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(10)
        .children("td")
        .eq(1)
        .text();
      let cityMilage = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(11)
        .children("td")
        .eq(1)
        .text();
      let driveType = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(12)
        .children("td")
        .eq(1)
        .text();
      let transmission = $(element)
        .find("tbody")
        .eq(5)
        .children("tr")
        .eq(13)
        .children("td")
        .eq(1)
        .text();

      let carObj = {
        vin: req.params.id,
        year: year,
        make: make,
        model: model,
        trimLevel: trimLevel,
        style: style,
        madeIn: madeIn,
        engine: engine,
        steeringType: steeringType,
        antiBrakeSystem: antiBrakeSystem,
        fueltype: fueltype,
        tankSize: tankSize,
        overallHeight: overallHeight,
        overallLength: overallLength,
        overallWidth: overallWidth,
        standardSeating: standardSeating,
        optionalSeating: optionalSeating,
        highWayMilage: highWayMilage,
        cityMilage: cityMilage,
        driveType: driveType,
        transmission: transmission
      };
      db.Car.create(carObj);
      results.push(carObj);
    });
    console.log(results);
    res.json(results);
  });
});
// LOGIN ROUTE
router.post('/login', (req, res) => {
  db.User.findOne({
    email: req.body.email
  }).then(user => {
    user.verifyPassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        let token = jwt.sign({
          id: user._id,
          email: user.email
        }, 'all sorts of code up in here', {
          expiresIn: 129600
        }); // Sigining the token
        res.json({
          success: true,
          message: "Token Issued!",
          token: token,
          user: user
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Authentication failed. Wrong password."
        });
      }
    });
  }).catch(err => res.status(404).json({
    success: false,
    message: "User not found",
    error: err
  }));
});

// SIGNUP ROUTE
router.post('/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
router.get('/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        success: false,
        message: 'No user found'
      });
    }
  }).catch(err => res.status(400).send(err));
});

router.post("/edituser", function (req, res) {
  // route to edit the user information
});
router.post("/addcar", function (req, res) {
  // route to a car to the existing logged in user
});
router.post("/addservice/:carid", function (req, res) {
  // route to add a service type to a chosen car.
  // creates an instance of db.services
  var Service = db.Services
  //console log req.body
  console.log(req.body);
  // creates a var for a new instance of Service
  // and uses req.body contents to initialize it
  var service = new Service(req.body)
  // calls the updateServices stored function in the service model
  service.updateServices();
  //creates the new entry in the database 
  db.Services.create(service)
    // gets the car with the id provided by req.params
    .then(function (data) {
      return db.Car.findOneAndUpdate({
        _id: req.params.carid
      }, {
        // push the newly created service log _id to the array of services in the cars model
        $push: {
          services: data._id
        }
      });
    })
    //get the car with the id of req.params.carid
    .then(function (data) {
      db.Car.findById(req.params.carid)
        //runs a deep population instruction to get all the services 
        //associated with that car 
        .populate({
          path: 'services',
          //within the array get all the information about the object
          populate: {
            path: 'services'
          }
          // with the populated data sends to the client a json type resposnse with
          //the contents
        }).then(function (newData) {
          res.json(newData);


        })
    })


  // })
});
router.get("/carinfo/:carid", function (req, res) {
  // route to get the car info
  // Find the car with the specific id from req.params.carid
  db.Car.findById(req.params.carid
    //runs a deep population instruction to get all the services 
    //associated with that car 
  ).populate({
    path: 'services',
    //within the array get all the information about the object
    populate: {
      path: 'services'
    }
    // with the populated data sends to the client a json type resposnse with
    //the contents
  }).then(function (data) {
    res.json(data)
  })
})


module.exports = router;