import { describe, expect, it } from 'vitest'
import { jsoncPatch } from '../index'

describe('empty and falsy input', () => {
  it('empty string defaults to {} then adds', () => {
    expect(jsoncPatch('', { a: 1 })).toBe('{"a": 1}')
  })
  it('empty string defaults to {} and stays empty', () => {
    expect(jsoncPatch('', {})).toBe('{}')
  })
  it('whitespace-only string defaults to {}', () => {
    expect(jsoncPatch('   ', { a: 1 })).toBe('{"a": 1}')
  })
  it('tab-only string defaults to {}', () => {
    expect(jsoncPatch('\t', { a: 1 })).toBe('{"a": 1}')
  })
  it('newline-only string defaults to {}', () => {
    expect(jsoncPatch('\n', { a: 1 })).toBe('{"a": 1}')
  })
  it('whitespace to empty', () => {
    expect(jsoncPatch('   ', {})).toBe('{}')
  })
  it('empty string to itself', () => {
    expect(jsoncPatch('', {})).toBe('{}')
  })
  it('carriage return to itself', () => {
    expect(jsoncPatch('\r\n', {})).toBe('{}')
  })
  it('empty to false', () => {
    expect(jsoncPatch('', { flag: false })).toBe('{"flag": false}')
  })
  it('empty to null', () => {
    expect(jsoncPatch('', { val: null })).toBe('{"val": null}')
  })
  it('empty to empty string value', () => {
    expect(jsoncPatch('', { s: '' })).toBe('{"s": ""}')
  })
  it('empty to nested object', () => {
    expect(jsoncPatch('', { o: { a: 1 } })).toBe('{"o": {"a":1}}')
  })
  it('empty to nested array', () => {
    expect(jsoncPatch('', { arr: [1, 2, 3] })).toBe('{"arr": [1,2,3]}')
  })
})

describe('add property - all value types', () => {
  it('add string property', () => {
    expect(jsoncPatch('{}', { name: 'hello' })).toBe('{"name": "hello"}')
  })
  it('add number property', () => {
    expect(jsoncPatch('{}', { count: 42 })).toBe('{"count": 42}')
  })
  it('add float property', () => {
    expect(jsoncPatch('{}', { price: 19.99 })).toBe('{"price": 19.99}')
  })
  it('add negative number', () => {
    expect(jsoncPatch('{}', { temp: -5 })).toBe('{"temp": -5}')
  })
  it('add zero', () => {
    expect(jsoncPatch('{}', { zero: 0 })).toBe('{"zero": 0}')
  })
  it('add negative float', () => {
    expect(jsoncPatch('{}', { val: -3.14 })).toBe('{"val": -3.14}')
  })
  it('add large integer', () => {
    expect(jsoncPatch('{}', { big: 999999999 })).toBe('{"big": 999999999}')
  })
  it('add true', () => {
    expect(jsoncPatch('{}', { flag: true })).toBe('{"flag": true}')
  })
  it('add false', () => {
    expect(jsoncPatch('{}', { flag: false })).toBe('{"flag": false}')
  })
  it('add null', () => {
    expect(jsoncPatch('{}', { val: null })).toBe('{"val": null}')
  })
  it('add empty object', () => {
    expect(jsoncPatch('{}', { nested: {} })).toBe('{"nested": {}}')
  })
  it('add nested object with one key', () => {
    expect(jsoncPatch('{}', { nested: { x: 1 } })).toBe('{"nested": {"x":1}}')
  })
  it('add nested object with two keys', () => {
    expect(jsoncPatch('{}', { nested: { a: 1, b: 2 } })).toBe(
      '{"nested": {"a":1,"b":2}}'
    )
  })
  it('add empty array', () => {
    expect(jsoncPatch('{}', { items: [] })).toBe('{"items": []}')
  })
  it('add number array', () => {
    expect(jsoncPatch('{}', { items: [1, 2, 3] })).toBe('{"items": [1,2,3]}')
  })
  it('add string array', () => {
    expect(jsoncPatch('{}', { items: ['a', 'b'] })).toBe('{"items": ["a","b"]}')
  })
  it('add mixed array', () => {
    expect(jsoncPatch('{}', { items: [1, 'two', false, null] })).toBe(
      '{"items": [1,"two",false,null]}'
    )
  })
  it('add nested array in array', () => {
    expect(
      jsoncPatch('{}', {
        matrix: [
          [1, 2],
          [3, 4],
        ],
      })
    ).toBe('{"matrix": [[1,2],[3,4]]}')
  })
  it('add object array', () => {
    expect(jsoncPatch('{}', { users: [{ id: 1 }, { id: 2 }] })).toBe(
      '{"users": [{"id":1},{"id":2}]}'
    )
  })
  it('add boolean array', () => {
    expect(jsoncPatch('{}', { flags: [true, false, true] })).toBe(
      '{"flags": [true,false,true]}'
    )
  })
  it('add null array', () => {
    expect(jsoncPatch('{}', { vals: [null, null] })).toBe(
      '{"vals": [null,null]}'
    )
  })
  it('add sparse-like array', () => {
    expect(jsoncPatch('{}', { items: [1] })).toBe('{"items": [1]}')
  })
  it('add single-element array', () => {
    expect(jsoncPatch('{}', { items: ['only'] })).toBe('{"items": ["only"]}')
  })
  it('add deeply nested empty object', () => {
    expect(jsoncPatch('{}', { a: { b: { c: {} } } })).toBe(
      '{"a": {"b":{"c":{}}}}'
    )
  })
  it('add deeply nested with values', () => {
    expect(jsoncPatch('{}', { a: { b: { c: 42 } } })).toBe(
      '{"a": {"b":{"c":42}}}'
    )
  })
  it('add to existing single property', () => {
    expect(jsoncPatch('{"x": 1}', { x: 1, y: 2 })).toBe('{"x": 1,"y": 2}')
  })
  it('add to existing two properties', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1, "b": 2,"c": 3}'
    )
  })
  it('add multiple keys at once to empty', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2, c: 3 })).toBe(
      '{"c": 3,"b": 2,"a": 1}'
    )
  })
  it('add to object with trailing comma', () => {
    expect(jsoncPatch('{"a": 1,}', { a: 1, b: 2 })).toBe('{"a": 1,"b": 2,}')
  })
  it('add to object with comment', () => {
    expect(jsoncPatch('{/*x*/"a": 1}', { a: 1, b: 2 })).toBe(
      '{/*x*/"a": 1,"b": 2}'
    )
  })
  it('add after removing all', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { c: 3 })).toBe('{"c": 3}')
  })
})

