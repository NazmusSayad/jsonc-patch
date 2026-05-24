import { describe, expect, it } from 'vitest'
import { jsoncPatch } from '../index'

describe('replace i - type mutations', () => {
  it('i string to number', () => {
    expect(jsoncPatch('{"i": "val"}', { i: 45 })).toBe('{"i": 45}')
  })
  it('i string to bool', () => {
    expect(jsoncPatch('{"i": "val"}', { i: true })).toBe('{"i": true}')
  })
  it('i string to null', () => {
    expect(jsoncPatch('{"i": "val"}', { i: null })).toBe('{"i": null}')
  })
  it('i string to obj', () => {
    expect(jsoncPatch('{"i": "val"}', { i: { a: 1 } })).toBe('{"i": {"a":1}}')
  })
  it('i string to arr', () => {
    expect(jsoncPatch('{"i": "val"}', { i: [3] })).toBe('{"i": [3]}')
  })
  it('i number to string', () => {
    expect(jsoncPatch('{"i": 30}', { i: 'txt' })).toBe('{"i": "txt"}')
  })
  it('i number to bool', () => {
    expect(jsoncPatch('{"i": 30}', { i: false })).toBe('{"i": false}')
  })
  it('i number to null', () => {
    expect(jsoncPatch('{"i": 30}', { i: null })).toBe('{"i": null}')
  })
  it('i number to obj', () => {
    expect(jsoncPatch('{"i": 30}', { i: { b: 1 } })).toBe('{"i": {"b":1}}')
  })
  it('i number to arr', () => {
    expect(jsoncPatch('{"i": 30}', { i: [4] })).toBe('{"i": [4]}')
  })
  it('i bool to string', () => {
    expect(jsoncPatch('{"i": true}', { i: 'y' })).toBe('{"i": "y"}')
  })
  it('i bool to number', () => {
    expect(jsoncPatch('{"i": false}', { i: 0 })).toBe('{"i": 0}')
  })
  it('i bool to null', () => {
    expect(jsoncPatch('{"i": true}', { i: null })).toBe('{"i": null}')
  })
  it('i bool to obj', () => {
    expect(jsoncPatch('{"i": false}', { i: { c: 1 } })).toBe('{"i": {"c":1}}')
  })
  it('i bool to arr', () => {
    expect(jsoncPatch('{"i": true}', { i: [5] })).toBe('{"i": [5]}')
  })
  it('i null to string', () => {
    expect(jsoncPatch('{"i": null}', { i: 'data' })).toBe('{"i": "data"}')
  })
  it('i null to number', () => {
    expect(jsoncPatch('{"i": null}', { i: 66 })).toBe('{"i": 66}')
  })
  it('i null to bool', () => {
    expect(jsoncPatch('{"i": null}', { i: true })).toBe('{"i": true}')
  })
  it('i null to obj', () => {
    expect(jsoncPatch('{"i": null}', { i: { d: 1 } })).toBe('{"i": {"d":1}}')
  })
  it('i null to arr', () => {
    expect(jsoncPatch('{"i": null}', { i: [6, 7] })).toBe('{"i": [6,7]}')
  })
  it('i obj to string', () => {
    expect(jsoncPatch('{"i": {"x":1}}', { i: 'val' })).toBe('{"i": "val"}')
  })
  it('i obj to number', () => {
    expect(jsoncPatch('{"i": {"x":1}}', { i: 77 })).toBe('{"i": 77}')
  })
  it('i obj to bool', () => {
    expect(jsoncPatch('{"i": {"x":1}}', { i: false })).toBe('{"i": false}')
  })
  it('i obj to null', () => {
    expect(jsoncPatch('{"i": {"x":1}}', { i: null })).toBe('{"i": null}')
  })
  it('i obj to arr', () => {
    expect(jsoncPatch('{"i": {"x":1}}', { i: [8] })).toBe('{"i": [8]}')
  })
  it('i arr to string', () => {
    expect(jsoncPatch('{"i": [1,2]}', { i: 'str' })).toBe('{"i": "str"}')
  })
  it('i arr to number', () => {
    expect(jsoncPatch('{"i": [1,2]}', { i: 55 })).toBe('{"i": 55}')
  })
  it('i arr to bool', () => {
    expect(jsoncPatch('{"i": [1,2]}', { i: true })).toBe('{"i": true}')
  })
  it('i arr to null', () => {
    expect(jsoncPatch('{"i": [1,2]}', { i: null })).toBe('{"i": null}')
  })
  it('i arr to obj', () => {
    expect(jsoncPatch('{"i": [1,2]}', { i: { e: 1 } })).toBe('{"i": {"e":1}}')
  })
})

