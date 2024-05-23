install:
	sudo npm ci

# run:
# 	bin/nodejs-package.js 10

# install-deps:
# 	sudo npm ci --legacy-peer-deps

gendiff-h:
	node bin/gendiff.js -h

gendiff-reading-file:
	node bin/gendiff.js __fixtures__/json/file1.json __fixtures__/json/file2.json

test:
	npm test

test-coverage:
	npm test --coverage

link:
	sudo npm link

lint:
	sudo npx eslint .

lint-fix:
	sudo npx eslint . --fix
