var mongoose = require('mongoose');
var Twote = require('./../models/twoteModel.js');
var User = require('./../models/userModel.js');
var uvrun = require("uvrun");
/* DEFINE ROUTE CALLBACKS */
var routes = {};

routes.login = function (req, res) {
	res.render('login');
}

routes.loginPost = function (req, res) {
	var data = req.body
	var username = data['username']
	req.session.username = username

	var u = new User({user:username})
	User.count({'user':u.user}, function (err, count) {
		if (!count) {
			// not a duplicate - save
			u.save(function(err) {
				if (err) {console.log("something went wrong :(")};
			});
		};
	});
	// u.save(function(err) {
	// 	if (err) {console.log("something went wrong :(")};
	// 	// User.find(function(err, data) {
	// 	// 	var hbsData = {'users':data};
	// 	// 	console.dir(hbsData)
	// 	// });
	// })

	//twote check
	var t = new Twote({text:"I just logged into Twoter!", user:username})
	t.save(function(err) {
		if (err) {console.log("something went wrong :(")};
	})

	res.render('message', {'message':'Thanks for logging in, ' + req.session.username + '!', layout: 'other' })
}

routes.home = function (req, res) {
	var hbsData = {layout: 'other'}
	User.find(function (err, data) {
		hbsData['users'] = data;
		// console.dir(hbsData)
	});
	Twote.find(function (err, data) {
		var arrayLength = data.length;
		var user = req.session.username;
		// console.log(user)
		for (var i = 0; i < arrayLength; i++) {
		    if (data[i]['user'] === user)
		    	data[i]['isDeletable'] = true;
		    else data[i]['isDeletable'] = false;
		};
		hbsData['twotes'] = data;
		// console.log(hbsData['twotes'][0].isDeletable)
		// console.dir(hbsData)
	});
	while(!hbsData['users'] || !hbsData['twotes'])
		uvrun.runOnce();;
	// console.dir(hbsData)
	res.render('twotehome', hbsData)
}

routes.removeTwote = function(req, res) {
// remove an order
	console.dir(req.body)
	var twoteId = req.body.id;
	Twote.findOneAndRemove({'_id': twoteId}, function(err, data) {
		if (err) console.log('error removing twote')
		res.end()
	});
}

routes.logout = function(req, res) {
	req.session.username = ""
	res.render('message', {'message':'You are now logged out!', layout: 'other' })
}


module.exports = routes;