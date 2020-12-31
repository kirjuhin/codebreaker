import React from 'react'

const PlayerRow = (props) => {
    const rows = [0, 1, 2, 3, 4].map((row, i) => {
        return (
            <div
                className='player-row__color'
                style={
                    props.row !== undefined ?
                    { backgroundColor: props.row[i] } :
                    null
                }
            />
        )
    })
    return (
    <div className='player-row'>
        {rows}
    </div>
)}

export default PlayerRow