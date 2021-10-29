const { promises: { writeFile } } = require('fs');

const readFiles = require('./readFiles');

const writeFilesByIdEdit = async (file, content) => {
  try {
    const { id, name, age, talk } = content;
    const readContentFile = await readFiles(file);
    const talkerIndex = readContentFile
      .findIndex((talker) => talker.id === id);

    readContentFile[talkerIndex] = { id, name, age, talk };
      
    await writeFile(file, JSON.stringify(readContentFile));
  
    return readContentFile;
  } catch (error) {
    return error;
  }
};

module.exports = writeFilesByIdEdit;