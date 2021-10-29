const {
  isRequired,
  isLength,
} = require('../auxFunctions');

const isValidName = (req, _res, next) => {
  const { name } = req.body;

  if (!name) {
    return next(isRequired('name'));
  }

  if (name.length < 3) {
    return next(isLength('name', 3));
  }

  next();
};

module.exports = isValidName;
