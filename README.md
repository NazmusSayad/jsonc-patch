# jsonc-patch

Apply object changes to a JSON / JSONC string while preserving formatting, comments, and original whitespace style.

`jsoncPatch` diffs your source text against a target object and replays the changes in place, so comments, trailing commas, indentation, and spacing all survive the edit.

## How it works

1. The source text is parsed with [`jsonc-parser`](https://www.npmjs.com/package/jsonc-parser).
2. The diff between the parsed source and the target object is computed with [`fast-json-patch`](https://www.npmjs.com/package/fast-json-patch) (RFC 6902).
3. Each patch operation is replayed through `jsonc-parser`'s `modify()`, so the output keeps all original formatting.

Removals are applied before adds/replaces and paths are sorted in reverse order to avoid index-shifting bugs when patching arrays.

## Install

```sh
npm install jsonc-patch
```

```sh
pnpm add jsonc-patch
```

## Usage

```ts
import { jsoncPatch } from 'jsonc-patch'
// or: import jsoncPatch from 'jsonc-patch'

jsoncPatch('{ "a": 1 }', { a: 1, b: 2 })
// => '{ "a": 1, "b": 2 }'
```

### Add a property

```ts
jsoncPatch('{ "a": 1 }', { a: 1, b: 2 })
// => '{ "a": 1, "b": 2 }'
```

### Update a property

```ts
jsoncPatch('{ "a": 1, "b": 2 }', { a: 1, b: 3 })
// => '{ "a": 1, "b": 3 }'
```

### Remove a property

```ts
jsoncPatch('{ "a": 1, "b": 2 }', { a: 1 })
// => '{ "a": 1 }'
```

### Preserve comments

```ts
jsoncPatch('{ /* hello */ "a": 1 }', { a: 2 })
// => '{ /* hello */ "a": 2 }'
```

### Preserve trailing commas

```ts
jsoncPatch('{ "a": 1, }', { a: 2 })
// => '{ "a": 2, }'
```

### Array operations (index-aware)

```ts
jsoncPatch('{ "arr": [1, 2, 3] }', { arr: [1, 4, 3] })
// => '{ "arr": [1, 4, 3] }'
```

### Nested updates

```ts
jsoncPatch('{ "a": { "x": 1 } }', { a: { x: 2 } })
// => '{ "a": { "x": 2 } }'
```

### Empty input defaults to `{}`

```ts
jsoncPatch('', { foo: 'bar' })
// => '{ "foo": "bar" }'
```

### Control spacing via options

```ts
jsoncPatch('{"a":1}', { a: 2 }, { formattingOptions: { insertSpaces: true, tabSize: 2 } })
// => '{\n  "a": 2\n}'
```

## API

```ts
function jsoncPatch<T extends object>(
  text: string,
  object: T,
  options?: ModificationOptions
): string
```

- `text` — Original JSON / JSONC text. If empty or falsy, defaults to `"{}"`.
- `object` — Target plain object whose properties become the result.
- `options` — Optional [`ModificationOptions`](https://www.npmjs.com/package/jsonc-parser) forwarded to `jsonc-parser`'s `modify()`.

Returns the updated JSONC string.

## License

MIT
