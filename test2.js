var Board = require("firmata");
var board = new Board("/dev/ttyACM0");

board.on("ready", () => {
  // Arduino is ready to communicate
});
