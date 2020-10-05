import React, { Component } from 'react'

export default class Difficulty extends Component {
    constructor(props) {
        super(props);
        this.selectDifficulty = this.selectDifficulty.bind(this);
    }
    selectDifficulty (e) {
        this.props.selectDifficulty(e.target.name);
    }
    render () {
        return (
            <div>
                <button onClick={this.selectDifficulty} name="easy">Easy</button>
                <button onClick={this.selectDifficulty} name="medium">Medium</button>
                <button onClick={this.selectDifficulty} name="hard">Hard</button>
            </div>
        )
    }
}
