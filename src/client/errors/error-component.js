import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import logo from "assets/img/logo.png";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Check from "@material-ui/icons/Check";
import InfoOutline from "@material-ui/icons/InfoOutline";


class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    componentDidCatch({ error, info }) {
        console.log('component Did catch');
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <React.Fragment>
                {this.state.show ?
                    <div style={{ width: '100vw', position: 'absolute', top: 0, left: 0 }}>
                        <SnackbarContent
                            message={
                                <span>
                                    <b>A</b></span>
                            }
                            close
                            color="danger"
                            icon={InfoOutline}

                        />
                    </div> : null}
                {this.props.children}
            </React.Fragment>
        );
    }
}


export default withStyles(loginPageStyle)(ErrorComponent);
