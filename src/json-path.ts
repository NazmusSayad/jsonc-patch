export function toJsonPath(
  prev: unknown,
  target: unknown,
  segments: string[]
): (string | number)[] {
  const result: (string | number)[] = []
  let currentPrev = prev
  let currentTarget = target

  for (const segment of segments) {
    const isNumeric = /^\d+$/.test(segment)
    let useNumber = false

    if (isNumeric) {
      const prevIsArray = Array.isArray(currentPrev)
      const targetIsArray = Array.isArray(currentTarget)
      if (prevIsArray || targetIsArray) {
        useNumber = true
      }
    }

    const key: string | number = useNumber ? parseInt(segment, 10) : segment
    result.push(key)

    if (currentPrev !== null && typeof currentPrev === 'object') {
      currentPrev = (currentPrev as Record<string | number, unknown>)[key]
    } else {
      currentPrev = undefined
    }

    if (currentTarget !== null && typeof currentTarget === 'object') {
      currentTarget = (currentTarget as Record<string | number, unknown>)[key]
    } else {
      currentTarget = undefined
    }
  }

  return result
}
