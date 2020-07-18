const five = require('johnny-five')
const board = new five.Board()
const app = require('http').createServer(handler),
  io = require('socket.io').listen(app),
  fs = require('fs')

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500)
        return res.end('Error loading index.html')
      }

      res.writeHead(200)
      res.end(data)
    })
}

board.on('ready', () => {
  const rgb = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    },
    isAnode: false
  })

  // Add led to REPL (optional)
  //board.repl.inject({ anode });
  


  io.sockets.on('connection', function (socket) {
    socket.on('happy', function () {
      rgb.color('00FF00')
    })

    socket.on('sad', function () {
      rgb.color('FF0000')
    })

    socket.on('neutral', function () {
      rgb.color('0000FF')
    })
  })



})