describe('replace property - type mutations', () => {
  it('string to number', () => {
    expect(jsoncPatch('{"a": "hello"}', { a: 42 })).toBe('{"a": 42}')
  })
  it('number to string', () => {
    expect(jsoncPatch('{"a": 42}', { a: 'hello' })).toBe('{"a": "hello"}')
  })
  it('boolean to number', () => {
    expect(jsoncPatch('{"a": true}', { a: 1 })).toBe('{"a": 1}')
  })
  it('number to boolean', () => {
    expect(jsoncPatch('{"a": 1}', { a: true })).toBe('{"a": true}')
  })
  it('null to string', () => {
    expect(jsoncPatch('{"a": null}', { a: 'text' })).toBe('{"a": "text"}')
  })
  it('string to null', () => {
    expect(jsoncPatch('{"a": "text"}', { a: null })).toBe('{"a": null}')
  })
  it('object to string', () => {
    expect(jsoncPatch('{"a": {"b":1}}', { a: 'flat' })).toBe('{"a": "flat"}')
  })
  it('string to object', () => {
    expect(jsoncPatch('{"a": "flat"}', { a: { b: 1 } })).toBe('{"a": {"b":1}}')
  })
  it('array to string', () => {
    expect(jsoncPatch('{"a": [1,2,3]}', { a: 'text' })).toBe('{"a": "text"}')
  })
  it('string to array', () => {
    expect(jsoncPatch('{"a": "text"}', { a: [1, 2, 3] })).toBe('{"a": [1,2,3]}')
  })
  it('array to object', () => {
    expect(jsoncPatch('{"a": [1,2]}', { a: { x: 1 } })).toBe('{"a": {"x":1}}')
  })
  it('object to array', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: [1, 2] })).toBe('{"a": [1,2]}')
  })
  it('boolean to null', () => {
    expect(jsoncPatch('{"a": false}', { a: null })).toBe('{"a": null}')
  })
  it('null to boolean', () => {
    expect(jsoncPatch('{"a": null}', { a: true })).toBe('{"a": true}')
  })
  it('number to null', () => {
    expect(jsoncPatch('{"a": 0}', { a: null })).toBe('{"a": null}')
  })
  it('null to number', () => {
    expect(jsoncPatch('{"a": null}', { a: 0 })).toBe('{"a": 0}')
  })
  it('boolean to string', () => {
    expect(jsoncPatch('{"a": true}', { a: 'true' })).toBe('{"a": "true"}')
  })
  it('string to boolean', () => {
    expect(jsoncPatch('{"a": "true"}', { a: false })).toBe('{"a": false}')
  })
  it('number to array', () => {
    expect(jsoncPatch('{"a": 1}', { a: [1] })).toBe('{"a": [1]}')
  })
  it('array to number', () => {
    expect(jsoncPatch('{"a": [1]}', { a: 1 })).toBe('{"a": 1}')
  })
  it('object to boolean', () => {
    expect(jsoncPatch('{"a": {}}', { a: true })).toBe('{"a": true}')
  })
  it('boolean to object', () => {
    expect(jsoncPatch('{"a": true}', { a: {} })).toBe('{"a": {}}')
  })
  it('null to array', () => {
    expect(jsoncPatch('{"a": null}', { a: [] })).toBe('{"a": []}')
  })
  it('array to null', () => {
    expect(jsoncPatch('{"a": []}', { a: null })).toBe('{"a": null}')
  })
  it('null to object', () => {
    expect(jsoncPatch('{"a": null}', { a: { b: 2 } })).toBe('{"a": {"b":2}}')
  })
  it('object to null', () => {
    expect(jsoncPatch('{"a": {"b":2}}', { a: null })).toBe('{"a": null}')
  })
  it('number to number different value', () => {
    expect(jsoncPatch('{"a": 100}', { a: 200 })).toBe('{"a": 200}')
  })
  it('string to string different value', () => {
    expect(jsoncPatch('{"a": "old"}', { a: 'new' })).toBe('{"a": "new"}')
  })
  it('boolean to boolean flipped', () => {
    expect(jsoncPatch('{"a": true}', { a: false })).toBe('{"a": false}')
  })
  it('boolean to boolean true to true', () => {
    expect(jsoncPatch('{"a": false}', { a: true })).toBe('{"a": true}')
  })
  it('empty object to non-empty object', () => {
    expect(jsoncPatch('{"a": {}}', { a: { x: 1 } })).toBe('{"a": {"x": 1}}')
  })
  it('non-empty object to empty object', () => {
    expect(jsoncPatch('{"a": {"x":1}}', { a: {} })).toBe('{"a": {}}')
  })
  it('empty array to non-empty array', () => {
    expect(jsoncPatch('{"a": []}', { a: [1] })).toBe('{"a": [1]}')
  })
  it('non-empty array to empty array', () => {
    expect(jsoncPatch('{"a": [1]}', { a: [] })).toBe('{"a": []}')
  })
  it('replace multiple properties independently', () => {
    expect(
      jsoncPatch('{"a": 1, "b": "x", "c": true}', { a: 2, b: 'y', c: false })
    ).toBe('{"a": 2, "b": "y", "c": false}')
  })
  it('replace with same value', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1 })).toBe('{"a": 1}')
  })
})

describe('remove property - various scenarios', () => {
  it('remove one from two', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1 })).toBe('{"a": 1}')
  })
  it('remove first of three', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 2, c: 3 })).toBe(
      '{"b": 2, "c": 3}'
    )
  })
  it('remove middle of three', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, c: 3 })).toBe(
      '{"a": 1, "c": 3}'
    )
  })
  it('remove last of three', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, b: 2 })).toBe(
      '{"a": 1, "b": 2}'
    )
  })
  it('remove first of two', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { b: 2 })).toBe('{"b": 2}')
  })
  it('remove last of two', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1 })).toBe('{"a": 1}')
  })
  it('remove all from two', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', {})).toBe('{}')
  })
  it('remove all from three', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', {})).toBe('{}')
  })
  it('remove all from five', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', {})).toBe('{}')
  })
  it('remove string value', () => {
    expect(jsoncPatch('{"keep": 1, "remove": "bye"}', { keep: 1 })).toBe(
      '{"keep": 1}'
    )
  })
  it('remove number value', () => {
    expect(jsoncPatch('{"keep": "a", "remove": 99}', { keep: 'a' })).toBe(
      '{"keep": "a"}'
    )
  })
  it('remove boolean value', () => {
    expect(jsoncPatch('{"keep": 1, "remove": true}', { keep: 1 })).toBe(
      '{"keep": 1}'
    )
  })
  it('remove null value', () => {
    expect(jsoncPatch('{"keep": 1, "remove": null}', { keep: 1 })).toBe(
      '{"keep": 1}'
    )
  })
  it('remove object value', () => {
    expect(
      jsoncPatch('{"keep": 1, "remove": {"deep": "val"}}', { keep: 1 })
    ).toBe('{"keep": 1}')
  })
  it('remove array value', () => {
    expect(jsoncPatch('{"keep": 1, "remove": [1,2,3]}', { keep: 1 })).toBe(
      '{"keep": 1}'
    )
  })
  it('remove deeply nested property', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1}}, "keep": 2}', { a: { b: {} }, keep: 2 })
    ).toBe('{"a": {"b": {}}, "keep": 2}')
  })
})

describe('mixed operations - add, replace, remove', () => {
  it('add and replace', () => {
    expect(jsoncPatch('{"a": 1}', { a: 99, b: 2 })).toBe('{"a": 99,"b": 2}')
  })
  it('add and remove', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { b: 2, c: 3 })).toBe(
      '{"b": 2,"c": 3}'
    )
  })
  it('replace and remove', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 99, c: 3 })).toBe(
      '{"a": 99, "c": 3}'
    )
  })
  it('add replace and remove all three', () => {
    expect(jsoncPatch('{"w": 1, "x": 2, "y": 3}', { x: 99, z: 4 })).toBe(
      '{"x": 99,"z": 4}'
    )
  })
  it('add replace and remove complex', () => {
    expect(
      jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 10, c: 30, d: 4, e: 5 })
    ).toBe('{"a": 10, "c": 30,"e": 5,"d": 4}')
  })
  it('add two remove one replace one', () => {
    expect(jsoncPatch('{"x": 1, "y": 2, "z": 3}', { y: 99, w: 4, v: 5 })).toBe(
      '{"y": 99,"w": 4,"v": 5}'
    )
  })
  it('add remove same key pattern', () => {
    expect(jsoncPatch('{"old": 1}', { newKey: 2 })).toBe('{"newKey": 2}')
  })
  it('swap values', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 2, b: 1 })).toBe(
      '{"a": 2, "b": 1}'
    )
  })
  it('swap with new key', () => {
    expect(jsoncPatch('{"a": 1}', { a: 2, b: 1 })).toBe('{"a": 2,"b": 1}')
  })
  it('replace first add second', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 99, b: 2, c: 3 })).toBe(
      '{"a": 99, "b": 2,"c": 3}'
    )
  })
  it('replace second add first', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1, b: 99, c: 3 })).toBe(
      '{"a": 1, "b": 99,"c": 3}'
    )
  })
  it('remove first replace second add third', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 99, d: 4 })).toBe(
      '{"b": 99,"d": 4}'
    )
  })
})

