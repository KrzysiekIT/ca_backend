const getCb = (res) => {
  return (err, response) => {
    if (err) {
      res.status(500).json({ message: err });
    }
    res.json(response);
  };
};
module.exports = getCb;
