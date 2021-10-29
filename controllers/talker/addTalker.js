const { writeFilesAdd } = require('../../utils/readWriteFile');

const FILE = 'talker.json';

const addTalker = async (req, res, _next) => {
  const { name, age, talk } = req.body;
  const talker = { name, age, talk };
  const newFile = await writeFilesAdd(FILE, talker);

  return res.status(201).json(newFile);  
};

module.exports = addTalker;
