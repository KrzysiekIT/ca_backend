const db = require("@/db/connection.js");
const getDbResult = require("./getDbResult.js")

const select = (cb, table, columns) => {
  columns = columns.join(", ");
  db.query(`SELECT ${columns} FROM ${table};`, getDbResult(cb));
};

module.exports = select;
