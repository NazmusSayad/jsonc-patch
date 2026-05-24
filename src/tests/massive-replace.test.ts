import { describe, expect, it } from 'vitest'
import { jsoncPatch } from '../index'

describe('replace a string to every type', () => {
  it('a string to string', () => {
    expect(jsoncPatch('{"a": "old"}', { a: 'new' })).toBe('{"a": "new"}')
  })
  it('a string to number', () => {
    expect(jsoncPatch('{"a": "text"}', { a: 42 })).toBe('{"a": 42}')
  })
  it('a string to bool true', () => {
    expect(jsoncPatch('{"a": "text"}', { a: true })).toBe('{"a": true}')
  })
  it('a string to bool false', () => {
    expect(jsoncPatch('{"a": "text"}', { a: false })).toBe('{"a": false}')
  })
  it('a string to null', () => {
    expect(jsoncPatch('{"a": "text"}', { a: null })).toBe('{"a": null}')
  })
  it('a string to empty obj', () => {
    expect(jsoncPatch('{"a": "text"}', { a: {} })).toBe('{"a": {}}')
  })
  it('a string to obj', () => {
    expect(jsoncPatch('{"a": "text"}', { a: { x: 1 } })).toBe('{"a": {"x":1}}')
  })
  it('a string to empty arr', () => {
    expect(jsoncPatch('{"a": "text"}', { a: [] })).toBe('{"a": []}')
  })
  it('a string to arr', () => {
    expect(jsoncPatch('{"a": "text"}', { a: [1, 2] })).toBe('{"a": [1,2]}')
  })
  it('a string to nested', () => {
    expect(jsoncPatch('{"a": "text"}', { a: { b: { c: 1 } } })).toBe(
      '{"a": {"b":{"c":1}}}'
    )
  })
})

describe('replace a number to every type', () => {
  it('a number to string', () => {
    expect(jsoncPatch('{"a": 42}', { a: 'hello' })).toBe('{"a": "hello"}')
  })
  it('a number to number', () => {
    expect(jsoncPatch('{"a": 10}', { a: 99 })).toBe('{"a": 99}')
  })
  it('a number to bool true', () => {
    expect(jsoncPatch('{"a": 1}', { a: true })).toBe('{"a": true}')
  })
  it('a number to bool false', () => {
    expect(jsoncPatch('{"a": 1}', { a: false })).toBe('{"a": false}')
  })
  it('a number to null', () => {
    expect(jsoncPatch('{"a": 1}', { a: null })).toBe('{"a": null}')
  })
  it('a number to empty obj', () => {
    expect(jsoncPatch('{"a": 1}', { a: {} })).toBe('{"a": {}}')
  })
  it('a number to obj', () => {
    expect(jsoncPatch('{"a": 1}', { a: { y: 2 } })).toBe('{"a": {"y":2}}')
  })
  it('a number to empty arr', () => {
    expect(jsoncPatch('{"a": 1}', { a: [] })).toBe('{"a": []}')
  })
  it('a number to arr', () => {
    expect(jsoncPatch('{"a": 1}', { a: [3, 4] })).toBe('{"a": [3,4]}')
  })
  it('a number to nested', () => {
    expect(jsoncPatch('{"a": 1}', { a: [[1]] })).toBe('{"a": [[1]]}')
  })
})

describe('replace a boolean true to every type', () => {
  it('a true to string', () => {
    expect(jsoncPatch('{"a": true}', { a: 'yes' })).toBe('{"a": "yes"}')
  })
  it('a true to number', () => {
    expect(jsoncPatch('{"a": true}', { a: 1 })).toBe('{"a": 1}')
  })
  it('a true to false', () => {
    expect(jsoncPatch('{"a": true}', { a: false })).toBe('{"a": false}')
  })
  it('a true to null', () => {
    expect(jsoncPatch('{"a": true}', { a: null })).toBe('{"a": null}')
  })
  it('a true to empty obj', () => {
    expect(jsoncPatch('{"a": true}', { a: {} })).toBe('{"a": {}}')
  })
  it('a true to obj', () => {
    expect(jsoncPatch('{"a": true}', { a: { z: 3 } })).toBe('{"a": {"z":3}}')
  })
  it('a true to empty arr', () => {
    expect(jsoncPatch('{"a": true}', { a: [] })).toBe('{"a": []}')
  })
  it('a true to arr', () => {
    expect(jsoncPatch('{"a": true}', { a: [5, 6] })).toBe('{"a": [5,6]}')
  })
})

describe('replace a boolean false to every type', () => {
  it('a false to string', () => {
    expect(jsoncPatch('{"a": false}', { a: 'no' })).toBe('{"a": "no"}')
  })
  it('a false to number', () => {
    expect(jsoncPatch('{"a": false}', { a: 0 })).toBe('{"a": 0}')
  })
  it('a false to true', () => {
    expect(jsoncPatch('{"a": false}', { a: true })).toBe('{"a": true}')
  })
  it('a false to null', () => {
    expect(jsoncPatch('{"a": false}', { a: null })).toBe('{"a": null}')
  })
  it('a false to empty obj', () => {
    expect(jsoncPatch('{"a": false}', { a: {} })).toBe('{"a": {}}')
  })
  it('a false to obj', () => {
    expect(jsoncPatch('{"a": false}', { a: { w: 4 } })).toBe('{"a": {"w":4}}')
  })
  it('a false to empty arr', () => {
    expect(jsoncPatch('{"a": false}', { a: [] })).toBe('{"a": []}')
  })
  it('a false to arr', () => {
    expect(jsoncPatch('{"a": false}', { a: [7, 8] })).toBe('{"a": [7,8]}')
  })
})

