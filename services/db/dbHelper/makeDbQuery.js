const makeDbQuery = (type) => {
  const types = {
    select: (options) => {
      return `SELECT ${options.columns.join(", ")} FROM ${options.table};`;
    },
  };
  return (options) => {
    return types[type](options);
  };
};

module.exports = makeDbQuery;
