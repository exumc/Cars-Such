var mongoose = require("mongoose");

let UserSchema = new mongoose.Schema(
    {
   
    });


const User = mongoose.model('User', UserSchema );


module.exports = User;