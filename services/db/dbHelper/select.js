const db = require("@/db/connection.js");
const getDbQueryResult = require("./getDbResult.js")

const select = (cb, table, columns) => {
  columns = columns.join(", ");
  db.query(`SELECT ${columns} FROM ${table};`, getDbQueryResult(cb));
};

module.exports = select;
