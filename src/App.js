import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Landing from './Landing.js';
import Category from './Category';
import Difficulty from './Difficulty';
import Results from './Results';
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
      questionSets: [],
      back: false,
      answers: Array(10).fill(null),
      loading: true

    }
    this.getQuestions = this.getQuestions.bind(this);
    this.selectDifficulty = this.selectDifficulty.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.syncAnswers = this.syncAnswers.bind(this);
  }
  async getQuestions () {

    const url = `https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}`;
    console.log(url);
    const data = await Axios.get(url);
    console.log(data);
    this.setState({
      data: makeQuestionSets(data.data.results),
      loading: false
    })

  }
  selectDifficulty (difficulty) {
    this.setState(state => ({
      difficulty: difficulty
    }), () => this.getQuestions()
    )
  }
  selectCategory (category) {
    this.setState(state => ({
      category: category,
      back: true
    }), () => this.props.history.push('/difficulty'))
  }
  handleSubmit () {
    this.setState({
      back: false,
      category: "",
      difficulty: "",
      loading: true
    })
  }

  syncAnswers (answers) {
    this.setState({
      answers
    })
  }
  render () {
    const { back, data, answers, loading } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routeProps) => <Landing {...routeProps} getData={this.getQuestions} />} />
          <Route exact path="/difficulty" render={(routeProps) => <Difficulty {...routeProps} selectDifficulty={this.selectDifficulty} />} />
          <Route exact path="/category" render={(routeProps) => <Category {...routeProps} selectCategory={this.selectCategory} />} />
          <Redirect exact from="/difficulty" to="/game" />
          <Route exact path="/game" render={routeProps => back ? <Game {...routeProps} questionSets={data} handleSubmit={this.handleSubmit} loading={loading} syncAnswers={this.syncAnswers} /> : <Redirect to={{ pathname: "/" }} />} />
          <Redirect exact from="/game" to="/results" />

          <Route exact path="/results" render={(routeProps) => <Results {...routeProps} questionSets={data} answers={answers} />} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
