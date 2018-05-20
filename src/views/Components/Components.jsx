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
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import SectionLogin from "./Sections/SectionLogin.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  componentDidMount(){
    // console.log('localstorage', localStorage.getItem('a'), typeof localStorage.getItem('a'));
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem>
           <SectionLogin />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
