import { describe, expect, it } from 'vitest'
import { jsoncPatch } from '../index'

describe('array operations - index 0', () => {
  it('arr0 in [1,2]', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [99, 2] })).toBe(
      '{"arr": [99, 2]}'
    )
  })
  it('arr0 in [1,2,3]', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [99, 2, 3] })).toBe(
      '{"arr": [99, 2, 3]}'
    )
  })
  it('arr0 in [1,2,3,4]', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3, 4]}', { arr: [99, 2, 3, 4] })).toBe(
      '{"arr": [99, 2, 3, 4]}'
    )
  })
  it('arr0 in [1,2,3,4,5]', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [99, 2, 3, 4, 5] })
    ).toBe('{"arr": [99, 2, 3, 4, 5]}')
  })
  it('arr0 to string', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: ['a', 2] })).toBe(
      '{"arr": ["a", 2]}'
    )
  })
  it('arr0 to bool', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [true, 2] })).toBe(
      '{"arr": [true, 2]}'
    )
  })
  it('arr0 to null', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [null, 2] })).toBe(
      '{"arr": [null, 2]}'
    )
  })
  it('arr0 to obj', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [{ x: 1 }, 2] })).toBe(
      '{"arr": [{"x":1}, 2]}'
    )
  })
  it('arr0 in single', () => {
    expect(jsoncPatch('{"arr": [1]}', { arr: [99] })).toBe('{"arr": [99]}')
  })
})

describe('array operations - index 1', () => {
  it('arr1 in [1,2]', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [1, 99] })).toBe(
      '{"arr": [1, 99]}'
    )
  })
  it('arr1 in [1,2,3]', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 99, 3] })).toBe(
      '{"arr": [1, 99, 3]}'
    )
  })
  it('arr1 in [1,2,3,4]', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3, 4]}', { arr: [1, 99, 3, 4] })).toBe(
      '{"arr": [1, 99, 3, 4]}'
    )
  })
  it('arr1 in [1,2,3,4,5]', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [1, 99, 3, 4, 5] })
    ).toBe('{"arr": [1, 99, 3, 4, 5]}')
  })
  it('arr1 to string', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [1, 'b'] })).toBe(
      '{"arr": [1, "b"]}'
    )
  })
  it('arr1 to bool', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [1, false] })).toBe(
      '{"arr": [1, false]}'
    )
  })
  it('arr1 to null', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [1, null] })).toBe(
      '{"arr": [1, null]}'
    )
  })
  it('arr1 to obj', () => {
    expect(jsoncPatch('{"arr": [1, 2]}', { arr: [1, { y: 2 }] })).toBe(
      '{"arr": [1, {"y":2}]}'
    )
  })
})

describe('array operations - index 2', () => {
  it('arr2 in [1,2,3]', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, 99] })).toBe(
      '{"arr": [1, 2, 99]}'
    )
  })
  it('arr2 in [1,2,3,4]', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3, 4]}', { arr: [1, 2, 99, 4] })).toBe(
      '{"arr": [1, 2, 99, 4]}'
    )
  })
  it('arr2 in [1,2,3,4,5]', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [1, 2, 99, 4, 5] })
    ).toBe('{"arr": [1, 2, 99, 4, 5]}')
  })
  it('arr2 to string', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, 'c'] })).toBe(
      '{"arr": [1, 2, "c"]}'
    )
  })
  it('arr2 to bool', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, true] })).toBe(
      '{"arr": [1, 2, true]}'
    )
  })
  it('arr2 to null', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, null] })).toBe(
      '{"arr": [1, 2, null]}'
    )
  })
  it('arr2 to obj', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, { z: 3 }] })).toBe(
      '{"arr": [1, 2, {"z":3}]}'
    )
  })
})

