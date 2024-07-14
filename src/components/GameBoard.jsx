
export default function GameBoard({ onSelectSquare, board }){
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = currActivePlayer;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    // const gameBoard = initialGameBoard;

    // for(const turn of turns){
    //     const {square, player} = turn;
    //     const {row, col} = square;

    //     gameBoard[row][col] = player;
    // }

    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled = {playerSymbol != null}>{playerSymbol}</button>
                            </li>
            ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}