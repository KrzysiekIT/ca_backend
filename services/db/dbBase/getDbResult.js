const getDbResult = (cb) => {
  return (err, results) => {
    if (err) {
      cb(err);
    }
    cb(null, results);
  };
};

module.exports = getDbResult;
