const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "terms",
    type: "select",
    columns: ["body"],
  };
  db(options);
});

router.put("/", permit(7), (req, res) => {
  const options = {
    cb: cb(res),
    table: "terms",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: 1 }],
  };
  db(options);
});

module.exports = router;
