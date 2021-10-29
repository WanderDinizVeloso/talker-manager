const { writeFilesByIdDelete } = require('../../utils/readWriteFile');

const FILE = 'talker.json';

const deleteTalkerById = async (req, res, _next) => {
  const { id } = req.params;
  const idNumber = parseInt(id, 10);

  await writeFilesByIdDelete(FILE, idNumber);

  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = deleteTalkerById;
