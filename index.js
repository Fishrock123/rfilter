#!/usr/bin/env node

const readline = require('readline')

const arg = /\/node$/.test(process.argv[0]) ? 2 : 1
if (!process.argv[arg])
  return console.error('Usage: rfilter <regex>')

const regex = new RegExp(process.argv[arg])

const rl = readline.createInterface({
  input: process.stdin,
}).on('line', line => {
  if (!regex.test(line)) return
  process.stdout.write(line + '\n')
})
