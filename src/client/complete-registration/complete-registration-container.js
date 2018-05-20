import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CircularProgress from '@material-ui/core/CircularProgress';

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import CompleteRegistration from './complete-registration';

class CompleteRegistrationContainer extends React.Component {
    state = {
        isLoading: false
    }

    constructor(props) {
        super(props);
        let a = props.location.search.split('&');
        this.token = a[0].split('=')[1];
        this.userType = parseInt(a[1].split('=')[1]);
    }
    componentDidMount() {
        // console.log('localstorage', localStorage.getItem('a'), typeof localStorage.getItem('a'));
        setTimeout(()=> {
            this.setState({
                isLoading: false
            })
        }, 3000);
    }
    render() {
        const { classes, ...rest } = this.props;
        if (this.state.isLoading)
            return (
                <div className={classes.mainComponent}>
                    <CircularProgress style={{ color: '#ff9800' }}/>
                </div>
            )
        return (
            <div className={classes.mainComponent}>
                <GridContainer>
                    <GridItem>
                        <CompleteRegistration token={this.token} userType={this.userType}/>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(componentsStyle)(CompleteRegistrationContainer);
