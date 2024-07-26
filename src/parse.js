import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const parse = (filePath) => {
  const getData = fs.readFileSync(path.relative(process.cwd(), filePath), 'utf-8');
  const extName = path.extname(filePath);

  if (extName === '.json') return JSON.parse(getData);
  if (extName === '.yml' || extName === '.yaml') return yaml.load(getData);
};

export default parse;
