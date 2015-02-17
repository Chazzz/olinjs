var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	user: String
});

module.exports = mongoose.model('User', userSchema);
