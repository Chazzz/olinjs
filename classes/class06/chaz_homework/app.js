/* REQUIRES */
// ...npm
var path = require('path');
var express = require('express');
var session = require('express-session');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ...local
var index = require('./routes/index.js');


/* CONNECT TO MONGOOSE */
mongoose.connect(process.env.MONGOURI || 'mongodb://localhost/test');


/* CONFIG APP */
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({defaultLayout: 'other'}));
app.set('view engine', 'handlebars');

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));


/* ROUTING */
app.get('/', index.home);
/* Twoter */

app.get('/login', index.login)
app.get('/home', index.home)
app.get('/logout', index.logout)

app.post('/loginPost', index.loginPost)
app.post('/removeTwote', index.removeTwote)

app.listen(process.env.PORT || 3000);