describe('nested objects', () => {
  it('add nested property to existing outer', () => {
    expect(
      jsoncPatch('{"outer": {"inner": 1}}', { outer: { inner: 1, inner2: 2 } })
    ).toBe('{"outer": {"inner": 1,"inner2": 2}}')
  })
  it('replace nested property', () => {
    expect(
      jsoncPatch('{"outer": {"inner": 1}}', { outer: { inner: 99 } })
    ).toBe('{"outer": {"inner": 99}}')
  })
  it('remove nested property', () => {
    expect(jsoncPatch('{"outer": {"a": 1, "b": 2}}', { outer: { a: 1 } })).toBe(
      '{"outer": {"a": 1}}'
    )
  })
  it('replace entire nested object', () => {
    expect(jsoncPatch('{"outer": {"a": 1}}', { outer: { b: 2 } })).toBe(
      '{"outer": {"b": 2}}'
    )
  })
  it('deeply nested three levels', () => {
    expect(
      jsoncPatch('{"l1": {"l2": {"l3": 1}}}', { l1: { l2: { l3: 99 } } })
    ).toBe('{"l1": {"l2": {"l3": 99}}}')
  })
  it('add to deeply nested object', () => {
    expect(
      jsoncPatch('{"l1": {"l2": {"a": 1}}}', { l1: { l2: { a: 1, b: 2 } } })
    ).toBe('{"l1": {"l2": {"a": 1,"b": 2}}}')
  })
  it('remove from deeply nested object', () => {
    expect(
      jsoncPatch('{"l1": {"l2": {"a": 1, "b": 2}}}', { l1: { l2: { a: 1 } } })
    ).toBe('{"l1": {"l2": {"a": 1}}}')
  })
  it('add nested empty objects', () => {
    expect(jsoncPatch('{"a": {}}', { a: {} })).toBe('{"a": {}}')
  })
  it('replace nested true with nested false', () => {
    expect(jsoncPatch('{"a": {"b": true}}', { a: { b: false } })).toBe(
      '{"a": {"b": false}}'
    )
  })
  it('replace nested string with nested number', () => {
    expect(jsoncPatch('{"a": {"b": "text"}}', { a: { b: 123 } })).toBe(
      '{"a": {"b": 123}}'
    )
  })
  it('replace nested null with nested object', () => {
    expect(jsoncPatch('{"a": {"b": null}}', { a: { b: { c: 1 } } })).toBe(
      '{"a": {"b": {"c":1}}}'
    )
  })
  it('add three levels deep', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1}}}', { a: { b: { c: 1, d: 2 } } })
    ).toBe('{"a": {"b": {"c": 1,"d": 2}}}')
  })
  it('remove three levels deep', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1, "d": 2}}}', { a: { b: { c: 1 } } })
    ).toBe('{"a": {"b": {"c": 1}}}')
  })
  it('multiple nested replacements', () => {
    expect(jsoncPatch('{"a": {"x": 1, "y": 2}}', { a: { x: 99, y: 2 } })).toBe(
      '{"a": {"x": 99, "y": 2}}'
    )
  })
  it('deep nested with array inside', () => {
    expect(jsoncPatch('{"a": {"b": [1, 2]}}', { a: { b: [3, 4] } })).toBe(
      '{"a": {"b": [3, 4]}}'
    )
  })
  it('nested object to primitive', () => {
    expect(jsoncPatch('{"a": {"b": 1}}', { a: 42 })).toBe('{"a": 42}')
  })
  it('primitive to nested object', () => {
    expect(jsoncPatch('{"a": 42}', { a: { b: 1 } })).toBe('{"a": {"b":1}}')
  })
  it('three levels nested all replaced', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1, "d": 2}}}', {
        a: { b: { c: 99, d: 2 } },
      })
    ).toBe('{"a": {"b": {"c": 99, "d": 2}}}')
  })
  it('four levels of nesting', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1}}}}', {
        a: { b: { c: { d: 99 } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": 99}}}}')
  })
  it('add to four levels nested', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1}}}}', {
        a: { b: { c: { d: 1, e: 2 } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": 1,"e": 2}}}}')
  })
  it('remove from four levels nested', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1, "e": 2}}}}', {
        a: { b: { c: { d: 1 } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": 1}}}}')
  })
})

describe('array operations', () => {
  it('replace array element at index 0', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [99, 2, 3] })).toBe(
      '{"arr": [99, 2, 3]}'
    )
  })
  it('replace array element at index 1', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 99, 3] })).toBe(
      '{"arr": [1, 99, 3]}'
    )
  })
  it('replace array element at index 2', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, 99] })).toBe(
      '{"arr": [1, 2, 99]}'
    )
  })
  it('replace all array elements', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [4, 5, 6] })).toBe(
      '{"arr": [4, 5, 6]}'
    )
  })
  it('replace first two array elements', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [99, 99, 3] })).toBe(
      '{"arr": [99, 99, 3]}'
    )
  })
  it('replace last two array elements', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 99, 99] })).toBe(
      '{"arr": [1, 99, 99]}'
    )
  })
  it('replace element in single-element array', () => {
    expect(jsoncPatch('{"arr": [1]}', { arr: [99] })).toBe('{"arr": [99]}')
  })
  it('replace element in two-element array', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [99, 2] })).toBe(
      '{"arr": [99, 2]}'
    )
  })
  it('replace element with string in array', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: ['a', 2, 3] })).toBe(
      '{"arr": ["a", 2, 3]}'
    )
  })
  it('replace element with null in array', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [null, 2, 3] })).toBe(
      '{"arr": [null, 2, 3]}'
    )
  })
  it('replace element with boolean in array', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [true, 2, 3] })).toBe(
      '{"arr": [true, 2, 3]}'
    )
  })
  it('replace element with object in array', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [{ x: 1 }, 2, 3] })).toBe(
      '{"arr": [{"x":1}, 2, 3]}'
    )
  })
  it('replace element with array in array', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [[10, 20], 2, 3] })).toBe(
      '{"arr": [[10,20], 2, 3]}'
    )
  })
  it('array of strings replace one', () => {
    expect(
      jsoncPatch('{"arr": ["a", "b", "c"]}', { arr: ['a', 'x', 'c'] })
    ).toBe('{"arr": ["a", "x", "c"]}')
  })
  it('array of booleans replace one', () => {
    expect(
      jsoncPatch('{"arr": [true, false, true]}', { arr: [true, true, true] })
    ).toBe('{"arr": [true, true, true]}')
  })
  it('array of objects replace one', () => {
    expect(
      jsoncPatch('{"arr": [{"id": 1}, {"id": 2}]}', {
        arr: [{ id: 1 }, { id: 99 }],
      })
    ).toBe('{"arr": [{"id": 1}, {"id": 99}]}')
  })
  it('array of arrays replace one', () => {
    expect(
      jsoncPatch('{"arr": [[1, 2], [3, 4]]}', {
        arr: [
          [1, 2],
          [99, 99],
        ],
      })
    ).toBe('{"arr": [[1, 2], [99, 99]]}')
  })
  it('nested array inside object replace', () => {
    expect(
      jsoncPatch('{"data": {"items": [1, 2]}}', { data: { items: [3, 4] } })
    ).toBe('{"data": {"items": [3, 4]}}')
  })
  it('mixed nested array object', () => {
    expect(
      jsoncPatch('{"data": [{"x": 1}, {"x": 2}]}', {
        data: [{ x: 1 }, { x: 99 }],
      })
    ).toBe('{"data": [{"x": 1}, {"x": 99}]}')
  })
  it('array identity no change', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, 3] })).toBe(
      '{"arr": [1, 2, 3]}'
    )
  })
  it('empty array identity', () => {
    expect(jsoncPatch('{"arr": []}', { arr: [] })).toBe('{"arr": []}')
  })
})

