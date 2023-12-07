export default function Log({turns}){
    
    return(
        <ol id="log">
            {turns.map((item)=><li key={`${item.square.row}${item.square.col}`}>{item.player} selected {item.square.row+1}, {item.square.col+1}</li>)}
        </ol>
    )
}