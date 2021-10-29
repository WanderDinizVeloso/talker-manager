function checkRate(param) {
  const isRate = param % 1 === 0 && param >= 1 && param <= 5;

  return isRate;
}

module.exports = checkRate;
