const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/",  (req, res) => {
  const options = {
    cb: cb(res),
    table: "groups",
    type: "selectWhereDeepMultiple",
    columns: [
      "id",
      "level",
      "label",
      "trainer_id",
      "lesson_day",
      "lesson_hour",
      "lesson_tool",
      "lesson_link",
    ],
    conditions: [
      {
        field: "`trainers`.`role_id`",
        condition: "=",
        value: 3,
      },
    ],
    join: [
      {
        table: { name: "users", newName: "trainers" },
        columns: ["name", "surname"],
        conditions: [
          { field: "groups.trainer_id", condition: "=", value: "trainers.id" },
        ],
      },
    ],
  };
  db(options);
});


router.get("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "groups",
    type: "selectWhere",
    columns: [
      "id",
      "level",
      "label",
      "trainer_id",
      "lesson_day",
      "lesson_hour",
      "lesson_link",
    ],
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.patch("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "groups",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "groups",
    type: "create",
    values: req.body.values,
  };
  db(options);
});

router.put("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "groups",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "groups",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

module.exports = router;
