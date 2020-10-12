import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './Results.css';

export default class ResultsAnswer extends Component {
    render () {
        const { answer, question, answers, questionIndex, answerIndex } = this.props;
        const correctAnswer = question.correct_answer === answer;
        const chosenAnswer = (answers[questionIndex] !== question.correct_answer && answer === answers[questionIndex]) && "chosen-wrong";
        const unAttempted = answers[questionIndex] === null ? "unattempted" : "";
        const options = ["A", "B", "C", "D"];
        return (
            <Card key={answer} variant="outlined" className={
                `answer-card   ${chosenAnswer} ${correctAnswer ? "correct" : ""} ${unAttempted}`
            }>
                <CardContent>
                    {options[answerIndex]}) {answer}
                </CardContent>
            </Card>
        )
    }
}
