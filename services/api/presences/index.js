const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/:studentId/", permit(0), (req, res) => {
  const options = {
    cb: cb(res),
    table: "presences",
    type: "selectWhereDeep",
    columns: ["id", "lesson_id", "student_id", "status"],
    conditions: [
      {
        field: "`presences`.`student_id`",
        condition: "=",
        value: req.params.studentId,
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
