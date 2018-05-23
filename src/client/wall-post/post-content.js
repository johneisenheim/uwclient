import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactTextMoreLess from 'react-text-more-less';

const styles = theme => ({
    root: {
        width: '92%',
        height: '100%',
        textAlign: 'justify',
        lineHeight: 1.4,
        fontFamily: 'Roboto',
        color: '#999999',
        fontWeight: 500,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
    image: {
        marginTop: 20,
        objectFit: 'cover',
        width: '100%',
        marginBottom: 20,
        webkitBoxShadow: '0px 2px 16px 0px rgba(0,0,0,0.26)',
        mozBoxShadow: '0px 2px 16px 0px rgba(0,0,0,0.26)',
        boxShadow: '0px 2px 16px 0px rgba(0,0,0,0.26)'
    }
});

class PostContent extends Component {
    state = {
        collapsed: true,
    };
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        const content = this.props.content;
        return (
            <div className={classes.root}>
                <ReactTextMoreLess
                    collapsed={this.state.collapsed}
                    text={`${content}`}
                    lessHeight={50}
                    showMoreText=" ...more"
                    showMoreElement={(
                        <span>
                            ... <span style={{ color: 'rgba(239, 160, 65, 1)', fontWeight: 'bold', cursor: 'pointer' }}>more</span>
                        </span>
                    )}
                    // showLessElement={(
                    //     <span className="show-more-text"> ...less</span>
                    // )}
                    onClick={() => { this.setState({ collapsed: !this.state.collapsed }) }}
                />
                {/* <img src="./assets/images/1.jpg" className={classes.image}></img> */}
            </div>
        )
    }
}

export default withStyles(styles)(PostContent);
