function isLength(param, number = null) {
  if (param === 'token') {
    return {
      status: 401,
      message: 'Token inválido',
    };
  }

  return {
    status: 400,
    message: `O "${param}" deve ter pelo menos ${number} caracteres`,
  };
}

module.exports = isLength;