describe('replace a null to every type', () => {
  it('a null to string', () => {
    expect(jsoncPatch('{"a": null}', { a: 'something' })).toBe(
      '{"a": "something"}'
    )
  })
  it('a null to number', () => {
    expect(jsoncPatch('{"a": null}', { a: 999 })).toBe('{"a": 999}')
  })
  it('a null to true', () => {
    expect(jsoncPatch('{"a": null}', { a: true })).toBe('{"a": true}')
  })
  it('a null to false', () => {
    expect(jsoncPatch('{"a": null}', { a: false })).toBe('{"a": false}')
  })
  it('a null to null', () => {
    expect(jsoncPatch('{"a": null}', { a: null })).toBe('{"a": null}')
  })
  it('a null to empty obj', () => {
    expect(jsoncPatch('{"a": null}', { a: {} })).toBe('{"a": {}}')
  })
  it('a null to obj', () => {
    expect(jsoncPatch('{"a": null}', { a: { data: 1 } })).toBe(
      '{"a": {"data":1}}'
    )
  })
  it('a null to empty arr', () => {
    expect(jsoncPatch('{"a": null}', { a: [] })).toBe('{"a": []}')
  })
  it('a null to arr', () => {
    expect(jsoncPatch('{"a": null}', { a: [9, 10] })).toBe('{"a": [9,10]}')
  })
  it('a null to nested', () => {
    expect(jsoncPatch('{"a": null}', { a: { deep: { down: 1 } } })).toBe(
      '{"a": {"deep":{"down":1}}}'
    )
  })
})

describe('replace a empty object to every type', () => {
  it('a empty obj to string', () => {
    expect(jsoncPatch('{"a": {}}', { a: 'obj' })).toBe('{"a": "obj"}')
  })
  it('a empty obj to number', () => {
    expect(jsoncPatch('{"a": {}}', { a: 77 })).toBe('{"a": 77}')
  })
  it('a empty obj to true', () => {
    expect(jsoncPatch('{"a": {}}', { a: true })).toBe('{"a": true}')
  })
  it('a empty obj to false', () => {
    expect(jsoncPatch('{"a": {}}', { a: false })).toBe('{"a": false}')
  })
  it('a empty obj to null', () => {
    expect(jsoncPatch('{"a": {}}', { a: null })).toBe('{"a": null}')
  })
  it('a empty obj to obj', () => {
    expect(jsoncPatch('{"a": {}}', { a: { b: 1 } })).toBe('{"a": {"b": 1}}')
  })
  it('a empty obj to empty arr', () => {
    expect(jsoncPatch('{"a": {}}', { a: [] })).toBe('{"a": []}')
  })
  it('a empty obj to arr', () => {
    expect(jsoncPatch('{"a": {}}', { a: [1, 2] })).toBe('{"a": [1,2]}')
  })
})

describe('replace a non-empty object to every type', () => {
  it('a obj to string', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: 'flat' })).toBe('{"a": "flat"}')
  })
  it('a obj to number', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: 55 })).toBe('{"a": 55}')
  })
  it('a obj to true', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: true })).toBe('{"a": true}')
  })
  it('a obj to false', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: false })).toBe('{"a": false}')
  })
  it('a obj to null', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: null })).toBe('{"a": null}')
  })
  it('a obj to empty obj', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: {} })).toBe('{"a": {}}')
  })
  it('a obj to diff obj', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: { y: 2 } })).toBe(
      '{"a": {"y": 2}}'
    )
  })
  it('a obj to empty arr', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: [] })).toBe('{"a": []}')
  })
  it('a obj to arr', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: [7, 8, 9] })).toBe(
      '{"a": [7,8,9]}'
    )
  })
  it('a obj to nested', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: { b: { c: 1 } } })).toBe(
      '{"a": {"b": {"c":1}}}'
    )
  })
})

describe('replace a empty array to every type', () => {
  it('a empty arr to string', () => {
    expect(jsoncPatch('{"a": []}', { a: 'list' })).toBe('{"a": "list"}')
  })
  it('a empty arr to number', () => {
    expect(jsoncPatch('{"a": []}', { a: 33 })).toBe('{"a": 33}')
  })
  it('a empty arr to true', () => {
    expect(jsoncPatch('{"a": []}', { a: true })).toBe('{"a": true}')
  })
  it('a empty arr to false', () => {
    expect(jsoncPatch('{"a": []}', { a: false })).toBe('{"a": false}')
  })
  it('a empty arr to null', () => {
    expect(jsoncPatch('{"a": []}', { a: null })).toBe('{"a": null}')
  })
  it('a empty arr to empty obj', () => {
    expect(jsoncPatch('{"a": []}', { a: {} })).toBe('{"a": {}}')
  })
  it('a empty arr to obj', () => {
    expect(jsoncPatch('{"a": []}', { a: { k: 'v' } })).toBe('{"a": {"k":"v"}}')
  })
  it('a empty arr to arr', () => {
    expect(jsoncPatch('{"a": []}', { a: [1] })).toBe('{"a": [1]}')
  })
})

