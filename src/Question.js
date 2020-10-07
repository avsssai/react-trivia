import React, { Component } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CSSTransition } from 'react-transition-group';

import './Question.css';

/* 
{category: "Sports", correct_answer: "Leicester Cit…}
category
"Sports"
correct_answer
"Leicester City"
difficulty
"easy"

incorrect_answers
["Northampton Town", "Bradford City", "West Bromwic…]
question
"Which English football club has the nickname &#039;The Foxes&#039;?"

shuffledAnswers
["West Bromwich Albion", "Bradford City", "Leiceste…]
type
"multiple"


*/
class Question extends Component {
    constructor(props) {
        super(props);

    }
    render () {
        const { prevQuestion, nextQuestion } = this.props;
        return (
            <CSSTransition>
                <div className="question-container">
                    <ChevronLeftIcon onClick={() => prevQuestion()} />
                    <div className="question-wrapper">

                        <h3>{this.props.question.question}</h3>
                    </div>
                    <ChevronRightIcon onClick={() => nextQuestion()} />

                </div>

            </CSSTransition>
        )
    }
}

export default Question;