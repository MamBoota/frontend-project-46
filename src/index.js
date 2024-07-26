import parse from "./parse.js";
import formatter from "./formatters/index.js";
import getDifferenceTree from "./buildAST.js";

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  return formatter(getDifferenceTree(data1, data2), format);
};

export default genDiff;
