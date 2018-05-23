import React, { Component } from 'react';
import {
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Avatar from '@material-ui/core/Avatar';
import UButton from '../../components/ubutton';
import Textarea from "react-textarea-autosize";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        width: '100%',
        flexBasis: '100%',
        backgroundColor: 'transparent'
    },
    avatar: {

    },
    commentBoxContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1
    },
    textareaContainer: {
        width: '100%',
        borderRadius: 15,
        borderColor: '#F5F5F5',
        color: '#808080',
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        borderStyle: 'solid',
        padding: 10
    },
    details: {
        width: '100%'
    },
    textarea: {
        width: '99%',
        resize: 'none',
        border: 0,
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 400,
        color: '#808080',
        outline: 'none !important',
        '&::placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: '#BFBFBF',
            opacity: 1 /* Firefox */
        },
        '&:-ms-input-placeholder': { /* Internet Explorer 10-11 */
            color: '#BFBFBF'
        },
        '&::-ms-input-placeholder': { /* Microsoft Edge */
            color: '#BFBFBF'
        }
    }
})
class Details extends Component {
    render() {
        const { classes } = this.props;
        return (
            <ExpansionPanelDetails classes={{ root: classes.root }}>
                <div className={classes.commentBoxContainer}>
                    <Avatar className={classes.avatar}>AS</Avatar>
                    <div
                        className={classes.textareaContainer}
                    >
                        <Textarea
                            minRows={2}
                            className={classes.textarea}
                            placeholder={"Write your comment here..."}
                            style={{ width: '100%' }}
                        ></Textarea>
                    </div>
                    <UButton label='Comment' />
                </div>
            </ExpansionPanelDetails>
        )
    }
}

export default withStyles(styles)(Details);