describe('replace j - type mutations', () => {
  it('j string to number', () => {
    expect(jsoncPatch('{"j": "val"}', { j: 90 })).toBe('{"j": 90}')
  })
  it('j string to bool', () => {
    expect(jsoncPatch('{"j": "val"}', { j: false })).toBe('{"j": false}')
  })
  it('j string to null', () => {
    expect(jsoncPatch('{"j": "val"}', { j: null })).toBe('{"j": null}')
  })
  it('j string to obj', () => {
    expect(jsoncPatch('{"j": "val"}', { j: { f: 1 } })).toBe('{"j": {"f":1}}')
  })
  it('j string to arr', () => {
    expect(jsoncPatch('{"j": "val"}', { j: [9] })).toBe('{"j": [9]}')
  })
  it('j number to string', () => {
    expect(jsoncPatch('{"j": 18}', { j: 'txt' })).toBe('{"j": "txt"}')
  })
  it('j number to bool', () => {
    expect(jsoncPatch('{"j": 18}', { j: true })).toBe('{"j": true}')
  })
  it('j number to null', () => {
    expect(jsoncPatch('{"j": 18}', { j: null })).toBe('{"j": null}')
  })
  it('j number to obj', () => {
    expect(jsoncPatch('{"j": 18}', { j: { g: 1 } })).toBe('{"j": {"g":1}}')
  })
  it('j number to arr', () => {
    expect(jsoncPatch('{"j": 18}', { j: [10] })).toBe('{"j": [10]}')
  })
  it('j bool to string', () => {
    expect(jsoncPatch('{"j": true}', { j: 'yes' })).toBe('{"j": "yes"}')
  })
  it('j bool to number', () => {
    expect(jsoncPatch('{"j": false}', { j: 0 })).toBe('{"j": 0}')
  })
  it('j bool to null', () => {
    expect(jsoncPatch('{"j": true}', { j: null })).toBe('{"j": null}')
  })
  it('j bool to obj', () => {
    expect(jsoncPatch('{"j": false}', { j: { h: 1 } })).toBe('{"j": {"h":1}}')
  })
  it('j bool to arr', () => {
    expect(jsoncPatch('{"j": true}', { j: [11] })).toBe('{"j": [11]}')
  })
  it('j null to string', () => {
    expect(jsoncPatch('{"j": null}', { j: 'val' })).toBe('{"j": "val"}')
  })
  it('j null to number', () => {
    expect(jsoncPatch('{"j": null}', { j: 44 })).toBe('{"j": 44}')
  })
  it('j null to bool', () => {
    expect(jsoncPatch('{"j": null}', { j: false })).toBe('{"j": false}')
  })
  it('j null to obj', () => {
    expect(jsoncPatch('{"j": null}', { j: { i: 1 } })).toBe('{"j": {"i":1}}')
  })
  it('j null to arr', () => {
    expect(jsoncPatch('{"j": null}', { j: [12, 13] })).toBe('{"j": [12,13]}')
  })
  it('j obj to string', () => {
    expect(jsoncPatch('{"j": {"x":1}}', { j: 'str' })).toBe('{"j": "str"}')
  })
  it('j obj to number', () => {
    expect(jsoncPatch('{"j": {"x":1}}', { j: 88 })).toBe('{"j": 88}')
  })
  it('j obj to bool', () => {
    expect(jsoncPatch('{"j": {"x":1}}', { j: true })).toBe('{"j": true}')
  })
  it('j obj to null', () => {
    expect(jsoncPatch('{"j": {"x":1}}', { j: null })).toBe('{"j": null}')
  })
  it('j obj to arr', () => {
    expect(jsoncPatch('{"j": {"x":1}}', { j: [14] })).toBe('{"j": [14]}')
  })
  it('j arr to string', () => {
    expect(jsoncPatch('{"j": [1,2]}', { j: 'str' })).toBe('{"j": "str"}')
  })
  it('j arr to number', () => {
    expect(jsoncPatch('{"j": [1,2]}', { j: 33 })).toBe('{"j": 33}')
  })
  it('j arr to bool', () => {
    expect(jsoncPatch('{"j": [1,2]}', { j: false })).toBe('{"j": false}')
  })
  it('j arr to null', () => {
    expect(jsoncPatch('{"j": [1,2]}', { j: null })).toBe('{"j": null}')
  })
  it('j arr to obj', () => {
    expect(jsoncPatch('{"j": [1,2]}', { j: { j: 1 } })).toBe('{"j": {"j":1}}')
  })
})

describe('replace k - type mutations', () => {
  it('k string to number', () => {
    expect(jsoncPatch('{"k": "x"}', { k: 75 })).toBe('{"k": 75}')
  })
  it('k string to bool', () => {
    expect(jsoncPatch('{"k": "x"}', { k: true })).toBe('{"k": true}')
  })
  it('k string to null', () => {
    expect(jsoncPatch('{"k": "x"}', { k: null })).toBe('{"k": null}')
  })
  it('k string to obj', () => {
    expect(jsoncPatch('{"k": "x"}', { k: { a: 1 } })).toBe('{"k": {"a":1}}')
  })
  it('k string to arr', () => {
    expect(jsoncPatch('{"k": "x"}', { k: [15] })).toBe('{"k": [15]}')
  })
  it('k number to string', () => {
    expect(jsoncPatch('{"k": 40}', { k: 'txt' })).toBe('{"k": "txt"}')
  })
  it('k number to bool', () => {
    expect(jsoncPatch('{"k": 40}', { k: false })).toBe('{"k": false}')
  })
  it('k number to null', () => {
    expect(jsoncPatch('{"k": 40}', { k: null })).toBe('{"k": null}')
  })
  it('k number to obj', () => {
    expect(jsoncPatch('{"k": 40}', { k: { b: 1 } })).toBe('{"k": {"b":1}}')
  })
  it('k number to arr', () => {
    expect(jsoncPatch('{"k": 40}', { k: [16] })).toBe('{"k": [16]}')
  })
  it('k bool to string', () => {
    expect(jsoncPatch('{"k": true}', { k: 'y' })).toBe('{"k": "y"}')
  })
  it('k bool to number', () => {
    expect(jsoncPatch('{"k": false}', { k: 0 })).toBe('{"k": 0}')
  })
  it('k bool to null', () => {
    expect(jsoncPatch('{"k": true}', { k: null })).toBe('{"k": null}')
  })
  it('k bool to obj', () => {
    expect(jsoncPatch('{"k": false}', { k: { c: 1 } })).toBe('{"k": {"c":1}}')
  })
  it('k bool to arr', () => {
    expect(jsoncPatch('{"k": true}', { k: [17] })).toBe('{"k": [17]}')
  })
  it('k null to string', () => {
    expect(jsoncPatch('{"k": null}', { k: 'val' })).toBe('{"k": "val"}')
  })
  it('k null to number', () => {
    expect(jsoncPatch('{"k": null}', { k: 22 })).toBe('{"k": 22}')
  })
  it('k null to bool', () => {
    expect(jsoncPatch('{"k": null}', { k: true })).toBe('{"k": true}')
  })
  it('k null to obj', () => {
    expect(jsoncPatch('{"k": null}', { k: { d: 1 } })).toBe('{"k": {"d":1}}')
  })
  it('k null to arr', () => {
    expect(jsoncPatch('{"k": null}', { k: [18, 19] })).toBe('{"k": [18,19]}')
  })
  it('k obj to string', () => {
    expect(jsoncPatch('{"k": {"x":1}}', { k: 'str' })).toBe('{"k": "str"}')
  })
  it('k obj to number', () => {
    expect(jsoncPatch('{"k": {"x":1}}', { k: 55 })).toBe('{"k": 55}')
  })
  it('k obj to bool', () => {
    expect(jsoncPatch('{"k": {"x":1}}', { k: false })).toBe('{"k": false}')
  })
  it('k obj to null', () => {
    expect(jsoncPatch('{"k": {"x":1}}', { k: null })).toBe('{"k": null}')
  })
  it('k obj to arr', () => {
    expect(jsoncPatch('{"k": {"x":1}}', { k: [20] })).toBe('{"k": [20]}')
  })
  it('k arr to string', () => {
    expect(jsoncPatch('{"k": [1,2]}', { k: 'list' })).toBe('{"k": "list"}')
  })
  it('k arr to number', () => {
    expect(jsoncPatch('{"k": [1,2]}', { k: 66 })).toBe('{"k": 66}')
  })
  it('k arr to bool', () => {
    expect(jsoncPatch('{"k": [1,2]}', { k: true })).toBe('{"k": true}')
  })
  it('k arr to null', () => {
    expect(jsoncPatch('{"k": [1,2]}', { k: null })).toBe('{"k": null}')
  })
  it('k arr to obj', () => {
    expect(jsoncPatch('{"k": [1,2]}', { k: { e: 1 } })).toBe('{"k": {"e":1}}')
  })
})

