import React from 'react'
import Player from '../components/Player/Player'
import "../components/Player/Player.css"

function PlayerSpace (props) {
    const {playerStats, currentPlayer, isGameActive} = props

    const entries = Object.keys(playerStats)

    return (
        <div class='row'>
            {
            entries.map(person => {return <Player key = {person} player={playerStats[person]} currentPlayer={currentPlayer} isGameActive = {isGameActive}/>})
            }           
        </div>
    )
    
}

export default PlayerSpace