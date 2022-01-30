const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const fs = require("fs");
const formidable = require("formidable");
const servicePath = require("@/path");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "teaching_materials",
    type: "select",
    columns: ["id", "parent_id", "name", "link", "type"],
  };
  db(options);
});

router.get("/:parentId/", permit(15), (req, res) => {
  let parentId = req.params.parentId
  let selectCondition = "="
  if(+parentId===0) {
    parentId = null;
    selectCondition = "IS"
  }

  const options = {
    cb: cb(res),
    table: "teaching_materials",
    type: "selectWhere",
    columns: ["id", "parent_id", "name", "link", "type"],
    conditions: [{ field: "parent_id", condition: selectCondition, value: parentId }],
  };

  db(options);
});

router.put("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "teaching_materials",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "teaching_materials",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
    force: true
  };
  db(options);
});

router.post("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "teaching_materials",
    type: "create",
    values: req.body.values,
  };
  console.log(options)
  db(options);
});

router.post("/file/", (req, res) => {
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
        table: "teaching_materials",
        type: "create",
        values: { ...fields, name: fields.name + "." + fileExtension },
      };
      db(options);
    });
  });
});

module.exports = router;
