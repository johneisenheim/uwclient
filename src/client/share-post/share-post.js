import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import FirstRow from './first-row';
import ShareBottom from './share-bottom';
import Divider from '@material-ui/core/Divider';
import cookie from 'react-cookie';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 40
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%',
        background: '#FFFFFF',
        border: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.05)'
    },
    paperFocused: {
        boxShadow: '0 6px 8px 0 rgba(0,0,0,0.15)'
    }
});

class SimplePost extends Component {
    state = {
        focused: false,
        textAreaValue: undefined
    }
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        this.setTextAreaValue = this.setTextAreaValue.bind(this);
    }

    setFocus(focused) {
        this.setState({
            focused
        });
    }

    setTextAreaValue(textAreaValue){
        console.log('qui', textAreaValue)
        this.setState({
            ...this.state,
            textAreaValue
        })
        // return this.firstRow.getTextAreaValue();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={this.state.focused ? [classes.paper, classes.paperFocused] : classes.paper}>
                    <FirstRow setFocus={this.setFocus} setTextAreaValue={this.setTextAreaValue}/>
                    <Divider ligth='true' />
                    <ShareBottom textAreaValue={this.state.textAreaValue}/>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(SimplePost);