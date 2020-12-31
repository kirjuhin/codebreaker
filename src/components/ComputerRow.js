import React from 'react'

const ComputerRow = (props) => {
    const rows = [0, 1, 2, 3, 4].map((row, i) => (
        <div 
            className={
                props.row !== undefined && props.row[i] !== undefined ? 
                `computer-row__color computer-row__color--${props.row[i]}` : 
                'computer-row__color'}
        />
    ))
    return (
        <div className='computer-row'>
            {rows}
        </div>
    )
}

export default ComputerRow