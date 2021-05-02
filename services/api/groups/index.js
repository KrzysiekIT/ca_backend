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

router.get("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "selectWhereDeepMultiple",
    columns: [
      "id",
      "email",
      "name",
      "surname",
      "birth_year",
      "parent_full_name",
      "parent_email",
      "parent_phone_number",
      "status",
      "start_at",
      "role_id",
      "created_at",
      "group_id",
      "terms_accepted",
      "link_sent",
    ],
    conditions: [
      {
        field: "`users`.`role_id`",
        condition: "=",
        value: 4,
      },
    ],
    join: [
      {
        table: { name: "groups", newName: "groups" },
        columns: ["trainer_id", "lesson_day", "lesson_hour"],
        conditions: [
          { field: "users.group_id", condition: "=", value: "groups.id" },
        ],
      },
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
    table: "users",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "create",
    values: req.body.values,
  };
  db(options);
});

router.put("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

module.exports = router;
