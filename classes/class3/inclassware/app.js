var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var index = require('./routes/index');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'})); //defining 'handlebars' engine is rendering engine
app.set('view engine', 'handlebars'); //setting view engine, default jade

app.use(logger('dev')); //morgan takes in parameters of the logs you want
app.use(bodyParser.json()); //parses body of request and put it into json structure
app.use(bodyParser.urlencoded({ extended: false })); //parse anything in the url itsel, don't know what extended i-
app.use(cookieParser()); //parses cookie
app.use(express.static(path.join(__dirname, 'public'))); //whenever theres a request, check inside the public folder

app.get('/', index.home);

// it is ordered at the exact order of the file
// matches the request to a string and calls things, then calls next
// these things occur in the order specified in the file!

app.get('/olin', function(req, res, next){
	console.log("hello");
	next();
});
app.get('/olin', function(req, res){
	res.send("hello again");
});


app.post('/chelsea', function(req, res){
	res.send('YAY!');
});

app.listen(3000);

//partials are js snippets that can show up anywhere based on where it should be rendered
