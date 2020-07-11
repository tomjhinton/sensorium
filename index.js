const five = require("johnny-five");
const board = new five.Board();
const app = require('http').createServer(handler),
     io = require('socket.io').listen(app),
     fs = require('fs')

     function handler (req, res) {
       fs.readFile(__dirname + '/index.html',
       function (err, data) {
         if (err) {
           res.writeHead(500);
           return res.end('Error loading index.html');
         }

         res.writeHead(200);
         res.end(data);
       });
     }

board.on("ready", () => {
  const rgb = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    },
    isAnode: false
  });

  // Add led to REPL (optional)
  //board.repl.inject({ anode });
 let index = 0;
  // Turn it on and set the initial color
  const rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];
  board.loop(1000, () => {
     rgb.color(rainbow[index++]);
     if (index === rainbow.length) {
       index = 0;
     }
   });


   io.sockets.on('connection', function (socket) {
      socket.on('click', function () {

      })

      socket.on('click2', function () {

      })
    })



})
