import { describe, expect, it } from 'vitest'
import { jsoncPatch } from '../index'

describe('add property', () => {
  it('add to empty object', () => {
    expect(jsoncPatch('{}', { a: 1 })).toBe('{"a": 1}')
  })
  it('add to single-property object', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, b: 2 })).toBe('{"a": 1,"b": 2}')
  })
  it('add multiple properties', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, b: 2, c: 3, d: 4 })).toBe(
      '{"a": 1,"b": 2,"c": 3,"d": 4}'
    )
  })
  it('add to non-empty object', () => {
    expect(jsoncPatch('{"x": 10, "y": 20}', { x: 10, y: 20, z: 30 })).toBe(
      '{"x": 10, "y": 20,"z": 30}'
    )
  })
  it('add string value', () => {
    expect(jsoncPatch('{}', { name: 'test' })).toBe('{"name": "test"}')
  })
  it('add integer value', () => {
    expect(jsoncPatch('{}', { count: 100 })).toBe('{"count": 100}')
  })
  it('add float value', () => {
    expect(jsoncPatch('{}', { pi: 3.14159 })).toBe('{"pi": 3.14159}')
  })
  it('add boolean true', () => {
    expect(jsoncPatch('{}', { flag: true })).toBe('{"flag": true}')
  })
  it('add boolean false', () => {
    expect(jsoncPatch('{}', { flag: false })).toBe('{"flag": false}')
  })
  it('add null value', () => {
    expect(jsoncPatch('{}', { value: null })).toBe('{"value": null}')
  })
  it('add empty object', () => {
    expect(jsoncPatch('{}', { nested: {} })).toBe('{"nested": {}}')
  })
  it('add empty array', () => {
    expect(jsoncPatch('{}', { items: [] })).toBe('{"items": []}')
  })
  it('add array with mixed values', () => {
    expect(jsoncPatch('{}', { items: [1, 'two', false, null] })).toBe(
      '{"items": [1,"two",false,null]}'
    )
  })
  it('add to spaced empty object', () => {
    expect(jsoncPatch('{ }', { newKey: 'added' })).toBe('{"newKey": "added" }')
  })
  it('add to compact single property', () => {
    expect(jsoncPatch('{"a":1}', { a: 1, newKey: 'added' })).toBe(
      '{"a":1,"newKey": "added"}'
    )
  })
  it('add to two-property object', () => {
    expect(jsoncPatch('{"a":1,"b":2}', { a: 1, b: 2, newKey: 'added' })).toBe(
      '{"a":1,"b":2,"newKey": "added"}'
    )
  })
})

describe('replace property', () => {
  it('replace number with string', () => {
    expect(jsoncPatch('{"a": 1}', { a: 'hello' })).toBe('{"a": "hello"}')
  })
  it('replace string with number', () => {
    expect(jsoncPatch('{"a": "hello"}', { a: 42 })).toBe('{"a": 42}')
  })
  it('replace boolean with null', () => {
    expect(jsoncPatch('{"a": true}', { a: null })).toBe('{"a": null}')
  })
  it('replace null with object', () => {
    expect(jsoncPatch('{"a": null}', { a: { b: 1 } })).toBe('{"a": {"b":1}}')
  })
  it('replace string with array', () => {
    expect(jsoncPatch('{"a": "text"}', { a: [1, 2, 3] })).toBe('{"a": [1,2,3]}')
  })
  it('replace array with string', () => {
    expect(jsoncPatch('{"a": [1,2,3]}', { a: 'text' })).toBe('{"a": "text"}')
  })
  it('replace object with number', () => {
    expect(jsoncPatch('{"a": {"b":1}}', { a: 99 })).toBe('{"a": 99}')
  })
  it('replace multiple properties', () => {
    expect(
      jsoncPatch('{"a": 1, "b": "x", "c": true}', { a: 2, b: 'y', c: false })
    ).toBe('{"a": 2, "b": "y", "c": false}')
  })
  it('replace same type different value', () => {
    expect(jsoncPatch('{"a": 10}', { a: 999 })).toBe('{"a": 999}')
  })
  it('replace with empty string', () => {
    expect(jsoncPatch('{"a": "full"}', { a: '' })).toBe('{"a": ""}')
  })
  it('replace with zero', () => {
    expect(jsoncPatch('{"a": 100}', { a: 0 })).toBe('{"a": 0}')
  })
  it('replace with negative number', () => {
    expect(jsoncPatch('{"a": 5}', { a: -42 })).toBe('{"a": -42}')
  })
  it('replace only property', () => {
    expect(jsoncPatch('{"a": 1}', { a: 99 })).toBe('{"a": 99}')
  })
  it('replace first of two', () => {
    expect(jsoncPatch('{"a":1,"b":2}', { a: 99, b: 2 })).toBe('{"a":99,"b":2}')
  })
  it('replace second of two', () => {
    expect(jsoncPatch('{"a":1,"b":2}', { a: 1, b: 99 })).toBe('{"a":1,"b":99}')
  })
  it('replace middle of three', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3}', { a: 1, b: 99, c: 3 })).toBe(
      '{"a":1,"b":99,"c":3}'
    )
  })
})

