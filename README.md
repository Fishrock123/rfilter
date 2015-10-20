# [rfilter](https://www.npmjs.com/package/rfilter)

Filter stdin lines by a Regular Expression and output to stdout.

Kinda like `grep` but uses JavaScript regex syntax.

## Example

```bash
$ printf "aaa\nbbb\nccc\nbird\n" | rfilter b
bbb
bird
```
