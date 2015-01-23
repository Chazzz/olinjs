var filterFn = require('./makeitmodular_filter.js') //function _filter called filterFn in this file
var dir = process.argv[2] //dir to read
var filterStr = process.argv[3] //extension to filter for

filterFn(dir, filterStr, function (err, list) { //cool handler once the filtered list is returned
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) { //print function, bbbbooooring
    console.log(file)
  })
})