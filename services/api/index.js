const { Router } = require("express");
const router = Router();
const { readdirSync, statSync } = require("fs");
const { join } = require("path");
const getDirs = (p) =>
  readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

const dirs = getDirs(__dirname);

dirs.forEach((dir) => {
    router.use(`/${dir}`, require(`@/api/${dir}`))
});

module.exports = router;
