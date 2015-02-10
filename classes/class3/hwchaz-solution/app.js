var db = require('./mongoose')
var express = require('express')
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();

app.set('port', (process.env.PORT || 3000))

app.engine('handlebars', exphbs({defaultLayout: 'main'})); //defining 'handlebars' engine is rendering engine
app.set('view engine', 'handlebars'); //setting view engine, default jade

app.use(logger('dev')); //morgan takes in parameters of the logs you want
app.use(bodyParser.json()); //parses body of request and put it into json structure
app.use(bodyParser.urlencoded({ extended: false })); //parse anything in the url itsel, don't know what extended i-
app.use(cookieParser()); //parses cookie
app.use(express.static(path.join(__dirname, 'public'))); //whenever theres a request, check inside the public folder

// var Kitten = require("./kitty")

// console.log("success?")

// var silence = new Kitten({ name: 'Silence' })
// console.log(silence.name)

// var fluffy = new Kitten({ name: 'Fluffy' })
// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   console.log(fluffy.name + " is saved")
// });

// var aoeu = "OLLLLLLLIN"
// console.log(aoeu)

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens)
// })

require('./routes')(app)

// app.get('/', function(req, res){
// 	Kitten.find(function (err, kittens) {
// 	  if (err) return console.error(err);
// 	  console.log(kittens)
// 	})

//   res.render("home", {"classes": [
//   "Olin.js",
//   "silence",
//   ]});
// });


// app.get('/', function(request, response) {
//   response.send(cool());
// });

app.listen(app.get('port'), function() {
  console.log("Application running on port: " + app.get('port'))
})