describe('remove property', () => {
  it('remove single property', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1 })).toBe('{"a": 1}')
  })
  it('remove multiple properties', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3, "d": 4}', { b: 2, c: 3 })).toBe(
      '{"b": 2, "c": 3}'
    )
  })
  it('remove all leaving empty object', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', {})).toBe('{}')
  })
  it('remove string value property', () => {
    expect(jsoncPatch('{"keep": 1, "remove": "bye"}', { keep: 1 })).toBe(
      '{"keep": 1}'
    )
  })
  it('remove object value property', () => {
    expect(
      jsoncPatch('{"keep": 1, "remove": {"nested": "deep"}}', { keep: 1 })
    ).toBe('{"keep": 1}')
  })
  it('remove array value property', () => {
    expect(jsoncPatch('{"keep": 1, "remove": [1,2,3]}', { keep: 1 })).toBe(
      '{"keep": 1}'
    )
  })
  it('remove null value property', () => {
    expect(jsoncPatch('{"keep": 1, "remove": null}', { keep: 1 })).toBe(
      '{"keep": 1}'
    )
  })
  it('remove first alphabetically', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 2, c: 3 })).toBe(
      '{"b": 2, "c": 3}'
    )
  })
  it('remove last alphabetically', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, b: 2 })).toBe(
      '{"a": 1, "b": 2}'
    )
  })
})

describe('mixed operations', () => {
  it('add and replace simultaneously', () => {
    expect(jsoncPatch('{"a": 1}', { a: 99, b: 2 })).toBe('{"a": 99,"b": 2}')
  })
  it('add and remove simultaneously', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { b: 2, c: 3 })).toBe(
      '{"b": 2,"c": 3}'
    )
  })
  it('replace and remove simultaneously', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 99, c: 3 })).toBe(
      '{"a": 99, "c": 3}'
    )
  })
  it('add replace and remove simultaneously', () => {
    expect(
      jsoncPatch('{"x": 1, "y": 2, "z": 3}', { x: 99, z: null, w: 4 })
    ).toBe('{"x": 99, "z": null,"w": 4}')
  })
})

describe('object toggling', () => {
  it('toggle empty to single', () => {
    expect(jsoncPatch('{}', { a: 1 })).toBe('{"a": 1}')
  })
  it('toggle single to empty', () => {
    expect(jsoncPatch('{"a": 1}', {})).toBe('{}')
  })
  it('toggle replace single', () => {
    expect(jsoncPatch('{"a": 1}', { a: 2 })).toBe('{"a": 2}')
  })
  it('toggle two to empty', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', {})).toBe('{}')
  })
  it('toggle single to three', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1,"b": 2,"c": 3}'
    )
  })
  it('toggle three to single', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1 })).toBe('{"a": 1}')
  })
  it('toggle reorder same values', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { b: 2, a: 1 })).toBe(
      '{"a": 1, "b": 2}'
    )
  })
})

describe('value round-trips', () => {
  it('round-trip hello world', () => {
    expect(jsoncPatch('{"a": "start"}', { a: 'hello world' })).toBe(
      '{"a": "hello world"}'
    )
  })
  it('round-trip empty string', () => {
    expect(jsoncPatch('{"a": "start"}', { a: '' })).toBe('{"a": ""}')
  })
  it('round-trip spaces string', () => {
    expect(jsoncPatch('{"a": "start"}', { a: '   ' })).toBe('{"a": "   "}')
  })
  it('round-trip numeric string', () => {
    expect(jsoncPatch('{"a": "start"}', { a: '42' })).toBe('{"a": "42"}')
  })
  it('round-trip true string', () => {
    expect(jsoncPatch('{"a": "start"}', { a: 'true' })).toBe('{"a": "true"}')
  })
  it('round-trip null string', () => {
    expect(jsoncPatch('{"a": "start"}', { a: 'null' })).toBe('{"a": "null"}')
  })
  it('round-trip json string', () => {
    expect(jsoncPatch('{"a": "start"}', { a: '{"a":1}' })).toBe(
      '{"a": "{\\"a\\":1}"}'
    )
  })
  it('round-trip newline string', () => {
    expect(jsoncPatch('{"a": "start"}', { a: 'line1\nline2' })).toBe(
      '{"a": "line1\\nline2"}'
    )
  })
  it('round-trip tab string', () => {
    expect(jsoncPatch('{"a": "start"}', { a: 'tab\there' })).toBe(
      '{"a": "tab\\there"}'
    )
  })
  it('round-trip emoji string', () => {
    expect(
      jsoncPatch('{"a": "start"}', { a: 'unicode emoji \uD83C\uDF89' })
    ).toBe('{"a": "unicode emoji 🎉"}')
  })
  it('round-trip special chars', () => {
    expect(
      jsoncPatch('{"a": "start"}', { a: 'special chars: !@#$%^&*()' })
    ).toBe('{"a": "special chars: !@#$%^&*()"}')
  })
  it('round-trip quotes string', () => {
    expect(
      jsoncPatch('{"a": "start"}', { a: 'quotes: "double" and \'single\'' })
    ).toBe('{"a": "quotes: \\"double\\" and \'single\'"}')
  })
  it('round-trip backslash string', () => {
    expect(
      jsoncPatch('{"a": "start"}', { a: 'backslash: \\path\\to\\file' })
    ).toBe('{"a": "backslash: \\\\path\\\\to\\\\file"}')
  })
})

