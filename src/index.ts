import { compare } from 'fast-json-patch'
import { applyEdits, ModificationOptions, modify, parse } from 'jsonc-parser'

export function jsoncPatch<T extends object>(
  text: string,
  object: T,
  options?: ModificationOptions
): string {
  const prevObject = parse(text) as T
  const patch = compare(prevObject, object)

  let inputText = text

  for (const op of patch) {
    if (op.op !== 'add' && op.op !== 'replace' && op.op !== 'remove') {
      continue
    }

    const path = op.path
      .split('/')
      .slice(1)
      .map((segment) => (/^\d+$/.test(segment) ? Number(segment) : segment))

    const edits = modify(
      inputText,
      path,
      op.op === 'remove' ? undefined : op.value,
      options ?? {}
    )

    inputText = applyEdits(inputText, edits)
  }

  return inputText
}
