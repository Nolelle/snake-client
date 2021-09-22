// setup interface to handle user input from stdin
// \u0003 maps to ctrl+c input
const handleUserInput = (data) => {
  if (data === "\u0003") {
    process.exit();
  }
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
