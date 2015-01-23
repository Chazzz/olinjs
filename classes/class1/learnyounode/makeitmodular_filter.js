var fs = require('fs') //helpful function libraries for file systems and paths
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err) //forwards error to the main callback error handler

    list = list.filter(function (file) { //the actual filter fun
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list) //async callback (with no error) (but with a list we can print, yay)
  })
}