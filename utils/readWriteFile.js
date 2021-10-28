const { promises: { readFile, writeFile } } = require('fs');

const readFiles = async (file) => {
  try {
    const content = await readFile(file, 'utf8');
  
    return JSON.parse(content);
  } catch (error) {
    return error;
  }
};

const writeFiles = async (file, content) => {
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

module.exports = {
  readFiles,
  writeFiles,
};