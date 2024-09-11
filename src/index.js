import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import formatter from './formatters/index.js';
import getDifferenceTree from './buildAST.js';

const getExtensionName = (fileName) => path.extname(fileName).slice(1);
const getData = (filePath) => parse(fs
  .readFileSync(path.relative(process.cwd(), filePath), 'utf-8'), getExtensionName(filePath));

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  return formatter(getDifferenceTree(data1, data2), format);
};

export default genDiff;
