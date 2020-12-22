import React from 'react';
import "../Dice/Dice.css"

//image imports for dice
import dice1 from "../../images/dice-1.png"
import dice2 from "../../images/dice-2.png"
import dice3 from "../../images/dice-3.png"
import dice4 from "../../images/dice-4.png"
import dice5 from "../../images/dice-5.png"
import dice6 from "../../images/dice-6.png"

const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]

function Dice(props) {
const {values} = props

    return (
        <div >
            {values.map( (num) => {
                let img = diceArr[num-1]
                return (
                <>
                <img src = {img} alt={`dice ${num}`}/> 
                </>
                )
                
            })}
        </div>
    )
}


export default Dice