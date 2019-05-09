#!/usr/bin/env node

const readline = require('readline')
const parseArgs = require('minimist')

const strip = /\/node$/.test(process.argv[0]) ? 2 : 1
const argv = process.argv.slice(strip)
if (argv.length === 0)
  return console.error('Usage: rfilter [ -i ] <regex>')

const args = parseArgs(argv)

const regex = new RegExp(args._[0], args.i ? 'i' : '')

const rl = readline.createInterface({
  input: process.stdin,
}).on('line', line => {
  let match = regex.test(line)
  if (args.inverse) match = !match

  if (!match) return

  process.stdout.write(line + '\n')
})
