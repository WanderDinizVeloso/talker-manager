const {
  isRequired,
  isLength,
} = require('../auxFunctions');

const isValidPassword = (req, _res, next) => {
  const { password } = req.body;

  if (!password) {
    return next(isRequired('password'));
  }

  if (password.length < 6) {
    return next(isLength('password', 6));
  }

  next();
};

module.exports = isValidPassword;
