const db = require("@/db/connection.js");
const express = require("express");
const fs = require("fs");
const servicePath = require("@/path");

const routes = express.Router();

const readSqlFromFile = (file) => {
  return fs.readFileSync(`${servicePath}/db${file}`).toString();
};

routes.get("/drop", (req, res) => {
  const dbQuery = readSqlFromFile("/drop.sql");
  db.query(dbQuery, (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ type: "error", message: "db error", error });
    }
    res.json({
      type: "success",
      message: "Database dropped.",
      result: results,
    });
  });
});

routes.get("/seed", (req, res) => {
  const tables = [
    "roles",
    "training_groups",
    "users",
    "payments",
    "lessons",
    "presences",
    "lessons_missed",
    "terms",
    "abacus",
    "lessons_demo",
    "folders",
    "teaching_materials",
    "notes",
    "activation_links",
    "single",
    "future_skills"
  ];
  let dbQuery = "";
  tables.forEach((table) => {
    dbQuery += readSqlFromFile(`/tables/${table}_create.sql`);
    dbQuery += readSqlFromFile(`/tables/${table}_seed.sql`);
  });
  db.query(dbQuery, (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ type: "error", message: "db error", error });
    }
    res.json({
      type: "success",
      message: "Database seeded.",
      result: results,
    });
  });
});

module.exports = routes;
