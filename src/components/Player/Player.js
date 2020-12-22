import React from 'react';
import "../Player/Player.css"

function Player (props) {
    const {player, currentPlayer, isGameActive} = props
    
    const defineClass = () => {
        let str = []
        str.push((currentPlayer === player.display) && (isGameActive) ? "name current" : "name")
        str.push(player.totalScore >= 100 ? 'winner' : '')
        return str.join(' ')
    }

    return (
        <div class="col-1-of-2">
        <h4> <span class={defineClass()}> {player.totalScore >= 100 ? 'WINNER!': player.display} </span> </h4>
            <br/>

            <div class="round-score">
            Round Score: {player.currentScore}
            </div>
           
            <br/>

            <div class="games-won">
            Games Won: {player.pastGamesWon}
            </div>


            <div class="total-score">
            {player.totalScore}    
            </div>
                 
        </div>
    )
}

export default Player