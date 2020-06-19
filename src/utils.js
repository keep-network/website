export function createEnum(...args) {
  const acc = {}
  for (const s of args) {
    acc[s] = s
  }
  return acc
}
