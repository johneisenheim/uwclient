import React from 'react';
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Slide from "material-ui/transitions/Slide";
import Dialog from "material-ui/Dialog";
import DialogTitle from "material-ui/Dialog/DialogTitle";
import DialogContent from "material-ui/Dialog/DialogContent";
import DialogActions from "material-ui/Dialog/DialogActions";
import IconButton from "material-ui/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";
import { resetCookie } from '../utils/cookies';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class SignoutModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.isModalOpened
        };
        this.signout = this.signout.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isModalOpened !== nextProps.isModalOpened) {
            this.setState({
                modal: nextProps.isModalOpened
            })
        }
    }

    handleClickOpen() {
        this.setState({
            modal: true
        })
    }

    handleClose() {
        this.setState({
            modal: false
        })
        this.props.updateModalStatus(false);
    }

    signout(){
        resetCookie();
        window.location.reload();
    }

    render() {
        const { classes } = this.props;
        return (
            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal
                }}
                open={this.state.modal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => this.handleClose("modal")}
                aria-labelledby="modal-slide-title"
                aria-describedby="modal-slide-description">
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}>
                    <h4 className={classes.modalTitle}><b>Sign Out</b></h4>
                </DialogTitle>
                <DialogContent
                    id="modal-slide-description"
                    className={classes.modalBody}>
                    <h5>Are you sure you want to logout?</h5>
                </DialogContent>
                <DialogActions
                    className={classes.modalFooter + " " + classes.modalFooterCenter}>
                    <Button
                        simple 
                        color="primary" 
                        onClick={() => this.handleClose("modal")}
                    >
                        Never Mind
                    </Button>
                    <Button
                        round
                        onClick={() => this.signout()}
                        color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(modalStyle)(SignoutModal);