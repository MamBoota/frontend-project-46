import genDiff from "../src/index.js";
import path from "path";
import expected from "../__fixtures__/expected_file.js"

// const testFormatList = [
//   'json',
//   'yml',
//   'yaml',
// ];

const getFixturesPath = (filePath) => path.relative(process.cwd(), `__fixtures__/${filePath}`);
// const getFixturesPathJSON = (filePath) => path
//   .relative(process.cwd(), `__fixtures__/json/${filePath}`);
// const getFixturesPathYML = (filePath) => path
//   .relative(process.cwd(), `__fixtures__/yml_yaml/${filePath}`);

test('flat files json', () => {
  const filepath1 = getFixturesPath('json/file1.json');
  const filepath2 = getFixturesPath('json/file2.json');
  const received = genDiff(filepath1, filepath2);

  expect(received).toEqual(expected);
});

test('flat files yml', () => {
  const filepath1 = getFixturesPath('yml_yaml/file1.yml');
  const filepath2 = getFixturesPath('yml_yaml/file2.yaml');
  const received = genDiff(filepath1, filepath2);
  
  expect(received).toEqual(expected);
});

// describe('gendiff', () => {
//   test.each(testFormatList)('gendiff %s', (format) => {
//     const filepath1JSON = getFixturesPathJSON(`file1.${format}`);
//     const filepath2JSON = getFixturesPathJSON(`file2.${format}`);
//     const filepath1YML = getFixturesPathYML(`file1.${format}`);
//     const filepath2YML = getFixturesPathYML(`file2.${format}`);

//     expect(genDiff(filepath1JSON, filepath2JSON)).toEqual(expected);
//     expect(genDiff(filepath1YML, filepath2YML)).toEqual(expected);
//   });
// });
