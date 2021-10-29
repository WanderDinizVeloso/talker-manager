const { promises: { writeFile } } = require('fs');

const readFiles = require('./readFiles');

const writeFilesByIdDelete = async (file, id) => {
  try {
    const readContentFile = await readFiles(file);
    const newFile = readContentFile.filter((talker) => talker.id !== id);
        
    await writeFile(file, JSON.stringify(newFile));
  
    return readContentFile;
  } catch (error) {
    return error;
  }
};

module.exports = writeFilesByIdDelete;
