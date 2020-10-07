import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Landing from './Landing.js';
import Category from './Category';
import Difficulty from './Difficulty';
import Game from './Game';
import Axios from 'axios';
import { makeQuestionSets } from './helpers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      difficulty: "",
      data: [],
      questionSets: []

    }
    this.getQuestions = this.getQuestions.bind(this);
    this.selectDifficulty = this.selectDifficulty.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }
  async getQuestions () {

    const url = `https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}`
    const data = await Axios.get(url);
    console.log(data);
    this.setState({
      data: makeQuestionSets(data.data.results)
    })

  }
  selectDifficulty (difficulty) {
    this.setState({
      difficulty
    }, () => this.getQuestions()
    )
  }
  selectCategory (category) {
    this.setState({
      category
    }, () => this.props.history.push('/difficulty'))
  }
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routeProps) => <Landing {...routeProps} getData={this.getQuestions} />} />
          <Route exact path="/difficulty" render={(routeProps) => <Difficulty {...routeProps} selectDifficulty={this.selectDifficulty} />} />
          <Route exact path="/category" render={(routeProps) => <Category {...routeProps} selectCategory={this.selectCategory} />} />
          <Route exact path="/game" render={routeProps => <Game {...routeProps} questionSets={this.state.data} />} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
