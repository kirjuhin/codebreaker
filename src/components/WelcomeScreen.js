import React from 'react'

import NewGame from './NewGame'

const WelcomeScreen = (props) => {
    return (
        <div className='welcome-screen welcome-screen__vcenter'>
            <h1>Codebreaker</h1>
            <h3>Can you crack the code?</h3>
            <p>Objective: Guess the secret code consisting of a five-color combination in as few rounds as possible. You will recieve clues for each round you play. White means you guessed a correct color but in a wrong position. Black means you guessed a correct color that is also in the correct position. The position of the clues do not correspond to the position of the colors you have chosen. The secret code will not contain the same color twice. Good luck!</p>
            <NewGame newGame={props.newGame} />        
        </div>
    )
}

export default WelcomeScreen