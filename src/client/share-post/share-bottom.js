import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
// import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ImageIcon from '@material-ui/icons/Image';
import ShareIcon from '@material-ui/icons/Share';
import PinIcon from '@material-ui/icons/PinDrop';
import IconButton from "components/CustomButtons/IconButton.jsx";
import Button from "components/CustomButtons/Button.jsx";
import UButton from '../components/ubutton';

const styles = theme => ({
    root: {
        width: '92%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 30
    },
    iconOff: {
        color: '#CCCCCC',
        fontSize: 25
    },
    iconOn: {
        color: '#ffc107',
        fontSize: 28
    },
    divider: {
        width: '100%',
        border: '0 none',
        backgroundColor: '#F5F5F5',
        height: 2,
        marginBottom: 10
    },
    span: {
        marginLeft: 10
    },
    expansion: {
        boxShadow: 'none',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0
    },
    summary: {
        boxShadow: 'none',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 0,
        cursor: 'default'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    sendContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 30
    },
    iconButton: {
        marginLeft: 10,
        fill: '#525252'
    }
});

class ShareBottom extends Component {
    constructor(props) {
        super(props);
        this.onHeartClick = this.onHeartClick.bind(this);
        this.onCommentClick = this.onCommentClick.bind(this);
        this.onShareClick = this.onShareClick.bind(this);
        this.onExpansionChange = this.onExpansionChange.bind(this);
        this.state = {
            isHeartOn: false,
            isCommentOn: false,
            isShareOn: false,
            heartCount: 31,
            expanded: false
        };
    }

    onHeartClick() {
        this.setState({
            ...this.state,
            isHeartOn: !this.state.isHeartOn,
            heartCount: this.state.isHeartOn ? this.state.heartCount - 1 : this.state.heartCount + 1
        });
    }

    onCommentClick() {
        this.setState({
            ...this.state,
            expanded: !this.state.expanded
        });
    }

    onShareClick() {
        this.setState({
            ...this.state,
            isShareOn: !this.state.isShareOn
        });
    }

    onExpansionChange(e) {
        return;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.buttonContainer}>
                    <IconButton color="transparent" className={classes.iconButton}>
                        <ImageIcon className={this.state.isHeartOn ? classes.iconOn : classes.iconOff} />
                    </IconButton>
                    <IconButton color="transparent" className={classes.iconButton}>
                        <ShoppingCartIcon className={this.state.isCommentOn ? classes.iconOn : classes.iconOff} />
                    </IconButton>
                    <IconButton color="transparent" className={classes.iconButton}>
                        <ShareIcon className={this.state.isShareOn ? classes.iconOn : classes.iconOff} />
                    </IconButton>
                    <IconButton color="transparent" className={classes.iconButton}>
                        <PinIcon className={this.state.isShareOn ? classes.iconOn : classes.iconOff} />
                    </IconButton>
                </div>
                <div className={classes.sendContainer}>
                    <UButton label='publish' />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ShareBottom);