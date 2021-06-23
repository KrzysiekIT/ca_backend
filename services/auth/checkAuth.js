const jwt = require("jsonwebtoken");
const jwtToken = process.env.JWT_TOKEN;

const checkOwnership = {
  group: [{ table: "training_groups", field: "trainer_id" }],
  lesson: [
    { table: "training_groups", field: "group_id" },
    { table: "training_groups", field: "trainer_id" },
  ],
};

module.exports = ({ pageAuthLevel, request, response, next }) => {
  const token = request.headers["x-access-token"];
  if (!token) {
    return response
      .status(400)
      .json({ type: "error", message: "x-access-token header not found." });
  }

  jwt.verify(token, jwtToken, (error, result) => {
    if (error) {
      return res.status(403).json({
        type: "error",
        message: "Provided token is invalid.",
        error,
      });
    }

    const userBitLevel = result?.role?.bit;
    if (!userBitLevel) {
      return res.status(401).json({ message: "Unauthorized" });
    } else if (!(userBitLevel & pageAuthLevel)) {
      if (pageAuthLevel & 16) {
        if (result?.id === +request.params.id) {
          next();
        } else {
          response.status(403).json({ message: "Forbidden" });
        }
      } else {
        response.status(403).json({ message: "Forbidden" });
      }
    } else {
      next();
    }
  });
};