describe('replace l - type mutations', () => {
  it('l string to number', () => {
    expect(jsoncPatch('{"l": "x"}', { l: 12 })).toBe('{"l": 12}')
  })
  it('l string to bool', () => {
    expect(jsoncPatch('{"l": "x"}', { l: false })).toBe('{"l": false}')
  })
  it('l string to null', () => {
    expect(jsoncPatch('{"l": "x"}', { l: null })).toBe('{"l": null}')
  })
  it('l string to obj', () => {
    expect(jsoncPatch('{"l": "x"}', { l: { f: 1 } })).toBe('{"l": {"f":1}}')
  })
  it('l string to arr', () => {
    expect(jsoncPatch('{"l": "x"}', { l: [21] })).toBe('{"l": [21]}')
  })
  it('l number to string', () => {
    expect(jsoncPatch('{"l": 50}', { l: 'txt' })).toBe('{"l": "txt"}')
  })
  it('l number to bool', () => {
    expect(jsoncPatch('{"l": 50}', { l: true })).toBe('{"l": true}')
  })
  it('l number to null', () => {
    expect(jsoncPatch('{"l": 50}', { l: null })).toBe('{"l": null}')
  })
  it('l number to obj', () => {
    expect(jsoncPatch('{"l": 50}', { l: { g: 1 } })).toBe('{"l": {"g":1}}')
  })
  it('l number to arr', () => {
    expect(jsoncPatch('{"l": 50}', { l: [22] })).toBe('{"l": [22]}')
  })
  it('l bool to string', () => {
    expect(jsoncPatch('{"l": true}', { l: 'yes' })).toBe('{"l": "yes"}')
  })
  it('l bool to number', () => {
    expect(jsoncPatch('{"l": false}', { l: 0 })).toBe('{"l": 0}')
  })
  it('l bool to null', () => {
    expect(jsoncPatch('{"l": true}', { l: null })).toBe('{"l": null}')
  })
  it('l bool to obj', () => {
    expect(jsoncPatch('{"l": false}', { l: { h: 1 } })).toBe('{"l": {"h":1}}')
  })
  it('l bool to arr', () => {
    expect(jsoncPatch('{"l": true}', { l: [23] })).toBe('{"l": [23]}')
  })
  it('l null to string', () => {
    expect(jsoncPatch('{"l": null}', { l: 'data' })).toBe('{"l": "data"}')
  })
  it('l null to number', () => {
    expect(jsoncPatch('{"l": null}', { l: 77 })).toBe('{"l": 77}')
  })
  it('l null to bool', () => {
    expect(jsoncPatch('{"l": null}', { l: false })).toBe('{"l": false}')
  })
  it('l null to obj', () => {
    expect(jsoncPatch('{"l": null}', { l: { i: 1 } })).toBe('{"l": {"i":1}}')
  })
  it('l null to arr', () => {
    expect(jsoncPatch('{"l": null}', { l: [24, 25] })).toBe('{"l": [24,25]}')
  })
  it('l obj to string', () => {
    expect(jsoncPatch('{"l": {"x":1}}', { l: 'val' })).toBe('{"l": "val"}')
  })
  it('l obj to number', () => {
    expect(jsoncPatch('{"l": {"x":1}}', { l: 99 })).toBe('{"l": 99}')
  })
  it('l obj to bool', () => {
    expect(jsoncPatch('{"l": {"x":1}}', { l: true })).toBe('{"l": true}')
  })
  it('l obj to null', () => {
    expect(jsoncPatch('{"l": {"x":1}}', { l: null })).toBe('{"l": null}')
  })
  it('l obj to arr', () => {
    expect(jsoncPatch('{"l": {"x":1}}', { l: [26] })).toBe('{"l": [26]}')
  })
  it('l arr to string', () => {
    expect(jsoncPatch('{"l": [1,2]}', { l: 'arr' })).toBe('{"l": "arr"}')
  })
  it('l arr to number', () => {
    expect(jsoncPatch('{"l": [1,2]}', { l: 44 })).toBe('{"l": 44}')
  })
  it('l arr to bool', () => {
    expect(jsoncPatch('{"l": [1,2]}', { l: false })).toBe('{"l": false}')
  })
  it('l arr to null', () => {
    expect(jsoncPatch('{"l": [1,2]}', { l: null })).toBe('{"l": null}')
  })
  it('l arr to obj', () => {
    expect(jsoncPatch('{"l": [1,2]}', { l: { j: 1 } })).toBe('{"l": {"j":1}}')
  })
})

