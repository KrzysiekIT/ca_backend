require("dotenv").config();
require("module-alias/register");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("@/cors");
const router = require("@/api");
try {
  const app = express();
  app.use(cors);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use("/api", router);

  app.listen(process.env.PORT);
  console.log("App is running on port " + process.env.PORT);
} catch (e) {
  process.exit(1);
}
