import { compare } from 'fast-json-patch'
import { applyEdits, ModificationOptions, modify, parse } from 'jsonc-parser'
import { toJsonPath } from './json-path'

/**
 * Applies object changes to a JSONC string while preserving formatting, comments,
 * and original whitespace style.
 *
 * Internally computes the diff between the parsed source and the target object
 * using `fast-json-patch` (RFC 6902), then replays the patch operations through
 * `jsonc-parser`'s `modify()` so the output retains all original formatting.
 *
 * Removal operations are applied before adds/replaces, and paths are sorted in
 * reverse order, to prevent index-shifting bugs when patching arrays.
 *
 * @example Add a new property
 * jsoncPatch('{ "a": 1 }', { a: 1, b: 2 })
 * // => '{ "a": 1, "b": 2 }'
 *
 * @example Update an existing property
 * jsoncPatch('{ "a": 1, "b": 2 }', { a: 1, b: 3 })
 * // => '{ "a": 1, "b": 3 }'
 *
 * @example Remove a property
 * jsoncPatch('{ "a": 1, "b": 2 }', { a: 1 })
 * // => '{ "a": 1 }'
 *
 * @example Preserves JSONC comments
 * jsoncPatch('{ /* hello *\/ "a": 1 }', { a: 2 })
 * // => '{ /* hello *\/ "a": 2 }'
 *
 * @example Preserves trailing commas
 * jsoncPatch('{ "a": 1, }', { a: 2 })
 * // => '{ "a": 2, }'
 *
 * @example Array operations — index-aware
 * jsoncPatch('{ "arr": [1, 2, 3] }', { arr: [1, 4, 3] })
 * // => '{ "arr": [1, 4, 3] }'
 *
 * @example Nested property updates
 * jsoncPatch('{ "a": { "x": 1 } }', { a: { x: 2 } })
 * // => '{ "a": { "x": 2 } }'
 *
 * @example Empty string defaults to "{}"
 * jsoncPatch('', { foo: 'bar' })
 * // => '{ "foo": "bar" }'
 *
 * @example Control spacing via options
 * import { ModificationOptions } from 'jsonc-parser'
 * jsoncPatch('{"a":1}', { a: 2 }, { formattingOptions: { insertSpaces: true, tabSize: 2 } })
 * // => '{\n  "a": 2\n}'
 *
 * @param text  - Original JSON / JSONC text. If empty or falsy, defaults to `"{}"`.
 * @param object - Target plain object whose properties will become the result.
 * @param options - Optional {@link ModificationOptions} forwarded to `jsonc-parser`'s `modify()`.
 */
export function jsoncPatch<T extends object>(
  text: string,
  object: T,
  options?: ModificationOptions
): string {
  let inputText = text.trim() ? text : '{}'

  const prevObject = parse(inputText) as T
  const patch = compare(prevObject, object)

  const sortedPatch = [...patch].sort((a, b) => {
    if (a.op === 'remove' && b.op !== 'remove') return -1
    if (a.op !== 'remove' && b.op === 'remove') return 1
    if (a.op === 'remove') {
      return b.path.localeCompare(a.path)
    }
    return a.path.localeCompare(b.path)
  })

  for (const op of sortedPatch) {
    if (op.op !== 'add' && op.op !== 'replace' && op.op !== 'remove') {
      continue
    }

    const targetPath = toJsonPath(
      prevObject,
      object,
      op.path.split('/').slice(1)
    )
    const targetValue = op.op === 'remove' ? undefined : op.value

    const edits = modify(inputText, targetPath, targetValue, {
      ...options,
    })

    inputText = applyEdits(inputText, edits)
  }

  return inputText
}
