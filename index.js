const five = require("johnny-five");
const board = new five.Board();

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



})
