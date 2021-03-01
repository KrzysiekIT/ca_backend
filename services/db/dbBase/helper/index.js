const { join } = require("path");
const { readdirSync, statSync } = require("fs");
const getDirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)));

const dirs = getDirs(__dirname).filter((dir) => dir !== "index.js");

const helper = {};

dirs.forEach((dir) => {
  helper[dir.replace(/\.[^/.]+$/, "")] = require(`./${dir}`);
});

module.exports = helper;
