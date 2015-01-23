var http = require('http')
var fs = require('fs')
var map = require('through2-map')
var url = require('url')

//boring structures, made with time constraints
function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso) //this is how it works
  var result

  if (/^\/api\/parsetime/.test(req.url)) //test string satisfies regexp (begins with /api/parsetime) 
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(Number(process.argv[2]))