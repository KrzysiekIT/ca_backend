const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const jwt = require("jsonwebtoken");
const jwtToken = process.env.JWT_TOKEN;

router.get("/", (req, res) => {
  const options = {
    cb: cb(res),
    table: "training_groups",
    type: "selectWhereDeepMultiple",
    columns: [
      "id",
      "level",
      "label",
      "trainer_id",
      "lesson_day",
      "lesson_hour",
      "lesson_tool",
      "lesson_link",
    ],
    conditions: [
      {
        field: "`trainers`.`role_id`",
        condition: "<",
        value: 4,
      },
    ],
    join: [
      {
        table: { name: "users", newName: "trainers" },
        columns: ["name", "surname"],
        conditions: [
          {
            field: "training_groups.trainer_id",
            condition: "=",
            value: "trainers.id",
          },
        ],
      },
    ],
  };
  db(options);
});

router.get("/my", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return response
      .status(400)
      .json({ type: "error", message: "x-access-token header not found." });
  }

  jwt.verify(token, jwtToken, (error, result) => {
    if (error) {
      return res.status(403).json({
        type: "error",
        message: "Provided token is invalid.",
        error,
      });
    }
    const myId = result?.id;

    const options = {
      cb: cb(res),
      table: "training_groups",
      type: "selectWhereDeepMultiple",
      columns: [
        "id",
        "level",
        "label",
        "trainer_id",
        "lesson_day",
        "lesson_hour",
        "lesson_tool",
        "lesson_link",
      ],
      conditions: [
        {
          field: "`trainers`.`id`",
          condition: "=",
          value: myId,
        },
      ],
      join: [
        {
          table: { name: "users", newName: "trainers" },
          columns: ["name", "surname"],
          conditions: [
            {
              field: "training_groups.trainer_id",
              condition: "=",
              value: myId,
            },
          ],
        },
      ],
    };
    db(options);
  });
});

router.get("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "training_groups",
    type: "selectWhere",
    columns: [
      "id",
      "level",
      "label",
      "trainer_id",
      "lesson_day",
      "lesson_hour",
      "lesson_link",
      "last_lesson_number",
      "abacus_level",
      "anzan_level",
    ],
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.patch("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "training_groups",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "training_groups",
    type: "create",
    values: req.body.values,
  };
  db(options);
});

router.put("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "training_groups",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "training_groups",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

module.exports = router;
