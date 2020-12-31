import React from 'react'

import ColorSelector from './ColorSelector'

const ColorsSelector = (props) => {
    let selectors = [0, 1, 2, 3, 4].map((selector, i) => {
        return (
            <div
                 className={props.highlighted === i ? 'colors-selector__color colors-selector__color--highlighted' : 'colors-selector__color'}
                 onClick={() => props.highlight(i)}
                 style={props.selectedColors[i] !== undefined ? {backgroundColor: props.selectedColors[i]} : null}
            />
        )
    })
    
    return (
        <div className='colors-selector__container'>
            <div className='colors-selector'>
                {selectors}
            </div>
            <ColorSelector selectColor={props.selectColor} />
        </div>
    )
}

export default ColorsSelector