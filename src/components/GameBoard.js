import React from 'react'

import ComputerRow from './ComputerRow'
import PlayerRow from './PlayerRow'

const GameBoard = (props) => {
    let rows = []
    let counter = props.rounds -1
    while (counter !== -1) {
        rows.push(counter)
        counter--
    }
    rows = rows.map((row, i) => {
        return (
            <div className='game-board__row'>
                <PlayerRow row={props.playedRounds[row]} />
                <ComputerRow row={props.responses[row]} />
            </div>
        )
    })
    return (
        <div className='game-board'>
            {rows}
        </div>
    )
}

export default GameBoard