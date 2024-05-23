import fs from 'fs';
import path from 'path';

const parse = (directory) => {
  const result = fs.readFileSync(path.resolve(directory), 'utf-8', (err, data) => {
    if (err) throw err;
    return JSON.parse(data);
  });

  return result;
};

// console.log(parse('__fixtures__/json/file1.json'));

export default parse;