describe('replace a non-empty array to every type', () => {
  it('a arr to string', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: 'arr' })).toBe('{"a": "arr"}')
  })
  it('a arr to number', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: 66 })).toBe('{"a": 66}')
  })
  it('a arr to bool', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: false })).toBe('{"a": false}')
  })
  it('a arr to null', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: null })).toBe('{"a": null}')
  })
  it('a arr to empty obj', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: {} })).toBe('{"a": {}}')
  })
  it('a arr to obj', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: { p: 'q' } })).toBe(
      '{"a": {"p":"q"}}'
    )
  })
  it('a arr to empty arr', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: [] })).toBe('{"a": []}')
  })
  it('a arr to diff arr', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: [3, 4] })).toBe('{"a": [3,4]}')
  })
  it('a arr to nested', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: { deep: { val: 1 } } })).toBe(
      '{"a": {"deep":{"val":1}}}'
    )
  })
})

describe('replace b - type mutations', () => {
  it('b string to number', () => {
    expect(jsoncPatch('{"b": "val"}', { b: 123 })).toBe('{"b": 123}')
  })
  it('b string to bool', () => {
    expect(jsoncPatch('{"b": "val"}', { b: true })).toBe('{"b": true}')
  })
  it('b string to null', () => {
    expect(jsoncPatch('{"b": "val"}', { b: null })).toBe('{"b": null}')
  })
  it('b string to obj', () => {
    expect(jsoncPatch('{"b": "val"}', { b: { k: 1 } })).toBe('{"b": {"k":1}}')
  })
  it('b string to arr', () => {
    expect(jsoncPatch('{"b": "val"}', { b: [1, 2] })).toBe('{"b": [1,2]}')
  })
  it('b number to string', () => {
    expect(jsoncPatch('{"b": 100}', { b: 'text' })).toBe('{"b": "text"}')
  })
  it('b number to bool', () => {
    expect(jsoncPatch('{"b": 100}', { b: false })).toBe('{"b": false}')
  })
  it('b number to null', () => {
    expect(jsoncPatch('{"b": 100}', { b: null })).toBe('{"b": null}')
  })
  it('b number to obj', () => {
    expect(jsoncPatch('{"b": 100}', { b: { x: 1 } })).toBe('{"b": {"x":1}}')
  })
  it('b number to arr', () => {
    expect(jsoncPatch('{"b": 100}', { b: [5] })).toBe('{"b": [5]}')
  })
  it('b bool to string', () => {
    expect(jsoncPatch('{"b": true}', { b: 'bool' })).toBe('{"b": "bool"}')
  })
  it('b bool to number', () => {
    expect(jsoncPatch('{"b": false}', { b: 0 })).toBe('{"b": 0}')
  })
  it('b bool to null', () => {
    expect(jsoncPatch('{"b": true}', { b: null })).toBe('{"b": null}')
  })
  it('b bool to obj', () => {
    expect(jsoncPatch('{"b": false}', { b: { m: 1 } })).toBe('{"b": {"m":1}}')
  })
  it('b bool to arr', () => {
    expect(jsoncPatch('{"b": true}', { b: [9] })).toBe('{"b": [9]}')
  })
  it('b null to string', () => {
    expect(jsoncPatch('{"b": null}', { b: 'non-null' })).toBe(
      '{"b": "non-null"}'
    )
  })
  it('b null to number', () => {
    expect(jsoncPatch('{"b": null}', { b: 42 })).toBe('{"b": 42}')
  })
  it('b null to bool', () => {
    expect(jsoncPatch('{"b": null}', { b: false })).toBe('{"b": false}')
  })
  it('b null to obj', () => {
    expect(jsoncPatch('{"b": null}', { b: { n: 1 } })).toBe('{"b": {"n":1}}')
  })
  it('b null to arr', () => {
    expect(jsoncPatch('{"b": null}', { b: [3, 4] })).toBe('{"b": [3,4]}')
  })
  it('b obj to string', () => {
    expect(jsoncPatch('{"b": {"k":1}}', { b: 'simple' })).toBe(
      '{"b": "simple"}'
    )
  })
  it('b obj to number', () => {
    expect(jsoncPatch('{"b": {"k":1}}', { b: 88 })).toBe('{"b": 88}')
  })
  it('b obj to bool', () => {
    expect(jsoncPatch('{"b": {"k":1}}', { b: true })).toBe('{"b": true}')
  })
  it('b obj to null', () => {
    expect(jsoncPatch('{"b": {"k":1}}', { b: null })).toBe('{"b": null}')
  })
  it('b obj to arr', () => {
    expect(jsoncPatch('{"b": {"k":1}}', { b: [2] })).toBe('{"b": [2]}')
  })
  it('b arr to string', () => {
    expect(jsoncPatch('{"b": [1]}', { b: 'single' })).toBe('{"b": "single"}')
  })
  it('b arr to number', () => {
    expect(jsoncPatch('{"b": [1]}', { b: 11 })).toBe('{"b": 11}')
  })
  it('b arr to bool', () => {
    expect(jsoncPatch('{"b": [1]}', { b: true })).toBe('{"b": true}')
  })
  it('b arr to null', () => {
    expect(jsoncPatch('{"b": [1]}', { b: null })).toBe('{"b": null}')
  })
  it('b arr to obj', () => {
    expect(jsoncPatch('{"b": [1]}', { b: { t: 1 } })).toBe('{"b": {"t":1}}')
  })
})