describe('array operations - multiple indices', () => {
  it('arr0 and arr1', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [99, 99, 3] })).toBe(
      '{"arr": [99, 99, 3]}'
    )
  })
  it('arr1 and arr2', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 99, 99] })).toBe(
      '{"arr": [1, 99, 99]}'
    )
  })
  it('arr0 and arr2', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [99, 2, 99] })).toBe(
      '{"arr": [99, 2, 99]}'
    )
  })
  it('all three', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [99, 99, 99] })).toBe(
      '{"arr": [99, 99, 99]}'
    )
  })
  it('all four', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3, 4]}', { arr: [99, 99, 99, 99] })).toBe(
      '{"arr": [99, 99, 99, 99]}'
    )
  })
  it('arr0 and arr3', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3, 4]}', { arr: [99, 2, 3, 99] })).toBe(
      '{"arr": [99, 2, 3, 99]}'
    )
  })
  it('arr1 and arr3', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3, 4]}', { arr: [1, 99, 3, 99] })).toBe(
      '{"arr": [1, 99, 3, 99]}'
    )
  })
  it('arr0 arr2 arr4', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [99, 2, 99, 4, 99] })
    ).toBe('{"arr": [99, 2, 99, 4, 99]}')
  })
  it('first last five', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [99, 2, 3, 4, 99] })
    ).toBe('{"arr": [99, 2, 3, 4, 99]}')
  })
  it('first last six', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5, 6]}', { arr: [99, 2, 3, 4, 5, 99] })
    ).toBe('{"arr": [99, 2, 3, 4, 5, 99]}')
  })
  it('middle of five', () => {
    expect(
      jsoncPatch('{"arr": [1, 2, 3, 4, 5]}', { arr: [1, 2, 99, 4, 5] })
    ).toBe('{"arr": [1, 2, 99, 4, 5]}')
  })
})

describe('array with typed elements', () => {
  it('string arr replace', () => {
    expect(
      jsoncPatch('{"arr": ["a", "b", "c"]}', { arr: ['a', 'x', 'c'] })
    ).toBe('{"arr": ["a", "x", "c"]}')
  })
  it('bool arr replace', () => {
    expect(
      jsoncPatch('{"arr": [true, false, true]}', { arr: [true, true, true] })
    ).toBe('{"arr": [true, true, true]}')
  })
  it('null arr replace', () => {
    expect(
      jsoncPatch('{"arr": [null, null, null]}', { arr: [null, 'x', null] })
    ).toBe('{"arr": [null, "x", null]}')
  })
  it('obj arr replace one', () => {
    expect(
      jsoncPatch('{"arr": [{"a":1}, {"b":2}, {"c":3}]}', {
        arr: [{ a: 1 }, { b: 99 }, { c: 3 }],
      })
    ).toBe('{"arr": [{"a":1}, {"b":99}, {"c":3}]}')
  })
  it('arr of arrs replace', () => {
    expect(
      jsoncPatch('{"arr": [[1], [2], [3]]}', { arr: [[1], [99], [3]] })
    ).toBe('{"arr": [[1], [99], [3]]}')
  })
  it('mixed arr replace', () => {
    expect(
      jsoncPatch('{"arr": [1, "two", true, null]}', {
        arr: [99, 'two', false, null],
      })
    ).toBe('{"arr": [99, "two", false, null]}')
  })
})

