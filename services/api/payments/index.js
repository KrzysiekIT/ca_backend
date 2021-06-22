const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const dbQueryOnly = require("@/db/connection");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "payments",
    type: "select",
    columns: ["user_id", "order_number", "amount", "created_at"],
  };
  db(options);
});

router.get("/user/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "payments",
    type: "selectWhere",
    columns: ["user_id", "order_number", "amount", "created_at"],
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.patch("/update/:id/:order_number", permit(15), (req, res) => {
  dbQuery = `INSERT INTO payments (user_id, order_number, amount, created_at) VALUES(${req.params.id}, ${req.params.order_number}, ${req.body.newValues.amount}, '${req.body.newValues.createdAt}') ON DUPLICATE KEY UPDATE amount=${req.body.newValues.amount}, created_at='${req.body.newValues.createdAt}'`;
  dbQueryOnly.query(dbQuery, (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ type: "error", message: "db error", error });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
