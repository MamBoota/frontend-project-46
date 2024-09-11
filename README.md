### Hexlet tests and linter status:

[![Actions Status](https://github.com/MamBoota/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MamBoota/frontend-project-46/actions)

[![Actions Status](https://github.com/MamBoota/frontend-project-46/actions/workflows/mamboota-check.yml/badge.svg)](https://github.com/MamBoota/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/6e34909e009c5750eb46/maintainability)](https://codeclimate.com/github/MamBoota/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/6e34909e009c5750eb46/test_coverage)](https://codeclimate.com/github/MamBoota/frontend-project-46/test_coverage)

### Installation

1. Clone repository

```
git clone git@github.com:MamBoota/frontend-project-46.git
```

2. Go to project directory

```
cd frontend-project-46/
```

3. Install from make file

```
make install
```

4. For a global installation of a package from a local directory, use the NPM Link command

```
make link
```

### Using

gendiff <filepath1> <filepath2> [options]

For example:

```
node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json
```

```
node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json -f plain
```

```
node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json -f json
```

Or through the Make operator:

```
make gendiff-json
```

```
make gendiff-json-plain
```

```
make gendiff-json-json
```

It's the same with files YAML.

An example of such a conclusion can be seen in one of the presented demonstrations:

Options:
-V, --version output the version number
-f, --format [type] output format (default: "stylish")
-h, --help output usage information

The program is able to display differences in three formats, by default this is the "stylish" format. It can also be "plain" and "json". To output the result according to a specific format, enter -f [format].

### Demonstration.

### Comparison of flat files (JSON).

[![asciicast](https://asciinema.org/a/dKfUuO2tPPkyxGzmH0tVam3E4.svg)](https://asciinema.org/a/dKfUuO2tPPkyxGzmH0tVam3E4)

### Comparison of flat files (YAML).

[![asciicast](https://asciinema.org/a/h2LbEbcfyxNChAYJOG5FduNkk.svg)](https://asciinema.org/a/h2LbEbcfyxNChAYJOG5FduNkk)

### Recursive file comparison (JSON).

[![asciicast](https://asciinema.org/a/DGzOYIfupaFOjroMgc31Pxphy.svg)](https://asciinema.org/a/DGzOYIfupaFOjroMgc31Pxphy)

### Plain format (JSON and YAML).

[![asciicast](https://asciinema.org/a/675482.svg)](https://asciinema.org/a/675482)

### Output in json.

[![asciicast](https://asciinema.org/a/675648.svg)](https://asciinema.org/a/675648)
