module.exports = ({ db, express, fs }) => {
  const routes = express.Router();

  const readSqlFromFile= (file) => {
    return fs
    .readFileSync(__dirname + file)
    .toString()
  }

  routes.get("/drop", (req, res) => {
    const dbQuery = readSqlFromFile("/drop.sql")
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
    const tables = ["roles", "users", "payments", "groups", "lessons", "students", "presences", "lessons_missed"];
    let dbQuery = "";
    tables.forEach((table) => {
      dbQuery+=readSqlFromFile(`/tables/${table}_create.sql`);
      dbQuery+=readSqlFromFile(`/tables/${table}_seed.sql`);
    })
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

  return routes;
};
