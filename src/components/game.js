import React, {useState} from 'react'
import Board from './board'
import { CalculateWinner } from './winner'

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true)
    const winner = CalculateWinner(board)

    const handleClick =(i)=>{
        const BoardCopy = [...board]
        if (winner || BoardCopy[i]) return
        BoardCopy[i] = isNext ? 'X' : 'O'
        setBoard(BoardCopy)
        setIsNext(!isNext)
    }

    const Start =()=>{
        window.location.reload(false)
    }

  return (
      <>
        <Board squares={board} onClick={handleClick} />
        <div>
            <button onClick={Start}>Start Game</button>
            <p>{winner ? 'Winner:' + winner : 'Next Player: ' + (isNext ? 'X': 'O')}</p>
        </div>
      </>
        
  )
}

export default Game