describe('nested single level', () => {
  it('replace inner', () => {
    expect(jsoncPatch('{"o": {"a": 1}}', { o: { a: 99 } })).toBe(
      '{"o": {"a": 99}}'
    )
  })
  it('add inner', () => {
    expect(jsoncPatch('{"o": {"a": 1}}', { o: { a: 1, b: 2 } })).toBe(
      '{"o": {"a": 1,"b": 2}}'
    )
  })
  it('remove inner', () => {
    expect(jsoncPatch('{"o": {"a": 1, "b": 2}}', { o: { a: 1 } })).toBe(
      '{"o": {"a": 1}}'
    )
  })
  it('replace whole inner', () => {
    expect(jsoncPatch('{"o": {"a": 1}}', { o: { b: 2 } })).toBe(
      '{"o": {"b": 2}}'
    )
  })
  it('inner string to num', () => {
    expect(jsoncPatch('{"o": {"a": "text"}}', { o: { a: 42 } })).toBe(
      '{"o": {"a": 42}}'
    )
  })
  it('inner num to bool', () => {
    expect(jsoncPatch('{"o": {"a": 1}}', { o: { a: false } })).toBe(
      '{"o": {"a": false}}'
    )
  })
  it('inner bool to null', () => {
    expect(jsoncPatch('{"o": {"a": true}}', { o: { a: null } })).toBe(
      '{"o": {"a": null}}'
    )
  })
  it('inner null to obj', () => {
    expect(jsoncPatch('{"o": {"a": null}}', { o: { a: { x: 1 } } })).toBe(
      '{"o": {"a": {"x":1}}}'
    )
  })
  it('inner obj to arr', () => {
    expect(jsoncPatch('{"o": {"a": {}}}', { o: { a: [1] } })).toBe(
      '{"o": {"a": [1]}}'
    )
  })
  it('inner arr to obj', () => {
    expect(jsoncPatch('{"o": {"a": [1]}}', { o: { a: {} } })).toBe(
      '{"o": {"a": {}}}'
    )
  })
  it('obj to primitive', () => {
    expect(jsoncPatch('{"o": {"a": 1}}', { o: 42 })).toBe('{"o": 42}')
  })
  it('primitive to obj', () => {
    expect(jsoncPatch('{"o": 42}', { o: { a: 1 } })).toBe('{"o": {"a":1}}')
  })
  it('obj to arr', () => {
    expect(jsoncPatch('{"o": {"a": 1}}', { o: [1, 2] })).toBe('{"o": [1,2]}')
  })
  it('arr to obj', () => {
    expect(jsoncPatch('{"o": [1, 2]}', { o: { a: 1 } })).toBe('{"o": {"a":1}}')
  })
})

describe('nested two levels', () => {
  it('replace 2lvl inner', () => {
    expect(jsoncPatch('{"a": {"b": {"c": 1}}}', { a: { b: { c: 99 } } })).toBe(
      '{"a": {"b": {"c": 99}}}'
    )
  })
  it('add 2lvl inner', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1}}}', { a: { b: { c: 1, d: 2 } } })
    ).toBe('{"a": {"b": {"c": 1,"d": 2}}}')
  })
  it('remove 2lvl inner', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1, "d": 2}}}', { a: { b: { c: 1 } } })
    ).toBe('{"a": {"b": {"c": 1}}}')
  })
  it('replace whole 2lvl', () => {
    expect(jsoncPatch('{"a": {"b": {"c": 1}}}', { a: { b: { x: 99 } } })).toBe(
      '{"a": {"b": {"x": 99}}}'
    )
  })
  it('2lvl string to num', () => {
    expect(jsoncPatch('{"a": {"b": {"c": "x"}}}', { a: { b: { c: 1 } } })).toBe(
      '{"a": {"b": {"c": 1}}}'
    )
  })
  it('2lvl num to bool', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 1}}}', { a: { b: { c: false } } })
    ).toBe('{"a": {"b": {"c": false}}}')
  })
  it('2lvl bool to null', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": true}}}', { a: { b: { c: null } } })
    ).toBe('{"a": {"b": {"c": null}}}')
  })
  it('2lvl null to obj', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": null}}}', { a: { b: { c: { d: 1 } } } })
    ).toBe('{"a": {"b": {"c": {"d":1}}}}')
  })
  it('2lvl to primitive', () => {
    expect(jsoncPatch('{"a": {"b": {"c": 1}}}', { a: { b: 99 } })).toBe(
      '{"a": {"b": 99}}'
    )
  })
  it('primitive to 2lvl', () => {
    expect(jsoncPatch('{"a": {"b": 99}}', { a: { b: { c: 1 } } })).toBe(
      '{"a": {"b": {"c":1}}}'
    )
  })
})