describe('replace c - type mutations', () => {
  it('c string to number', () => {
    expect(jsoncPatch('{"c": "data"}', { c: 1 })).toBe('{"c": 1}')
  })
  it('c string to bool', () => {
    expect(jsoncPatch('{"c": "data"}', { c: false })).toBe('{"c": false}')
  })
  it('c string to null', () => {
    expect(jsoncPatch('{"c": "data"}', { c: null })).toBe('{"c": null}')
  })
  it('c string to obj', () => {
    expect(jsoncPatch('{"c": "data"}', { c: { a: 1 } })).toBe('{"c": {"a":1}}')
  })
  it('c string to arr', () => {
    expect(jsoncPatch('{"c": "data"}', { c: [7] })).toBe('{"c": [7]}')
  })
  it('c number to string', () => {
    expect(jsoncPatch('{"c": 50}', { c: 'hi' })).toBe('{"c": "hi"}')
  })
  it('c number to bool', () => {
    expect(jsoncPatch('{"c": 50}', { c: true })).toBe('{"c": true}')
  })
  it('c number to null', () => {
    expect(jsoncPatch('{"c": 50}', { c: null })).toBe('{"c": null}')
  })
  it('c number to obj', () => {
    expect(jsoncPatch('{"c": 50}', { c: { d: 1 } })).toBe('{"c": {"d":1}}')
  })
  it('c number to arr', () => {
    expect(jsoncPatch('{"c": 50}', { c: [50] })).toBe('{"c": [50]}')
  })
  it('c bool to string', () => {
    expect(jsoncPatch('{"c": true}', { c: 'yes' })).toBe('{"c": "yes"}')
  })
  it('c bool to number', () => {
    expect(jsoncPatch('{"c": true}', { c: 1 })).toBe('{"c": 1}')
  })
  it('c bool to null', () => {
    expect(jsoncPatch('{"c": false}', { c: null })).toBe('{"c": null}')
  })
  it('c bool to obj', () => {
    expect(jsoncPatch('{"c": true}', { c: { f: 1 } })).toBe('{"c": {"f":1}}')
  })
  it('c bool to arr', () => {
    expect(jsoncPatch('{"c": false}', { c: [0] })).toBe('{"c": [0]}')
  })
  it('c null to string', () => {
    expect(jsoncPatch('{"c": null}', { c: 'something' })).toBe(
      '{"c": "something"}'
    )
  })
  it('c null to number', () => {
    expect(jsoncPatch('{"c": null}', { c: 77 })).toBe('{"c": 77}')
  })
  it('c null to bool', () => {
    expect(jsoncPatch('{"c": null}', { c: true })).toBe('{"c": true}')
  })
  it('c null to obj', () => {
    expect(jsoncPatch('{"c": null}', { c: { g: 1 } })).toBe('{"c": {"g":1}}')
  })
  it('c null to arr', () => {
    expect(jsoncPatch('{"c": null}', { c: [1, 2] })).toBe('{"c": [1,2]}')
  })
  it('c obj to string', () => {
    expect(jsoncPatch('{"c": {"x":1}}', { c: 'end' })).toBe('{"c": "end"}')
  })
  it('c obj to number', () => {
    expect(jsoncPatch('{"c": {"x":1}}', { c: 44 })).toBe('{"c": 44}')
  })
  it('c obj to bool', () => {
    expect(jsoncPatch('{"c": {"x":1}}', { c: true })).toBe('{"c": true}')
  })
  it('c obj to null', () => {
    expect(jsoncPatch('{"c": {"x":1}}', { c: null })).toBe('{"c": null}')
  })
  it('c obj to arr', () => {
    expect(jsoncPatch('{"c": {"x":1}}', { c: [8] })).toBe('{"c": [8]}')
  })
  it('c arr to string', () => {
    expect(jsoncPatch('{"c": [1,2]}', { c: 'list' })).toBe('{"c": "list"}')
  })
  it('c arr to number', () => {
    expect(jsoncPatch('{"c": [1,2]}', { c: 22 })).toBe('{"c": 22}')
  })
  it('c arr to bool', () => {
    expect(jsoncPatch('{"c": [1,2]}', { c: false })).toBe('{"c": false}')
  })
  it('c arr to null', () => {
    expect(jsoncPatch('{"c": [1,2]}', { c: null })).toBe('{"c": null}')
  })
  it('c arr to obj', () => {
    expect(jsoncPatch('{"c": [1,2]}', { c: { h: 1 } })).toBe('{"c": {"h":1}}')
  })
})

