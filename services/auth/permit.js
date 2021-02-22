const permit = require("./checkAuth.js");
/* 
roleBit determines who has acces to entry
1 - superadmin
2 - admin
4 - trainer
8 - student
16 - owner
 */
const checkAuth = (pageAuthLevel) => {
  // return a middleware
  return (request, response, next) => {
    permit({
      pageAuthLevel,
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
