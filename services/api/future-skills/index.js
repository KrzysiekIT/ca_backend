const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "future_skills",
    type: "select",
    columns: ["id", "parent_id", "name", "type"],
  };
  db(options);
});

router.get("/:parentId/", permit(15), (req, res) => {
  let parentId = req.params.parentId
  let selectCondition = "="
  if(+parentId===0) {
    parentId = null;
    selectCondition = "IS"
  }

  const options = {
    cb: cb(res),
    table: "future_skills",
    type: "selectWhere",
    columns: ["id", "parent_id", "name", "type"],
    conditions: [{ field: "parent_id", condition: selectCondition, value: parentId }],
  };

  db(options);
});

router.put("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "future_skills",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "future_skills",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "future_skills",
    type: "create",
    values: req.body.values,
  };
  db(options);
});

module.exports = router;
