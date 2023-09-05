const createRoleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!allowedRoles.includes(userRole)) {
      const errorMessage = "You are not authorized to access this";
      const forbiddenResponse = {
        status: "fail",
        error: errorMessage
      };

      return res.status(403).json(forbiddenResponse);
    }

    next();
  };
};

module.exports = createRoleMiddleware;
