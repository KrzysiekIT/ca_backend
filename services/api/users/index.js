const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "select",
    columns: [
      "id",
      "name",
      "surname",
      "role_id",
      "created_at",
    ],
  };
  db(options);
});

router.get("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "selectWhere",
    columns: [
      "id",
      "name",
      "surname",
      "role_id",
      "created_at",
    ],
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "create",
    values: req.body.values,
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
