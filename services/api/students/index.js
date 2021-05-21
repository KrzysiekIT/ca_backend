const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const dbQueryOnly = require("@/db/connection");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const jwt = require("jsonwebtoken");
const jwtToken = process.env.JWT_TOKEN;

router.get("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "selectWhereDeepMultiple",
    columns: [
      "id",
      "email",
      "name",
      "surname",
      "birth_year",
      "parent_full_name",
      "parent_email",
      "parent_phone_number",
      "status",
      "start_at",
      "role_id",
      "created_at",
      "group_id",
      "terms_accepted",
      "link_sent",
    ],
    conditions: [
      {
        field: "`users`.`role_id`",
        condition: "=",
        value: 4,
      },
    ],
    join: [
      {
        table: { name: "groups", newName: "groups" },
        columns: ["trainer_id", "lesson_day", "lesson_hour"],
        conditions: [
          { field: "users.group_id", condition: "=", value: "groups.id" },
        ],
      },
      {
        table: { name: "users", newName: "trainers" },
        columns: ["name", "surname"],
        conditions: [
          { field: "groups.trainer_id", condition: "=", value: "trainers.id" },
        ],
      },
    ],
  };
  db(options);
});

router.get("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "selectWhere",
    columns: [
      "id",
      "email",
      "name",
      "surname",
      "phone",
      "role_id",
      "created_at",
    ],
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.patch("/:id/", permit(19), (req, res) => {
  console.log(req.body.newValues)
  const options = {
    cb: cb(res),
    table: "users",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.patch("/accept-terms/:id/", permit(19), (req, res) => {
  dbQuery = `UPDATE users SET terms_accepted = 1 WHERE id = ${req.params.id};`;
  dbQueryOnly.query(dbQuery, (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ type: "error", message: "db error", error });
    } else {
      dbQueryOnly.query(
        "SELECT users.*, roles.bit as role_bit, roles.name as role_name FROM `users` LEFT JOIN roles ON users.role_id = roles.id WHERE `users`.`id` = ?;",
        req.params.id,
        (error, results) => {
          if (error) {
            return res
              .status(500)
              .json({ type: "error", message: "db error", error });
          }
          const user = results[0];
          const userData = {
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            birth_year: user.birth_year,
            parent_full_name: user.parent_full_name,
            parent_email: user.parent_email,
            parent_phone_number: user.parent_phone_number,
            status: user.status,
            start_at: user.start_at,
            created_at: user.created_at,
            group_id: user.group_id,
            terms_accepted: user.terms_accepted,
            link_sent: user.link_sent,
            role: { name: user.role_name, bit: user.role_bit },
          };
          res.json({
            type: "success",
            message: "Terms accepted.",
            user: userData,
            token: jwt.sign(userData, jwtToken, {
              expiresIn: "7d",
            }),
          });
        }
      );
    }
  });
});

router.post("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "create",
    values: req.body.values,
  };
  db(options);
});

router.put("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "users",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

module.exports = router;
