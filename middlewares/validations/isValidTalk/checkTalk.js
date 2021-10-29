function checkTalk(param) {
  const isTalk = !param || !param.watchedAt || param.rate === undefined;

  return !isTalk;
}

module.exports = checkTalk;
