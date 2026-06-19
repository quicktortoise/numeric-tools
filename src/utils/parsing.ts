export function inputToIntArray(inputText: string): number[] {
  const pattern = /^\s*(\d+)\s*$/gm
  const intSet = new Set<number>()

  let match = pattern.exec(inputText)
  while (match !== null) {
    intSet.add(parseInt(match[1], 10))
    match = pattern.exec(inputText)
  }

  return [...intSet]
}

export function inputToRangeArray(inputText: string): string[] {
  const pattern = /^\s*\d+(\s*-\s*\d+)?\s*$/gm
  const exclusionPattern = /[^\d-]/g
  const set = new Set<string>()

  let match = pattern.exec(inputText)
  while (match !== null) {
    const value = match[0].replace(exclusionPattern, '')
    set.add(value)
    match = pattern.exec(inputText)
  }

  return [...set]
}
