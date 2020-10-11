import React, { Component } from 'react';
import Navbar from './Navbar';
import Question from './Question';
import EndDialog from './EndDialog';
import { CSSTransition } from 'react-transition-group';
import './Game.css';


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            answers: Array(10).fill(null),
            inProp: false,
            direction: "",
            dialogOpen: false
        }
        this.handleNextQuestionClick = this.handleNextQuestionClick.bind(this);
        this.handlePrevQuestionClick = this.handlePrevQuestionClick.bind(this);
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }
    handleNextQuestionClick () {
        if (this.state.questionNumber >= 9) {
            return;
        }
        this.setState(state => ({
            inProp: true,
            direction: "right"
        }), () => {
            setTimeout(() => this.setState(state => ({
                questionNumber: state.questionNumber + 1,
                inProp: false,
                direction: ""
            })), 500)

        })
    }
    handlePrevQuestionClick () {
        if (this.state.questionNumber <= 0) {
            return;
        }

        this.setState(state => ({
            inProp: true,
            direction: "left"
        }), () => {
            setTimeout(() => this.setState(state => ({
                questionNumber: state.questionNumber - 1,
                inProp: false,
                direction: ""
            })), 500)
        })
    }
    handleSelectAnswer (answer, index) {
        const answersClone = this.state.answers.slice();
        answersClone[index] = answer;
        this.setState({
            answers: answersClone
        }, () => this.handleNextQuestionClick());
        if (this.state.questionNumber === 9) {
            this.handleDialogOpen()
        }

    }
    handleDialogOpen () {
        this.setState({
            dialogOpen: true
        })
    }
    handleDialogClose () {
        this.setState({
            dialogOpen: false
        })
    }
    render () {
        const { questionSets } = this.props;
        const { questionNumber, inProp, answers, dialogOpen } = this.state;
        const questionCards = questionSets.map((question, questionIndex) => {
            return (

                <CSSTransition in={inProp} timeout={500} classNames="my-question">

                    <Question
                        question={question}
                        key={question.question}
                        prevQuestion={this.handlePrevQuestionClick}
                        nextQuestion={this.handleNextQuestionClick}
                        questionNumber={this.state.questionNumber + 1}
                        selectAnswer={this.handleSelectAnswer}
                        questionIndex={questionIndex}
                        answers={answers}
                        direction={this.state.direction}

                    />
                </CSSTransition>

            )
        })
        return (
            <div className="game-container">
                <Navbar endGameButton handleClickOpen={this.handleDialogOpen} handleClickClose={this.handleDialogClose} dialogOpen={dialogOpen} handleSubmit={() => this.props.handleSubmit()} />
                {/* <EndDialog handleClickOpen={this.handleDialogOpen} handleClickClose={this.handleDialogClose} open={dialogOpen} /> */}
                {questionCards[questionNumber]}
            </div>
        )
    }
}
