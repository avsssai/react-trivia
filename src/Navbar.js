import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import './Navbar.css';

export default class Navbar extends Component {
    render () {
        return (
            <nav className="Navbar" >
                <Typography variant="h4" className="logo">Trivia!</Typography>
                <Button variant="contained" color="secondary" className="random">
                    Random Game
                </Button>

            </nav>
        )
    }
}
