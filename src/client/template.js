import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

class Wall extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        console.log('props', props)

    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <GridContainer justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                </GridItem>
            </GridContainer>
        );
    }
}


export default withStyles(loginPageStyle)(Wall);
