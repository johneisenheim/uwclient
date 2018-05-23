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
import { CookiesProvider } from 'react-cookie';
import { withCookies } from 'react-cookie';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import SignIn from './login/signin';
import Register from './login/registration';
import Wall from './wall/wall';
import { isAuthenticated } from './utils/cookies';

class Components extends React.Component {
    state = {
        isLoading: false,
        isSigninVisible: true
    }

    constructor(props) {
        super(props);
        this.changeComponentToShow = this.changeComponentToShow.bind(this);
        this.renderComponents = this.renderComponents.bind(this);
    }

    componentDidMount() {
        // console.log('localstorage', localStorage.getItem('a'), typeof localStorage.getItem('a'));
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000);
        //this.props.cookies.get('server-session-cookie-id')
    }

    changeComponentToShow() {
        this.setState({
            ...this.state,
            isSigninVisible: !this.state.isSigninVisible
        })
    }

    renderComponents() {
        if (isAuthenticated()) {
            return <Wall />
        } else {
            if (this.state.isSigninVisible)
                return <SignIn changeComponentToShow={this.changeComponentToShow} />
            else return <Register changeComponentToShow={this.changeComponentToShow} />
        }
    }

    render() {
        const { classes, ...rest } = this.props;
        if (this.state.isLoading)
            return (
                <div className={classes.mainComponent}>
                    <CircularProgress style={{ color: '#ff9800' }} />
                </div>
            )
        return (
            <div className={classes.mainComponent} style={{overflow: 'hidden'}}>
                {this.renderComponents()}
            </div>
        );
    }
}

export default withStyles(componentsStyle)(Components);

