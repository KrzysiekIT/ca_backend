const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const servicePath = require("@/path");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "files",
    type: "select",
    columns: ["id", "description_pl", "description_en", "name", "folder_id"],
  };
  db(options);
});

router.get("/folder/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "files",
    type: "selectWhere",
    columns: ["id", "description_pl", "description_en", "name", "folder_id"],
    conditions: [{ field: "folder_id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.put("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "files",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(15), (req, res) => {
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
    const fileExtension = files.new_file.name.split(".").pop();
    const oldPath = files.new_file.path;
    /* const newPath = `${servicePath}/../files/` + files.new_file.name; */
    const newPath =
      `${servicePath}/../files/` + fields.name + "." + fileExtension;
    const rawData = fs.readFileSync(oldPath);

    fs.writeFile(newPath, rawData, function (err) {
      if (err) console.log(err);
      const options = {
        cb: cb(res),
        table: "files",
        type: "create",
        values: { ...fields, name: fields.name + "." + fileExtension },
      };
      db(options);
    });
  });
});

module.exports = router;
