const { readFiles } = require('../../utils/readWriteFile');

const FILE = 'talker.json';

const filterTalkerByName = async (req, res, _next) => {
  const { q } = req.query;
  const talkers = await readFiles(FILE);

  const filterTalker = talkers
    .filter((talker) => talker.name
      .toLowerCase()
      .includes(q.toLowerCase()));
 
  return res.status(200).json(filterTalker);
};

module.exports = filterTalkerByName;