describe('JSONC comments preservation', () => {
  it('preserve single-line comment at start', () => {
    expect(jsoncPatch('{//comment\n"a": 1}', { a: 2 })).toBe(
      '{//comment\n"a": 2}'
    )
  })
  it('preserve multi-line comment around key', () => {
    expect(jsoncPatch('{/*comment*/"a": 1}', { a: 2 })).toBe(
      '{/*comment*/"a": 2}'
    )
  })
  it('preserve multi-line comment after key', () => {
    expect(jsoncPatch('{"a": /*val*/ 1}', { a: 2 })).toBe('{"a": /*val*/ 2}')
  })
  it('preserve comment with add property', () => {
    expect(jsoncPatch('{/*c*/"a": 1}', { a: 1, b: 2 })).toBe(
      '{/*c*/"a": 1,"b": 2}'
    )
  })
  it('preserve comment with remove property', () => {
    expect(jsoncPatch('{/*c*/"a": 1, "b": 2}', { a: 1 })).toBe('{/*c*/"a": 1}')
  })
  it('preserve comment with replace and add', () => {
    expect(jsoncPatch('{/*c*/"a": 1}', { a: 2, b: 3 })).toBe(
      '{/*c*/"a": 2,"b": 3}'
    )
  })
  it('preserve comment with multiple comments', () => {
    expect(jsoncPatch('{/*a*/"a": 1 /*b*/}', { a: 2 })).toBe(
      '{/*a*/"a": 2 /*b*/}'
    )
  })
  it('preserve comment before closing brace', () => {
    expect(jsoncPatch('{"a": 1/*end*/}', { a: 2 })).toBe('{"a": 2/*end*/}')
  })
  it('preserve two-line comment', () => {
    expect(jsoncPatch('{//line1\n//line2\n"a": 1}', { a: 2 })).toBe(
      '{//line1\n//line2\n"a": 2}'
    )
  })
  it('preserve comment between properties', () => {
    expect(jsoncPatch('{"a": 1,/*sep*/"b": 2}', { a: 1, b: 3 })).toBe(
      '{"a": 1,/*sep*/"b": 3}'
    )
  })
  it('preserve comment on value', () => {
    expect(jsoncPatch('{"a": /* before */ 1 /* after */}', { a: 2 })).toBe(
      '{"a": /* before */ 2 /* after */}'
    )
  })
  it('add with comment present at end', () => {
    expect(jsoncPatch('{"a": 1 // end\n}', { a: 2 })).toBe('{"a": 2 // end\n}')
  })
  it('remove with line comment', () => {
    expect(jsoncPatch('{"a": 1, //x\n"b": 2}', { b: 2 })).toBe('{"b": 2}')
  })
  it('replace with line comment on value', () => {
    expect(jsoncPatch('{"a": 1 // my val\n}', { a: 99 })).toBe(
      '{"a": 99 // my val\n}'
    )
  })
  it('mixed comments and trailing comma', () => {
    expect(jsoncPatch('{/*h*/"a": 1,}', { a: 2 })).toBe('{/*h*/"a": 2,}')
  })
  it('multiple multi-line comments', () => {
    expect(
      jsoncPatch('{/*a*/"x": 1/*b*/,/*c*/"y": 2/*d*/}', { x: 1, y: 3 })
    ).toBe('{/*a*/"x": 1/*b*/,/*c*/"y": 3/*d*/}')
  })
  it('block comment on value then comma', () => {
    expect(jsoncPatch('{"a": 1/*v*/,"b": 2}', { a: 1, b: 3 })).toBe(
      '{"a": 1/*v*/,"b": 3}'
    )
  })
  it('comment before property with add', () => {
    expect(jsoncPatch('{//c\n"a": 1}', { a: 1, b: 2 })).toBe(
      '{//c\n"a": 1,"b": 2}'
    )
  })
  it('remove all with comments', () => {
    expect(jsoncPatch('{/*a*/"a": 1, /*b*/"b": 2}', {})).toBe('{}')
  })
  it('comment on value with type change', () => {
    expect(jsoncPatch('{"a": /*x*/ 1}', { a: 'str' })).toBe(
      '{"a": /*x*/ "str"}'
    )
  })
  it('comment first then add', () => {
    expect(jsoncPatch('{/* my comment */}', { key: 'val' })).toBe(
      '{"key": "val"/* my comment */}'
    )
  })
})

describe('trailing commas', () => {
  it('preserve trailing comma single', () => {
    expect(jsoncPatch('{"a": 1,}', { a: 2 })).toBe('{"a": 2,}')
  })
  it('preserve trailing comma with add', () => {
    expect(jsoncPatch('{"a": 1,}', { a: 1, b: 2 })).toBe('{"a": 1,"b": 2,}')
  })
  it('preserve trailing comma with remove', () => {
    expect(jsoncPatch('{"a": 1, "b": 2,}', { a: 1 })).toBe('{"a": 1,}')
  })
  it('trailing comma with replace and add', () => {
    expect(jsoncPatch('{"a": 1,}', { a: 99, b: 2 })).toBe('{"a": 99,"b": 2,}')
  })
  it('trailing comma with nested', () => {
    expect(jsoncPatch('{"o": {"a": 1,},}', { o: { a: 2 } })).toBe(
      '{"o": {"a": 2,},}'
    )
  })
  it('add without trailing comma becomes trailing comma', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, b: 2 })).toBe('{"a": 1,"b": 2}')
  })
  it('trailing comma removed when all removed', () => {
    expect(jsoncPatch('{"a": 1, "b": 2,}', { a: 1 })).toBe('{"a": 1,}')
  })
  it('trailing comma only in input', () => {
    expect(jsoncPatch('{,"a": 1}', { a: 2 })).toBe('{,"a": 2}')
  })
  it('multiple trailing commas', () => {
    expect(jsoncPatch('{"a": 1,,"b": 2}', { a: 1, b: 3 })).toBe(
      '{"a": 1,,"b": 3}'
    )
  })
  it('nested trailing comma add', () => {
    expect(jsoncPatch('{"o": {"a": 1,},}', { o: { a: 1, b: 2 } })).toBe(
      '{"o": {"a": 1,"b": 2,},}'
    )
  })
})

describe('formatting and whitespace variations', () => {
  it('preserve tabs', () => {
    expect(jsoncPatch('{\n\t"a": 1\n}', { a: 2 })).toBe('{\n\t"a": 2\n}')
  })
  it('preserve 4-space indent', () => {
    expect(jsoncPatch('{\n    "a": 1\n}', { a: 2 })).toBe('{\n    "a": 2\n}')
  })
  it('preserve 3-space indent', () => {
    expect(jsoncPatch('{\n   "a": 1\n}', { a: 2 })).toBe('{\n   "a": 2\n}')
  })
  it('no extra whitespace flatten', () => {
    expect(jsoncPatch('{"a":1}', { a: 2 })).toBe('{"a":2}')
  })
  it('extra spaces around colon', () => {
    expect(jsoncPatch('{"a" : 1}', { a: 2 })).toBe('{"a" : 2}')
  })
  it('extra spaces around key', () => {
    expect(jsoncPatch('{  "a"  : 1}', { a: 2 })).toBe('{  "a"  : 2}')
  })
  it('no space after colon', () => {
    expect(jsoncPatch('{"a":1}', { a: 2 })).toBe('{"a":2}')
  })
  it('multiple spaces before comma', () => {
    expect(jsoncPatch('{"a":1  ,"b":2}', { a: 1, b: 3 })).toBe(
      '{"a":1  ,"b":3}'
    )
  })
  it('newline between properties', () => {
    expect(jsoncPatch('{\n"a": 1,\n"b": 2\n}', { a: 1, b: 3 })).toBe(
      '{\n"a": 1,\n"b": 3\n}'
    )
  })
  it('extra whitespace before closing', () => {
    expect(jsoncPatch('{"a": 1  }', { a: 2 })).toBe('{"a": 2  }')
  })
  it('whitespace after opening brace', () => {
    expect(jsoncPatch('{  "a": 1}', { a: 2 })).toBe('{  "a": 2}')
  })
  it('windows CRLF line endings', () => {
    expect(jsoncPatch('{\r\n"a": 1\r\n}', { a: 2 })).toBe('{\r\n"a": 2\r\n}')
  })
  it('mixed newline styles', () => {
    expect(jsoncPatch('{\n"a": 1\r\n}', { a: 2 })).toBe('{\n"a": 2\r\n}')
  })
  it('space before value', () => {
    expect(jsoncPatch('{"a":  1}', { a: 2 })).toBe('{"a":  2}')
  })
  it('space after value before comma', () => {
    expect(jsoncPatch('{"a": 1 ,"b": 2}', { a: 1, b: 3 })).toBe(
      '{"a": 1 ,"b": 3}'
    )
  })
  it('lots of whitespace everywhere', () => {
    expect(jsoncPatch('{  "a"  :  1  }', { a: 2 })).toBe('{  "a"  :  2  }')
  })
  it('blank lines in object', () => {
    expect(jsoncPatch('{\n\n"a": 1\n\n}', { a: 2 })).toBe('{\n\n"a": 2\n\n}')
  })
  it('nested different indentation', () => {
    expect(jsoncPatch('{"o": {\n  "a": 1\n}}', { o: { a: 2 } })).toBe(
      '{"o": {\n  "a": 2\n}}'
    )
  })
  it('space between keys no space after colon', () => {
    expect(jsoncPatch('{"a":1,"b":2}', { a: 1, b: 3 })).toBe('{"a":1,"b":3}')
  })
})

