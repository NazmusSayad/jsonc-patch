import { describe, expect, it } from 'vitest'
import { jsoncPatch } from '../index'

describe('add property a with value types', () => {
  it('add a string hello', () => {
    expect(jsoncPatch('{}', { a: 'hello' })).toBe('{"a": "hello"}')
  })
  it('add a string empty', () => {
    expect(jsoncPatch('{}', { a: '' })).toBe('{"a": ""}')
  })
  it('add a string space', () => {
    expect(jsoncPatch('{}', { a: ' ' })).toBe('{"a": " "}')
  })
  it('add a string numeric', () => {
    expect(jsoncPatch('{}', { a: '123' })).toBe('{"a": "123"}')
  })
  it('add a string true', () => {
    expect(jsoncPatch('{}', { a: 'true' })).toBe('{"a": "true"}')
  })
  it('add a string null', () => {
    expect(jsoncPatch('{}', { a: 'null' })).toBe('{"a": "null"}')
  })
  it('add a string special', () => {
    expect(jsoncPatch('{}', { a: '!@#' })).toBe('{"a": "!@#"}')
  })
  it('add a string slash', () => {
    expect(jsoncPatch('{}', { a: 'a/b' })).toBe('{"a": "a/b"}')
  })
  it('add a string underscore', () => {
    expect(jsoncPatch('{}', { a: 'hello_world' })).toBe('{"a": "hello_world"}')
  })
  it('add a string parens', () => {
    expect(jsoncPatch('{}', { a: '()' })).toBe('{"a": "()"}')
  })
  it('add a number zero', () => {
    expect(jsoncPatch('{}', { a: 0 })).toBe('{"a": 0}')
  })
  it('add a number one', () => {
    expect(jsoncPatch('{}', { a: 1 })).toBe('{"a": 1}')
  })
  it('add a number negative', () => {
    expect(jsoncPatch('{}', { a: -1 })).toBe('{"a": -1}')
  })
  it('add a number float', () => {
    expect(jsoncPatch('{}', { a: 3.14 })).toBe('{"a": 3.14}')
  })
  it('add a number neg float', () => {
    expect(jsoncPatch('{}', { a: -2.5 })).toBe('{"a": -2.5}')
  })
  it('add a number large', () => {
    expect(jsoncPatch('{}', { a: 1000000 })).toBe('{"a": 1000000}')
  })
  it('add a number small', () => {
    expect(jsoncPatch('{}', { a: 0.001 })).toBe('{"a": 0.001}')
  })
  it('add a boolean true', () => {
    expect(jsoncPatch('{}', { a: true })).toBe('{"a": true}')
  })
  it('add a boolean false', () => {
    expect(jsoncPatch('{}', { a: false })).toBe('{"a": false}')
  })
  it('add a null', () => {
    expect(jsoncPatch('{}', { a: null })).toBe('{"a": null}')
  })
  it('add a empty object', () => {
    expect(jsoncPatch('{}', { a: {} })).toBe('{"a": {}}')
  })
  it('add a object one key', () => {
    expect(jsoncPatch('{}', { a: { x: 1 } })).toBe('{"a": {"x":1}}')
  })
  it('add a object two keys', () => {
    expect(jsoncPatch('{}', { a: { x: 1, y: 2 } })).toBe('{"a": {"x":1,"y":2}}')
  })
  it('add a empty array', () => {
    expect(jsoncPatch('{}', { a: [] })).toBe('{"a": []}')
  })
  it('add a array one element', () => {
    expect(jsoncPatch('{}', { a: [1] })).toBe('{"a": [1]}')
  })
  it('add a array two elements', () => {
    expect(jsoncPatch('{}', { a: [1, 2] })).toBe('{"a": [1,2]}')
  })
  it('add a array three elements', () => {
    expect(jsoncPatch('{}', { a: [1, 2, 3] })).toBe('{"a": [1,2,3]}')
  })
  it('add a array mixed', () => {
    expect(jsoncPatch('{}', { a: [1, 'b', true] })).toBe('{"a": [1,"b",true]}')
  })
  it('add a nested object', () => {
    expect(jsoncPatch('{}', { a: { b: { c: 1 } } })).toBe(
      '{"a": {"b":{"c":1}}}'
    )
  })
  it('add a nested array', () => {
    expect(
      jsoncPatch('{}', {
        a: [
          [1, 2],
          [3, 4],
        ],
      })
    ).toBe('{"a": [[1,2],[3,4]]}')
  })
})

