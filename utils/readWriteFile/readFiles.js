const { promises: { readFile } } = require('fs');

const readFiles = async (file) => {
  try {
    const content = await readFile(file, 'utf8');
  
    return JSON.parse(content);
  } catch (error) {
    return error;
  }
};

module.exports = readFiles;
