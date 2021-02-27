const db = require("@/db/connection.js");

const select = (cb, table, columns) => {
  columns = columns.join(", ");
  db.query(`SELECT ${columns} FROM ${table};`, (err, results) => {
    if (err) {
      cb(err);
    }
    cb(null, results);
  });
};

module.exports = select;
