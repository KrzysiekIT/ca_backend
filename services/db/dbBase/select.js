const db = require("@/db/connection");
const { makeDbQuery, getDbResult } = require("./helper");

const select = ({ cb, table, columns }) => {
  const makeQuery = makeDbQuery("select");
  db.query(makeQuery({ columns, table }), getDbResult(cb));
};

module.exports = select;
