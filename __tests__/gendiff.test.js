import genDiff from "../src/index.js";
import path from "path";
import expectedStylish from "../__fixtures__/expectedStylish_file.js"
import expectedPlain from "../__fixtures__/expectedPlain_file.js"

const testFormatFileList = [
  'json',
  'yml',
  'yaml',
];

const getFixturesPath = (fileName) => path.relative(process.cwd(), `__fixtures__/${fileName}`);

describe('gendiff', () => {
  test.each(testFormatFileList)('gendiff %s', (fileFormat) => {
    const filepath1 = getFixturesPath(`file1.${fileFormat}`);
    const filepath2 = getFixturesPath(`file2.${fileFormat}`);

    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish);
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
    expect(() => {
      genDiff(filepath1, filepath2, 'stylish1');
    }).toThrow(new Error('Incorrect formatter'));
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
  });
});
