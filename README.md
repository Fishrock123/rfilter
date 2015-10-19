# rfilter

Filter stdin by a Regular Expression and output to stdout.

Kinda like `grep` but uses JavaScript regex syntax.

## Example

```bash
$ printf "aaa\nbbb\nccc\n" | rfilter b
bbb
```
