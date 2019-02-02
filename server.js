const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3001;
var axios = require("axios");

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/keepitrunning', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: 'all sorts of code up in here'
});




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

var apiRoute = require("./routes/apiRoutes");
app.use("/api" , apiRoute);


// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});



function getVin (vin){
  axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/"+vin+"?format=json").then(function (result){
      var data = [];
      console.log(result);
      result.data.Results.forEach(function(el){
				data[el.VariableId] = [];
			    data[el.VariableId]['name'] = el.Variable;
			    data[el.VariableId]['value'] = el.Value;
			});
      var main = [];
	    var manu_arr = [];
			if(typeof data[31] !== 'undefined' && data[31]['value']){
				manu_arr.push(data[31]['value']);
				main.push(31);
			}
			if(typeof data[77] !== 'undefined' && data[77]['value']){
				manu_arr.push(data[77]['value']);
				main.push(77);
			}
			if(typeof data[75] !== 'undefined' && data[75]['value']){
				manu_arr.push(data[75]['value']);
				main.push(75);
			}
			if(manu_arr.length){
				var manufactured = manu_arr.join(', ');
			
			}

			if(typeof data[29] !== 'undefined' && data[29]['value']){
				var manufacture_year = parseInt(data[29]['value']);
				var current_year = (new Date()).getFullYear();
				current_year = parseInt(current_year);
				var age = current_year - manufacture_year;
				if(age){
					if(age===1) var vehicle_age = '1 year';
					else var vehicle_age = age+' years';
				
				}
			}

			

		

			if(typeof data[26] !== 'undefined' && data[26]['value']){
				var make = data[26]['value']
				var logo_path = 'logos/'+make.toLowerCase()+'.svg'
				
        
        
			}
			if(typeof data[28] !== 'undefined' && data[28]['value']) var model = data[28]['value'];
			if(typeof data[29] !== 'undefined' && data[29]['value']) var year = data[29]['value'];
      if(typeof data[39] !== 'undefined' && data[39]['value']) var Vehicle_Type = data[39]['value'];
      if(typeof data[5] !== 'undefined' && data[5]['value']) var Body_Type = data[5]['value'];
      if(typeof data[25] !== 'undefined' && data[25]['value']) var grossWeightRating = data[25]['value'];
      if(typeof data[15] !== 'undefined' && data[15]['value']) var driveType = data[15]['value'];
      if(typeof data[9] !== 'undefined' && data[9]['value']) var noCylinders = data[9]['value'];
      if(typeof data[21] !== 'undefined' && data[21]['value']) var HP = (data[21]['value'] *1.341).toFixed(0);
      if(typeof data[24] !== 'undefined' && data[24]['value']) var fuelType = data[24]['value'];
      let carObj = {
        model:model,
        year:year,
        Vehicle_Type:Vehicle_Type,
        Body_Type:Body_Type,
        grossWeightRating:grossWeightRating,
        driveType:driveType,
        noCylinders:noCylinders,
        HP:HP,
        fuelType:fuelType,
      }
      
      
      console.log(carObj);
    })

  }

// getVin("5TFTX4CN7BX009246");