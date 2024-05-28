install:
	sudo npm ci

gendiff-h:
	node bin/gendiff.js -h

gendiff-reading-file:
	node bin/gendiff.js __fixtures__/json/file1.json __fixtures__/json/file2.json

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
