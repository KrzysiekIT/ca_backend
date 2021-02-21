const { Router } = require("express");
const router = Router();

const dbHelper = require("@/api/db");
const auth = require("@/api/auth");
const users = require("@/api/users");

router.use("/db", dbHelper);
router.use("/auth", auth);
router.use("/users", users);

module.exports = router;