describe('add property b with value types', () => {
  it('add b string alpha', () => {
    expect(jsoncPatch('{}', { b: 'alpha' })).toBe('{"b": "alpha"}')
  })
  it('add b string beta', () => {
    expect(jsoncPatch('{}', { b: 'beta' })).toBe('{"b": "beta"}')
  })
  it('add b string gamma', () => {
    expect(jsoncPatch('{}', { b: 'gamma' })).toBe('{"b": "gamma"}')
  })
  it('add b string delta', () => {
    expect(jsoncPatch('{}', { b: 'delta' })).toBe('{"b": "delta"}')
  })
  it('add b string epsilon', () => {
    expect(jsoncPatch('{}', { b: 'epsilon' })).toBe('{"b": "epsilon"}')
  })
  it('add b number 10', () => {
    expect(jsoncPatch('{}', { b: 10 })).toBe('{"b": 10}')
  })
  it('add b number 20', () => {
    expect(jsoncPatch('{}', { b: 20 })).toBe('{"b": 20}')
  })
  it('add b number 30', () => {
    expect(jsoncPatch('{}', { b: 30 })).toBe('{"b": 30}')
  })
  it('add b number 40', () => {
    expect(jsoncPatch('{}', { b: 40 })).toBe('{"b": 40}')
  })
  it('add b number 50', () => {
    expect(jsoncPatch('{}', { b: 50 })).toBe('{"b": 50}')
  })
  it('add b number negative', () => {
    expect(jsoncPatch('{}', { b: -10 })).toBe('{"b": -10}')
  })
  it('add b number float', () => {
    expect(jsoncPatch('{}', { b: 1.5 })).toBe('{"b": 1.5}')
  })
  it('add b number high', () => {
    expect(jsoncPatch('{}', { b: 99.99 })).toBe('{"b": 99.99}')
  })
  it('add b boolean true', () => {
    expect(jsoncPatch('{}', { b: true })).toBe('{"b": true}')
  })
  it('add b boolean false', () => {
    expect(jsoncPatch('{}', { b: false })).toBe('{"b": false}')
  })
  it('add b null', () => {
    expect(jsoncPatch('{}', { b: null })).toBe('{"b": null}')
  })
  it('add b empty object', () => {
    expect(jsoncPatch('{}', { b: {} })).toBe('{"b": {}}')
  })
  it('add b object', () => {
    expect(jsoncPatch('{}', { b: { k: 'v' } })).toBe('{"b": {"k":"v"}}')
  })
  it('add b empty array', () => {
    expect(jsoncPatch('{}', { b: [] })).toBe('{"b": []}')
  })
  it('add b number array', () => {
    expect(jsoncPatch('{}', { b: [10, 20, 30] })).toBe('{"b": [10,20,30]}')
  })
  it('add b string array', () => {
    expect(jsoncPatch('{}', { b: ['x', 'y'] })).toBe('{"b": ["x","y"]}')
  })
})

describe('add property c with value types', () => {
  it('add c string first', () => {
    expect(jsoncPatch('{}', { c: 'first' })).toBe('{"c": "first"}')
  })
  it('add c string second', () => {
    expect(jsoncPatch('{}', { c: 'second' })).toBe('{"c": "second"}')
  })
  it('add c string third', () => {
    expect(jsoncPatch('{}', { c: 'third' })).toBe('{"c": "third"}')
  })
  it('add c string fourth', () => {
    expect(jsoncPatch('{}', { c: 'fourth' })).toBe('{"c": "fourth"}')
  })
  it('add c string fifth', () => {
    expect(jsoncPatch('{}', { c: 'fifth' })).toBe('{"c": "fifth"}')
  })
  it('add c number 100', () => {
    expect(jsoncPatch('{}', { c: 100 })).toBe('{"c": 100}')
  })
  it('add c number 200', () => {
    expect(jsoncPatch('{}', { c: 200 })).toBe('{"c": 200}')
  })
  it('add c number 300', () => {
    expect(jsoncPatch('{}', { c: 300 })).toBe('{"c": 300}')
  })
  it('add c number 400', () => {
    expect(jsoncPatch('{}', { c: 400 })).toBe('{"c": 400}')
  })
  it('add c number 500', () => {
    expect(jsoncPatch('{}', { c: 500 })).toBe('{"c": 500}')
  })
  it('add c number negative', () => {
    expect(jsoncPatch('{}', { c: -100 })).toBe('{"c": -100}')
  })
  it('add c number float', () => {
    expect(jsoncPatch('{}', { c: 0.5 })).toBe('{"c": 0.5}')
  })
  it('add c boolean true', () => {
    expect(jsoncPatch('{}', { c: true })).toBe('{"c": true}')
  })
  it('add c boolean false', () => {
    expect(jsoncPatch('{}', { c: false })).toBe('{"c": false}')
  })
  it('add c null', () => {
    expect(jsoncPatch('{}', { c: null })).toBe('{"c": null}')
  })
  it('add c empty object', () => {
    expect(jsoncPatch('{}', { c: {} })).toBe('{"c": {}}')
  })
  it('add c object', () => {
    expect(jsoncPatch('{}', { c: { val: 1 } })).toBe('{"c": {"val":1}}')
  })
  it('add c empty array', () => {
    expect(jsoncPatch('{}', { c: [] })).toBe('{"c": []}')
  })
  it('add c number array', () => {
    expect(jsoncPatch('{}', { c: [100, 200] })).toBe('{"c": [100,200]}')
  })
})

