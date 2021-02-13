const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("./config");
const auth = require("./auth");

try {
  const db = mysql.createConnection(config.db);
  const app = express();

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
  });

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.get("/test", (req, res) => {
    db.query("select 1+1", (error, results) => {
      if (error) return res.status(500).json({ type: "error", error });
      res.json({ type: "success", message: "Test OK", results });
    });
  });

  app.use(
    "/auth",
    auth({ db, express, bcrypt, jwt, jwtToken: config.jwtToken })
  );

  app.listen(config.port);
  console.log("App is running on port " + config.port);
} catch (e) {
  process.exit(1);
}
