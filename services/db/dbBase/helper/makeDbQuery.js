const makeDbQuery = () => {
  const prepare = {
    updateSet: (newValues) => {
      const keysValues = [];
      Object.keys(newValues).forEach((columnName) => {
        if (typeof newValues[columnName] === "string") {
          newValues[columnName] = `'${newValues[columnName]}'`;
        }
        keysValues.push(`${columnName} = ${newValues[columnName]}`);
      });
      return keysValues.join(", ");
    },
    updateConditions: (conditions) => {
      return conditions
        .map(({ field, condition, value }) => {
          if (typeof value === "string") {
            value = `'${value}'`;
          }
          return `${field} ${condition} ${value}`;
        })
        .join(" AND ");
    },
  };
  const types = {
    select: ({ columns, table }) => {
      return `SELECT ${columns.join(", ")} FROM ${table};`;
    },
    update: ({ table, newValues, conditions }) => {
      return `UPDATE ${table} SET ${prepare.updateSet(
        newValues
      )} WHERE ${prepare.updateConditions(conditions)};`;
    },
  };
  return ({ type, ...options }) => {
    return types[type](options);
  };
};

module.exports = makeDbQuery();
