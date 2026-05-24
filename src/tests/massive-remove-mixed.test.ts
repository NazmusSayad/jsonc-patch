import { describe, expect, it } from 'vitest'
import { jsoncPatch } from '../index'

describe('remove a from pairs', () => {
  it('remove a from ab', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { b: 2 })).toBe('{"b": 2}')
  })
  it('remove a from abc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 2, c: 3 })).toBe(
      '{"b": 2, "c": 3}'
    )
  })
  it('remove a from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { b: 2, c: 3, d: 4 })).toBe(
      '{"b":2,"c":3,"d":4}'
    )
  })
  it('remove a from abcde', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', { b: 2, c: 3, d: 4, e: 5 })
    ).toBe('{"b":2,"c":3,"d":4,"e":5}')
  })
  it('remove a from abcdef', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}', {
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
      })
    ).toBe('{"b":2,"c":3,"d":4,"e":5,"f":6}')
  })
})

describe('remove b from pairs', () => {
  it('remove b from ab', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1 })).toBe('{"a": 1}')
  })
  it('remove b from abc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, c: 3 })).toBe(
      '{"a": 1, "c": 3}'
    )
  })
  it('remove b from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 1, c: 3, d: 4 })).toBe(
      '{"a":1,"c":3,"d":4}'
    )
  })
  it('remove b from abcde', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', { a: 1, c: 3, d: 4, e: 5 })
    ).toBe('{"a":1,"c":3,"d":4,"e":5}')
  })
  it('remove b from abcdef', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}', {
        a: 1,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
      })
    ).toBe('{"a":1,"c":3,"d":4,"e":5,"f":6}')
  })
})

describe('remove c from triples', () => {
  it('remove c from abc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, b: 2 })).toBe(
      '{"a": 1, "b": 2}'
    )
  })
  it('remove c from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 1, b: 2, d: 4 })).toBe(
      '{"a":1,"b":2,"d":4}'
    )
  })
  it('remove c from abcde', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', { a: 1, b: 2, d: 4, e: 5 })
    ).toBe('{"a":1,"b":2,"d":4,"e":5}')
  })
  it('remove c from abcdef', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}', {
        a: 1,
        b: 2,
        d: 4,
        e: 5,
        f: 6,
      })
    ).toBe('{"a":1,"b":2,"d":4,"e":5,"f":6}')
  })
})

describe('remove d through f', () => {
  it('remove d from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a":1,"b":2,"c":3}'
    )
  })
  it('remove d from abcde', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', { a: 1, b: 2, c: 3, e: 5 })
    ).toBe('{"a":1,"b":2,"c":3,"e":5}')
  })
  it('remove e from abcde', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', { a: 1, b: 2, c: 3, d: 4 })
    ).toBe('{"a":1,"b":2,"c":3,"d":4}')
  })
  it('remove f from abcdef', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}', {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
      })
    ).toBe('{"a":1,"b":2,"c":3,"d":4,"e":5}')
  })
})

describe('remove two from sets', () => {
  it('remove ab from abc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { c: 3 })).toBe('{"c": 3}')
  })
  it('remove ac from abc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 2 })).toBe('{"b": 2}')
  })
  it('remove bc from abc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1 })).toBe('{"a": 1}')
  })
  it('remove ab from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { c: 3, d: 4 })).toBe(
      '{"c":3,"d":4}'
    )
  })
  it('remove ac from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { b: 2, d: 4 })).toBe(
      '{"b":2,"d":4}'
    )
  })
  it('remove ad from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { b: 2, c: 3 })).toBe(
      '{"b":2,"c":3}'
    )
  })
  it('remove bc from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 1, d: 4 })).toBe(
      '{"a":1,"d":4}'
    )
  })
  it('remove bd from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 1, c: 3 })).toBe(
      '{"a":1,"c":3}'
    )
  })
  it('remove cd from abcd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 1, b: 2 })).toBe(
      '{"a":1,"b":2}'
    )
  })
})

