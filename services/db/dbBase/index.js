const dbConn = require("@/db/connection");
const { makeDbQuery, getDbResult } = require("./helper");

const update = ({ cb, type, ...queryOptions }) => {
  const makeQuery = makeDbQuery(type);
  dbConn.query(makeQuery(queryOptions), getDbResult(cb));
};

module.exports = update;
