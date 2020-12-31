import React from 'react'

import ColorsSelector from './ColorsSelector'

const EndMessage = (props) => {
    let code = props.code
    code = code.map((color) => {
        return (
            <div
                className='endmessage__color'
                style={{ backgroundColor: color }}
            />
        )
    })
    return (
        <div>
            {props.winner ? 
                <h1>Congratulations, you cracked the code!</h1> : null}
            {props.loser ? 
                <h1>Sorry, you didn't crack the code</h1> : null}
            <p>It was:</p>
            <div className='endmessage__colors'>
                {code}
            </div>
        </div>
    )
}

export default EndMessage