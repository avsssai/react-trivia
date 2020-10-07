import React, { Component } from 'react';
import Navbar from './Navbar';
import Question from './Question';
import './Game.css';


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0
        }
        this.handleNextQuestionClick = this.handleNextQuestionClick.bind(this);
        this.handlePrevQuestionClick = this.handlePrevQuestionClick.bind(this);
    }
    handleNextQuestionClick () {
        if (this.state.questionNumber >= 9) {
            return;
        }

        this.setState(state => ({
            questionNumber: state.questionNumber + 1
        }))
    }
    handlePrevQuestionClick () {
        if (this.state.questionNumber <= 0) {
            return;
        }

        this.setState(state => ({
            questionNumber: state.questionNumber - 1
        }))
    }

    render () {
        const { questionSets } = this.props;
        const { questionNumber } = this.state;
        const questionCards = questionSets.map(question => {
            return (


                <Question question={question} key={question.question} prevQuestion={this.handlePrevQuestionClick} nextQuestion={this.handleNextQuestionClick} />

            )
        })
        return (
            <div className="game-container">
                <Navbar />
                {questionCards[questionNumber]}
            </div>
        )
    }
}