describe('no-change / identity operations', () => {
  it('no change empty', () => {
    expect(jsoncPatch('{}', {})).toBe('{}')
  })
  it('no change single property', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1 })).toBe('{"a": 1}')
  })
  it('no change two properties', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1, b: 2 })).toBe(
      '{"a": 1, "b": 2}'
    )
  })
  it('no change nested object', () => {
    expect(jsoncPatch('{"a": {"b": 1}}', { a: { b: 1 } })).toBe(
      '{"a": {"b": 1}}'
    )
  })
  it('no change array', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, 3] })).toBe(
      '{"arr": [1, 2, 3]}'
    )
  })
  it('no change string value', () => {
    expect(jsoncPatch('{"s": "hello"}', { s: 'hello' })).toBe('{"s": "hello"}')
  })
  it('no change boolean', () => {
    expect(jsoncPatch('{"b": true}', { b: true })).toBe('{"b": true}')
  })
  it('no change null', () => {
    expect(jsoncPatch('{"n": null}', { n: null })).toBe('{"n": null}')
  })
  it('no change float', () => {
    expect(jsoncPatch('{"f": 3.14}', { f: 3.14 })).toBe('{"f": 3.14}')
  })
  it('no change with comment', () => {
    expect(jsoncPatch('{/*c*/"a": 1}', { a: 1 })).toBe('{/*c*/"a": 1}')
  })
  it('no change with trailing comma', () => {
    expect(jsoncPatch('{"a": 1,}', { a: 1 })).toBe('{"a": 1,}')
  })
  it('no change with tab indent', () => {
    expect(jsoncPatch('{\n\t"a": 1\n}', { a: 1 })).toBe('{\n\t"a": 1\n}')
  })
  it('no change complex nested', () => {
    expect(jsoncPatch('{"a": [1, {"b": 2}]}', { a: [1, { b: 2 }] })).toBe(
      '{"a": [1, {"b": 2}]}'
    )
  })
  it('no change deeply nested', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1}}}}', { a: { b: { c: { d: 1 } } } })
    ).toBe('{"a": {"b": {"c": {"d": 1}}}}')
  })
  it('no change with many keys', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
      })
    ).toBe('{"a":1,"b":2,"c":3,"d":4,"e":5}')
  })
})

describe('edge case values', () => {
  it('empty string value', () => {
    expect(jsoncPatch('{"a": "full"}', { a: '' })).toBe('{"a": ""}')
  })
  it('zero value', () => {
    expect(jsoncPatch('{"a": 100}', { a: 0 })).toBe('{"a": 0}')
  })
  it('negative zero value', () => {
    expect(jsoncPatch('{"a": 0}', { a: -0 })).toBe('{"a": 0}')
  })
  it('max safe integer', () => {
    expect(jsoncPatch('{"a": 0}', { a: 9007199254740991 })).toBe(
      '{"a": 9007199254740991}'
    )
  })
  it('min safe integer', () => {
    expect(jsoncPatch('{"a": 0}', { a: -9007199254740991 })).toBe(
      '{"a": -9007199254740991}'
    )
  })
  it('scientific large', () => {
    expect(jsoncPatch('{"a": 0}', { a: 1e20 })).toBe(
      '{"a": 100000000000000000000}'
    )
  })
  it('scientific small', () => {
    expect(jsoncPatch('{"a": 0}', { a: 1e-5 })).toBe('{"a": 0.00001}')
  })
  it('scientific negative', () => {
    expect(jsoncPatch('{"a": 0}', { a: -1.5e3 })).toBe('{"a": -1500}')
  })
  it('pi precision', () => {
    expect(jsoncPatch('{"a": 0}', { a: 3.141592653589793 })).toBe(
      '{"a": 3.141592653589793}'
    )
  })
  it('small float', () => {
    expect(jsoncPatch('{"a": 0}', { a: 0.001 })).toBe('{"a": 0.001}')
  })
  it('very small float', () => {
    expect(jsoncPatch('{"a": 0}', { a: 0.000001 })).toBe('{"a": 0.000001}')
  })
  it('string with quotes', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'say "hello"' })).toBe(
      '{"a": "say \\"hello\\""}'
    )
  })
  it('string with backslash', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'path\\to\\file' })).toBe(
      '{"a": "path\\\\to\\\\file"}'
    )
  })
  it('string with newline', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'line1\nline2' })).toBe(
      '{"a": "line1\\nline2"}'
    )
  })
  it('string with tab', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'col1\tcol2' })).toBe(
      '{"a": "col1\\tcol2"}'
    )
  })
  it('string with carriage return', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'a\r\nb' })).toBe('{"a": "a\\r\\nb"}')
  })
  it('emoji string', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '🎉' })).toBe('{"a": "🎉"}')
  })
  it('unicode escape equivalent', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\u0048' })).toBe('{"a": "H"}')
  })
  it('string with forward slash', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'a/b/c' })).toBe('{"a": "a/b/c"}')
  })
  it('string with special regex chars', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '.*+?^${}()|[]\\' })).toBe(
      '{"a": ".*+?^${}()|[]\\\\"}'
    )
  })
  it('very long string value', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'abcdefghijklmnopqrstuvwxyz' })).toBe(
      '{"a": "abcdefghijklmnopqrstuvwxyz"}'
    )
  })
  it('numeric string', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '42' })).toBe('{"a": "42"}')
  })
  it('boolean-like string', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'true' })).toBe('{"a": "true"}')
  })
  it('null-like string', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'null' })).toBe('{"a": "null"}')
  })
  it('spaces-only string', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '   ' })).toBe('{"a": "   "}')
  })
  it('json-like string', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '{"b":1}' })).toBe(
      '{"a": "{\\"b\\":1}"}'
    )
  })
  it('html-like string', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '<tag attr="val">' })).toBe(
      '{"a": "<tag attr=\\"val\\">"}'
    )
  })
})

describe('property naming edge cases', () => {
  it('key with underscore', () => {
    expect(jsoncPatch('{}', { my_key: 1 })).toBe('{"my_key": 1}')
  })
  it('key with dollar sign', () => {
    expect(jsoncPatch('{}', { $value: 1 })).toBe('{"$value": 1}')
  })
  it('key starting with number-like', () => {
    expect(jsoncPatch('{}', { '123key': 1 })).toBe('{"123key": 1}')
  })
  it('key with spaces', () => {
    expect(jsoncPatch('{}', { 'my key': 1 })).toBe('{"my key": 1}')
  })
  it('key with special chars', () => {
    expect(jsoncPatch('{}', { 'a-b': 1 })).toBe('{"a-b": 1}')
  })
  it('single letter key', () => {
    expect(jsoncPatch('{}', { x: 1 })).toBe('{"x": 1}')
  })
  it('long key name', () => {
    expect(jsoncPatch('{}', { thisIsAVeryLongPropertyName: 1 })).toBe(
      '{"thisIsAVeryLongPropertyName": 1}'
    )
  })
  it('key with unicode', () => {
    expect(jsoncPatch('{}', { café: 1 })).toBe('{"café": 1}')
  })
  it('replace key with underscore', () => {
    expect(jsoncPatch('{"my_key": 1}', { my_key: 2 })).toBe('{"my_key": 2}')
  })
  it('remove key with special chars', () => {
    expect(jsoncPatch('{"a-b": 1, "keep": 2}', { keep: 2 })).toBe('{"keep": 2}')
  })
  it('add key with number', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, b2: 2 })).toBe('{"a": 1,"b2": 2}')
  })
})

describe('property order sensitivity', () => {
  it('different order in target matches input', () => {
    expect(jsoncPatch('{"b": 2, "a": 1}', { a: 99, b: 2 })).toBe(
      '{"b": 2, "a": 99}'
    )
  })
  it('reverse order target', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { b: 2, a: 1 })).toBe(
      '{"a": 1, "b": 2}'
    )
  })
  it('three keys different order', () => {
    expect(jsoncPatch('{"c": 3, "a": 1, "b": 2}', { a: 99, b: 2, c: 3 })).toBe(
      '{"c": 3, "a": 99, "b": 2}'
    )
  })
  it('order preserved with add', () => {
    expect(jsoncPatch('{"b": 2, "a": 1}', { a: 1, b: 2, c: 3 })).toBe(
      '{"b": 2, "a": 1,"c": 3}'
    )
  })
  it('order after remove', () => {
    expect(jsoncPatch('{"c": 3, "b": 2, "a": 1}', { c: 3, a: 1 })).toBe(
      '{"c": 3, "a": 1}'
    )
  })
  it('order with replace multiple', () => {
    expect(
      jsoncPatch('{"z": 26, "a": 1, "m": 13}', { z: 99, a: 99, m: 99 })
    ).toBe('{"z": 99, "a": 99, "m": 99}')
  })
  it('scrambled order full replacement', () => {
    expect(
      jsoncPatch('{"z": 1, "m": 2, "a": 3}', { a: 99, z: 99, m: 99 })
    ).toBe('{"z": 99, "m": 99, "a": 99}')
  })
})

