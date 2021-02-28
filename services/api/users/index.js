const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const helper = require("@/db/dbBase/helper");

router.get("/", permit(3), (req, res) => {
  console.log(helper)
  const selectOptions = {
    cb: cb(res),
    table: "users",
    columns: ["id", "email", "name", "surname", "phone"],
  };
  db.select(selectOptions);
});

module.exports = router;
