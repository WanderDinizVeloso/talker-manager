const express = require('express');

const wrapper = require('../utils/wrapper');
const { readFiles } = require('../utils/readWriteFile');

const FILE = 'talker.json';

const find = async (_req, res, _next) => {
  const findTalker = await readFiles(FILE);
 
  return res.status(200).json(findTalker);
};

const router = express.Router({ mergeParams: true });

router.get('/', wrapper(find));

module.exports = router;