describe('replace m - type mutations', () => {
  it('m string to number', () => {
    expect(jsoncPatch('{"m": "x"}', { m: 100 })).toBe('{"m": 100}')
  })
  it('m string to bool', () => {
    expect(jsoncPatch('{"m": "x"}', { m: true })).toBe('{"m": true}')
  })
  it('m string to null', () => {
    expect(jsoncPatch('{"m": "x"}', { m: null })).toBe('{"m": null}')
  })
  it('m string to obj', () => {
    expect(jsoncPatch('{"m": "x"}', { m: { k: 1 } })).toBe('{"m": {"k":1}}')
  })
  it('m string to arr', () => {
    expect(jsoncPatch('{"m": "x"}', { m: [27] })).toBe('{"m": [27]}')
  })
  it('m number to string', () => {
    expect(jsoncPatch('{"m": 60}', { m: 'val' })).toBe('{"m": "val"}')
  })
  it('m number to bool', () => {
    expect(jsoncPatch('{"m": 60}', { m: true })).toBe('{"m": true}')
  })
  it('m number to null', () => {
    expect(jsoncPatch('{"m": 60}', { m: null })).toBe('{"m": null}')
  })
  it('m number to obj', () => {
    expect(jsoncPatch('{"m": 60}', { m: { l: 1 } })).toBe('{"m": {"l":1}}')
  })
  it('m number to arr', () => {
    expect(jsoncPatch('{"m": 60}', { m: [28] })).toBe('{"m": [28]}')
  })
  it('m bool to string', () => {
    expect(jsoncPatch('{"m": true}', { m: 'si' })).toBe('{"m": "si"}')
  })
  it('m bool to number', () => {
    expect(jsoncPatch('{"m": false}', { m: 0 })).toBe('{"m": 0}')
  })
  it('m bool to null', () => {
    expect(jsoncPatch('{"m": true}', { m: null })).toBe('{"m": null}')
  })
  it('m bool to obj', () => {
    expect(jsoncPatch('{"m": false}', { m: { m: 1 } })).toBe('{"m": {"m":1}}')
  })
  it('m bool to arr', () => {
    expect(jsoncPatch('{"m": true}', { m: [29] })).toBe('{"m": [29]}')
  })
  it('m null to string', () => {
    expect(jsoncPatch('{"m": null}', { m: 'str' })).toBe('{"m": "str"}')
  })
  it('m null to number', () => {
    expect(jsoncPatch('{"m": null}', { m: 11 })).toBe('{"m": 11}')
  })
  it('m null to bool', () => {
    expect(jsoncPatch('{"m": null}', { m: false })).toBe('{"m": false}')
  })
  it('m null to obj', () => {
    expect(jsoncPatch('{"m": null}', { m: { n: 1 } })).toBe('{"m": {"n":1}}')
  })
  it('m null to arr', () => {
    expect(jsoncPatch('{"m": null}', { m: [30, 31] })).toBe('{"m": [30,31]}')
  })
  it('m obj to string', () => {
    expect(jsoncPatch('{"m": {"x":1}}', { m: 'txt' })).toBe('{"m": "txt"}')
  })
  it('m obj to number', () => {
    expect(jsoncPatch('{"m": {"x":1}}', { m: 22 })).toBe('{"m": 22}')
  })
  it('m obj to bool', () => {
    expect(jsoncPatch('{"m": {"x":1}}', { m: false })).toBe('{"m": false}')
  })
  it('m obj to null', () => {
    expect(jsoncPatch('{"m": {"x":1}}', { m: null })).toBe('{"m": null}')
  })
  it('m obj to arr', () => {
    expect(jsoncPatch('{"m": {"x":1}}', { m: [32] })).toBe('{"m": [32]}')
  })
  it('m arr to string', () => {
    expect(jsoncPatch('{"m": [1,2]}', { m: 'list' })).toBe('{"m": "list"}')
  })
  it('m arr to number', () => {
    expect(jsoncPatch('{"m": [1,2]}', { m: 88 })).toBe('{"m": 88}')
  })
  it('m arr to bool', () => {
    expect(jsoncPatch('{"m": [1,2]}', { m: true })).toBe('{"m": true}')
  })
  it('m arr to null', () => {
    expect(jsoncPatch('{"m": [1,2]}', { m: null })).toBe('{"m": null}')
  })
  it('m arr to obj', () => {
    expect(jsoncPatch('{"m": [1,2]}', { m: { o: 1 } })).toBe('{"m": {"o":1}}')
  })
})

