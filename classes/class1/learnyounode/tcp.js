var net = require('net')

//fancy daterendering so that "1" always renders as "01"
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

//function that gets the time, cool
function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}


var server = net.createServer(function (socket) {
  socket.end(now() + '\n') //receives connection, writes to it and closes connection
})

server.listen(Number(process.argv[2]))