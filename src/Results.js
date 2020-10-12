import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ResultsAnswer from './ResultsAnswer';
import './Results.css'


import Navbar from './Navbar';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.answerType = (chosenAnswer, correctAnswer) => {
            if (chosenAnswer === correctAnswer) {
                return "correct"
            }
        }
    }
    render () {
        const { answers, questionSets } = this.props;
        const score = questionSets.reduce((acc, el, i) => el.correct_answer === answers[i] ? acc + 1 : acc, 0)
        const questions = questionSets.map((question, index) => {
            return (<Card variant="outlined" key={question.question} className="question-card">
                <CardContent>
                    <div className='question-name'>
                        <span className="question-option">{index + 1})</span>
                        <span className="actua-question">{question.question}</span>
                    </div>
                    <div className="answers">
                        {question.shuffledAnswers.map((answer, i) => {
                            return <ResultsAnswer answer={answer} question={question} questionIndex={index} answers={answers} answerIndex={i} />
                        })}
                    </div>
                </CardContent>
            </Card>)
        })
        return (
            <main className="results-page">
                <Navbar newGameButton />
                <section className="results-container">

                    <Card variant="outlined">
                        <CardContent>
                            <Typography className="score-heading" color="textSecondary" gutterBottom>
                                Score
                            </Typography>
                            <div className="score-container">
                                <span className="score-scored">{score}</span><span className="total-score">/ 10</span>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="correct-answers">
                    {questions}
                </section>
            </main>
        )
    }
}
