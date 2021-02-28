const db = require("@/db/connection");
const { makeDbQuery, getDbResult } = require("./helper");

const update = ({ cb, table, newValues, conditions }) => {
  const makeQuery = makeDbQuery("update");
  db.query(makeQuery({ newValues, table, conditions }), getDbResult(cb));
};

module.exports = update;
