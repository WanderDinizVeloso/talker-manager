const { readFiles } = require('../../utils/readWriteFile');

const FILE = 'talker.json';

const findById = async (req, res, next) => {
  const findTalker = await readFiles(FILE);
  const { id } = req.params;  
  const talker = findTalker.find((talk) => talk.id === parseInt(id, 10));

  if (!talker) {
    return next({
      status: 404,
      message: 'Pessoa palestrante não encontrada',
    });
  } 
  
  return res.status(200).json(talker);
};

module.exports = findById;
