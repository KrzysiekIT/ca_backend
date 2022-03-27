const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons_demo",
    type: "select",
    columns: ["id", "day", "hour", "link", "trainer_id", "students_number"],
  };
  db(options);
});

router.get("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons_demo",
    type: "selectWhere",
    columns: ["id", "day", "hour", "link", "trainer_id", "students_number"],
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.get("/check/:link/", (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons_demo",
    type: "selectWhere",
    columns: ["link", "day"],
    conditions: [{ field: "link", condition: "=", value: req.params.link }],
  };
  db(options);
});

const getRandomString = (length) => {
  const randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

const getMultipleRandomString = (linkCount, linkLength, separator) => {
  const randomString = [];
  for(let i=0;i<linkCount;i++) {
    randomString.push(getRandomString(linkLength))
  }
  return randomString.join(separator)
}

router.patch("/generate/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons_demo",
    type: "update",
    newValues: { link: getRandomString(20) },
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.put("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons_demo",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons_demo",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/", permit(15), (req, res) => {
  const studentsNumber = req.body.values.students_number;
  const linkLength = 20;
  const options = {
    cb: cb(res),
    table: "lessons_demo",
    type: "create",
    values: {...req.body.values, link: `${getMultipleRandomString(studentsNumber, linkLength, ";")}`},
  };
  db(options);
});

module.exports = router;
