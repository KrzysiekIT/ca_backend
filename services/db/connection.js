const mysql = require("mysql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  socketPath: "/var/run/mysqld/mysqld.sock",
  multipleStatements: true,
};

const db = mysql.createConnection(config);

module.exports = db;
