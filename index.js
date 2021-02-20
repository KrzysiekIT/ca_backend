require('dotenv').config();
require('module-alias/register')
const db = require("@/db/connection.js")
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("./auth");
const fs = require('fs');
const dbHelper = require("@/api/db");
const permit = require("@/auth/permit.js");
const jwtToken = process.env.JWT_TOKEN;
try {
  const app = express();

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  const checkAuth = (roleBit) => {
    // return a middleware
    return (request, response, next) => {
      permit({ db, express, bcrypt, jwt, jwtToken, roleBit, request, response, next });
      //next();
      /* const { user } = request
    
        if (user && permittedRoles.includes(user.role)) {
          next(); // role is allowed, so continue on the next middleware
        } else {
          response.status(403).json({message: "Forbidden"}); // user is forbidden
        } */
    };
  };

  app.get("/api/test", checkAuth(35), (req, res) => {
    db.query("select 1+1", (error, results) => {
      if (error) {
        return res.status(500).json({ type: "error", error });
      }
      res.json({ type: "success", message: "Test OK", results });
    });
  });

  app.use(
    "/api/db",
    dbHelper({ db, express, fs })
  );

  app.use(
    "/api/auth",
    auth({ db, express, bcrypt, jwt, jwtToken })
  );

  app.listen(process.env.PORT);
  console.log("App is running on port " + process.env.PORT);
} catch (e) {
  process.exit(1);
}
