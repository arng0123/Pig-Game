import React, {useState} from 'react'
import PlayerSpace from './PlayerSpace'
import Dice from '../components/Dice/Dice'
import Button from '../components/Button/Button'

const defaultStat = { //turn player stats into an Array of objects? or a map!!! 
    "Player 1": {
        // id: 1,
        display: "Player 1", 
        currentScore: 0,
        totalScore: 0,
        pastGamesWon: 0,
        winner: false
    }, 
    "Player 2": {
        // id: 2,
        display: "Player 2", 
        currentScore: 0,
        totalScore: 0,
        pastGamesWon: 0,
        winner: false
    }
}


export default function GameSpace(props) {
    const [isGameActive, setActive] = useState(false)
    const [currenTurn, setTurn] = useState("Player 1")
    const [playerStats, setPlayerStats] = useState({...defaultStat})
    const [dice, setDice] = useState([1,1])



    //shuffle for dice nums
    const diceRender = () => {
         console.log("HITTING")
         const randomNum = () => {return Math.floor(Math.random() * 6) + 1}
         let newDice = [randomNum(), randomNum()]
         setDice(newDice)

         let newTotal = newDice[0] + newDice[1]
         playerStats[currenTurn].currentScore += newTotal

         //first check to see if the new dice + current + total >= 100
         if (playerStats[currenTurn].currentScore + playerStats[currenTurn].totalScore >= 100) {
            playerStats[currenTurn].totalScore += playerStats[currenTurn].currentScore
            playerStats[currenTurn].winner = true          //if it is than current player wins
            playerStats[currenTurn].pastGamesWon += 1          //add win to current player 
            setActive(false)         //make isGameActive false
         }
  

        if(newDice.includes(1)){
                console.log(dice)
                console.log("HITTING HERE")
            if(newDice[0]===1 && newDice[1]===1){
                 playerStats[currenTurn].currentScore =  0               
            } else {
                playerStats[currenTurn].currentScore =  0
                setTurn(currenTurn==="Player 1"? "Player 2" : "Player 1")
                    
            }
        } 

    }

    //newGame => should reset everything except pastGamesWon (currently just using the default state)
    const newGame = () => {
        setPlayerStats( {"Player 1" :{
            display: "Player 1", 
            currentScore: 0,
            totalScore: 0,
            pastGamesWon: playerStats["Player 1"].pastGamesWon,
            winner: false
        }, 
        "Player 2": {
            display: "Player 2", 
            currentScore: 0,
            totalScore: 0,
            pastGamesWon: playerStats["Player 2"].pastGamesWon,
            winner: false
        }
    }) //need to spread the player objects with the past games won so we don't loose that number
        setDice([1,1])
        setTurn("Player 1")
        setActive(true)
    }


    const hold = () => {
        //apply the current player's current score to their total score
        playerStats[currenTurn].totalScore += playerStats[currenTurn].currentScore
        //reset the current players current score
        playerStats[currenTurn].currentScore = 0
        //set to next player
        setTurn(currenTurn==="Player 1"? "Player 2" : "Player 1")
      
    }
   
    const activeGameButtons = (
        <>
        <Dice values={dice}/>
        <Button text="Roll Dice" action = {diceRender}/> {''}
        <Button text="Hold" action={hold} disable={dice[0]===dice[1]}/>
        </>
    )

    return (
        <div>
            <Button text = "New Game" action = {newGame}/>
            {isGameActive ? activeGameButtons : null}
            <section class = "section-about">
            <PlayerSpace playerStats = {playerStats} currentPlayer = {currenTurn} isGameActive={isGameActive}/>
            </section>
            
        </div>
   
    )
}


