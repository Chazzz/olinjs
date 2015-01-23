var http = require('http')
var fs = require('fs')
var map = require('through2-map')


var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  	if (req.method != 'POST')
	    return res.end('send me a POST\n') //LOL

	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})

server.listen(Number(process.argv[2]))