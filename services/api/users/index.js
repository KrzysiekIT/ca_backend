const { Router } = require("express");
const router = Router();
const db = require("@/db/connection.js");
const permit = require("@/auth/permit");

router.get("/", permit(3), (req, res) => {
  db.query("select * from users", (error, results) => {
    if (error) {
      return res.status(500).json({ type: "error", error });
    }
    res.json({ type: "success", message: "Users selected", results });
  });
});

module.exports = router;
