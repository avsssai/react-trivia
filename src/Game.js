import React, { Component } from 'react';
import Navbar from './Navbar';
import Question from './Question';
import './Game.css';


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            answers: Array(10).fill(null)
        }
        this.handleNextQuestionClick = this.handleNextQuestionClick.bind(this);
        this.handlePrevQuestionClick = this.handlePrevQuestionClick.bind(this);
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
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
    handleSelectAnswer (answer, index) {
        const answersClone = this.state.answers.slice();
        answersClone[index] = answer;
        this.setState({
            answers: answersClone
        })
    }
    render () {
        const { questionSets } = this.props;
        const { questionNumber } = this.state;
        const questionCards = questionSets.map((question, questionIndex) => {
            return (


                <Question
                    question={question}
                    key={question.question}
                    prevQuestion={this.handlePrevQuestionClick}
                    nextQuestion={this.handleNextQuestionClick}
                    questionNumber={this.state.questionNumber + 1}
                    selectAnswer={this.handleSelectAnswer}
                    questionIndex={questionIndex}

                />

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
