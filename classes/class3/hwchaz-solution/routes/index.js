var cool = require('cool-ascii-faces');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send(cool());
  });
  require('./cats')(app);
  // other routes entered here as require(route)(app);
  // we basically pass 'app' around to each route
}