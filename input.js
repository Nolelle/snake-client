// setup interface to handle user input from stdin
// \u0003 maps to ctrl+c input
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (data) => {
    if (data === "\u0003") {
      process.exit();
    } else if (data === "w") {
      connection.write("Move: up");
    } else if (data === "a") {
      connection.write("Move: left");
    } else if (data === "s") {
      connection.write("Move: down");
    } else if (data === "d") {
      connection.write("Move: right");
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };

//w	87
//a	65
//s 83
//d 68
