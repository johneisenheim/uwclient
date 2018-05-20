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

import signupPageStyle from "./complete-registration.css";
import logo from "assets/img/logo.png";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Check from "@material-ui/icons/Check";
import Phone from "@material-ui/icons/Phone";
import Home from "@material-ui/icons/Home";
import Public from "@material-ui/icons/Public";
import LocationCity from "@material-ui/icons/LocationCity";
import List from "@material-ui/icons/List";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import LocationOn from "@material-ui/icons/LocationOn";
import Web from "@material-ui/icons/Web";
import SpeakerPhone from "@material-ui/icons/SpeakerPhone";

import { setAuthCookie } from '../utils/cookies';

class CompleteRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardAnimaton: "cardHidden",
            gender: 'male',
            loading: false,
            success: undefined,
            msg: undefined
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.renderMessages = this.renderMessages.bind(this);
    }

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            () => {
                this.setState({ cardAnimaton: "" });
            },
            700
        );
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            gender: event.target.value
        })
    }

    submit(event) {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const data = new FormData(event.target);
        axios.post('http://localhost:2017/rest/verify', data)
            .then((response) => {
                console.log(response);
                if (response.data) {
                    this.setState({
                        loading: false,
                        success: response.data.success
                    }, () => {
                        if (response.data.msg === undefined) {
                            setAuthCookie(response.data.token);
                            window.location.href = "/";
                        } else {
                            console.log('message', response.data.msg)
                            this.setState({
                                success: false,
                                loading: false,
                                msg: response.data.msg
                            })
                        }
                    });
                }
            })
            .catch((error) => {
                this.setState({
                    success: false,
                    loading: false
                })
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
        if (this.state.success === false) {
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

    renderDistilleryFields(classes) {
        if (this.props.userType !== 3) return null;
        return (
            <React.Fragment>
                <CustomInput
                    labelText="VAT Number"
                    id="last"
                    formControlProps={{
                        fullWidth: true,
                        required: true,
                    }}
                    inputProps={{
                        type: "text",
                        name: "vat_number",
                        endAdornment: (
                            <InputAdornment position="end">
                                <AccountBalanceWallet className={classes.inputIconsColor} />
                            </InputAdornment>
                        )
                    }}
                />
                <CustomInput
                    labelText="Shop Location"
                    id="last"
                    formControlProps={{
                        fullWidth: true,
                        required: true,
                    }}
                    inputProps={{
                        type: "text",
                        name: "shop_location",
                        endAdornment: (
                            <InputAdornment position="end">
                                <LocationOn className={classes.inputIconsColor} />
                            </InputAdornment>
                        )
                    }}
                />
                <CustomInput
                    labelText="Web Address"
                    id="last"
                    formControlProps={{
                        fullWidth: true,
                    }}
                    inputProps={{
                        type: "text",
                        name: "vat_number",
                        endAdornment: (
                            <InputAdornment position="end">
                                <Web className={classes.inputIconsColor} />
                            </InputAdornment>
                        )
                    }}
                />
                <CustomInput
                    labelText="Fax"
                    id="last"
                    formControlProps={{
                        fullWidth: true,
                        required: true,
                    }}
                    inputProps={{
                        type: "text",
                        name: "fax",
                        endAdornment: (
                            <InputAdornment position="end">
                                <SpeakerPhone className={classes.inputIconsColor} />
                            </InputAdornment>
                        )
                    }}
                />
            </React.Fragment>
        )
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
                                        <p style={{ marginTop: 20, color: '#525252' }}>To complete Registration, please enter the following informations:</p>
                                        <CustomInput
                                            labelText="Address"
                                            id="last"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "address",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Home className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Phone Number"
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                name: "phone_number",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Phone className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Country"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "country",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Public className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="City"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "city",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <LocationCity className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Zip Code"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true,
                                            }}
                                            inputProps={{
                                                type: "text",
                                                name: "zip_code",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <List className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        {this.renderDistilleryFields(classes)}
                                        <Select
                                            value={this.state.gender}
                                            onChange={this.handleChange}
                                            input={<Input name="gender" id="name-disabled" />}
                                            style={{ width: '100%', marginTop: 20 }}
                                            name="gender"
                                        >
                                            <MenuItem value={'male'}>Male</MenuItem>
                                            <MenuItem value={'female'}>Female</MenuItem>
                                        </Select>
                                        <input type="hidden" name="id" value={this.props.token} />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button color="primary" round type="submit" disabled={this.state.loading}>
                                            complete
                                        </Button>
                                        {this.state.loading ? <CircularProgress size={24} style={{
                                            color: '#ff9800'
                                        }} /> : null}
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

export default withStyles(signupPageStyle)(CompleteRegistration);
