// set up mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var kittySchema = mongoose.Schema({
    name: String
})

var Kitten = mongoose.model('Kitten', kittySchema)

module.exports.kittenModel = Kitten

// var BlogSchema = Schema({
//   header: {type: String },
//   author: {type: String },
//   text: {type: String },
//   _id: { type: ObjectId } // not necessary, showing use of ObjectId
// });

// Blog = mongoose.model('Blog', BlogSchema);
// // the above is necessary as you might have embedded schemas which you don't export

// exports.blogModel = Blog;
