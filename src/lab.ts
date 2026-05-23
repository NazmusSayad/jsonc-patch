import { jsoncPatch } from './jsonc-patch'

console.log(jsoncPatch('{"arr": [1, 2, 3, 4]}', { arr: [99, 2, 3, 99] }))

console.log(jsoncPatch('{ "0": "foo" }', { 0: 'foo' }))

console.log(jsoncPatch('[0,1,2]', { 0: 'bar' }))

console.log(jsoncPatch('[0,1,2]', ['bar', 1, 2]))

console.log(jsoncPatch('{}', { 0: 'foo' }))
