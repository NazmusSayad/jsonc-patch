import { jsoncPatch } from './jsonc-patch'

console.log(jsoncPatch('{"arr": [[1, 2], [3, 4]]}', { arr: [[1], [3, 4, 5]] }))
console.log(jsoncPatch('{"arr": [1]}', { arr: [1, 2, 3, 4, 5] }))
