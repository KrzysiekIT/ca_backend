const db = require("@/db/connection");
const getDbResult = require("./getDbResult");
const makeDbQuery = require("./makeDbQuery");

const selectDeep = async (table, columns, connected) => {
  query = util.promisify(db.query).bind(db);
  columns = columns.join(", ");
  let rootFields;
  try {
    rootFields = await query(`SELECT ${columns} FROM ${table};`);
  } catch (err) {
    return err;
  }

  const allFieldsAsync = [];
  for (let rootIndex = 0; rootIndex < rootFields.length; rootIndex++) {
    const subFieldsAsync = [];
    for (let subIndex = 0; subIndex < connected.length; subIndex++) {
      subFieldsAsync.push(
        query(
          `SELECT ${connected[subIndex].subFields.join(", ")} FROM ${
            connected[subIndex].foreignTable
          } WHERE id = ${rootFields[rootIndex][connected[subIndex].field]};`
        )
      );
      delete rootFields[rootIndex][connected[subIndex].field];
    }
    allFieldsAsync.push(Promise.all(subFieldsAsync));
  }
  const allFields = await Promise.all(allFieldsAsync);

  for (let rootIndex = 0; rootIndex < rootFields.length; rootIndex++) {
    for (let subIndex = 0; subIndex < connected.length; subIndex++) {
      rootFields[rootIndex][connected[subIndex].newField] =
        allFields[rootIndex][subIndex][0];
    }
  }

  return rootFields;
};

module.exports = selectDeep;
