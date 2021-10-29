const express = require('express');

const wrapper = require('../../utils/wrapper');

const {
  isValidName,
  isValidAge,
  isValidTalk,
  isValidToken,
} = require('../../middlewares/validations');

const findAll = require('./findAll');
const findById = require('./findById');
const addTalker = require('./addTalker');
const editTalkerById = require('./editTalkerById');
const deleteTalkerById = require('./deleteTalkerById');
const filterTalkerByName = require('./filterTalkerByName');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper(findAll));

router.get('/search',
  wrapper(isValidToken),
  wrapper(filterTalkerByName));

router.get('/:id', wrapper(findById));

router.post('/',
  wrapper(isValidToken),
  wrapper(isValidName),
  wrapper(isValidAge),
  wrapper(isValidTalk),
  wrapper(addTalker));

router.put('/:id',
  wrapper(isValidToken),
  wrapper(isValidName),
  wrapper(isValidAge),
  wrapper(isValidTalk),
  wrapper(editTalkerById));

router.delete('/:id',
  wrapper(isValidToken),
  wrapper(deleteTalkerById));

module.exports = router;
