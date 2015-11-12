# [rfilter](https://www.npmjs.com/package/rfilter)

[![CI Status][travis-image]][travis-url]

```
stdin | rfilter <regex> [ -i ]
```

Filter stdin lines by a Regular Expression and output to stdout.
Implies the `m` JavaScript regex flag.

Kinda like `grep` but uses JavaScript regex syntax.

## Example

```bash
$ printf "aaa\nbbb\nccc\nbird\n" | rfilter b
bbb
bird
```

## Options

- `-i` Enables the JavaScript case-insensitive (`'i'`) flag on the regex. 

[travis-image]: https://travis-ci.org/Fishrock123/rfilter.svg?branch=master
[travis-url]: https://travis-ci.org/Fishrock123/rfilter
