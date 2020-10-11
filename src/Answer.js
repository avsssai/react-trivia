import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import './Question.css';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: false
        }
        this.selectAnswer = this.selectAnswer.bind(this);
    }
    selectAnswer () {
        // this.setState({
        //     selectedAnswer: true
        // })
        this.props.selectAnswer(this.props.answer, this.props.questionIndex);
    }
    render () {
        const options = ["A", "B", "C", "D"];
        const { answer, selectedAnswer } = this.props;
        return (
            <Card className={`answer ${answer === selectedAnswer && 'selected-answer'}`} onClick={this.selectAnswer}>
                < CardContent >
                    <Typography variant="body2" component="p">
                        <span className='option'>{options[this.props.index]})</span>
                        {this.props.answer}
                    </Typography>
                </ CardContent>
            </Card>
        )

    }
}


export default Answer;