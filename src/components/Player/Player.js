import React from 'react'
import "../Player/Player.css"

function Player (props) {
    const {player, currentPlayer, isGameActive, } = props
    
    const defineClass = () => {
        let str = []

        str.push((currentPlayer === player.display) && (isGameActive) ? "name current" : "name")
        str.push(player.winner ? 'winner' : '')

        return str.join(' ')
    }

    return (
        <div className="col-1-of-2">
             <div className="total-score">
                {player.totalScore}    
            </div>
            
            <h4> <span className={defineClass()}> {player.winner ? 'WINNER!': player.display} </span> </h4>

            <br/>

            <div className="round-score">
                Round Score: <b>{player.currentScore}</b>
            </div>
           
            <br/>

            <div className="games-won">
                Games Won: {player.pastGamesWon} 
                <br/>
                Total Games Score: {player.pastGameScore}
            </div>
                 
        </div>
    )
}

export default Player