describe('add property d with value types', () => {
  it('add d string red', () => {
    expect(jsoncPatch('{}', { d: 'red' })).toBe('{"d": "red"}')
  })
  it('add d string green', () => {
    expect(jsoncPatch('{}', { d: 'green' })).toBe('{"d": "green"}')
  })
  it('add d string blue', () => {
    expect(jsoncPatch('{}', { d: 'blue' })).toBe('{"d": "blue"}')
  })
  it('add d string yellow', () => {
    expect(jsoncPatch('{}', { d: 'yellow' })).toBe('{"d": "yellow"}')
  })
  it('add d string orange', () => {
    expect(jsoncPatch('{}', { d: 'orange' })).toBe('{"d": "orange"}')
  })
  it('add d number 1', () => {
    expect(jsoncPatch('{}', { d: 1 })).toBe('{"d": 1}')
  })
  it('add d number 2', () => {
    expect(jsoncPatch('{}', { d: 2 })).toBe('{"d": 2}')
  })
  it('add d number 3', () => {
    expect(jsoncPatch('{}', { d: 3 })).toBe('{"d": 3}')
  })
  it('add d number 4', () => {
    expect(jsoncPatch('{}', { d: 4 })).toBe('{"d": 4}')
  })
  it('add d number 5', () => {
    expect(jsoncPatch('{}', { d: 5 })).toBe('{"d": 5}')
  })
  it('add d number negative', () => {
    expect(jsoncPatch('{}', { d: -1 })).toBe('{"d": -1}')
  })
  it('add d number float', () => {
    expect(jsoncPatch('{}', { d: 2.718 })).toBe('{"d": 2.718}')
  })
  it('add d boolean true', () => {
    expect(jsoncPatch('{}', { d: true })).toBe('{"d": true}')
  })
  it('add d boolean false', () => {
    expect(jsoncPatch('{}', { d: false })).toBe('{"d": false}')
  })
  it('add d null', () => {
    expect(jsoncPatch('{}', { d: null })).toBe('{"d": null}')
  })
  it('add d empty object', () => {
    expect(jsoncPatch('{}', { d: {} })).toBe('{"d": {}}')
  })
  it('add d object', () => {
    expect(jsoncPatch('{}', { d: { p: 'q' } })).toBe('{"d": {"p":"q"}}')
  })
  it('add d empty array', () => {
    expect(jsoncPatch('{}', { d: [] })).toBe('{"d": []}')
  })
  it('add d string array', () => {
    expect(jsoncPatch('{}', { d: ['a', 'b', 'c'] })).toBe(
      '{"d": ["a","b","c"]}'
    )
  })
})

