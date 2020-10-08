import React, { Component } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CSSTransition } from 'react-transition-group';

import './Question.css';
import Answer from './Answer';

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
        this.selectAnswer = this.selectAnswer.bind(this);
    }
    selectAnswer (answer, index) {
        this.props.selectAnswer(answer, index)
    }
    render () {
        const { prevQuestion, nextQuestion, questionIndex } = this.props;
        return (
            <CSSTransition>
                <div className="question-container">
                    <ChevronLeftIcon onClick={() => prevQuestion()} />
                    <div className="question-wrapper">
                        <div className="question">

                            <h3><span className="question-number">{this.props.questionNumber})</span><span className="actual-question">{this.props.question.question}</span></h3>
                        </div>
                        <div className="answers">
                            {this.props.question.shuffledAnswers.map((answer, i) => {
                                return <Answer
                                    answer={answer}
                                    key={answer}
                                    questionIndex={questionIndex}
                                    index={i}
                                    selectAnswer={this.selectAnswer}
                                />
                            })}
                        </div>
                    </div>
                    <ChevronRightIcon onClick={() => nextQuestion()} />

                </div>

            </CSSTransition>
        )
    }
}

export default Question;