import fs from "fs";
import path from "path";

const parse = (directory) => {
  const result = fs.readFileSync(path.join(directory), 'utf-8');

  return JSON.parse(result);
};

export default parse;
