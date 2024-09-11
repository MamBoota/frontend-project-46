install:
	sudo npm ci

run:
	npx eslint .
	npm test
	npm test -- --coverage --coverageProvider=v8
	node bin/gendiff.js -h
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json -f plain
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yaml
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yaml -f plain
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json -f json
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yaml -f json

gendiff-v:
	node bin/gendiff.js -V

gendiff-h:
	node bin/gendiff.js -h

gendiff-json:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

gendiff-json-plain:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json -f plain

gendiff-json-json:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json -f json

gendiff-yml:
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yaml

gendiff-yml-plain:
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yaml -f plain

gendiff-yml-json:
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yaml -f json

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

link:
	sudo npm link

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