describe('short string values', () => {
  it('add a', () => {
    expect(jsoncPatch('{}', { v: 'a' })).toBe('{"v": "a"}')
  })
  it('add ab', () => {
    expect(jsoncPatch('{}', { v: 'ab' })).toBe('{"v": "ab"}')
  })
  it('add abc', () => {
    expect(jsoncPatch('{}', { v: 'abc' })).toBe('{"v": "abc"}')
  })
  it('add abcd', () => {
    expect(jsoncPatch('{}', { v: 'abcd' })).toBe('{"v": "abcd"}')
  })
  it('replace short to long', () => {
    expect(jsoncPatch('{"v": "a"}', { v: 'abcdefghij' })).toBe(
      '{"v": "abcdefghij"}'
    )
  })
  it('replace long to short', () => {
    expect(jsoncPatch('{"v": "abcdefghij"}', { v: 'a' })).toBe('{"v": "a"}')
  })
  it('replace a to b', () => {
    expect(jsoncPatch('{"v": "a"}', { v: 'b' })).toBe('{"v": "b"}')
  })
  it('replace aa to bb', () => {
    expect(jsoncPatch('{"v": "aa"}', { v: 'bb' })).toBe('{"v": "bb"}')
  })
  it('replace abc to xyz', () => {
    expect(jsoncPatch('{"v": "abc"}', { v: 'xyz' })).toBe('{"v": "xyz"}')
  })
  it('replace hello to world', () => {
    expect(jsoncPatch('{"v": "hello"}', { v: 'world' })).toBe('{"v": "world"}')
  })
  it('replace single to double', () => {
    expect(jsoncPatch('{"v": "a"}', { v: 'aa' })).toBe('{"v": "aa"}')
  })
  it('replace double to single', () => {
    expect(jsoncPatch('{"v": "aa"}', { v: 'a' })).toBe('{"v": "a"}')
  })
  it('replace case change', () => {
    expect(jsoncPatch('{"v": "hello"}', { v: 'HELLO' })).toBe('{"v": "HELLO"}')
  })
  it('replace reversed', () => {
    expect(jsoncPatch('{"v": "abc"}', { v: 'cba' })).toBe('{"v": "cba"}')
  })
})

describe('property key naming variations', () => {
  it('key single char', () => {
    expect(jsoncPatch('{}', { x: 1 })).toBe('{"x": 1}')
  })
  it('key two chars', () => {
    expect(jsoncPatch('{}', { xy: 1 })).toBe('{"xy": 1}')
  })
  it('key three chars', () => {
    expect(jsoncPatch('{}', { xyz: 1 })).toBe('{"xyz": 1}')
  })
  it('key four chars', () => {
    expect(jsoncPatch('{}', { data: 1 })).toBe('{"data": 1}')
  })
  it('key five chars', () => {
    expect(jsoncPatch('{}', { value: 1 })).toBe('{"value": 1}')
  })
  it('key six chars', () => {
    expect(jsoncPatch('{}', { myKey: 1 })).toBe('{"myKey": 1}')
  })
  it('key seven chars', () => {
    expect(jsoncPatch('{}', { myKeyX: 1 })).toBe('{"myKeyX": 1}')
  })
  it('key eight chars', () => {
    expect(jsoncPatch('{}', { myKeyXY: 1 })).toBe('{"myKeyXY": 1}')
  })
  it('key nine chars', () => {
    expect(jsoncPatch('{}', { myKeyXYZ: 1 })).toBe('{"myKeyXYZ": 1}')
  })
  it('key ten chars', () => {
    expect(jsoncPatch('{}', { myKeyABCDE: 1 })).toBe('{"myKeyABCDE": 1}')
  })
  it('key with underscore', () => {
    expect(jsoncPatch('{}', { my_key: 1 })).toBe('{"my_key": 1}')
  })
  it('key with dollar', () => {
    expect(jsoncPatch('{}', { $value: 1 })).toBe('{"$value": 1}')
  })
  it('key number start', () => {
    expect(jsoncPatch('{}', { '1key': 1 })).toBe('{"1key": 1}')
  })
  it('key with dash', () => {
    expect(jsoncPatch('{}', { 'my-key': 1 })).toBe('{"my-key": 1}')
  })
  it('key with dots', () => {
    expect(jsoncPatch('{}', { 'my.key': 1 })).toBe('{"my.key": 1}')
  })
  it('key with spaces', () => {
    expect(jsoncPatch('{}', { 'my key': 1 })).toBe('{"my key": 1}')
  })
})

describe('float and decimal values', () => {
  it('add 0.5', () => {
    expect(jsoncPatch('{}', { n: 0.5 })).toBe('{"n": 0.5}')
  })
  it('add 1.5', () => {
    expect(jsoncPatch('{}', { n: 1.5 })).toBe('{"n": 1.5}')
  })
  it('add 3.14', () => {
    expect(jsoncPatch('{}', { n: 3.14 })).toBe('{"n": 3.14}')
  })
  it('add -3.14', () => {
    expect(jsoncPatch('{}', { n: -3.14 })).toBe('{"n": -3.14}')
  })
  it('add 0.001', () => {
    expect(jsoncPatch('{}', { n: 0.001 })).toBe('{"n": 0.001}')
  })
  it('add 99.99', () => {
    expect(jsoncPatch('{}', { n: 99.99 })).toBe('{"n": 99.99}')
  })
  it('replace float to float', () => {
    expect(jsoncPatch('{"n": 1.1}', { n: 2.2 })).toBe('{"n": 2.2}')
  })
  it('replace float to int', () => {
    expect(jsoncPatch('{"n": 3.14}', { n: 3 })).toBe('{"n": 3}')
  })
  it('replace int to float', () => {
    expect(jsoncPatch('{"n": 3}', { n: 3.14 })).toBe('{"n": 3.14}')
  })
  it('replace zero to float', () => {
    expect(jsoncPatch('{"n": 0}', { n: 0.5 })).toBe('{"n": 0.5}')
  })
  it('replace float to neg float', () => {
    expect(jsoncPatch('{"n": 1.5}', { n: -1.5 })).toBe('{"n": -1.5}')
  })
  it('add 0.123456789', () => {
    expect(jsoncPatch('{}', { n: 0.123456789 })).toBe('{"n": 0.123456789}')
  })
  it('add -0.5', () => {
    expect(jsoncPatch('{}', { n: -0.5 })).toBe('{"n": -0.5}')
  })
  it('add 100.001', () => {
    expect(jsoncPatch('{}', { n: 100.001 })).toBe('{"n": 100.001}')
  })
})

