import { useState } from "react";

const initialGameBoard = [
    [null, null, null], 
    [null, null, null],
    [null, null, null]
];


export default function GameBoard({ onSelectSquare , board}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, columnIndex){
    //     setGameBoard((previousGameBoard) => {
    //         const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }
    // let gameBoard = initialGameBoard; 
    // for(const turn of turns){
    //     const { square, player} = turn;
    //     const {row, col} = square;

    //     gameBoard[row][col] = player;
    // }


    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((column, columnIndex) => (
                            <li key={columnIndex}>
                                {/* column contains player symbol */}
                                <button onClick={() => onSelectSquare(rowIndex, columnIndex)} disabled={column !== null}>{column}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>

    );
}