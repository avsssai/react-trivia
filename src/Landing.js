import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import question from './undraw_Questions_re_1fy7.svg';

import Navbar from './Navbar';

import './Landing.css';

export default class Landing extends Component {
    render () {
        return (
            <section className="landing-page">
                <Navbar />
                <CssBaseline />
                <div className="landing-content" >
                    <div className="left-content">
                        <Typography variant="h1">Trivia!</Typography>
                        <Typography variant="h5">The ultimate quiz app to check your skills.</Typography>
                        <Link to='/category'>

                            <Button variant="contained" className="category-chooser-button" size="large">
                                Start Game
                        </Button>
                        </Link>
                    </div>

                    <div className="right-content">
                        <div className="question-mark-image">
                            <img src={question} alt="question" />
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}
