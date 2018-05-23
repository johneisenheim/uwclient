import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
// import Textarea from "react-textarea-autosize";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30
    },
    avatar: {
        margin: 5,
        marginLeft: 20,
        width: 60,
        height: 60,
        backgroundColor: '#ff9800',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.15)'
    },
    textarea: {
        width: '99%',
        resize: 'none',
        border: 0,
        // fontFamily: 'Roboto',
        // fontSize: 15,
        // fontWeight: 700,
        color: '#525252',
        fontSize: '15px',
        outline: 'none !important',
        marginTop: 20,
        '&::-webkit-input-placeholder': {
            color: '#C8C8C8'
        }
    }
});

class FirstRow extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        textAreaHeight: 'auto'
    };

    componentDidMount() {
        this.textarea.addEventListener('input', () => {
            this.setState({
                textAreaHeight: this.textarea.scrollHeight
            }, () => {
                this.props.setTextAreaValue(this.textarea.value);
            });
        })
        this.textarea.addEventListener('focus', () => {
            this.props.setFocus(true);
        });
        this.textarea.addEventListener('blur', () => {
            this.props.setFocus(false);
        })
    }

    getContent(){
        return this.textarea.value;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Avatar className={classes.avatar}>AS</Avatar>
                <textarea
                    minRows={2}
                    className={classes.textarea}
                    placeholder="What do you want to share?"
                    style={{ width: '100%', marginLeft: 10, height: this.state.textAreaHeight }}
                    ref={(area) => this.textarea = area}
                ></textarea>
            </div>
        )
    }
}

export default withStyles(styles)(FirstRow);