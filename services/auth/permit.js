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
  };
};

module.exports = checkAuth;
