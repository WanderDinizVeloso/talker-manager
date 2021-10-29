const generateToken = require('../../utils/generateToken');

const log = async (_req, res, _next) => {
  const token = generateToken();

  return res.status(200).json({ token });
};

module.exports = log;
