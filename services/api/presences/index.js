const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/:userId/", permit(24), (req, res) => {
  const options = {
    cb: cb(res),
    table: "presences",
    type: "selectWhereDeep",
    columns: ["id", "lesson_id", "user_id", "status"],
    conditions: [
      {
        field: "`presences`.`user_id`",
        condition: "=",
        value: req.params.userId,
      },
    ],
    joinTable: "lessons",
    joinColumns: ["date", "lesson_number"],
    joinConditions: [
      { field: "presences.lesson_id", condition: "=", value: "lessons.id" },
    ],
  };
  db(options);
});

router.get("/multiplelessons/:ids/", (req, res) => {
  const options = {
    cb: cb(res),
    table: "presences",
    type: "selectWhereIn",
    columns: ["id", "lesson_id", "user_id", "status"],
    conditions: [
      { field: "lesson_id", condition: "IN", value: `(${req.params.ids})` },
    ],
  };
  db(options);
});

router.patch("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "presences",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

module.exports = router;
