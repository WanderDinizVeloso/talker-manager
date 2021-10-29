function isValid(param, format = null) {
  if (param === 'rate') {
    return {
      status: 400,
      message: `O campo "${param}" deve ser um inteiro de 1 à 5`,
    };
  }

  if (param === 'email') {
    return {
      status: 400,
      message: `O "${param}" deve ter o formato "${format}"`,
    };
  }

  return {
    status: 400,
    message: `O campo "${param}" deve ter o formato "${format}"`,
  };
}

module.exports = isValid;