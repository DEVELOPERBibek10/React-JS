export default (role) => {
  return (req, res, next) => {
    //authorize user
    if (!req.user.roles.includes(role)) {
      return res.status(403).send("Access Denied");
    }

    next();
  };
};

