const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const dbQueryOnly = require("@/db/connection");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "notes",
    type: "select",
    columns: ["user_id", "lesson_name", "lesson_number", "note"],
  };
  db(options);
});

router.get("/:userId/:lessonName/:lessonNumber/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "notes",
    type: "selectWhere",
    columns: ["user_id", "lesson_name", "lesson_number", "note"],
    conditions: [
      { field: "user_id", condition: "=", value: req.params.userId },
      { field: "lesson_name", condition: "=", value: req.params.lessonName },
      {
        field: "lesson_number",
        condition: "=",
        value: req.params.lessonNumber,
      },
    ],
  };
  db(options);
});

router.patch(
  "/update/:userId/:lessonName/:lessonNumber",
  permit(7),
  (req, res) => {
    const { userId, lessonName, lessonNumber } = req.params;
    const note = req.body.newValues.note
    dbQuery = `INSERT INTO notes (user_id, lesson_name, lesson_number, note) VALUES(${userId}, '${lessonName}', ${lessonNumber}, '${note}') ON DUPLICATE KEY UPDATE note='${note}'`;
    dbQueryOnly.query(dbQuery, (error, results) => {
      if (error) {
        return res
          .status(500)
          .json({ type: "error", message: "db error", error });
      } else {
        res.json(results);
      }
    });
  }
);

module.exports = router;
