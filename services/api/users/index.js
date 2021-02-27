const { Router } = require("express");
const router = Router();
const db = require("@/db/dbHelper");
const permit = require("@/auth/permit");

router.get("/", permit(3), (req, res) => {
  const selectOptions = {
    cb: (err, response) => {
      if (err) {
        res.status(500).json({ message: "Database error" });
      }
      res.json(response);
    },
    table: "users",
    columns: ["id", "email", "name", "surname", "phone"],
  };
  db.select(selectOptions);
});

module.exports = router;
