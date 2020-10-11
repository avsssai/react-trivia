import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class EndDialog extends Component {
    constructor(props) {
        super(props);
    }

    handleClickOpen = () => {
        this.props.handleClickOpen()
    };

    handleClose = () => {
        this.props.handleClickClose()

    };
    handleSubmit = () => {
        this.handleClose();
        this.props.handleSubmit()
    }
    render () {
        const { dialogOpen } = this.props;
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    End Game
          </Button>
                <Dialog
                    open={dialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"End the game?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Clicking agree takes you to the results page.
              </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            No, Review answers
              </Button>
                        <Button onClick={this.handleSubmit} color="primary" autoFocus>
                            <Link to="/results">
                                Yes, End Game
                            </Link>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );

    }
}
