const select = require("./select");

class Db {
  select = select;
}

const db = new Db();

module.exports = db;