describe('replace d - type mutations', () => {
  it('d string to number', () => {
    expect(jsoncPatch('{"d": "val"}', { d: 77 })).toBe('{"d": 77}')
  })
  it('d string to bool', () => {
    expect(jsoncPatch('{"d": "val"}', { d: true })).toBe('{"d": true}')
  })
  it('d string to null', () => {
    expect(jsoncPatch('{"d": "val"}', { d: null })).toBe('{"d": null}')
  })
  it('d string to obj', () => {
    expect(jsoncPatch('{"d": "val"}', { d: { p: 1 } })).toBe('{"d": {"p":1}}')
  })
  it('d string to arr', () => {
    expect(jsoncPatch('{"d": "val"}', { d: [2] })).toBe('{"d": [2]}')
  })
  it('d number to string', () => {
    expect(jsoncPatch('{"d": 55}', { d: 'str' })).toBe('{"d": "str"}')
  })
  it('d number to bool', () => {
    expect(jsoncPatch('{"d": 55}', { d: true })).toBe('{"d": true}')
  })
  it('d number to null', () => {
    expect(jsoncPatch('{"d": 55}', { d: null })).toBe('{"d": null}')
  })
  it('d number to obj', () => {
    expect(jsoncPatch('{"d": 55}', { d: { q: 1 } })).toBe('{"d": {"q":1}}')
  })
  it('d number to arr', () => {
    expect(jsoncPatch('{"d": 55}', { d: [6] })).toBe('{"d": [6]}')
  })
  it('d bool to string', () => {
    expect(jsoncPatch('{"d": true}', { d: 'yes' })).toBe('{"d": "yes"}')
  })
  it('d bool to number', () => {
    expect(jsoncPatch('{"d": false}', { d: 0 })).toBe('{"d": 0}')
  })
  it('d bool to null', () => {
    expect(jsoncPatch('{"d": true}', { d: null })).toBe('{"d": null}')
  })
  it('d bool to obj', () => {
    expect(jsoncPatch('{"d": false}', { d: { r: 1 } })).toBe('{"d": {"r":1}}')
  })
  it('d bool to arr', () => {
    expect(jsoncPatch('{"d": true}', { d: [3] })).toBe('{"d": [3]}')
  })
  it('d null to string', () => {
    expect(jsoncPatch('{"d": null}', { d: 'val' })).toBe('{"d": "val"}')
  })
  it('d null to number', () => {
    expect(jsoncPatch('{"d": null}', { d: 33 })).toBe('{"d": 33}')
  })
  it('d null to bool', () => {
    expect(jsoncPatch('{"d": null}', { d: true })).toBe('{"d": true}')
  })
  it('d null to obj', () => {
    expect(jsoncPatch('{"d": null}', { d: { s: 1 } })).toBe('{"d": {"s":1}}')
  })
  it('d null to arr', () => {
    expect(jsoncPatch('{"d": null}', { d: [4, 5] })).toBe('{"d": [4,5]}')
  })
  it('d obj to string', () => {
    expect(jsoncPatch('{"d": {"x":1}}', { d: 'text' })).toBe('{"d": "text"}')
  })
  it('d obj to number', () => {
    expect(jsoncPatch('{"d": {"x":1}}', { d: 66 })).toBe('{"d": 66}')
  })
  it('d obj to bool', () => {
    expect(jsoncPatch('{"d": {"x":1}}', { d: false })).toBe('{"d": false}')
  })
  it('d obj to null', () => {
    expect(jsoncPatch('{"d": {"x":1}}', { d: null })).toBe('{"d": null}')
  })
  it('d obj to arr', () => {
    expect(jsoncPatch('{"d": {"x":1}}', { d: [7] })).toBe('{"d": [7]}')
  })
  it('d arr to string', () => {
    expect(jsoncPatch('{"d": [1,2]}', { d: 'items' })).toBe('{"d": "items"}')
  })
  it('d arr to number', () => {
    expect(jsoncPatch('{"d": [1,2]}', { d: 99 })).toBe('{"d": 99}')
  })
  it('d arr to bool', () => {
    expect(jsoncPatch('{"d": [1,2]}', { d: true })).toBe('{"d": true}')
  })
  it('d arr to null', () => {
    expect(jsoncPatch('{"d": [1,2]}', { d: null })).toBe('{"d": null}')
  })
  it('d arr to obj', () => {
    expect(jsoncPatch('{"d": [1,2]}', { d: { u: 1 } })).toBe('{"d": {"u":1}}')
  })
})

