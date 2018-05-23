import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Badge from 'material-ui/Badge';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import CollectionIcon from '@material-ui/icons/Style';
import SearchIcon from '@material-ui/icons/Search';
import CommentIcon from '@material-ui/icons/Comment';

const styles = theme => ({
    root: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.05)'
    },
    list: {
        width: '100%',
    },
    listItem: {
        color: '#808080',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 500
    },
    margin: {
        marginLeft: -20
    },
    icon: {
        color: '#808080'
    }
});

class LeftList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List className={classes.list}>
                    <ListItem button>
                        <ShoppingBasket className={classes.icon} />
                        <ListItemText primary="Your orders" classes={{ primary: classes.listItem }} />
                        <ListItemSecondaryAction>
                            <Badge className={classes.margin} badgeContent={3} color="primary">
                            </Badge>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider light={true} />
                    <ListItem button>
                        <CollectionIcon className={classes.icon} />
                        <ListItemText primary="Your collection" classes={{ primary: classes.listItem }} />
                        <ListItemSecondaryAction>
                            <Badge className={classes.margin} badgeContent={8} color="secondary">
                            </Badge>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider light={true} />
                    <ListItem button>
                        <SearchIcon className={classes.icon} />
                        <ListItemText primary="Search products" classes={{ primary: classes.listItem }} />
                    </ListItem>
                    <Divider light={true} />
                    <ListItem button>
                        <CommentIcon className={classes.icon} />
                        <ListItemText primary="Comments" classes={{ primary: classes.listItem }} />
                        <ListItemSecondaryAction>
                            <Badge className={classes.margin} badgeContent={2} color="secondary">
                            </Badge>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default withStyles(styles)(LeftList);