describe('remove N from 10', () => {
  it('remove 1 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9 }
      )
    ).toBe('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9}')
  })
  it('remove 2 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 }
      )
    ).toBe('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8}')
  })
  it('remove 3 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }
      )
    ).toBe('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7}')
  })
  it('remove 4 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
      )
    ).toBe('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}')
  })
  it('remove 5 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, b: 2, c: 3, d: 4, e: 5 }
      )
    ).toBe('{"a":1,"b":2,"c":3,"d":4,"e":5}')
  })
  it('remove 6 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, b: 2, c: 3, d: 4 }
      )
    ).toBe('{"a":1,"b":2,"c":3,"d":4}')
  })
  it('remove 7 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, b: 2, c: 3 }
      )
    ).toBe('{"a":1,"b":2,"c":3}')
  })
  it('remove 8 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1, b: 2 }
      )
    ).toBe('{"a":1,"b":2}')
  })
  it('remove 9 from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 1 }
      )
    ).toBe('{"a":1}')
  })
  it('remove all from 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        {}
      )
    ).toBe('{}')
  })
  it('remove all from 5', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', {})).toBe('{}')
  })
  it('remove all from 3', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', {})).toBe('{}')
  })
  it('remove all from 2', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', {})).toBe('{}')
  })
  it('remove all from 1', () => {
    expect(jsoncPatch('{"a": 1}', {})).toBe('{}')
  })
})

describe('add + replace mixed', () => {
  it('add b replace a', () => {
    expect(jsoncPatch('{"a": 1}', { a: 99, b: 2 })).toBe('{"a": 99,"b": 2}')
  })
  it('add c replace a', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 99, b: 2, c: 3 })).toBe(
      '{"a": 99, "b": 2,"c": 3}'
    )
  })
  it('add c replace b', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1, b: 99, c: 3 })).toBe(
      '{"a": 1, "b": 99,"c": 3}'
    )
  })
  it('add d replace a', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3}', { a: 99, b: 2, c: 3, d: 4 })).toBe(
      '{"a":99,"b":2,"c":3,"d": 4}'
    )
  })
  it('add d replace b', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3}', { a: 1, b: 99, c: 3, d: 4 })).toBe(
      '{"a":1,"b":99,"c":3,"d": 4}'
    )
  })
  it('add d replace c', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3}', { a: 1, b: 2, c: 99, d: 4 })).toBe(
      '{"a":1,"b":2,"c":99,"d": 4}'
    )
  })
  it('add bc replace a', () => {
    expect(jsoncPatch('{"a": 1}', { a: 99, b: 2, c: 3 })).toBe(
      '{"a": 99,"b": 2,"c": 3}'
    )
  })
  it('add two replace one', () => {
    expect(jsoncPatch('{"x": 1}', { x: 99, y: 2, z: 3 })).toBe(
      '{"x": 99,"y": 2,"z": 3}'
    )
  })
  it('add three replace one', () => {
    expect(jsoncPatch('{"p": 1}', { p: 99, q: 2, r: 3, s: 4 })).toBe(
      '{"p": 99,"q": 2,"r": 3,"s": 4}'
    )
  })
  it('add de replace ab', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3}', { a: 99, b: 99, c: 3, d: 4, e: 5 })
    ).toBe('{"a":99,"b":99,"c":3,"d": 4,"e": 5}')
  })
})

describe('add + remove mixed', () => {
  it('add c remove a', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { b: 2, c: 3 })).toBe(
      '{"b": 2,"c": 3}'
    )
  })
  it('add c remove b', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 1, c: 3 })).toBe(
      '{"a": 1,"c": 3}'
    )
  })
  it('add d remove a', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 2, c: 3, d: 4 })).toBe(
      '{"b": 2, "c": 3,"d": 4}'
    )
  })
  it('add d remove b', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, c: 3, d: 4 })).toBe(
      '{"a": 1, "c": 3,"d": 4}'
    )
  })
  it('add d remove c', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 1, b: 2, d: 4 })).toBe(
      '{"a": 1, "b": 2,"d": 4}'
    )
  })
  it('add de remove ab', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { c: 3, d: 4, e: 5 })).toBe(
      '{"c": 3,"d": 4,"e": 5}'
    )
  })
  it('add two remove one', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 2, d: 4, e: 5 })).toBe(
      '{"b": 2,"d": 4,"e": 5}'
    )
  })
  it('add one remove two', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { d: 4 })).toBe('{"d": 4}')
  })
  it('add three remove three', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}', {
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
      })
    ).toBe('{"d":4,"e":5,"f":6,"g": 7,"h": 8,"i": 9}')
  })
})