describe('replace e - type mutations', () => {
  it('e string to number', () => {
    expect(jsoncPatch('{"e": "x"}', { e: 12 })).toBe('{"e": 12}')
  })
  it('e string to bool', () => {
    expect(jsoncPatch('{"e": "x"}', { e: true })).toBe('{"e": true}')
  })
  it('e string to null', () => {
    expect(jsoncPatch('{"e": "x"}', { e: null })).toBe('{"e": null}')
  })
  it('e string to obj', () => {
    expect(jsoncPatch('{"e": "x"}', { e: { a: 1 } })).toBe('{"e": {"a":1}}')
  })
  it('e string to arr', () => {
    expect(jsoncPatch('{"e": "x"}', { e: [8] })).toBe('{"e": [8]}')
  })
  it('e number to string', () => {
    expect(jsoncPatch('{"e": 25}', { e: 'val' })).toBe('{"e": "val"}')
  })
  it('e number to bool', () => {
    expect(jsoncPatch('{"e": 25}', { e: false })).toBe('{"e": false}')
  })
  it('e number to null', () => {
    expect(jsoncPatch('{"e": 25}', { e: null })).toBe('{"e": null}')
  })
  it('e number to obj', () => {
    expect(jsoncPatch('{"e": 25}', { e: { b: 1 } })).toBe('{"e": {"b":1}}')
  })
  it('e number to arr', () => {
    expect(jsoncPatch('{"e": 25}', { e: [9] })).toBe('{"e": [9]}')
  })
  it('e bool to string', () => {
    expect(jsoncPatch('{"e": true}', { e: 'true' })).toBe('{"e": "true"}')
  })
  it('e bool to number', () => {
    expect(jsoncPatch('{"e": false}', { e: 0 })).toBe('{"e": 0}')
  })
  it('e bool to null', () => {
    expect(jsoncPatch('{"e": true}', { e: null })).toBe('{"e": null}')
  })
  it('e bool to obj', () => {
    expect(jsoncPatch('{"e": false}', { e: { c: 1 } })).toBe('{"e": {"c":1}}')
  })
  it('e bool to arr', () => {
    expect(jsoncPatch('{"e": true}', { e: [1] })).toBe('{"e": [1]}')
  })
  it('e null to string', () => {
    expect(jsoncPatch('{"e": null}', { e: 'data' })).toBe('{"e": "data"}')
  })
  it('e null to number', () => {
    expect(jsoncPatch('{"e": null}', { e: 88 })).toBe('{"e": 88}')
  })
  it('e null to bool', () => {
    expect(jsoncPatch('{"e": null}', { e: false })).toBe('{"e": false}')
  })
  it('e null to obj', () => {
    expect(jsoncPatch('{"e": null}', { e: { d: 1 } })).toBe('{"e": {"d":1}}')
  })
  it('e null to arr', () => {
    expect(jsoncPatch('{"e": null}', { e: [2, 3] })).toBe('{"e": [2,3]}')
  })
  it('e obj to string', () => {
    expect(jsoncPatch('{"e": {"x":1}}', { e: 'val' })).toBe('{"e": "val"}')
  })
  it('e obj to number', () => {
    expect(jsoncPatch('{"e": {"x":1}}', { e: 44 })).toBe('{"e": 44}')
  })
  it('e obj to bool', () => {
    expect(jsoncPatch('{"e": {"x":1}}', { e: true })).toBe('{"e": true}')
  })
  it('e obj to null', () => {
    expect(jsoncPatch('{"e": {"x":1}}', { e: null })).toBe('{"e": null}')
  })
  it('e obj to arr', () => {
    expect(jsoncPatch('{"e": {"x":1}}', { e: [5] })).toBe('{"e": [5]}')
  })
  it('e arr to string', () => {
    expect(jsoncPatch('{"e": [1,2]}', { e: 'list' })).toBe('{"e": "list"}')
  })
  it('e arr to number', () => {
    expect(jsoncPatch('{"e": [1,2]}', { e: 33 })).toBe('{"e": 33}')
  })
  it('e arr to bool', () => {
    expect(jsoncPatch('{"e": [1,2]}', { e: false })).toBe('{"e": false}')
  })
  it('e arr to null', () => {
    expect(jsoncPatch('{"e": [1,2]}', { e: null })).toBe('{"e": null}')
  })
  it('e arr to obj', () => {
    expect(jsoncPatch('{"e": [1,2]}', { e: { f: 1 } })).toBe('{"e": {"f":1}}')
  })
})

describe('replace f - type mutations', () => {
  it('f string to number', () => {
    expect(jsoncPatch('{"f": "x"}', { f: 30 })).toBe('{"f": 30}')
  })
  it('f string to bool', () => {
    expect(jsoncPatch('{"f": "x"}', { f: false })).toBe('{"f": false}')
  })
  it('f string to null', () => {
    expect(jsoncPatch('{"f": "x"}', { f: null })).toBe('{"f": null}')
  })
  it('f string to obj', () => {
    expect(jsoncPatch('{"f": "x"}', { f: { g: 1 } })).toBe('{"f": {"g":1}}')
  })
  it('f string to arr', () => {
    expect(jsoncPatch('{"f": "x"}', { f: [4] })).toBe('{"f": [4]}')
  })
  it('f number to string', () => {
    expect(jsoncPatch('{"f": 12}', { f: 'str' })).toBe('{"f": "str"}')
  })
  it('f number to bool', () => {
    expect(jsoncPatch('{"f": 12}', { f: true })).toBe('{"f": true}')
  })
  it('f number to null', () => {
    expect(jsoncPatch('{"f": 12}', { f: null })).toBe('{"f": null}')
  })
  it('f number to obj', () => {
    expect(jsoncPatch('{"f": 12}', { f: { h: 1 } })).toBe('{"f": {"h":1}}')
  })
  it('f number to arr', () => {
    expect(jsoncPatch('{"f": 12}', { f: [6] })).toBe('{"f": [6]}')
  })
  it('f bool to string', () => {
    expect(jsoncPatch('{"f": true}', { f: 'si' })).toBe('{"f": "si"}')
  })
  it('f bool to number', () => {
    expect(jsoncPatch('{"f": false}', { f: 0 })).toBe('{"f": 0}')
  })
  it('f bool to null', () => {
    expect(jsoncPatch('{"f": true}', { f: null })).toBe('{"f": null}')
  })
  it('f bool to obj', () => {
    expect(jsoncPatch('{"f": false}', { f: { i: 1 } })).toBe('{"f": {"i":1}}')
  })
  it('f bool to arr', () => {
    expect(jsoncPatch('{"f": true}', { f: [7] })).toBe('{"f": [7]}')
  })
  it('f null to string', () => {
    expect(jsoncPatch('{"f": null}', { f: 'text' })).toBe('{"f": "text"}')
  })
  it('f null to number', () => {
    expect(jsoncPatch('{"f": null}', { f: 55 })).toBe('{"f": 55}')
  })
  it('f null to bool', () => {
    expect(jsoncPatch('{"f": null}', { f: true })).toBe('{"f": true}')
  })
  it('f null to obj', () => {
    expect(jsoncPatch('{"f": null}', { f: { j: 1 } })).toBe('{"f": {"j":1}}')
  })
  it('f null to arr', () => {
    expect(jsoncPatch('{"f": null}', { f: [8, 9] })).toBe('{"f": [8,9]}')
  })
  it('f obj to string', () => {
    expect(jsoncPatch('{"f": {"x":1}}', { f: 'str' })).toBe('{"f": "str"}')
  })
  it('f obj to number', () => {
    expect(jsoncPatch('{"f": {"x":1}}', { f: 77 })).toBe('{"f": 77}')
  })
  it('f obj to bool', () => {
    expect(jsoncPatch('{"f": {"x":1}}', { f: false })).toBe('{"f": false}')
  })
  it('f obj to null', () => {
    expect(jsoncPatch('{"f": {"x":1}}', { f: null })).toBe('{"f": null}')
  })
  it('f obj to arr', () => {
    expect(jsoncPatch('{"f": {"x":1}}', { f: [3] })).toBe('{"f": [3]}')
  })
  it('f arr to string', () => {
    expect(jsoncPatch('{"f": [1,2]}', { f: 'list' })).toBe('{"f": "list"}')
  })
  it('f arr to number', () => {
    expect(jsoncPatch('{"f": [1,2]}', { f: 44 })).toBe('{"f": 44}')
  })
  it('f arr to bool', () => {
    expect(jsoncPatch('{"f": [1,2]}', { f: true })).toBe('{"f": true}')
  })
  it('f arr to null', () => {
    expect(jsoncPatch('{"f": [1,2]}', { f: null })).toBe('{"f": null}')
  })
  it('f arr to obj', () => {
    expect(jsoncPatch('{"f": [1,2]}', { f: { k: 1 } })).toBe('{"f": {"k":1}}')
  })
})

