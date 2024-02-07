export const getRandomValue = (ms: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random())
    }, ms)
  })
}
