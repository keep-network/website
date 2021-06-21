export function createEnum(...args) {
  const acc = {}
  for (const s of args) {
    acc[s] = s
  }
  return acc
}

export function truncate(input, maxLength = 50) {
  if (input.length > maxLength) {
    return input.substring(0, maxLength) + "..."
  }
  return input
}
