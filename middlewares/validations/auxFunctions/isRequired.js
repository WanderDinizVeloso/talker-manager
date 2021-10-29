function isRequired(param) {
  if (param === 'token') {
    return {
      status: 401,
      message: 'Token não encontrado',
    };
  }

  if (param === 'talk') {
    return {
      status: 400,
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    };
  }

  return {
    status: 400,
    message: `O campo "${param}" é obrigatório`,    
  };
}

module.exports = isRequired;