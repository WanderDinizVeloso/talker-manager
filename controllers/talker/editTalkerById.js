const { writeFilesByIdEdit } = require('../../utils/readWriteFile');

const FILE = 'talker.json';

const editTalkerById = async (req, res, _next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const idNumber = parseInt(id, 10);
  const talker = { id: idNumber, name, age, talk };

  await writeFilesByIdEdit(FILE, talker);

  return res.status(200).json(talker);
};

module.exports = editTalkerById;
