const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/:userId/", permit(15), (req, res) => {
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
    joinColumns: ["date"],
    joinConditions: [
      { field: "presences.lesson_id", condition: "=", value: "lessons.id" },
    ],
  };
  db(options);
});

module.exports = router;