describe('deeply nested complex operations', () => {
  it('nested add replace remove', () => {
    expect(
      jsoncPatch('{"a": {"b": 1, "c": 2}, "d": 3}', {
        a: { b: 99, c: 2 },
        d: 4,
        e: 5,
      })
    ).toBe('{"a": {"b": 99, "c": 2}, "d": 4,"e": 5}')
  })
  it('nested object fully replaced', () => {
    expect(jsoncPatch('{"a": {"x": 1, "y": 2}}', { a: { z: 3 } })).toBe(
      '{"a": {"z": 3}}'
    )
  })
  it('nested array element changed through object', () => {
    expect(
      jsoncPatch('{"data": {"items": [1, 2, 3]}}', {
        data: { items: [1, 99, 3] },
      })
    ).toBe('{"data": {"items": [1, 99, 3]}}')
  })
  it('triple nested array element change', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": [1, 2]}}}', { a: { b: { c: [99, 2] } } })
    ).toBe('{"a": {"b": {"c": [99, 2]}}}')
  })
  it('nested object add then array replace', () => {
    expect(jsoncPatch('{"x": {"y": [1]}}', { x: { y: [2] } })).toBe(
      '{"x": {"y": [2]}}'
    )
  })
  it('deeply nested add middle', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1}}}', { a: { b: { c: 1, d: 2 } } })
    ).toBe('{"a": {"b": {"c": 1,"d": 2}}}')
  })
  it('deeply nested remove middle', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1, "d": 2}}}', { a: { b: { c: 1 } } })
    ).toBe('{"a": {"b": {"c": 1}}}')
  })
  it('deeply nested all changed', () => {
    expect(
      jsoncPatch('{"l1": {"l2": {"l3": 1}}, "other": 2}', {
        l1: { l2: { l3: 99 } },
        other: 99,
      })
    ).toBe('{"l1": {"l2": {"l3": 99}}, "other": 99}')
  })
  it('five levels deep', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": {"e": 1}}}}}', {
        a: { b: { c: { d: { e: 99 } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e": 99}}}}}')
  })
})

describe('object toggling extremes', () => {
  it('empty to single', () => {
    expect(jsoncPatch('{}', { a: 1 })).toBe('{"a": 1}')
  })
  it('single to empty', () => {
    expect(jsoncPatch('{"a": 1}', {})).toBe('{}')
  })
  it('empty to two', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2 })).toBe('{"b": 2,"a": 1}')
  })
  it('two to empty', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', {})).toBe('{}')
  })
  it('empty to three', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2, c: 3 })).toBe(
      '{"c": 3,"b": 2,"a": 1}'
    )
  })
  it('three to empty', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', {})).toBe('{}')
  })
  it('single to double', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, b: 2 })).toBe('{"a": 1,"b": 2}')
  })
  it('double to single', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1 })).toBe('{"a": 1}')
  })
  it('double to triple', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1, "b": 2,"c": 3}'
    )
  })
  it('triple to double', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, b: 2 })).toBe(
      '{"a": 1, "b": 2}'
    )
  })
  it('single to single different', () => {
    expect(jsoncPatch('{"a": 1}', { a: 2 })).toBe('{"a": 2}')
  })
  it('two to two different values', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 3, b: 4 })).toBe(
      '{"a": 3, "b": 4}'
    )
  })
  it('three to three different values', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 4, b: 5, c: 6 })).toBe(
      '{"a": 4, "b": 5, "c": 6}'
    )
  })
  it('four to one', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 1 })).toBe('{"a":1}')
  })
  it('one to four', () => {
    expect(jsoncPatch('{"a":1}', { a: 1, b: 2, c: 3, d: 4 })).toBe(
      '{"a":1,"d": 4,"c": 3,"b": 2}'
    )
  })
})

describe('null and undefined edge cases', () => {
  it('null to empty object', () => {
    expect(jsoncPatch('{"a": null}', { a: {} })).toBe('{"a": {}}')
  })
  it('empty object to null', () => {
    expect(jsoncPatch('{"a": {}}', { a: null })).toBe('{"a": null}')
  })
  it('null to empty array', () => {
    expect(jsoncPatch('{"a": null}', { a: [] })).toBe('{"a": []}')
  })
  it('empty array to null', () => {
    expect(jsoncPatch('{"a": []}', { a: null })).toBe('{"a": null}')
  })
  it('null to zero', () => {
    expect(jsoncPatch('{"a": null}', { a: 0 })).toBe('{"a": 0}')
  })
  it('zero to null', () => {
    expect(jsoncPatch('{"a": 0}', { a: null })).toBe('{"a": null}')
  })
  it('null to empty string', () => {
    expect(jsoncPatch('{"a": null}', { a: '' })).toBe('{"a": ""}')
  })
  it('empty string to null', () => {
    expect(jsoncPatch('{"a": ""}', { a: null })).toBe('{"a": null}')
  })
  it('null to false', () => {
    expect(jsoncPatch('{"a": null}', { a: false })).toBe('{"a": false}')
  })
  it('false to null', () => {
    expect(jsoncPatch('{"a": false}', { a: null })).toBe('{"a": null}')
  })
  it('null to true', () => {
    expect(jsoncPatch('{"a": null}', { a: true })).toBe('{"a": true}')
  })
  it('true to null', () => {
    expect(jsoncPatch('{"a": true}', { a: null })).toBe('{"a": null}')
  })
  it('null replace with string', () => {
    expect(jsoncPatch('{"a": null}', { a: 'str' })).toBe('{"a": "str"}')
  })
  it('string replace with null', () => {
    expect(jsoncPatch('{"a": "str"}', { a: null })).toBe('{"a": null}')
  })
  it('null to deeply nested', () => {
    expect(jsoncPatch('{"a": null}', { a: { b: { c: 1 } } })).toBe(
      '{"a": {"b":{"c":1}}}'
    )
  })
  it('deeply nested to null', () => {
    expect(jsoncPatch('{"a": {"b": {"c": 1}}}', { a: null })).toBe(
      '{"a": null}'
    )
  })
})

describe('array type mutations', () => {
  it('array of numbers to array of strings', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: ['a', 'b', 'c'] })).toBe(
      '{"arr": ["a", "b", "c"]}'
    )
  })
  it('array of strings to array of numbers', () => {
    expect(jsoncPatch('{"arr": ["a", "b"]}', { arr: [1, 2] })).toBe(
      '{"arr": [1, 2]}'
    )
  })
  it('array of booleans to numbers', () => {
    expect(jsoncPatch('{"arr": [true, false]}', { arr: [1, 0] })).toBe(
      '{"arr": [1, 0]}'
    )
  })
  it('empty array to non-empty', () => {
    expect(jsoncPatch('{"arr": []}', { arr: [1] })).toBe('{"arr": [1]}')
  })
  it('non-empty to empty array', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [] })).toBe('{"arr": []}')
  })
  it('single element array to many', () => {
    expect(jsoncPatch('{"arr": [1]}', { arr: [1, 2, 3, 4, 5] })).toBe(
      '{"arr": [1,2,3,4,5]}'
    )
  })
  it('many element array to single', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [99] })).toBe(
      '{"arr": [99]}'
    )
  })
  it('array of objects replace one object', () => {
    expect(
      jsoncPatch('{"arr": [{"id": 1, "val": "a"}, {"id": 2, "val": "b"}]}', {
        arr: [
          { id: 1, val: 'a' },
          { id: 2, val: 'x' },
        ],
      })
    ).toBe('{"arr": [{"id": 1, "val": "a"}, {"id": 2, "val": "x"}]}')
  })
  it('array of arrays different lengths', () => {
    expect(
      jsoncPatch('{"arr": [[1, 2], [3, 4]]}', { arr: [[1], [3, 4, 5]] })
    ).toBe('{"arr": [[1], [3,4,5]]}')
  })
  it('array with null element', () => {
    expect(
      jsoncPatch('{"arr": [1, null, 3]}', { arr: [1, 'replaced', 3] })
    ).toBe('{"arr": [1, "replaced", 3]}')
  })
  it('array replace with mixed types', () => {
    expect(
      jsoncPatch('{"arr": [1, "two", true]}', { arr: ['one', 2, false] })
    ).toBe('{"arr": ["one", 2, false]}')
  })
})

