import { useState } from "react"



export default function GameBoard({onSelectSquare,board}){
   
   
    return (
        <ol id='game-board'>
            {board.map((line,lineIndex)=>
                <li key={lineIndex}>
                    <ol>
                        {line.map((playerSymbol,colIndex)=>
                        <li key={colIndex}>
                            <button 
                                onClick={()=>onSelectSquare(lineIndex,colIndex)} 
                                disabled={playerSymbol==='X'|| playerSymbol==='O'} >{playerSymbol}
                            </button>
                        </li>)}
                    </ol>
                </li>
            )}
        </ol>
    )
}