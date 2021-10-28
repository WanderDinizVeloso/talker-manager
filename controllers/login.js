const express = require('express');

const wrapper = require('../utils/wrapper');
const generateToken = require('../utils/generateToken');

const { isValidPassword, isValidEmail } = require('../middlewares/validations');

const login = async (_req, res, _next) => {
  const token = generateToken();

  return res.status(200).json({ token });
};

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(isValidEmail),
  wrapper(isValidPassword),
  wrapper(login));

module.exports = router;