describe('replace + remove mixed', () => {
  it('replace a remove b', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { a: 99 })).toBe('{"a": 99}')
  })
  it('replace b remove a', () => {
    expect(jsoncPatch('{"a": 1, "b": 2}', { b: 99 })).toBe('{"b": 99}')
  })
  it('replace a remove bc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 99 })).toBe('{"a": 99}')
  })
  it('replace b remove ac', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 99 })).toBe('{"b": 99}')
  })
  it('replace c remove ab', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { c: 99 })).toBe('{"c": 99}')
  })
  it('replace ab remove cd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 99, b: 99 })).toBe(
      '{"a":99,"b":99}'
    )
  })
  it('replace ac remove bd', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 99, c: 99 })).toBe(
      '{"a":99,"c":99}'
    )
  })
  it('replace ad remove bc', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 99, d: 99 })).toBe(
      '{"a":99,"d":99}'
    )
  })
  it('replace bc remove ad', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { b: 99, c: 99 })).toBe(
      '{"b":99,"c":99}'
    )
  })
  it('replace bd remove ac', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { b: 99, d: 99 })).toBe(
      '{"b":99,"d":99}'
    )
  })
  it('replace cd remove ab', () => {
    expect(jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { c: 99, d: 99 })).toBe(
      '{"c":99,"d":99}'
    )
  })
})

describe('add replace remove all three', () => {
  it('add d replace a remove bc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 99, d: 4 })).toBe(
      '{"a": 99,"d": 4}'
    )
  })
  it('add d replace b remove ac', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { b: 99, d: 4 })).toBe(
      '{"b": 99,"d": 4}'
    )
  })
  it('add d replace c remove ab', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { c: 99, d: 4 })).toBe(
      '{"c": 99,"d": 4}'
    )
  })
  it('add de replace a remove bc', () => {
    expect(jsoncPatch('{"a": 1, "b": 2, "c": 3}', { a: 99, d: 4, e: 5 })).toBe(
      '{"a": 99,"d": 4,"e": 5}'
    )
  })
  it('add ef replace ab remove cd', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4}', { a: 99, b: 99, e: 5, f: 6 })
    ).toBe('{"a":99,"b":99,"e": 5,"f": 6}')
  })
  it('add three replace two remove two', () => {
    expect(
      jsoncPatch('{"a":1,"b":2,"c":3,"d":4,"e":5}', {
        a: 99,
        d: 99,
        f: 6,
        g: 7,
        h: 8,
      })
    ).toBe('{"a":99,"d":99,"f": 6,"g": 7,"h": 8}')
  })
  it('complex wxyz', () => {
    expect(
      jsoncPatch('{"w": 1, "x": 2, "y": 3, "z": 4}', {
        x: 99,
        y: 99,
        a: 10,
        b: 20,
      })
    ).toBe('{"x": 99, "y": 99,"a": 10,"b": 20}')
  })
  it('full replacement of all keys', () => {
    expect(jsoncPatch('{"old1": 1, "old2": 2}', { new1: 3, new2: 4 })).toBe(
      '{"new1": 3,"new2": 4}'
    )
  })
  it('full replacement three new', () => {
    expect(jsoncPatch('{"x":1,"y":2,"z":3}', { a: 10, b: 20, c: 30 })).toBe(
      '{"a": 10,"b": 20,"c": 30}'
    )
  })
})

describe('add N properties to empty', () => {
  it('add 1 prop', () => {
    expect(jsoncPatch('{}', { a: 1 })).toBe('{"a": 1}')
  })
  it('add 2 props', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2 })).toBe('{"a": 1,"b": 2}')
  })
  it('add 3 props', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2, c: 3 })).toBe(
      '{"a": 1,"b": 2,"c": 3}'
    )
  })
  it('add 4 props', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2, c: 3, d: 4 })).toBe(
      '{"a": 1,"b": 2,"c": 3,"d": 4}'
    )
  })
  it('add 5 props', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2, c: 3, d: 4, e: 5 })).toBe(
      '{"a": 1,"b": 2,"c": 3,"d": 4,"e": 5}'
    )
  })
  it('add 6 props', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })).toBe(
      '{"a": 1,"b": 2,"c": 3,"d": 4,"e": 5,"f": 6}'
    )
  })
  it('add 7 props', () => {
    expect(jsoncPatch('{}', { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 })).toBe(
      '{"a": 1,"b": 2,"c": 3,"d": 4,"e": 5,"f": 6,"g": 7}'
    )
  })
  it('add 8 props', () => {
    expect(
      jsoncPatch('{}', { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 })
    ).toBe('{"a": 1,"b": 2,"c": 3,"d": 4,"e": 5,"f": 6,"g": 7,"h": 8}')
  })
  it('add 9 props', () => {
    expect(
      jsoncPatch('{}', { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9 })
    ).toBe('{"a": 1,"b": 2,"c": 3,"d": 4,"e": 5,"f": 6,"g": 7,"h": 8,"i": 9}')
  })
  it('add 10 props', () => {
    expect(
      jsoncPatch('{}', {
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
      '{"a": 1,"b": 2,"c": 3,"d": 4,"e": 5,"f": 6,"g": 7,"h": 8,"i": 9,"j": 10}'
    )
  })
})

