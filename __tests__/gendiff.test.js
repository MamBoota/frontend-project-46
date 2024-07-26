import genDiff from "../src/index.js";
import path from "path";
import expectedStylish from "../__fixtures__/expectedStylish_file.js"

const testFormatList = [
  'json',
  'yml',
  'yaml',
];

const getFixturesPath = (fileName) => path.relative(process.cwd(), `__fixtures__/${fileName}`);

describe('gendiff', () => {
  test.each(testFormatList)('gendiff %s', (fileFormat) => {
    const filepath1 = getFixturesPath(`file1.${fileFormat}`);
    const filepath2 = getFixturesPath(`file2.${fileFormat}`);

    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish);
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
  });
});
