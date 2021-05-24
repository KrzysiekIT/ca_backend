const express = require("express");
const db = require("@/db/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtToken = process.env.JWT_TOKEN;

const routes = express.Router();

const authorizate = (userBitLevel, pageBitLevel) => {
  if (!userBitLevel || !(userBitLevel & pageBitLevel)) {
    return false;
  }
  return true;
};

routes.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(400).json({
      type: "error",
      message: "email and password fields are essential for authentication.",
    });
  }
  db.query(
    "SELECT users.*, roles.bit as role_bit, roles.name as role_name FROM `users` LEFT JOIN roles ON users.role_id = roles.id WHERE `users`.`email` = ?;",
    email,
    (error, results) => {
      if (error) {
        return res
          .status(500)
          .json({ type: "error", message: "db error", error });
      }
      if (results.length == 0) {
        return res.status(403).json({
          type: "error",
          message: "User with provided email not found in database.",
        });
      }
      const user = results[0];
      bcrypt.compare(password, user.password, (error, result) => {
        if (error) {
          return res
            .status(500)
            .json({ type: "error", message: "bcrypt error", error });
        }
        if (result) {
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
            message: "User logged in.",
            user: userData,
            token: jwt.sign(userData, jwtToken, {
              expiresIn: "7d",
            }),
          });
        } else {
          return res
            .status(403)
            .json({ type: "error", message: "Password is incorrect." });
        }
      });
    }
  );
});

routes.get("/me", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res
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
    return res.json({
      type: "success",
      message: "Provided token is valid.",
      result,
    });
  });
});

routes.post("/refresh", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res
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

    db.query(
      "SELECT users.*, roles.bit as role_bit, roles.name as role_name FROM `users` LEFT JOIN roles ON users.role_id = roles.id WHERE `users`.`id` = ?;",
      result?.id,
      (error, results) => {
        if (error) {
          return res
            .status(500)
            .json({ type: "error", message: "db error", error });
        }
        const user = results[0];
        if (result) {
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
            lesson_missed_link: user.lesson_missed_link,
            abacus_level: user.abacus_level,
            anzan_level: user.anzan_level,
            role: { name: user.role_name, bit: user.role_bit },
          };
          res.json({
            type: "success",
            message: "User logged in.",
            user: userData,
            token: jwt.sign(userData, jwtToken, {
              expiresIn: "7d",
            }),
          });
        } else {
          return res
            .status(403)
            .json({ type: "error", message: "Password is incorrect." });
        }
      }
    );
  });
});

routes.get("/users", (req, res) => {
  const pageBitLevel = 1;
  const token = req.headers["x-access-token"];
  if (!token) {
    return res
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
    const userBitLevel = result?.role?.bit;
    const authorizated = authorizate(pageBitLevel, userBitLevel);
    if (!authorizated) {
      // user's role is not authorized
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      return res.json({
        type: "success",
        message: "Provided token is valid.",
        result,
      });
    }
  });
});

module.exports = routes;
