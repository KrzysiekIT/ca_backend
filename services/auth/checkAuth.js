const db = require("@/db/connection.js");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtToken = process.env.JWT_TOKEN;

const checkOwnership = {
  group: [{ table: "groups", field: "trainer_id" }],
  lesson: [
    { table: "groups", field: "group_id" },
    { table: "groups", field: "trainer_id" },
  ],
};

module.exports = ({ pageAuthLevel, request, response, next }) => {
  const token = request.headers["x-access-token"];
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

    const userBitLevel = result?.role?.bit;
    if (!userBitLevel) {
      return res.status(401).json({ message: "Unauthorized" });
    } else if (!(userBitLevel & pageAuthLevel)) {
      console.log(userBitLevel, pageAuthLevel);
      response.status(403).json({ message: "Forbidden" });
    } else {
      next();
    }
  });
};
