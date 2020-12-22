import React from 'react';
import "../Button/Button.css"

export default function Button (props) {
    const {text, action, disable} = props

    return (
        <button onClick={action} disabled={disable} class="btn"> {text} </button>
    )
}