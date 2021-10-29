const { readFiles } = require('../../utils/readWriteFile');

const FILE = 'talker.json';

const findAll = async (_req, res, _next) => {
  const findTalker = await readFiles(FILE);
 
  return res.status(200).json(findTalker);
};

module.exports = findAll;