describe('add property with numeric value range', () => {
  it('add 2', () => {
    expect(jsoncPatch('{}', { n: 2 })).toBe('{"n": 2}')
  })
  it('add 4', () => {
    expect(jsoncPatch('{}', { n: 4 })).toBe('{"n": 4}')
  })
  it('add 8', () => {
    expect(jsoncPatch('{}', { n: 8 })).toBe('{"n": 8}')
  })
  it('add 16', () => {
    expect(jsoncPatch('{}', { n: 16 })).toBe('{"n": 16}')
  })
  it('add 32', () => {
    expect(jsoncPatch('{}', { n: 32 })).toBe('{"n": 32}')
  })
  it('add 64', () => {
    expect(jsoncPatch('{}', { n: 64 })).toBe('{"n": 64}')
  })
  it('add 128', () => {
    expect(jsoncPatch('{}', { n: 128 })).toBe('{"n": 128}')
  })
  it('add 256', () => {
    expect(jsoncPatch('{}', { n: 256 })).toBe('{"n": 256}')
  })
  it('add 512', () => {
    expect(jsoncPatch('{}', { n: 512 })).toBe('{"n": 512}')
  })
  it('add 1024', () => {
    expect(jsoncPatch('{}', { n: 1024 })).toBe('{"n": 1024}')
  })
  it('add 2048', () => {
    expect(jsoncPatch('{}', { n: 2048 })).toBe('{"n": 2048}')
  })
  it('add 4096', () => {
    expect(jsoncPatch('{}', { n: 4096 })).toBe('{"n": 4096}')
  })
  it('add 8192', () => {
    expect(jsoncPatch('{}', { n: 8192 })).toBe('{"n": 8192}')
  })
  it('add 16384', () => {
    expect(jsoncPatch('{}', { n: 16384 })).toBe('{"n": 16384}')
  })
  it('add 32768', () => {
    expect(jsoncPatch('{}', { n: 32768 })).toBe('{"n": 32768}')
  })
})

describe('add property with negative numeric range', () => {
  it('add -1', () => {
    expect(jsoncPatch('{}', { n: -1 })).toBe('{"n": -1}')
  })
  it('add -2', () => {
    expect(jsoncPatch('{}', { n: -2 })).toBe('{"n": -2}')
  })
  it('add -3', () => {
    expect(jsoncPatch('{}', { n: -3 })).toBe('{"n": -3}')
  })
  it('add -4', () => {
    expect(jsoncPatch('{}', { n: -4 })).toBe('{"n": -4}')
  })
  it('add -5', () => {
    expect(jsoncPatch('{}', { n: -5 })).toBe('{"n": -5}')
  })
  it('add -10', () => {
    expect(jsoncPatch('{}', { n: -10 })).toBe('{"n": -10}')
  })
  it('add -20', () => {
    expect(jsoncPatch('{}', { n: -20 })).toBe('{"n": -20}')
  })
  it('add -50', () => {
    expect(jsoncPatch('{}', { n: -50 })).toBe('{"n": -50}')
  })
  it('add -100', () => {
    expect(jsoncPatch('{}', { n: -100 })).toBe('{"n": -100}')
  })
  it('add -500', () => {
    expect(jsoncPatch('{}', { n: -500 })).toBe('{"n": -500}')
  })
  it('add -1000', () => {
    expect(jsoncPatch('{}', { n: -1000 })).toBe('{"n": -1000}')
  })
  it('add -10000', () => {
    expect(jsoncPatch('{}', { n: -10000 })).toBe('{"n": -10000}')
  })
})

describe('replace property - numeric values range', () => {
  it('replace 0 to 100', () => {
    expect(jsoncPatch('{"n": 0}', { n: 100 })).toBe('{"n": 100}')
  })
  it('replace 100 to 0', () => {
    expect(jsoncPatch('{"n": 100}', { n: 0 })).toBe('{"n": 0}')
  })
  it('replace -100 to 100', () => {
    expect(jsoncPatch('{"n": -100}', { n: 100 })).toBe('{"n": 100}')
  })
  it('replace 100 to -100', () => {
    expect(jsoncPatch('{"n": 100}', { n: -100 })).toBe('{"n": -100}')
  })
  it('replace 1 to 999999', () => {
    expect(jsoncPatch('{"n": 1}', { n: 999999 })).toBe('{"n": 999999}')
  })
  it('replace 999999 to 1', () => {
    expect(jsoncPatch('{"n": 999999}', { n: 1 })).toBe('{"n": 1}')
  })
  it('replace 0 to -0', () => {
    expect(jsoncPatch('{"n": 0}', { n: -0 })).toBe('{"n": 0}')
  })
  it('replace 0.5 to 0.25', () => {
    expect(jsoncPatch('{"n": 0.5}', { n: 0.25 })).toBe('{"n": 0.25}')
  })
  it('replace 0.25 to 0.5', () => {
    expect(jsoncPatch('{"n": 0.25}', { n: 0.5 })).toBe('{"n": 0.5}')
  })
  it('replace 1.5 to -1.5', () => {
    expect(jsoncPatch('{"n": 1.5}', { n: -1.5 })).toBe('{"n": -1.5}')
  })
  it('replace -1.5 to 1.5', () => {
    expect(jsoncPatch('{"n": -1.5}', { n: 1.5 })).toBe('{"n": 1.5}')
  })
})

