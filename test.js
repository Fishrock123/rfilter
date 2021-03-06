const tap = require('tap')
const cp = require('child_process')

tap.test('The example works correctly', (t) => {
  const output = cp.spawnSync(
      'node',
      ['index.js', 'b'],
      { encoding: 'utf8', input: 'aaa\nbbb\nccc\nbird\n' })

  t.ok(output, 'Got stdout')

  t.ok(!output.error, 'No error')
  if (output.error) throw output.error

  t.equal(output.status, 0, 'Status is zero')
  if (output.status !== 0) t.bailout(output.stderr)

  t.equal(output.stdout, 'bbb\nbird\n', 'Output was correct')

  t.end()
})

tap.test('-i option works correctly', (t) => {
  const output = cp.spawnSync(
      'node',
      ['index.js', 'b', '-i'],
      { encoding: 'utf8', input: 'aaa\nBBB\nccc\nbird\nBubBles\n' })

  t.ok(output, 'Got stdout')

  t.ok(!output.error, 'No error')
  if (output.error) throw output.error

  t.equal(output.status, 0, 'Status is zero')
  if (output.status !== 0) t.bailout(output.stderr)

  t.equal(output.stdout, 'BBB\nbird\nBubBles\n', 'Output was correct')

  t.end()
})

tap.test('--inverse option works correctly', (t) => {
  const output = cp.spawnSync(
      'node',
      ['index.js', 'b', '--inverse'],
      { encoding: 'utf8', input: 'aaa\nBBB\nccc\nbird\nBubBles\n' })

  t.ok(output, 'Got stdout')

  t.ok(!output.error, 'No error')
  if (output.error) throw output.error

  t.equal(output.status, 0, 'Status is zero')
  if (output.status !== 0) t.bailout(output.stderr)

  t.equal(output.stdout, 'aaa\nBBB\nccc\n', 'Output was correct')

  t.end()
})
