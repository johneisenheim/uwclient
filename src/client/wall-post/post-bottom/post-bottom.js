import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HeartIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Button from '@material-ui/core/Button';
import Details from './details';
import AuctionIcon from '@material-ui/icons/Gavel';

const styles = theme => ({
    root: {
        width: '92%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    iconOff: {
        color: '#CCCCCC',
        fontSize: 28
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
        fontFamily: 'Roboto',
        fontWeight: 700,
        color: '#CCCCCC',
        fontWeight: 500,
        fontSize: 14,
        marginLeft: 10
    },
    expansion: {
        boxShadow: 'none',
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
    summaryContent: {
        width: 'auto'
    }
});

class PostBottom extends Component {

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
            heartCount: this.props.bottomData.like,
            expanded: false,
            shared: this.props.bottomData.shared
        };
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props.bottomData) !== JSON.stringify(nextProps.bottomData)) {
            this.setState({
                ...this.state,
                heartCount: nextProps.bottomData.like,
                shared: nextProps.bottomData.shared
            })
        }
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
                <ExpansionPanel className={classes.expansion} expanded={this.state.expanded}>
                    <ExpansionPanelSummary classes={{ root: classes.summary, content: classes.summaryContent }}>
                        <Button color="primary" onClick={this.onHeartClick}>
                            <HeartIcon className={this.state.isHeartOn ? classes.iconOn : classes.iconOff} />
                            <span className={classes.span}>{this.state.heartCount} Likes</span>
                        </Button>
                        <Button color="primary" onClick={this.onCommentClick} style={{ marginLeft: 20 }}>
                            <CommentIcon className={this.state.isCommentOn ? classes.iconOn : classes.iconOff} />
                            <span className={classes.span}>0 Comments</span>
                        </Button>
                        {this.props.auction ?
                            <Button color="primary">
                                <AuctionIcon className={this.state.isShareOn ? classes.iconOn : classes.iconOff} />
                                <span className={classes.span}>Start the auction</span>
                            </Button> :
                            <Button color="primary">
                                <ShareIcon className={this.state.isShareOn ? classes.iconOn : classes.iconOff} />
                                <span className={classes.span}>{this.state.shared} Shares</span>
                            </Button>
                        }
                    </ExpansionPanelSummary>
                    <Details />
                </ExpansionPanel>
            </div>
        )
    }
}

export default withStyles(styles)(PostBottom);
