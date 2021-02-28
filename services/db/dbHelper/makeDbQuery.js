const makeDbQuery = (type) => {
  const prepare = {
    updateSet: (newValues) => {
      const keysValues = [];
      Object.keys(newValues).forEach((columnName) => {
        keysValues.push(`${columnName} = ${newValues[columnName]}`);
      });
      return keysValues.join(", ");
    },
    updateConditions: (conditions) => {
      return conditions
        .map(({ field, condition, value }) => {
          return `${field} ${condition} ${value}`;
        })
        .join(" AND ");
    },
  };
  const types = {
    select: (options) => {
      return `SELECT ${options.columns.join(", ")} FROM ${options.table};`;
    },
    update: (options) => {
      return `UPDATE ${options.table} SET ${prepare.updateSet(
        options.newValues
      )} WHERE ${prepare.updateConditions(options.conditions)}`;
    },
  };
  return (options) => {
    return types[type](options);
  };
};

module.exports = makeDbQuery;