describe('replace g - type mutations', () => {
  it('g string to number', () => {
    expect(jsoncPatch('{"g": "x"}', { g: 88 })).toBe('{"g": 88}')
  })
  it('g string to bool', () => {
    expect(jsoncPatch('{"g": "x"}', { g: true })).toBe('{"g": true}')
  })
  it('g string to null', () => {
    expect(jsoncPatch('{"g": "x"}', { g: null })).toBe('{"g": null}')
  })
  it('g string to obj', () => {
    expect(jsoncPatch('{"g": "x"}', { g: { l: 1 } })).toBe('{"g": {"l":1}}')
  })
  it('g string to arr', () => {
    expect(jsoncPatch('{"g": "x"}', { g: [10] })).toBe('{"g": [10]}')
  })
  it('g number to string', () => {
    expect(jsoncPatch('{"g": 40}', { g: 'num' })).toBe('{"g": "num"}')
  })
  it('g number to bool', () => {
    expect(jsoncPatch('{"g": 40}', { g: false })).toBe('{"g": false}')
  })
  it('g number to null', () => {
    expect(jsoncPatch('{"g": 40}', { g: null })).toBe('{"g": null}')
  })
  it('g number to obj', () => {
    expect(jsoncPatch('{"g": 40}', { g: { m: 1 } })).toBe('{"g": {"m":1}}')
  })
  it('g number to arr', () => {
    expect(jsoncPatch('{"g": 40}', { g: [11] })).toBe('{"g": [11]}')
  })
  it('g bool to string', () => {
    expect(jsoncPatch('{"g": true}', { g: 'y' })).toBe('{"g": "y"}')
  })
  it('g bool to number', () => {
    expect(jsoncPatch('{"g": false}', { g: 0 })).toBe('{"g": 0}')
  })
  it('g bool to null', () => {
    expect(jsoncPatch('{"g": true}', { g: null })).toBe('{"g": null}')
  })
  it('g bool to obj', () => {
    expect(jsoncPatch('{"g": false}', { g: { n: 1 } })).toBe('{"g": {"n":1}}')
  })
  it('g bool to arr', () => {
    expect(jsoncPatch('{"g": true}', { g: [12] })).toBe('{"g": [12]}')
  })
  it('g null to string', () => {
    expect(jsoncPatch('{"g": null}', { g: 'val' })).toBe('{"g": "val"}')
  })
  it('g null to number', () => {
    expect(jsoncPatch('{"g": null}', { g: 22 })).toBe('{"g": 22}')
  })
  it('g null to bool', () => {
    expect(jsoncPatch('{"g": null}', { g: false })).toBe('{"g": false}')
  })
  it('g null to obj', () => {
    expect(jsoncPatch('{"g": null}', { g: { o: 1 } })).toBe('{"g": {"o":1}}')
  })
  it('g null to arr', () => {
    expect(jsoncPatch('{"g": null}', { g: [13, 14] })).toBe('{"g": [13,14]}')
  })
  it('g obj to string', () => {
    expect(jsoncPatch('{"g": {"x":1}}', { g: 'str' })).toBe('{"g": "str"}')
  })
  it('g obj to number', () => {
    expect(jsoncPatch('{"g": {"x":1}}', { g: 66 })).toBe('{"g": 66}')
  })
  it('g obj to bool', () => {
    expect(jsoncPatch('{"g": {"x":1}}', { g: true })).toBe('{"g": true}')
  })
  it('g obj to null', () => {
    expect(jsoncPatch('{"g": {"x":1}}', { g: null })).toBe('{"g": null}')
  })
  it('g obj to arr', () => {
    expect(jsoncPatch('{"g": {"x":1}}', { g: [15] })).toBe('{"g": [15]}')
  })
  it('g arr to string', () => {
    expect(jsoncPatch('{"g": [1,2]}', { g: 'list' })).toBe('{"g": "list"}')
  })
  it('g arr to number', () => {
    expect(jsoncPatch('{"g": [1,2]}', { g: 55 })).toBe('{"g": 55}')
  })
  it('g arr to bool', () => {
    expect(jsoncPatch('{"g": [1,2]}', { g: false })).toBe('{"g": false}')
  })
  it('g arr to null', () => {
    expect(jsoncPatch('{"g": [1,2]}', { g: null })).toBe('{"g": null}')
  })
  it('g arr to obj', () => {
    expect(jsoncPatch('{"g": [1,2]}', { g: { p: 1 } })).toBe('{"g": {"p":1}}')
  })
})

