// Mongoose connect is called once by the app.js & connection established
// No need to include it elsewhere
var mongoose = require('mongoose');
var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";
mongoose.connect(mongoURI);


// I have just connected, and I'm not exporting anything from here	