describe('numeric keys and values', () => {
  it('numeric zero', () => {
    expect(jsoncPatch('{"a": 100}', { a: 0 })).toBe('{"a": 0}')
  })
  it('numeric negative', () => {
    expect(jsoncPatch('{"a": 0}', { a: -1 })).toBe('{"a": -1}')
  })
  it('numeric large integer', () => {
    expect(jsoncPatch('{"a": 0}', { a: 9007199254740991 })).toBe(
      '{"a": 9007199254740991}'
    )
  })
  it('numeric float', () => {
    expect(jsoncPatch('{"a": 0}', { a: 3.141592653589793 })).toBe(
      '{"a": 3.141592653589793}'
    )
  })
  it('numeric negative float', () => {
    expect(jsoncPatch('{"a": 0}', { a: -2.71828 })).toBe('{"a": -2.71828}')
  })
  it('numeric scientific large', () => {
    expect(jsoncPatch('{"a": 0}', { a: 1e10 })).toBe('{"a": 10000000000}')
  })
  it('numeric scientific small', () => {
    expect(jsoncPatch('{"a": 0}', { a: 1e-10 })).toBe('{"a": 1e-10}')
  })
})

describe('empty and minimal', () => {
  it('empty to empty', () => {
    expect(jsoncPatch('{}', {})).toBe('{}')
  })
  it('single to empty', () => {
    expect(jsoncPatch('{"a": 1}', {})).toBe('{}')
  })
  it('empty to single', () => {
    expect(jsoncPatch('{}', { a: 1 })).toBe('{"a": 1}')
  })
  it('many to single', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', { a: 1 })).toBe(
      '{"a":1}'
    )
  })
  it('single to many', () => {
    expect(jsoncPatch('{"a":1}', { a: 1, b: 2, c: 3, d: 4, e: 5 })).toBe(
      '{"a":1,"b": 2,"c": 3,"d": 4,"e": 5}'
    )
  })
})

describe('multi-value type mutations', () => {
  it('type number to string', () => {
    expect(jsoncPatch('{"key": 1}', { key: '1' })).toBe('{"key": "1"}')
  })
  it('type string to number', () => {
    expect(jsoncPatch('{"key": "1"}', { key: '1' })).toBe('{"key": "1"}')
  })
  it('type boolean to number', () => {
    expect(jsoncPatch('{"key": true}', { key: 1 })).toBe('{"key": 1}')
  })
  it('type number to boolean', () => {
    expect(jsoncPatch('{"key": 1}', { key: true })).toBe('{"key": true}')
  })
  it('type null to boolean', () => {
    expect(jsoncPatch('{"key": null}', { key: false })).toBe('{"key": false}')
  })
  it('type boolean to null', () => {
    expect(jsoncPatch('{"key": false}', { key: null })).toBe('{"key": null}')
  })
  it('type empty array to empty object', () => {
    expect(jsoncPatch('{"key": []}', { key: {} })).toBe('{"key": {}}')
  })
  it('type empty object to empty array', () => {
    expect(jsoncPatch('{"key": {}}', { key: [] })).toBe('{"key": []}')
  })
  it('type empty string to null', () => {
    expect(jsoncPatch('{"key": ""}', { key: null })).toBe('{"key": null}')
  })
  it('type null to empty string', () => {
    expect(jsoncPatch('{"key": null}', { key: '' })).toBe('{"key": ""}')
  })
})

describe('property order sensitivity', () => {
  it('same keys different order in input JSON', () => {
    expect(jsoncPatch('{"b": 2, "a": 1}', { a: 99, b: 2 })).toBe(
      '{"b": 2, "a": 99}'
    )
  })
})
