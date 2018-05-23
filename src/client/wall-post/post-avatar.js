import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    infoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 7
    },
    avatar: {
        margin: 10,
        marginLeft: 20,
        width: 50,
        height: 50,
        backgroundColor: '#ff9800'
    },
    name: {
        color: '#808080',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 16, 
        marginBottom: 6,
    },
    infos: {
        ...theme.typography.subheading,
        color: '#B3B3B3',
        fontSize: 13
    },
    divider: {
        width: '100%',
        border: '0 none',
        backgroundColor: '#F5F5F5',
        height: 2,
        marginBottom: 10
    }
});

class PostAvatar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.row}>
                    <Avatar className={classes.avatar}>AS</Avatar>
                    <div className={classes.infoContainer}>
                        <div className={classes.name}>{this.props.name}</div>
                        <div className={classes.infos}>{'8 min. ago'}</div>
                    </div>
                </div>
                <hr className={classes.divider} />
            </div>
        )
    }
}

export default withStyles(styles)(PostAvatar);
