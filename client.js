// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: "50542",
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Sucessfully connected to game server");
    conn.write("Name: ECY");
    setInterval(() => {
      conn.write("");
    }, 1000);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connect };
