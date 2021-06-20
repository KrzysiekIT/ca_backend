const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const servicePath = require("@/path");

router.get("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "files",
    type: "select",
    columns: ["id", "description_pl", "description_en", "name", "exercise"],
  };
  db(options);
});

router.put("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "files",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "files",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log(fields)
    const oldPath = files.new_file.path;
    const newPath = `${servicePath}/../files/` + files.new_file.name;
    const rawData = fs.readFileSync(oldPath);

    fs.writeFile(newPath, rawData, function (err) {
      if (err) console.log(err);
      const options = {
        cb: cb(res),
        table: "files",
        type: "create",
        values: { ...fields, name: files.new_file.name },
      };
      db(options);
    });
  });
});

module.exports = router;
