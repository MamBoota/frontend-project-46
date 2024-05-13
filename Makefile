install:
	sudo npm ci

# run:
# 	bin/nodejs-package.js 10

install-deps:
	sudo npm ci --legacy-peer-deps

gendiff:
	node bin/gendiff.js -h

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

link:
	sudo npm link

lint:
	sudo npx eslint .

publish:
	sudo npm publish
