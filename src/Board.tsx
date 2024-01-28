import { useState } from 'react'
import { Cell } from './Cell'
import { calcWinner } from './helpers'

export const Board = () => {
  const [isXNext, setIsXNext] = useState(true)
  const [cells, setCells] = useState(new Array(9).fill(null))

  const winner = calcWinner(cells)
  const status = winner 
    ? `Winner is ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}` 

  const clickHandler = (i: number) => {
    if (cells[i] || calcWinner(cells)) {
      return
    }
    const nextCells = cells.slice()
    nextCells[i] = isXNext ? 'X' : 'O'
    setCells(nextCells)
    setIsXNext(!isXNext)
  }
  
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Cell value={cells[0]} onCellClick={() => clickHandler(0)} />
        <Cell value={cells[1]} onCellClick={() => clickHandler(1)} />
        <Cell value={cells[2]} onCellClick={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Cell value={cells[3]} onCellClick={() => clickHandler(3)} />
        <Cell value={cells[4]} onCellClick={() => clickHandler(4)} />
        <Cell value={cells[5]} onCellClick={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Cell value={cells[6]} onCellClick={() => clickHandler(6)} />
        <Cell value={cells[7]} onCellClick={() => clickHandler(7)} />
        <Cell value={cells[8]} onCellClick={() => clickHandler(8)} />
      </div>
    </>
  )
}
