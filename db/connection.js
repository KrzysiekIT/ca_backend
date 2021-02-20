const config = require("../config.js");
const mysql = require("mysql");

const db = mysql.createConnection(config.db);

module.exports = db