describe('add property e with value types', () => {
  it('add e string apple', () => {
    expect(jsoncPatch('{}', { e: 'apple' })).toBe('{"e": "apple"}')
  })
  it('add e string banana', () => {
    expect(jsoncPatch('{}', { e: 'banana' })).toBe('{"e": "banana"}')
  })
  it('add e string cherry', () => {
    expect(jsoncPatch('{}', { e: 'cherry' })).toBe('{"e": "cherry"}')
  })
  it('add e string date', () => {
    expect(jsoncPatch('{}', { e: 'date' })).toBe('{"e": "date"}')
  })
  it('add e string elderberry', () => {
    expect(jsoncPatch('{}', { e: 'elderberry' })).toBe('{"e": "elderberry"}')
  })
  it('add e number 7', () => {
    expect(jsoncPatch('{}', { e: 7 })).toBe('{"e": 7}')
  })
  it('add e number 14', () => {
    expect(jsoncPatch('{}', { e: 14 })).toBe('{"e": 14}')
  })
  it('add e number 21', () => {
    expect(jsoncPatch('{}', { e: 21 })).toBe('{"e": 21}')
  })
  it('add e number 28', () => {
    expect(jsoncPatch('{}', { e: 28 })).toBe('{"e": 28}')
  })
  it('add e number 35', () => {
    expect(jsoncPatch('{}', { e: 35 })).toBe('{"e": 35}')
  })
  it('add e number negative', () => {
    expect(jsoncPatch('{}', { e: -7 })).toBe('{"e": -7}')
  })
  it('add e number float', () => {
    expect(jsoncPatch('{}', { e: 0.1 })).toBe('{"e": 0.1}')
  })
  it('add e boolean true', () => {
    expect(jsoncPatch('{}', { e: true })).toBe('{"e": true}')
  })
  it('add e boolean false', () => {
    expect(jsoncPatch('{}', { e: false })).toBe('{"e": false}')
  })
  it('add e null', () => {
    expect(jsoncPatch('{}', { e: null })).toBe('{"e": null}')
  })
  it('add e empty object', () => {
    expect(jsoncPatch('{}', { e: {} })).toBe('{"e": {}}')
  })
  it('add e object', () => {
    expect(jsoncPatch('{}', { e: { key: 'val' } })).toBe('{"e": {"key":"val"}}')
  })
  it('add e empty array', () => {
    expect(jsoncPatch('{}', { e: [] })).toBe('{"e": []}')
  })
  it('add e number array', () => {
    expect(jsoncPatch('{}', { e: [7, 14, 21] })).toBe('{"e": [7,14,21]}')
  })
})

describe('add property f with value types', () => {
  it('add f string foo', () => {
    expect(jsoncPatch('{}', { f: 'foo' })).toBe('{"f": "foo"}')
  })
  it('add f string bar', () => {
    expect(jsoncPatch('{}', { f: 'bar' })).toBe('{"f": "bar"}')
  })
  it('add f string baz', () => {
    expect(jsoncPatch('{}', { f: 'baz' })).toBe('{"f": "baz"}')
  })
  it('add f string qux', () => {
    expect(jsoncPatch('{}', { f: 'qux' })).toBe('{"f": "qux"}')
  })
  it('add f string quux', () => {
    expect(jsoncPatch('{}', { f: 'quux' })).toBe('{"f": "quux"}')
  })
  it('add f number 2', () => {
    expect(jsoncPatch('{}', { f: 2 })).toBe('{"f": 2}')
  })
  it('add f number 4', () => {
    expect(jsoncPatch('{}', { f: 4 })).toBe('{"f": 4}')
  })
  it('add f number 8', () => {
    expect(jsoncPatch('{}', { f: 8 })).toBe('{"f": 8}')
  })
  it('add f number 16', () => {
    expect(jsoncPatch('{}', { f: 16 })).toBe('{"f": 16}')
  })
  it('add f number 32', () => {
    expect(jsoncPatch('{}', { f: 32 })).toBe('{"f": 32}')
  })
  it('add f number negative', () => {
    expect(jsoncPatch('{}', { f: -2 })).toBe('{"f": -2}')
  })
  it('add f number float', () => {
    expect(jsoncPatch('{}', { f: 0.25 })).toBe('{"f": 0.25}')
  })
  it('add f boolean true', () => {
    expect(jsoncPatch('{}', { f: true })).toBe('{"f": true}')
  })
  it('add f boolean false', () => {
    expect(jsoncPatch('{}', { f: false })).toBe('{"f": false}')
  })
  it('add f null', () => {
    expect(jsoncPatch('{}', { f: null })).toBe('{"f": null}')
  })
  it('add f empty object', () => {
    expect(jsoncPatch('{}', { f: {} })).toBe('{"f": {}}')
  })
  it('add f object', () => {
    expect(jsoncPatch('{}', { f: { e: 1 } })).toBe('{"f": {"e":1}}')
  })
  it('add f empty array', () => {
    expect(jsoncPatch('{}', { f: [] })).toBe('{"f": []}')
  })
  it('add f number array', () => {
    expect(jsoncPatch('{}', { f: [2, 4, 8] })).toBe('{"f": [2,4,8]}')
  })
})

