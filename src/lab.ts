import { jsoncPatch } from './jsonc-patch'

console.log(
  'Array replace:',
  jsoncPatch('{"arr": [1, 2, 3, 4]}', { arr: [99, 2, 3, 99] })
)

console.log(
  'Root numeric key no-op:',
  jsoncPatch('{ "0": "foo" }', { 0: 'foo' })
)

console.log('Add numeric key:', jsoncPatch('{}', { 0: 'foo' }))

console.log(
  'Nested numeric key:',
  jsoncPatch('{"data": {"0": "old"}}', { data: { 0: 'new' } })
)

console.log(
  'Array under numeric key:',
  jsoncPatch('{"0": [1, 2]}', { 0: [99, 2] })
)

console.log('Root array replace:', jsoncPatch('[0,1,2]', ['bar', 1, 2]))

console.log('Root array to object:', jsoncPatch('[0,1,2]', { 0: 'bar' }))