describe('replace N of 10', () => {
  it('replace 1 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }
      )
    ).toBe('{"a":99,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}')
  })
  it('replace 2 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }
      )
    ).toBe('{"a":99,"b":99,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}')
  })
  it('replace 3 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 99, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }
      )
    ).toBe('{"a":99,"b":99,"c":99,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}')
  })
  it('replace 4 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 99, d: 99, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }
      )
    ).toBe('{"a":99,"b":99,"c":99,"d":99,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}')
  })
  it('replace 5 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 99, d: 99, e: 99, f: 6, g: 7, h: 8, i: 9, j: 10 }
      )
    ).toBe(
      '{"a":99,"b":99,"c":99,"d":99,"e":99,"f":6,"g":7,"h":8,"i":9,"j":10}'
    )
  })
  it('replace 6 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 99, d: 99, e: 99, f: 99, g: 7, h: 8, i: 9, j: 10 }
      )
    ).toBe(
      '{"a":99,"b":99,"c":99,"d":99,"e":99,"f":99,"g":7,"h":8,"i":9,"j":10}'
    )
  })
  it('replace 7 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 99, d: 99, e: 99, f: 99, g: 99, h: 8, i: 9, j: 10 }
      )
    ).toBe(
      '{"a":99,"b":99,"c":99,"d":99,"e":99,"f":99,"g":99,"h":8,"i":9,"j":10}'
    )
  })
  it('replace 8 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 99, d: 99, e: 99, f: 99, g: 99, h: 99, i: 9, j: 10 }
      )
    ).toBe(
      '{"a":99,"b":99,"c":99,"d":99,"e":99,"f":99,"g":99,"h":99,"i":9,"j":10}'
    )
  })
  it('replace 9 of 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 99, d: 99, e: 99, f: 99, g: 99, h: 99, i: 99, j: 10 }
      )
    ).toBe(
      '{"a":99,"b":99,"c":99,"d":99,"e":99,"f":99,"g":99,"h":99,"i":99,"j":10}'
    )
  })
  it('replace all 10', () => {
    expect(
      jsoncPatch(
        '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10}',
        { a: 99, b: 99, c: 99, d: 99, e: 99, f: 99, g: 99, h: 99, i: 99, j: 99 }
      )
    ).toBe(
      '{"a":99,"b":99,"c":99,"d":99,"e":99,"f":99,"g":99,"h":99,"i":99,"j":99}'
    )
  })
})

describe('value edge cases - empty string', () => {
  it('add empty string', () => {
    expect(jsoncPatch('{}', { s: '' })).toBe('{"s": ""}')
  })
  it('replace to empty string', () => {
    expect(jsoncPatch('{"a": "full"}', { a: '' })).toBe('{"a": ""}')
  })
  it('replace from empty string', () => {
    expect(jsoncPatch('{"a": ""}', { a: 'full' })).toBe('{"a": "full"}')
  })
  it('empty string to number', () => {
    expect(jsoncPatch('{"a": ""}', { a: 0 })).toBe('{"a": 0}')
  })
  it('empty string to null', () => {
    expect(jsoncPatch('{"a": ""}', { a: null })).toBe('{"a": null}')
  })
  it('empty string to bool', () => {
    expect(jsoncPatch('{"a": ""}', { a: true })).toBe('{"a": true}')
  })
  it('empty string to object', () => {
    expect(jsoncPatch('{"a": ""}', { a: {} })).toBe('{"a": {}}')
  })
  it('empty string to array', () => {
    expect(jsoncPatch('{"a": ""}', { a: [] })).toBe('{"a": []}')
  })
})

