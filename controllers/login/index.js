const express = require('express');

const wrapper = require('../../utils/wrapper');
const log = require('./log');

const {
  isValidPassword,
  isValidEmail,
} = require('../../middlewares/validations');

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(isValidEmail),
  wrapper(isValidPassword),
  wrapper(log));

module.exports = router;