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

class Register extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden",
            userType: 0,
            loading: false,
            success: undefined,
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.renderMessages = this.renderMessages.bind(this);
    }
    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            function () {
                this.setState({ cardAnimaton: "" });
            }.bind(this),
            700
        );
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            userType: event.target.value
        })
    }

    submit(event) {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const data = new FormData(event.target);
        axios.post('https://uwhiskey-server.herokuapp.com/rest/register', data)
            .then((response) => {                
                if (response.data.msg === undefined) {
                    this.setState({
                        loading: false,
                        success: response.data.success
                    });
                }else{
                    this.setState({
                        loading: false,
                        success: false,
                        msg: response.data.msg
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderMessages() {
        if (this.state.success === undefined) return null;
        if (this.state.success)
            return (
                <GridItem xs={12} sm={12} md={4} lg={6}>
                    <SnackbarContent
                        message={
                            <span>
                                <b>GREAT!</b> Please, check your email inbox and confirm your account!
                                    </span>
                        }
                        close
                        color="success"
                        icon={Check}
                    />
                </GridItem>
            )
        if (this.state.success === false){
            const msg = this.state.msg !== undefined ? this.state.msg : 'Something went wrong!';
            const message = <span><b>OOOPS!</b> {msg}</span>
            return (
                <GridItem xs={12} sm={12} md={4} lg={6}>
                    <SnackbarContent
                        message={message}
                        close
                        color="danger"
                        icon={Check}
                    />
                </GridItem>
            )
        }
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <div className={classes.container}>
                    <GridContainer justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {this.renderMessages()}
                        <GridItem xs={12} sm={12} md={4} lg={5}>
                            <Card className={classes[this.state.cardAnimaton]}>
                                <form className={classes.form} onSubmit={this.submit}>
                                    <CardBody>
                                        <center><img src={logo} style={{ width: '70%', marginBottom: 20, marginTop: 20 }} /></center>
                                        <CustomInput
                                            labelText="First Name"
                                            id="first"
                                            select
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "first_name",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Last Name"
                                            id="last"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "last_name",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Email"
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                type: "email",
                                                name: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                type: "password",
                                                name: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <LockOutline className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <Select
                                            value={this.state.userType}
                                            onChange={this.handleChange}
                                            input={<Input name="userType" id="name-disabled" />}
                                            style={{ width: '100%', marginTop: 20 }}
                                            name="userType"
                                        >
                                            <MenuItem value={0}>Enthusiast</MenuItem>
                                            <MenuItem value={1}>Distributor</MenuItem>
                                            <MenuItem value={2}>Seller</MenuItem>
                                            <MenuItem value={3}>Distillery</MenuItem>
                                        </Select>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button color="primary" round type="submit" disabled={this.state.loading}>
                                            Register
                                        </Button>
                                        {this.state.loading ? <CircularProgress size={24} style={{
                                            color: '#ff9800'
                                        }} /> : null}
                                        <Button color="primary" simple onClick={() => window.location.href = '/'}>Sign In</Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(loginPageStyle)(Register);