describe('value edge cases - null', () => {
  it('null to string', () => {
    expect(jsoncPatch('{"a": null}', { a: 'val' })).toBe('{"a": "val"}')
  })
  it('null to zero', () => {
    expect(jsoncPatch('{"a": null}', { a: 0 })).toBe('{"a": 0}')
  })
  it('null to one', () => {
    expect(jsoncPatch('{"a": null}', { a: 1 })).toBe('{"a": 1}')
  })
  it('null to negative', () => {
    expect(jsoncPatch('{"a": null}', { a: -1 })).toBe('{"a": -1}')
  })
  it('null to true', () => {
    expect(jsoncPatch('{"a": null}', { a: true })).toBe('{"a": true}')
  })
  it('null to false', () => {
    expect(jsoncPatch('{"a": null}', { a: false })).toBe('{"a": false}')
  })
  it('null to empty obj', () => {
    expect(jsoncPatch('{"a": null}', { a: {} })).toBe('{"a": {}}')
  })
  it('null to empty arr', () => {
    expect(jsoncPatch('{"a": null}', { a: [] })).toBe('{"a": []}')
  })
  it('null to null', () => {
    expect(jsoncPatch('{"a": null}', { a: null })).toBe('{"a": null}')
  })
})

describe('value edge cases - boolean', () => {
  it('true to false', () => {
    expect(jsoncPatch('{"a": true}', { a: false })).toBe('{"a": false}')
  })
  it('false to true', () => {
    expect(jsoncPatch('{"a": false}', { a: true })).toBe('{"a": true}')
  })
  it('true to string', () => {
    expect(jsoncPatch('{"a": true}', { a: 'true' })).toBe('{"a": "true"}')
  })
  it('false to string', () => {
    expect(jsoncPatch('{"a": false}', { a: 'false' })).toBe('{"a": "false"}')
  })
  it('true to number', () => {
    expect(jsoncPatch('{"a": true}', { a: 1 })).toBe('{"a": 1}')
  })
  it('false to number', () => {
    expect(jsoncPatch('{"a": false}', { a: 0 })).toBe('{"a": 0}')
  })
  it('true to null', () => {
    expect(jsoncPatch('{"a": true}', { a: null })).toBe('{"a": null}')
  })
  it('false to null', () => {
    expect(jsoncPatch('{"a": false}', { a: null })).toBe('{"a": null}')
  })
  it('true to obj', () => {
    expect(jsoncPatch('{"a": true}', { a: { b: 1 } })).toBe('{"a": {"b":1}}')
  })
  it('false to arr', () => {
    expect(jsoncPatch('{"a": false}', { a: [1] })).toBe('{"a": [1]}')
  })
})

describe('value edge cases - number zero', () => {
  it('zero to string', () => {
    expect(jsoncPatch('{"a": 0}', { a: 'zero' })).toBe('{"a": "zero"}')
  })
  it('zero to one', () => {
    expect(jsoncPatch('{"a": 0}', { a: 1 })).toBe('{"a": 1}')
  })
  it('zero to negative', () => {
    expect(jsoncPatch('{"a": 0}', { a: -1 })).toBe('{"a": -1}')
  })
  it('zero to float', () => {
    expect(jsoncPatch('{"a": 0}', { a: 0.5 })).toBe('{"a": 0.5}')
  })
  it('zero to false', () => {
    expect(jsoncPatch('{"a": 0}', { a: false })).toBe('{"a": false}')
  })
  it('zero to null', () => {
    expect(jsoncPatch('{"a": 0}', { a: null })).toBe('{"a": null}')
  })
  it('zero to obj', () => {
    expect(jsoncPatch('{"a": 0}', { a: {} })).toBe('{"a": {}}')
  })
  it('zero to arr', () => {
    expect(jsoncPatch('{"a": 0}', { a: [] })).toBe('{"a": []}')
  })
})

describe('value edge cases - numeric extremes', () => {
  it('large to small', () => {
    expect(jsoncPatch('{"a": 1000000}', { a: 1 })).toBe('{"a": 1}')
  })
  it('small to large', () => {
    expect(jsoncPatch('{"a": 1}', { a: 1000000 })).toBe('{"a": 1000000}')
  })
  it('float to int', () => {
    expect(jsoncPatch('{"a": 3.14}', { a: 3 })).toBe('{"a": 3}')
  })
  it('int to float', () => {
    expect(jsoncPatch('{"a": 3}', { a: 3.14 })).toBe('{"a": 3.14}')
  })
  it('neg to pos', () => {
    expect(jsoncPatch('{"a": -5}', { a: 5 })).toBe('{"a": 5}')
  })
  it('pos to neg', () => {
    expect(jsoncPatch('{"a": 5}', { a: -5 })).toBe('{"a": -5}')
  })
})