describe('nested three levels', () => {
  it('replace 3lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1}}}}', {
        a: { b: { c: { d: 99 } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": 99}}}}')
  })
  it('add 3lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1}}}}', {
        a: { b: { c: { d: 1, e: 2 } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": 1,"e": 2}}}}')
  })
  it('remove 3lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1, "e": 2}}}}', {
        a: { b: { c: { d: 1 } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": 1}}}}')
  })
  it('3lvl string to num', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": "x"}}}}', {
        a: { b: { c: { d: 1 } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": 1}}}}')
  })
  it('3lvl num to bool', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1}}}}', {
        a: { b: { c: { d: false } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": false}}}}')
  })
  it('3lvl bool to null', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": true}}}}', {
        a: { b: { c: { d: null } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": null}}}}')
  })
  it('3lvl null to obj', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": null}}}}', {
        a: { b: { c: { d: { e: 1 } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e":1}}}}}')
  })
  it('3lvl to primitive', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1}}}}', { a: { b: { c: 99 } } })
    ).toBe('{"a": {"b": {"c": 99}}}')
  })
  it('primitive to 3lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": 99}}}', { a: { b: { c: { d: 1 } } } })
    ).toBe('{"a": {"b": {"c": {"d":1}}}}')
  })
})

describe('nested four levels', () => {
  it('replace 4lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": {"e": 1}}}}}', {
        a: { b: { c: { d: { e: 99 } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e": 99}}}}}')
  })
  it('add 4lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": {"e": 1}}}}}', {
        a: { b: { c: { d: { e: 1, f: 2 } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e": 1,"f": 2}}}}}')
  })
  it('remove 4lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": {"e": 1, "f": 2}}}}}', {
        a: { b: { c: { d: { e: 1 } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e": 1}}}}}')
  })
  it('4lvl all replaced', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": {"e": 1}}}}}', {
        a: { b: { c: { d: { e: 99 } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e": 99}}}}}')
  })
})

describe('nested five levels', () => {
  it('replace 5lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": {"e": {"f": 1}}}}}}', {
        a: { b: { c: { d: { e: { f: 99 } } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e": {"f": 99}}}}}}')
  })
  it('add 5lvl', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": {"e": {"f": 1}}}}}}', {
        a: { b: { c: { d: { e: { f: 1, g: 2 } } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e": {"f": 1,"g": 2}}}}}}')
  })
  it('5lvl all replaced', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": {"e": {"f": 1}}}}}}', {
        a: { b: { c: { d: { e: { f: 99 } } } } },
      })
    ).toBe('{"a": {"b": {"c": {"d": {"e": {"f": 99}}}}}}')
  })
})

describe('remove value types', () => {
  it('remove string val', () => {
    expect(jsoncPatch('{"a": "hello", "b": 2}', { a: 'hello' })).toBe(
      '{"a": "hello"}'
    )
  })
  it('remove num val', () => {
    expect(jsoncPatch('{"a": 1, "b": "world"}', { a: 1 })).toBe('{"a": 1}')
  })
  it('remove bool val', () => {
    expect(jsoncPatch('{"a": true, "b": 2}', { b: 2 })).toBe('{"b": 2}')
  })
  it('remove null val', () => {
    expect(jsoncPatch('{"a": null, "b": 2}', { b: 2 })).toBe('{"b": 2}')
  })
  it('remove obj val', () => {
    expect(jsoncPatch('{"a": {"x":1}, "b": 2}', { b: 2 })).toBe('{"b": 2}')
  })
  it('remove arr val', () => {
    expect(jsoncPatch('{"a": [1,2,3], "b": 2}', { b: 2 })).toBe('{"b": 2}')
  })
  it('remove nested obj', () => {
    expect(jsoncPatch('{"a": 1, "b": {"c": 2}}', { a: 1 })).toBe('{"a": 1}')
  })
  it('remove nested arr', () => {
    expect(jsoncPatch('{"a": 1, "b": [1,2]}', { a: 1 })).toBe('{"a": 1}')
  })
})

describe('add to existing objects', () => {
  it('add to existing one', () => {
    expect(jsoncPatch('{"x": 1}', { x: 1, y: 2 })).toBe('{"x": 1,"y": 2}')
  })
  it('add to existing two', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1, "b": 2,"c": 3}'
    )
  })
  it('add to existing three', () => {
    expect(
      jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, b: 2, c: 3, d: 4 })
    ).toBe('{"a": 1, "b": 2, "c": 3,"d": 4}')
  })
  it('add two to existing', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1,"b": 2,"c": 3}'
    )
  })
  it('add to compact', () => {
    expect(jsoncPatch('{"a":1}', { a: 1, b: 2 })).toBe('{"a":1,"b": 2}')
  })
  it('add to compact two props', () => {
    expect(jsoncPatch('{"a":1,"b":2}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a":1,"b":2,"c": 3}'
    )
  })
})

describe('identity - no change', () => {
  it('empty identity', () => {
    expect(jsoncPatch('{}', {})).toBe('{}')
  })
  it('single identity', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1 })).toBe('{"a": 1}')
  })
  it('two identity', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1, b: 2 })).toBe(
      '{"a": 1, "b": 2}'
    )
  })
  it('nested identity', () => {
    expect(jsoncPatch('{"a": {"b": 1}}', { a: { b: 1 } })).toBe(
      '{"a": {"b": 1}}'
    )
  })
  it('arr identity', () => {
    expect(jsoncPatch('{"arr": [1, 2, 3]}', { arr: [1, 2, 3] })).toBe(
      '{"arr": [1, 2, 3]}'
    )
  })
  it('string identity', () => {
    expect(jsoncPatch('{"s": "hello"}', { s: 'hello' })).toBe('{"s": "hello"}')
  })
  it('bool identity', () => {
    expect(jsoncPatch('{"b": true}', { b: true })).toBe('{"b": true}')
  })
  it('null identity', () => {
    expect(jsoncPatch('{"n": null}', { n: null })).toBe('{"n": null}')
  })
  it('float identity', () => {
    expect(jsoncPatch('{"f": 3.14}', { f: 3.14 })).toBe('{"f": 3.14}')
  })
  it('complex nested identity', () => {
    expect(jsoncPatch('{"a": [1, {"b": 2}]}', { a: [1, { b: 2 }] })).toBe(
      '{"a": [1, {"b": 2}]}'
    )
  })
  it('deep identity', () => {
    expect(
      jsoncPatch('{"a": {"b": {"c": {"d": 1}}}}', { a: { b: { c: { d: 1 } } } })
    ).toBe('{"a": {"b": {"c": {"d": 1}}}}')
  })
})

describe('toggle extremes', () => {
  it('empty to single', () => {
    expect(jsoncPatch('{}', { a: 1 })).toBe('{"a": 1}')
  })
  it('single to empty', () => {
    expect(jsoncPatch('{"a": 1}', {})).toBe('{}')
  })
  it('empty to two', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2 })).toBe('{"a": 1,"b": 2}')
  })
  it('two to empty', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', {})).toBe('{}')
  })
  it('empty to three', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1,"b": 2,"c": 3}'
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
  it('single val change', () => {
    expect(jsoncPatch('{"a": 1}', { a: 2 })).toBe('{"a": 2}')
  })
  it('two vals change', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 3, b: 4 })).toBe(
      '{"a": 3, "b": 4}'
    )
  })
  it('three vals change', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 4, b: 5, c: 6 })).toBe(
      '{"a": 4, "b": 5, "c": 6}'
    )
  })
  it('four to one', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 1 })).toBe('{"a":1}')
  })
  it('one to four', () => {
    expect(jsoncPatch('{"a":1}', { a: 1, b: 2, c: 3, d: 4 })).toBe(
      '{"a":1,"b": 2,"c": 3,"d": 4}'
    )
  })
})
