var models = require('../../models')
var kittenModel = models.kittenModel;


module.exports = function(app) {
  app.get('/cats', function(req, res) {
    kittenModel.find(function (err, kittens) {
	  if (err) return console.error(err);
	  // console.log(kittens)
	  // console.log(kittens[0])
	  res.render("home", kittens);
	});
  });
  // require('./nested')(app);
  // this is for things like http://site.com/new/nested
  // you would follow the same logic as in 'routes/index.js' at a nested level
}