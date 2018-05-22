import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import FirstRow from './first-row';
import ShareBottom from './share-bottom';
import Divider from '@material-ui/core/Divider';
import cookie from 'react-cookie';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_POST = gql`
    {
        post {
            title
        }
    }
`;

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
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
        focused: false
    }
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
    }

    setFocus(focused){
        this.setState({
            focused
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={this.state.focused ? [classes.paper, classes.paperFocused] : classes.paper}>
                    <FirstRow setFocus={this.setFocus}/>
                    <Divider ligth='true' />
                    <ShareBottom />
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(SimplePost);