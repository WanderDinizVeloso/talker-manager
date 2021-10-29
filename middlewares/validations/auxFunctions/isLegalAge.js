function isLegalAge() {
  return {
    status: 400,
    message: 'A pessoa palestrante deve ser maior de idade',
  };
}

module.exports = isLegalAge;
