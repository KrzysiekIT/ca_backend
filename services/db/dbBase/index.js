const select = require("./select");
const update = require("./update");

class Db {
  select = select;
  update = update;
}

const db = new Db();

module.exports = db;