describe('add with integer key names', () => {
  it('add key a1', () => {
    expect(jsoncPatch('{}', { a1: 1 })).toBe('{"a1": 1}')
  })
  it('add key b2', () => {
    expect(jsoncPatch('{}', { b2: 2 })).toBe('{"b2": 2}')
  })
  it('add key c3', () => {
    expect(jsoncPatch('{}', { c3: 3 })).toBe('{"c3": 3}')
  })
  it('add key d4', () => {
    expect(jsoncPatch('{}', { d4: 4 })).toBe('{"d4": 4}')
  })
  it('add key e5', () => {
    expect(jsoncPatch('{}', { e5: 5 })).toBe('{"e5": 5}')
  })
  it('add key f6', () => {
    expect(jsoncPatch('{}', { f6: 6 })).toBe('{"f6": 6}')
  })
  it('add key g7', () => {
    expect(jsoncPatch('{}', { g7: 7 })).toBe('{"g7": 7}')
  })
  it('add key h8', () => {
    expect(jsoncPatch('{}', { h8: 8 })).toBe('{"h8": 8}')
  })
  it('add key i9', () => {
    expect(jsoncPatch('{}', { i9: 9 })).toBe('{"i9": 9}')
  })
  it('add key j10', () => {
    expect(jsoncPatch('{}', { j10: 10 })).toBe('{"j10": 10}')
  })
  it('add key k11', () => {
    expect(jsoncPatch('{}', { k11: 11 })).toBe('{"k11": 11}')
  })
  it('add key l12', () => {
    expect(jsoncPatch('{}', { l12: 12 })).toBe('{"l12": 12}')
  })
  it('add key m13', () => {
    expect(jsoncPatch('{}', { m13: 13 })).toBe('{"m13": 13}')
  })
  it('add key n14', () => {
    expect(jsoncPatch('{}', { n14: 14 })).toBe('{"n14": 14}')
  })
  it('add key o15', () => {
    expect(jsoncPatch('{}', { o15: 15 })).toBe('{"o15": 15}')
  })
})

describe('add with mixed full-word keys', () => {
  it('add name', () => {
    expect(jsoncPatch('{}', { name: 'test' })).toBe('{"name": "test"}')
  })
  it('add value', () => {
    expect(jsoncPatch('{}', { value: 100 })).toBe('{"value": 100}')
  })
  it('add count', () => {
    expect(jsoncPatch('{}', { count: 50 })).toBe('{"count": 50}')
  })
  it('add index', () => {
    expect(jsoncPatch('{}', { index: 0 })).toBe('{"index": 0}')
  })
  it('add total', () => {
    expect(jsoncPatch('{}', { total: 999 })).toBe('{"total": 999}')
  })
  it('add status', () => {
    expect(jsoncPatch('{}', { status: 'ok' })).toBe('{"status": "ok"}')
  })
  it('add result', () => {
    expect(jsoncPatch('{}', { result: null })).toBe('{"result": null}')
  })
  it('add error', () => {
    expect(jsoncPatch('{}', { error: false })).toBe('{"error": false}')
  })
  it('add message', () => {
    expect(jsoncPatch('{}', { message: 'hi' })).toBe('{"message": "hi"}')
  })
  it('add payload', () => {
    expect(jsoncPatch('{}', { payload: {} })).toBe('{"payload": {}}')
  })
  it('add config', () => {
    expect(jsoncPatch('{}', { config: { a: 1 } })).toBe('{"config": {"a":1}}')
  })
  it('add items', () => {
    expect(jsoncPatch('{}', { items: [] })).toBe('{"items": []}')
  })
  it('add list', () => {
    expect(jsoncPatch('{}', { list: [1, 2] })).toBe('{"list": [1,2]}')
  })
  it('add metadata', () => {
    expect(jsoncPatch('{}', { metadata: { k: 'v' } })).toBe(
      '{"metadata": {"k":"v"}}'
    )
  })
  it('add settings', () => {
    expect(jsoncPatch('{}', { settings: { enabled: true } })).toBe(
      '{"settings": {"enabled":true}}'
    )
  })
})

describe('add property with boolean false on different keys', () => {
  it('add p false', () => {
    expect(jsoncPatch('{}', { p: false })).toBe('{"p": false}')
  })
  it('add q false', () => {
    expect(jsoncPatch('{}', { q: false })).toBe('{"q": false}')
  })
  it('add r false', () => {
    expect(jsoncPatch('{}', { r: false })).toBe('{"r": false}')
  })
  it('add s false', () => {
    expect(jsoncPatch('{}', { s: false })).toBe('{"s": false}')
  })
  it('add t false', () => {
    expect(jsoncPatch('{}', { t: false })).toBe('{"t": false}')
  })
  it('add u false', () => {
    expect(jsoncPatch('{}', { u: false })).toBe('{"u": false}')
  })
  it('add v false', () => {
    expect(jsoncPatch('{}', { v: false })).toBe('{"v": false}')
  })
  it('add w false', () => {
    expect(jsoncPatch('{}', { w: false })).toBe('{"w": false}')
  })
  it('add x false', () => {
    expect(jsoncPatch('{}', { x: false })).toBe('{"x": false}')
  })
  it('add y false', () => {
    expect(jsoncPatch('{}', { y: false })).toBe('{"y": false}')
  })
  it('add z false', () => {
    expect(jsoncPatch('{}', { z: false })).toBe('{"z": false}')
  })
})

