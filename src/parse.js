import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const parse = (fileName) => {
  const getData = fs.readFileSync(path.relative(process.cwd(), fileName), 'utf-8');
  const extName = path.extname(fileName);

  if (extName === '.json') return JSON.parse(getData);
  if (extName === '.yml' || extName === '.yaml') return yaml.load(getData);
};

export default parse;
