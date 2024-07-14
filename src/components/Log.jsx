export default function Log({ turns }){
    return (
        <ol id="log">
            {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected &#40; {turn.square.row}, {turn.square.col} &#41;</li>)}
        </ol>
    );
}