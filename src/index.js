import parse from "./parse.js";
import _ from "lodash";

const getResult = (sign, key, value) => `  ${sign} ${key}: ${value}`;

const genDiff = (filepath1, filepath2) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const keys1 = _.sortBy(Object.keys(data1));
  const keys2 = _.sortBy(Object.keys(data2));

  const date1Diff = keys1.reduce((acc, key) => {
    if (keys2.includes(key)) {
      if (data2[key] === data1[key]) acc.push(getResult(' ', key, data1[key]));
      else {
        acc.push(getResult('-', key, data1[key]));
        acc.push(getResult('+', key, data2[key]));
      }
    } else acc.push(getResult('-', key, data1[key]));

  return acc;
  }, ['{']);

  const allDateDiff = keys2.reduce((acc, key) => {
    if (!keys1.includes(key)) acc.push(getResult('+', key, data2[key],));

    return acc;
  }, date1Diff);

  allDateDiff.push('}');

  return allDateDiff.join('\n');
};

export default genDiff;