describe('complex combinations', () => {
  it('nested object in array replaced', () => {
    expect(
      jsoncPatch('{"list": [{"x": 1}, {"y": 2}]}', {
        list: [{ x: 99 }, { y: 2 }],
      })
    ).toBe('{"list": [{"x": 99}, {"y": 2}]}')
  })
  it('array in nested object replaced', () => {
    expect(
      jsoncPatch('{"config": {"items": [1, 2, 3]}}', {
        config: { items: [4, 5, 6] },
      })
    ).toBe('{"config": {"items": [4, 5, 6]}}')
  })
  it('add and remove in nested', () => {
    expect(
      jsoncPatch('{"outer": {"a": 1, "b": 2}}', { outer: { a: 1, c: 3 } })
    ).toBe('{"outer": {"a": 1,"c": 3}}')
  })
  it('replace nested and add sibling', () => {
    expect(
      jsoncPatch('{"nested": {"x": 1}, "keep": 2}', {
        nested: { x: 99 },
        keep: 2,
        extra: 3,
      })
    ).toBe('{"nested": {"x": 99}, "keep": 2,"extra": 3}')
  })
  it('nested array element with comment', () => {
    expect(jsoncPatch('{/*c*/"arr": [1, 2, 3]}', { arr: [1, 99, 3] })).toBe(
      '{/*c*/"arr": [1, 99, 3]}'
    )
  })
  it('nested with trailing comma and comment', () => {
    expect(jsoncPatch('{/*c*/"a": 1,}', { a: 2 })).toBe('{/*c*/"a": 2,}')
  })
  it('fully nested four levels add remove replace', () => {
    expect(
      jsoncPatch('{"l1": {"l2": {"a": 1, "b": 2}, "keep": 3}}', {
        l1: { l2: { a: 99, b: 2 }, keep: 3 },
      })
    ).toBe('{"l1": {"l2": {"a": 99, "b": 2}, "keep": 3}}')
  })
  it('add property with empty nested object', () => {
    expect(jsoncPatch('{"existing": 1}', { existing: 1, newObj: {} })).toBe(
      '{"existing": 1,"newObj": {}}'
    )
  })
  it('add property with nested array', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, items: [1, 2, 3] })).toBe(
      '{"a": 1,"items": [1,2,3]}'
    )
  })
  it('multiple removes and add scattered', () => {
    expect(
      jsoncPatch('{"a": 1, "b": 2, "c": 3, "d": 4}', { b: 99, e: 5 })
    ).toBe('{"b": 99,"e": 5}')
  })
})

describe('special characters in keys and values', () => {
  it('value with unicode escape', () => {
    expect(jsoncPatch('{}', { str: '\u00e9' })).toBe('{"str": "é"}')
  })
  it('value with emoji', () => {
    expect(jsoncPatch('{}', { emoji: '🚀' })).toBe('{"emoji": "🚀"}')
  })
  it('value with multiple emojis', () => {
    expect(jsoncPatch('{}', { emojis: '🎉🚀🌟' })).toBe('{"emojis": "🎉🚀🌟"}')
  })
  it('value with japanese', () => {
    expect(jsoncPatch('{}', { text: 'こんにちは' })).toBe(
      '{"text": "こんにちは"}'
    )
  })
  it('value with chinese', () => {
    expect(jsoncPatch('{}', { text: '你好' })).toBe('{"text": "你好"}')
  })
  it('value with arabic', () => {
    expect(jsoncPatch('{}', { text: 'مرحبا' })).toBe('{"text": "مرحبا"}')
  })
  it('value with special json escapes', () => {
    expect(jsoncPatch('{}', { str: '\b\f\n\r\t\\\"' })).toBe(
      '{"str": "\\b\\f\\n\\r\\t\\\\\\""}'
    )
  })
  it('key with emoji', () => {
    expect(jsoncPatch('{}', { '😀': 1 })).toBe('{"😀": 1}')
  })
  it('value with zero-width space', () => {
    expect(jsoncPatch('{}', { str: '\u200B' })).toBe('{"str": "\u200B"}')
  })
  it('value with combining chars', () => {
    expect(jsoncPatch('{}', { str: 'e\u0301' })).toBe('{"str": "e\u0301"}')
  })
})

describe('empty collections variations', () => {
  it('empty to empty nested', () => {
    expect(jsoncPatch('{"nested": {}}', { nested: {} })).toBe('{"nested": {}}')
  })
  it('nested empty to nested with key', () => {
    expect(
      jsoncPatch('{"outer": {"inner": {}}}', { outer: { inner: { x: 1 } } })
    ).toBe('{"outer": {"inner": {"x": 1}}}')
  })
  it('nested with key to nested empty', () => {
    expect(
      jsoncPatch('{"outer": {"inner": {"x": 1}}}', { outer: { inner: {} } })
    ).toBe('{"outer": {"inner": {}}}')
  })
  it('empty object in array', () => {
    expect(jsoncPatch('{"arr": [{}]}', { arr: [{ a: 1 }] })).toBe(
      '{"arr": [{"a": 1}]}'
    )
  })
  it('non-empty object in array to empty', () => {
    expect(jsoncPatch('{"arr": [{"a": 1}]}', { arr: [{}] })).toBe(
      '{"arr": [{}]}'
    )
  })
  it('nested empty array', () => {
    expect(jsoncPatch('{"a": {"b": []}}', { a: { b: [1] } })).toBe(
      '{"a": {"b": [1]}}'
    )
  })
  it('nested non-empty array to empty', () => {
    expect(jsoncPatch('{"a": {"b": [1]}}', { a: { b: [] } })).toBe(
      '{"a": {"b": []}}'
    )
  })
  it('replace empty array with empty object', () => {
    expect(jsoncPatch('{"a": []}', { a: {} })).toBe('{"a": {}}')
  })
  it('replace empty object with empty array', () => {
    expect(jsoncPatch('{"a": {}}', { a: [] })).toBe('{"a": []}')
  })
  it('nested empty both', () => {
    expect(jsoncPatch('{"a": {"b": {}}}', { a: { b: {} } })).toBe(
      '{"a": {"b": {}}}'
    )
  })
})

describe('edge case - overlapping paths', () => {
  it('parent removed child not present', () => {
    expect(jsoncPatch('{"a": {"b": 1}}', {})).toBe('{}')
  })
  it('parent replaced with primitive', () => {
    expect(jsoncPatch('{"a": {"b": 1, "c": 2}}', { a: 42 })).toBe('{"a": 42}')
  })
  it('primitive replaced with nested parent', () => {
    expect(jsoncPatch('{"a": 42}', { a: { b: 1, c: 2 } })).toBe(
      '{"a": {"b":1,"c":2}}'
    )
  })
  it('deep nested transform to primitive', () => {
    expect(jsoncPatch('{"a": {"b": {"c": 1, "d": 2}}}', { a: { b: 99 } })).toBe(
      '{"a": {"b": 99}}'
    )
  })
  it('array to object and back', () => {
    expect(jsoncPatch('{"x": [1, 2, 3]}', { x: { a: 1 } })).toBe(
      '{"x": {"a":1}}'
    )
  })
  it('object to array and back', () => {
    expect(jsoncPatch('{"x": {"a": 1}}', { x: [1, 2, 3] })).toBe(
      '{"x": [1,2,3]}'
    )
  })
})

describe('multiple operations on same level', () => {
  it('replace two of three', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 99, b: 99, c: 3 })).toBe(
      '{"a": 99, "b": 99, "c": 3}'
    )
  })
  it('add two to existing', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1,"c": 3,"b": 2}'
    )
  })
  it('remove two from five', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', { a: 1, c: 3, e: 5 })
    ).toBe('{"a":1,"c":3,"e":5}')
  })
  it('add three to three', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3}', { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })
    ).toBe('{"a":1,"b":2,"c":3,"f": 6,"e": 5,"d": 4}')
  })
  it('remove three from five', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', { d: 4, e: 5 })).toBe(
      '{"d":4,"e":5}'
    )
  })
  it('replace three of five', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', {
        a: 99,
        b: 99,
        c: 3,
        d: 4,
        e: 99,
      })
    ).toBe('{"a":99,"b":99,"c":3,"d":4,"e":99}')
  })
  it('remove all and add one', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3}', { d: 4 })).toBe('{"d": 4}')
  })
  it('remove all and add two', () => {
    expect(jsoncPatch('{"a":1,"b":2}', { c: 3, d: 4 })).toBe('{"d": 4,"c": 3}')
  })
  it('replace all keys new values', () => {
    expect(jsoncPatch('{"a":1,"b":2}', { a: 99, b: 99 })).toBe(
      '{"a":99,"b":99}'
    )
  })
  it('add two remove two', () => {
    expect(
      jsoncPatch('{"a": 1, "b": 2, "c": 3, "d": 4}', { c: 3, e: 5, f: 6 })
    ).toBe('{"c": 3,"f": 6,"e": 5}')
  })
})

