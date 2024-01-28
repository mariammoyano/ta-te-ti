export const calcWinner = (cells: string[]): string | null => {
  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winStates.length; i++) {
    const [a, b, c] = winStates[i]
    if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
      return cells[a]
    }
  }
  return null
}