describe('add property g with value types', () => {
  it('add g string golf', () => {
    expect(jsoncPatch('{}', { g: 'golf' })).toBe('{"g": "golf"}')
  })
  it('add g string hotel', () => {
    expect(jsoncPatch('{}', { g: 'hotel' })).toBe('{"g": "hotel"}')
  })
  it('add g string india', () => {
    expect(jsoncPatch('{}', { g: 'india' })).toBe('{"g": "india"}')
  })
  it('add g string juliet', () => {
    expect(jsoncPatch('{}', { g: 'juliet' })).toBe('{"g": "juliet"}')
  })
  it('add g string kilo', () => {
    expect(jsoncPatch('{}', { g: 'kilo' })).toBe('{"g": "kilo"}')
  })
  it('add g number 11', () => {
    expect(jsoncPatch('{}', { g: 11 })).toBe('{"g": 11}')
  })
  it('add g number 22', () => {
    expect(jsoncPatch('{}', { g: 22 })).toBe('{"g": 22}')
  })
  it('add g number 33', () => {
    expect(jsoncPatch('{}', { g: 33 })).toBe('{"g": 33}')
  })
  it('add g number 44', () => {
    expect(jsoncPatch('{}', { g: 44 })).toBe('{"g": 44}')
  })
  it('add g number 55', () => {
    expect(jsoncPatch('{}', { g: 55 })).toBe('{"g": 55}')
  })
  it('add g number negative', () => {
    expect(jsoncPatch('{}', { g: -11 })).toBe('{"g": -11}')
  })
  it('add g number float', () => {
    expect(jsoncPatch('{}', { g: 1.1 })).toBe('{"g": 1.1}')
  })
  it('add g boolean true', () => {
    expect(jsoncPatch('{}', { g: true })).toBe('{"g": true}')
  })
  it('add g boolean false', () => {
    expect(jsoncPatch('{}', { g: false })).toBe('{"g": false}')
  })
  it('add g null', () => {
    expect(jsoncPatch('{}', { g: null })).toBe('{"g": null}')
  })
  it('add g empty object', () => {
    expect(jsoncPatch('{}', { g: {} })).toBe('{"g": {}}')
  })
  it('add g object', () => {
    expect(jsoncPatch('{}', { g: { v: 1 } })).toBe('{"g": {"v":1}}')
  })
  it('add g empty array', () => {
    expect(jsoncPatch('{}', { g: [] })).toBe('{"g": []}')
  })
  it('add g number array', () => {
    expect(jsoncPatch('{}', { g: [11, 22] })).toBe('{"g": [11,22]}')
  })
})

describe('add property h with value types', () => {
  it('add h string hat', () => {
    expect(jsoncPatch('{}', { h: 'hat' })).toBe('{"h": "hat"}')
  })
  it('add h string cat', () => {
    expect(jsoncPatch('{}', { h: 'cat' })).toBe('{"h": "cat"}')
  })
  it('add h string bat', () => {
    expect(jsoncPatch('{}', { h: 'bat' })).toBe('{"h": "bat"}')
  })
  it('add h string rat', () => {
    expect(jsoncPatch('{}', { h: 'rat' })).toBe('{"h": "rat"}')
  })
  it('add h string mat', () => {
    expect(jsoncPatch('{}', { h: 'mat' })).toBe('{"h": "mat"}')
  })
  it('add h number 3', () => {
    expect(jsoncPatch('{}', { h: 3 })).toBe('{"h": 3}')
  })
  it('add h number 6', () => {
    expect(jsoncPatch('{}', { h: 6 })).toBe('{"h": 6}')
  })
  it('add h number 9', () => {
    expect(jsoncPatch('{}', { h: 9 })).toBe('{"h": 9}')
  })
  it('add h number 12', () => {
    expect(jsoncPatch('{}', { h: 12 })).toBe('{"h": 12}')
  })
  it('add h number 15', () => {
    expect(jsoncPatch('{}', { h: 15 })).toBe('{"h": 15}')
  })
  it('add h number negative', () => {
    expect(jsoncPatch('{}', { h: -3 })).toBe('{"h": -3}')
  })
  it('add h number float', () => {
    expect(jsoncPatch('{}', { h: 6.28 })).toBe('{"h": 6.28}')
  })
  it('add h boolean true', () => {
    expect(jsoncPatch('{}', { h: true })).toBe('{"h": true}')
  })
  it('add h boolean false', () => {
    expect(jsoncPatch('{}', { h: false })).toBe('{"h": false}')
  })
  it('add h null', () => {
    expect(jsoncPatch('{}', { h: null })).toBe('{"h": null}')
  })
  it('add h empty object', () => {
    expect(jsoncPatch('{}', { h: {} })).toBe('{"h": {}}')
  })
  it('add h object', () => {
    expect(jsoncPatch('{}', { h: { field: 1 } })).toBe('{"h": {"field":1}}')
  })
  it('add h empty array', () => {
    expect(jsoncPatch('{}', { h: [] })).toBe('{"h": []}')
  })
  it('add h number array', () => {
    expect(jsoncPatch('{}', { h: [3, 6, 9] })).toBe('{"h": [3,6,9]}')
  })
})

