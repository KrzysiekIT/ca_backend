const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const sendEmail = require("@/email");
const dbQueryOnly = require("@/db/connection");
const bcrypt = require("bcrypt");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "activation_links",
    type: "select",
    columns: ["id", "user_id", "link"],
  };
  db(options);
});

router.get("/link/:link/", (req, res) => {
  const options = {
    cb: cb(res),
    table: "activation_links",
    type: "selectWhere",
    columns: ["id", "user_id", "link"],
    conditions: [{ field: "link", condition: "=", value: req.params.link }],
  };
  db(options);
});

router.delete("/:id/", (req, res) => {
  const options = {
    cb: cb(res),
    table: "activation_links",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
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

router.post("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "activation_links",
    type: "create",
    values: { user_id: req.body.user_id, link: getRandomString(20) },
  };
  db(options);
});

router.post("/activate/:link/", (req, res) => {
  dbQuery = `SELECT id, user_id, link FROM activation_links WHERE link = '${req.params.link}';`;
  dbQueryOnly.query(dbQuery, (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ type: "error", message: "db error", error });
    } else {
      let activateUser = false;
      if (results && results.length > 0) {
        activateUser = true;
      } else {
        return res
          .status(200)
          .json({
            type: "error",
            message: "No activation link found",
            activated: "no-activated",
          });
      }
      const userId = results[0].user_id;
      const saltRounds = 10;
      const newPassword = getRandomString(8);

      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(newPassword, salt, (err, hash) => {
          const userQuery = `UPDATE users SET status = 1, password = '${hash}' WHERE id = ${userId};`;

          dbQueryOnly.query(userQuery, (error, results) => {
            if (error) {
              return res
                .status(500)
                .json({ type: "error", message: "db error", error });
            } else {
              emailQuery = `SELECT email FROM users WHERE id = ${userId};`;
              dbQueryOnly.query(emailQuery, (error, results) => {
                if (error) {
                  return res
                    .status(500)
                    .json({ type: "error", message: "db error", error });
                } else {
                  const removeQuery = `DELETE FROM activation_links WHERE link = '${req.params.link}';`;
                  const emailToSend = results[0].email;
                  dbQueryOnly.query(removeQuery, (error, results) => {
                    if (error) {
                      return res
                        .status(500)
                        .json({ type: "error", message: "db error", error });
                    } else {
                      const mailOptions = {
                        from: "noreply@champions-academy.com",
                        to: `${emailToSend}`,
                        subject: "Champions academy - Twoje dane do logowania",
                        html: `<p>Twoje hasło do logowania to ${newPassword}</p>`,
                      };
                      sendEmail(mailOptions);

                      res.json({ message: "Email has been sent" });
                    }
                  });
                }
              });
            }
          });
        });
      });
    }
  });
});

router.post("/user/:id/", (req, res) => {
  dbQuery = `SELECT id, user_id, link FROM activation_links WHERE user_id = ${req.params.id};`;
  dbQueryOnly.query(dbQuery, (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ type: "error", message: "db error", error });
    } else {
      let linkGenerated = false;
      if (results && results.length > 0) {
        linkGenerated = true;
      }

      if (linkGenerated) {
        emailQuery = `SELECT email FROM users WHERE id = ${req.params.id};`;
        const activationLink = results[0].link;
        dbQueryOnly.query(emailQuery, (error, results) => {
          if (error) {
            return res
              .status(500)
              .json({ type: "error", message: "db error", error });
          } else {
            const emailToSend = results[0].email;
            const frontUrl = process.env.FRONT_URL;

            const mailOptions = {
              from: "noreply@champions-academy.com",
              to: `${emailToSend}`,
              subject: "Champions academy - Twój link aktywacyjny",
              html: `<a href="${frontUrl}/activate?code=${activationLink}" target="_blank">Kliknij w link, aby aktywować konto</a>`,
            };
            sendEmail(mailOptions);

            res.json({ message: "Email has been sent" });
          }
        });
      } else {
        const activationLink = getRandomString(20);
        const generateQuery = `INSERT INTO activation_links (user_id, link) VALUES (${req.params.id}, '${activationLink}');`;
        dbQueryOnly.query(generateQuery, (error, results) => {
          if (error) {
            return res
              .status(500)
              .json({ type: "error", message: "db error", error });
          } else {
            emailQuery = `SELECT email FROM users WHERE id = ${req.params.id};`;
            dbQueryOnly.query(emailQuery, (error, results) => {
              if (error) {
                return res
                  .status(500)
                  .json({ type: "error", message: "db error", error });
              } else {
                const emailToSend = results[0].email;
                const frontUrl = process.env.FRONT_URL;

                const mailOptions = {
                  from: "noreply@champions-academy.com",
                  to: `${emailToSend}`,
                  subject: "Champions academy - Twój link aktywacyjny",
                  html: `<a href="${frontUrl}/activate?code=${activationLink}" target="_blank">Kliknij w link, aby aktywować konto</a>`,
                };
                sendEmail(mailOptions);

                res.json({ message: "Email has been sent" });
              }
            });
          }
        });
      }
    }
  });
});

module.exports = router;
