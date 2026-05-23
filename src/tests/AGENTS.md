# Test structure rules

Every test must follow this exact structure — no exceptions:

```typescript
it('label', () => {
  expect(jsoncPatch(prev, next)).toBe(expected)
})
```

## Rules

1. **No arrays** — never declare test case arrays (`const cases = [...]`)
2. **No loops** — never use `for`, `forEach`, `map` to generate tests
3. **No helper/wrapper** — never call an `execute` or any wrapper
4. **No `parse` / `JSON.stringify` / `toEqual`** — only `expect(...).toBe(expected)`
5. **No variables** — `jsoncPatch()` arguments and `.toBe()` expected must be hardcoded literals; no `const`, no `let`, no reuse
