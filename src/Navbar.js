import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EndDialog from './EndDialog';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import './Navbar.css';

export default class Navbar extends Component {

    render () {
        const { randomButton, endGameButton, dialogOpen, handleClickOpen, handleClickClose, handleSubmit, newGameButton } = this.props;
        return (
            <nav className="Navbar" >
                <Typography variant="h4" className="logo">Trivia!</Typography>
                {randomButton && <Button variant="contained" color="secondary" className="random">
                    Random Game
                </Button>
                }
                {
                    endGameButton && <EndDialog handleClickOpen={handleClickOpen} handleClickClose={handleClickClose} dialogOpen={dialogOpen} handleSubmit={handleSubmit} />

                }
                {newGameButton && <Button variant="contained" color="secondary" className="random">
                    <Link to="/">
                        New Game
                    </Link>
                </Button>
                }

            </nav>
        )
    }
}
