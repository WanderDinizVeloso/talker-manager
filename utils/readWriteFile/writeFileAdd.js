const { promises: { writeFile } } = require('fs');

const readFiles = require('./readFiles');

const writeFilesAdd = async (file, content) => {
  try {
    const readContentFile = await readFiles(file);
    const fileLength = readContentFile.length;
    const contentWithId = { ...content, id: fileLength + 1 };

    readContentFile.push(contentWithId);
      
    await writeFile(file, JSON.stringify(readContentFile));
  
    return contentWithId;
  } catch (error) {
    return error;
  }
};

module.exports = writeFilesAdd;
