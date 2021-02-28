const db = require("@/db/connection");
const getDbResult = require("./getDbResult");
const makeDbQuery = require("./makeDbQuery");

const select = ({ cb, table, columns }) => {
  const makeQuery = makeDbQuery("select");
  db.query(makeQuery({ columns, table }), getDbResult(cb));
};

module.exports = select;
