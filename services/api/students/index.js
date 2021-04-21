const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "selectWhereDeep",
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
      "phone",
      "role_id",
      "created_at",
      "group_id",
      "terms_accepted"
    ],
    conditions: [
      {
        field: "`users`.`role_id`",
        condition: "=",
        value: 4,
      },
    ],
    joinTable: "groups",
    joinColumns: ["trainer_id", "lesson_day", "lesson_hour"],
    joinConditions: [
      { field: "users.group_id", condition: "=", value: "groups.id" },
    ],
  };
  db(options);
});

router.get("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "selectWhere",
    columns: [
      "id",
      "email",
      "name",
      "surname",
      "phone",
      "role_id",
      "created_at",
    ],
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
