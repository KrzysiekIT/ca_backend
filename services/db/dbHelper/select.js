const db = require("@/db/connection.js");
const getDbResult = require("./getDbResult.js");
const makeDbQuery = require("./makeDbQuery.js");

const select = ({ cb, table, columns }) => {
  const makeQuery = makeDbQuery("select");
  db.query(makeQuery({ columns, table }), getDbResult(cb));
};

module.exports = select;
