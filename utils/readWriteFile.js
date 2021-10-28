const { promises: { readFile, writeFile } } = require('fs');

const readFiles = async (file, next) => {
  try {
    const content = await readFile(file, 'utf8');
  
    return JSON.parse(content);
  } catch (error) {
    return next(error);
  }
};

const writeFiles = async (file, content, next) => {
  try {
    const readContentFile = await readFiles(file);
  
    readContentFile.push(content);
  
    await writeFile(file, JSON.stringfy(readContentFile));
  
    return content;
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  readFiles,
  writeFiles,
};