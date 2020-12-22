import React from 'react'
import "../Player/Player.css"

function Player (props) {
    const {player, currentPlayer, isGameActive, } = props
    
    const defineClass = () => {
        let str = []

        str.push((currentPlayer === player.display) && (isGameActive) ? "name current" : "name")
        str.push(player.winner ? 'winner' : '')

        console.log(str, player.totalScore, player.gameNumToWin)
        return str.join(' ')
    }

    return (
        <div class="col-1-of-2">
             <div class="total-score">
                {player.totalScore}    
            </div>
            
            <h4> <span className={defineClass()}> {player.winner ? 'WINNER!': player.display} </span> </h4>

            <br/>

            <div class="round-score">
                Round Score: <b>{player.currentScore}</b>
            </div>
           
            <br/>

            <div class="games-won">
                Games Won: {player.pastGamesWon} 
                <br/>
                Total Games Score: {player.pastGameScore}
            </div>
                 
        </div>
    )
}

export default Player
