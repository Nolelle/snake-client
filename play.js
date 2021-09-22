const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let connectObj = connect();

setupInput(connectObj);
