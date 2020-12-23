import React, {useState} from 'react'
import PlayerSpace from './PlayerSpace'
import Dice from '../components/Dice/Dice'
import Button from '../components/Button/Button'

const defaultStat = { 
    "Player 1": {
        display: "Player 1", 
        currentScore: 0,
        totalScore: 0,
        pastGamesWon: 0,
        winner: false, 
        pastGameScore: 0
    }, 
    "Player 2": {
        display: "Player 2", 
        currentScore: 0,
        totalScore: 0,
        pastGamesWon: 0,
        winner: false,
        pastGameScore: 0
    }
}


export default function GameSpace(props) {
    const [isGameActive, setActive] = useState(false)
    const [currenTurn, setTurn] = useState("Player 1")
    const [playerStats, setPlayerStats] = useState({...defaultStat})
    const [dice, setDice] = useState([1,1])


    //function to render Dice
    const diceRender = () => {
        
        //random number generator
         const randomNum = () => {return Math.floor(Math.random() * 6) + 1}

         let newDice = [randomNum(), randomNum()]  //make new dice with random number function
         setDice(newDice) //sets new Dice vals

         let newTotal = newDice[0] + newDice[1]    //var to hold new total
         let currPlayer = playerStats[currenTurn]  //var to reference the current player
         currPlayer.currentScore += newTotal //adds new dice vals to current player's current score

        // conditional check if player rolled 1 or snake eyes
        if(newDice.includes(1)){
            if(newDice[0]===1 && newDice[1]===1){
                 playerStats[currenTurn].totalScore =  0               
            } else {
                playerStats[currenTurn].currentScore =  0   
            }

            setTurn( currenTurn === "Player 1" ? "Player 2" : "Player 1") 
        } 
                
         //conditional to check if the new current score and total score exceed the winning total for currentplayer
         if (currPlayer.currentScore + currPlayer.totalScore >= 100 ) {
            currPlayer.totalScore += playerStats[currenTurn].currentScore  //adds current score to total score
            currPlayer.winner = true // declares current player the winner
            currPlayer.pastGamesWon += 1  //adds win to current player 
            setActive(false)  //ends current game play
         }

    }

    //function for new Game
    const newGame = () => {
        setPlayerStats({
            "Player 1" :{
                display: "Player 1", 
                currentScore: 0,
                totalScore: 0,
                pastGamesWon: playerStats["Player 1"].pastGamesWon,
                winner: false, 
                pastGameScore: playerStats["Player 1"].pastGameScore + playerStats["Player 1"].totalScore
            }, 
            "Player 2": {
                display: "Player 2", 
                currentScore: 0,
                totalScore: 0,
                pastGamesWon: playerStats["Player 2"].pastGamesWon,
                winner: false, 
                pastGameScore: playerStats["Player 2"].pastGameScore + playerStats["Player 2"].totalScore
            }
        }) 
            
        setDice([1,1])
        setTurn("Player 1")
        setActive(true)
    }

    //function for Holds
    const hold = () => {
        playerStats[currenTurn].totalScore += playerStats[currenTurn].currentScore
        playerStats[currenTurn].currentScore = 0
        setTurn( currenTurn === "Player 1"? "Player 2" : "Player 1" )
      
    }
   
    //var holds buttons for conditional rendering
    const activeGameButtons = (
        <>
        <Dice values={dice}/>
        <Button text="Roll Dice" action = {diceRender}/> {''}
        <Button text="Hold" action={hold} disable={dice[0]===dice[1] || playerStats[currenTurn].currentScore === 0}/>
        </>
    )

    const newGameButton = (
        <Button text = {(playerStats["Player 1"].pastGamesWon || playerStats["Player 2"].pastGamesWon) && !isGameActive ? "Play Again" : "New Game" } action = {newGame}/>
    )

    return (
        <div>
            {!isGameActive ? newGameButton : null}
            
            {isGameActive ? activeGameButtons : null}
            
            <section>
              <PlayerSpace playerStats = {playerStats} currentPlayer = {currenTurn} isGameActive={isGameActive} />
            </section>
            
        </div>
   
    )
}


