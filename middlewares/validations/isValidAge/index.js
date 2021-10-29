const {
  isRequired,
  isLegalAge,
} = require('../auxFunctions');

const isValidAge = (req, _res, next) => {
  const { age } = req.body;

  if (!age) {
    return next(isRequired('age'));
  }

  if (age < 18) {
    return next(isLegalAge());
  }

  next();
};

module.exports = isValidAge;