describe('add property with boolean true on different keys', () => {
  it('add p true', () => {
    expect(jsoncPatch('{}', { p: true })).toBe('{"p": true}')
  })
  it('add q true', () => {
    expect(jsoncPatch('{}', { q: true })).toBe('{"q": true}')
  })
  it('add r true', () => {
    expect(jsoncPatch('{}', { r: true })).toBe('{"r": true}')
  })
  it('add s true', () => {
    expect(jsoncPatch('{}', { s: true })).toBe('{"s": true}')
  })
  it('add t true', () => {
    expect(jsoncPatch('{}', { t: true })).toBe('{"t": true}')
  })
  it('add u true', () => {
    expect(jsoncPatch('{}', { u: true })).toBe('{"u": true}')
  })
  it('add v true', () => {
    expect(jsoncPatch('{}', { v: true })).toBe('{"v": true}')
  })
  it('add w true', () => {
    expect(jsoncPatch('{}', { w: true })).toBe('{"w": true}')
  })
  it('add x true', () => {
    expect(jsoncPatch('{}', { x: true })).toBe('{"x": true}')
  })
  it('add y true', () => {
    expect(jsoncPatch('{}', { y: true })).toBe('{"y": true}')
  })
  it('add z true', () => {
    expect(jsoncPatch('{}', { z: true })).toBe('{"z": true}')
  })
})

describe('add property with null on different keys', () => {
  it('add p null', () => {
    expect(jsoncPatch('{}', { p: null })).toBe('{"p": null}')
  })
  it('add q null', () => {
    expect(jsoncPatch('{}', { q: null })).toBe('{"q": null}')
  })
  it('add r null', () => {
    expect(jsoncPatch('{}', { r: null })).toBe('{"r": null}')
  })
  it('add s null', () => {
    expect(jsoncPatch('{}', { s: null })).toBe('{"s": null}')
  })
  it('add t null', () => {
    expect(jsoncPatch('{}', { t: null })).toBe('{"t": null}')
  })
  it('add u null', () => {
    expect(jsoncPatch('{}', { u: null })).toBe('{"u": null}')
  })
  it('add v null', () => {
    expect(jsoncPatch('{}', { v: null })).toBe('{"v": null}')
  })
  it('add w null', () => {
    expect(jsoncPatch('{}', { w: null })).toBe('{"w": null}')
  })
  it('add x null', () => {
    expect(jsoncPatch('{}', { x: null })).toBe('{"x": null}')
  })
  it('add y null', () => {
    expect(jsoncPatch('{}', { y: null })).toBe('{"y": null}')
  })
  it('add z null', () => {
    expect(jsoncPatch('{}', { z: null })).toBe('{"z": null}')
  })
})

describe('add property with empty objects on different keys', () => {
  it('add p empty obj', () => {
    expect(jsoncPatch('{}', { p: {} })).toBe('{"p": {}}')
  })
  it('add q empty obj', () => {
    expect(jsoncPatch('{}', { q: {} })).toBe('{"q": {}}')
  })
  it('add r empty obj', () => {
    expect(jsoncPatch('{}', { r: {} })).toBe('{"r": {}}')
  })
  it('add s empty obj', () => {
    expect(jsoncPatch('{}', { s: {} })).toBe('{"s": {}}')
  })
  it('add t empty obj', () => {
    expect(jsoncPatch('{}', { t: {} })).toBe('{"t": {}}')
  })
  it('add u empty obj', () => {
    expect(jsoncPatch('{}', { u: {} })).toBe('{"u": {}}')
  })
  it('add v empty obj', () => {
    expect(jsoncPatch('{}', { v: {} })).toBe('{"v": {}}')
  })
  it('add w empty obj', () => {
    expect(jsoncPatch('{}', { w: {} })).toBe('{"w": {}}')
  })
  it('add x empty obj', () => {
    expect(jsoncPatch('{}', { x: {} })).toBe('{"x": {}}')
  })
  it('add y empty obj', () => {
    expect(jsoncPatch('{}', { y: {} })).toBe('{"y": {}}')
  })
  it('add z empty obj', () => {
    expect(jsoncPatch('{}', { z: {} })).toBe('{"z": {}}')
  })
})

describe('add property with empty arrays on different keys', () => {
  it('add p empty arr', () => {
    expect(jsoncPatch('{}', { p: [] })).toBe('{"p": []}')
  })
  it('add q empty arr', () => {
    expect(jsoncPatch('{}', { q: [] })).toBe('{"q": []}')
  })
  it('add r empty arr', () => {
    expect(jsoncPatch('{}', { r: [] })).toBe('{"r": []}')
  })
  it('add s empty arr', () => {
    expect(jsoncPatch('{}', { s: [] })).toBe('{"s": []}')
  })
  it('add t empty arr', () => {
    expect(jsoncPatch('{}', { t: [] })).toBe('{"t": []}')
  })
  it('add u empty arr', () => {
    expect(jsoncPatch('{}', { u: [] })).toBe('{"u": []}')
  })
  it('add v empty arr', () => {
    expect(jsoncPatch('{}', { v: [] })).toBe('{"v": []}')
  })
  it('add w empty arr', () => {
    expect(jsoncPatch('{}', { w: [] })).toBe('{"w": []}')
  })
  it('add x empty arr', () => {
    expect(jsoncPatch('{}', { x: [] })).toBe('{"x": []}')
  })
  it('add y empty arr', () => {
    expect(jsoncPatch('{}', { y: [] })).toBe('{"y": []}')
  })
  it('add z empty arr', () => {
    expect(jsoncPatch('{}', { z: [] })).toBe('{"z": []}')
  })
})
