const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "selectWhereDeepMultiple",
    columns: [
      "id",
      "email",
      "name",
      "surname",
      "phone_number",
      "role_id",
      "created_at",
      "group_id",
    ],
    conditions: [
      {
        field: "`users`.`role_id`",
        condition: "<",
        value: 4,
      },
    ],
    join: [
      {
        table: { name: "training_groups", newName: "training_groups" },
        columns: ["trainer_id", "lesson_day", "lesson_hour"],
        conditions: [
          { field: "users.group_id", condition: "=", value: "training_groups.id" },
        ],
      },
      {
        table: { name: "users", newName: "trainers" },
        columns: ["name", "surname"],
        conditions: [
          { field: "training_groups.trainer_id", condition: "=", value: "trainers.id" },
        ],
      },
    ],
  };
  db(options);
});

router.get("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "selectWhereDeepMultiple",
    columns: [
      "id",
      "email",
      "name",
      "surname",
      "phone_number",
      "role_id",
      "created_at",
      "group_id",
    ],
    conditions: [
      {
        field: "`users`.`role_id`",
        condition: "<",
        value: 4,
      },
      {
        field: "`users`.`id`",
        condition: "=",
        value: req.params.id,
      },
    ],
    join: [
      {
        table: { name: "training_groups", newName: "training_groups" },
        columns: ["trainer_id", "lesson_day", "lesson_hour"],
        conditions: [
          { field: "users.group_id", condition: "=", value: "training_groups.id" },
        ],
      },
      {
        table: { name: "users", newName: "trainers" },
        columns: ["name", "surname"],
        conditions: [
          { field: "training_groups.trainer_id", condition: "=", value: "trainers.id" },
        ],
      },
    ],
  };
  db(options);
});

router.patch("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "create",
    values: {...req.body.values, password: "$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu"},
  };
  db(options);
});

router.put("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

module.exports = router;
