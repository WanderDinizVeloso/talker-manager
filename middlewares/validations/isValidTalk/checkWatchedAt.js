function checkWatchedAt(param) {
  return /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}$/.test(param);
}

module.exports = checkWatchedAt;