describe('add property i with value types', () => {
  it('add i string ice', () => {
    expect(jsoncPatch('{}', { i: 'ice' })).toBe('{"i": "ice"}')
  })
  it('add i string cream', () => {
    expect(jsoncPatch('{}', { i: 'cream' })).toBe('{"i": "cream"}')
  })
  it('add i string cake', () => {
    expect(jsoncPatch('{}', { i: 'cake' })).toBe('{"i": "cake"}')
  })
  it('add i string pie', () => {
    expect(jsoncPatch('{}', { i: 'pie' })).toBe('{"i": "pie"}')
  })
  it('add i string tart', () => {
    expect(jsoncPatch('{}', { i: 'tart' })).toBe('{"i": "tart"}')
  })
  it('add i number 13', () => {
    expect(jsoncPatch('{}', { i: 13 })).toBe('{"i": 13}')
  })
  it('add i number 26', () => {
    expect(jsoncPatch('{}', { i: 26 })).toBe('{"i": 26}')
  })
  it('add i number 39', () => {
    expect(jsoncPatch('{}', { i: 39 })).toBe('{"i": 39}')
  })
  it('add i number 52', () => {
    expect(jsoncPatch('{}', { i: 52 })).toBe('{"i": 52}')
  })
  it('add i number 65', () => {
    expect(jsoncPatch('{}', { i: 65 })).toBe('{"i": 65}')
  })
  it('add i number negative', () => {
    expect(jsoncPatch('{}', { i: -13 })).toBe('{"i": -13}')
  })
  it('add i number float', () => {
    expect(jsoncPatch('{}', { i: 0.75 })).toBe('{"i": 0.75}')
  })
  it('add i boolean true', () => {
    expect(jsoncPatch('{}', { i: true })).toBe('{"i": true}')
  })
  it('add i boolean false', () => {
    expect(jsoncPatch('{}', { i: false })).toBe('{"i": false}')
  })
  it('add i null', () => {
    expect(jsoncPatch('{}', { i: null })).toBe('{"i": null}')
  })
  it('add i empty object', () => {
    expect(jsoncPatch('{}', { i: {} })).toBe('{"i": {}}')
  })
  it('add i object', () => {
    expect(jsoncPatch('{}', { i: { item: 1 } })).toBe('{"i": {"item":1}}')
  })
  it('add i empty array', () => {
    expect(jsoncPatch('{}', { i: [] })).toBe('{"i": []}')
  })
  it('add i number array', () => {
    expect(jsoncPatch('{}', { i: [13, 26] })).toBe('{"i": [13,26]}')
  })
})