describe('replace h - type mutations', () => {
  it('h string to number', () => {
    expect(jsoncPatch('{"h": "x"}', { h: 15 })).toBe('{"h": 15}')
  })
  it('h string to bool', () => {
    expect(jsoncPatch('{"h": "x"}', { h: false })).toBe('{"h": false}')
  })
  it('h string to null', () => {
    expect(jsoncPatch('{"h": "x"}', { h: null })).toBe('{"h": null}')
  })
  it('h string to obj', () => {
    expect(jsoncPatch('{"h": "x"}', { h: { q: 1 } })).toBe('{"h": {"q":1}}')
  })
  it('h string to arr', () => {
    expect(jsoncPatch('{"h": "x"}', { h: [16] })).toBe('{"h": [16]}')
  })
  it('h number to string', () => {
    expect(jsoncPatch('{"h": 60}', { h: 'str' })).toBe('{"h": "str"}')
  })
  it('h number to bool', () => {
    expect(jsoncPatch('{"h": 60}', { h: true })).toBe('{"h": true}')
  })
  it('h number to null', () => {
    expect(jsoncPatch('{"h": 60}', { h: null })).toBe('{"h": null}')
  })
  it('h number to obj', () => {
    expect(jsoncPatch('{"h": 60}', { h: { r: 1 } })).toBe('{"h": {"r":1}}')
  })
  it('h number to arr', () => {
    expect(jsoncPatch('{"h": 60}', { h: [17] })).toBe('{"h": [17]}')
  })
  it('h bool to string', () => {
    expect(jsoncPatch('{"h": true}', { h: 'ok' })).toBe('{"h": "ok"}')
  })
  it('h bool to number', () => {
    expect(jsoncPatch('{"h": false}', { h: 0 })).toBe('{"h": 0}')
  })
  it('h bool to null', () => {
    expect(jsoncPatch('{"h": true}', { h: null })).toBe('{"h": null}')
  })
  it('h bool to obj', () => {
    expect(jsoncPatch('{"h": false}', { h: { s: 1 } })).toBe('{"h": {"s":1}}')
  })
  it('h bool to arr', () => {
    expect(jsoncPatch('{"h": true}', { h: [18] })).toBe('{"h": [18]}')
  })
  it('h null to string', () => {
    expect(jsoncPatch('{"h": null}', { h: 'text' })).toBe('{"h": "text"}')
  })
  it('h null to number', () => {
    expect(jsoncPatch('{"h": null}', { h: 33 })).toBe('{"h": 33}')
  })
  it('h null to bool', () => {
    expect(jsoncPatch('{"h": null}', { h: true })).toBe('{"h": true}')
  })
  it('h null to obj', () => {
    expect(jsoncPatch('{"h": null}', { h: { t: 1 } })).toBe('{"h": {"t":1}}')
  })
  it('h null to arr', () => {
    expect(jsoncPatch('{"h": null}', { h: [19, 20] })).toBe('{"h": [19,20]}')
  })
  it('h obj to string', () => {
    expect(jsoncPatch('{"h": {"x":1}}', { h: 'str' })).toBe('{"h": "str"}')
  })
  it('h obj to number', () => {
    expect(jsoncPatch('{"h": {"x":1}}', { h: 88 })).toBe('{"h": 88}')
  })
  it('h obj to bool', () => {
    expect(jsoncPatch('{"h": {"x":1}}', { h: false })).toBe('{"h": false}')
  })
  it('h obj to null', () => {
    expect(jsoncPatch('{"h": {"x":1}}', { h: null })).toBe('{"h": null}')
  })
  it('h obj to arr', () => {
    expect(jsoncPatch('{"h": {"x":1}}', { h: [21] })).toBe('{"h": [21]}')
  })
  it('h arr to string', () => {
    expect(jsoncPatch('{"h": [1,2]}', { h: 'list' })).toBe('{"h": "list"}')
  })
  it('h arr to number', () => {
    expect(jsoncPatch('{"h": [1,2]}', { h: 99 })).toBe('{"h": 99}')
  })
  it('h arr to bool', () => {
    expect(jsoncPatch('{"h": [1,2]}', { h: true })).toBe('{"h": true}')
  })
  it('h arr to null', () => {
    expect(jsoncPatch('{"h": [1,2]}', { h: null })).toBe('{"h": null}')
  })
  it('h arr to obj', () => {
    expect(jsoncPatch('{"h": [1,2]}', { h: { u: 1 } })).toBe('{"h": {"u":1}}')
  })
})
