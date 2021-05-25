const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "abacus",
    type: "select",
    columns: ["id", "lesson_number", "year", "title_pl", "title_en"],
  };
  db(options);
});

module.exports = router;
