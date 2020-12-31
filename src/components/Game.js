import React from 'react'

import Round from './Round'
import ColorsSelector from './ColorsSelector'
import GameBoard from './GameBoard'
import PlayButton from './PlayButton'
import NewGame from './NewGame'
import EndMessage from './EndMessage'

const Game = (props) => (
    <div>
        <div className='game-container'>
            <div className='game-container__horizontal'>
                <div className='game-container__left'>
                    {!props.winner && !props.loser ? <Round 
                        round={props.round}
                        rounds={props.rounds}
                    /> : null}
                    {props.winner || props.loser ? <EndMessage code={props.code} winner={props.winner} loser={props.loser} /> : null}
                    {!props.winner && !props.loser ?
                    <ColorsSelector 
                        className='game-container__colors-selector'
                        selectColor={props.selectColor}
                        selectedColors={props.selectedColors}
                        highlight={props.highlight}
                        highlighted={props.highlighted}
                    /> : null}
                </div>
                <GameBoard 
                    rounds={props.rounds}
                    playedRounds={props.playedRounds} 
                    responses={props.responses}
                />
            </div>
            <div className='game-container__button'>
                {props.winner || props.loser ? <NewGame newGame={props.newGame} /> : <PlayButton playRound={props.playRound} />}
            </div>
        </div>
    </div>
)

export default Game