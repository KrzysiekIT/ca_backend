const permit = require("./checkAuth.js");

const checkAuth = (roleBit) => {
  // return a middleware
  return (request, response, next) => {
    permit({
      roleBit,
      request,
      response,
      next,
    });
    //next();
    /* const { user } = request
    
        if (user && permittedRoles.includes(user.role)) {
          next(); // role is allowed, so continue on the next middleware
        } else {
          response.status(403).json({message: "Forbidden"}); // user is forbidden
        } */
  };
};

module.exports = checkAuth;
