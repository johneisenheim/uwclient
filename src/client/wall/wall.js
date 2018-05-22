import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import Upbar from '../upbar/upbar';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import SharePost from '../share-post/share-post';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Query } from "react-apollo";

const GET_POST = gql`
    {
        getPosts (title:"ciao"){
            title
        }
    }
`;

class Wall extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        console.log('props', props)
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <React.Fragment>
                <Upbar />
                <GridContainer justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: '100%', marginTop: '85px' }}>
                    <GridItem xs={12} sm={12} md={8} lg={5}>
                        <SharePost />
                        <Query query={GET_POST} >
                            {({ loading, error, data }) => {
                                if (loading) return "Loading...";
                                if (error) return `Error! ${error.message}`;
                                console.log('data', data);
                                return (
                                    <p>iiiiii</p>
                                );
                            }}
                        </Query>
                    </GridItem>
                </GridContainer>
            </React.Fragment>
        );
    }
}


// const _Wall = withStyles(loginPageStyle)(Wall);
// export default graphql(gql`
//   query Post {
//     todos {
//       id
//       text
//     }
//   }
// `)(_Wall);
export default withStyles(loginPageStyle)(Wall);