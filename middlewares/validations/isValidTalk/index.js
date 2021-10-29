const {
  isRequired,
  isValid,
} = require('../auxFunctions');

const checkTalk = require('./checkTalk');
const checkRate = require('./checkRate');
const checkWatchedAt = require('./checkWatchedAt');

const isValidTalk = (req, _res, next) => {
  const { talk } = req.body;

  if (!checkTalk(talk)) {
    return next(isRequired('talk'));
  }

  if (!checkRate(talk.rate)) {
    return next(isValid('rate'));
  }

  if (!checkWatchedAt(talk.watchedAt)) {
    return next(isValid('watchedAt', 'dd/mm/aaaa'));
  }

  next();
};

module.exports = isValidTalk;
