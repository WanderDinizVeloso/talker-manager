const {
  isRequired,
  isLength,
} = require('../auxFunctions');

const isValidToken = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(isRequired('token'));
  }

  if (authorization.length !== 16) {
    return next(isLength('token'));
  }

  next();
};

module.exports = isValidToken;
