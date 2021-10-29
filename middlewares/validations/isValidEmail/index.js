const {
  isRequired,
  isValid,
} = require('../auxFunctions');

const isValidEmail = (req, _res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(isRequired('email'));
  }

  if (!email.includes('@' && '.com')) {
    return next(isValid('email', 'email@email.com'));
  }

  next();
};

module.exports = isValidEmail;