describe('deep nested with arrays at multiple levels', () => {
  it('nested arr in nested obj', () => {
    expect(jsoncPatch('{"a": {"b": [1, 2]}}', { a: { b: [3, 4] } })).toBe(
      '{"a": {"b": [3, 4]}}'
    )
  })
  it('arr of obj with nested arr', () => {
    expect(
      jsoncPatch('{"data": [{"id": 1, "vals": [10, 20]}]}', {
        data: [{ id: 1, vals: [30, 40] }],
      })
    ).toBe('{"data": [{"id": 1, "vals": [30, 40]}]}')
  })
  it('three levels array nesting', () => {
    expect(
      jsoncPatch('{"a": [[[1, 2], [3, 4]], [[5, 6]]]}', {
        a: [
          [
            [99, 2],
            [3, 4],
          ],
          [[5, 6]],
        ],
      })
    ).toBe('{"a": [[[99, 2], [3, 4]], [[5, 6]]]}')
  })
  it('array object mix deep change', () => {
    expect(
      jsoncPatch('{"x": [{"y": [{"z": 1}]}]}', { x: [{ y: [{ z: 99 }] }] })
    ).toBe('{"x": [{"y": [{"z": 99}]}]}')
  })
  it('object array object pattern', () => {
    expect(
      jsoncPatch('{"users": [{"name": "a", "tags": [1, 2]}]}', {
        users: [{ name: 'a', tags: [3, 4] }],
      })
    ).toBe('{"users": [{"name": "a", "tags": [3, 4]}]}')
  })
  it('nested array of objects replace field', () => {
    expect(
      jsoncPatch('{"groups": [{"members": [{"id": 1}]}]}', {
        groups: [{ members: [{ id: 99 }] }],
      })
    ).toBe('{"groups": [{"members": [{"id": 99}]}]}')
  })
})

describe('value with special json characters', () => {
  it('value with escaped backslash', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\\' })).toBe('{"a": "\\\\"}')
  })
  it('value with escaped quote', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\"' })).toBe('{"a": "\\""}')
  })
  it('value with both', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\\\"' })).toBe('{"a": "\\\\\\""}')
  })
  it('value with newline escape', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\n' })).toBe('{"a": "\\n"}')
  })
  it('value with tab escape', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\t' })).toBe('{"a": "\\t"}')
  })
  it('value with carriage return escape', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\r' })).toBe('{"a": "\\r"}')
  })
  it('value with form feed escape', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\f' })).toBe('{"a": "\\f"}')
  })
  it('value with backspace escape', () => {
    expect(jsoncPatch('{"a": "x"}', { a: '\b' })).toBe('{"a": "\\b"}')
  })
  it('value with multiple escapes', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'line1\nline2\tend' })).toBe(
      '{"a": "line1\\nline2\\tend"}'
    )
  })
  it('value with mixed special chars', () => {
    expect(jsoncPatch('{"a": "x"}', { a: 'a"b\\c\nd' })).toBe(
      '{"a": "a\\"b\\\\c\\nd"}'
    )
  })
})

describe('formatting options effect', () => {
  it('trailing comma preserved with replace', () => {
    expect(jsoncPatch('{"a": 1,}', { a: 2 })).toBe('{"a": 2,}')
  })
  it('trailing comma preserved with add', () => {
    expect(jsoncPatch('{"a": 1,}', { a: 1, b: 2 })).toBe('{"a": 1,"b": 2,}')
  })
  it('trailing comma after nested', () => {
    expect(jsoncPatch('{"o": {"x": 1},}', { o: { x: 2 } })).toBe(
      '{"o": {"x": 2},}'
    )
  })
  it('trailing comma with comment', () => {
    expect(jsoncPatch('{/*c*/"a": 1,}', { a: 2 })).toBe('{/*c*/"a": 2,}')
  })
  it('no trailing comma after remove of trailing comma item', () => {
    expect(jsoncPatch('{"a": 1, "b": 2,}', { a: 1 })).toBe('{"a": 1,}')
  })
  it('trailing comma remains with item kept', () => {
    expect(jsoncPatch('{"a": 1, "b": 2,}', { a: 1, b: 3 })).toBe(
      '{"a": 1, "b": 3,}'
    )
  })
  it('add to trailing comma object', () => {
    expect(jsoncPatch('{"a": 1,}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1,"c": 3,"b": 2,}'
    )
  })
})

describe('predicate - skip unknown op', () => {
  it('replace unchanged nested preserves structure', () => {
    expect(jsoncPatch('{"a": {"b": 1}}', { a: { b: 1 } })).toBe(
      '{"a": {"b": 1}}'
    )
  })
  it('empty to empty nested empty', () => {
    expect(jsoncPatch('{"a": {"b": {}}}', { a: { b: {} } })).toBe(
      '{"a": {"b": {}}}'
    )
  })
  it('nested array identity', () => {
    expect(jsoncPatch('{"a": [[1]]}', { a: [[1]] })).toBe('{"a": [[1]]}')
  })
  it('array object array identity', () => {
    expect(jsoncPatch('{"a": [{"b": [1]}]}', { a: [{ b: [1] }] })).toBe(
      '{"a": [{"b": [1]}]}'
    )
  })
  it('multiple keys nested identity', () => {
    expect(
      jsoncPatch('{"a": 1, "b": {"c": 2, "d": [3]}}', {
        a: 1,
        b: { c: 2, d: [3] },
      })
    ).toBe('{"a": 1, "b": {"c": 2, "d": [3]}}')
  })
})

describe('edge cases - numeric property names in object', () => {
  it('key that looks like number', () => {
    expect(jsoncPatch('{"123": "value"}', { '123': 'changed' })).toBe(
      '{"123": "changed"}'
    )
  })
  it('add key that looks like number', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, '0': 'zero' })).toBe(
      '{"a": 1,"0": "zero"}'
    )
  })
  it('remove key that looks like number', () => {
    expect(jsoncPatch('{"123": "val", "keep": 1}', { keep: 1 })).toBe(
      '{"keep": 1}'
    )
  })
  it('replace key that looks like number', () => {
    expect(jsoncPatch('{"0": "old"}', { '0': 'new' })).toBe('{"0": "new"}')
  })
  it('multiple numeric-like keys', () => {
    expect(
      jsoncPatch('{"0": "a", "1": "b", "2": "c"}', {
        '0': 'x',
        '1': 'y',
        '2': 'z',
      })
    ).toBe('{"0": "x", "1": "y", "2": "z"}')
  })
})

describe('edge case - target smaller than source', () => {
  it('shrink from 10 keys to 1', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1 }
      )
    ).toBe('{"a":1}')
  })
  it('shrink from 10 keys to 2', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, j: 10 }
      )
    ).toBe('{"a":1,"j":10}')
  })
  it('shrink from 10 keys to 5', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, c: 3, e: 5, g: 7, i: 9 }
      )
    ).toBe('{"a":1,"c":3,"e":5,"g":7,"i":9}')
  })
  it('grow from 1 key to 10', () => {
    expect(
      jsoncPatch('{"a":1}', {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
      })
    ).toBe(
      '{"a":1,"j": 10,"i": 9,"h": 8,"g": 7,"f": 6,"e": 5,"d": 4,"c": 3,"b": 2}'
    )
  })
  it('grow from 2 keys to 8', () => {
    expect(
      jsoncPatch('{"a":1,"b":2}', {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
      })
    ).toBe('{"a":1,"b":2,"h": 8,"g": 7,"f": 6,"e": 5,"d": 4,"c": 3}')
  })
})

describe('complex array index shifting prevention', () => {
  it('multiple array modifications', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [99, 2, 99, 4, 99] })
    ).toBe('{"arr": [99, 2, 99, 4, 99]}')
  })
  it('array with all elements changed', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: ['a', 'b', 'c'] })).toBe(
      '{"arr": ["a", "b", "c"]}'
    )
  })
  it('reverse array values', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [3, 2, 1] })).toBe(
      '{"arr": [3, 2, 1]}'
    )
  })
  it('alternating array changes', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [99, 2, 99, 4, 99] })
    ).toBe('{"arr": [99, 2, 99, 4, 99]}')
  })
  it('array first and last changed', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [99, 2, 3, 4, 99] })
    ).toBe('{"arr": [99, 2, 3, 4, 99]}')
  })
  it('array all same value changed', () => {
    expect(jsoncPatch('{"arr": [1, 1, 1]}', { arr: [2, 2, 2] })).toBe(
      '{"arr": [2, 2, 2]}'
    )
  })
  it('array descending index changes', () => {
    expect(
      jsoncPatch('{"arr": [0, 1, 2, 3, 4]}', { arr: [4, 3, 2, 1, 0] })
    ).toBe('{"arr": [4, 3, 2, 1, 0]}')
  })
})
