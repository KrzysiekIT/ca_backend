// middleware for doing role-based permissions

const checkOwnership = {
    group: [{ table: "groups", field: "trainer_id" }],
    lesson: [
      { table: "groups", field: "group_id" },
      { table: "groups", field: "trainer_id" },
    ],
  };
  
  module.exports = ({ db, express, bcrypt, jwt, jwtToken, roleBit, request, response, next }) => {
    if(roleBit===35) {
      console.log(__dirname)
      next();
    } else {
      response.status(403).json({message: "Forbidden"}); // user is forbidden
    }
    // return a middleware
    /* return (request, response, next) => {
      console.log("OOOOOOOOOO")
      next();
      const { user } = request
    
        if (user && permittedRoles.includes(user.role)) {
          next(); // role is allowed, so continue on the next middleware
        } else {
          response.status(403).json({message: "Forbidden"}); // user is forbidden
        }
    }; */
  };
  