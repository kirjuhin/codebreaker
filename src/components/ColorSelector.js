import React from 'react'

const ColorSelector = (props) => (
    <div className='color-selector'>
        <div 
         className ='color-selector__orange'
         onClick={() => props.selectColor('orange')}
        />
        <div
         className ='color-selector__purple' 
         onClick={() => props.selectColor('purple')}
        />
        <div
         className ='color-selector__black' 
         onClick={() => props.selectColor('black')}
        />
        <div
         className ='color-selector__white' 
         onClick={() => props.selectColor('white')}
        />
        <div
         className ='color-selector__blue' 
         onClick={() => props.selectColor('blue')}
        />
        <div
         className ='color-selector__yellow' 
         onClick={() => props.selectColor('yellow')}
        />
        <div
         className ='color-selector__green' 
         onClick={() => props.selectColor('green')}
        />
        <div
         className ='color-selector__red' 
         onClick={() => props.selectColor('red')}
        />
    </div>
)

export default ColorSelector