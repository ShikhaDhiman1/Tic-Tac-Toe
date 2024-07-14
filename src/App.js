import { useState } from "react";
import Log from "./components/Log";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from './winning-combinations.js'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns){
  let currPLayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currPLayer = 'O';
  }
  return currPLayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  const gameBoard = initialGameBoard;
  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns((prevTurns)=>{
      let currPLayer = derivedActivePlayer(prevTurns);
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currPLayer = 'O';
      }

      const updatedTurns = [
        { square : {row : rowIndex, col : colIndex}, player : currPLayer},
        ...prevTurns
      ];

      return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        {winner && <p>You Won {winner} !</p>}
        <GameBoard onSelectSquare = {handleSelectSquare} board={gameBoard} isWon={winner != null}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
