# Test structure rules

Every test must follow this exact structure — no exceptions:

```typescript
it('label', () => {
  expect(jsoncPatch(prev, next)).toBe(expected)
})
```

## Rules

- **No arrays** — never declare test case arrays (`const cases = [...]`)
- **No loops** — never use `for`, `forEach`, `map` to generate tests
- **No helper/wrapper** — never call an `execute` or any wrapper
- **No `parse` / `JSON.stringify` / `toEqual`** — only `expect(...).toBe(expected)`
- **No variables** — `jsoncPatch()` arguments and `.toBe()` expected must be hardcoded literals; no `const`, no `let`, no reuse
- **No comments** — no comments allowed in test cases; if you need to explain something, use the test label
- **No automations** — no automations or scripts are allowed to generate test cases; all test cases must be manually written out
