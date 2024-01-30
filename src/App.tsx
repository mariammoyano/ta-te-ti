import { useState } from 'react'
import { Board } from './Board'

const Game = () => {
  const [isXNext, setIsXNext] = useState(true)
  const [history, setHistory] = useState([new Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const currentCells = history[currentMove]

  const playHandler = (cells: string[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), cells]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setIsXNext(!isXNext)
  }

  const jumpToMove = (move: number) => {
    setCurrentMove(move)
    setIsXNext(move % 2 === 0)
  }

  const moves = history.map((cells, i) => {
    const description = i > 0 ? `Go to move # ${i}` : `Go to game start`

    return (
      <li key={`history-${i}`}>
        <button onClick={() => jumpToMove(i)}>{description}</button>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board isXNext={isXNext} cells={currentCells} onPlay={playHandler} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
