import React from 'react'

import Game from './Game'
import WelcomeScreen from './WelcomeScreen'

class Codebreaker extends React.Component {
    constructor(props) {
        super(props)
        this.colors = ['red', 'black', 'green', 'blue', 'purple', 'orange', 'white', 'yellow']
        this.generateCode = this.generateCode.bind(this)
        this.newGame = this.newGame.bind(this)
        this.highlight = this.highlight.bind(this)
        this.selectColor = this.selectColor.bind(this)
        this.generateResponse = this.generateResponse.bind(this)
        this.playRound = this.playRound.bind(this)
        this.state = {
            started: false,
            winner: false,
            loser: false,
            rounds: 12,
            round: 0,
            code: [],
            highlighted: undefined,
            selectedColors: [undefined, undefined, undefined, undefined, undefined],
            playedRounds: [],
            responses: []
        }
    }
    generateCode() {
        let code = []
        while (code.length < 5) {
            const randomNum = Math.floor(Math.random() * 8)
            const newColor = this.colors[randomNum]
            if (code.indexOf(newColor) === -1) {
                code.push(newColor)
            }
        }
        return code
    }
    newGame() {
        const code = this.generateCode()
        const round = 0
        const highlighted = undefined
        const selectedColors = [undefined, undefined, undefined, undefined, undefined]
        const playedRounds = []
        const responses = []
        const started = true
        const winner = false
        const loser = false
        this.setState(() => {
            return {
                code,
                round,
                highlighted,
                selectedColors,
                playedRounds,
                responses,
                started,
                winner,
                loser
            }
        })
    }
    highlight(index) {
        this.setState(() => {
            return {
                highlighted: index
            }
        })
    }
    selectColor(color) {
        const index = this.state.highlighted
        if (index === undefined) {
            return
        }
        this.setState((prevState) => {
            prevState.selectedColors[index] = color
            return {
                highlighted: undefined,
                selectedColors: prevState.selectedColors
            }
        })
    }
    generateResponse() {
        let response = []
        const code = this.state.code
        const selectedColors = this.state.selectedColors
        code.forEach((color, i) => {
            if (color === selectedColors[i]) {
                response.push('black')
            } else if (selectedColors.indexOf(color) !== -1) {
                response.push('white')
            }
        })
        return response.sort().reverse()
    }
    playRound() {
        if (this.state.selectedColors.indexOf(undefined) !== -1) {
            return
        }
        const round = this.state.round + 1

        const playedRounds = [ ...this.state.playedRounds ]
        const selectedColors = this.state.selectedColors
        playedRounds.push(selectedColors)

        const responses = [ ...this.state.responses ]
        const response = this.generateResponse()
        responses.push(response)

        let winner = false
        let loser = false

        response.every((color) => color === 'black') ? winner = true : null
        round === this.state.rounds && !winner ? loser = true : null

        this.setState(() => {
            return {
                winner,
                loser,
                round,
                playedRounds,
                responses,
                selectedColors: [undefined, undefined, undefined, undefined, undefined]
            }
        })
    }
    render() {
        return(
            <div>
                {!this.state.started ? (
                    <WelcomeScreen newGame={this.newGame} />
                ) : null}
                {this.state.started ? (
                    <Game 
                        round={this.state.round}
                        rounds={this.state.rounds}
                        selectColor={this.selectColor}
                        selectedColors={this.state.selectedColors}
                        highlight={this.highlight}
                        highlighted={this.state.highlighted}
                        playedRounds={this.state.playedRounds}
                        responses={this.state.responses}
                        newGame={this.newGame}
                        playRound={this.playRound}
                        winner={this.state.winner}
                        loser={this.state.loser}
                        code={this.state.code}
                    />
                ) : null}
            </div>
        )
    }
}

export default Codebreaker