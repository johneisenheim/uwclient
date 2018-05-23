import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit,
        borderRadius: 20,
        backgroundColor: '#ff9800',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.15)',
        color: '#FFFFFF'
    },
    input: {
        display: 'none',
    },
});

//{polyglot.t("home.signup")}

class UButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Button variant="raised" className={classes.button} onClick={this.props.onClick !== undefined ? () => this.props.onClick() : () => { }}>
                {this.props.label}
            </Button>
        )
    }
}

export default withStyles(styles)(UButton);