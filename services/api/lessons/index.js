const { Router, request } = require("express");
const router = Router();
const db = require("@/db/dbBase");
const cb = require("@/api/helper");
const permit = require("@/auth/permit");
const dbQueryOnly = require("@/db/connection");

router.get("/", permit(15), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons",
    type: "select",
    columns: ["id", "group_id", "date", "lesson_number"],
  };
  db(options);
});

router.get("/last/:groupIds", (req, res) => {
  const groupsIds = req.params.groupIds.split(",");
  let dbQuery = "";

  for (let groupIndex = 0; groupIndex < groupsIds.length; groupIndex++) {
    dbQuery += `select * from lessons where lesson_number=(select max(lesson_number) from lessons where group_id=${groupsIds[groupIndex]}) limit 1;`;
  }

  dbQueryOnly.query(dbQuery, (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ type: "error", message: "db error", error });
    } else {
      res.json({
        type: "success",
        data: results.flat(1),
      });
    }
  });
});

router.put("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons",
    type: "update",
    newValues: req.body.newValues,
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.delete("/:id/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons",
    type: "remove",
    conditions: [{ field: "id", condition: "=", value: req.params.id }],
  };
  db(options);
});

router.post("/new/:groupId", permit(15), (req, res) => {
  const dbQuery = `select * from lessons where lesson_number=(select max(lesson_number) from lessons where group_id=${req.params.groupId}) limit 1;`;

  dbQueryOnly.query(dbQuery, (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ type: "error", message: "db error", error });
    } else {
      let oldDate = results[0].date;
      oldDate = new Date(
        results[0].date.getTime() - results[0].date.getTimezoneOffset() * 60000
      ).toISOString();
      oldDate = oldDate.slice(0, 10).replace(/-/g, "");
      const newDate = req.body.date.slice(0, 10).replace(/-/g, "");
      if (oldDate === newDate) {
        return res.status(409).json({ message: "Lesson already exists" });
      } else {
        const usersQuery = `select id from users where group_id = ${req.params.groupId} and role_id = 4;`;

        dbQueryOnly.query(usersQuery, (error, resultsUsers) => {
          if (error) {
            return res
              .status(500)
              .json({ type: "error", message: "db error", error });
          } else {
            const dateToDb = `${req.body.date.substring(
              0,
              10
            )} ${req.body.date.substring(11, 19)}`;
            const newLessonQuery = `INSERT INTO lessons (group_id, date, lesson_number) VALUES (${
              req.params.groupId
            }, '${dateToDb}', ${results[0].lesson_number + 1})`;
            dbQueryOnly.query(newLessonQuery, (error, resultsLesson) => {
              if (error) {
                return res
                  .status(500)
                  .json({ type: "error", message: "db error", error });
              } else {
                let dbPresencesQuery = "";
                for (let i = 0; i < resultsUsers.length; i++) {
                  dbPresencesQuery += `INSERT INTO presences (lesson_id, user_id, status) VALUES (${
                    resultsLesson.insertId
                  }, ${resultsUsers[i].id}, ${-1});`;
                }

                dbQueryOnly.query(
                  dbPresencesQuery,
                  (error, resultPresences) => {
                    if (error) {
                      return res
                        .status(500)
                        .json({ type: "error", message: "db error", error });
                    } else {
                      res.status(200).json({ message: "OK" });
                    }
                  }
                );
              }
            });
          }

          /* const options = {
          cb: cb(res),
          table: "lessons",
          type: "create",
          values: {
            group_id: req.params.groupId,
            lesson_number: results[0].lesson_number + 1,
            date: `${req.body.date.slice(0, 10)} ${req.body.date.slice(11, 8)}`,
          },
        };
        db(options); */
        });
      }
    }
  });
});

router.post("/", permit(3), (req, res) => {
  const options = {
    cb: cb(res),
    table: "lessons",
    type: "create",
    values: req.body.values,
  };
  db(options);
});

module.exports = router;
