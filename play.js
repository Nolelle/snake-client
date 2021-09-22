const net = require("net");
const { stdin } = require("process");
const { connect } = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
// \u0003 maps to ctrl+c input
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (data) => {
    if (data === "\u0003") {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};
setupInput();
