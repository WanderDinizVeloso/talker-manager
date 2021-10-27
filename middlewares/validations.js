function isRequired(param) {
  return {
    status: 400,
    message: `O campo ${param} é obrigatório`,
  };
}

function isValid(param, format = null) {
  if (param === 'rate') {
    return {
      status: 400,
      message: `O campo ${param} deve ser um inteiro de 1 à 5`,
    };
  }

  return {
    status: 400,
    message: `O ${param} deve ter o formato ${format}`,
  };
}

function isLength(param, number) {
  return {
    status: 400,
    message: `O ${param} deve ter pelo menos ${number} caracteres`,
  };
}

function isLegalAge() {
  return {
    status: 400,
    message: 'A pessoa palestrante deve ser maior de idade',
  };
}

function isRequiredTalk() {
  return {
    status: 400,
    message: 'O campo talk é obrigatório e watchedAt e rate não podem ser vazios',
  };
}