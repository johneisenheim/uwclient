import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PostAvatar from './post-avatar';
import PostContent from './post-content';
import BottomPost from './post-bottom/post-bottom';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F7F7F7',
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
    }
});

class WallPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.data.sent_by,
            like: this.props.data.like_number,
            shared: this.props.data.shared_number,
            id: this.props.data.id,
            content: this.props.data.content
        }
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) {
            this.setState({
                name: nextProps.data.sent_by,
                like: nextProps.data.like_number,
                shared: nextProps.data.shared_number,
                id: nextProps.data.id,
                content: nextProps.data.content
            });
        }
    }

    render() {
        const { classes } = this.props;
        const bottomData = { like: this.state.like, shared: this.state.shared };
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <PostAvatar name={this.state.name}/>
                    <PostContent content={this.state.content} />
                    <BottomPost auction={false} bottomData={bottomData} />
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(WallPost);
