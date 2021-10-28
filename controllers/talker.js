const express = require('express');

const wrapper = require('../utils/wrapper');
const {
  readFiles,
  writeFilesAdd,
  writeFilesByIdEdit,
  writeFilesByIdEditDelete,
} = require('../utils/readWriteFile');

const {
  isValidName,
  isValidAge,
  isValidTalk,
  isValidToken,
} = require('../middlewares/validations');

const FILE = 'talker.json';

const find = async (_req, res, _next) => {
  const findTalker = await readFiles(FILE);
 
  return res.status(200).json(findTalker);
};

const findByid = async (req, res, next) => {
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

const addTalker = async (req, res, _next) => {
  const { name, age, talk } = req.body;
  const talker = { name, age, talk };

  const newFile = await writeFilesAdd(FILE, talker);

  return res.status(201).json(newFile);  
};

const editTalkerById = async (req, res, _next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const idNumber = parseInt(id, 10);

  const talker = { id: idNumber, name, age, talk };

  await writeFilesByIdEdit(FILE, talker);

  return res.status(200).json(talker);
};

const deleteTalkerById = async (req, res, _next) => {
  const { id } = req.params;
  const idNumber = parseInt(id, 10);

  await writeFilesByIdEditDelete(FILE, idNumber);

  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

const router = express.Router({ mergeParams: true });

router.get('/', wrapper(find));

router.get('/:id', wrapper(findByid));

router.post('/',
  wrapper(isValidToken),
  wrapper(isValidName),
  wrapper(isValidAge),
  wrapper(isValidTalk),
  wrapper(addTalker));

router.post('/:id',
  wrapper(isValidToken),
  wrapper(isValidName),
  wrapper(isValidAge),
  wrapper(isValidTalk),
  wrapper(editTalkerById));

router.delete('/:id',
  wrapper(isValidToken),
  wrapper(deleteTalkerById));

module.exports = router;