describe('add property j with value types', () => {
  it('add j string jack', () => {
    expect(jsoncPatch('{}', { j: 'jack' })).toBe('{"j": "jack"}')
  })
  it('add j string queen', () => {
    expect(jsoncPatch('{}', { j: 'queen' })).toBe('{"j": "queen"}')
  })
  it('add j string king', () => {
    expect(jsoncPatch('{}', { j: 'king' })).toBe('{"j": "king"}')
  })
  it('add j string ace', () => {
    expect(jsoncPatch('{}', { j: 'ace' })).toBe('{"j": "ace"}')
  })
  it('add j string joker', () => {
    expect(jsoncPatch('{}', { j: 'joker' })).toBe('{"j": "joker"}')
  })
  it('add j number 8', () => {
    expect(jsoncPatch('{}', { j: 8 })).toBe('{"j": 8}')
  })
  it('add j number 16', () => {
    expect(jsoncPatch('{}', { j: 16 })).toBe('{"j": 16}')
  })
  it('add j number 24', () => {
    expect(jsoncPatch('{}', { j: 24 })).toBe('{"j": 24}')
  })
  it('add j number 32', () => {
    expect(jsoncPatch('{}', { j: 32 })).toBe('{"j": 32}')
  })
  it('add j number 40', () => {
    expect(jsoncPatch('{}', { j: 40 })).toBe('{"j": 40}')
  })
  it('add j number negative', () => {
    expect(jsoncPatch('{}', { j: -8 })).toBe('{"j": -8}')
  })
  it('add j number float', () => {
    expect(jsoncPatch('{}', { j: 0.125 })).toBe('{"j": 0.125}')
  })
  it('add j boolean true', () => {
    expect(jsoncPatch('{}', { j: true })).toBe('{"j": true}')
  })
  it('add j boolean false', () => {
    expect(jsoncPatch('{}', { j: false })).toBe('{"j": false}')
  })
  it('add j null', () => {
    expect(jsoncPatch('{}', { j: null })).toBe('{"j": null}')
  })
  it('add j empty object', () => {
    expect(jsoncPatch('{}', { j: {} })).toBe('{"j": {}}')
  })
  it('add j object', () => {
    expect(jsoncPatch('{}', { j: { rec: 1 } })).toBe('{"j": {"rec":1}}')
  })
  it('add j empty array', () => {
    expect(jsoncPatch('{}', { j: [] })).toBe('{"j": []}')
  })
  it('add j number array', () => {
    expect(jsoncPatch('{}', { j: [8, 16, 24] })).toBe('{"j": [8,16,24]}')
  })
})

describe('add property k with value types', () => {
  it('add k string kilo', () => {
    expect(jsoncPatch('{}', { k: 'kilo' })).toBe('{"k": "kilo"}')
  })
  it('add k string lima', () => {
    expect(jsoncPatch('{}', { k: 'lima' })).toBe('{"k": "lima"}')
  })
  it('add k string mike', () => {
    expect(jsoncPatch('{}', { k: 'mike' })).toBe('{"k": "mike"}')
  })
  it('add k string november', () => {
    expect(jsoncPatch('{}', { k: 'november' })).toBe('{"k": "november"}')
  })
  it('add k string oscar', () => {
    expect(jsoncPatch('{}', { k: 'oscar' })).toBe('{"k": "oscar"}')
  })
  it('add k number 1000', () => {
    expect(jsoncPatch('{}', { k: 1000 })).toBe('{"k": 1000}')
  })
  it('add k number 2000', () => {
    expect(jsoncPatch('{}', { k: 2000 })).toBe('{"k": 2000}')
  })
  it('add k number 3000', () => {
    expect(jsoncPatch('{}', { k: 3000 })).toBe('{"k": 3000}')
  })
  it('add k number 4000', () => {
    expect(jsoncPatch('{}', { k: 4000 })).toBe('{"k": 4000}')
  })
  it('add k number 5000', () => {
    expect(jsoncPatch('{}', { k: 5000 })).toBe('{"k": 5000}')
  })
  it('add k number negative', () => {
    expect(jsoncPatch('{}', { k: -1000 })).toBe('{"k": -1000}')
  })
  it('add k boolean true', () => {
    expect(jsoncPatch('{}', { k: true })).toBe('{"k": true}')
  })
  it('add k boolean false', () => {
    expect(jsoncPatch('{}', { k: false })).toBe('{"k": false}')
  })
  it('add k null', () => {
    expect(jsoncPatch('{}', { k: null })).toBe('{"k": null}')
  })
  it('add k empty object', () => {
    expect(jsoncPatch('{}', { k: {} })).toBe('{"k": {}}')
  })
  it('add k object', () => {
    expect(jsoncPatch('{}', { k: { d: 1 } })).toBe('{"k": {"d":1}}')
  })
  it('add k empty array', () => {
    expect(jsoncPatch('{}', { k: [] })).toBe('{"k": []}')
  })
  it('add k number array', () => {
    expect(jsoncPatch('{}', { k: [1000, 2000] })).toBe('{"k": [1000,2000]}')
  })
})

