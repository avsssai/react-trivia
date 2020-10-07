import React, { Component } from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


import './Difficulty.css';

export default class Difficulty extends Component {
    constructor(props) {
        super(props);
        this.selectDifficulty = this.selectDifficulty.bind(this);
    }
    selectDifficulty (e) {
        this.props.selectDifficulty(e.target.name);
        this.props.history.push('/game');
    }
    render () {
        return (
            <div className="difficulty-page">
                <nav>
                    <Navbar />
                </nav>
                <Typography variant="h3" className="difficulty-heading">Choose Difficulty!</Typography>

                <section className="difficulty-buttons">

                    <Button onClick={this.selectDifficulty} variant="outlined" name="easy" className="easy">Easy</Button>
                    <Button onClick={this.selectDifficulty} variant="outlined" className="medium" name="medium">Medium</Button>
                    <Button onClick={this.selectDifficulty} variant="outlined" className="hard" name="hard">Hard</Button>
                </section>
            </div>
        )
    }
}
