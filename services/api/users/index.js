const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    type: "select",
    table: "users",
    columns: ["id", "email", "name", "surname", "phone"],
  };
  db(options);
});

module.exports = router;