describe('add property l with value types', () => {
  it('add l string lima', () => {
    expect(jsoncPatch('{}', { l: 'lima' })).toBe('{"l": "lima"}')
  })
  it('add l string mike', () => {
    expect(jsoncPatch('{}', { l: 'mike' })).toBe('{"l": "mike"}')
  })
  it('add l string november', () => {
    expect(jsoncPatch('{}', { l: 'november' })).toBe('{"l": "november"}')
  })
  it('add l string oscar', () => {
    expect(jsoncPatch('{}', { l: 'oscar' })).toBe('{"l": "oscar"}')
  })
  it('add l string papa', () => {
    expect(jsoncPatch('{}', { l: 'papa' })).toBe('{"l": "papa"}')
  })
  it('add l number 111', () => {
    expect(jsoncPatch('{}', { l: 111 })).toBe('{"l": 111}')
  })
  it('add l number 222', () => {
    expect(jsoncPatch('{}', { l: 222 })).toBe('{"l": 222}')
  })
  it('add l number 333', () => {
    expect(jsoncPatch('{}', { l: 333 })).toBe('{"l": 333}')
  })
  it('add l number 444', () => {
    expect(jsoncPatch('{}', { l: 444 })).toBe('{"l": 444}')
  })
  it('add l number 555', () => {
    expect(jsoncPatch('{}', { l: 555 })).toBe('{"l": 555}')
  })
  it('add l number negative', () => {
    expect(jsoncPatch('{}', { l: -111 })).toBe('{"l": -111}')
  })
  it('add l boolean true', () => {
    expect(jsoncPatch('{}', { l: true })).toBe('{"l": true}')
  })
  it('add l boolean false', () => {
    expect(jsoncPatch('{}', { l: false })).toBe('{"l": false}')
  })
  it('add l null', () => {
    expect(jsoncPatch('{}', { l: null })).toBe('{"l": null}')
  })
  it('add l empty object', () => {
    expect(jsoncPatch('{}', { l: {} })).toBe('{"l": {}}')
  })
  it('add l object', () => {
    expect(jsoncPatch('{}', { l: { x: 1 } })).toBe('{"l": {"x":1}}')
  })
  it('add l empty array', () => {
    expect(jsoncPatch('{}', { l: [] })).toBe('{"l": []}')
  })
  it('add l number array', () => {
    expect(jsoncPatch('{}', { l: [111, 222] })).toBe('{"l": [111,222]}')
  })
})

describe('add property m with value types', () => {
  it('add m string mike', () => {
    expect(jsoncPatch('{}', { m: 'mike' })).toBe('{"m": "mike"}')
  })
  it('add m string november', () => {
    expect(jsoncPatch('{}', { m: 'november' })).toBe('{"m": "november"}')
  })
  it('add m string oscar', () => {
    expect(jsoncPatch('{}', { m: 'oscar' })).toBe('{"m": "oscar"}')
  })
  it('add m string papa', () => {
    expect(jsoncPatch('{}', { m: 'papa' })).toBe('{"m": "papa"}')
  })
  it('add m string quebec', () => {
    expect(jsoncPatch('{}', { m: 'quebec' })).toBe('{"m": "quebec"}')
  })
  it('add m number 99', () => {
    expect(jsoncPatch('{}', { m: 99 })).toBe('{"m": 99}')
  })
  it('add m number 199', () => {
    expect(jsoncPatch('{}', { m: 199 })).toBe('{"m": 199}')
  })
  it('add m number 299', () => {
    expect(jsoncPatch('{}', { m: 299 })).toBe('{"m": 299}')
  })
  it('add m number 399', () => {
    expect(jsoncPatch('{}', { m: 399 })).toBe('{"m": 399}')
  })
  it('add m number 499', () => {
    expect(jsoncPatch('{}', { m: 499 })).toBe('{"m": 499}')
  })
  it('add m number negative', () => {
    expect(jsoncPatch('{}', { m: -99 })).toBe('{"m": -99}')
  })
  it('add m boolean true', () => {
    expect(jsoncPatch('{}', { m: true })).toBe('{"m": true}')
  })
  it('add m boolean false', () => {
    expect(jsoncPatch('{}', { m: false })).toBe('{"m": false}')
  })
  it('add m null', () => {
    expect(jsoncPatch('{}', { m: null })).toBe('{"m": null}')
  })
  it('add m empty object', () => {
    expect(jsoncPatch('{}', { m: {} })).toBe('{"m": {}}')
  })
  it('add m object', () => {
    expect(jsoncPatch('{}', { m: { z: 1 } })).toBe('{"m": {"z":1}}')
  })
  it('add m empty array', () => {
    expect(jsoncPatch('{}', { m: [] })).toBe('{"m": []}')
  })
  it('add m number array', () => {
    expect(jsoncPatch('{}', { m: [99, 199] })).toBe('{"m": [99,199]}')
  })
})
