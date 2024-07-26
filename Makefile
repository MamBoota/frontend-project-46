install:
	sudo npm ci

run:
	npx eslint .
	npm test
	npm test -- --coverage --coverageProvider=v8
	node bin/gendiff.js -h
	node bin/gendiff.js __fixtures__/json/file1.json __fixtures__/json/file2.json
	node bin/gendiff.js __fixtures__/yml_yaml/file1.yml __fixtures__/yml_yaml/file2.yaml

gendiff-h:
	node bin/gendiff.js -h

gendiff-json:
	node bin/gendiff.js __fixtures__/json/file1.json __fixtures__/json/file2.json

gendiff-yml:
	node bin/gendiff.js __fixtures__/yml_yaml/file1.yml __fixtures__/yml_yaml/file2.yaml

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
