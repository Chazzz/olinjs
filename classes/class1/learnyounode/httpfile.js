var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' }) //status code and sets content type to regular text (not html)

  fs.createReadStream(process.argv[3]).pipe(res) //ez pipe file stream to response stream
})

server.listen(Number(process.argv[2]))