import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Results.css'


import Navbar from './Navbar';

export default class Results extends Component {
    render () {
        const { answers, questionSets } = this.props;
        const questions = questionSets.map((question, index) => {
            return (<Card variant="outlines" key={question.question}>
                <CardContent>
                    <div>
                        <span>{index + 1}</span>
                        <span>{question.question}</span>
                    </div>
                    <div>
                        {question.shuffledAnswers.map((answer, index) => {
                            return (<Card key={answer} variant="outlined">
                                <CardContent>
                                    {answer}
                                </CardContent>
                            </Card>)
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
                                <span className="score-scored">10</span><span className="total-score">/ 10</span>
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
