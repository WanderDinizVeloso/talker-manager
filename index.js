const express = require('express');
const talkerRouter = require('./controllers/talker');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRouter);

app.use(error);

app.listen(PORT, () => {
  console.log('Online');
});
