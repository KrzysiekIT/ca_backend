const dbConn = require("@/db/connection");
const { makeDbQuery, getDbResult } = require("./helper");

const db = ({ cb, ...queryOptions }) => {
  dbConn.query(makeDbQuery(queryOptions), getDbResult(cb));
};

module.exports = db;
