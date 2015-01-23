var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)


// my functioning SHITTY code (doesn't have a count)
// var http = require('http')
// var bl = require('bl')
// var timers = require('timers')

// lol = ['a', 'b', 'c']

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     lol[0] = data
//   }))  
// })

// http.get(process.argv[3], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     lol[1] = data
//   }))  
// })

// http.get(process.argv[4], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     lol[2] = data
//   }))  
// })

// timers.setTimeout(function() {console.log(lol[0])
// console.log(lol[1])
// console.log(lol[2])}, 1000);

