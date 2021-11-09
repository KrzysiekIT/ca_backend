const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/:name/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "single",
    type: "selectWhere",
    columns: ["id", "name", "body"],
    conditions: [{ field: "name", condition: "=", value: req.params.name }],
  };
  db(options);
});

router.put("/:name/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "single",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "name", condition: "=", value: req.params.name }],
  };
  db(options);
});

module.exports = router;
