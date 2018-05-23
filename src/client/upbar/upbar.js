import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from 'components/Header/Header.jsx';
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import profileImage from "assets/img/faces/christian.jpg";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "components/CustomButtons/IconButton.jsx";
import InboxIcon from '@material-ui/icons/Inbox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FeedsIcon from '@material-ui/icons/RssFeed';
import Tooltip from '@material-ui/core/Tooltip';
import SignoutModal from '../components/signout-modal';

const navbarsStyle = theme => ({
    section: {
        padding: "70px 0",
        paddingTop: "0"
    },
    navbar: {
        marginBottom: "-20px",
        zIndex: "100",
        position: "relative",
        overflow: "hidden",
        "& header": {
            borderRadius: "0"
        },
        boxShadow: '0 0px 3px 1px rgba(0,0,0,0.10)'
    },
    navigation: {
        backgroundPosition: "center center",
        backgroundSize: "cover",
        marginTop: "0",
    },
    formControl: {
        margin: "0 !important",
        paddingBottom: "0"
    },
    inputRootCustomClasses: {
        margin: "0!important"
    },
    searchIcon: {
        width: "20px",
        height: "20px",
        color: "inherit"
    },
    img: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        boxShadow: '0 0px 3px 1px rgba(0,0,0,0.10)'
    },
    imageDropdownButton: {
        padding: "0px",
        top: "4px",
        borderRadius: "50%",
        marginLeft: "5px"
    },
    dropdownLink: {
        "&,&:hover,&:focus": {
            color: "inherit",
            textDecoration: "none"
        },
        width: '100%',
        color: 'green'
    },
    bar: {
        background: '#FFFFFF',
        border: 0,
        padding: '0 30px',
        boxShadow: '0 0px 3px 1px rgba(0,0,0,0.10)'
    },
    iconButton: {
        marginRight: 20,
        width: 40,
        height: 40
    },
    icon: {
        fill: '#CCCCCC',
        width: 30,
        height: 30
    },
    iconOn: {
        fill: '#ff9800',
        width: 30,
        height: 30
    }
});

// rightLinks={
//     
//     />

class Upbar extends React.Component {
    state = {
        modal: false
    }
    constructor(props) {
        super(props);
        this.signout = this.signout.bind(this);
        this.updateModalStatus = this.updateModalStatus.bind(this);
    }

    signout() {
        this.setState({
            modal: true
        });
        // this.modal.handleClickOpen();
    }

    updateModalStatus(modal) {
        this.setState({
            modal
        })
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <AppBar position="fixed" className={classes.bar}>
                <Toolbar>
                    <div style={{ width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Tooltip id="tooltip-icon" title="News">
                            <IconButton color="transparent" className={classes.iconButton} onClick={ () => window.location.href = '/'}>
                                <FeedsIcon className={window.location.pathname === '/' ? classes.iconOn : classes.icon} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip id="tooltip-icon" title="Inbox">
                            <IconButton color="transparent" className={classes.iconButton}>
                                <InboxIcon className={classes.icon} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip id="tooltip-icon" title="Notifications">
                            <IconButton color="transparent" className={classes.iconButton}>
                                <NotificationsIcon className={classes.icon} alt="Inbox" />
                            </IconButton>
                        </Tooltip>
                        <CustomDropdown
                            left
                            caret={false}
                            hoverColor="primary"
                            buttonText={
                                <img
                                    src={profileImage}
                                    className={classes.img}
                                    alt="profile"
                                />
                            }
                            buttonProps={{
                                className:
                                    classes.navLink + " " + classes.imageDropdownButton,
                                color: "transparent"
                            }}
                            dropdownList={[
                                <Link to="/profile" className={classes.dropdownLink}>Me</Link>,
                                "Settings",
                                { divider: true },
                                <span onClick={() => this.signout()}>Sign out</span>
                            ]}
                        />
                    </div>
                </Toolbar>
                <SignoutModal isModalOpened={this.state.modal} updateModalStatus={this.updateModalStatus} />
            </AppBar>
        );
    }
}


export default withStyles(navbarsStyle)(Upbar);
