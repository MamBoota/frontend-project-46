import genDiff from "../src/index.js";
import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__/json/', filename);

test('flat files', () => {
  const filepath1 = getFixturesPath('file1.json');
  const filepath2 = getFixturesPath('file2.json');

  const received = genDiff(filepath1, filepath2);
  const expected = fs.readFileSync('__fixtures__/json/expected_file.json', 'utf-8');

  expect(received).toEqual(expected);
});
